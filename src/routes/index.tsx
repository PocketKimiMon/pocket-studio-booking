import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { CAL_BASE, SERVICES, type Service } from "../lib/services";
import { UPDATES_NEWEST_FIRST } from "../lib/updates";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pocket Studio — book with MyKey" },
      {
        name: "description",
        content:
          "Book cuts and color directly with MyKey Pocket, Seattle hair artist. House calls only, no front desk in the way. Former Rudy's clients: this is where you book now.",
      },
      { name: "author", content: "MyKey Pocket" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Pocket Studio — book with MyKey" },
      {
        property: "og:description",
        content:
          "Book cuts and color directly with MyKey Pocket, Seattle hair artist. House calls only, no front desk in the way. Former Rudy's clients: this is where you book now.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      style={{
        background: "var(--color-bone)",
        color: "var(--color-void)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <Hero />
      <ServiceWall />
      <About />
      <LatestDispatch />
      <BookingCard />
      <Faq />
      <Policies />
      <Footer />
    </div>
  );
}

/* ── hero ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="flex min-h-[100svh] flex-col justify-between px-5 pb-6 pt-4"
      style={{
        background:
          "radial-gradient(60% 42% at 14% 12%, rgba(255,106,0,.32), transparent 62%), radial-gradient(46% 38% at 88% 20%, rgba(15,163,163,.18), transparent 65%), var(--color-bone)",
      }}
    >
      <header className="flex items-center justify-between gap-3">
        <p
          className="text-sm font-black tracking-tight sm:text-base"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ✂ POCKET STUDIO
        </p>
        <div className="flex items-center gap-3">
          <a
            href="/classic"
            className="hidden text-xs underline-offset-4 hover:underline sm:block"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
          >
            classic version →
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
      </header>

      <div className="mx-auto w-full max-w-6xl">
        <div className="mt-6 grid items-center gap-8 sm:grid-cols-[1.2fr_.8fr]">
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: "0.2em",
                color: "var(--color-flush)",
              }}
            >
              MYKEY POCKET — SEATTLE HAIR ARTIST (THEY/THEM)
            </p>
            <h1
              className="mt-3 text-[13vw] font-extrabold leading-[0.9] tracking-tight sm:text-[88px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              your chair
              <br />
              moved.{" "}
              <span
                className="inline-block rounded-full px-4 py-1 align-baseline"
                style={{
                  background: "var(--color-lime)",
                  color: "var(--color-void)",
                  boxShadow: "6px 6px 0 var(--color-void)",
                }}
              >
                catch up.
              </span>
            </h1>
            <p
              className="mt-8 max-w-xl text-xl leading-relaxed sm:text-2xl"
              style={{ fontFamily: "Georgia, serif", color: "var(--color-mist)" }}
            >
              i'm not at rudy's anymore — same hands, same energy, way fewer hoops. cuts + color
              booked directly with me, house calls across seattle while i hunt for a new chair.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/book"
                className="border-2 px-7 py-3 text-base font-black transition-transform hover:-translate-y-0.5"
                style={{
                  background: "var(--color-void)",
                  color: "var(--color-bone)",
                  borderColor: "var(--color-void)",
                  boxShadow: "4px 4px 0 var(--color-flush)",
                }}
              >
                BOOK A HOUSE CALL →
              </Link>
              <a
                href="#services"
                className="border-b-2 pb-0.5 text-base font-bold"
                style={{ borderColor: "var(--color-flush)", color: "var(--color-flush)" }}
              >
                see the menu ↓
              </a>
            </div>
          </div>
          <HeroCollage />
        </div>
      </div>

      <div
        className="mt-10 flex flex-wrap items-center justify-between gap-2 text-xs"
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
      >
        <span>thu–sun · seattle, wa · house calls only</span>
        <span className="hidden sm:block">scroll for the good stuff ↓</span>
      </div>
    </section>
  );
}

function HeroCollage() {
  return (
    <div className="relative mx-auto hidden h-[460px] w-full max-w-[400px] sm:block">
      <figure
        className="absolute left-2 top-2 w-[58%] rotate-[-5deg] border-2 p-2"
        style={{
          background: "#fff",
          borderColor: "var(--color-void)",
          boxShadow: "6px 6px 0 var(--color-void)",
        }}
      >
        <img
          src="/work/curl-1.jpg"
          alt="Curly cut fresh out of the chair"
          className="aspect-[3/4] w-full object-cover"
        />
        <figcaption
          className="pt-2 text-lg leading-none"
          style={{ fontFamily: "var(--font-hand)", color: "var(--color-mist)" }}
        >
          the curls showed UP
        </figcaption>
      </figure>
      <figure
        className="absolute right-0 top-24 w-[52%] rotate-[4deg] border-2 p-2"
        style={{
          background: "#fff",
          borderColor: "var(--color-void)",
          boxShadow: "6px 6px 0 var(--color-void)",
        }}
      >
        <img
          src="/work/fade-1.jpg"
          alt="Taper fade, clean line-up"
          className="aspect-[3/4] w-full object-cover"
        />
        <figcaption
          className="pt-2 text-lg leading-none"
          style={{ fontFamily: "var(--font-hand)", color: "var(--color-mist)" }}
        >
          taper tuesday
        </figcaption>
      </figure>
      <figure
        className="absolute bottom-2 left-[18%] w-[46%] rotate-[-2deg] border-2 p-2"
        style={{
          background: "#fff",
          borderColor: "var(--color-void)",
          boxShadow: "6px 6px 0 var(--color-void)",
        }}
      >
        <img
          src="/work/short-1.jpg"
          alt="Short textured cut"
          className="aspect-[3/4] w-full object-cover"
        />
        <figcaption
          className="pt-2 text-lg leading-none"
          style={{ fontFamily: "var(--font-hand)", color: "var(--color-mist)" }}
        >
          short + sweet
        </figcaption>
      </figure>
      <div
        className="absolute -right-3 bottom-24 rotate-[8deg] rounded-full px-4 py-2 text-sm font-black"
        style={{
          background: "var(--color-flush)",
          color: "var(--color-bone)",
          boxShadow: "3px 3px 0 var(--color-void)",
          fontFamily: "var(--font-display)",
        }}
      >
        house calls!
      </div>
      <p
        className="absolute -left-2 bottom-40 rotate-[-10deg] text-2xl"
        style={{ fontFamily: "var(--font-hand)", color: "var(--color-flush)" }}
      >
        real clients, real couches →
      </p>
    </div>
  );
}

/* ── service wall ─────────────────────────────────────── */
function ServiceWall() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          the menu.
        </h2>
        <p
          className="max-w-sm text-sm"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
        >
          tap a card — each service gets its own page with the full rundown + photos.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((svc, i) => (
          <ServiceCard key={svc.slug} svc={svc} index={i} />
        ))}
      </div>
      <p
        className="mt-8 text-sm"
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
      >
        all appointments are house calls right now — i bring the chair, the tools, and the gossip.
      </p>
    </section>
  );
}

