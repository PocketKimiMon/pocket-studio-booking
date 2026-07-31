import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CAL_BASE } from "../lib/services";
import { headFor } from "../lib/seo";
import { EmergencyModal } from "../components/EmergencyModal";

export const Route = createFileRoute("/mobile")({
  head: () => headFor("/mobile"),
  component: MobilePage,
});

const SERVICES = [
  { name: "Buzz Cut", slug: "buzz-cut", duration: "30 MIN", price: "at the chair", emoji: "✂" },
  { name: "Short Cut", slug: "short-cut", duration: "45 MIN", price: "at the chair", emoji: "💇" },
  { name: "Long Cut", slug: "long-cut", duration: "60 MIN", price: "at the chair", emoji: "🦁" },
  { name: "New-Client Color Consult", slug: "hair-consultation", duration: "45 MIN", price: "at the chair", emoji: "🎨" },
  { name: "Existing-Client Color Appointment", slug: "existing-client-color-appointment", duration: "3 HR / UP TO 5 HR", price: "at the chair", emoji: "🌈" },
];

const POSTS = [
  {
    date: "JUL 21, 2026",
    title: "former rudy's clients: this is where you book now",
    body: "i'm not at rudy's anymore. same hands, same energy, way fewer hoops. book direct, i come to you, done.",
  },
  {
    date: "JUL 14, 2026",
    title: "house calls + the hunt for a new chair",
    body: "house calls only right now — i show up, set up wherever works, and get you sorted. no travel fee for now. call it a thank-you while i figure out my next spot.",
  },
];

