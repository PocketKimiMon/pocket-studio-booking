# SEO Audit — Pocket Studio (pocket studio · seattle house-call hair artist)

**Audited:** the React 19 + Vite SPA source at `/mnt/agents/output/app` (react-router 7 `BrowserRouter`, no SSR).
**Method:** static source audit per `/app/.agents/skills/seo-audit/SKILL.md` (crawlability → technical → on-page → content → local). No live URL / Search Console / analytics access, so indexation, Core Web Vitals, and GBP state are flagged as "verify" rather than measured.
**Domain note:** no production domain appears anywhere in the codebase. All snippets below use `https://www.pocketstudiohair.com` as a placeholder — **find/replace it with the real domain before shipping.**

---

## 1. Executive summary

The site has genuinely strong raw material: real business data centralized in `src/data/studio.ts`, real hours/policies/contact info, a personal "the artist" page, honest copy with a distinct voice, clean internal linking, and correct (often good) image alt handling. **But the entire SEO surface is missing.** Every route on the site serves the same `<title>Pocket Studio</title>` and one static meta description, there is no structured data at all, no robots.txt, no sitemap, no canonicals, no favicon, and — because it's a client-rendered SPA with no prerendering — crawlers and every social/messaging bot initially see an empty `<div id="root">`. For a solo local business whose #1 acquisition moment is "i'm not at Rudy's anymore, this is where you book now," the site is currently close to invisible in search and looks broken when shared as a link (per-page OG previews can't exist; even the one global `og:image` is a relative URL, which scrapers reject).

### Score by category

| Category | Score | One-liner |
|---|---|---|
| Technical | **3/10** | No robots/sitemap/canonical/favicon; SPA shell with no prerender; soft-404 behavior; duplicate static files. |
| On-page | **4/10** | One global title/description for all 10+ routes; H1s are voice-first wordplay with zero keywords; alts are good. |
| Content | **6/10** | Real, differentiated, E-E-A-T-friendly content; thin local/neighborhood coverage; unused blog covers; policy-data drift risk. |
| Local | **3/10** | NAP exists in footer (good), but no LocalBusiness schema, no areaServed, no neighborhood keywords, no GBP guidance implemented. |
| Structured data | **1/10** | Nothing — no JSON-LD of any kind on any page. |
| Performance hints | **5/10** | No WebP/srcset, 1.3MB autoplay hero video, ~2.5MB of unused images shipped in `public/`, render-blocking font CSS; lazy loading + preconnect + aspect-ratio boxes are done right. |

### Top 5 priorities

1. **Per-route titles/descriptions + head management** — every page currently shares `index.html`'s single title (evidence: `index.html:6-7`, zero `document.title`/Helmet usage anywhere in `src/`).
2. **Add `HairSalon`/`LocalBusiness` JSON-LD** with the real NAP, hours, and service area — the single highest-leverage local-SEO change.
3. **Ship `robots.txt` + `sitemap.xml`** in `public/` (neither exists) and wire canonicals.
4. **SPA crawlability**: add prerendering (or react-router framework-mode SSR); at minimum fix the relative `og:image` (`index.html:10`) and add server rewrite rules so 404s return real 404 status.
5. **Keyword-bearing H1s** — Home's H1 is literally "POCKET STUDIO" (`Home.tsx:71-74`), Services is "the menu" (`Services.tsx:33`), Gallery is "the vibe" (`Gallery.tsx:106`); keep the voice, add the keywords.

---

## 2. Technical SEO findings

### T1 — No per-route title, meta description, or canonical (SPA head is static)

- **Issue:** `index.html` is the only `<head>` that exists. Its `<title>Pocket Studio</title>` and one meta description are served for all 10+ routes (`/`, `/services`, `/artist`, `/gallery`, `/blog`, `/blog/:slug`, `/booking`, `/my-bookings`, `/contact`, 404). Nothing in `src/` ever updates the head.
- **Evidence:** `index.html:6-7`; grep for `document.title` / `react-helmet` / `Helmet` across `src/` returns zero hits; `src/main.tsx` mounts `BrowserRouter` with no head manager.
- **Impact:** **High.** Duplicate titles/descriptions across every page → Google picks one page to rank (usually wrong for the query), SERP snippets can't target "haircut seattle house call" vs "curly cut seattle" per page, and CTR suffers site-wide.
- **Fix:** add a tiny head hook (no dependency needed) and call it in each page component.

Create `src/hooks/useSeo.ts`:

```tsx
import { useEffect } from 'react';

const SITE = 'Pocket Studio';
const BASE = 'https://www.pocketstudiohair.com'; // TODO: real domain

interface SeoProps {
  /** Page-specific title; brand is appended automatically. */
  title: string;
  description: string;
  /** Route path for canonical + og:url, e.g. '/services'. */
  path: string;
  /** noindex for utility pages (booking, my-bookings, 404). */
  noindex?: boolean;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function useSeo({ title, description, path, noindex = false }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} · ${SITE}`;
    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', `${BASE}${path}`);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = `${BASE}${path}`;
  }, [title, description, path, noindex]);
}
```

Then at the top of each page component:

```tsx
// src/pages/Home.tsx
useSeo({
  title: 'House-Call Haircuts & Color in Seattle',
  description:
    'Book cuts + color directly with MyKey, a solo hair artist in Seattle, WA. House calls only — $25 deposit holds your slot. Former Rudy\'s clients: this is where you book now.',
  path: '/',
});

// src/pages/Services.tsx
useSeo({
  title: 'Services & Pricing — Cuts from $50, Color by Consult',
  description:
    'Buzz cuts $50, tapers/fades $60, long cuts $100, curly cuts $120, color priced at the chair. House calls across Seattle. $25 deposit, real calendar, no phone tag.',
  path: '/services',
});

// src/pages/Artist.tsx
useSeo({
  title: 'Meet MyKey — Solo Hair Artist (they/them)',
  description:
    'One artist, one calendar. MyKey left Rudy\'s Barbershop and now books directly — cuts + color for all textures, house calls in Seattle, WA.',
  path: '/artist',
});

// src/pages/Gallery.tsx
useSeo({
  title: 'Style References — Cuts, Curls & Color',
  description:
    'Balayage, glass bobs, full-volume curls, event hair — style references from a Seattle house-call hair artist. Bring the pic; we adapt it to your hair.',
  path: '/gallery',
});

// src/pages/Blog.tsx
useSeo({
  title: 'Updates — Dispatches from the Chair',
  description:
    'Dated notes from one chair and one brain: house-call updates, the hunt for a new chair, and color-correction stories. Signed, always, — mykey.',
  path: '/blog',
});

// src/pages/BlogPost.tsx (after `post` resolves)
useSeo({
  title: post ? post.title : 'dispatch not found',
  description: post ? post.excerpt : 'that dispatch doesn\'t exist — all updates live on the updates page.',
  path: `/blog/${slug}`,
  noindex: !post,
});

// src/pages/Contact.tsx
useSeo({
  title: 'Contact — Text or Email, No Front Desk',
  description:
    'Text or call 425-918-2029, or email mykeypocket@icloud.com. House calls across Seattle, thu–sun. Emergency requests welcome.',
  path: '/contact',
});

// src/pages/Booking.tsx
useSeo({
  title: 'Book Your Chair',
  description: 'Pick a service, a day, and a time — a $25 deposit holds your slot.',
  path: '/booking',
  noindex: true, // utility page: keep out of the index
});

// src/pages/MyBookings.tsx
useSeo({
  title: 'My Bookings',
  description: 'Look up, reschedule, or cancel your Pocket Studio appointment.',
  path: '/my-bookings',
  noindex: true,
});

// src/pages/NotFound.tsx
useSeo({
  title: 'Page Not Found',
  description: 'this page isn\'t on the calendar. the booking link, however, always is.',
  path: '/404',
  noindex: true,
});
```

> Note: the hook only helps crawlers that execute JavaScript (Google does; Bing partially; social scrapers mostly **don't**). Pair with T5 (prerendering) for the full fix.

### T2 — No robots.txt

- **Issue:** `public/robots.txt` does not exist → nothing deployed at `/robots.txt`.
- **Evidence:** `ls public/robots.txt` → "No such file or directory"; `public/` contains only media, `brand/`, `privacy.html`, `terms.html`.
- **Impact:** Medium. Crawlers will still crawl, but you can't point them at the sitemap, and utility routes (`/booking`, `/my-bookings`) will be crawled wastefully.
- **Fix:** create `public/robots.txt`:

```txt
User-agent: *
Allow: /
Disallow: /booking
Disallow: /my-bookings

Sitemap: https://www.pocketstudiohair.com/sitemap.xml
```

### T3 — No XML sitemap

- **Issue:** `public/sitemap.xml` does not exist.
- **Evidence:** `ls public/sitemap.xml` → "No such file or directory".
- **Impact:** Medium. With ~10 routes Google will find them via links eventually, but a sitemap speeds discovery of the blog posts and gives you lastmod signals. Submit in Search Console after deploy.
- **Fix:** create `public/sitemap.xml` (update `<lastmod>` whenever `src/data/studio.ts` `UPDATES` changes):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.pocketstudiohair.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.pocketstudiohair.com/services</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.pocketstudiohair.com/artist</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.pocketstudiohair.com/gallery</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.pocketstudiohair.com/blog</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.pocketstudiohair.com/blog/house-calls-and-the-hunt</loc><lastmod>2026-07-14</lastmod></url>
  <url><loc>https://www.pocketstudiohair.com/blog/not-at-rudys-anymore</loc><lastmod>2026-07-28</lastmod></url>
  <url><loc>https://www.pocketstudiohair.com/blog/the-six-hour-color-correction</loc><lastmod>2026-08-09</lastmod></url>
  <url><loc>https://www.pocketstudiohair.com/contact</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
</urlset>
```

