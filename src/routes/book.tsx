import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CAL_BASE, SERVICES, STRIPE_DEPOSIT_LINK, type Service } from "../lib/services";
import { TRAVEL } from "../lib/travel";
import { headFor } from "../lib/seo";
import { ReadingModeToggle } from "../components/ReadingModeToggle";

export const Route = createFileRoute("/book")({
  head: () => headFor("/book"),
  component: BookPage,
});

const bySlug = (slug: string) => SERVICES.find((s) => s.slug === slug)!;
const CUTS = ["buzz-cut", "short-cut", "long-cut"].map(bySlug);
const CONSULT = bySlug("hair-consultation");
const EXISTING = bySlug("existing-client-color-appointment");

type Msg =
  | { id: number; from: "user"; text: string }
  | { id: number; from: "bot"; text: string }
  | { id: number; from: "bot"; card: Service };

type Stage = "start" | "cut" | "color" | "done";

const GREETING: Msg[] = [
  { id: 0, from: "bot", text: "hey! I'm the booking bot ✂ I come to you — let's find your service." },
  { id: 1, from: "bot", text: "cut or color?" },
];

function BookPage() {
  const [messages, setMessages] = useState<Msg[]>(GREETING);
  const [stage, setStage] = useState<Stage>("start");
  const endRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(2);

  useEffect(() => {
    if (messages.length > GREETING.length) endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages]);

  useEffect(() => {
    if (stage === "done") window.dispatchEvent(new CustomEvent("mybesti:review"));
    else if (stage !== "start") window.dispatchEvent(new CustomEvent("mybesti:waiting"));
  }, [stage]);

  const push = (...msgs: Array<{ from: Msg["from"]; text?: string; card?: Service }>) =>
    setMessages((m) => [...m, ...msgs.map((msg) => ({ ...msg, id: nextId.current++ } as Msg))]);

  const pickCut = () => {
    push({ from: "user", text: "cut" }, { from: "bot", text: "love that for you. which cut are we doing?" });
    setStage("cut");
  };
  const pickColor = () => {
    push({ from: "user", text: "color" }, { from: "bot", text: "ooh, color day 🎨 have we colored together before?" });
    setStage("color");
  };
  const pickService = (s: Service, userText: string) => {
    push({ from: "user", text: userText }, { from: "bot", text: "say less. here's the deal:" }, { from: "bot", card: s });
    setStage("done");
  };
  const reset = () => {
    setMessages([...GREETING]);
    setStage("start");
    nextId.current = 2;
  };

  const chips: { label: string; onClick: () => void }[] =
    stage === "start"
      ? [{ label: "CUT ✂", onClick: pickCut }, { label: "COLOR 🎨", onClick: pickColor }]
      : stage === "cut"
        ? CUTS.map((s) => ({ label: `${s.name} · ${s.price} · ${s.duration}`, onClick: () => pickService(s, `${s.name}, please`) }))
        : stage === "color"
          ? [
              { label: "first time", onClick: () => pickService(CONSULT, "first time with you") },
              { label: "returning client", onClick: () => pickService(EXISTING, "returning client, you know the vibe") },
            ]
          : [];

  return (
    <div
      style={{
        background: "var(--color-bone)",
        color: "var(--color-void)",
        fontFamily: "var(--font-sans)",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @keyframes msg-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .msg-in { animation: msg-in 0.25s ease-out both; }
        .chat-user { background: var(--color-flush, #c53b38); color: var(--color-void, #f4efe6); border: 2px solid rgba(244,239,230,0.35); box-shadow: 4px 4px 0 rgba(0,0,0,0.35); border-radius: 18px; border-bottom-right-radius: 6px; }
        .chat-bot { background: rgba(22,22,29,0.92); color: var(--color-void, #f4efe6); border: 2px solid rgba(244,239,230,0.22); box-shadow: 4px 4px 0 var(--color-lime); border-radius: 18px; border-bottom-left-radius: 6px; border-left: 3px solid var(--color-lime); }
        .chip { border: 2px solid var(--color-go, #b6f23a); color: var(--color-void, #f4efe6); background: transparent; box-shadow: 3px 3px 0 var(--color-go, #b6f23a); }
        .chip:hover { background: rgba(198,59,56,0.12); }
        .panel { border: 2px solid var(--color-ash); box-shadow: 6px 6px 0 var(--color-violet-brand); background: rgba(255,255,255,0.04); }
        .panel input, .panel select { background: var(--color-card-w); color: var(--color-void, #f4efe6); border: 2px solid var(--color-ash); }
        .panel label { color: var(--color-void, #f4efe6); }
        .btn-primary { background: var(--color-lime, #c53b38); color: var(--color-void, #f4efe6); border: 2px solid rgba(244,239,230,0.35); box-shadow: 3px 3px 0 rgba(0,0,0,0.35); }
        .btn-secondary { background: var(--color-card-w); color: var(--color-void, #f4efe6); border: 2px solid var(--color-void); box-shadow: 3px 3px 0 var(--color-void); }
        .service-card-title { color: var(--color-void, #f4efe6); }
        .service-card-meta { color: var(--color-void, #f4efe6); opacity: 0.85; }
        .service-card-body { color: var(--color-void, #f4efe6); opacity: 0.92; }
      `}</style>

      <header className="sticky top-0 z-50 border-b" style={{ background: "var(--color-bone)", borderColor: "var(--color-ash)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
          <Link to="/" className="text-sm font-black tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-void)" }}>
            ✂ POCKET STUDIO
          </Link>
          <div className="flex items-center gap-4" style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
            <span className="inline-block h-2 w-2 animate-pulse rounded-full" style={{ background: "var(--color-go)" }} />
            <ReadingModeToggle compact />
            <Link to="/" hash="services" className="underline-offset-4 hover:underline" style={{ color: "var(--color-void)" }}>
              ← services
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-5 py-12 sm:py-16">
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.15em", color: "var(--color-lime)" }}>BOOK</p>
        <h1 className="mt-2 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
          Chat your way in<span style={{ color: "var(--color-flush)" }}>.</span>
        </h1>
        <p className="mt-4 max-w-lg text-lg leading-relaxed" style={{ color: "var(--color-ash)" }}>
          Two taps and you're booked. Every appointment is a house call — your couch, your mirror, your gossip.
        </p>

        <div className="mt-8 panel p-4 sm:p-6">
          <div className="mb-4 flex items-center gap-2 border-b pb-3" style={{ borderColor: "var(--color-ash)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", color: "var(--color-ash)" }}>
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--color-go)" }} />
            BOOKING BOT · ONLINE
          </div>

          <div className="flex flex-col gap-3">
            {messages.map((m) =>
              "card" in m ? (
                <ServiceCard key={m.id} service={m.card} onReset={reset} />
              ) : (
                <div key={m.id} className={`msg-in max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${m.from === "user" ? "self-end chat-user" : "self-start chat-bot"}`}>
                  {m.text}
                </div>
              ),
            )}

            {chips.length > 0 && (
              <div className="msg-in mt-1 flex flex-wrap gap-2 self-end">
                {chips.map((c) => (
                  <button key={c.label} onClick={c.onClick} className="chip rounded px-4 py-2 text-xs font-bold uppercase tracking-wider transition hover:-translate-y-0.5" style={{ fontFamily: "var(--font-display)" }}>
                    {c.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>
        </div>

        <TestBookingPanel />

        <p className="mt-6 text-sm" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>
          prefer the full calendar? <a href="https://cal.com/maneautoimation" target="_blank" rel="noreferrer" className="underline underline-offset-4" style={{ color: "var(--color-void)" }}>open cal.com →</a>
          <br />
          Calendar not showing a slot soon enough? Text <a href="sms:+14259182029" className="underline underline-offset-4" style={{ color: "var(--color-lime)" }}>425-918-2029</a>.
        </p>
      </main>

      <footer className="border-t px-5 py-8" style={{ borderColor: "var(--color-ash)" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-xs sm:flex-row sm:items-center" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>
          <span>© {new Date().getFullYear()} Pocket Studio · MyKey Pocket (they/them) · Seattle</span>
          <span className="flex gap-5">
            <Link to="/" className="underline-offset-4 hover:underline">Home</Link>
            <Link to="/terms" className="underline-offset-4 hover:underline">Terms</Link>
            <Link to="/privacy" className="underline-offset-4 hover:underline">Privacy</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ service, onReset }: { service: Service; onReset: () => void }) {
  return (
    <div key={service.slug} className="msg-in self-start chat-bot p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>service card</p>
          <h3 className="mt-1 text-lg font-black service-card-title" style={{ fontFamily: "var(--font-display)" }}>{service.name}</h3>
          <p className="mt-1 text-sm service-card-meta">{service.duration} · {service.price}</p>
        </div>
        <button onClick={onReset} className="text-xs" style={{ color: "var(--color-flush)" }}>✕ reset</button>
      </div>
      <p className="mt-3 text-sm service-card-body">{service.detail}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <a href={`${CAL_BASE}${service.slug}`} target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center rounded px-4 py-2 text-xs font-black" style={{ fontFamily: "var(--font-display)" }}>
          BOOK {service.name.toUpperCase()} →
        </a>
      </div>
    </div>
  );
}

function TestBookingPanel() {
  const [form, setForm] = useState({ serviceSlug: "buzz-cut", startISO: "", contact: "425-918-2029", channel: "sms" as "sms" | "email", address: "Capitol Hill, Seattle", isExistingClient: false, houseCall: true });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResult({ status: res.status, data });
    } catch (e) {
      setResult({ status: 0, data: { error: e instanceof Error ? e.message : String(e) } });
    } finally {
      setLoading(false);
    }
  };

  const runReminders = async () => {
    const res = await fetch("/api/reminders?mode=run");
    const data = await res.json();
    setResult((prev: any) => ({ ...prev, reminders: data }));
  };

  return (
    <div className="mt-10 panel p-4 sm:p-6">
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", color: "var(--color-violet-brand)" }}>TEST · RULES + REMINDERS</p>
      <h2 className="mt-2 text-2xl font-black" style={{ fontFamily: "var(--font-display)" }}>Test booking guardrails</h2>
      <p className="mt-2 text-sm" style={{ color: "var(--color-ash)" }}>
        Fake a booking and validate the full flow in one place: advance-notice rules, address gate, deposit reminder, confirmation/24h/2h reminders, and no-show policy.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
          Service
          <select className="mt-1 w-full rounded px-3 py-2 text-sm" value={form.serviceSlug} onChange={(e) => setForm({ ...form, serviceSlug: e.target.value })}>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </label>
        <label className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
          Start time (ISO)
          <input className="mt-1 w-full rounded px-3 py-2 text-sm" value={form.startISO} onChange={(e) => setForm({ ...form, startISO: e.target.value })} placeholder="2026-08-01T14:00:00" />
        </label>
        <label className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
          Contact
          <input className="mt-1 w-full rounded px-3 py-2 text-sm" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
        </label>
        <label className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
          Channel
          <select className="mt-1 w-full rounded px-3 py-2 text-sm" value={form.channel} onChange={(e) => setForm({ ...form, channel: e.target.value as any })}>
            <option value="sms">SMS</option>
            <option value="email">Email</option>
          </select>
        </label>
        <label className="text-xs sm:col-span-2" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
          Address (house call)
          <input className="mt-1 w-full rounded px-3 py-2 text-sm" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={submit} disabled={loading} className="btn-primary rounded px-5 py-2 text-sm font-black transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50" style={{ fontFamily: "var(--font-display)" }}>
          {loading ? "running…" : "Run test booking"}
        </button>
        <button type="button" onClick={runReminders} className="btn-secondary rounded px-5 py-2 text-sm font-black transition hover:-translate-y-0.5" style={{ fontFamily: "var(--font-display)" }}>
          Process due reminders
        </button>
      </div>

      {result && (
        <div className="mt-4 text-xs leading-relaxed" style={{ fontFamily: "var(--font-mono)", color: "var(--color-mist)" }}>
          <pre className="whitespace-pre-wrap rounded border p-3" style={{ background: "rgba(0,0,0,0.25)", borderColor: "var(--color-ash)" }}>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
