import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS } from "../lib/posts";
import { headFor } from "../lib/seo";
import { ReadingModeToggle } from "../components/ReadingModeToggle";

export const Route = createFileRoute("/blog")({
  head: () => headFor("/blog"),
  component: Page,
});

function Page() {
  return (
    <div
      style={{
        background: "var(--color-bone)",
        color: "var(--color-void)",
        fontFamily: "var(--font-sans)",
        minHeight: "100vh",
      }}
    >
      <header
        className="sticky top-0 z-50 border-b-2"
        style={{ background: "var(--color-bone)", borderColor: "var(--color-void)" }}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-5 py-3">
          <Link
            to="/"
            className="text-sm font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ← pocket studio
          </Link>
          <div className="flex items-center gap-3">
            <ReadingModeToggle compact />
            <Link
              to="/book"
              className="border-2 px-4 py-1.5 text-sm font-black transition-transform hover:-translate-y-0.5"
              style={{
                background: "var(--color-lime)",
                borderColor: "var(--color-void)",
                boxShadow: "3px 3px 0 var(--color-void)",
                color: "var(--color-void)",
              }}
            >
              BOOK
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 pb-24">
        <section className="pt-12 sm:pt-16">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.2em",
              color: "var(--color-flush)",
            }}
          >
            JOURNAL
          </p>
          <h1
            className="mt-3 text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            dispatches from the chair
          </h1>
          <p
            className="mt-4 max-w-xl text-lg leading-relaxed"
            style={{ color: "var(--color-mist)" }}
          >
            dated notes from one brain behind one chair. house-call logistics, color season,
            shop gossip (the legal kind), and whatever else needs saying.
          </p>
          <figure
            className="mt-8 overflow-hidden rounded-2xl border-2"
            style={{ borderColor: "var(--color-void)", boxShadow: "8px 8px 0 var(--color-lime)" }}
          >
            <img
              src="/blog-header.jpg"
              alt="the chair, mid-house-call — tools out, tea on"
              className="aspect-[21/9] w-full object-cover"
              loading="eager"
            />
          </figure>
        </section>

        <section className="mt-12 space-y-4">
          {POSTS.map((p, i) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="block border-2 p-5 transition-transform hover:-translate-y-0.5 sm:p-6"
              style={{
                borderColor: "var(--color-void)",
                borderRadius: 16,
                background: i === 0 ? "var(--color-card-2)" : "var(--color-card-w)",
                boxShadow: i === 0 ? "6px 6px 0 var(--color-void)" : "3px 3px 0 var(--color-void)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-ash)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                {p.date}
              </p>
              <h2
                className="mt-1 text-2xl font-black leading-tight sm:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed sm:text-base" style={{ color: "var(--color-mist)" }}>
                {p.excerpt}
              </p>
              <p
                className="mt-3 text-xl"
                style={{ fontFamily: "var(--font-hand)", color: "var(--color-flush)" }}
              >
                read it →
              </p>
            </Link>
          ))}
        </section>

        <section
          className="mt-12 border-2 p-6 text-center"
          style={{
            borderColor: "var(--color-void)",
            borderRadius: 16,
            background: "var(--color-lime)",
            boxShadow: "6px 6px 0 var(--color-void)",
          }}
        >
          <p className="text-2xl" style={{ fontFamily: "var(--font-hand)" }}>
            enough reading — your ends aren't getting any less split ~
          </p>
          <Link
            to="/book"
            className="mt-4 inline-block border-2 px-8 py-3 text-base font-black transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--color-void)",
              borderColor: "var(--color-void)",
              color: "var(--color-bone)",
              boxShadow: "4px 4px 0 rgba(11,11,15,.4)",
            }}
          >
            BOOK THE CHAIR →
          </Link>
        </section>
      </main>

      <footer
        className="border-t-2 px-5 py-8 text-center"
        style={{ borderColor: "var(--color-void)", background: "var(--color-card-2)" }}
      >
        <p className="text-sm" style={{ color: "var(--color-mist)" }}>
          <Link to="/" className="underline underline-offset-4" style={{ color: "var(--color-lime)" }}>
            pocket studio
          </Link>{" "}
          ·{" "}
          <a href="sms:425-918-2029" className="underline underline-offset-4" style={{ color: "var(--color-lime)" }}>
            425-918-2029
          </a>{" "}
          ·{" "}
          <a
            href="mailto:mykeypocket@icloud.com"
            className="underline underline-offset-4"
            style={{ color: "var(--color-lime)" }}
          >
            mykeypocket@icloud.com
          </a>
        </p>
        <p
          className="mt-3 text-xs"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
        >
          © pocket studio / mykey pocket · seattle, wa
        </p>
      </footer>
    </div>
  );
}