(Exclude `/booking` and `/my-bookings` — they're noindex utility pages.)

### T4 — Incomplete/absent head tags: canonical, og:url, og:type, Twitter cards, favicon; relative og:image

- **Issue:** `index.html` has `og:title`, `og:description`, `og:image` only. Missing: `canonical`, `og:url`, `og:type`, `og:site_name`, `og:image:width/height`, all `twitter:*` tags, and any favicon. Worse, `og:image` content is `/hero-poster.jpg` — a **relative URL**, which Facebook/LinkedIn/Slack/iMessage scrapers cannot resolve, so link previews render with no image.
- **Evidence:** `index.html:6-13` (the entire head); grep for `rel="icon"` / `apple-touch` across `index.html` and `public/*.html` → zero hits; no favicon file in `public/`.
- **Impact:** High for a referral-driven business — the "this is where you book now" moment happens in DMs and group chats, and every shared link currently renders preview-less (or not at all off-domain).
- **Fix:** replace the whole `<head>` block in `index.html` (lines 3–14) with:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary (per-route values are overwritten by useSeo; these are the home/defaults) -->
  <title>House-Call Haircuts & Color in Seattle · Pocket Studio</title>
  <meta name="description" content="Book cuts + color directly with MyKey, a solo hair artist in Seattle, WA. House calls only — $25 deposit holds your slot. Former Rudy's clients: this is where you book now.">
  <link rel="canonical" href="https://www.pocketstudiohair.com/">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Pocket Studio">
  <meta property="og:url" content="https://www.pocketstudiohair.com/">
  <meta property="og:title" content="House-Call Haircuts & Color in Seattle · Pocket Studio">
  <meta property="og:description" content="book cuts + color directly. seattle, wa · house calls only.">
  <meta property="og:image" content="https://www.pocketstudiohair.com/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="House-Call Haircuts & Color in Seattle · Pocket Studio">
  <meta name="twitter:description" content="book cuts + color directly. seattle, wa · house calls only.">
  <meta name="twitter:image" content="https://www.pocketstudiohair.com/og-image.jpg">

  <!-- Icons (create these files in public/) -->
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
```

Create a dedicated 1200×630 `public/og-image.jpg` (the wordmark over `/hero-poster.jpg` cropped works), plus `public/favicon.svg` (one of the brand marks, e.g. `public/brand/icons/scissors.svg`, recolored) and a 180×180 `public/apple-touch-icon.png`.

### T5 — SPA with no prerendering: empty initial HTML, soft 404s

- **Issue:** The site ships a shell (`<div id="root"></div>`, `index.html:16`) and renders everything client-side (`src/main.tsx` uses `BrowserRouter`). Consequences:
  1. **Social/chat scrapers don't execute JS** → per-route OG/Twitter tags set by `useSeo` never reach them; every shared link shows the same global preview (at best).
  2. **Non-Google crawlers** (Bing's JS rendering is less reliable; DuckDuckGo/Bing share indexes; many niche crawlers) may index near-empty pages.
  3. **Soft 404s:** unknown URLs return HTTP 200 with the client-rendered `NotFound` component (`App.tsx:28`, `NotFound.tsx`). Google may index thin "lost your chair?" pages and wastes crawl budget.
- **Evidence:** `src/main.tsx:6-10` (`BrowserRouter`), `index.html:16-17`, `App.tsx:28` (`<Route path="*" element={<NotFound />} />`).
- **Impact:** High. This is the structural finding under T1/T4.
- **Fix (choose one):**
  - **Recommended (lowest effort, keeps the SPA):** add `vite-plugin-prerender` (or `vite-prerender-plugin`) and prerender the 9 indexable routes at build time. Each route gets real static HTML with its own title/meta/OG/JSON-LD — fixing T1 and T4 for scrapers in one move:
    ```bash
    npm i -D vite-plugin-prerender
    ```
    ```ts
    // vite.config.ts
    import Prerender from 'vite-plugin-prerender';

    export default defineConfig({
      plugins: [
        react(),
        Prerender({
          staticDir: path.join(__dirname, 'dist'),
          routes: [
            '/', '/services', '/artist', '/gallery', '/blog',
            '/blog/house-calls-and-the-hunt',
            '/blog/not-at-rudys-anymore',
            '/blog/the-six-hour-color-correction',
            '/contact',
          ],
        }),
      ],
    });
    ```
    (Generate the `/blog/:slug` entries from `UPDATES` programmatically so new dispatches prerender automatically.)
  - **Heavier but future-proof:** migrate to react-router's framework mode (SSR) or Astro/Next. Not worth it at this size if prerendering is done.
  - **Either way, fix HTTP semantics at the host:** on Netlify/Vercel/Cloudflare Pages serve the SPA fallback for known routes but return a real `404` status for unknown paths (e.g. a `404.html` that the host serves with status 404 instead of a blanket `/* → /index.html 200` rewrite). With prerendering, each route exists as a real file, so only genuinely unknown paths hit the 404 file.
- **Verify after deploy:** view-source on `/services` should show its own `<title>`; run https://search.google.com/test/rich-results on `/` (renders JS, also validates the T6 schema); paste a link into https://www.opengraph.xyz to confirm scraper-visible tags.

### T6 — No structured data (JSON-LD) anywhere

- **Issue:** zero `application/ld+json` blocks in `index.html` or any component.
- **Evidence:** grep for `ld+json` / `schema.org` across the repo → zero hits. (Per the audit skill: this is a source-level grep, which is reliable here since there's no CMS/plugin that could inject schema.)
- **Impact:** High for local. No rich result eligibility, no reinforcement of NAP, no entity understanding tying "Pocket Studio" → "MyKey" → "Seattle hair artist" → "formerly Rudy's."
- **Fix:** add to `index.html` before `</head>` (it's the global shell; with prerendering per T5, also inject route-specific blocks — `BlogPosting` on each dispatch):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://www.pocketstudiohair.com/#business",
  "name": "Pocket Studio",
  "description": "Solo house-call hair artist in Seattle, WA. Cuts $50–$120, color by consult, priced at the chair. $25 booking deposit.",
  "url": "https://www.pocketstudiohair.com/",
  "telephone": "+1-425-918-2029",
  "email": "mykeypocket@icloud.com",
  "image": "https://www.pocketstudiohair.com/og-image.jpg",
  "priceRange": "$50–$120",
  "currenciesAccepted": "USD",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Seattle",
    "addressRegion": "WA",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Seattle, WA" },
    { "@type": "Place", "name": "Capitol Hill" },
    { "@type": "Place", "name": "Ballard" },
    { "@type": "Place", "name": "Fremont" },
    { "@type": "Place", "name": "Queen Anne" },
    { "@type": "Place", "name": "Wallingford" },
    { "@type": "Place", "name": "Green Lake" },
    { "@type": "Place", "name": "West Seattle" },
    { "@type": "Place", "name": "Columbia City" }
  ],
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "11:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "12:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday", "Sunday"], "opens": "12:00", "closes": "20:00" }
  ],
  "founder": {
    "@type": "Person",
    "name": "MyKey Pocket",
    "alternateName": "MyKey",
    "jobTitle": "Hair artist, solo operator",
    "pronouns": "they/them",
    "worksFor": { "@id": "https://www.pocketstudiohair.com/#business" }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cuts + color",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Buzz Cut" }, "price": "50", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Short Cut" }, "price": "70", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Taper/Fades" }, "price": "60", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Long Cut" }, "price": "100", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Curly Cuts" }, "price": "120", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New-Client Color Consult" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Existing-Client Color Appointment" } }
    ]
  }
}
</script>
```

Hours and prices above are taken from `src/data/studio.ts:172-177` and `:45-131` — keep the JSON-LD in sync when that file changes (better: with T5 prerendering, generate this block from `STUDIO`/`SERVICES` at build time so it can never drift).

For each dispatch page, also inject:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "former Rudy's clients: your chair moved",
  "datePublished": "2026-07-28",
  "author": { "@type": "Person", "name": "MyKey Pocket" },
  "publisher": { "@id": "https://www.pocketstudiohair.com/#business" },
  "mainEntityOfPage": "https://www.pocketstudiohair.com/blog/not-at-rudys-anymore"
}
</script>
```

Validate with the Rich Results Test (it renders JavaScript, so it sees client-injected JSON-LD too — but with T5 prerendering it will be in the static HTML, which is strictly better).

### T7 — Duplicate static files at repo root and in `public/`

- **Issue:** `privacy.html` and `terms.html` exist both at the repo root (`/privacy.html`, `/terms.html`) and in `public/`. Only the `public/` copies are served by Vite; the root copies are dead files that will drift out of sync with the live ones.
- **Evidence:** `ls /mnt/agents/output/app/privacy.html` and `/mnt/agents/output/app/public/privacy.html` both exist (same for `terms.html`).
- **Impact:** Low SEO impact today, but stale legal pages are a trust/E-E-A-T risk if the wrong copy gets deployed later, and `privacy.html`/`terms.html` themselves have no `<title>` targeting or canonical (minor).
- **Fix:** delete the root-level `privacy.html` and `terms.html`; keep only `public/` versions. Add to each of their heads: `<title>Privacy · Pocket Studio</title>`, a matching meta description, and `<link rel="canonical">`.

### T8 — Utility pages indexable (no noindex anywhere)

- **Issue:** `/booking` (a multi-step form), `/my-bookings` (a lookup form, `MyBookings.tsx:111`), and the 404 page are all crawlable/indexable. Nothing sets `robots` meta.
- **Evidence:** no `noindex` anywhere in the repo (`grep -r noindex` → 0 hits).
- **Impact:** Medium. Thin/utility pages in the index dilute quality signals; booking pages can also get indexed with query params (`/booking?service=buzz-cut`) creating near-duplicate URLs.
- **Fix:** `noindex` via the `useSeo` hook (snippets in T1) **plus** `Disallow` in robots.txt (T2). Canonicals stay self-referential on indexable pages.

### T9 — HTTPS / hosting headers — verify at deploy

- **Issue:** nothing in the repo controls HTTP→HTTPS redirects, HSTS, or www vs non-www. Whatever host is used must force HTTPS, pick one host variant (recommend `www` → or apex, but pick one), and 301 the other. Set `Cache-Control: immutable, max-age=31536000` for Vite's hashed `/assets/*` and short-cache for `index.html`.
- **Evidence:** no `_headers`, `_redirects`, `vercel.json`, `netlify.toml`, or `wrangler.toml` in the repo root.
- **Impact:** Medium (standard launch checklist).
- **Fix (Netlify example, `public/_redirects`):**

```txt
https://pocketstudiohair.com/* https://www.pocketstudiohair.com/:splat 301!
/* /index.html 200
```

(If T5 prerendering is adopted, each route is a real file and the catch-all only needs to cover unknown paths → pair with a real-status 404 page.)

---

## 3. On-page SEO findings

### O1 — H1s contain no keywords (voice over findability)

- **Issue:** every page has exactly one H1 (good — verified: `Home.tsx:71`, `Services.tsx:33`, `Artist.tsx:62`, `Gallery.tsx:106`, `BlogPost.tsx:21`, `Booking.tsx:537`, `MyBookings.tsx:111`, `Contact.tsx:162` as `motion.h1`, `NotFound.tsx:6`), but the indexable pages' H1s are pure wordplay:
  - Home: "POCKET STUDIO" (`Home.tsx:71-74`)
  - Services: "the menu" (`Services.tsx:33`)
  - Gallery: "the vibe" (`Gallery.tsx:106`)
  - Artist: "one brain. whole front desk." (`Artist.tsx:62`)
  - Contact: "hit me up" (`Contact.tsx:162-169`)
- **Impact:** High. H1 is a primary relevance signal; "house-call haircut seattle" appears in zero H1s.
- **Fix (keeps the voice — add a keyword-rich line as part of the H1 or directly beneath it):**

Home (`src/pages/Home.tsx:71-74`) — append a visually secondary line inside the same `<h1>`:

```tsx
<h1 className="mt-6 font-serif text-[clamp(4.5rem,13vw,12rem)] uppercase leading-[0.9] tracking-[-0.02em] text-ink">
  <WordmarkChars text="POCKET" offset={0} reduced={reduced} />
  <WordmarkChars text="STUDIO" offset={6} reduced={reduced} />
  <span className="sr-only">— house-call haircuts and color in Seattle, WA with MyKey</span>
</h1>
```

Services (`src/pages/Services.tsx:33`) — same pattern:

```tsx
<h1 className="mt-6 font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.015em] text-ink">
  {/* existing animated "the menu" spans */}
  <span className="sr-only">— haircut & hair color services in Seattle, house calls only</span>
