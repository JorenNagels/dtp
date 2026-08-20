#!/usr/bin/env bash
#
# Turns the raw photos in img/ into the web assets in public/images/.
#
# Run this after adding or replacing anything in img/. It is a one-off tool, not
# part of `npm run build`, and deliberately does NOT add a dependency to
# package.json — sharp pulls in libvips, which has a history of image-parsing
# CVEs, and there is no reason to carry that in the project just to resize a
# dozen photos. It is fetched on demand by npx instead.
#
#   ./scripts/prepare-images.sh
#
# Photos stay in full colour — they are the only colour on an otherwise
# monochrome site, which is what makes them read as documentary rather than
# decoration. Originals stay in img/, so this is always reproducible.
#
set -euo pipefail
cd "$(dirname "$0")/.."

SHARP="npx --yes sharp-cli@5"
SRC=img
OUT=public/images
GALLERY_HEIGHT=700   # 2x a 350px-tall filmstrip tile
QUALITY=80

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

# Resize, fit inside the bounding box, never enlarge past the source.
encode() { # <src> <dest> <resize-args...>
  local src=$1 dest=$2; shift 2
  $SHARP -i "$src" -o "$dest" -f webp -q $QUALITY resize "$@" \
    --fit inside --withoutEnlargement >/dev/null
}

mkdir -p "$OUT/work"

# --- founders -------------------------------------------------------------
# Cropped to 1024x720 first: the source has a lot of dead paving below their
# feet that pulls the eye away from the subjects.
echo "founders"
$SHARP -i "$SRC/image (13).webp" -o "$tmp/founders-crop.webp" -f webp -q 92 \
  extract 0 0 1024 720 >/dev/null
encode "$tmp/founders-crop.webp" "$OUT/founders.webp"  1000 9999
encode "$tmp/founders-crop.webp" "$OUT/founders-620.webp" 620 9999

# --- gallery --------------------------------------------------------------
# Curated from the 17 originals. Dropped as redundant: image.webp (a looser
# framing of image (1)), and two of the three PXL mixer frames.
gallery=(
  "image (1).webp:camera-monitor"
  "image (6).webp:boxnation-gallery"
  "PXL_20251019_002950731.PORTRAIT.webp:mixer-wide"
  "image (4).webp:gallery-crew"
  "image (2).webp:gallery-arena"
  "image (10).webp:vision-mixer"
  "image (5).webp:boxnation-desk"
  "image (9).webp:camera-operator"
  "image (11).webp:stage-lineup"
  "image (12).webp:group-on-stage"
  "image (8).webp:stage-showcase"
  "image (3).webp:stage-interview"
  "image (7).webp:stage-panel"
)
for entry in "${gallery[@]}"; do
  src="${entry%%:*}"; name="${entry##*:}"
  echo "  $name"
  encode "$SRC/$src" "$OUT/work/$name.webp" 9999 $GALLERY_HEIGHT
done

echo
echo "Wrote:"
du -sh "$OUT"
echo "Update src/lib/photos.ts if you added, removed or renamed anything."
