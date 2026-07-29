import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Scissors, Palette, Sparkles, Clock, MapPin, Mail, Phone, X } from "lucide-react";
import { seoHead } from "../lib/seo";

export const Route = createFileRoute("/studio")({
  head: seoHead("/studio"),
  component: Home,
});

type Service = {
  slug: "buzz-cut" | "short-cut" | "long-cut" | "hair-consultation" | "existing-client-color-appointment";
  name: string;
  duration: string;
  leadDays: number;
  category: "cut" | "color";
  blurb: string;
  icon: typeof Scissors;
  accent: string;
};

const CAL_BASE = "https://cal.com/maneautoimation/";

const SERVICES: Service[] = [
  { slug: "buzz-cut", name: "Buzz Cut", duration: "30 min", leadDays: 2, category: "cut", blurb: "clippers all over, clean edges, back to your life.", icon: Scissors, accent: "var(--color-lime)" },
  { slug: "short-cut", name: "Short Cut", duration: "45 min", leadDays: 2, category: "cut", blurb: "scissor or clipper-over-comb, shaped to your actual head.", icon: Scissors, accent: "var(--color-violet-brand)" },
  { slug: "long-cut", name: "Long Cut", duration: "60 min", leadDays: 2, category: "cut", blurb: "layers, texture, cleanup — keep the length, kill the dead ends.", icon: Scissors, accent: "var(--color-flush)" },
  { slug: "hair-consultation", name: "New-Client Color Consult", duration: "45 min", leadDays: 3, category: "color", blurb: "first time coloring with me? we plan everything — lift, tone, maintenance, realistic expectations — before anything touches your hair.", icon: Sparkles, accent: "var(--color-violet-brand)" },
  { slug: "existing-client-color-appointment", name: "Existing-Client Color Appointment", duration: "3 hr / up to 5 hr", leadDays: 7, category: "color", blurb: "roots, refresh, full transformation. block the afternoon; complex sessions can run 3–5 hours.", icon: Palette, accent: "var(--color-lime)" },
];

function earliestDate(leadDays: number) {
  const d = new Date();
  d.setDate(d.getDate() + leadDays);
  return d.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
}

function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bone)", color: "var(--color-void)", fontFamily: "var(--font-sans)" }}>
      <div className="mx-auto max-w-[1040px] px-5 pb-24 sm:px-8">
        <TopNav />
        <Hero />
        <About />
        <Services />
        <Policies />
        <Booking />
        <Footer />
      </div>
      <BookingPopup />
    </div>
  );
}

