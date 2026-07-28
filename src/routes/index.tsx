import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CAL_BASE } from "../lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pocket Studio — MyKey Pocket · Seattle Hair, House Calls" },
      { name: "description", content: "Independent Seattle hair studio by MyKey Pocket (they/them). Cuts & color, house calls, booked one month at a time." },
    ],
  }),
  component: Page,
});

/* /studio (react-newest-original) copy, rendered in the new layout. */
const STUDIO_SERVICES = [
  { name: "Buzz Cut", slug: "buzz-cut", duration: "30 MIN", price: "$45", desc: "Clean, quick, dialed clipper work.", accent: "var(--color-lime)" },
  { name: "Short Cut", slug: "short-cut", duration: "45 MIN", price: "$65", desc: "Precision short shapes with intention.", accent: "var(--color-flush)" },
  { name: "Long Cut", slug: "long-cut", duration: "60 MIN", price: "$85", desc: "Long layers, texture, and movement.", accent: "var(--color-violet-brand)" },
  { name: "New-Client Color Consult", slug: "hair-consultation", duration: "45 MIN", price: "$35", desc: "Meet, plan, and price your first color visit.", accent: "var(--color-violet-brand)" },
  { name: "Existing-Client Color Appointment", slug: "existing-client-color-appointment", duration: "3 HR / UP TO 5 HR", price: "$120+", desc: "Full color session for returning clients.", accent: "var(--color-lime)" },
];

const POLICIES = [
  { n: "01", h: "Cancellation", p: "24-hour notice required. Genuine emergencies excepted — text or call as soon as you can." },
  { n: "02", h: "No-show", p: "Miss without notice and the full quoted price may be charged. Repeat no-shows are refused future bookings." },
  { n: "03", h: "2-Hour Verify", p: "You'll get a check-in text about 2 hours before. No response = slot released. Reply to hold your spot." },
  { n: "04", h: "House Calls", p: "Seattle area only. Clean, private-ish, safe workspace required. Pets secured if we haven't met them." },
];

const POSTS = [
  { date: "JUL 12, 2026", h: "Now taking former Rudy's clients", p: "If we used to work together at Rudy's, come on over. Same hands, better tea, your couch." },
  { date: "JUN 28, 2026", h: "Summer color slots open", p: "Rolling one-month calendar. Book 2+ days out for the full tea + goods experience." },
  { date: "JUN 05, 2026", h: "Why house calls, actually", p: "Fewer salon costs, more of your money into the actual work. And you don't have to leave the couch." },
];

function Page() {
  return (
    <div style={{ background: "var(--color-bone)", color: "var(--color-void)", fontFamily: "var(--font-sans)" }}>
      <TopBar />
      <Hero />
      <Marquee />
      <Services />
      <Updates />
      <About />
      <Rules />
      <Book />
      <Footer />
    </div>
  );
}

