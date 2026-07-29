/**
 * src/lib/seo.ts — per-route SEO config for the TanStack Start app.
 *
 * Replaces the source repo's client-side `useSeo` hook with SSR head config
 * (TanStack Start route `head` options). Titles/descriptions are the approved
 * strings from the source repo (`src/hooks/useSeo.ts` calls + docs/seo/audit.md
 * T1) — stored VERBATIM as full titles (brand suffix already applied).
 *
 * Single source of truth for BASE_URL: change it here and every canonical,
 * og:url, and the JSON-LD update together.
 */

import { SERVICES, type Service } from "./services";

export const SITE_NAME = "Pocket Studio";
/** Production origin (no trailing slash). Used for canonicals, og:url, JSON-LD. */
export const BASE_URL = "https://pocketstudio.biz";
/**
 * Sitewide share image. Absolute URL — scrapers reject relative og:image.
 * Points at an existing repo asset (`/og-image.jpg` does not exist and would 404).
 */
export const DEFAULT_OG_IMAGE = `${BASE_URL}/work/long-1.jpg`;

export type SeoEntry = {
  /** Full <title> text, brand suffix already included (verbatim approved copy). */
  title: string;
  /** meta description (aim ≤160 chars). */
  description: string;
  /** Absolute URL override for og:image / twitter:image. Defaults to DEFAULT_OG_IMAGE. */
  ogImage?: string;
  /** Utility/duplicate pages stay out of the index (audit T8). */
  noindex?: boolean;
};

/**
 * Brand-suffix helper for any future route that needs a new title:
 * `pageTitle("Some Page")` → `"Some Page · Pocket Studio"` (same pattern the
 * source `useSeo` hook applied).
 */
export const pageTitle = (title: string): string => `${title} · ${SITE_NAME}`;

export const SEO_CONFIG: Record<string, SeoEntry> = {
  // Home — copy-deck title already live in src/routes/index.tsx; description
  // likewise approved there (audit T1 home variant uses the same facts).
  "/": {
    title: "Pocket Studio — book with MyKey",
    description:
      "Book cuts and color directly with MyKey Pocket, Seattle hair artist. House calls only, no front desk in the way. Former Rudy's clients: this is where you book now.",
  },
  // Audit T1 /Booking — verbatim, noindex (utility page, audit T8).
  "/book": {
    title: pageTitle("Book Your Chair"),
    description: "Pick a service, a day, and a time — a $25 deposit holds your slot.",
    noindex: true,
  },
  // Audit T1 /Artist — verbatim (the /studio page is the artist/studio story).
  "/studio": {
    title: pageTitle("Meet MyKey — Solo Hair Artist (they/them)"),
    description:
      "One artist, one calendar. MyKey left Rudy's Barbershop and now books directly — cuts + color for all textures, house calls in Seattle, WA.",
  },
  // /classic — preserved legacy static page in an iframe; duplicate of the
  // booking flow, so keep it out of the index. No audit copy exists for it.
  "/classic": {
    title: "Classic — Pocket Studio",
    description:
      "The preserved classic Pocket Studio booking page, kept intact as an archive.",
    noindex: true,
  },
  // /mobile — alternate full-page variant of the site; near-duplicate of /
  // for crawlers, so noindex + self canonical. No audit copy exists for it.
  "/mobile": {
    title: "Pocket Studio — book with MyKey",
    description:
      "Book cuts and color directly with MyKey Pocket, Seattle hair artist. House calls only, no front desk in the way. Former Rudy's clients: this is where you book now.",
    noindex: true,
  },
  // Legal pages — approved titles/descriptions already live in the target routes.
  "/privacy": {
    title: "Privacy Policy — Pocket Studio",
    description:
      "Privacy Policy for Pocket Studio (MyKey Pocket), an independent Seattle hair studio.",
  },
  "/terms": {
    title: "Terms of Service — Pocket Studio",
    description:
      "Terms of Service for Pocket Studio (MyKey Pocket), an independent Seattle hair studio.",
  },
  // Audit T1 /Blog — verbatim.
  "/blog": {
    title: pageTitle("Updates — Dispatches from the Chair"),
    description:
      "Dated notes from one chair and one brain: house-call updates, the hunt for a new chair, and color-correction stories. Signed, always, — mykey.",
  },
};

/** Fallback used when a path or slug has no config (keeps <head> valid). */
export const FALLBACK_SEO: SeoEntry = {
  title: SITE_NAME,
  description: SEO_CONFIG["/"].description,
};

// ---------------------------------------------------------------------------
// Dynamic: /services/$slug (generated from src/lib/services.ts — never drift)
// ---------------------------------------------------------------------------

