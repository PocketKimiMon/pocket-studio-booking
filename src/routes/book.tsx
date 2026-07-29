import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CAL_BASE, SERVICES, STRIPE_DEPOSIT_LINK, type Service } from "../lib/services";
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

  // Let the My Besti page pet react to booking progress.
  useEffect(() => {
    if (stage === "done") window.dispatchEvent(new CustomEvent("mybesti:review"));
    else if (stage !== "start") window.dispatchEvent(new CustomEvent("mybesti:waiting"));
  }, [stage]);

  type MsgIn = { from: "user" | "bot"; text: string } | { from: "bot"; card: Service };
  const push = (...msgs: MsgIn[]) =>
    setMessages((m) => [...m, ...msgs.map((msg) => ({ ...msg, id: nextId.current++ }) as Msg)]);

  const pickCut = () => {
    push({ from: "user", text: "cut" }, { from: "bot", text: "love that for you. which cut are we doing?" });
    setStage("cut");
  };
  const pickColor = () => {
    push({ from: "user", text: "color" }, { from: "bot", text: "ooh, color day 🎨 have we colored together before?" });
    setStage("color");
  };
  const pickService = (s: Service, userText: string) => {
    push(
      { from: "user", text: userText },
      { from: "bot", text: "say less. here's the deal:" },
      { from: "bot", card: s },
    );
    setStage("done");
  };
  const reset = () => {
    setMessages(GREETING);
    setStage("start");
    nextId.current = 2;
  };

  const chips: { label: string; onClick: () => void }[] =
    stage === "start"
      ? [
          { label: "CUT ✂", onClick: pickCut },
          { label: "COLOR 🎨", onClick: pickColor },
        ]
      : stage === "cut"
        ? CUTS.map((s) => ({
            label: `${s.name} · ${s.price} · ${s.duration}`,
            onClick: () => pickService(s, `${s.name}, please`),
          }))
        : stage === "color"
          ? [
              { label: "first time", onClick: () => pickService(CONSULT, "first time with you") },
              { label: "returning client", onClick: () => pickService(EXISTING, "returning client, you know the vibe") },
            ]
          : [];

  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(11,11,15,.94), rgba(11,11,15,.96)), url(/booking-bg.jpg) center/cover fixed",
        color: "var(--color-void)",
        fontFamily: "var(--font-sans)",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @keyframes msg-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .msg-in { animation: msg-in 0.25s ease-out both; }
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

        {/* chat thread */}
        <div
          className="mt-8 border-2 p-4 sm:p-6"
          style={{ borderColor: "var(--color-lime)", boxShadow: "6px 6px 0 var(--color-lime)", background: "rgba(255,255,255,0.03)" }}
        >
          <div className="mb-4 flex items-center gap-2 border-b pb-3" style={{ borderColor: "var(--color-ash)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", color: "var(--color-ash)" }}>
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--color-go)" }} />
            BOOKING BOT · ONLINE
          </div>

          <div className="flex flex-col gap-3">
            {messages.map((m) =>
              "card" in m ? (
                <ServiceCard key={m.id} service={m.card} onReset={reset} />
              ) : (
                <div
                  key={m.id}
                  className={`msg-in max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${m.from === "user" ? "self-end" : "self-start"}`}
                  style={
                    m.from === "user"
                      ? { background: "var(--color-lime)", color: "var(--color-void)", fontWeight: 700, border: "2px solid var(--color-void)", boxShadow: "3px 3px 0 rgba(255,255,255,0.25)" }
                      : { background: "var(--color-card-w)", color: "var(--color-void)", border: "2px solid var(--color-void)", boxShadow: "3px 3px 0 var(--color-lime)" }
                  }
                >
                  {m.text}
                </div>
              ),
            )}

            {chips.length > 0 && (
              <div className="msg-in mt-1 flex flex-wrap gap-2 self-end">
                {chips.map((c) => (
                  <button
                    key={c.label}
                    onClick={c.onClick}
                    className="border-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition hover:-translate-y-0.5"
                    style={{
                      borderColor: "var(--color-lime)",
                      color: "var(--color-lime)",
                      background: "transparent",
                      fontFamily: "var(--font-display)",
                      boxShadow: "3px 3px 0 var(--color-lime)",
                    }}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>
        </div>

        <AreaChecker />

        <p className="mt-6 text-sm" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>
          prefer the full calendar?{" "}
          <a href="https://cal.com/maneautoimation" target="_blank" rel="noreferrer" className="underline underline-offset-4" style={{ color: "var(--color-void)" }}>
            open cal.com →
          </a>
          <br />
          Calendar not showing a slot soon enough? Text{" "}
          <a href="sms:+14259182029" className="underline underline-offset-4" style={{ color: "var(--color-lime)" }}>425-918-2029</a>.
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

type FeeResult = {
  available: boolean;
  distance_mi?: number;
  fee?: number;
  reason?: string;
};

function AreaChecker() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FeeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function calculate() {
    if (!address.trim() || loading) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/travel-fee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: address.trim() }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setResult((await res.json()) as FeeResult);
    } catch {
      setError("couldn't reach the checker — try again, or text us and we'll confirm.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="mt-8 border-2 p-4 sm:p-6"
      style={{ borderColor: "var(--color-violet-brand)", boxShadow: "6px 6px 0 var(--color-violet-brand)", background: "rgba(255,255,255,0.03)" }}
    >
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", color: "var(--color-violet-brand)" }}>SERVICE AREA</p>
      <h2 className="mt-1 text-xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        House call? Check you're in range.
      </h2>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-ash)" }}>
        House calls are Seattle-area only — and right now there's{" "}
        <strong style={{ color: "var(--color-go)" }}>no travel fee at all</strong>. $0, anywhere in range,
        while the books are building.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); void calculate(); } }}
          placeholder="your address or neighborhood (e.g. Capitol Hill, Seattle)"
          className="w-full flex-1 border-2 px-4 py-2.5 text-sm outline-none"
          style={{ background: "var(--color-bone)", color: "var(--color-void)", borderColor: "var(--color-ash)", fontFamily: "var(--font-mono)" }}
        />
        <button
          type="button"
          onClick={() => void calculate()}
          disabled={loading || !address.trim()}
          className="border-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          style={{
            background: "var(--color-lime)",
            color: "var(--color-void)",
            borderColor: "var(--color-void)",
            boxShadow: "4px 4px 0 var(--color-void)",
            fontFamily: "var(--font-display)",
          }}
        >
          {loading ? "checking…" : "Check my address"}
        </button>
      </div>
      <div className="mt-4 text-sm" aria-live="polite" style={{ fontFamily: "var(--font-mono)" }}>
        {loading && <p style={{ color: "var(--color-ash)" }}>checking the map…</p>}
        {error && <p style={{ color: "var(--color-flush)" }}>{error}</p>}
        {result && (
          result.available ? (
            <p style={{ color: "var(--color-void)" }}>
              {result.distance_mi != null
                ? <>You're in range ({result.distance_mi} mi) — travel fee: <span className="font-black" style={{ color: "var(--color-go)" }}>$0</span> <span style={{ color: "var(--color-ash)" }}>(no fee right now)</span></>
                : <>You're in range — travel fee: <span className="font-black" style={{ color: "var(--color-go)" }}>$0</span> <span style={{ color: "var(--color-ash)" }}>({result.reason ?? "no fee right now"})</span></>}
            </p>
          ) : (
            <p style={{ color: "var(--color-flush)" }}>
              sorry, no house calls there{result.distance_mi != null ? ` (${result.distance_mi} mi)` : ""} — {result.reason ?? "outside service area"}.
            </p>
          )
        )}
      </div>
    </div>
  );
}