function ServiceCard({ svc, index }: { svc: Service; index: number }) {
  const rotations = [-1.5, 1, -0.5, 1.5, -1, 0.5, -1.5];
  const rot = rotations[index % rotations.length];
  return (
    <Link
      to="/services/$slug"
      params={{ slug: svc.slug }}
      className="group block border-2 p-5 transition-transform hover:-translate-y-1"
      style={{
        background: "var(--color-card-2)",
        borderColor: "var(--color-void)",
        boxShadow: "5px 5px 0 var(--color-void)",
        transform: `rotate(${rot}deg)`,
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className="inline-block rounded-full px-3 py-1 text-sm font-black"
          style={{ background: svc.accent, color: "var(--color-void)" }}
        >
          {svc.price}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-ash)" }}>
          {svc.duration}
        </span>
      </div>
      <h3
        className="mt-5 text-2xl font-black leading-tight tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {svc.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
        {svc.blurb}
      </p>
      <p
        className="mt-4 text-sm font-bold transition-transform group-hover:translate-x-1"
        style={{ color: "var(--color-flush)" }}
      >
        the full rundown →
      </p>
    </Link>
  );
}

/* ── about / the artist ───────────────────────────────── */
function About() {
  return (
    <section
      className="border-y-2"
      style={{ background: "var(--color-void)", borderColor: "var(--color-void)" }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:grid-cols-[.9fr_1.1fr] sm:py-24">
        <div className="relative mx-auto w-full max-w-sm">
          <figure
            className="rotate-[-3deg] border-2 p-2"
            style={{
              background: "#fff",
              borderColor: "var(--color-bone)",
              boxShadow: "6px 6px 0 var(--color-lime)",
            }}
          >
            <img
              src="/work/mykey.jpg"
              alt="MyKey Pocket, Seattle hair artist"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption
              className="pt-2 text-lg leading-none"
              style={{ fontFamily: "var(--font-hand)", color: "var(--color-mist)" }}
            >
              hi, it's me — mykey
            </figcaption>
          </figure>
          <div
            className="absolute -right-4 -top-4 rotate-[10deg] rounded-full px-3 py-1 text-xs font-black"
            style={{
              background: "var(--color-lime)",
              color: "var(--color-void)",
              boxShadow: "3px 3px 0 var(--color-void)",
            }}
          >
            they/them
          </div>
        </div>
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.2em",
              color: "var(--color-lime)",
            }}
          >
            THE ARTIST
          </p>
          <h2
            className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-bone)" }}
          >
            one brain. whole front desk.
          </h2>
          <div
            className="mt-6 space-y-4 text-base leading-relaxed"
            style={{ color: "var(--color-ash)" }}
          >
            <p>
              i'm mykey. i spent years cutting at rudy's barbershop, and i just left — which means
              if you sat in my chair there, this is where you book me now. same hands, same
              energy, way fewer hoops.
            </p>
            <p>
              pocket studio is one person: me. you text me, i text you back. no front desk, no
              phone tag, no "let me check with my manager." house calls only while i hunt for the
              next chair — and honestly? i'm bringing the good scissors to your couch.
            </p>
            <p>
              every texture, every length, every "i did something to my hair at 2am" emergency.
              color especially — new color clients start with a consult so we plan it right
              instead of apologizing later.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3" style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>
            <span className="border px-3 py-1" style={{ borderColor: "var(--color-ash)", color: "var(--color-bone)" }}>seattle, wa</span>
            <span className="border px-3 py-1" style={{ borderColor: "var(--color-ash)", color: "var(--color-bone)" }}>house calls only rn</span>
            <span className="border px-3 py-1" style={{ borderColor: "var(--color-ash)", color: "var(--color-bone)" }}>no travel fee yet</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:425-918-2029"
              className="border-2 px-6 py-2.5 text-sm font-black transition-transform hover:-translate-y-0.5"
              style={{
                background: "var(--color-lime)",
                borderColor: "var(--color-lime)",
                color: "var(--color-void)",
                boxShadow: "3px 3px 0 var(--color-violet-brand)",
              }}
            >
              CALL/TEXT 425-918-2029
            </a>
            <Link
              to="/book"
              className="border-2 px-6 py-2.5 text-sm font-black transition-transform hover:-translate-y-0.5"
              style={{
                borderColor: "var(--color-bone)",
                color: "var(--color-bone)",
              }}
            >
              BOOK ONLINE →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── latest dispatch (from /blog data) ────────────────── */
function LatestDispatch() {
  const latest = UPDATES_NEWEST_FIRST[0];
  const rest = UPDATES_NEWEST_FIRST.slice(1);
  if (!latest) return null;
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          from the chair.
        </h2>
        <Link
          to="/blog"
          className="text-sm font-bold underline-offset-4 hover:underline"
          style={{ color: "var(--color-flush)", fontFamily: "var(--font-mono)" }}
        >
          all updates →
        </Link>
      </div>

      <article
        className="mt-10 rotate-[-0.5deg] border-2 p-6 sm:p-10"
        style={{
          background: "var(--color-card-2)",
          borderColor: "var(--color-void)",
          boxShadow: "8px 8px 0 var(--color-void)",
        }}
      >
        <div className="flex flex-wrap items-baseline gap-3">
          <span
            className="rounded-full px-3 py-1 text-xs font-black"
            style={{ background: "var(--color-lime)", color: "var(--color-void)" }}
          >
            LATEST
          </span>
          <time
            dateTime={latest.dateISO}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--color-ash)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {latest.displayDate}
          </time>
        </div>
        <h3
          className="mt-4 text-2xl font-black leading-tight tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {latest.title}
        </h3>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-mist)" }}>
          {latest.excerpt}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "var(--color-mist)" }}>
          {latest.body[0]}
        </p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <Link
            to="/blog"
            className="border-b-2 pb-0.5 text-base font-bold"
            style={{ borderColor: "var(--color-flush)", color: "var(--color-flush)" }}
          >
            read the dispatch →
          </Link>
          <span className="text-2xl" style={{ fontFamily: "var(--font-hand)", color: "var(--color-flush)" }}>
            — mykey
          </span>
        </div>
      </article>

      {rest.length > 0 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to="/blog"
              className="block border-2 p-5 transition-transform hover:-translate-y-0.5"
              style={{
                background: "#fff",
                borderColor: "var(--color-void)",
                boxShadow: "4px 4px 0 var(--color-void)",
              }}
            >
              <time
                dateTime={post.dateISO}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-ash)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {post.displayDate}
              </time>
              <h4
                className="mt-2 text-xl font-black leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {post.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

