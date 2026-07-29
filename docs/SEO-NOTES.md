# SEO Notes — Pocket Studio unified site

Owned/shipped by the SEO agent: `src/lib/seo.ts` (`headFor(route)`, `SITE_URL`, `SITE_NAME`, `OG_IMAGE`),
`public/robots.txt`, `public/sitemap.xml`. Everything below is **left for the integrator / future work**
because it lives in files outside that ownership (routes, components, assets, hosting).

## Integrator action items (blocking or near-blocking)

1. **OG image asset path mismatch.** The contract uses `og:image = /images/og-image.jpg`
   (`OG_IMAGE` in `src/lib/seo.ts`), but the only share image in the repo today is
   `public/og-image.jpg`. Either move/copy it to `public/images/og-image.jpg` (1200×630) or
   change the `OG_IMAGE` constant. Scrapers reject missing/relative images, so this must be
   resolved before launch.
2. **Root route still has its own hardcoded head** in `src/routes/__root.tsx` (its own `SITE_URL`,
   `DEFAULT_DESC`, `SALON_JSONLD`, meta/link/script arrays). It now duplicates `headFor('/')` and
   will drift. Switch `__root.tsx`'s `head: () => ({ ...headFor('/'), links: [appCss, icon, fonts...] })`
   (keep the stylesheet/font links; take meta/canonical/JSON-LD from `headFor`). The HairSalon block
   in `seo.ts` already supersedes the inline one (adds `@id`, `currenciesAccepted`, `alternateName`,
   `pronouns`, and `areaServed` as typed Places).
3. **Confirm the production domain.** `SITE_URL = https://pocketstudio.biz` was taken from the
   existing repo files (prior robots/sitemap/`__root.tsx`). The audit used the placeholder
   `https://www.pocketstudiohair.com`. If the real domain differs, change the single `SITE_URL`
   constant in `src/lib/seo.ts` **and** the domains in `public/robots.txt` + `public/sitemap.xml`.
4. **robots.txt change:** the previous file had `Disallow: /classic/`; the new one allows all per
   the unified-site plan (`/classic` is a listed route and in the sitemap). Re-add a disallow if
   `/classic` should stay out of the index.
5. **Wire `headFor` into every route** (`head: () => headFor('<route>')`; dynamic routes pass the
   concrete path, e.g. `` headFor(`/blog/${slug}`) ``) and remove per-route hardcoded heads
   (`book.tsx`, `mobile.tsx`, `studio.tsx` currently have their own).
6. **Submit `sitemap.xml` in Search Console** after deploy; verify Rich Results Test shows
   HairSalon on `/`, Blog on `/blog`, BlogPosting on each dispatch; check opengraph.xyz previews.

## Audit quick wins NOT doable in my files

- **Keyword-bearing H1s (audit O1):** add `sr-only` keyword lines inside the H1s on Home,
  Services/booking, Studio, etc. (page components — frontend agent).
- **Neighborhood service-area copy (audit L3):** the `areaServed` list is in the HairSalon JSON-LD;
  the same neighborhoods (Capitol Hill, Ballard, Fremont, Queen Anne, Wallingford, Green Lake,
  West Seattle, Columbia City) should also appear in visible page copy and on the GBP listing.
- **FAQ section + `FAQPage` schema (audit C4):** needs a visible Q&A UI (policies rephrased as
  questions) before the schema is allowed by Google. UI first, then JSON-LD can be added to
  `headFor('/book')` or the relevant route.
- **Blog post internal links (audit O4):** dispatch bodies are plain strings; a link-aware renderer
  could link "you pick a slot" → `/book` etc. (content/frontend).
- **Per-post `og:image`:** unused `blog-cover-*.jpg` assets could give each dispatch a distinct
  link preview (would extend `blogPostingJsonLd` + meta in `seo.ts` once assets are confirmed).
- **Gallery/work image alts (audit O3):** richer, visual-descriptive alts for image search.
- **Hosting (audit T9/T5):** force HTTPS, pick one host variant and 301 the other, return real
  404 status for unknown paths, cache headers for hashed assets.
- **GBP / local (audit L1/L2):** create the Service-Area Business profile (no address), mirror
  hours (thu 11–6, fri 12–5, sat–sun 12–8, closed mon–wed), phone 425-918-2029, booking URL → `/book`.
- **`/book` indexation:** the audit's SPA-era advice was to `noindex` booking utility pages; the
  unified plan lists `/book` in the sitemap, so it currently ships `index, follow`. Revisit if
  query-param booking URLs (`/book?service=...`) start getting indexed — canonical is
  self-referential to `/book`, which mitigates this.

## Data-drift warnings

- **JSON-LD prices mirror `src/lib/services.ts`** ($45 buzz / $65 short / $85 long / $35 consult /
  $120+ color, `priceRange "$35–$120+"`) — not the older prices in the audit's reference snippet.
  Update `HAIR_SALON_JSONLD` in `seo.ts` whenever `services.ts` prices change.
- **Hours** in JSON-LD (thu 11:00–18:00, fri 12:00–17:00, sat–sun 12:00–20:00) come from the
  locked booking-page copy; keep GBP, site copy, and schema in sync on any change.
- **Sitemap `lastmod`** is static (2026-07-29); bump it when content changes, or generate the
  sitemap at build time from `posts.ts`/`services.ts` later.
