import { useEffect, useRef, useState } from "react";
import { SERVICES, CAL_BASE } from "../lib/services";

type Msg = { role: "user" | "assistant"; content: string };

const OPENING: Msg = {
  role: "assistant",
  content:
    "hey! i'm pocket ✂ mykey's booking bot. tell me what you want done with your hair and i'll get you to the right slot.",
};

const MAX_RETRIES = 2;

function isBookingLink(text: string) {
  return text.includes("cal.com");
}

export function BookingPopup() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([OPENING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // The pet dispatches this on click — it's the site's chatbot entry point.
  useEffect(() => {
    const openFn = () => setOpen(true);
    window.addEventListener("mybesti:open-booking", openFn);
    return () => window.removeEventListener("mybesti:open-booking", openFn);
  }, []);

  useEffect(() => {
    if (!open) return;
    window.dispatchEvent(new CustomEvent(busy ? "mybesti:waiting" : "mybesti:review"));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, busy]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, busy]);

  async function callChat(next: Msg[], attempt = 0): Promise<{ reply?: string; error?: string }> {
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
        signal: AbortSignal.timeout(30_000),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      if (!res.ok || (!data.reply && attempt < MAX_RETRIES)) {
        if (attempt < MAX_RETRIES) return callChat(next, attempt + 1);
      }
      return data;
    } catch (err) {
      if (attempt < MAX_RETRIES) return callChat(next, attempt + 1);
      return { error: err instanceof Error ? err.message : "network error" };
    }
  }

  async function send(text?: string) {
    const content = (text ?? input).trim();
    if (!content || busy) return;
    const next = [...msgs, { role: "user" as const, content }];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const data = await callChat(next);
      const replyText =
        data.reply ?? `hmm, my brain hiccuped (${data.error ?? "no reply"}). try again — or text mykey directly: 425-918-2029.`;
      setMsgs([...next, { role: "assistant", content: replyText }]);
      if (data.reply && isBookingLink(data.reply)) {
        window.dispatchEvent(new CustomEvent("mybesti:celebrate"));
      }
    } catch {
      setMsgs([
        ...next,
        { role: "assistant", content: "connection died on me. try again, or text mykey: 425-918-2029." },
      ]);
    } finally {
      setBusy(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      style={{ background: "rgba(11,11,15,.72)" }}
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div
        role="dialog"
        aria-label="chat with pocket, the booking bot"
        aria-modal="true"
        className="flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border"
        style={{
          background: "var(--color-void, #16161d)",
          borderColor: "rgba(244,239,230,.12)",
          boxShadow: "10px 10px 0 var(--color-flush, #c53b38)",
          maxHeight: "80vh",
        }}
      >
        <div className="flex items-center justify-between border-b px-5 py-3" style={{ borderColor: "rgba(244,239,230,.1)" }}>
          <p className="text-sm" style={{ fontFamily: "var(--font-mono)", color: "var(--color-lime)" }}>
            pocket · booking bot
          </p>
          <button
            onClick={() => setOpen(false)}
            aria-label="close chat"
            className="text-lg leading-none"
            style={{ color: "var(--color-bone)" }}
          >
            ×
          </button>
        </div>
        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4" style={{ minHeight: 240 }}>
          {msgs.map((m, i) => (
            <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
              <span
                className="inline-block rounded-xl px-3 py-2 text-sm leading-relaxed"
                style={
                  m.role === "user"
                    ? { background: "var(--color-flush, #c53b38)", color: "var(--color-bone, #f4efe6)" }
                    : { background: "rgba(244,239,230,.08)", color: "var(--color-bone, #f4efe6)" }
                }
              >
                {m.content}
              </span>
            </div>
          ))}
          {busy && (
            <p className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}>
              pocket is typing…
            </p>
          )}
        </div>
        <div className="border-t px-4 py-3" style={{ borderColor: "rgba(244,239,230,.1)" }}>
          <div className="mb-2 flex flex-wrap gap-2">
            {SERVICES.slice(0, 3).map((s) => (
              <button
                key={s.slug}
                onClick={() => send(`tell me about the ${s.name.toLowerCase()}`)}
                disabled={busy}
                className="rounded-full px-3 py-1 text-xs"
                style={{ background: "rgba(244,239,230,.08)", color: "var(--color-mist)", fontFamily: "var(--font-mono)", opacity: busy ? 0.5 : 1 }}
              >
                {s.name}
              </button>
            ))}
            <a
              href={`${CAL_BASE}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => window.dispatchEvent(new CustomEvent("mybesti:celebrate"))}
              className="rounded-full px-3 py-1 text-xs"
              style={{ background: "var(--color-lime)", color: "#0b0b0f", fontFamily: "var(--font-mono)" }}
            >
              full calendar →
            </a>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex gap-2"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="say what your hair needs…"
              aria-label="message the booking bot"
              disabled={busy}
              className="flex-1 rounded-lg border bg-transparent px-3 py-2 text-sm"
              style={{ borderColor: "rgba(244,239,230,.15)", color: "var(--color-bone)", opacity: busy ? 0.6 : 1 }}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="rounded-lg px-4 py-2 text-sm font-bold"
              style={{ background: "var(--color-lime)", color: "#0b0b0f", opacity: busy || !input.trim() ? 0.5 : 1 }}
            >
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
