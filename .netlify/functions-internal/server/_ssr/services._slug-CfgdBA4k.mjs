import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SERVICES } from "./services-DG2tVleS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-CfgdBA4k.js
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
var SITE_NAME = "Pocket Studio";
/** Production origin (no trailing slash). Used for canonicals, og:url, JSON-LD. */
var BASE_URL = "https://pocketstudio.biz";
/**
* Sitewide share image. Absolute URL — scrapers reject relative og:image.
* Points at an existing repo asset (`/og-image.jpg` does not exist and would 404).
*/
var DEFAULT_OG_IMAGE = `${BASE_URL}/work/long-1.jpg`;
/**
* Brand-suffix helper for any future route that needs a new title:
* `pageTitle("Some Page")` → `"Some Page · Pocket Studio"` (same pattern the
* source `useSeo` hook applied).
*/
var pageTitle = (title) => `${title} · ${SITE_NAME}`;
var SEO_CONFIG = {
	"/": {
		title: "Pocket Studio — book with MyKey",
		description: "Book cuts and color directly with MyKey Pocket, Seattle hair artist. House calls only, no front desk in the way. Former Rudy's clients: this is where you book now."
	},
	"/book": {
		title: pageTitle("Book Your Chair"),
		description: "Pick a service, a day, and a time — a $25 deposit holds your slot.",
		noindex: true
	},
	"/studio": {
		title: pageTitle("Meet MyKey — Solo Hair Artist (they/them)"),
		description: "One artist, one calendar. MyKey left Rudy's Barbershop and now books directly — cuts + color for all textures, house calls in Seattle, WA."
	},
	"/classic": {
		title: "Classic — Pocket Studio",
		description: "The preserved classic Pocket Studio booking page, kept intact as an archive.",
		noindex: true
	},
	"/mobile": {
		title: "Pocket Studio — book with MyKey",
		description: "Book cuts and color directly with MyKey Pocket, Seattle hair artist. House calls only, no front desk in the way. Former Rudy's clients: this is where you book now.",
		noindex: true
	},
	"/privacy": {
		title: "Privacy Policy — Pocket Studio",
		description: "Privacy Policy for Pocket Studio (MyKey Pocket), an independent Seattle hair studio."
	},
	"/terms": {
		title: "Terms of Service — Pocket Studio",
		description: "Terms of Service for Pocket Studio (MyKey Pocket), an independent Seattle hair studio."
	},
	"/blog": {
		title: pageTitle("Updates — Dispatches from the Chair"),
		description: "Dated notes from one chair and one brain: house-call updates, the hunt for a new chair, and color-correction stories. Signed, always, — mykey."
	}
};
/** Fallback used when a path or slug has no config (keeps <head> valid). */
var FALLBACK_SEO = {
	title: SITE_NAME,
	description: SEO_CONFIG["/"].description
};
function serviceSeo(slug) {
	const svc = SERVICES.find((s) => s.slug === slug);
	if (!svc) return FALLBACK_SEO;
	const title = pageTitle(`${svc.name} — ${svc.price} · ${svc.duration} · Seattle`);
	const suffix = ` ${svc.price}, ${svc.duration}, house calls across Seattle — $25 deposit holds your slot.`;
	return {
		title,
		description: `${svc.detail.length + suffix.length <= 160 ? svc.detail : svc.blurb}${suffix}`
	};
}
function absoluteUrl(path) {
	return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
/** Build the head object for a resolved entry + canonical path. */
function buildHead(entry, path) {
	const url = absoluteUrl(path);
	const image = entry.ogImage ?? DEFAULT_OG_IMAGE;
	return {
		meta: [
			{ title: entry.title },
			{
				name: "description",
				content: entry.description
			},
			{
				name: "robots",
				content: entry.noindex ? "noindex, follow" : "index, follow"
			},
			{
				property: "og:title",
				content: entry.title
			},
			{
				property: "og:description",
				content: entry.description
			},
			{
				property: "og:url",
				content: url
			},
			{
				property: "og:image",
				content: image
			},
			{
				name: "twitter:title",
				content: entry.title
			},
			{
				name: "twitter:description",
				content: entry.description
			},
			{
				name: "twitter:image",
				content: image
			}
		],
		links: [{
			rel: "canonical",
			href: url
		}]
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
function seoHead(path) {
	const entry = SEO_CONFIG[path];
	if (!entry) throw new Error(`seoHead: no SEO_CONFIG entry for path "${path}"`);
	return () => buildHead(entry, path);
}
/**
* serviceHead — for /services/$slug, whose head receives loader data:
*
*   head: ({ loaderData }) => serviceHead(loaderData),
*/
function serviceHead(service) {
	if (!service) return buildHead(FALLBACK_SEO, "/services");
	return buildHead(serviceSeo(service.slug), `/services/${service.slug}`);
}
var FIXED_PRICE = /^\$(\d+)$/;
var HAIR_SALON_JSONLD = {
	"@context": "https://schema.org",
	"@type": "HairSalon",
	"@id": `${BASE_URL}/#business`,
	name: "Pocket Studio",
	description: "Solo house-call hair artist in Seattle, WA. Cuts $50–$120, color by consult, priced at the chair. $25 booking deposit.",
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
		addressCountry: "US"
	},
	areaServed: [
		{
			"@type": "City",
			name: "Seattle, WA"
		},
		{
			"@type": "Place",
			name: "Capitol Hill"
		},
		{
			"@type": "Place",
			name: "Ballard"
		},
		{
			"@type": "Place",
			name: "Fremont"
		},
		{
			"@type": "Place",
			name: "Queen Anne"
		},
		{
			"@type": "Place",
			name: "Wallingford"
		},
		{
			"@type": "Place",
			name: "Green Lake"
		},
		{
			"@type": "Place",
			name: "West Seattle"
		},
		{
			"@type": "Place",
			name: "Columbia City"
		}
	],
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Thursday",
			opens: "11:00",
			closes: "18:00"
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Friday",
			opens: "12:00",
			closes: "17:00"
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Saturday", "Sunday"],
			opens: "12:00",
			closes: "20:00"
		}
	],
	founder: {
		"@type": "Person",
		name: "MyKey Pocket",
		alternateName: "MyKey",
		jobTitle: "Hair artist, solo operator",
		pronouns: "they/them",
		worksFor: { "@id": `${BASE_URL}/#business` }
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
					description: svc.blurb
				},
				...fixed ? {
					price: fixed[1],
					priceCurrency: "USD"
				} : {}
			};
		})
	}
};
var $$splitComponentImporter = () => import("./services._slug-B6cC5sR-.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const svc = SERVICES.find((s) => s.slug === params.slug);
		if (!svc) throw notFound();
		return svc;
	},
	head: ({ loaderData }) => serviceHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { SEO_CONFIG as a, Route as i, DEFAULT_OG_IMAGE as n, seoHead as o, HAIR_SALON_JSONLD as r, BASE_URL as t };
