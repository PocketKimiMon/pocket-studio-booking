# SEO notes — unified Pocket Studio site (2026-07-29)

Source: `/mnt/agents/output/seo/audit.md` (full audit of app/index.html, app/book.html,
app/mobile.html, app/studio.html). This file is the short, actionable version for the merged
TanStack Start site.

## What shipped in the unified build

- **Canonical URLs** — `headFor()` in `src/lib/seo.ts` emits
  `<link rel="canonical">` for every route, built from `SITE_URL =
  "https://pocketstudio.biz"`.
- **Unique titles/descriptions per route** — every route (`/`, `/book`, `/studio`,
  `/classic`, `/mobile`, `/blog`, `/blog/:slug`, `/services/:slug`, `/privacy`, `/terms`)
  has its own `<title>` and meta description (audit findings T1/T4). Title format:
  `Page-specific hook · Pocket Studio`.
- **OG/Twitter cards** — `og:type`, `og:site_name`, `og:url`, `og:title`,
  `og:description`, `og:image` (absolute, 1200×630), `twitter:card =
  summary_large_image` on every route. Blog posts use `og:type = article`.
- **JSON-LD** — `HairSalon` schema (name, phone, email, address-locality,
  opening hours, areaServed, founder, offer catalog) on `/`; `Blog` + per-post
  `BlogPosting` on `/blog` and `/blog/:slug` (audit T6). Services in JSON-LD carry
  **no prices** — everything is priced at the chair.
- **`public/robots.txt`** — allow all + sitemap reference.
- **`public/sitemap.xml`** — all static routes + 4 blog posts + 5 service pages with
  lastmod dates (audit T7).

## Deliberate deviations from the audit's reference copy

- JSON-LD prices mirror `src/lib/services.ts` ($45 buzz / $65 short / $85 long /
  $35 consult / $120+ color, priceRange "$35–$120+") — the audit example used the
  older 2-service menu; the merged site has 5 bookable services.
- `/book` uses its own title ("Book a Cut or Color — Seattle House Calls") instead of
  duplicating the home title (audit T1 duplicate-title fix).
- The old static `app/` HTML files had hard-coded titles like "Pocket Studio — Book
  Your Cut or Color Online"; those pages are superseded by the TanStack routes and
  their metadata now lives in `src/lib/seo.ts` only.

## Quick wins still open (from audit §6)

1. **OG image asset** — the only share image in the repo today is
   `public/og-image.jpg`. Either move/copy it to `public/images/og-image.jpg`
   (1200×630) so `OG_IMAGE` in `src/lib/seo.ts` resolves, or generate a branded
   1200×630 card and put it at that path. Kimi was asked for brand assets; reuse
   whatever lands in `public/images/`.
2. **LocalBusiness → HairSalon upgrade on any remaining static mirrors** — the old
   `public/classic/index.html` intentionally keeps its legacy markup; don't backport.
3. **Google Business Profile / NAP consistency** — off-site task noted in audit;
   hours must match `src/lib/seo.ts` openingHoursSpecification (Thu 11–18, Fri 12–17,
   Sat–Sun 12–20).

## House rules for future edits

- Don't hard-code titles/descriptions in route files — extend `src/lib/seo.ts`
  (`STATIC_ROUTES`, or the dynamic resolvers for `/blog/:slug` and `/services/:slug`).
- Keep business facts (phone, email, hours, Rudy's line) byte-identical to the final
  copy doc; they're locked.
- If the production domain changes, update `SITE_URL` in `src/lib/seo.ts`,
  `public/robots.txt`, and `public/sitemap.xml` in the same commit.
