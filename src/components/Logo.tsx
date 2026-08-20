/**
 * The DTP mark, inlined so it inherits `currentColor` and costs no extra
 * request. Geometry is the live layer of the source Inkscape file, with the
 * viewBox tightened to the mark's own bounding box for honest optical sizing.
 *
 * The wedge and the two chevrons were one `path` with three subpaths; they are
 * split here — same coordinates, resolved to absolute — so the intro can stagger
 * them individually. Order is assembly order: wedge, chevrons, square, disc.
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="16.4285 55.0612 261.2 183.889"
      fill="currentColor"
      role="img"
      aria-label="Dream Team Productions"
      className={className}
    >
      <path d="M16.4285 55.0612v183.8885l81.7185-45.9721 42.8031-24.0792v-43.7854l-42.8031-24.0791z" />
      <path d="M140.9501 125.1127 179.8661 147.0055V55.0612h-38.916z" />
      <path d="M179.8661 147.0055 140.9501 168.8982v70.0515h38.916z" />
      <rect x="96.2127" y="55.0613" width="38.9165" height="38.9165" />
      <circle cx="231.6559" cy="101.0334" r="45.9721" />
    </svg>
  );
}