export function serviceSeo(slug: string): SeoEntry {
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) return FALLBACK_SEO;
  // e.g. "Buzz Cut — $50 · 30 min · Seattle · Pocket Studio"
  const title = pageTitle(`${svc.name} — ${svc.price} · ${svc.duration} · Seattle`);
  const suffix = ` ${svc.price}, ${svc.duration}, house calls across Seattle — $25 deposit holds your slot.`;
  // Prefer the richer `detail`; fall back to the short `blurb` when the
  // detail would push the description past ~160 chars (SERP truncation).
  const lead = svc.detail.length + suffix.length <= 160 ? svc.detail : svc.blurb;
  return { title, description: `${lead}${suffix}` };
}

// ---------------------------------------------------------------------------
// Head builders — TanStack Start route `head` compatible
// ---------------------------------------------------------------------------

export type SeoMetaTag =
  | { title: string }
  | { charSet: string }
  | { name: string; content: string }
  | { property: string; content: string };

export type SeoHeadObject = {
  meta: SeoMetaTag[];
  links: { rel: string; href: string }[];
};

function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalized}`;
}

/** Build the head object for a resolved entry + canonical path. */
export function buildHead(entry: SeoEntry, path: string): SeoHeadObject {
  const url = absoluteUrl(path);
  const image = entry.ogImage ?? DEFAULT_OG_IMAGE;
  return {
    meta: [
      { title: entry.title },
      { name: "description", content: entry.description },
      {
        name: "robots",
        content: entry.noindex ? "noindex, follow" : "index, follow",
      },
      { property: "og:title", content: entry.title },
      { property: "og:description", content: entry.description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:title", content: entry.title },
      { name: "twitter:description", content: entry.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/**
 * seoHead — drop-in for static routes:
 *
 *   import { seoHead } from "../lib/seo";
 *   export const Route = createFileRoute("/studio")({
 *     head: seoHead("/studio"),
 *     component: StudioPage,
 *   });
 *
 * Throws at module load if the path has no SEO_CONFIG entry — a missing
 * route config should fail loudly in dev, not silently ship default tags.
 */
export function seoHead(path: string): () => SeoHeadObject {
  const entry = SEO_CONFIG[path];
  if (!entry) {
    throw new Error(`seoHead: no SEO_CONFIG entry for path "${path}"`);
  }
  return () => buildHead(entry, path);
}

/**
 * serviceHead — for /services/$slug, whose head receives loader data:
 *
 *   head: ({ loaderData }) => serviceHead(loaderData),
 */
export function serviceHead(service: Service | undefined): SeoHeadObject {
  if (!service) return buildHead(FALLBACK_SEO, "/services");
  return buildHead(serviceSeo(service.slug), `/services/${service.slug}`);
}

// ---------------------------------------------------------------------------
// Structured data (audit T6) — HairSalon, rendered once in __root.tsx.
// Facts verified against LOCKED FACTS + target src/lib/services.ts:
// Seattle WA · 425-918-2029 · mykeypocket@icloud.com · they/them
// thu 11–18 · fri 12–17 · sat–sun 12–20 · prices $35–$120+
// OfferCatalog is GENERATED from SERVICES so it can never drift from the menu.
// ---------------------------------------------------------------------------

const FIXED_PRICE = /^\$(\d+)$/;

export const HAIR_SALON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${BASE_URL}/#business`,
  name: "Pocket Studio",
  description:
    "Solo house-call hair artist in Seattle, WA. Cuts $50–$120, color by consult, priced at the chair. $25 booking deposit.",
  url: `${BASE_URL}/`,
  telephone: "+1-425-918-2029",
  email: "mykeypocket@icloud.com",
  image: DEFAULT_OG_IMAGE,
  priceRange: "$35–$120+",
  currenciesAccepted: "USD",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seattle",
    addressRegion: "WA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Seattle, WA" },
    { "@type": "Place", name: "Capitol Hill" },
    { "@type": "Place", name: "Ballard" },
    { "@type": "Place", name: "Fremont" },
    { "@type": "Place", name: "Queen Anne" },
    { "@type": "Place", name: "Wallingford" },
    { "@type": "Place", name: "Green Lake" },
    { "@type": "Place", name: "West Seattle" },
    { "@type": "Place", name: "Columbia City" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "11:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "12:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "12:00",
      closes: "20:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "MyKey Pocket",
    alternateName: "MyKey",
    jobTitle: "Hair artist, solo operator",
    pronouns: "they/them",
    worksFor: { "@id": `${BASE_URL}/#business` },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cuts + color",
    itemListElement: SERVICES.map((svc) => {
      const fixed = svc.price.match(FIXED_PRICE);
      return {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.name,
          description: svc.blurb,
        },
        ...(fixed
          ? { price: fixed[1], priceCurrency: "USD" }
          : {}),
      };
    }),
  },
} as const;