</h1>
```

Apply the same to Gallery ("style references — cuts, curls & color in seattle"), Artist ("mykey — seattle hair artist, formerly at rudy's barbershop"), and Contact ("contact a seattle house-call hair artist"). `sr-only` is already available via Tailwind. BlogPost H1s are the post titles (`BlogPost.tsx:21`) — those are fine and on-voice.

### O2 — Title/meta coverage

Covered under T1 — this is both a technical and on-page finding. The per-page title/description strings in the T1 snippets are written to length (50–60 chars / 150–160 chars) with the primary keyword front-loaded and brand at the end.

### O3 — Image alt text: mostly good, one coverage gap pattern

- **Positive (verified):** content images have descriptive alts (`Home.tsx:268`, `Home.tsx:358`, `Artist.tsx:122`, `Artist.tsx:272`, `Contact.tsx:455`, `Booking.tsx:253`); decorative icons use `alt=""` correctly (`Home.tsx:187`, `Home.tsx:299`, `Artist.tsx:230`); gallery images use templated alts `` `${look.name} — style reference` `` (`Gallery.tsx:199`, `Gallery.tsx:304`).
- **Gap:** gallery alts describe the *vibe name* ("caramel dimension — style reference") but not the visual. For image search ("balayage seattle"), prefer e.g. `alt={`${look.name} — ${look.line.slice(0, 60)}… — house-call hair in seattle`}` or hand-written alts per look in the `LOOKS` array (`Gallery.tsx:23-81`). Low effort, real image-SEO upside for a visual service.
- **Gap:** the hero `<video>` has an `aria-label` but no fallback text/transcript (minor; acceptable for decorative video).

### O4 — Internal linking: good, two improvements

- **Positive:** nav + footer cover all primary routes (`Navbar.tsx:13-19`, `Footer.tsx:64-78`); service cards deep-link into booking with query params (`Home.tsx:296`); blog posts are linked from Home + Blog index via `ArticleCard.tsx`.
- **Improvement 1:** the nav label "updates" points at `/blog` (`Navbar.tsx:17`) — consider renaming the route to `/updates` (301 `/blog` → `/updates`) or the label to "blog"; the mismatch weakens the URL/anchor relevance signal. Low priority — voice consistency may win here.
- **Improvement 2:** blog post bodies never link to `/services` or `/booking` with descriptive anchors. E.g. in `studio.ts:337-341` ("not-at-rudys-anymore"), link "you pick a slot" → `/booking` and "we start with a consult" → `/booking?service=color-consult`. Currently body paragraphs render as plain strings (`BlogPost.tsx`), so this needs a tiny link-aware renderer or inline JSX posts. Medium effort, medium impact.

### O5 — Heading hierarchy otherwise clean

Section headers render as `motion.h2` (`SectionHeader.tsx:33`) and card titles as `h3` (`ArticleCard.tsx:28`, `Home.tsx:301`) — logical H1→H2→H3, no skipped levels observed. No fix needed.

---

## 4. Content findings

### C1 — Strong E-E-A-T foundation (keep doing this)

Real policies with reasons (`studio.ts:264-300`), real hours, a real artist page with pronouns and story (`Artist.tsx`), honest "style references, not a fake portfolio" framing (`Gallery.tsx:21-22`), visible phone/email (`Footer.tsx:49`), and published privacy/terms. This is exactly the trust material a YMYL-adjacent local service needs. The "i just left Rudy's" narrative (`studio.ts:155`) is a differentiator — it should be *findable* (see L4).

### C2 — Blog posts appear future-dated

- **Issue:** dispatch dates are July/August **2026** (`studio.ts:318`, `:331`, `:345`). If these dates are in the future relative to launch, freshness signals misfire and `datePublished` schema would be wrong; if the project timeline is just set in 2026, ignore this.
- **Evidence:** `src/data/studio.ts:315-356`.
- **Impact:** Low–Medium (data hygiene).
- **Fix:** confirm the intended dates; ensure `<time datetime={post.dateISO}>` is rendered on `Blog.tsx`/`BlogPost.tsx` (currently only display strings like "july 28, 2026" are rendered — `ArticleCard.tsx:27`).

### C3 — Business-data consistency: travel fee + service range mismatch

- **Issue:** the site copy everywhere says "no travel fee yet" (`studio.ts:170`, `Footer.tsx:49`, `Artist.tsx:234`, `Contact.tsx:232`, blog posts), but the current business model (per the owner's brief) is **$25 + $2/mi within a 30-mile range**. Neither the fee nor the range appears anywhere on the site.
- **Impact:** Medium. For local SEO and conversion, "how far will you come / what does it cost" is a top query; the answer is missing, and whatever goes on the GBP must match the site.
- **Fix:** add a travel-fee line to `STUDIO` in `src/data/studio.ts` and surface it on Contact + Services:

```ts
// src/data/studio.ts — in STUDIO
serviceArea: 'seattle + ~30 miles',
travelFeeNote: 'house calls only — $25 + $2/mile travel fee, quoted before you book',
```

### C4 — No FAQ content (schema + long-tail opportunity)

- **Issue:** policies exist (`studio.ts:264-300`) but aren't framed as questions. Queries like "do i need a consult before color," "what's the deposit," "how do house calls work" are unanswered in Q&A form and there's no `FAQPage` schema.
- **Fix:** add an FAQ section to `/services` (it already renders `POLICIES`) rephrased as questions, and mark up with `FAQPage` JSON-LD (only where Q&A is visibly rendered — Google's requirement):

```tsx
// inside Services.tsx, after the policies section
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: POLICIES.map((p) => ({
        '@type': 'Question',
        name: p.title, // rephrase titles as questions in the UI too
        acceptedAnswer: { '@type': 'Answer', text: p.body },
      })),
    }),
  }}
