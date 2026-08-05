import { useEffect, useState } from "react";

declare global {
  interface Window {
    PSReadingMode?: { isOn(): boolean; set(on: boolean): void; toggle(): void };
  }
}

/**
 * Reading-mode (dyslexia-friendly) toggle. Works with /reading-mode.js,
 * which owns the state (default OFF, persisted in localStorage) and also
 * handles clicks via the [data-reading-toggle] attribute — so this button
 * just renders state and lets the global handler do the work.
 * The first render always uses the default-off state so SSR and hydration
 * agree; the effect then synchronizes any persisted preference.
 */
export function ReadingModeToggle({ compact = false }: { compact?: boolean }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const sync = () => setOn(window.PSReadingMode ? window.PSReadingMode.isOn() : false);
    sync();
    const handler = () => sync();
    document.addEventListener("ps-reading-mode-change", handler);
    return () => document.removeEventListener("ps-reading-mode-change", handler);
  }, []);

  return (
    <button
      type="button"
      data-reading-toggle
      data-reading-react
      aria-pressed={on}
      aria-label={(on ? "Turn off" : "Turn on") + " dyslexia-friendly reading mode"}
      title="Dyslexia-friendly reading mode (off by default)"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: compact ? 6 : 8,
        padding: compact ? "6px 10px" : "8px 14px",
        borderRadius: "var(--radius-pill, 100px)",
        border: "1px solid var(--border-subtle, rgba(244,239,230,.12))",
        background: "var(--surface, #16161d)",
        color: "var(--fg2, #adb0bd)",
        fontFamily: "var(--font-mono, ui-monospace, monospace)",
        fontSize: compact ? 10 : 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "background var(--dur-fast,.12s), color var(--dur-fast,.12s)",
      }}
    >
      <span
        aria-hidden
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: on ? "var(--cyan, #33cbd2)" : "var(--ink-600, #2a2a36)",
          boxShadow: on ? "0 0 6px var(--cyan, #33cbd2)" : "none",
        }}
      />
      <span data-reading-label>{on ? "Reading mode: on" : "Reading mode: off"}</span>
    </button>
  );
}
