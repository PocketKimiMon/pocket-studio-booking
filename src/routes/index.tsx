import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CAL_BASE } from "../lib/services";
import { BookingPopup } from "../components/BookingPopup";
import { EmergencyModal } from "../components/EmergencyModal";
import { TravelFee } from "../components/TravelFee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pocket Studio — book with MyKey" },
      {
        name: "description",
        content:
          "Book cuts and color directly with MyKey Pocket, Seattle hair artist. House calls only, no front desk in the way. Former Rudy's clients: this is where you book now.",
      },
    ],
  }),
  component: Page,
});

const STUDIO_SERVICES = [
  {
    name: "Buzz Cut",
    slug: "buzz-cut",
    duration: "30 MIN",
    price: "$45",
    desc: "clippers all over, clean edges, back to your life.",
    tag: "quick",
    accent: "var(--color-lime)",
  },
  {
    name: "Short Cut",
    slug: "short-cut",
    duration: "45 MIN",
    price: "$65",
    desc: "scissor or clipper-over-comb, shaped to your actual head.",
    tag: "classic",
    accent: "var(--color-flush)",
  },
  {
    name: "Long Cut",
    slug: "long-cut",
    duration: "60 MIN",
    price: "$85",
    desc: "layers, texture, cleanup. keep the length, kill the dead ends.",
    tag: "detail",
    accent: "var(--color-violet-brand)",
  },
  {
    name: "New-Client Color Consult",
    slug: "hair-consultation",
    duration: "45 MIN",
    price: "$35",
    desc: "first time coloring with me? we sit down and plan everything (lift, tone, maintenance, realistic expectations) before anything touches your hair. books 3 days out.",
    tag: "required for new color",
    accent: "var(--color-violet-brand)",
  },
  {
    name: "Existing-Client Color Appointment",
    slug: "existing-client-color-appointment",
    duration: "3 HR",
    price: "$120+",
    desc: "roots, refresh, full transformation. we already know the vibe. block the afternoon; complex sessions can run 3–5 hours and i'm not rushing your hair for anyone's schedule. books 1 week out.",
    tag: "color",
    accent: "var(--color-lime)",
  },
];

const POLICIES = [
  {
    n: "01",
    h: "one month at a time",
    p: "calendar opens on the 1st for the full month ahead. first come, first serve, and i don't hold slots.",
  },
  {
    n: "02",
    h: "advance notice",
    p: "haircuts book 2 days out. new-client color consults book 3 days out. existing-client color books 1 week out. color takes prep and i refuse to wing it. need it sooner? send an emergency request.",
  },
  {
    n: "03",
    h: "24-hour cancellation",
    p: "cancel or reschedule? 24 hours notice. emergencies are real and i'm reasonable, but my time is literally how i pay rent, so please don't ghost me.",
  },
  {
    n: "04",
    h: "no-call-no-show = charged",
    p: "miss a confirmed appointment with no heads-up and you'll be charged up to the full service amount. i'll invoice you if there's no card on file. fairness goes both ways. full terms on the terms page.",
  },
  {
    n: "05",
    h: "2-hour confirmation",
    p: "you'll get a text or email 2 hours before your appointment. if i don't hear back, i may give your slot to someone else. just a quick \"yep\" is all i need.",
  },
  {
    n: "06",
    h: "pricing & payment",
    p: "prices are quoted before or at the chair. they vary by hair and complexity because hair isn't one-size-fits-all. payment is due at the appointment unless we work something out.",
  },
  {
    n: "07",
    h: "house-call space",
    p: "give me a safe, ready spot and an accurate address. i may leave if the situation isn't workable; nothing personal. let me know about allergies and any prior chemical work so i don't fry your hair.",
  },
];