/>
```

### C5 — Unused blog covers / no post images

`public/blog-cover-balayage.jpg`, `blog-cover-curls.jpg`, `blog-cover-keratin.jpg` (≈1MB total) are never referenced (`grep blog-cover src/` → 0 hits) — posts are intentionally text-only (`BlogPost.tsx` comment: "these are text dispatches, no stock covers"). Either wire them as `og:image` per post (nice win: distinct link previews per dispatch) or delete them (see P2).

---

## 5. Local SEO — Seattle house-call business

### L1 — Google Business Profile (the #1 local asset, not in the codebase)

This site will rank in the map pack via GBP, not via the website alone. Action checklist:
- Create/claim GBP as a **Service-Area Business (SAB)**: do **not** publish a home address; set service areas = Seattle + the neighborhoods MyKey actually serves (Capitol Hill, Ballard, Fremont, Queen Anne, Wallingford, Green Lake, West Seattle, Columbia City — match the `areaServed` list in the T6 schema).
- Business name: **"Pocket Studio"** exactly (no keyword stuffing — "Pocket Studio — Seattle Haircuts" risks suspension).
- Categories: primary `Hair salon`; secondary `Hairdresser`, `Mobile hairdresser` if available.
- Phone **425-918-2029** and website URL exactly as on the site (NAP consistency, L2).
- Hours: mirror `studio.ts:172-177` (thu 11–6, fri 12–5, sat–sun 12–8, closed mon–wed) and keep them in sync — GBP/site hour mismatches are a known local ranking and trust problem.
- Booking link: point GBP's appointment URL at `https://www.pocketstudiohair.com/booking` (even though it's noindex — noindex ≠ nofollow for users).
- Photos: use the `public/gallery-*.jpg` set; post the "your chair moved" dispatch as a GBP Update; seed Q&A with the deposit/house-call/travel-fee answers.
- Reviews: ask former Rudy's clients (by text, after appointments) to mention the move — reviews containing "used to see MyKey at Rudy's" are gold for the "rudy's barbershop mykey" query.

