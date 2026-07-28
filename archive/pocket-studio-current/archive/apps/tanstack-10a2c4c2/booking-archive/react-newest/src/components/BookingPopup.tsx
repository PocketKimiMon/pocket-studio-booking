import { useEffect, useState } from "react";
import { CAL_BASE } from "../lib/services";

type Pick = {
  slug: string;
  name: string;
  time: string;
  minDays: number;
  leadLabel: string;
};

const CUTS: Pick[] = [
  {
    slug: "buzz-cut",
    name: "Buzz",
    time: "30 min",
    minDays: 2,
    leadLabel: "books 2 days out minimum",
  },
  {
    slug: "short-cut",
    name: "Short",
    time: "45 min",
    minDays: 2,
    leadLabel: "books 2 days out minimum",
  },
  {
    slug: "long-cut",
    name: "Long",
    time: "60 min",
    minDays: 2,
    leadLabel: "books 2 days out minimum",
  },
];

const COLORS: Pick[] = [
  {
    slug: "hair-consultation",
    name: "New-Client Color Consult",
    time: "45 min consult",
    minDays: 3,
    leadLabel: "books 3 days out minimum",
  },
  {
    slug: "existing-client-color-appointment",
    name: "Existing-Client Color",
    time: "3 hr, up to 5 for complex",
    minDays: 7,
    leadLabel: "books 1 week out minimum",
  },
];

const ALL_SLUGS = [...CUTS, ...COLORS].map((p) => p.slug);

type Step = "start" | "cut" | "color" | "result";

