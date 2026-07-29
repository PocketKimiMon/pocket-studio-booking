import { createFileRoute, Link } from "@tanstack/react-router";
import { CAL_BASE } from "../lib/services";
import { seoHead } from "../lib/seo";

export const Route = createFileRoute("/studio")({
  head: seoHead("/studio"),
  component: StudioPage,
});

const TIMELINE = [
  {
    when: "the rudy's years",
    title: "the rudy's years",
    body: "i spent years behind the chair at rudy's barbershop in seattle — learned the fade, the taper, the curl consult, the 'my kid did this at 2am' repair. met hundreds of you there. i owe that place a lot, and i'm proud of the work i did there.",
  },
  {
    when: "july 2026",
    title: "i left rudy's",
    body: "in july 2026 i left rudy's to build pocket studio — one artist, one calendar, zero front desk. if you sat in my chair there, this is where you book now. same hands, same energy, way fewer hoops.",
  },
  {
    when: "right now",
    title: "the house-call era",
    body: "pocket studio is currently house calls only. no travel fee for now while i get rolling. you pick a spot with decent light and an outlet — i bring the chair, the tools, and the gossip.",
  },
  {
    when: "next",
    title: "the hunt for the new chair",
    body: "i'm hunting for a real chair — a small studio of my own, still seattle, still just me. when i land it, you'll hear it here first. the booking stays the same either way.",
  },
];

const FAQ = [
  {
    q: "is there a travel fee?",
    a: "not right now. while pocket studio is in its house-call era, travel is on me. when that changes, i'll give plenty of notice — no surprises.",
  },
  {
    q: "how far will you come?",
    a: "seattle proper is the easy yes. outside that, text me — if the timing works, i'll make the drive.",
  },
  {
    q: "what about kids?",
    a: "kids are welcome. house calls are actually great for kids — their space, their snacks, their screen. i just ask that a grown-up is around.",
  },
  {
    q: "can i bring a friend / partner / kid to my appointment?",
    a: "yes — it's your house. the more the merrier. if they want a cut too, book back-to-back slots so nobody gets rushed.",
  },
  {
    q: "do you do wedding / event parties?",
    a: "i do small ones. text me the date, headcount, and location and we'll figure out if it fits — event mornings book differently than regular cuts.",
  },
];

function StudioPage() {
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

      {/* hero */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:pt-20">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            letterSpacing: "0.2em",
            color: "var(--color-flush)",
          }}
        >
          THE STUDIO
        </p>
        <h1
          className="mt-3 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          one artist. one calendar.
          <br />
          <span
            className="inline-block rounded-full px-4 py-1 align-baseline"
            style={{
              background: "var(--color-lime)",
              color: "var(--color-void)",
              boxShadow: "6px 6px 0 var(--color-void)",
            }}
          >
            zero front desk.
          </span>
        </h1>
        <p
          className="mt-8 max-w-2xl text-xl leading-relaxed sm:text-2xl"
          style={{ fontFamily: "Georgia, serif", color: "var(--color-mist)" }}
        >
          pocket studio is mykey pocket — a seattle hair artist who left rudy's barbershop in july
          2026 to do this directly. you text me, i text you back. no phone tag, no "let me check
          with my manager."
        </p>
      </section>

      {/* timeline */}
      <section
        className="border-y-2"
        style={{ background: "var(--color-void)", borderColor: "var(--color-void)" }}
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <h2
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-bone)" }}
          >
            the story so far.
          </h2>
          <div className="mt-12 space-y-0">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className="grid gap-2 border-l-2 pb-12 pl-6 sm:grid-cols-[180px_1fr] sm:gap-8"
                style={{ borderColor: "var(--color-lime)" }}
              >
                <div className="relative">
                  <span
                    className="absolute -left-[31px] top-1 inline-block h-3.5 w-3.5 rounded-full border-2"
                    style={{
                      background: i === TIMELINE.length - 1 ? "var(--color-lime)" : "var(--color-void)",
                      borderColor: "var(--color-lime)",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      letterSpacing: "0.15em",
                      color: "var(--color-lime)",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.when}
                  </p>
                </div>
                <div>
                  <h3
                    className="text-2xl font-black tracking-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-bone)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 max-w-2xl text-base leading-relaxed"
                    style={{ color: "var(--color-ash)" }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <h2
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          the practical stuff.
        </h2>
        <p
          className="mt-4 max-w-xl text-base"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
        >
          travel, kids, guests, events — the questions i get every week, answered straight.
        </p>
        <div className="mt-10 space-y-4">
          {FAQ.map((f, i) => (
            <div
              key={i}
              className="border-2 p-5 sm:p-6"
              style={{
                background: i % 2 ? "#fff" : "var(--color-card-2)",
                borderColor: "var(--color-void)",
                boxShadow: "5px 5px 0 var(--color-void)",
                transform: `rotate(${i % 2 ? 0.4 : -0.4}deg)`,
              }}
            >
              <h3
                className="text-xl font-black tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {f.q}
              </h3>
              <p className="mt-2 text-base leading-relaxed" style={{ color: "var(--color-mist)" }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* cta */}
      <section
        className="border-t-2"
        style={{ background: "var(--color-void)", borderColor: "var(--color-void)" }}
      >
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:py-20">
          <h2
            className="text-3xl font-black leading-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-bone)" }}
          >
            want the house-call version of me?
          </h2>
          <p
            className="mx-auto mt-4 max-w-md text-lg"
            style={{ color: "var(--color-ash)" }}
          >
            book a slot, or just text me — 425-918-2029. i answer my own phone.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/book"
              className="border-2 px-8 py-3 text-base font-black transition-transform hover:-translate-y-0.5"
              style={{
                background: "var(--color-lime)",
                borderColor: "var(--color-lime)",
                boxShadow: "4px 4px 0 var(--color-violet-brand)",
                color: "var(--color-void)",
              }}
            >
              BOOK A HOUSE CALL →
            </Link>
            <a
              href={CAL_BASE}
              target="_blank"
              rel="noreferrer"
              className="border-2 px-8 py-3 text-base font-black transition-transform hover:-translate-y-0.5"
              style={{
                background: "transparent",
                borderColor: "var(--color-bone)",
                color: "var(--color-bone)",
              }}
            >
              CAL.COM LINK ↗
            </a>
          </div>
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
