import { useEffect, useRef, useState } from "react";
import { CAL_BASE, SERVICES } from "../lib/services";
import { ReadingModeToggle } from "./ReadingModeToggle";

/**
 * Integrated live page that unifies every moving part of Pocket Studio:
 *  — the free-roam "mybesti" pet (loaded globally in __root.tsx) which reacts
 *    to booking flow events via the mybesti:* custom events this page dispatches.
 *  — the chat bot (/api/chat) with the full provider fallback chain, surfaced
 *    inline as a compact floating assistant.
 *  — an embedded Cal.com inline calendar so you can pick a slot without leaving
 *    the page (falls back to the full-calendar link on narrow viewports / JS).
 *  — a live reminders status strip that polls /api/reminders and shows how many
 *    are queued / due, with a one-tap "process due" button.
 *  - email capture (emergency / booking request) wired through /api/book + the
 *    Formsubmit email path.
 *
 * The pet, chat, cal, reminders, and email pieces were previously scattered
 * across BookingPopup, EmergencyModal, the Book page, and a test panel. This
 * component composes them into one continuous booking flow on the home page.
 */

const CAL_EMBED = `${CAL_BASE}?embed=true`;
const CAL_SMS = "sms:+14259182029";

type PetState = "idle" | "waiting" | "review" | "celebrate";

