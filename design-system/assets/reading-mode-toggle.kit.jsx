/* PocketStudio — <ReadingModeToggle /> (React, Babel)
   A branded, accessible switch for the optional dyslexia reading mode.
   Standalone: manages localStorage + the html[data-reading-mode] attribute
   itself, and stays compatible with assets/reading-mode.js (same key/attr).

   Props:
     compact   — icon-only (still has aria-label)
     className — extra classes
   Exposes window.ReadingModeToggle for cross-file (Babel) use.
*/
(function () {
  const KEY = 'ps-reading-mode', VALUE = 'dyslexic', OFF = 'off', ATTR = 'data-reading-mode';
  // DEFAULT ON: no stored value means dyslexic mode is active.
  const read = () => { try { return localStorage.getItem(KEY) !== OFF; } catch { return true; } };
  const persist = (on) => { try { localStorage.setItem(KEY, on ? VALUE : OFF); } catch {} };
  const apply = (on) => {
    const r = document.documentElement;
    on ? r.setAttribute(ATTR, VALUE) : r.removeAttribute(ATTR);
  };

  function ReadingModeToggle({ compact = false, className = '' }) {
    const [on, setOn] = React.useState(read());
    React.useEffect(() => { apply(on); }, []); // sync on mount
    const set = (next) => {
      setOn(next); apply(next); persist(next);
      document.dispatchEvent(new CustomEvent('ps-reading-mode-change', { detail: { on: next } }));
    };
    return (
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={(on ? 'Turn off' : 'Turn on') + ' dyslexia-friendly reading mode'}
        onClick={() => set(!on)}
        className={'rmt ' + (on ? 'rmt--on ' : '') + className}
      >
        <span className="rmt__icon" aria-hidden="true">
          {/* Lucide "book-open-text" */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 7v14"/><path d="M16 12h2"/><path d="M16 8h2"/>
            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
            <path d="M6 12h2"/><path d="M6 8h2"/>
          </svg>
        </span>
        {!compact && <span className="rmt__label">Reading mode</span>}
        <span className="rmt__track" aria-hidden="true"><span className="rmt__thumb"/></span>
        <style>{`
          .rmt{display:inline-flex;align-items:center;gap:10px;min-height:44px;
            padding:8px 12px;border-radius:var(--radius-pill);cursor:pointer;
            background:var(--surface);color:var(--fg2);
            border:1px solid var(--border-subtle);font-family:var(--font-sans);
            font-weight:600;font-size:14px;line-height:1;
            transition:transform var(--dur-fast) var(--ease-spring),
              background var(--dur-base),color var(--dur-base),box-shadow var(--dur-base);}
          .rmt:hover{background:var(--surface-hover);color:var(--fg1);}
          .rmt:active{transform:scale(.97);}
          .rmt__icon{display:inline-flex;color:var(--fg3);transition:color var(--dur-base);}
          .rmt--on{color:var(--fg1);box-shadow:var(--glow-cyan);border-color:transparent;}
          .rmt--on .rmt__icon{color:var(--cyan-bright);}
          .rmt__track{position:relative;width:38px;height:22px;border-radius:999px;
            background:var(--ink-600);transition:background var(--dur-base);flex:none;}
          .theme-paper .rmt__track{background:var(--paper-300);}
          .rmt--on .rmt__track{background:var(--cyan);}
          .rmt__thumb{position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;
            background:var(--fg1);box-shadow:var(--shadow-sm);
            transition:left var(--dur-base) var(--ease-spring),background var(--dur-base);}
          .rmt--on .rmt__thumb{left:19px;background:var(--on-neon);}
        `}</style>
      </button>
    );
  }
  window.ReadingModeToggle = ReadingModeToggle;
})();