### L2 — NAP consistency

- **Current state (good):** name/phone/email appear consistently from one source of truth (`studio.ts:163-179`), and the phone is a proper `tel:+14259182029` link (`Footer.tsx:49`). Email is mailto-linked.
- **Gaps:** the phone number does not appear on the Contact page as plain indexable text near the H1 (it's there via `STUDIO` — verify rendered output); hours on the site must match GBP exactly; when the travel-fee model goes live (C3), update site + GBP on the same day.
- **Citations:** after launch, list consistently on Yelp, Bing Places, Apple Business Connect, Nextdoor, and the Seattle-specific directories — same name, same phone, same URL, "house calls only" in every description.

### L3 — Neighborhood keywords are entirely absent

- **Issue:** zero occurrences of Capitol Hill / Ballard / Fremont / Queen Anne / any neighborhood anywhere in `src/` (grep → no hits). "Seattle" appears, but local searches are neighborhood-shaped ("haircut capitol hill," "mobile hairdresser ballard").
- **Impact:** High for local discovery.
- **Fix:** add an honest service-area section to `/contact` (and a line on Home) listing neighborhoods in voice, e.g.:

```tsx
// Contact.tsx, near the map panel
<p className="mt-4 max-w-[52ch] font-sans text-[15px] leading-[1.7] text-brown">
  where i drive: all of seattle proper — capitol hill, ballard, fremont,
  queen anne, wallingford, green lake, west seattle, columbia city — and
  about 30 miles beyond with the travel fee. not sure if you're in range?
  text me the cross streets.
</p>
```

Plus the `areaServed` schema (T6) and GBP service areas (L1) must list the same neighborhoods — three consistent signals.

### L4 — Capture the "Rudy's" transition query

- **Issue:** the single most valuable branded search right now is variations of "mykey rudy's" / "rudy's barbershop stylist left seattle." The phrase "Rudy's" appears on Home, Artist, and one dispatch (`studio.ts:330-341`) — good — but with no per-page titles (T1) and no schema (T6), Google has weak material to connect the entities.
- **Fix:** the Artist page title in the T1 snippet ("...formerly at rudy's barbershop" in the sr-only H1 line, O1) plus the `not-at-rudys-anymore` dispatch with `BlogPosting` schema (T6) covers it. Keep the "not affiliated with Rudy's Barbershop" disclaimer (`studio.ts:178`, `Footer.tsx:112`) — legally smart, keep it out of titles.

### L5 — No map/location signals on Contact

`/contact-map.jpg` is a stylized decorative image (`Contact.tsx:455`). For a SAB that's fine (don't publish a home address), but the Contact page should carry the text signals instead: "seattle, wa," service range, hours (already present), and the neighborhood list from L3. An embedded Google Map is optional for SABs; the schema + GBP do the heavy lifting.

