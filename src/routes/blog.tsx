import { createFileRoute, Link } from "@tanstack/react-router";
import { UPDATES_NEWEST_FIRST } from "../lib/updates";
import { seoHead } from "../lib/seo";

// route path is /blog, but the UI copy says "updates" / "dispatches from the
// chair". not a generic hair-care journal: dated notes from one chair and one
// brain, lowercase, signed "— mykey".

export const Route = createFileRoute("/blog")({
  head: seoHead("/blog"),
  component: UpdatesPage,
});

function UpdatesPage() {
  return (
    <div
      style={{
        background: "var(--color-bone)",
        color: "var(--color-void)",
        fontFamily: "var(--font-sans)",
        minHeight: "100vh",
      }}
    >
      <TopBar />
      <Hero />
      <DispatchList />
      <BookCta />
      <FooterNote />
    </div>
  );
}

/* ── top bar ─────────────────────────────────────────── */
function TopBar() {
  return (
    <header
      className="sticky top-0 z-50 border-b-2"
      style={{ background: "var(--color-bone)", borderColor: "var(--color-void)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-black tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ✂ pocket studio · seattle
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="tel:425-918-2029"
            className="hidden text-sm underline-offset-4 hover:underline md:block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            425-918-2029
          </a>
          <Link
            to="/book"
            className="border-2 px-4 py-1.5 text-sm font-black transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--color-lime)",
              borderColor: "var(--color-void)",
              boxShadow: "3px 3px 0 var(--color-void)",
            }}
          >
            BOOK
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ── hero ────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:pb-16 sm:pt-20">
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          letterSpacing: "0.2em",
          color: "var(--color-flush)",
        }}
      >
        UPDATES — DISPATCHES FROM THE CHAIR
      </p>
      <h1
        className="mt-3 text-[13vw] font-extrabold leading-[0.9] tracking-tight sm:text-[88px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        dispatches from the{" "}
        <span
          className="inline-block rounded-full px-4 py-1 align-baseline"
          style={{
            background: "var(--color-lime)",
            color: "var(--color-void)",
            boxShadow: "6px 6px 0 var(--color-void)",
          }}
        >
          chair
        </span>
      </h1>
      <p
        className="mt-8 max-w-xl text-xl leading-relaxed sm:text-2xl"
        style={{ fontFamily: "Georgia, serif", color: "var(--color-mist)" }}
      >
        not a blog, not a newsletter. dated notes from one chair and one brain — what's changing,
        what i'm hunting for, and the stories clients let me tell. signed, always, — mykey.
      </p>
    </section>
  );
}

/* ── the dispatches ──────────────────────────────────── */
function DispatchList() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <div className="border-t-2" style={{ borderColor: "var(--color-void)" }}>
        {UPDATES_NEWEST_FIRST.map((post, i) => (
          <article
            key={post.slug}
            className="border-b-2 py-10 sm:py-12"
            style={{ borderColor: "var(--color-void)" }}
          >
            <div className="flex flex-wrap items-baseline gap-3">
              <span
                style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-ash)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <time
                dateTime={post.dateISO}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--color-ash)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {post.displayDate}
              </time>
            </div>
            <h2
              className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {post.title}
            </h2>
            <div
              className="mt-6 border-2 p-5 sm:p-8"
              style={{
                background: "#fff",
                borderColor: "rgba(18,14,23,.14)",
                boxShadow: "6px 6px 0 rgba(18,14,23,.08)",
              }}
            >
              {post.body.map((paragraph, j) => (
                <p
                  key={j}
                  className={j === 0 ? "text-base leading-relaxed sm:text-lg" : "mt-4 text-base leading-relaxed sm:text-lg"}
                  style={{ color: "var(--color-mist)" }}
                >
                  {paragraph}
                </p>
              ))}
              <p
                className="mt-5 text-2xl"
                style={{ fontFamily: "var(--font-hand)", color: "var(--color-flush)" }}
              >
                — mykey
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ── book cta ────────────────────────────────────────── */
function BookCta() {
  return (
    <section
      className="border-t-2"
      style={{ background: "var(--color-void)", borderColor: "var(--color-void)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:py-20">
        <h2
          className="text-3xl font-black leading-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-bone)" }}
        >
          rather skip the reading and just get the hair?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg" style={{ color: "var(--color-ash)" }}>
          house calls only right now, no travel fee yet. the calendar opens on the 1st for the full
          month ahead.
        </p>
        <Link
          to="/book"
          className="mt-8 inline-block border-2 px-10 py-4 text-lg font-black transition-transform hover:-translate-y-0.5"
          style={{
            background: "var(--color-lime)",
            borderColor: "var(--color-lime)",
            boxShadow: "4px 4px 0 var(--color-violet-brand)",
            color: "var(--color-void)",
          }}
        >
          BOOK A HOUSE CALL →
        </Link>
      </div>
    </section>
  );
}

/* ── footer note ─────────────────────────────────────── */
function FooterNote() {
  return (
    <footer
      className="border-t-2 px-5 py-8"
      style={{ background: "var(--color-void)", borderColor: "var(--color-void)" }}
    >
      <p
        className="mx-auto max-w-6xl text-center text-xs"
        style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}
      >
        <Link to="/" className="underline-offset-4 hover:underline">
          pocket studio
        </Link>{" "}
        · © pocket studio / mykey pocket · not affiliated with Rudy's Barbershop
      </p>
    </footer>
  );
}
