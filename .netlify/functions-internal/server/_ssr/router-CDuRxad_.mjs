import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SEO_CONFIG, i as Route$10, n as DEFAULT_OG_IMAGE, o as seoHead, r as HAIR_SALON_JSONLD, t as BASE_URL } from "./services._slug-CfgdBA4k.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CDuRxad_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BdTdHguF.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: SEO_CONFIG["/"].title },
			{
				name: "description",
				content: SEO_CONFIG["/"].description
			},
			{
				name: "author",
				content: "MyKey Pocket"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:site_name",
				content: "Pocket Studio"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: `${BASE_URL}/`
			},
			{
				property: "og:title",
				content: SEO_CONFIG["/"].title
			},
			{
				property: "og:description",
				content: SEO_CONFIG["/"].description
			},
			{
				property: "og:image",
				content: DEFAULT_OG_IMAGE
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: SEO_CONFIG["/"].title
			},
			{
				name: "twitter:description",
				content: SEO_CONFIG["/"].description
			},
			{
				name: "twitter:image",
				content: DEFAULT_OG_IMAGE
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Caveat:wght@500;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(HAIR_SALON_JSONLD)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `
              (function () {
                try {
                  var m = window.localStorage.getItem('ps-reading-mode');
                  if (m === null || m === 'on') document.body.classList.add('reading-mode');
                } catch (e) {
                  if (document.body) document.body.classList.add('reading-mode');
                }
              })();
            ` } }),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `
              (function () {
                function loadMyBesti() {
                  if (!document.getElementById('mybesti-scroll')) {
                    var t = document.createElement('script');
                    t.src = '/mybesti-scroll.js'; t.async = true;
                    document.head.appendChild(t);
                  }
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', loadMyBesti);
                } else { loadMyBesti(); }
                // Re-inject after SPA client-side navigations.
                if (window.__mybestiBound !== true && window.addEventListener) {
                  window.__mybestiBound = true;
                  var last = location.pathname;
                  setInterval(function () {
                    if (location.pathname !== last) { last = location.pathname; loadMyBesti(); }
                  }, 400);
                }
              })();
            ` } })
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingModeToggle, {})]
	});
}
/**
* Reading mode toggle — visible on every page (fixed bottom-left).
* OpenDyslexic + open spacing is ON BY DEFAULT; persists to localStorage
* ("ps-reading-mode"). SSR-safe: all window/localStorage/body access is
* guarded and client-only.
*/
function ReadingModeToggle() {
	const [on, setOn] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		try {
			const stored = window.localStorage.getItem("ps-reading-mode");
			const next = stored === null ? true : stored === "on";
			setOn(next);
			document.body.classList.toggle("reading-mode", next);
		} catch {
			document.body.classList.add("reading-mode");
		}
	}, []);
	const toggle = () => {
		const next = !on;
		setOn(next);
		try {
			window.localStorage.setItem("ps-reading-mode", next ? "on" : "off");
		} catch {}
		document.body.classList.toggle("reading-mode", next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: toggle,
		"aria-pressed": on,
		className: "fixed bottom-4 left-4 z-[70] border-2 px-3 py-1.5 text-xs font-black transition-transform hover:-translate-y-0.5",
		style: {
			background: on ? "var(--color-lime)" : "var(--color-bone)",
			color: "var(--color-void)",
			borderColor: "var(--color-void)",
			boxShadow: "3px 3px 0 var(--color-void)",
			fontFamily: "var(--font-mono)"
		},
		children: ["reading mode: ", on ? "on" : "off"]
	});
}
var $$splitComponentImporter$7 = () => import("./terms-DeY4LN_g.mjs");
var Route$8 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms of Service — Pocket Studio" }, {
		name: "description",
		content: "Terms of Service for Pocket Studio (MyKey Pocket), an independent Seattle hair studio."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./studio-BzTRYn5h.mjs");