---

## 6. Performance hints (source-level; measure with PageSpeed after deploy)

### P1 — Hero video loads on every viewport

- **Evidence:** `HeroMediaPanel.tsx:48-56` — `<video src="/hero-video.mp4" autoPlay …>` with no `preload` strategy; the file is 1.3MB (`du -h public/hero-video.mp4`).
- **Impact:** mobile LCP/data cost on the most-visited page.
- **Fix:** keep the poster (`hero-poster.jpg`, 354K) as the LCP candidate and gate the video:

```tsx
<video
  ref={video}
  className="ken-burns h-full w-full scale-[1.15] object-cover"
  src="/hero-video.mp4"
  poster="/hero-poster.jpg"
  preload="metadata"
  autoPlay
  muted
  loop
  playsInline
  aria-label="Inside the Pocket Studio salon — warm morning light, terracotta chairs, brass mirrors"
/>
```

and consider swapping the mp4 for a compressed/WebM version (~400–600K target) plus `<link rel="preload" as="image" href="/hero-poster.jpg" fetchpriority="high">` in `index.html`.

### P2 — ~2.5MB of unused images shipped in `public/`

- **Evidence:** `public/stylist-andre.jpg`, `stylist-elena.jpg`, `stylist-jasmine.jpg`, `stylist-marcus.jpg`, `stylist-priya.jpg`, `stylist-sofia.jpg`, `stylist-theo.jpg`, `stylist-yuki.jpg` (≈1.7MB — template leftovers from a multi-stylist design; the site is solo-artist, `grep stylist- src/` → 0 hits), `studio-interior.jpg` (288K, unreferenced), `blog-cover-*.jpg` (≈1MB, unreferenced — see C5).
- **Impact:** everything in `public/` is copied to `dist` on build — wasted deploy weight and a brand risk (8 fake stylists contradicting the "one artist" story if anyone guesses the URLs).
- **Fix:** delete the unused files from `public/` (or move to a non-deployed `assets/` folder — note `assets/` at the repo root already duplicates `public/brand/`; consolidate to one copy).