/* ── top bar ─────────────────────────────────────────── */
function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b-2" style={{ background: "var(--color-bone)", borderColor: "var(--color-void)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <a href="#top" className="flex items-center gap-2 text-sm font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          ✂ POCKET STUDIO
        </a>
        <div className="hidden items-center gap-2 sm:flex" style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
          <span className="inline-block h-2 w-2 animate-pulse rounded-full" style={{ background: "var(--color-lime)" }} />
          BOOKING OPEN
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:425-918-2029" className="hidden text-sm underline-offset-4 hover:underline md:block" style={{ fontFamily: "var(--font-mono)" }}>
            425-918-2029
          </a>
          <Link
            to="/book"
            className="border-2 px-4 py-1.5 text-sm font-black transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--color-lime)", borderColor: "var(--color-void)", boxShadow: "3px 3px 0 var(--color-void)" }}
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
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:pb-20 sm:pt-20">
      <h1
        className="text-[17vw] font-extrabold leading-[0.88] tracking-tight sm:text-[110px] md:text-[128px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        POCKET <span className="inline-block rounded-full px-4 py-1 align-baseline" style={{ background: "var(--color-lime)", color: "var(--color-void)", boxShadow: "6px 6px 0 var(--color-void)" }}>STUDIO</span>
      </h1>
      <p className="mt-8 max-w-xl text-xl leading-relaxed sm:text-2xl" style={{ fontFamily: "Georgia, serif", color: "var(--color-mist)" }}>
        Independent hair studio in Seattle. Cuts &amp; color from MyKey Pocket (they/them) — small chair, big attention.
      </p>

      {/* new-client special */}
      <div
        className="relative mt-10 rounded-2xl border-2 p-6 sm:p-8"
        style={{ background: "var(--color-lime)", borderColor: "var(--color-void)", boxShadow: "10px 10px 0 var(--color-void)" }}
      >
        <span className="absolute -top-4 -left-2 -rotate-6 text-2xl sm:text-3xl" style={{ fontFamily: "var(--font-hand)", color: "var(--color-flush)" }}>
          new client special ~
        </span>
        <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
          Spill the TEA ☕
        </h2>
        <p className="mt-3 max-w-lg text-base sm:text-lg" style={{ color: "var(--color-void)" }}>
          First-time cut? Bring your favorite drink order and a photo or two. We'll talk shape, upkeep, and what you actually want to live with.
        </p>
      </div>

      {/* notice bands */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border p-4 text-sm" style={{ background: "rgba(155,92,255,.1)", borderColor: "var(--color-violet-brand)" }}>
          <strong className="font-bold" style={{ color: "var(--color-violet-brand)" }}>heads up:</strong>{" "}
          Books open one month at a time, first come first serve. New color? Consult first, at least 3 days out.
        </div>
        <div className="rounded-xl border p-4 text-sm" style={{ background: "rgba(255,90,95,.08)", borderColor: "var(--color-flush)" }}>
          <strong className="font-bold" style={{ color: "var(--color-flush)" }}>house call:</strong>{" "}
          Pocket Studio is inside a shared home space — please arrive on time and step lightly.
        </div>
      </div>

      {/* hours */}
      <div className="mt-8 flex flex-wrap items-center gap-4 text-sm" style={{ fontFamily: "var(--font-mono)", color: "var(--color-mist)" }}>
        <span>HOURS</span>
        <span>THU 11–6</span>
        <span>FRI 12–5</span>
        <span>SAT–SUN 12–8</span>
        <span>Seattle, WA</span>
      </div>
    </section>
  );
}

/* ── marquee ─────────────────────────────────────────── */
function Marquee() {
  const items = "POCKET STUDIO ✦ SEATTLE HAIR ✦ HOUSE CALLS ✦ CUTS & COLOR ✦ ";
  return (
    <div className="overflow-hidden border-y-2 py-2" style={{ background: "var(--color-void)", borderColor: "var(--color-void)" }} aria-hidden>
      <div className="marquee whitespace-nowrap text-sm font-bold tracking-widest" style={{ color: "var(--color-lime)", fontFamily: "var(--font-mono)" }}>
        {items.repeat(6)}
      </div>
      <style>{`
        .marquee { display:inline-block; animation: ps-marquee 30s linear infinite; }
        @keyframes ps-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .marquee { animation: none; } }
      `}</style>
    </div>
  );
}