function ServiceCard({ service, onReset }: { service: Service; onReset: () => void }) {
  return (
    <div
      className="msg-in max-w-[92%] self-start border-2 p-4"
      style={{ background: "var(--color-card-w)", color: "var(--color-void)", borderColor: "var(--color-void)", boxShadow: "4px 4px 0 var(--color-lime)" }}
    >
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", color: "var(--color-mist)" }}>YOUR PICK</p>
      <h3 className="mt-1 text-xl font-black" style={{ fontFamily: "var(--font-display)" }}>{service.name}</h3>
      <p className="mt-1 text-sm font-bold" style={{ fontFamily: "var(--font-mono)" }}>
        {service.duration} · {service.price}
      </p>
      <p className="mt-2 text-sm leading-relaxed">{service.detail}</p>
      <a
        href={`${CAL_BASE}${service.slug}`}
        target="_blank"
        rel="noreferrer"
        onClick={() => window.dispatchEvent(new CustomEvent("mybesti:celebrate"))}
        className="mt-4 block w-full px-4 py-3 text-center text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5"
        style={{ background: "var(--color-lime)", color: "var(--color-void)", border: "2px solid var(--color-void)", boxShadow: "4px 4px 0 var(--color-void)", fontFamily: "var(--font-display)" }}
      >
        BOOK {service.name} →
      </a>
      <p className="mt-3 text-xs leading-relaxed" style={{ color: "var(--color-ash)" }}>
        a <strong style={{ color: "var(--color-void)" }}>$25 deposit</strong> holds your slot — applied to your total at the chair.{" "}
        <a href={STRIPE_DEPOSIT_LINK} target="_blank" rel="noreferrer" className="underline underline-offset-2" style={{ color: "var(--color-violet-brand)" }}>
          pay deposit →
        </a>
      </p>
      <div className="mt-3 flex items-center justify-between text-xs">
        <Link to="/services/$slug" params={{ slug: service.slug }} className="underline underline-offset-4 font-semibold">
          see the work
        </Link>
        <button onClick={onReset} className="underline underline-offset-4" style={{ color: "var(--color-mist)" }}>
          start over
        </button>
      </div>
    </div>
  );
}