### P3 — No modern image formats or responsive sizes

- **Evidence:** all 20 JPGs (200–377K each) are served as-is; no `<picture>`, `srcset`, or WebP anywhere; gallery grid images (`Gallery.tsx`) load full-size files into ~400px cards.
- **Fix:** convert to WebP (`cwebp -q 80 gallery-*.jpg` typically cuts 60–70%), and add `srcSet`/`sizes` to the gallery grid + `ParallaxImage`. Keep `loading="lazy"` (already present, e.g. `ParallaxImage.tsx:52`) and the aspect-ratio boxes (already preventing CLS).

### P4 — All animation/scroll libraries load on every route

- **Evidence:** framer-motion, GSAP + ScrollTrigger, and Lenis are all imported by `Layout.tsx`/`Home.tsx` unconditionally; routes are not code-split (`App.tsx` imports every page eagerly).
- **Fix:** lazy-load routes:

```tsx
// App.tsx
import { lazy, Suspense } from 'react';
const Booking = lazy(() => import('@/pages/Booking')); // 1192-line page, biggest win
const MyBookings = lazy(() => import('@/pages/MyBookings'));
// …and wrap <Routes> in <Suspense fallback={null}>
```

### P5 — Font loading

Google Fonts CSS is render-blocking (`index.html:13`); `display=swap` is already set (good) and preconnects exist (good). Optional: self-host the two families via `@fontsource` to remove the third-party chain entirely.

---

## 7. Quick wins (apply now) — ordered by impact ÷ effort

1. **Rewrite the `<head>` of `index.html`** (T4): real default title + description, absolute `og:image`, og:type/url/site_name, Twitter cards, canonical, favicon links. *File: `index.html:3-14`. Snippet: T4. ~15 min.*
2. **Add `HairSalon` JSON-LD** to `index.html` with real NAP, hours from `studio.ts:172-177`, prices from `studio.ts:45-131`, and the Seattle-neighborhood `areaServed` list. *Snippet: T6. ~20 min. Highest single local-SEO impact.*
3. **Create `src/hooks/useSeo.ts` + call it in all 10 pages** with the exact per-page titles/descriptions from T1 (including `noindex` on `/booking`, `/my-bookings`, 404). *~45 min. Fixes the duplicate-title problem everywhere.*
4. **Create `public/robots.txt`** (disallow `/booking`, `/my-bookings`, sitemap line). *Snippet: T2. ~2 min.*
5. **Create `public/sitemap.xml`** with the 9 indexable URLs from `App.tsx:19-27` + dispatch slugs from `studio.ts:315-356`. *Snippet: T3. ~10 min. Submit in Search Console after deploy.*
6. **Add keyword `sr-only` lines to the Home, Services, Gallery, Artist, Contact H1s.** *Snippets: O1. ~20 min. Keeps the lowercase voice, adds the relevance.*
7. **Delete unused `public/` images** (`stylist-*.jpg` ×8, `studio-interior.jpg`; keep or wire `blog-cover-*.jpg` per C5) and the duplicate root-level `privacy.html`/`terms.html`. *Evidence: P2, T7. ~10 min.*
8. **Add the neighborhood service-area paragraph to `/contact`** (L3 snippet) so the same areas appear in page copy, schema, and GBP. *~15 min.*

## 8. After-deploy verification checklist

- [ ] `view-source:` on `/services` shows its own `<title>` (requires T5 prerendering for non-JS view-source).
- [ ] Rich Results Test on `/` shows HairSalon; on a dispatch shows BlogPosting.
- [ ] opengraph.xyz preview of `/` and one dispatch shows the image + correct title.
- [ ] Search Console: sitemap submitted; coverage shows 9 indexed, `/booking` + `/my-bookings` excluded.
- [ ] GBP live as SAB, hours/phone/URL matching the site; booking URL set.
- [ ] PageSpeed Insights: LCP < 2.5s on mobile for `/` (watch the hero video, P1).
- [ ] Unknown URL (e.g. `/nope`) returns HTTP **404**, not 200 (host config, T5).