function MobilePage() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bone)", color: "var(--color-void)", fontFamily: "var(--font-sans)" }}>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .psm-pulse { animation: none !important; }
        }
        .psm-pulse { animation: psm-pulse 1.6s ease-in-out infinite; }
        @keyframes psm-pulse { 0%,100% { opacity: 1; } 50% { opacity: .35; } }
      `}</style>

      {/* sticky top bar */}
      <header
        className="sticky top-0 z-40 border-b-2 px-4 py-3"
        style={{ background: "var(--color-bone)", borderColor: "var(--color-void)" }}
      >
        <div className="mx-auto flex max-w-md items-center justify-between">
          <span className="flex items-center gap-2" style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>
            <span className="psm-pulse inline-block h-2 w-2 rounded-full" style={{ background: "var(--color-go)" }} />
            BOOKING OPEN
          </span>
          <a
            href="tel:425-918-2029"
            className="text-sm font-black underline underline-offset-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            425-918-2029
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 pb-24">
        {/* hero */}
        <section className="pt-10 pb-8 text-center">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", color: "var(--color-flush)" }}>
            YOUR CHAIR MOVED
          </p>
          <h1
            className="mt-2 text-6xl font-black leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            pocket
            <br />
            <span
              className="inline-block rounded-full px-4"
              style={{ background: "var(--color-lime)", color: "var(--color-void)", boxShadow: "4px 4px 0 var(--color-void)" }}
            >
              studio
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--color-mist)" }}>
            cuts + color with mykey. i come to you — house calls only, seattle area. no travel fee
            right now.
          </p>
          <p className="mt-4 text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
            THU 11–6 · FRI 12–5 · SAT–SUN 12–8
          </p>
        </section>

        {/* tea promo */}
        <section
          className="rounded-2xl border-2 p-5"
          style={{ background: "var(--color-lime)", borderColor: "var(--color-void)", boxShadow: "6px 6px 0 var(--color-void)" }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em" }}>CURRENT DEAL</p>
          <h2 className="mt-1 text-2xl font-black uppercase" style={{ fontFamily: "var(--font-display)" }}>
            spill the tea ☕
          </h2>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-void)" }}>
            book with some lead time and you get the full story of why i left the old shop — plus product
            recs — during your appointment.
          </p>
        </section>

        {/* services */}
        <section className="mt-10">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", color: "var(--color-ash)" }}>
            PICK A SERVICE
          </p>
          <div className="mt-3 space-y-3">
            {SERVICES.map((s) => {
              const open = openSlug === s.slug;
              return (
                <div
                  key={s.slug}
                  className="overflow-hidden rounded-2xl border-2"
                  style={{ borderColor: "var(--color-void)", background: "var(--color-card-w)", boxShadow: "4px 4px 0 var(--color-void)" }}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenSlug(open ? null : s.slug)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                  >
                    <span>
                      <span className="block text-lg font-black" style={{ fontFamily: "var(--font-display)" }}>
                        {s.emoji} {s.name}
                      </span>
                      <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
                        {s.duration}
                      </span>
                    </span>
                    <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-violet-brand)" }}>
                      {s.price}
                    </span>
                  </button>
                  {open && (
                    <div className="border-t-2 px-4 py-4" style={{ borderColor: "var(--color-void)" }}>
                      <div className="flex gap-2">
                        <a
                          href={`${CAL_BASE}${s.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 rounded-xl border-2 px-4 py-3 text-center text-sm font-black"
                          style={{ background: "var(--color-lime)", borderColor: "var(--color-void)", color: "var(--color-void)", boxShadow: "3px 3px 0 var(--color-void)" }}
                        >
                          BOOK →
                        </a>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="flex-1 rounded-xl border-2 px-4 py-3 text-center text-sm font-black"
                          style={{ borderColor: "var(--color-void)", color: "var(--color-void)" }}
                        >
                          DETAILS
                        </Link>
                      </div>
                      <p className="mt-3 text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
                        lead time required · one month at a time
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* emergency */}
        <button
          type="button"
          data-emergency
          className="mt-6 w-full rounded-2xl border-2 px-4 py-4 text-sm font-black"
          style={{ background: "var(--color-flush)", borderColor: "var(--color-flush)", color: "#fff", boxShadow: "4px 4px 0 var(--color-violet-brand)" }}
        >
          🚨 need it sooner? emergency request
        </button>

        {/* dispatches */}
        <section className="mt-12">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", color: "var(--color-ash)" }}>
            DISPATCHES FROM THE CHAIR
          </p>
          <div className="mt-3 space-y-3">
            {POSTS.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border-2 p-4"
                style={{ borderColor: "var(--color-void)", background: "var(--color-card-w)", boxShadow: "3px 3px 0 var(--color-void)" }}
              >
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-ash)", letterSpacing: "0.1em" }}>
                  {p.date}
                </p>
                <h3 className="mt-1 text-lg font-black" style={{ fontFamily: "var(--font-display)" }}>
                  {p.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
                  {p.body}
                </p>
              </article>
            ))}
            <Link
              to="/blog"
              className="block text-center text-sm underline underline-offset-4"
              style={{ color: "var(--color-violet-brand)", fontFamily: "var(--font-mono)" }}
            >
              all dispatches →
            </Link>
          </div>
        </section>

        {/* policies mini */}
        <section className="mt-12">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", color: "var(--color-ash)" }}>
            THE SHORT RULES
          </p>
          <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--color-mist)" }}>
            <li>· one month at a time, first come first serve</li>
            <li>· cuts and color both need lead time — emergencies available</li>
            <li>· 24-hour cancellation — emergencies are real, ghosting isn't</li>
            <li>· no-call-no-show = charged up to the full amount</li>
            <li>· 2-hour verification text — reply to hold your slot</li>
            <li>· house calls: safe space, pets secured if we haven't met them</li>
          </ul>
        </section>
      </main>

      {/* footer */}
      <footer className="border-t-2 px-4 py-8 text-center" style={{ borderColor: "var(--color-void)", background: "var(--color-card-2)" }}>
        <p className="text-sm">
          <a href="tel:425-918-2029" className="underline underline-offset-4" style={{ color: "var(--color-lime)" }}>
            425-918-2029
          </a>{" "}
          ·{" "}
          <a href="mailto:mykeypocket@icloud.com" className="underline underline-offset-4" style={{ color: "var(--color-lime)" }}>
            mykeypocket@icloud.com
          </a>
        </p>
        <p className="mt-3 text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
          <Link to="/" className="underline-offset-4 hover:underline">full site</Link> ·{" "}
          <Link to="/privacy" className="underline-offset-4 hover:underline">privacy</Link> ·{" "}
          <Link to="/terms" className="underline-offset-4 hover:underline">terms</Link>
        </p>
        <p className="mt-3 text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
          © pocket studio / mykey pocket · seattle, wa · not affiliated with rudy's barbershop
        </p>
      </footer>

      <EmergencyModal />
    </div>
  );
}
