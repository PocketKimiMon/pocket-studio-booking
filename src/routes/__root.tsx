import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { headFor } from "../lib/seo";

const SITE_URL = "https://pocketstudio.biz";
const SITE_NAME = "Pocket Studio";
const DEFAULT_DESC =
  "Book cuts and color directly with MyKey Pocket, Seattle hair artist. House calls only, no front desk in the way. Former Rudy's clients: this is where you book now.";

const SALON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: SITE_NAME,
  description: DEFAULT_DESC,
  url: SITE_URL + "/",
  telephone: "+1-425-918-2029",
  email: "mykeypocket@icloud.com",
  image: SITE_URL + "/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seattle",
    addressRegion: "WA",
    addressCountry: "US",
  },
  areaServed: [
    "Capitol Hill",
    "Ballard",
    "Fremont",
    "Wallingford",
    "Queen Anne",
    "Green Lake",
    "Beacon Hill",
    "Columbia City",
    "West Seattle",
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
    jobTitle: "Hair Artist",
    description: "Independent Seattle hairstylist (they/them). House calls only.",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Buzz Cut" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Short Cut" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Long Cut" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "New-Client Color Consult" } },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Existing-Client Color Appointment" },
        description: "Priced at the chair, based on hair and complexity.",
      },
    ],
  },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    // SEO contract: default head comes from src/lib/seo.ts (currently a LOCAL STUB,
    // integrator swaps in the seo agent's real file). Route-critical links/scripts
    // (stylesheet, fonts, icon, Salon JSON-LD) stay wired here regardless.
    const seo = headFor("/");
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Pocket Studio / MyKey Pocket" },
        { name: "theme-color", content: "#0b0b0f" },
        ...seo.meta,
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800;900&family=Caveat:wght@500;600;700&family=Hanken+Grotesk:wght@400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap",
        },
        ...(seo.links ?? []),
      ],
      scripts: [...(seo.scripts ?? [])],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Reading mode (dyslexia-friendly) — default ON; must run before paint. */}
        <script src="/reading-mode.js" />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