function Page() {
  return (
    <div
      style={{
        background: "var(--color-bone)",
        color: "var(--color-void)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <TopBar />
      <Hero />
      <Marquee />
      <About />
      <Updates />
      <Services />
      <Rules />
      <Book />
      <TravelFee />
      <Footer />
      <BookingPopup />
      <EmergencyModal />
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
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-black tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ✂ pocket studio · seattle
        </a>
        <div
          className="hidden items-center gap-2 sm:flex"
          style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}
        >
          <span
            className="inline-block h-2 w-2 animate-pulse rounded-full"
            style={{ background: "var(--color-lime)" }}
          />
          booking open
        </div>
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
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:pb-20 sm:pt-20">
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          letterSpacing: "0.2em",
          color: "var(--color-flush)",
        }}
      >
        YOUR CHAIR MOVED
      </p>
      <h1
        className="mt-3 text-[15vw] font-extrabold leading-[0.9] tracking-tight sm:text-[96px] md:text-[112px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        mykey{" "}
        <span
          className="inline-block rounded-full px-4 py-1 align-baseline"
          style={{
            background: "var(--color-lime)",
            color: "var(--color-void)",
            boxShadow: "6px 6px 0 var(--color-void)",
          }}
        >
          pocket
        </span>
      </h1>
      <p
        className="mt-8 max-w-xl text-xl leading-relaxed sm:text-2xl"
        style={{ fontFamily: "Georgia, serif", color: "var(--color-mist)" }}
      >
        book cuts + color directly. no front desk, no phone tag, no wondering if the message went
        through.
      </p>

      {/* stickers */}
      <div
        className="mt-6 flex flex-wrap gap-2"
        style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}
      >
        {["✂ scissors ready", "color chaos welcome", "house calls", "the tea if you rebook"].map(
          (s, i) => (
            <span
              key={s}
              className="inline-block rounded-full border-2 px-3 py-1"
              style={{
                borderColor: "var(--color-void)",
                background: i % 2 === 0 ? "#fff" : "rgba(155,92,255,.12)",
                transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
              }}
            >
              {s}
            </span>
          ),
        )}
      </div>

      {/* spill the tea promo */}
      <div
        className="relative mt-10 rounded-2xl border-2 p-6 sm:p-8"
        style={{
          background: "var(--color-lime)",
          borderColor: "var(--color-void)",
          boxShadow: "10px 10px 0 var(--color-void)",
        }}
      >
        <span
          className="absolute -top-4 -left-2 -rotate-6 text-2xl sm:text-3xl"
          style={{ fontFamily: "var(--font-hand)", color: "var(--color-flush)" }}
        >
          spill the tea ~
        </span>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.15em" }}>
          CURRENT DEAL
        </p>
        <h2
          className="mt-1 text-3xl font-black uppercase tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          rebook ahead, get the tea.
        </h2>
        <p className="mt-3 max-w-lg text-base sm:text-lg" style={{ color: "var(--color-void)" }}>
          book your next appointment at least 2 days out and i'll spill everything. why i'm not at
          the old shop anymore, what really went down, all of it. consider it a loyalty bribe. ☕
        </p>
      </div>

      {/* notice bands */}
      <div className="mt-6 grid gap-3">
        <div
          className="rounded-xl border-2 p-4 text-sm"
          style={{
            background: "var(--color-void)",
            borderColor: "var(--color-void)",
            color: "var(--color-bone)",
          }}
        >
          <strong className="font-bold" style={{ color: "var(--color-lime)" }}>
            former Rudy's clients:
          </strong>{" "}
          i'm not at Rudy's anymore. this is where you book now. same hands, same energy, way fewer
          hoops.
        </div>
        <div
          className="rounded-xl border p-4 text-sm"
          style={{ background: "rgba(155,92,255,.1)", borderColor: "var(--color-violet-brand)" }}
        >
          <strong className="font-bold" style={{ color: "var(--color-violet-brand)" }}>
            house calls only right now.
          </strong>{" "}
          i come to you, no travel fee yet, but that won't last forever. i'm between chairs and
          figuring out where to land next. thank you for rolling with it. i know shaking up your
          routine is a lot, especially if you're neurodivergent and changes hit different. i get it,
          i'm right there with you. we'll get back to something steady soon.
        </div>
      </div>

      {/* hours */}
      <div
        className="mt-8 flex flex-wrap items-center gap-4 text-sm"
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-mist)" }}
      >
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
  const items = "YOUR CHAIR MOVED ✦ HOUSE CALLS ✦ CUTS & COLOR ✦ THE TEA IF YOU REBOOK ✦ ";
  return (
    <div
      className="overflow-hidden border-y-2 py-2"
      style={{ background: "var(--color-void)", borderColor: "var(--color-void)" }}
      aria-hidden
    >
      <div
        className="marquee whitespace-nowrap text-sm font-bold tracking-widest"
        style={{ color: "var(--color-lime)", fontFamily: "var(--font-mono)" }}
      >
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

/* ── 01 · about the artist ───────────────────────────── */
function About() {
  return (
    <section
      className="border-y-2"
      style={{ background: "var(--color-card-2)", borderColor: "var(--color-void)" }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-[1.2fr_1fr] sm:py-24">
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.15em",
              color: "var(--color-flush)",
            }}
          >
            01 · ABOUT THE ARTIST
          </p>
          <h2
            className="mt-2 text-4xl font-black leading-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            the human behind the chair
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--color-mist)" }}>
            i'm MyKey: hair artist, solo operator, the whole front desk and back office in one
            neurodivergent brain. i just left Rudy's and i'm taking clients directly now. no
            middleman, no corporate scheduling system, just me and my booking link.
          </p>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--color-mist)" }}>
            i cut and color all textures, but the transformations are what light me up: the grow-out
            rescue, the "i need to feel like a different person by friday" moment, the color
            correction that takes six hours and a dangerous amount of trust. hair is the one kind of
            magic i actually believe in.
          </p>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--color-mist)" }}>
            show up however you show up. reference pics, bedhead, a vague idea and a willingness to
            talk it through. all valid. i'm not here to judge your hair crimes.
          </p>
          <p
            className="mt-6 text-sm"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
          >
            pronouns: they/them · seattle, wa ·{" "}
            <a href="tel:425-918-2029" className="underline underline-offset-4">
              425-918-2029
            </a>{" "}
            ·{" "}
            <a href="mailto:mykeypocket@icloud.com" className="underline underline-offset-4">
              mykeypocket@icloud.com
            </a>
          </p>
        </div>
        <div
          className="relative self-start rounded-2xl p-6"
          style={{
            background: "var(--color-void)",
            color: "var(--color-bone)",
            boxShadow: "10px 10px 0 var(--color-violet-brand)",
          }}
        >
          <span
            className="absolute -top-4 -right-2 rotate-6 text-2xl"
            style={{ fontFamily: "var(--font-hand)", color: "var(--color-lime)" }}
          >
            see you in the chair ~
          </span>
          <p
            className="text-sm uppercase tracking-widest"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-lime)" }}
          >
            why book direct?
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed">
            <li className="flex gap-3">
              <span style={{ color: "var(--color-lime)" }}>▍</span> no front-desk telephone game
            </li>
            <li className="flex gap-3">
              <span style={{ color: "var(--color-lime)" }}>▍</span> you know exactly who's holding
              the scissors
            </li>
            <li className="flex gap-3">
              <span style={{ color: "var(--color-lime)" }}>▍</span> rebooking reminders from a real
              human, not an auto-drip
            </li>
            <li className="flex gap-3">
              <span style={{ color: "var(--color-lime)" }}>▍</span> your notes live with me. no
              rotating cast of receptionists who've never seen your hair.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── 02 · what's going on ────────────────────────────── */
