/**
 * Central SEO head management for the Pocket Studio site (TanStack Start SSR).
 *
 * Every route wires its head via:
 *
 *   import { headFor } from "../lib/seo";
 *   export const Route = createFileRoute("/book")({
 *     head: () => headFor("/book"),
 *     ...
 *   });
 *
 * Dynamic routes pass the concrete path, e.g. headFor(`/blog/${slug}`) —
 * this module resolves the slug against src/lib/posts.ts / src/lib/services.ts.
 *
 * Per-route titles/descriptions follow the SEO audit quick wins
 * (/mnt/agents/output/seo/audit.md, findings T1/T4/T6). Locked business facts
 * (name, contact, hours, Rudy's line) come from the final booking-page copy
 * doc and are used verbatim — do not editorialize them here.
 */

import { POSTS, getPost } from "./posts";
import { SERVICES } from "./services";

/**
 * Canonical origin for the site. Used to build absolute canonical/OG URLs.
 * Change this one constant if the production domain changes.
 */
export const SITE_URL = "https://pocketstudio.biz";

export const SITE_NAME = "Pocket Studio";

/** Share image — keep a 1200×630 asset at this public path. */
export const OG_IMAGE = "/images/og-image.jpg";

export type SeoHead = {
  meta: any[];
  links?: any[];
  scripts?: any[];
};

/* ------------------------------------------------------------------ */
/* Business facts (locked — used verbatim in JSON-LD + meta)           */
/* ------------------------------------------------------------------ */

const BUSINESS = {
  name: SITE_NAME,
  telephone: "+1-425-918-2029",
  email: "mykeypocket@icloud.com",
  locality: "Seattle",
  region: "WA",
  country: "US",
  founderName: "MyKey Pocket",
} as const;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const MONTHS: Record<string, string> = {
  JAN: "01",
  FEB: "02",
  MAR: "03",
  APR: "04",
  MAY: "05",
  JUN: "06",
  JUL: "07",
  AUG: "08",
  SEP: "09",
  OCT: "10",
  NOV: "11",
  DEC: "12",
};

/** "JUL 28, 2026" -> "2026-07-28" (falls back to the raw string). */
function isoDate(display: string): string {
  const m = display.match(/^([A-Z]{3})\s+(\d{1,2}),\s*(\d{4})$/);
  if (!m) return display;
  const [, mon, day, year] = m;
  const mm = MONTHS[mon];
  if (!mm) return display;
  return `${year}-${mm}-${day.padStart(2, "0")}`;
}

function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p === "/" ? "/" : p.replace(/\/+$/, "")}`;
}

function jsonLd(data: object) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

/* ------------------------------------------------------------------ */
/* JSON-LD blocks                                                      */
/* ------------------------------------------------------------------ */

/**
 * HairSalon / LocalBusiness schema — ported from the audited reference
 * (app/index.html, audit finding T6). Services are intentionally listed
 * without prices: everything is priced at the chair (canonical pricing
 * rule), so no dollar amounts or priceRange appear here.
 */
const HAIR_SALON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  description:
    "Solo house-call hair artist in Seattle, WA. Cuts and color, all priced at the chair. $25 booking deposit holds your slot.",
  url: `${SITE_URL}/`,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  image: `${SITE_URL}${OG_IMAGE}`,
  currenciesAccepted: "USD",
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.locality,
    addressRegion: BUSINESS.region,
    addressCountry: BUSINESS.country,
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
    name: BUSINESS.founderName,
    alternateName: "MyKey",
    jobTitle: "Hair artist, solo operator",
    pronouns: "they/them",
    worksFor: { "@id": `${SITE_URL}/#business` },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cuts + color",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Buzz Cut" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Short Cut" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Long Cut" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "New-Client Color Consult" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Existing-Client Color Appointment",
        },
        description:
          "Priced at the chair, based on hair and complexity.",
      },
    ],
  },
};

/** Blog schema for the updates index (audit T6 covers BlogPosting per post). */
const BLOG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  name: "Updates — dispatches from the chair",
  description:
    "Dated notes from one chair and one brain: house-call updates, the hunt for a new chair, and color stories.",
  url: `${SITE_URL}/blog`,
  author: {
    "@type": "Person",
    name: BUSINESS.founderName,
    alternateName: "MyKey",
  },
  publisher: { "@id": `${SITE_URL}/#business` },
  blogPost: POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: isoDate(post.date),
    url: `${SITE_URL}/blog/${post.slug}`,
  })),
};