var Route$7 = createFileRoute("/studio")({
	head: seoHead("/studio"),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./privacy-D7NYkW93.mjs");
var Route$6 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy Policy — Pocket Studio" }, {
		name: "description",
		content: "Privacy Policy for Pocket Studio (MyKey Pocket), an independent Seattle hair studio."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./mobile-DdtCarYQ.mjs");
var Route$5 = createFileRoute("/mobile")({
	head: seoHead("/mobile"),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./classic-CJP0Y1lo.mjs");
var Route$4 = createFileRoute("/classic")({
	head: seoHead("/classic"),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./book-CKTyXcX6.mjs");
var Route$3 = createFileRoute("/book")({
	head: seoHead("/book"),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./blog-CzXb5Ke8.mjs");
var Route$2 = createFileRoute("/blog")({
	head: seoHead("/blog"),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-ZEgg3Qk0.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Pocket Studio — book with MyKey" },
		{
			name: "description",
			content: "Book cuts and color directly with MyKey Pocket, Seattle hair artist. House calls only, no front desk in the way. Former Rudy's clients: this is where you book now."
		},
		{
			name: "author",
			content: "MyKey Pocket"
		},
		{
			name: "robots",
			content: "index, follow"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:title",
			content: "Pocket Studio — book with MyKey"
		},
		{
			property: "og:description",
			content: "Book cuts and color directly with MyKey Pocket, Seattle hair artist. House calls only, no front desk in the way. Former Rudy's clients: this is where you book now."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TRAVEL = {
	flat: 25,
	perMile: 2,
	maxRadiusMi: 30,
	baseLocation: "Seattle, WA"
};
var USER_AGENT = "pocket-studio-booking/1.0 (travel fee estimator; Seattle, WA)";
async function geocode(query) {
	const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`;
	const res = await fetch(url, {
		headers: {
			"User-Agent": USER_AGENT,
			Accept: "application/json"
		},
		signal: AbortSignal.timeout(1e4)
	});
	if (!res.ok) return null;
	const results = await res.json();
	if (!Array.isArray(results) || results.length === 0) return null;
	return {
		lat: Number.parseFloat(results[0].lat),
		lon: Number.parseFloat(results[0].lon)
	};
}
function haversineMi(a, b) {
	const rad = Math.PI / 180;
	const dLat = (b.lat - a.lat) * rad;
	const dLon = (b.lon - a.lon) * rad;
	const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
	return 3958.8 * 2 * Math.asin(Math.min(1, Math.sqrt(h)));
}
function fallback(reason) {
	return {
		available: true,
		fee: TRAVEL.flat,
		reason
	};
}
var Route = createFileRoute("/api/travel-fee")({ server: { handlers: { POST: async ({ request }) => {
	let address = "";
	try {
		const body = await request.json();
		address = typeof body?.address === "string" ? body.address.trim() : "";
	} catch {
		address = "";
	}
	if (!address) return Response.json(fallback("estimate only — exact distance unavailable"));
	try {
		const [client, base] = await Promise.all([geocode(address), geocode(TRAVEL.baseLocation)]);
		if (client && base) {
			const distance = haversineMi(base, client);
			const rounded = Math.round(distance * 10) / 10;
			if (distance > TRAVEL.maxRadiusMi) return Response.json({
				available: false,
				distance_mi: rounded,
				reason: `outside service area (${TRAVEL.maxRadiusMi} mi)`
			});
			return Response.json({
				available: true,
				distance_mi: rounded,
				fee: Math.round(TRAVEL.flat + TRAVEL.perMile * distance)
			});
		}
	} catch {}
	return Response.json(fallback("estimate only — exact distance unavailable"));
} } } });
var TermsRoute = Route$8.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$9
});
var StudioRoute = Route$7.update({
	id: "/studio",
	path: "/studio",
	getParentRoute: () => Route$9
});
var PrivacyRoute = Route$6.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$9
});
var MobileRoute = Route$5.update({
	id: "/mobile",
	path: "/mobile",
	getParentRoute: () => Route$9
});
var ClassicRoute = Route$4.update({
	id: "/classic",
	path: "/classic",
	getParentRoute: () => Route$9
});
var BookRoute = Route$3.update({
	id: "/book",
	path: "/book",
	getParentRoute: () => Route$9
});
var BlogRoute = Route$2.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$9
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var ServicesSlugRoute = Route$10.update({
	id: "/services/$slug",
	path: "/services/$slug",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute,
	BlogRoute,
	BookRoute,
	ClassicRoute,
	MobileRoute,
	PrivacyRoute,
	StudioRoute,
	TermsRoute,
	ApiTravelFeeRoute: Route.update({
		id: "/api/travel-fee",
		path: "/api/travel-fee",
		getParentRoute: () => Route$9
	}),
	ServicesSlugRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
