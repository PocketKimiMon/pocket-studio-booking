import { createFileRoute, Link } from "@tanstack/react-router";
import { CAL_BASE, SERVICES } from "../lib/services";
import { seoHead } from "../lib/seo";

export const Route = createFileRoute("/book")({
  head: seoHead("/book"),
  component: BookingPage,
});

function BookingPage() {
  return (
    <div
      style={{
        background: "var(--color-bone)",
        color: "var(--color-void)",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* top bar */}
      <header
        className="sticky top-0 z-50 border-b-2"
        style={{ background: "var(--color-bone)", borderColor: "var(--color-void)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
          <Link
            to="/"
            className="text-sm font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ✂ POCKET STUDIO
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="hidden text-sm underline-offset-4 hover:underline sm:block"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ← home
            </Link>
            <a
              href="tel:425-918-2029"
              className="border-2 px-4 py-1.5 text-sm font-black transition-transform hover:-translate-y-0.5"
              style={{
                background: "var(--color-lime)",
                borderColor: "var(--color-void)",
                boxShadow: "3px 3px 0 var(--color-void)",
              }}
            >
              CALL/TEXT
            </a>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:pt-16">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            letterSpacing: "0.2em",
            color: "var(--color-flush)",
          }}
        >
          BOOKING
        </p>
        <h1
          className="mt-3 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          pick a slot.
          <br />
          <span
            className="inline-block rounded-full px-4 py-1 align-baseline"
            style={{
              background: "var(--color-lime)",
              color: "var(--color-void)",
              boxShadow: "6px 6px 0 var(--color-void)",
            }}
          >
            i come to you.
          </span>
        </h1>
        <p
          className="mt-6 max-w-xl text-xl leading-relaxed"
          style={{ fontFamily: "Georgia, serif", color: "var(--color-mist)" }}
        >
          booking runs through cal.com — pick a service below and you'll land on my calendar. house
          calls only right now, no travel fee for now.
        </p>
      </section>

      {/* how it works */}
      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div
          className="border-2 p-6 sm:p-8"
          style={{
            background: "var(--color-card-2)",
            borderColor: "var(--color-void)",
            boxShadow: "6px 6px 0 var(--color-void)",
          }}
        >
          <h2
            className="text-2xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            how it works
          </h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "you pick a slot on cal.com",
              "you get a confirmation + my number",
              "$25 deposit holds your slot (applied to your total)",
              "i show up with the chair, tools, and gossip",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black"
                  style={{ background: "var(--color-lime)", color: "var(--color-void)" }}
                >
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* the calendar */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
        <h2
          className="text-3xl font-black tracking-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          the calendar
        </h2>
        <p
          className="mt-3 max-w-xl text-base"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
        >
          each service has its own cal.com page. opens the 1st for the full month ahead — prime
          slots go fast.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc) => (
            <a
              key={svc.slug}
              href={`${CAL_BASE}${svc.slug}`}
              target="_blank"
              rel="noreferrer"
              className="group block border-2 p-5 transition-transform hover:-translate-y-1"
              style={{
                background: "#fff",
                borderColor: "var(--color-void)",
                boxShadow: "5px 5px 0 var(--color-void)",
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className="inline-block rounded-full px-3 py-1 text-sm font-black"
                  style={{ background: svc.accent, color: "var(--color-void)" }}
                >
                  {svc.price}
                </span>
                <span
                  style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-ash)" }}
                >
                  {svc.duration}
                </span>
              </div>
              <h3
                className="mt-4 text-xl font-black leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {svc.name}
              </h3>
              <p className="mt-1 text-sm" style={{ color: "var(--color-mist)" }}>
                {svc.blurb}
              </p>
              <p
                className="mt-4 text-sm font-bold transition-transform group-hover:translate-x-1"
                style={{ color: "var(--color-flush)" }}
              >
                grab a slot ↗
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* fallback strip */}
      <section
        className="border-y-2 px-5 py-12 text-center"
        style={{ background: "var(--color-void)", borderColor: "var(--color-void)" }}
      >
        <p
          className="text-2xl font-black leading-snug sm:text-3xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-bone)" }}
        >
          cal.com being weird? just text me —{" "}
          <a href="tel:425-918-2029" className="underline" style={{ color: "var(--color-lime)" }}>
            425-918-2029
          </a>
        </p>
        <p className="mt-3 text-sm" style={{ color: "var(--color-ash)" }}>
          i answer my own phone. thu–sun, seattle.
        </p>
      </section>

      {/* fine print */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              h: "the deposit",
              p: "$25 holds your slot and comes off your total. no-shows make me sad and make other clients miss out.",
            },
            {
              h: "the lead time",
              p: "cuts book at least 2 days out. new color clients: consult first, 3 days out. existing color: 1 week out.",
            },
            {
              h: "the disclaimer",
              p: "pocket studio is independent — not affiliated with rudy's barbershop. terms + privacy live on the classic page footer.",
            },
          ].map((x, i) => (
            <div
              key={i}
              className="border-2 p-5"
              style={{
                background: i % 2 ? "#fff" : "var(--color-card-2)",
                borderColor: "var(--color-void)",
                boxShadow: "4px 4px 0 var(--color-void)",
              }}
            >
              <h3 className="text-lg font-black" style={{ fontFamily: "var(--font-display)" }}>
                {x.h}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
                {x.p}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer
        className="border-t px-5 py-8"
        style={{ background: "var(--color-void)", borderColor: "var(--color-ash)" }}
      >
        <div
          className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-xs sm:flex-row sm:items-center"
          style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}
        >
          <span>
            © {new Date().getFullYear()} Pocket Studio · MyKey Pocket (they/them) · Seattle
          </span>
          <span className="flex gap-5">
            <Link to="/" className="underline-offset-4 hover:underline">
              Home
            </Link>
            <a href="/classic/terms.html" className="underline-offset-4 hover:underline">
              Terms
            </a>
            <a href="/classic/privacy.html" className="underline-offset-4 hover:underline">
              Privacy
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