function blogPostingJsonLd(slug: string) {
  const post = getPost(slug);
  if (!post) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: isoDate(post.date),
    author: {
      "@type": "Person",
      name: BUSINESS.founderName,
      alternateName: "MyKey",
    },
    publisher: { "@id": `${SITE_URL}/#business` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

type RouteSeo = {
  /** Full <title> including brand. */
  title: string;
  description: string;
  /** og:type — defaults to "website". */
  type?: string;
  /** Set true for utility/unknown pages that should stay out of the index. */
  noindex?: boolean;
  /** Extra JSON-LD blocks for this route. */
  jsonLd?: object[];
};

function buildHead(path: string, seo: RouteSeo): SeoHead {
  const url = absoluteUrl(path);
  const image = `${SITE_URL}${OG_IMAGE}`;
  const type = seo.type ?? "website";

  const meta: any[] = [
    { title: seo.title },
    { name: "description", content: seo.description },
    {
      name: "robots",
      content: seo.noindex ? "noindex, nofollow" : "index, follow",
    },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:url", content: url },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: image },
  ];

  const head: SeoHead = {
    meta,
    links: [{ rel: "canonical", href: url }],
  };

  if (seo.jsonLd && seo.jsonLd.length > 0) {
    head.scripts = seo.jsonLd.map(jsonLd);
  }

  return head;
}

/* ------------------------------------------------------------------ */
/* Static route table (titles/descriptions per SEO audit quick wins)   */
/* ------------------------------------------------------------------ */

const STATIC_ROUTES: Record<string, RouteSeo> = {
  "/": {
    title: "House-Call Haircuts & Color in Seattle · Pocket Studio",
    // Verbatim from the final booking-page copy (browser tab / seo section).
    description:
      "Book cuts and color directly with MyKey Pocket, Seattle hair artist. House calls only, no front desk in the way. Former Rudy's clients: this is where you book now.",
    jsonLd: [HAIR_SALON_JSONLD],
  },
  "/book": {
    title: "Book a Cut or Color — Seattle House Calls · Pocket Studio",
    description:
      "Pick a service, a day, and a time — a $25 deposit holds your slot and comes off your total. Real calendar, instant confirmation, house calls across Seattle.",
  },
  "/studio": {
    title: "Meet MyKey — Solo Hair Artist in Seattle (they/them) · Pocket Studio",
    description:
      "One artist, one calendar. MyKey left Rudy's Barbershop and now books directly — cuts + color for all textures, house calls in Seattle, WA.",
  },
  "/classic": {
    title: "The Classic Pocket Studio Booking Page · Pocket Studio",
    description:
      "The original Pocket Studio booking page, preserved. Book cuts + color directly with MyKey, a solo house-call hair artist in Seattle, WA.",
  },
  "/mobile": {
    title: "Mobile Booking — Cuts & Color in Seattle · Pocket Studio",
    description:
      "Book cuts and color with MyKey Pocket in Seattle. House calls only. Tap a service, pick a slot, done.",
  },
  "/blog": {
    title: "Updates — Dispatches from the Chair · Pocket Studio",
    description:
      "Dated notes from one chair and one brain: house-call updates, the hunt for a new chair, and color stories. Signed, always, — mykey.",
    jsonLd: [BLOG_JSONLD],
  },
  "/privacy": {
    title: "Privacy Policy · Pocket Studio",
    description:
      "How Pocket Studio collects, uses, and protects your information when you book cuts + color with MyKey in Seattle.",
  },
  "/terms": {
    title: "Terms of Service · Pocket Studio",
    description:
      "The fine print: 24-hour cancellation, no-show policy, deposits, house-call terms, and booking rules for Pocket Studio, Seattle.",
  },
};

const DEFAULT_SEO: RouteSeo = {
  title: "Pocket Studio — book with MyKey · Seattle house-call hair",
  description:
    "Book cuts and color directly with MyKey Pocket, Seattle hair artist. House calls only, no front desk in the way. Former Rudy's clients: this is where you book now.",
  jsonLd: [HAIR_SALON_JSONLD],
};

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

/**
 * Build the TanStack Start `head` payload for a route path.
 *
 * Supported:
 *   '/', '/book', '/studio', '/classic', '/mobile', '/privacy', '/terms',
 *   '/blog', '/blog/<slug>', '/services/<slug>'
 * Unknown paths get the site default title/description (noindex is NOT set —
 * real 404 handling happens at the router level).
 */
export function headFor(route: string): SeoHead {
  // Normalize: strip query/hash and trailing slash (except root).
  const path = (route.split(/[?#]/)[0] || "/").replace(/\/+$/, "") || "/";

  const staticSeo = STATIC_ROUTES[path];
  if (staticSeo) return buildHead(path, staticSeo);

  if (path.startsWith("/services/")) {
    const slug = path.slice("/services/".length);
    const service = SERVICES.find((s) => s.slug === slug);
    if (service) {
      return buildHead(path, {
        title: `${service.name} in Seattle — House Calls · ${SITE_NAME}`,
        description:
          `${service.blurb} ${service.name} — ${service.duration}, ${service.price}. ` +
          `Book direct with MyKey, house-call hair artist in Seattle, WA.`,
      });
    }
    return buildHead(path, {
      title: `Service Not Found · ${SITE_NAME}`,
      description:
        "That service isn't on the menu. Cuts and color house calls across Seattle — the full menu lives on the booking page.",
      noindex: true,
    });
  }

  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length);
    const post = getPost(slug);
    if (post) {
      const posting = blogPostingJsonLd(slug);
      return buildHead(path, {
        title: `${post.title} · ${SITE_NAME}`,
        description: post.excerpt,
        type: "article",
        jsonLd: posting ? [posting] : undefined,
      });
    }
    return buildHead(path, {
      title: `Dispatch Not Found · ${SITE_NAME}`,
      description:
        "That dispatch doesn't exist — all updates live on the updates page.",
      noindex: true,
    });
  }

  return buildHead(path, DEFAULT_SEO);
}