function Updates() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.15em",
          color: "var(--color-ash)",
        }}
      >
        02 · WHAT'S GOING ON
      </p>
      <h2
        className="mt-2 text-4xl font-black leading-tight sm:text-5xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        dispatches from the chair
      </h2>
      <div className="mt-8">
        <article
          className="mb-3 border-2 p-5 sm:p-6"
          style={{
            background: "#fff",
            borderColor: "rgba(18,14,23,.14)",
            boxShadow: "2px 2px 0 rgba(18,14,23,.08)",
          }}
        >
          <div
            className="mb-1"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--color-ash)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            JUL 14, 2026
          </div>
          <h4 className="text-xl font-black" style={{ fontFamily: "var(--font-display)" }}>
            house calls + the hunt for a new chair
          </h4>
          <p
            className="mt-2 text-sm leading-relaxed sm:text-base"
            style={{ color: "var(--color-mist)" }}
          >
            doing house calls only right now. i show up, set up wherever works, and get you sorted.
            no travel fee for now. call it a thank-you for sticking around while i figure out my
            next spot.
          </p>
          <p
            className="mt-2 text-sm leading-relaxed sm:text-base"
            style={{ color: "var(--color-mist)" }}
          >
            i know it's chaotic. i know routine changes are hard. believe me, my brain runs on
            routine too. i'm working on locking down a chair so we can both stop improvising.
            genuinely appreciate you riding this out with me.
          </p>
          <p
            className="mt-3 text-lg"
            style={{ fontFamily: "var(--font-hand)", color: "var(--color-flush)" }}
          >
            — mykey
          </p>
        </article>
      </div>
    </section>
  );
}

