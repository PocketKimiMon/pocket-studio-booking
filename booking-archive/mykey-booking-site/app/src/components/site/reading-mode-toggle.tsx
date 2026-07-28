// ReadingModeToggle: SSR-safe React port of the PocketStudio design system's
// ReadingModeToggle.jsx (same localStorage key 'ps-reading-mode', same
// data-reading-mode attribute, ON by default). localStorage is only touched
// inside effects and the click handler, never during render.
import { useEffect, useState } from "react";
import { IconBookOpenText } from "./icons";

const KEY = "ps-reading-mode";
const VALUE = "dyslexic";
const OFF = "off";
const ATTR = "data-reading-mode";

export function ReadingModeToggle({ compact = false }: { compact?: boolean }) {
  // SSR default matches the static html attribute: ON unless the user opted out.
  const [on, setOn] = useState(true);

  useEffect(() => {
    try {
      setOn(localStorage.getItem(KEY) !== OFF);
    } catch {
      // no storage available: keep the default ON
    }
    const onStorage = (e: StorageEvent) => {
      if (e.key !== KEY) return;
      try {
        setOn(localStorage.getItem(KEY) !== OFF);
      } catch {
        /* ignore */
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const set = (next: boolean) => {
    setOn(next);
    const root = document.documentElement;
    if (next) root.setAttribute(ATTR, VALUE);
    else root.removeAttribute(ATTR);
    try {
      localStorage.setItem(KEY, next ? VALUE : OFF);
    } catch {
      /* ignore */
    }
    document.dispatchEvent(new CustomEvent("ps-reading-mode-change", { detail: { on: next } }));
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={(on ? "Turn off" : "Turn on") + " dyslexia-friendly reading mode"}
      onClick={() => set(!on)}
      className={"mk-rmt" + (on ? " mk-on" : "")}
    >
      <span className="mk-rmt-icon" aria-hidden="true">
        <IconBookOpenText size={18} />
      </span>
      {!compact && <span className="mk-rmt-label">Reading mode</span>}
      <span className="mk-rmt-track" aria-hidden="true">
        <span className="mk-rmt-thumb" />
      </span>
    </button>
  );
}