/* ── services ledger ─────────────────────────────────── */
function Services() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.15em", color: "var(--color-ash)" }}>SERVICES</p>
      <h2 className="mt-2 text-4xl font-black leading-tight sm:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
        What you can book.
      </h2>
      <p className="mt-3 text-base" style={{ color: "var(--color-mist)" }}>
        <span className="hidden sm:inline">Hover a row for the details, then book.</span>
        <span className="sm:hidden">Tap a row for the details, then book.</span>
      </p>

      <div className="mt-10 border-t-2" style={{ borderColor: "var(--color-void)" }}>
        {STUDIO_SERVICES.map((s, i) => {
          const isOpen = open === s.slug;
          return (
            <div key={s.slug} className="group border-b-2" style={{ borderColor: "var(--color-void)" }}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : s.slug)}
                className="flex w-full items-baseline gap-4 py-5 text-left transition-colors sm:gap-8"
              >
                <span className="w-8 shrink-0 text-sm" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
                  0{i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-2xl font-black tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                    {s.name}
                  </span>
                  <span className="mt-1 block text-sm" style={{ color: "var(--color-mist)" }}>{s.desc}</span>
                </span>
                <span className="hidden shrink-0 text-sm sm:block" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
                  {s.duration}
                </span>
                <span className="shrink-0 text-xl font-black sm:text-2xl" style={{ fontFamily: "var(--font-display)", color: s.accent === "var(--color-lime)" ? "var(--color-void)" : s.accent }}>
                  {s.price}
                </span>
                <span
                  className="hidden h-8 w-8 shrink-0 items-center justify-center border-2 text-lg transition-transform group-hover:rotate-45 sm:flex"
                  style={{ borderColor: "var(--color-void)", background: s.accent }}
                  aria-hidden
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-200 sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-40 sm:group-hover:opacity-100 ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="flex flex-col gap-3 pb-6 pl-12 pr-2 sm:flex-row sm:items-center sm:justify-between sm:pl-16">
                  <p className="max-w-xl text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
                    {s.desc}
                    <span className="sm:hidden" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}> · {s.duration}</span>
                  </p>
                  <span className="flex shrink-0 flex-wrap items-center gap-3">
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="inline-block border-2 px-5 py-2 text-sm font-black transition-transform hover:-translate-y-0.5"
                      style={{ background: s.accent, borderColor: "var(--color-void)", boxShadow: "3px 3px 0 var(--color-void)", color: "var(--color-void)" }}
                    >
                      SEE THE WORK →
                    </Link>
                    <a
                      href={`${CAL_BASE}${s.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block border-2 px-5 py-2 text-sm font-black transition-transform hover:-translate-y-0.5"
                      style={{ background: "#fff", borderColor: "var(--color-void)", boxShadow: "3px 3px 0 var(--color-void)", color: "var(--color-void)" }}
                    >
                      BOOK →
                    </a>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── updates ──────────────────────────────────────────── */
function Updates() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.15em", color: "var(--color-ash)" }}>UPDATES</p>
      <h2 className="mt-2 text-4xl font-black leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
        The latest.
      </h2>
      <div className="mt-8">
        {POSTS.map((p) => (
          <article key={p.h} className="mb-3 border-2 p-5 sm:p-6" style={{ background: "#fff", borderColor: "rgba(18,14,23,.14)", boxShadow: "2px 2px 0 rgba(18,14,23,.08)" }}>
            <div className="mb-1" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ash)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{p.date}</div>
            <h4 className="text-xl font-black" style={{ fontFamily: "var(--font-display)" }}>{p.h}</h4>
            <p className="mt-1 text-sm leading-relaxed sm:text-base" style={{ color: "var(--color-mist)" }}>{p.p}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ── about ───────────────────────────────────────────── */
function About() {
  return (
    <section className="border-y-2" style={{ background: "var(--color-card-2)", borderColor: "var(--color-void)" }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-[1.2fr_1fr] sm:py-24">
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.15em", color: "var(--color-flush)" }}>ABOUT</p>
          <h2 className="mt-2 text-4xl font-black leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Small studio, careful hands.
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--color-mist)" }}>
            I'm MyKey (they/them) — a Seattle hairstylist running Pocket Studio as an indie parent chair. Not affiliated with Rudy's Barbershop. I take on a small number of clients each month so every cut and color gets the time it actually needs.
          </p>
          <ul className="mt-6 space-y-3 text-base" style={{ color: "var(--color-void)" }}>
            <li className="flex gap-3"><span style={{ color: "var(--color-lime)" }}>▍</span> Textured cuts, gender-inclusive shapes, grown-out grace.</li>
            <li className="flex gap-3"><span style={{ color: "var(--color-violet-brand)" }}>▍</span> Color built around your hair's biology — porosity, history, tone.</li>
            <li className="flex gap-3"><span style={{ color: "var(--color-flush)" }}>▍</span> Consult-first for new color clients so pricing &amp; timing are honest.</li>
          </ul>
        </div>
        <div
          className="relative self-start rounded-2xl p-6"
          style={{ background: "var(--color-void)", color: "var(--color-bone)", boxShadow: "10px 10px 0 var(--color-violet-brand)" }}
        >
          <p className="text-sm uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "var(--color-lime)" }}>say hi</p>
          <h3 className="mt-2 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Reach the chair</h3>
          <div className="mt-5 space-y-3 text-sm">
            <a href="mailto:mykeypocket@icloud.com" className="block hover:underline" style={{ color: "var(--color-lime)" }}>✉ mykeypocket@icloud.com</a>
            <a href="tel:425-918-2029" className="block hover:underline" style={{ color: "var(--color-lime)" }}>☎ 425-918-2029</a>
            <div className="block" style={{ color: "var(--color-bone)" }}>⌖ Seattle, WA · by appointment</div>
          </div>
          <p className="mt-6 text-xs" style={{ color: "rgba(244,236,222,.7)" }}>
            Text is fastest. Please allow up to 24 hours for a reply outside studio hours.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── house rules ─────────────────────────────────────── */
function Rules() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.15em", color: "var(--color-ash)" }}>POLICIES</p>
      <h2 className="mt-2 text-4xl font-black leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
        The house rules.
      </h2>
      <ol className="mt-10 border-t" style={{ borderColor: "var(--color-ash)" }}>
        {POLICIES.map((p) => (
          <li key={p.h} className="grid gap-1 border-b py-5 sm:grid-cols-[64px_240px_1fr] sm:gap-6" style={{ borderColor: "var(--color-ash)" }}>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)", fontSize: 13 }}>{p.n}</span>
            <h3 className="text-lg font-black" style={{ fontFamily: "var(--font-display)" }}>{p.h}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>{p.p}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ── booking ─────────────────────────────────────────── */
function Book() {
  return (
    <section id="book" className="border-t-2" style={{ background: "var(--color-void)", borderColor: "var(--color-void)" }}>
      <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:py-24">
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.15em", color: "var(--color-lime)" }}>BOOK</p>
        <h2 className="mt-2 text-4xl font-black leading-tight sm:text-6xl" style={{ fontFamily: "var(--font-display)", color: "var(--color-bone)" }}>
          Pick your slot.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg" style={{ color: "var(--color-ash)" }}>
          Books open one month at a time, first come first serve.
        </p>
        <Link
          to="/book"
          className="mt-8 inline-block border-2 px-10 py-4 text-lg font-black transition-transform hover:-translate-y-0.5"
          style={{ background: "var(--color-lime)", borderColor: "var(--color-lime)", boxShadow: "4px 4px 0 var(--color-violet-brand)", color: "var(--color-void)" }}
        >
          PICK YOUR SLOT →
        </Link>
        <p className="mx-auto mt-6 max-w-xl text-sm" style={{ color: "var(--color-ash)" }}>
          by booking you agree to the <a href="/classic/terms.html" className="underline underline-offset-4" style={{ color: "var(--color-lime)" }}>terms of service</a> and <a href="/classic/privacy.html" className="underline underline-offset-4" style={{ color: "var(--color-lime)" }}>privacy policy</a>, including the 24-hour cancel rule, no-show charge, SMS/email reminders, and house-call terms. booking runs on cal.com.
        </p>
      </div>
    </section>
  );
}

/* ── footer ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t px-5 py-8" style={{ background: "var(--color-void)", borderColor: "var(--color-ash)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-xs sm:flex-row sm:items-center" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>
        <span>© {new Date().getFullYear()} Pocket Studio · MyKey Pocket · Seattle, WA</span>
        <span className="flex gap-5">
          <a href="/classic/terms.html" className="underline-offset-4 hover:underline">Terms</a>
          <a href="/classic/privacy.html" className="underline-offset-4 hover:underline">Privacy</a>
          <a href="https://pocketstudio.biz" className="underline-offset-4 hover:underline">pocketstudio.biz</a>
        </span>
      </div>
    </footer>
  );
}