/* ── 03 · services ledger ────────────────────────────── */
function Services() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="services" className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.15em",
          color: "var(--color-ash)",
        }}
      >
        03 · PICK A SERVICE
      </p>
      <h2
        className="mt-2 text-4xl font-black leading-tight sm:text-6xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        tap one to book
      </h2>

      <div className="mt-10 border-t-2" style={{ borderColor: "var(--color-void)" }}>
        {STUDIO_SERVICES.map((s, i) => {
          const isOpen = open === s.slug;
          return (
            <div
              key={s.slug}
              className="group border-b-2"
              style={{ borderColor: "var(--color-void)" }}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : s.slug)}
                className="flex w-full items-baseline gap-4 py-5 text-left transition-colors sm:gap-8"
              >
                <span
                  className="w-8 shrink-0 text-sm"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
                >
                  0{i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className="block text-2xl font-black tracking-tight sm:text-4xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.name}
                  </span>
                  <span className="mt-1 block text-sm" style={{ color: "var(--color-mist)" }}>
                    {s.desc}
                  </span>
                  <span
                    className="mt-2 inline-block rounded-full border px-2.5 py-0.5"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      borderColor: s.accent,
                      color: "var(--color-mist)",
                    }}
                  >
                    {s.tag}
                  </span>
                </span>
                <span
                  className="hidden shrink-0 text-sm sm:block"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
                >
                  {s.duration}
                </span>
                <span
                  className="shrink-0 text-xl font-black sm:text-2xl"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: s.accent === "var(--color-lime)" ? "var(--color-void)" : s.accent,
                  }}
                >
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
                  <p
                    className="max-w-xl text-sm leading-relaxed"
                    style={{ color: "var(--color-mist)" }}
                  >
                    {s.desc}
                    <span
                      className="sm:hidden"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
                    >
                      {" "}
                      · {s.duration}
                    </span>
                  </p>
                  <span className="flex shrink-0 flex-wrap items-center gap-3">
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="inline-block border-2 px-5 py-2 text-sm font-black transition-transform hover:-translate-y-0.5"
                      style={{
                        background: s.accent,
                        borderColor: "var(--color-void)",
                        boxShadow: "3px 3px 0 var(--color-void)",
                        color: "var(--color-void)",
                      }}
                    >
                      SEE THE WORK →
                    </Link>
                    <a
                      href={`${CAL_BASE}${s.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block border-2 px-5 py-2 text-sm font-black transition-transform hover:-translate-y-0.5"
                      style={{
                        background: "#fff",
                        borderColor: "var(--color-void)",
                        boxShadow: "3px 3px 0 var(--color-void)",
                        color: "var(--color-void)",
                      }}
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

/* ── 04 · the fine print ─────────────────────────────── */
function Rules() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.15em",
          color: "var(--color-ash)",
        }}
      >
        04 · THE FINE PRINT
      </p>
      <h2
        className="mt-2 text-4xl font-black leading-tight sm:text-5xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        so nobody gets surprised
      </h2>
      <ol className="mt-10 border-t" style={{ borderColor: "var(--color-ash)" }}>
        {POLICIES.map((p) => (
          <li
            key={p.h}
            className="grid gap-1 border-b py-5 sm:grid-cols-[64px_240px_1fr] sm:gap-6"
            style={{ borderColor: "var(--color-ash)" }}
          >
            <span
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)", fontSize: 13 }}
            >
              {p.n}
            </span>
            <h3 className="text-lg font-black" style={{ fontFamily: "var(--font-display)" }}>
              {p.h}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
              {p.p}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ── 05 · book it ────────────────────────────────────── */
function Book() {
  return (
    <section
      id="book"
      className="border-t-2"
      style={{ background: "var(--color-void)", borderColor: "var(--color-void)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:py-24">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.15em",
            color: "var(--color-lime)",
          }}
        >
          05 · BOOK IT
        </p>
        <h2
          className="mt-2 text-4xl font-black leading-tight sm:text-6xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-bone)" }}
        >
          let's book it →
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg" style={{ color: "var(--color-ash)" }}>
          answer a couple quick questions and i'll point you to the right slot. no guesswork, no
          booking the wrong thing and having to start over.
        </p>
        <p
          className="mx-auto mt-3 text-sm"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
        >
          thu 11am–6pm · fri 12pm–5pm · sat–sun 12pm–8pm
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/book"
            className="inline-block border-2 px-10 py-4 text-lg font-black transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--color-lime)",
              borderColor: "var(--color-lime)",
              boxShadow: "4px 4px 0 var(--color-violet-brand)",
              color: "var(--color-void)",
            }}
          >
            LET'S BOOK IT →
          </Link>
          <button
            type="button"
            data-emergency
            className="inline-block border-2 px-8 py-4 text-base font-black transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--color-flush)",
              borderColor: "var(--color-flush)",
              boxShadow: "4px 4px 0 var(--color-violet-brand)",
              color: "#fff",
            }}
          >
            🚨 need it sooner? emergency request
          </button>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-sm" style={{ color: "var(--color-ash)" }}>
          calendar is live. real time, instant confirmation. house calls only right now.
        </p>
        <p className="mx-auto mt-2 max-w-xl text-sm" style={{ color: "var(--color-ash)" }}>
          by booking you agree to the{" "}
          <a
            href="/classic/terms.html"
            className="underline underline-offset-4"
            style={{ color: "var(--color-lime)" }}
          >
            terms of service
          </a>{" "}
          and{" "}
          <a
            href="/classic/privacy.html"
            className="underline underline-offset-4"
            style={{ color: "var(--color-lime)" }}
          >
            privacy policy
          </a>
          , including the 24-hour cancel rule, no-show charge, SMS/email reminders, and house-call
          terms. booking runs on cal.com.
        </p>
      </div>
    </section>
  );
}

/* ── footer ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      className="border-t-2 px-5 py-10"
      style={{ background: "var(--color-void)", borderColor: "var(--color-void)" }}
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-base" style={{ color: "var(--color-bone)" }}>
          hit me up:{" "}
          <a
            href="tel:425-918-2029"
            className="underline underline-offset-4"
            style={{ color: "var(--color-lime)" }}
          >
            425-918-2029
          </a>{" "}
          ·{" "}
          <a
            href="mailto:mykeypocket@icloud.com"
            className="underline underline-offset-4"
            style={{ color: "var(--color-lime)" }}
          >
            mykeypocket@icloud.com
          </a>{" "}
          · popl card
        </p>
        <p
          className="mt-3 text-xs"
          style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}
        >
          the small print: pronouns: they/them / location: seattle, wa / hours: thu 11am–6pm, fri
          12pm–5pm, sat–sun 12pm–8pm
        </p>
        <p
          className="mt-5 -rotate-2 text-2xl"
          style={{ fontFamily: "var(--font-hand)", color: "var(--color-lime)" }}
        >
          built by one brain, on purpose ~
        </p>
        <p
          className="mt-5 text-xs"
          style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}
        >
          <a href="/classic/privacy.html" className="underline-offset-4 hover:underline">
            privacy policy
          </a>{" "}
          ·{" "}
          <a href="/classic/terms.html" className="underline-offset-4 hover:underline">
            terms of service
          </a>{" "}
          · © pocket studio / mykey pocket · not affiliated with Rudy's Barbershop
        </p>
      </div>
    </footer>
  );
}
