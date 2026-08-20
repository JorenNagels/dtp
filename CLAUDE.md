# CLAUDE.md

Context for AI agents working on this repo. `README.md` is the human-oriented version.

## What this is

The portfolio site for **Dream Team Productions** — a UK live-event broadcast company
founded by Elliot Barham and Chris Sunderland, working across boxing, MMA/Muay Thai and
competitive gaming. Two routes: a curated overview at `/` and the complete credit list at
`/work`. Next.js, exported to static HTML and served from S3 behind CloudFront at
`dreamteamproductions.co.uk`.

Sister site: `../portfolio-elliot/` — the talent portfolio for Elliot Barham, live at
`elliot.dreamteamproductions.co.uk` on **GitHub Pages**. Shared visual language, separate
codebase, separate deploy. Don't couple them.

`../dreamteam-production/` is an abandoned earlier attempt (placeholder content, cyan
accent, no git remote). Ignore it; don't copy from it.

## Architecture

- **Next.js 16 App Router**, `output: 'export'`. Nothing that needs a Node runtime: no API
  routes, no server actions, no middleware, no `revalidate`, no dynamic params without
  `generateStaticParams`. A route handler that emits a file (`sitemap.ts`) needs
  `export const dynamic = 'force-static'`.
- **Server components by default.** Two exceptions: `FadeIn.tsx` (IntersectionObserver) and
  `WorkArchive.tsx` (filter state).
- **No raster images and no image pipeline.** The design is typographic; the only asset is
  the logo, inlined as JSX in `Logo.tsx`. `next-image-export-optimizer` was removed — it was
  unused and was the sole source of two high-severity `sharp`/libvips advisories. If
  photography is added later, either re-add it or use plain `<img>`; don't reach for
  `next/image` with the default loader, which static export can't serve.
- **Tailwind** with tokens in `tailwind.config.ts`. `white` is `#ececec`, matched to the
  logo's own fill. There is deliberately **no accent colour** — monochrome is the brand.
  Use `border-hairline`, `text-white/45` etc. rather than hex literals.
- **`next/font/google`** self-hosts Bebas Neue + DM Sans at build time. Don't swap in a CDN
  `<link>`; it would break the `font-src 'self'` CSP.

## Where things live

| Path                         | Purpose                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `src/lib/credits.ts`         | **All portfolio data.** One `ProductionSeed` per production, phases inline. Edit here.                        |
| `src/lib/derive.ts`          | Pure functions over the seeds: `productions`, `stats`, `productionsByYear`, `filterOptions`, date formatting. |
| `src/lib/data.ts`            | Hand-written copy: capabilities, team bios, the 12-item `marquee`, `site` constants.                          |
| `src/app/page.tsx`           | Homepage section order.                                                                                       |
| `src/app/work/page.tsx`      | Archive; formats labels at build time and hands them to the client filter.                                    |
| `src/components/Section.tsx` | The eyebrow → heading → lead → content rhythm every section uses.                                             |
| `src/components/Logo.tsx`    | The mark, inlined so it inherits `currentColor`.                                                              |
| `infra/certificate.yml`      | ACM cert (us-east-1). Separate stack — see below.                                                             |
| `infra/site.yml`             | S3 + OAC + CloudFront + CloudFront Function + GitHub OIDC deploy role.                                        |

### Never hardcode a statistic

`stats` in `derive.ts` computes production/venue/country/client counts from the data. Copy
interpolates those values — see `Hero.tsx` and `work/page.tsx`. If you add credits the
numbers follow automatically; if you hardcode one it will silently rot.

## Data conventions

- Group by production, not by call sheet: a five-day fight week is **one** seed with five
  `phases`. `derive.ts` renders the phases as chips. This is the site's main selling point,
  so don't flatten it.
- Same event at two venues (launch press conference elsewhere, fight week at the arena) =
  two seeds. Grouping is by seed, so they stay distinct.
- `via` records which company the work was contracted through. Most credits are
  `Braincup Media`; the attribution footnote in `data.ts` states this on the page. Keep it.
- Anything ambiguous gets `unresolved: '<why>'` and is excluded from the render rather than
  guessed at. There's a summary block at the top of `credits.ts`; keep it current.

## Progressive enhancement — don't regress this

`.fade-up` starts at `opacity: 0`, so a scroll-reveal that depends on JS would hide the whole
page from anyone without it. The rule is scoped to `.js .fade-up`, and an inline script in
`layout.tsx` adds `.js` to `<html>` before first paint. **If you touch either, verify with
JavaScript disabled** — the sibling site has this bug; this one shouldn't.

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --disable-javascript --window-size=1440,2000 --screenshot=/tmp/nojs.png http://localhost:4173/
```

## Commands

```bash
npm run dev                # localhost:3000
npm run build              # static export to out/ (runs tsc as part of the build)
npm run typecheck          # tsc --noEmit on its own
npx serve out -l 4173      # verify trailing-slash routing against flat files
npm run format             # prettier

# `next lint` was removed in Next 16 — there is deliberately no lint script.
```

## Deployment

`main` → GitHub Actions → `aws s3 sync` → CloudFront invalidation. Two sync passes: hashed
assets get `max-age=31536000,immutable`, documents get `max-age=0,must-revalidate`.
`--delete` is scoped to the document pass on purpose (see the comment in the workflow).

Repository variables the workflow needs: `AWS_DEPLOY_ROLE_ARN`, `AWS_S3_BUCKET`,
`AWS_CLOUDFRONT_DISTRIBUTION_ID` — all three are stack outputs.

Two infra facts worth knowing before changing anything:

1. **The S3 origin is private (OAC), not a website endpoint**, so it does not serve index
   documents. `IndexRewriteFunction` in `site.yml` maps `/work/` → `/work/index.html` and
   301s `/work` → `/work/`. Directory URLs break without it. A private origin also returns
   **403** rather than 404 for a missing key, which is why both codes map to `/404.html`.
2. **The certificate is its own stack.** ACM DNS validation blocks stack creation until the
   CNAMEs exist at the registrar, and you can't read them until the resource exists.

DNS is at 20i (`ns1-4.stackdns.com`), not Route 53. The apex needs an ANAME/ALIAS —
a CNAME is invalid at a zone apex. Leave the `elliot.` records alone; that subdomain points
at GitHub Pages.

## Things to avoid

- Hardcoding counts, dates or client lists that `derive.ts` already computes.
- Adding an accent colour, a second display font, or stock photography.
- `noindex` anywhere. The sibling site is deliberately de-indexed; this one must be
  crawlable. The deploy workflow fails the build if `noindex` appears in `out/index.html`.
- Backwards-compat shims or config abstractions. Two pages, one deploy target — stay concrete.
- A CMS, MDX, or a data layer. Content edits go in `credits.ts` and `data.ts`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
