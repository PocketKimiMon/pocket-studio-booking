import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { BASE_URL, DEFAULT_OG_IMAGE, HAIR_SALON_JSONLD, SEO_CONFIG } from "../lib/seo";

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
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // Sitewide defaults — child routes override title/description/robots/
      // og:url via their own head (see src/lib/seo.ts + SEO-INJECTION.md).
      { title: SEO_CONFIG["/"].title },
      { name: "description", content: SEO_CONFIG["/"].description },
      { name: "author", content: "MyKey Pocket" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Pocket Studio" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE_URL}/` },
      { property: "og:title", content: SEO_CONFIG["/"].title },
      { property: "og:description", content: SEO_CONFIG["/"].description },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SEO_CONFIG["/"].title },
      { name: "twitter:description", content: SEO_CONFIG["/"].description },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [
      // NOTE: no root-level canonical — TanStack concatenates link tags
      // (unlike meta, they don't override), so every leaf route emits its own
      // canonical via buildHead() in src/lib/seo.ts. A root canonical here
      // would render duplicate <link rel="canonical"> on every child route.
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Caveat:wght@500;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(HAIR_SALON_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* reading mode (OpenDyslexic) — DEFAULT ON, persisted in localStorage
            ("ps-reading-mode": "on" | "off"; unset = on). applied pre-paint so
            the dyslexia-friendly fonts land without a flash. guarded: works
            even when localStorage is unavailable. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var m = window.localStorage.getItem('ps-reading-mode');
                  if (m === null || m === 'on') document.body.classList.add('reading-mode');
                } catch (e) {
                  if (document.body) document.body.classList.add('reading-mode');
                }
              })();
            `,
          }}
        />
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
      <ReadingModeToggle />
    </QueryClientProvider>
  );
}

/**
 * Reading mode toggle — visible on every page (fixed bottom-left).
 * OpenDyslexic + open spacing is ON BY DEFAULT; persists to localStorage
 * ("ps-reading-mode"). SSR-safe: all window/localStorage/body access is
 * guarded and client-only.
 */
function ReadingModeToggle() {
  const [on, setOn] = useState(true);

  useEffect(() => {
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
    } catch {
      /* storage unavailable — the class toggle still works for this session */
    }
    document.body.classList.toggle("reading-mode", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      className="fixed bottom-4 left-4 z-[70] border-2 px-3 py-1.5 text-xs font-black transition-transform hover:-translate-y-0.5"
      style={{
        background: on ? "var(--color-lime)" : "var(--color-bone)",
        color: "var(--color-void)",
        borderColor: "var(--color-void)",
        boxShadow: "3px 3px 0 var(--color-void)",
        fontFamily: "var(--font-mono)",
      }}
    >
      reading mode: {on ? "on" : "off"}
    </button>
  );
}