function earliestDate(minDays: number) {
  const d = new Date(Date.now() + minDays * 86400000);
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

export function BookingPopup() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("start");
  const [pick, setPick] = useState<Pick | null>(null);
  const [booked, setBooked] = useState<string[]>([]);

  const allBooked = booked.length >= ALL_SLUGS.length;

  useEffect(() => {
    if (!open) return;
    window.dispatchEvent(new CustomEvent(step === "result" ? "mybesti:review" : "mybesti:waiting"));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, step]);

  const choose = (p: Pick) => {
    setPick(p);
    setStep("result");
  };

  const go = () => {
    if (!pick) return;
    window.dispatchEvent(new CustomEvent("mybesti:celebrate"));
    setBooked((b) => (b.includes(pick.slug) ? b : [...b, pick.slug]));
    window.open(`${CAL_BASE}${pick.slug}`, "_blank", "noopener");
  };

  const reset = () => {
    setStep("start");
    setPick(null);
  };

  const choiceBtn = (label: string, sub: string, onClick: () => void, accent: string) => (
    <button
      key={label}
      type="button"
      onClick={onClick}
      className="w-full rounded-xl border-2 p-3.5 text-left transition-transform hover:-translate-y-0.5"
      style={{
        borderColor: "var(--color-void)",
        background: "#fff",
        boxShadow: "3px 3px 0 var(--color-void)",
      }}
    >
      <span
        className="block text-base font-black"
        style={{ fontFamily: "var(--font-display)", color: accent }}
      >
        {label}
      </span>
      <span className="mt-0.5 block text-xs" style={{ color: "var(--color-mist)" }}>
        {sub}
      </span>
    </button>
  );

  return (
    <>
      {/* corner button */}
      <button
        type="button"
        onClick={() => {
          setOpen((o) => !o);
          reset();
        }}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[70] border-2 px-6 py-3 text-base font-black transition-transform hover:-translate-y-1"
        style={{
          background: "var(--color-lime)",
          borderColor: "var(--color-void)",
          boxShadow: "4px 4px 0 var(--color-void)",
          fontFamily: "var(--font-display)",
        }}
      >
        {open ? "× CLOSE" : "BOOK"}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Book with MyKey"
          className="fixed bottom-24 right-5 z-[70] w-[calc(100vw-2.5rem)] max-w-sm rounded-2xl border-2 p-5"
          style={{
            background: "var(--color-bone)",
            borderColor: "var(--color-void)",
            boxShadow: "8px 8px 0 var(--color-violet-brand)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "var(--color-ash)",
            }}
          >
            BOOK WITH MYKEY
          </p>

          {allBooked ? (
            <div className="mt-3">
              <h3 className="text-2xl font-black" style={{ fontFamily: "var(--font-display)" }}>
                that's the whole menu
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-mist)" }}>
                you've lined up everything i offer. want something custom? text{" "}
                <a
                  href="tel:425-918-2029"
                  className="underline underline-offset-2"
                  style={{ color: "var(--color-flush)" }}
                >
                  425-918-2029
                </a>{" "}
                and we'll figure it out.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-4 w-full border-2 px-4 py-2.5 text-sm font-black"
                style={{
                  background: "var(--color-lime)",
                  borderColor: "var(--color-void)",
                  boxShadow: "3px 3px 0 var(--color-void)",
                }}
              >
                CLOSE
              </button>
            </div>
          ) : step === "start" ? (
            <div className="mt-3 space-y-2.5">
              <h3 className="text-xl font-black" style={{ fontFamily: "var(--font-display)" }}>
                what are we doing?
              </h3>
              {choiceBtn(
                "a cut",
                "buzz, short, or long — clippers or scissors",
                () => setStep("cut"),
                "var(--color-void)",
              )}
              {choiceBtn(
                "color",
                "roots, refresh, or a full transformation",
                () => setStep("color"),
                "var(--color-violet-brand)",
              )}
            </div>
          ) : step === "cut" ? (
            <div className="mt-3 space-y-2.5">
              <Back onClick={reset} />
              <h3 className="text-xl font-black" style={{ fontFamily: "var(--font-display)" }}>
                which cut?
              </h3>
              {CUTS.map((c) =>
                choiceBtn(
                  c.name,
                  `${c.time} · ${c.leadLabel}`,
                  () => choose(c),
                  "var(--color-void)",
                ),
              )}
            </div>
          ) : step === "color" ? (
            <div className="mt-3 space-y-2.5">
              <Back onClick={reset} />
              <h3 className="text-xl font-black" style={{ fontFamily: "var(--font-display)" }}>
                first time coloring with me?
              </h3>
              {choiceBtn(
                "yes, i'm new",
                "we plan the lift, tone & maintenance first · 45 min consult · books 3 days out",
                () => choose(COLORS[0]),
                "var(--color-violet-brand)",
              )}
              {choiceBtn(
                "nope, coming back",
                "we already know the vibe · 3 hr, up to 5 for complex · books 1 week out",
                () => choose(COLORS[1]),
                "var(--color-violet-brand)",
              )}
            </div>
          ) : pick ? (
            <div className="mt-3">
              <Back onClick={reset} />
              <h3
                className="mt-2 text-xl font-black leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                nice, you're set up for {pick.name}
              </h3>
              <p
                className="mt-1.5 text-sm"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
              >
                {pick.leadLabel} · earliest: {earliestDate(pick.minDays)}
              </p>
              <button
                type="button"
                onClick={go}
                className="mt-4 w-full border-2 px-4 py-3 text-sm font-black transition-transform hover:-translate-y-0.5"
                style={{
                  background: "var(--color-lime)",
                  borderColor: "var(--color-void)",
                  boxShadow: "3px 3px 0 var(--color-void)",
                }}
              >
                BOOK MY APPOINTMENT →
              </button>
              <p className="mt-3 text-xs leading-relaxed" style={{ color: "var(--color-ash)" }}>
                opens the live calendar to pick a day &amp; time. by booking you accept the{" "}
                <a href="/classic/terms.html" className="underline underline-offset-2">
                  terms
                </a>{" "}
                &amp;{" "}
                <a href="/classic/privacy.html" className="underline underline-offset-2">
                  privacy policy
                </a>
                . text{" "}
                <a href="tel:425-918-2029" className="underline underline-offset-2">
                  425-918-2029
                </a>{" "}
                if nothing works.
              </p>

              {/* upsell */}
              <div className="mt-4 border-t-2 pt-3" style={{ borderColor: "rgba(18,14,23,.15)" }}>
                <p className="text-sm font-black" style={{ fontFamily: "var(--font-display)" }}>
                  now that you're sorted…
                </p>
                <p className="mt-0.5 text-xs" style={{ color: "var(--color-mist)" }}>
                  want to add anything else while you're here?
                </p>
                <div className="mt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={reset}
                    className="flex-1 border-2 px-3 py-2 text-xs font-black"
                    style={{
                      background: "#fff",
                      borderColor: "var(--color-void)",
                      boxShadow: "2px 2px 0 var(--color-void)",
                    }}
                  >
                    ADD ANOTHER
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex-1 px-3 py-2 text-xs underline underline-offset-2"
                    style={{ color: "var(--color-mist)" }}
                  >
                    i'm good, thanks — close
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

function Back({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-xs underline underline-offset-2"
      style={{ fontFamily: "var(--font-mono)", color: "var(--color-ash)" }}
    >
      ← back
    </button>
  );
}