function TopNav() {
  return (
    <nav className="flex items-center justify-between pt-6 sm:pt-8">
      <a href="#top" className="font-black tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-void)" }}>
        pocket<span style={{ color: "var(--color-flush)" }}>·</span>studio
      </a>
      <div className="hidden gap-6 text-sm font-medium sm:flex" style={{ color: "var(--color-mist)" }}>
        <a href="#about" className="hover:text-[color:var(--color-void)]">about</a>
        <a href="#services" className="hover:text-[color:var(--color-void)]">services</a>
        <a href="#policies" className="hover:text-[color:var(--color-void)]">policies</a>
        <a href="#book" className="hover:text-[color:var(--color-void)]">book</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-10 sm:pt-16">
      <h1
        className="text-[54px] leading-[0.95] font-extrabold tracking-tight sm:text-[92px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        POCKET{" "}
        <span
          className="inline-block rounded-full px-4 py-1 align-baseline"
          style={{
            background: "var(--color-lime)",
            color: "var(--color-void)",
            boxShadow: "6px 6px 0 var(--color-void)",
          }}
        >
          STUDIO
        </span>
      </h1>
      <p className="mt-6 max-w-xl text-xl leading-relaxed sm:text-2xl" style={{ fontFamily: "Georgia, serif", color: "var(--color-mist)" }}>
        book cuts + color directly. no front desk, no phone tag, no wondering if the message went through. one artist, one calendar, house calls only right now.
      </p>

      {/* Spill the tea card */}
      <div
        className="relative mt-10 rounded-2xl border-2 p-6 sm:p-8"
        style={{
          background: "var(--color-lime)",
          borderColor: "var(--color-void)",
          boxShadow: "10px 10px 0 var(--color-void)",
        }}
      >
        <span
          className="absolute -top-4 -left-2 -rotate-6 text-3xl sm:text-4xl"
          style={{ fontFamily: "var(--font-hand)", color: "var(--color-flush)" }}
        >
          spill the tea ~
        </span>
        <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
          rebook ahead, get the good stuff.
        </h2>
        <p className="mt-3 max-w-lg text-base sm:text-lg" style={{ color: "var(--color-void)" }}>
          book your next appointment at least 2 days out and i'll bring the extras — product recs that actually fit your hair, styling tricks, honest answers. consider it a loyalty bribe.
        </p>
      </div>

      {/* Notice bands */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div
          className="rounded-xl border p-4 text-sm"
          style={{ background: "color-mix(in oklab, var(--color-violet-brand) 12%, white)", borderColor: "var(--color-violet-brand)" }}
        >
          <strong className="font-bold" style={{ color: "var(--color-violet-brand)" }}>heads up:</strong>{" "}
          the calendar opens on the 1st for the full month ahead, first come first serve. new color? consult first, at least 3 days out.
        </div>
        <div
          className="rounded-xl border p-4 text-sm"
          style={{ background: "color-mix(in oklab, var(--color-flush) 10%, white)", borderColor: "var(--color-flush)" }}
        >
          <strong className="font-bold" style={{ color: "var(--color-flush)" }}>house calls only right now:</strong>{" "}
          i come to you, no travel fee yet. your kitchen, your living room, anywhere with decent light and an outlet.
        </div>
      </div>

      {/* Hours */}
      <div className="mt-8 flex flex-wrap items-center gap-4 text-sm" style={{ fontFamily: "var(--font-mono)", color: "var(--color-mist)" }}>
        <span className="inline-flex items-center gap-2"><Clock size={16} /> HOURS</span>
        <span>THU 11–6</span>
        <span>FRI 12–5</span>
        <span>SAT–SUN 12–8</span>
        <span className="inline-flex items-center gap-2"><MapPin size={16} /> Seattle, WA</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mt-24 grid gap-10 md:grid-cols-[1.2fr_1fr]">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "var(--color-flush)", fontFamily: "var(--font-mono)" }}>
          about
        </p>
        <h2 className="mt-2 text-4xl font-black leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
          small studio, careful hands.
        </h2>
        <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--color-mist)" }}>
          i'm MyKey (they/them) — hair artist, solo operator, the whole front desk and back office
          in one neurodivergent brain. not affiliated with Rudy's Barbershop. i take on a small
          number of clients each month so every cut and color gets the time it actually needs.
        </p>
        <ul className="mt-6 space-y-3 text-base" style={{ color: "var(--color-void)" }}>
          <li className="flex gap-3"><span style={{ color: "var(--color-lime)" }}>▍</span> all textures, gender-inclusive shapes, grow-out rescues.</li>
          <li className="flex gap-3"><span style={{ color: "var(--color-violet-brand)" }}>▍</span> color built around your hair's actual history — porosity, banding, tone.</li>
          <li className="flex gap-3"><span style={{ color: "var(--color-flush)" }}>▍</span> consult-first for new color clients, so pricing &amp; timing are honest.</li>
        </ul>
      </div>

      <div
        className="relative rounded-2xl p-6"
        style={{
          background: "var(--color-void)",
          color: "var(--color-bone)",
          boxShadow: "10px 10px 0 var(--color-violet-brand)",
        }}
      >
        <p className="text-sm uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "var(--color-lime)" }}>
          say hi
        </p>
        <h3 className="mt-2 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>reach the chair</h3>
        <div className="mt-5 space-y-3 text-sm">
          <a href="mailto:mykeypocket@icloud.com" className="flex items-center gap-3 hover:underline">
            <Mail size={16} style={{ color: "var(--color-lime)" }} /> mykeypocket@icloud.com
          </a>
          <a href="tel:14259182029" className="flex items-center gap-3 hover:underline">
            <Phone size={16} style={{ color: "var(--color-lime)" }} /> 425-918-2029
          </a>
          <div className="flex items-center gap-3">
            <MapPin size={16} style={{ color: "var(--color-lime)" }} /> Seattle, WA · by appointment
          </div>
        </div>
        <p className="mt-6 text-xs" style={{ color: "color-mix(in oklab, var(--color-bone) 70%, transparent)" }}>
          text is fastest — i'm usually mid-foil. please allow up to 24 hours for a reply outside studio hours.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mt-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "var(--color-flush)", fontFamily: "var(--font-mono)" }}>
        services
      </p>
      <h2 className="mt-2 text-4xl font-black leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
        what you can book.
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.slug}
              href={`${CAL_BASE}${s.slug}`}
              target="_blank"
              rel="noreferrer"
              className="group relative flex gap-4 rounded-2xl border bg-white p-5 transition hover:-translate-y-0.5"
              style={{ borderColor: "rgba(18,14,23,.12)", boxShadow: "6px 6px 0 rgba(18,14,23,.06)" }}
            >
              <span className="absolute inset-y-3 left-0 w-1.5 rounded-full" style={{ background: s.accent }} />
              <div className="pl-3">
                <div className="flex items-center gap-2">
                  <Icon size={18} style={{ color: s.accent }} />
                  <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>{s.name}</h3>
                </div>
                <p className="mt-1 text-sm" style={{ color: "var(--color-mist)" }}>{s.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
                  <span>⏱ {s.duration}</span>
                  <span>📅 {s.leadDays} day{s.leadDays === 1 ? "" : "s"} out</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Policies() {
  const items = [
    ["one month at a time", "the calendar opens on the 1st for the full month ahead. first come, first serve — i don't hold slots."],
    ["advance notice", "cuts book 2 days out · new-client color consult 3 days · existing-client color 1 week. need it sooner? text 425-918-2029."],
    ["24-hour cancellation", "cancel or reschedule at least 24 hours before. emergencies are real, but my time is literally how i pay rent."],
    ["no-call-no-show = charged", "ghosting the appointment may be charged up to the full service amount. fairness goes both ways — full terms on the terms page."],
    ["2-hour confirmation", "you'll get a text or email 2 hours before. a quick \"yep\" is all that's needed — otherwise the slot may be released."],
    ["house-call space", "a safe, ready spot and an accurate address. let me know about allergies and any prior chemical work so i don't fry your hair."],
  ];
  return (
    <section id="policies" className="mt-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "var(--color-flush)", fontFamily: "var(--font-mono)" }}>
        policies
      </p>
      <h2 className="mt-2 text-4xl font-black leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
        the house rules.
      </h2>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {items.map(([title, body]) => (
          <div
            key={title}
            className="rounded-xl border p-5"
            style={{ background: "var(--color-card-2)", borderColor: "rgba(18,14,23,.12)" }}
          >
            <h3 className="text-base font-bold" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
            <p className="mt-1 text-sm" style={{ color: "var(--color-mist)" }}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="book" className="mt-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "var(--color-flush)", fontFamily: "var(--font-mono)" }}>
        book
      </p>
      <h2 className="mt-2 text-4xl font-black leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
        pick your slot.
      </h2>
      <div
        className="mt-8 overflow-hidden rounded-2xl border bg-white"
        style={{ borderColor: "var(--color-void)", boxShadow: "10px 10px 0 var(--color-void)" }}
      >
        <iframe
          src="https://cal.com/maneautoimation/"
          title="Book with Pocket Studio"
          className="h-[820px] w-full"
          style={{ border: 0 }}
        />
      </div>
      <p className="mt-4 text-xs" style={{ color: "var(--color-ash)" }}>
        By booking you agree to the studio's policies. See{" "}
        <Link to="/terms" className="underline">Terms</Link> and{" "}
        <Link to="/privacy" className="underline">Privacy</Link>.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t pt-6 text-sm" style={{ borderColor: "rgba(18,14,23,.12)", color: "var(--color-ash)" }}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Pocket Studio · MyKey Pocket · Seattle, WA</div>
        <div className="flex gap-4">
          <Link to="/terms" className="hover:text-[color:var(--color-void)]">Terms</Link>
          <Link to="/privacy" className="hover:text-[color:var(--color-void)]">Privacy</Link>
          <a href="https://pocketstudio.biz" className="hover:text-[color:var(--color-void)]">pocketstudio.biz</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Booking popup (emergency modal removed — dormant) ---------------- */

function BookingPopup() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [cat, setCat] = useState<"cut" | "color" | null>(null);
  const [chosen, setChosen] = useState<Service | null>(null);

  const reset = () => {
    setStep(1);
    setCat(null);
    setChosen(null);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5"
        style={{
          background: "var(--color-void)",
          color: "var(--color-lime)",
          boxShadow: "6px 6px 0 var(--color-lime)",
          fontFamily: "var(--font-display)",
        }}
        aria-label="Open booking helper"
      >
        book
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:items-center sm:justify-center" style={{ background: "rgba(18,14,23,0.55)" }} onClick={() => setOpen(false)}>
          <div
            className="relative w-full max-w-md rounded-2xl border-2 p-6"
            style={{ background: "var(--color-bone)", borderColor: "var(--color-void)", boxShadow: "10px 10px 0 var(--color-void)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => { setOpen(false); reset(); }}
              className="absolute right-3 top-3 rounded-full p-1 hover:opacity-70"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {!chosen && (
              <>
                <h3 className="text-2xl font-black" style={{ fontFamily: "var(--font-display)" }}>
                  {step === 1 ? "cut or color?" : "which one?"}
                </h3>
                <p className="mt-1 text-sm" style={{ color: "var(--color-mist)" }}>
                  Two quick taps and I'll show your earliest bookable date.
                </p>

                {step === 1 && (
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <QuizButton label="cut" icon={<Scissors size={18} />} onClick={() => { setCat("cut"); setStep(2); }} />
                    <QuizButton label="color" icon={<Palette size={18} />} onClick={() => { setCat("color"); setStep(2); }} />
                  </div>
                )}

                {step === 2 && cat && (
                  <div className="mt-5 space-y-2">
                    {SERVICES.filter((s) => s.category === cat).map((s) => (
                      <button
                        key={s.slug}
                        onClick={() => setChosen(s)}
                        className="flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left transition hover:-translate-y-0.5"
                        style={{ borderColor: "rgba(18,14,23,.12)" }}
                      >
                        <span className="font-semibold">{s.name}</span>
                        <span className="text-xs" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>{s.duration}</span>
                      </button>
                    ))}
                    <button className="mt-2 text-xs underline" style={{ color: "var(--color-ash)" }} onClick={() => setStep(1)}>← back</button>
                  </div>
                )}
              </>
            )}

            {chosen && (
              <div>
                <h3 className="text-2xl font-black" style={{ fontFamily: "var(--font-display)" }}>{chosen.name}</h3>
                <div className="mt-4 rounded-xl border p-4" style={{ background: "white", borderColor: "rgba(18,14,23,.12)" }}>
                  <div className="text-xs uppercase tracking-widest" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>duration</div>
                  <div className="text-base font-semibold">{chosen.duration}</div>
                  <div className="mt-3 text-xs uppercase tracking-widest" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>earliest bookable</div>
                  <div className="text-base font-semibold" style={{ color: "var(--color-violet-brand)" }}>{earliestDate(chosen.leadDays)}</div>
                </div>
                <a
                  href={`${CAL_BASE}${chosen.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 block w-full rounded-full px-4 py-3 text-center text-sm font-bold uppercase tracking-wider"
                  style={{ background: "var(--color-lime)", color: "var(--color-void)", boxShadow: "4px 4px 0 var(--color-void)", fontFamily: "var(--font-display)" }}
                >
                  book my appointment →
                </a>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <button onClick={reset} className="underline" style={{ color: "var(--color-ash)" }}>start over</button>
                  {/* emergency request entry point stays removed — the modal is
                      dormant (locked fact, 2026-07-28). need it sooner? text 425-918-2029. */}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </>
  );
}

function QuizButton({ label, icon, onClick }: { label: string; icon: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 rounded-xl border-2 bg-white py-6 text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5"
      style={{ borderColor: "var(--color-void)", boxShadow: "4px 4px 0 var(--color-void)", fontFamily: "var(--font-display)" }}
    >
      {icon}
      {label}
    </button>
  );
}

/* Emergency request modal + its form-endpoint submission path intentionally
   REMOVED from this route — the modal stays dormant (locked fact, entry
   points removed 2026-07-28). The dormant component still lives at
   src/components/EmergencyModal.tsx. need it sooner? text 425-918-2029. */