export function LiveBookingPage() {
  // The pet reacts to these states via window event dispatching.
  const [petState, setPetState] = useState<PetState>("idle");
  const [chatOpen, setChatOpen] = useState(false);
  const [reminders, setReminders] = useState<{ queued: number; sent: number }>({
    queued: 0,
    sent: 0,
  });
  const remindersLoaded = useRef(false);

  // Dispatch pet state changes to the globally-loaded mybesti-scroll.js.
  useEffect(() => {
    window.dispatchEvent(new CustomEvent(`mybesti:${petState}`));
  }, [petState]);

  // Poll the reminders store on mount.
  useEffect(() => {
    if (remindersLoaded.current) return;
    remindersLoaded.current = true;
    void fetchReminders();
  }, []);

  async function fetchReminders() {
    try {
      const res = await fetch("/api/reminders");
      if (!res.ok) return;
      const data = await res.json();
      const items = data.items ?? [];
      setReminders({
        queued: items.filter((r: { status: string }) => r.status === "queued").length,
        sent: items.filter((r: { status: string }) => r.status === "sent").length,
      });
    } catch {
      /* network offline — leave at 0/0 */
    }
  }

  async function processReminders() {
    setPetState("waiting");
    try {
      await fetch("/api/reminders?mode=run");
      await fetchReminders();
    } finally {
      setPetState("review");
    }
  }

  function openBookingChat() {
    setChatOpen(true);
    setPetState("waiting");
  }

  function onChatBooked() {
    setChatOpen(false);
    setPetState("celebrate");
    // Clear the celebration after a few seconds so the pet returns to idle.
    setTimeout(() => setPetState("idle"), 6000);
  }

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
        @media (prefers-reduced-motion: reduce) {
          .ps-pulse { animation: none !important; }
        }
        .ps-pulse { animation: ps-pulse 1.6s ease-in-out infinite; }
        @keyframes ps-pulse { 0%,100% { opacity: 1; } 50% { opacity: .35; } }
      `}</style>

      <TopBar reminders={reminders} onOpenChat={openBookingChat} />
      <Hero onOpenChat={openBookingChat} />
      <Services onServiceBooked={onChatBooked} />
      <CalInline />
      <RemindersStrip reminders={reminders} onProcess={processReminders} />
      <EmergencyStrip onBooked={onChatBooked} />
      <Footer />
    </div>
  );
}

/* ── top bar with reminders badge + chat button ────────── */
function TopBar({
  reminders,
  onOpenChat,
}: {
  reminders: { queued: number; sent: number };
  onOpenChat: () => void;
}) {
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
        <div className="flex items-center gap-4" style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
          <span className="hidden items-center gap-2 sm:flex">
            <span className="ps-pulse inline-block h-2 w-2 rounded-full" style={{ background: "var(--color-go)" }} />
            booking open
          </span>

          {/* reminders live strip */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-current px-2.5 py-0.5 text-xs">
            <span style={{ color: "var(--color-ash)" }}>reminders:</span>
            <span style={{ color: reminders.queued > 0 ? "var(--color-lime)" : "var(--color-ash)" }}>
              {reminders.queued} queued
            </span>
            <span style={{ color: "var(--color-ash)" }}>·</span>
            <span style={{ color: "var(--color-violet-brand)" }}>{reminders.sent} sent</span>
          </span>

          <ReadingModeToggle compact />
          <button
            type="button"
            onClick={onOpenChat}
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-transparent bg-transparent px-3 py-1.5 text-xs font-black transition-colors hover:border-current"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-flush)",
            }}
            aria-label="Chat with pocket, the booking bot"
            title="Chat with pocket, the booking bot"
          >
            💬 chat
          </button>
          <a
            href={`tel:${CAL_SMS.replace("sms:", "")}`}
            className="hidden text-sm underline-offset-4 hover:underline md:block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            425-918-2029
          </a>
        </div>
      </div>
    </header>
  );
}

/* ── hero ──────────────────────────────────────────────── */
function Hero({ onOpenChat }: { onOpenChat: () => void }) {
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

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href={`${CAL_BASE}buzz-cut`}
          target="_blank"
          rel="noreferrer"
          className="inline-block border-2 px-10 py-4 text-lg font-black transition-transform hover:-translate-y-0.5"
          style={{
            background: "var(--color-lime)",
            borderColor: "var(--color-lime)",
            boxShadow: "4px 4px 0 var(--color-violet-brand)",
            color: "var(--color-void)",
          }}
        >
          BOOK THE CHAIR →
        </a>
        <button
          type="button"
          onClick={onOpenChat}
          className="inline-block border-2 px-8 py-4 text-base font-black transition-transform hover:-translate-y-0.5"
          style={{
            background: "var(--color-flush)",
            borderColor: "var(--color-flush)",
            boxShadow: "4px 4px 0 var(--color-violet-brand)",
            color: "#fff",
          }}
        >
          💬 or chat with pocket
        </button>
      </div>

      <div
        className="mt-6 flex flex-wrap items-center gap-4 text-sm"
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

/* ── services ledger with cal.com links ───────────────── */
function Services({ onServiceBooked }: { onServiceBooked: () => void }) {
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
        {SERVICES.map((s, i) => (
          <div key={s.slug} className="group border-b-2" style={{ borderColor: "var(--color-void)" }}>
            <div className="flex w-full items-baseline gap-4 py-5 text-left sm:gap-8">
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)", fontSize: 13 }}>
                0{i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-2xl font-black tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                  {s.name}
                </span>
                <span className="mt-1 block text-sm" style={{ color: "var(--color-mist)" }}>
                  {s.blurb}
                </span>
              </span>
              <span className="shrink-0 text-xs sm:text-sm" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
                {s.duration}
              </span>
              <a
                href={`${CAL_BASE}${s.slug}`}
                target="_blank"
                rel="noreferrer"
                onClick={onServiceBooked}
                className="inline-block border-2 px-5 py-2 text-sm font-black transition-transform hover:-translate-y-0.5"
                style={{
                  background: s.accent,
                  borderColor: "var(--color-void)",
                  boxShadow: "3px 3px 0 var(--color-void)",
                  color: "var(--color-void)",
                }}
              >
                BOOK →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── inline Cal.com embed ─────────────────────────────── */
export function CalInline() {
  return (
    <section
      id="calendar"
      className="mx-auto max-w-6xl px-5 py-16 sm:py-24"
      style={{ background: "var(--color-card-2)" }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.15em",
          color: "var(--color-ash)",
        }}
      >
        04 · THE CALENDAR (LIVE)
      </p>
      <h2 className="mt-2 text-4xl font-black leading-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
        pick a slot
      </h2>
      <p className="mt-4 max-w-xl text-lg leading-relaxed" style={{ color: "var(--color-mist)" }}>
        the real cal.com calendar, embedded. see live availability, pick your time, get instant
        confirmation. house calls only, seattle area.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border-2" style={{ borderColor: "var(--color-void)" }}>
        <iframe
          src={CAL_EMBED}
          title="Pocket Studio calendar — pick a house-call slot"
          className="h-[720px] w-full"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>

      <p className="mt-4 text-sm" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
        prefer the full calendar page?{" "}
        <a
          href={CAL_BASE}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
          style={{ color: "var(--color-lime)" }}
        >
          open cal.com →
        </a>{" "}
        · or text{" "}
        <a href={`tel:+14259182029`} className="underline underline-offset-4" style={{ color: "var(--color-lime)" }}>
          425-918-2029
        </a>
        .
      </p>
    </section>
  );
}

/* ── live reminders strip ─────────────────────────────── */
export function RemindersStrip({
  reminders,
  onProcess,
}: {
  reminders: { queued: number; sent: number };
  onProcess: () => void;
}) {
  return (
    <section
      id="reminders"
      className="mx-auto max-w-6xl px-5 py-12"
      style={{ borderTop: "2px solid var(--color-void)" }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-sm" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
          <span>🔔 reminders pipeline</span>
          <span style={{ color: "var(--color-lime)" }}>{reminders.queued} queued</span>
          <span style={{ color: "var(--color-violet-brand)" }}>{reminders.sent} sent</span>
          <span className="text-xs">(confirmation + 24h + 2h + follow-up auto-queued on booking)</span>
        </div>
        <button
          type="button"
          onClick={onProcess}
          className="inline-block border-2 px-5 py-2 text-sm font-black transition-transform hover:-translate-y-0.5"
          style={{
            background: "var(--color-void)",
            borderColor: "var(--color-void)",
            color: "var(--color-bone)",
            boxShadow: "3px 3px 0 rgba(0,0,0,.35)",
          }}
        >
          process due now
        </button>
      </div>
    </section>
  );
}

/* ── emergency / email capture strip ─────────────────── */
export function EmergencyStrip({ onBooked }: { onBooked: () => void }) {
  return (
    <section
      className="mx-auto max-w-6xl border-y-2 px-5 py-12"
      style={{ borderColor: "var(--color-void)" }}
    >
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="max-w-xl text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
          need it sooner than the calendar allows, or want me to text you when a slot opens? send a
          line and i'll get back fast.
        </p>
        <button
          type="button"
          data-emergency
          onClick={() => {
            /* EmergencyModal (loaded in __root) opens on [data-emergency] clicks */
            window.dispatchEvent(new CustomEvent("mybesti:waiting"));
          }}
          className="inline-block border-2 px-6 py-3 text-base font-black transition-transform hover:-translate-y-0.5"
          style={{
            background: "var(--color-flush)",
            borderColor: "var(--color-flush)",
            boxShadow: "4px 4px 0 var(--color-violet-brand)",
            color: "#fff",
          }}
        >
          🚨 emergency request
        </button>
      </div>
      {/* On booking from the chat/emergency flow, celebrate via the pet. */}
      <script
        dangerSetInnerHTML={{
          __html: `
            if (window.location.search.includes('booked=1')) {
              window.dispatchEvent(new CustomEvent('mybesti:celebrate'));
            }
          `,
        }}
      />
    </section>
  );
}

/* ── footer ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t-2 px-5 py-10" style={{ background: "var(--color-void)", borderColor: "var(--color-void)" }}>
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-base" style={{ color: "var(--color-bone)" }}>
          hit me up:{" "}
          <a href="tel:4259182029" className="underline underline-offset-4" style={{ color: "var(--color-lime)" }}>
            425-918-2029
          </a>{" "}
          ·{" "}
          <a href="mailto:mykeypocket@icloud.com" className="underline underline-offset-4" style={{ color: "var(--color-lime)" }}>
            mykeypocket@icloud.com
          </a>{" "}
          · popl card
        </p>
        <p className="mt-3 text-xs" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>
          the small print: pronouns: they/them / location: seattle, wa / hours: thu 11am–6pm, fri
          12pm–5pm, sat–sun 12pm–8pm
        </p>
        <p className="mt-5 -rotate-2 text-2xl" style={{ fontFamily: "var(--font-hand)", color: "var(--color-lime)" }}>
          built by one brain, on purpose ~
        </p>
      </div>
    </footer>
  );
}
