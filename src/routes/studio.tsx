import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Scissors, Palette, Sparkles, Clock, MapPin, Mail, Phone, X, AlertTriangle } from "lucide-react";
import { headFor } from "../lib/seo";

export const Route = createFileRoute("/studio")({
  head: () => headFor("/studio"),
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
  { slug: "buzz-cut", name: "Buzz Cut", duration: "30 min", leadDays: 2, category: "cut", blurb: "Clean, quick, dialed clipper work.", icon: Scissors, accent: "var(--color-lime)" },
  { slug: "short-cut", name: "Short Cut", duration: "45 min", leadDays: 2, category: "cut", blurb: "Precision short shapes with intention.", icon: Scissors, accent: "var(--color-violet-brand)" },
  { slug: "long-cut", name: "Long Cut", duration: "60 min", leadDays: 2, category: "cut", blurb: "Long layers, texture, and movement.", icon: Scissors, accent: "var(--color-flush)" },
  { slug: "hair-consultation", name: "New-Client Color Consult", duration: "45 min", leadDays: 3, category: "color", blurb: "Meet, plan, and price your first color visit.", icon: Sparkles, accent: "var(--color-violet-brand)" },
  { slug: "existing-client-color-appointment", name: "Existing-Client Color Appointment", duration: "3 hr / up to 5 hr", leadDays: 7, category: "color", blurb: "Full color session for returning clients.", icon: Palette, accent: "var(--color-lime)" },
];

function earliestDate(leadDays: number) {
  const d = new Date();
  d.setDate(d.getDate() + leadDays);
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: "America/Los_Angeles" });
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
        Independent hair studio in Seattle. Cuts &amp; color from MyKey Pocket (they/them) — small chair, big attention.
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
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.15em" }}>
          CURRENT DEAL
        </p>
        <h2 className="mt-1 text-3xl font-black uppercase tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
          rebook ahead, get the tea.
        </h2>
        <p className="mt-3 max-w-lg text-base sm:text-lg" style={{ color: "var(--color-void)" }}>
          book your next appointment at least 2 days out and i'll spill everything. why i'm not at the old shop anymore, what really went down, all of it. consider it a loyalty bribe. ☕
        </p>
      </div>

      {/* Notice bands */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div
          className="rounded-xl border p-4 text-sm"
          style={{ background: "color-mix(in oklab, var(--color-violet-brand) 12%, white)", borderColor: "var(--color-violet-brand)" }}
        >
          <strong className="font-bold" style={{ color: "var(--color-violet-brand)" }}>former Rudy's clients:</strong>{" "}
          i'm not at Rudy's anymore. this is where you book now. same hands, same energy, way fewer hoops.
        </div>
        <div
          className="rounded-xl border p-4 text-sm"
          style={{ background: "color-mix(in oklab, var(--color-flush) 10%, white)", borderColor: "var(--color-flush)" }}
        >
          <strong className="font-bold" style={{ color: "var(--color-flush)" }}>house calls only right now.</strong>{" "}
          i come to you, no travel fee yet, but that won't last forever. thank you for rolling with it.
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
          Small studio, careful hands.
        </h2>
        <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--color-mist)" }}>
          I'm MyKey (they/them) — a Seattle hairstylist running Pocket Studio as an
          indie parent chair. Not affiliated with Rudy's Barbershop. I take on a small
          number of clients each month so every cut and color gets the time it actually
          needs.
        </p>
        <ul className="mt-6 space-y-3 text-base" style={{ color: "var(--color-void)" }}>
          <li className="flex gap-3"><span style={{ color: "var(--color-lime)" }}>▍</span> Textured cuts, gender-inclusive shapes, grown-out grace.</li>
          <li className="flex gap-3"><span style={{ color: "var(--color-violet-brand)" }}>▍</span> Color built around your hair's biology — porosity, history, tone.</li>
          <li className="flex gap-3"><span style={{ color: "var(--color-flush)" }}>▍</span> Consult-first for new color clients so pricing &amp; timing are honest.</li>
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
        <h3 className="mt-2 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Reach the chair</h3>
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
          Text is fastest. Please allow up to 24 hours for a reply outside studio hours.
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
        What you can book.
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
    ["One month at a time", "Books open month-by-month, first come first serve."],
    ["Lead times", "Cuts: 2 days · New color consult: 3 days · Existing color: 1 week."],
    ["24-hour cancellation", "Cancel or reschedule at least 24 hours before your appointment."],
    ["No-show", "No-shows may be charged up to the full quoted / estimated amount."],
    ["Confirmation window", "Please confirm your appointment within a 2-hour confirmation window."],
    ["House-call space", "Give me a safe, ready spot and an accurate address — and flag allergies or prior chemical work so i don't fry your hair."],
  ];
  return (
    <section id="policies" className="mt-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "var(--color-flush)", fontFamily: "var(--font-mono)" }}>
        policies
      </p>
      <h2 className="mt-2 text-4xl font-black leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
        The house rules.
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
        Pick your slot.
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

/* ---------------- Booking popup + emergency modal ---------------- */

function BookingPopup() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [cat, setCat] = useState<"cut" | "color" | null>(null);
  const [chosen, setChosen] = useState<Service | null>(null);
  const [emergency, setEmergency] = useState(false);

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
                  <button
                    onClick={() => setEmergency(true)}
                    className="inline-flex items-center gap-1 font-semibold"
                    style={{ color: "var(--color-flush)" }}
                  >
                    <AlertTriangle size={14} /> 🚨 need it sooner? emergency request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {emergency && <EmergencyModal defaultService={chosen?.name ?? ""} onClose={() => setEmergency(false)} />}
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

function EmergencyModal({ defaultService, onClose }: { defaultService: string; onClose: () => void }) {
  const [state, setState] = useState<"form" | "sending" | "ok" | "err">("form");
  const [form, setForm] = useState({ name: "", contact: "", service: defaultService, timing: "" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/itspocketmykey@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "🚨 EMERGENCY booking request — Pocket Studio",
          ...form,
        }),
      });
      if (!res.ok) throw new Error("bad status");
      setState("ok");
    } catch {
      setState("err");
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" style={{ background: "rgba(18,14,23,0.6)" }} onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl border-2 p-6"
        style={{ background: "white", borderColor: "var(--color-flush)", boxShadow: "10px 10px 0 var(--color-flush)" }}
      >
        <button onClick={onClose} className="absolute right-3 top-3 rounded-full p-1 hover:opacity-70" aria-label="Close">
          <X size={18} />
        </button>
        <div className="flex items-center gap-2">
          <AlertTriangle size={20} style={{ color: "var(--color-flush)" }} />
          <h3 className="text-2xl font-black" style={{ fontFamily: "var(--font-display)" }}>emergency request</h3>
        </div>
        <p className="mt-1 text-sm" style={{ color: "var(--color-mist)" }}>
          Nothing within lead time? Send the details — I'll reply if I can squeeze you in.
        </p>

        {state === "form" || state === "sending" ? (
          <form onSubmit={submit} className="mt-5 space-y-3">
            <Field label="your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label="best contact (phone or email)" value={form.contact} onChange={(v) => setForm({ ...form, contact: v })} required />
            <Field label="desired service" value={form.service} onChange={(v) => setForm({ ...form, service: v })} required />
            <Field label="when do you need it?" value={form.timing} onChange={(v) => setForm({ ...form, timing: v })} required />
            <button
              type="submit"
              disabled={state === "sending"}
              className="w-full rounded-full px-4 py-3 text-sm font-bold uppercase tracking-wider"
              style={{ background: "var(--color-flush)", color: "white", fontFamily: "var(--font-display)" }}
            >
              {state === "sending" ? "sending…" : "send request"}
            </button>
          </form>
        ) : state === "ok" ? (
          <div className="mt-5 rounded-xl p-4 text-sm" style={{ background: "color-mix(in oklab, var(--color-lime) 20%, white)" }}>
            got it — your request is in. I'll reach out at your contact info shortly.
          </div>
        ) : (
          <div className="mt-5 rounded-xl p-4 text-sm" style={{ background: "color-mix(in oklab, var(--color-flush) 12%, white)" }}>
            couldn't send that. text{" "}
            <a href="tel:14259182029" className="underline font-semibold">425-918-2029</a> or email{" "}
            <a href="mailto:mykeypocket@icloud.com" className="underline font-semibold">mykeypocket@icloud.com</a> directly.
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, required }: { label: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2"
        style={{ borderColor: "rgba(18,14,23,.15)" }}
      />
    </label>
  );
}