/* ── booking card ─────────────────────────────────────── */
function BookingCard() {
  const mini = [
    { q: "house calls only right now — i come to you." },
    { q: "no travel fee for now — that'll change later, plenty of notice first." },
    { q: "$25 deposit, applied to your total." },
    { q: "calendar opens on the 1st for the full month ahead." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <div
        className="rotate-[0.5deg] border-2 p-6 sm:p-10"
        style={{
          background: "var(--color-card-2)",
          borderColor: "var(--color-void)",
          boxShadow: "8px 8px 0 var(--color-void)",
        }}
      >
        <h2
          className="text-3xl font-black tracking-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          booking with me =
        </h2>
        <ul className="mt-8 space-y-4">
          {mini.map((x, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black"
                style={{ background: "var(--color-lime)", color: "var(--color-void)" }}
              >
                {i + 1}
              </span>
              <span className="text-lg leading-relaxed" style={{ color: "var(--color-mist)" }}>
                {x.q}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/book"
            className="border-2 px-7 py-3 text-base font-black transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--color-void)",
              color: "var(--color-bone)",
              borderColor: "var(--color-void)",
              boxShadow: "4px 4px 0 var(--color-flush)",
            }}
          >
            BOOK NOW →
          </Link>
          <a
            href={CAL_BASE}
            target="_blank"
            rel="noreferrer"
            className="border-2 px-7 py-3 text-base font-black transition-transform hover:-translate-y-0.5"
            style={{
              background: "transparent",
              borderColor: "var(--color-void)",
              color: "var(--color-void)",
            }}
          >
            CAL.COM LINK ↗
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── faq ──────────────────────────────────────────────── */
function Faq() {
  const faqs = [
    {
      q: "what exactly is a house call?",
      a: "you pick a spot with decent light and an outlet — kitchen, bathroom, living room, wherever. i show up with a chair, a cape, and all my tools, we do the cut, and i leave no trace. no salon, no commute, no waiting room.",
    },
    {
      q: "is there a travel fee?",
      a: "not right now. while i'm hunting for a new chair, travel is on me — think of it as a thank-you for making the jump with me. when that changes, you'll hear it from me with plenty of notice.",
    },
    {
      q: "how far will you come?",
      a: "anywhere in seattle proper, and i'm flexible beyond that — text me your neighborhood and we'll figure it out. if you're way out, we might split the difference on timing.",
    },
    {
      q: "what's the deposit situation?",
      a: "$25, applied to your total. it just holds your slot — because no-shows make me sad and make other clients miss out.",
    },
    {
      q: "i was your client at rudy's — how do i book now?",
      a: "right here. this site, the book page, or just text me at 425-918-2029. nothing else about us changes.",
    },
    {
      q: "new to color — where do we start?",
      a: "with a consult, always. we talk, we look at your hair, we do a strand test if we need to. i plan color, i don't wing it — that's how you get the good outcome instead of the expensive apology.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <h2
        className="text-4xl font-extrabold tracking-tight sm:text-6xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        probably wondering.
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="border-2 p-5"
            style={{
              background: i % 2 ? "#fff" : "var(--color-card-2)",
              borderColor: "var(--color-void)",
              boxShadow: "4px 4px 0 var(--color-void)",
              transform: `rotate(${i % 2 ? 0.5 : -0.5}deg)`,
            }}
          >
            <h3 className="text-lg font-black" style={{ fontFamily: "var(--font-display)" }}>
              {f.q}
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
              {f.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── policies (marquee) ───────────────────────────────── */
function Policies() {
  const line =
    "house calls only right now · no travel fee for now · $25 deposit holds your slot · calendar opens the 1st for the month ahead · cuts book 2 days out · new color = consult first · not affiliated with rudy's barbershop · ";
  return (
    <section className="overflow-hidden border-y-2 py-4" style={{ background: "var(--color-flush)", borderColor: "var(--color-void)" }}>
      <div className="flex whitespace-nowrap" style={{ animation: "ps-marquee 28s linear infinite" }}>
        {[0, 1].map((n) => (
          <span
            key={n}
            className="pr-4 text-sm font-black tracking-wide"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-bone)" }}
          >
            {line.repeat(2)}
          </span>
        ))}
      </div>
      <style>{`@keyframes ps-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

/* ── footer ───────────────────────────────────────────── */
function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <footer ref={ref} className="px-5 py-14" style={{ background: "var(--color-void)", color: "var(--color-bone)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <p className="text-2xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              ✂ POCKET STUDIO
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed" style={{ color: "var(--color-ash)" }}>
              one artist, one calendar. mykey pocket (they/them), seattle hair artist — house calls
              only while the next chair gets hunted.
            </p>
            <p className="mt-4 text-2xl" style={{ fontFamily: "var(--font-hand)", color: "var(--color-lime)" }}>
              see you in your living room ~
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm" style={{ fontFamily: "var(--font-mono)" }}>
            <div>
              <p className="text-xs tracking-widest" style={{ color: "var(--color-ash)" }}>BOOK</p>
              <ul className="mt-3 space-y-2">
                <li><Link to="/book" className="underline-offset-4 hover:underline">book a slot</Link></li>
                <li><a href={CAL_BASE} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">cal.com ↗</a></li>
                <li><a href="tel:425-918-2029" className="underline-offset-4 hover:underline">425-918-2029</a></li>
                <li><a href="mailto:mykeypocket@icloud.com" className="underline-offset-4 hover:underline">mykeypocket@icloud.com</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-widest" style={{ color: "var(--color-ash)" }}>PAGES</p>
              <ul className="mt-3 space-y-2">
                <li><a href="#services" className="underline-offset-4 hover:underline">services</a></li>
                <li><Link to="/blog" className="underline-offset-4 hover:underline">updates</Link></li>
                <li><Link to="/studio" className="underline-offset-4 hover:underline">the studio</Link></li>
                <li><a href="/classic" className="underline-offset-4 hover:underline">classic version</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "rgba(243,236,222,.15)", color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>
          <span>© pocket studio / mykey pocket · seattle, wa</span>
          <span className="flex gap-4">
            <a href="/classic/terms.html" className="underline-offset-4 hover:underline">terms</a>
            <a href="/classic/privacy.html" className="underline-offset-4 hover:underline">privacy</a>
          </span>
          <span>not affiliated with rudy's barbershop.</span>
        </div>
      </div>
    </footer>
  );
}
