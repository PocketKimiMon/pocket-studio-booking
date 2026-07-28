import { useEffect, useState } from "react";

const EMERGENCY_ENDPOINT = "https://formsubmit.co/ajax/itspocketmykey@gmail.com";

type Phase = "form" | "sending" | "success" | "error";

const inputStyle: React.CSSProperties = {
  background: "var(--color-bone)",
  borderColor: "var(--color-void)",
  color: "var(--color-void)",
};

/**
 * Emergency request modal. Any element with [data-emergency] opens it.
 */
export function EmergencyModal() {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("form");

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("[data-emergency]")) {
        e.preventDefault();
        setPhase("form");
        setOpen(true);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    window.dispatchEvent(new CustomEvent("mybesti:waiting"));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPhase("sending");
    const f = new FormData(e.currentTarget);
    try {
      const res = await fetch(EMERGENCY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "🚨 EMERGENCY booking request — Pocket Studio",
          _template: "table",
          name: f.get("name"),
          contact: f.get("contact"),
          what: f.get("what"),
          when: f.get("when"),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setPhase("success");
      window.dispatchEvent(new CustomEvent("mybesti:celebrate"));
    } catch {
      setPhase("error");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Emergency request"
      className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center"
      style={{ background: "rgba(18,14,23,.6)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border-2 p-6 sm:p-8"
        style={{
          background: "var(--color-bone)",
          borderColor: "var(--color-void)",
          boxShadow: "10px 10px 0 var(--color-flush)",
        }}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border-2 text-lg font-black transition-transform hover:rotate-90"
          style={{ borderColor: "var(--color-void)", background: "#fff" }}
        >
          ×
        </button>

        {phase === "success" ? (
          <div className="pt-2">
            <h2 className="text-3xl font-black" style={{ fontFamily: "var(--font-display)" }}>
              got it, request sent. 🎉
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--color-mist)" }}>
              i'll get back to you fast. if it's truly urgent, also text{" "}
              <a
                href="tel:425-918-2029"
                className="underline underline-offset-4"
                style={{ color: "var(--color-flush)" }}
              >
                425-918-2029
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 border-2 px-6 py-2.5 text-sm font-black transition-transform hover:-translate-y-0.5"
              style={{
                background: "var(--color-lime)",
                borderColor: "var(--color-void)",
                boxShadow: "3px 3px 0 var(--color-void)",
              }}
            >
              CLOSE
            </button>
          </div>
        ) : (
          <>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.15em",
                color: "var(--color-flush)",
              }}
            >
              EMERGENCY REQUEST
            </p>
            <h2
              className="mt-2 text-3xl font-black leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              🚨 need it sooner than the calendar allows?
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
              tomorrow, this weekend, whenever. tell me and i'll try to make it work.
            </p>

            {phase === "error" && (
              <p
                className="mt-4 rounded-lg border-2 p-3 text-sm"
                style={{
                  background: "rgba(255,90,95,.1)",
                  borderColor: "var(--color-flush)",
                  color: "var(--color-flush)",
                }}
              >
                hmm, that didn't go through. text{" "}
                <a href="tel:425-918-2029" className="font-bold underline underline-offset-2">
                  425-918-2029
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:itspocketmykey@gmail.com"
                  className="font-bold underline underline-offset-2"
                >
                  itspocketmykey@gmail.com
                </a>{" "}
                instead.
              </p>
            )}

            <form onSubmit={submit} className="mt-5 space-y-3">
              <label className="block text-sm font-bold">
                your name
                <input
                  required
                  name="name"
                  placeholder="who am i talking to?"
                  className="mt-1 w-full rounded-lg border-2 px-3 py-2 text-sm font-normal"
                  style={inputStyle}
                />
              </label>
              <label className="block text-sm font-bold">
                phone or email
                <input
                  required
                  name="contact"
                  placeholder="fastest way to reach you"
                  className="mt-1 w-full rounded-lg border-2 px-3 py-2 text-sm font-normal"
                  style={inputStyle}
                />
              </label>
              <label className="block text-sm font-bold">
                what do you need?
                <input
                  required
                  name="what"
                  placeholder="cut? color? event hair? the whole situation?"
                  className="mt-1 w-full rounded-lg border-2 px-3 py-2 text-sm font-normal"
                  style={inputStyle}
                />
              </label>
              <label className="block text-sm font-bold">
                when do you need it?
                <input
                  required
                  name="when"
                  placeholder="e.g. tomorrow afternoon, before saturday…"
                  className="mt-1 w-full rounded-lg border-2 px-3 py-2 text-sm font-normal"
                  style={inputStyle}
                />
              </label>
              <button
                type="submit"
                disabled={phase === "sending"}
                className="w-full border-2 px-6 py-3 text-sm font-black transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                style={{
                  background: "var(--color-flush)",
                  color: "#fff",
                  borderColor: "var(--color-void)",
                  boxShadow: "3px 3px 0 var(--color-void)",
                }}
              >
                {phase === "sending" ? "SENDING…" : "SEND EMERGENCY REQUEST →"}
              </button>
              <p className="text-xs" style={{ color: "var(--color-ash)" }}>
                goes straight to my inbox. truly urgent? text{" "}
                <a href="tel:425-918-2029" className="underline underline-offset-2">
                  425-918-2029
                </a>
                .
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
