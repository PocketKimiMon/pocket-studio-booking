/* @ds-bundle: {"format":4,"namespace":"PocketStudioDesignSystem_e65546","components":[{"name":"ReadingModeToggle","sourcePath":"assets/ReadingModeToggle.jsx"}],"sourceHashes":{"assets/ReadingModeToggle.jsx":"f0c4b8429061","assets/icons.jsx":"56bd61ea7771","assets/reading-mode-toggle.kit.jsx":"3172fdbe615f","assets/reading-mode.js":"f7e9e6838bcf","ui_kits/agent-dashboard/AppShell.jsx":"fc101bfa1e94","ui_kits/agent-dashboard/Parts.jsx":"dd182c730e5f","ui_kits/agent-dashboard/Screens.jsx":"6e63915cd528","ui_kits/marketing/Footer.jsx":"7e4c85f5c3ad","ui_kits/marketing/Header.jsx":"4e69afabc122","ui_kits/marketing/Hero.jsx":"b7c861b99b01","ui_kits/marketing/Manifesto.jsx":"2e60f696cc3b","ui_kits/marketing/Products.jsx":"71670c37d3b6","ui_kits/monster-survivor/Arena.jsx":"380036da8a70","ui_kits/monster-survivor/HUD.jsx":"f0318bde4e5b","ui_kits/monster-survivor/Menus.jsx":"c985b96b5fbd","ui_kits/rainbow-rest-stop/Episodes.jsx":"a7984b56de6d","ui_kits/rainbow-rest-stop/Player.jsx":"15a7a05bfe23","ui_kits/rainbow-rest-stop/RRHeader.jsx":"b42da559a518"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PocketStudioDesignSystem_e65546 = window.PocketStudioDesignSystem_e65546 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/ReadingModeToggle.jsx
try { (() => {
/* PocketStudio — ReadingModeToggle (design-system component)
   A branded, accessible switch for the dyslexia reading mode (ON by default,
   user-switchable, system-wide). Self-contained: manages localStorage + the
   html[data-reading-mode] attribute, and stays compatible with
   assets/reading-mode.js (same key/attribute). Uses the global `React`
   provided by the page/bundle host. */

const RMT_KEY = 'ps-reading-mode',
  RMT_VALUE = 'dyslexic',
  RMT_OFF = 'off',
  RMT_ATTR = 'data-reading-mode';
// DEFAULT ON: no stored value means dyslexic mode is active.
const rmtRead = () => {
  try {
    return localStorage.getItem(RMT_KEY) !== RMT_OFF;
  } catch (e) {
    return true;
  }
};
const rmtPersist = on => {
  try {
    localStorage.setItem(RMT_KEY, on ? RMT_VALUE : RMT_OFF);
  } catch (e) {}
};
const rmtApply = on => {
  const r = document.documentElement;
  on ? r.setAttribute(RMT_ATTR, RMT_VALUE) : r.removeAttribute(RMT_ATTR);
};
function ReadingModeToggle({
  compact = false,
  className = ''
}) {
  const [on, setOn] = React.useState(rmtRead());
  React.useEffect(() => {
    rmtApply(on);
  }, []); // sync on mount
  const set = next => {
    setOn(next);
    rmtApply(next);
    rmtPersist(next);
    document.dispatchEvent(new CustomEvent('ps-reading-mode-change', {
      detail: {
        on: next
      }
    }));
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    "aria-label": (on ? 'Turn off' : 'Turn on') + ' dyslexia-friendly reading mode',
    onClick: () => set(!on),
    className: 'rmt ' + (on ? 'rmt--on ' : '') + className
  }, /*#__PURE__*/React.createElement("span", {
    className: "rmt__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 7v14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 12h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 8h2"
  }))), !compact && /*#__PURE__*/React.createElement("span", {
    className: "rmt__label"
  }, "Reading mode"), /*#__PURE__*/React.createElement("span", {
    className: "rmt__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rmt__thumb"
  })), /*#__PURE__*/React.createElement("style", null, `
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
      `));
}
Object.assign(__ds_scope, { ReadingModeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/ReadingModeToggle.jsx", error: String((e && e.message) || e) }); }

// assets/icons.jsx
try { (() => {
/* Shared icon set — Lucide path data (shadcn/ui default), stroke style.
   <Icon name="..." size={20} />  ·  inherits currentColor.
   Used by every UI kit. Loaded via <script type="text/babel" src=".../assets/icons.jsx">. */
(function () {
  const P = {
    menu: 'M4 6h16M4 12h16M4 18h16',
    x: 'M18 6 6 18M6 6l12 12',
    arrowRight: 'M5 12h14M12 5l7 7-7 7',
    arrowLeft: 'M19 12H5M12 19l-7-7 7-7',
    arrowUpRight: 'M7 7h10v10M7 17 17 7',
    chevronRight: 'M9 18l6-6-6-6',
    chevronDown: 'M6 9l6 6 6-6',
    check: 'M20 6 9 17l-5-5',
    plus: 'M12 5v14M5 12h14',
    search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',
    bell: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0',
    settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
    zap: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
    mic: 'M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v3',
    grid: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
    home: 'M3 9.5 12 3l9 6.5M5 10v10h14V10',
    gamepad: 'M6 12h4m-2-2v4M15 11h.01M18 13h.01M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.585-.685-7.258A4 4 0 0 0 17.32 5z',
    heart: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z',
    terminal: 'M4 17l6-6-6-6M12 19h8',
    rss: 'M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16M5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
    play: 'M6 4l14 8-14 8z',
    pause: 'M6 4h4v16H6zM14 4h4v16h-4z',
    sparkle: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z',
    shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    activity: 'M22 12h-4l-3 9L9 3l-3 9H2',
    clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
    user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 4-6 8-6s8 2 8 6',
    chart: 'M3 3v18h18M7 14l4-4 3 3 5-6',
    bot: 'M12 8V4H8M4 8h16v12H4zM2 14h2M20 14h2M9 13v2M15 13v2',
    dots: 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
    heartHandshake: 'M11 14 9.5 12.5a2.12 2.12 0 0 1 3-3l.5.5.5-.5a2.12 2.12 0 0 1 3 3L15 14M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'
  };
  function Icon({
    name,
    size = 20,
    strokeWidth = 2,
    className = '',
    style = {}
  }) {
    const d = P[name] || '';
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: className,
      style: style,
      "aria-hidden": "true"
    }, d.split('M').filter(Boolean).map((seg, i) => /*#__PURE__*/React.createElement("path", {
      key: i,
      d: 'M' + seg
    })));
  }
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons.jsx", error: String((e && e.message) || e) }); }

// assets/reading-mode-toggle.kit.jsx
try { (() => {
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
  const KEY = 'ps-reading-mode',
    VALUE = 'dyslexic',
    OFF = 'off',
    ATTR = 'data-reading-mode';
  // DEFAULT ON: no stored value means dyslexic mode is active.
  const read = () => {
    try {
      return localStorage.getItem(KEY) !== OFF;
    } catch {
      return true;
    }
  };
  const persist = on => {
    try {
      localStorage.setItem(KEY, on ? VALUE : OFF);
    } catch {}
  };
  const apply = on => {
    const r = document.documentElement;
    on ? r.setAttribute(ATTR, VALUE) : r.removeAttribute(ATTR);
  };
  function ReadingModeToggle({
    compact = false,
    className = ''
  }) {
    const [on, setOn] = React.useState(read());
    React.useEffect(() => {
      apply(on);
    }, []); // sync on mount
    const set = next => {
      setOn(next);
      apply(next);
      persist(next);
      document.dispatchEvent(new CustomEvent('ps-reading-mode-change', {
        detail: {
          on: next
        }
      }));
    };
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      role: "switch",
      "aria-checked": on,
      "aria-label": (on ? 'Turn off' : 'Turn on') + ' dyslexia-friendly reading mode',
      onClick: () => set(!on),
      className: 'rmt ' + (on ? 'rmt--on ' : '') + className
    }, /*#__PURE__*/React.createElement("span", {
      className: "rmt__icon",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 7v14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 12h2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 8h2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 12h2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 8h2"
    }))), !compact && /*#__PURE__*/React.createElement("span", {
      className: "rmt__label"
    }, "Reading mode"), /*#__PURE__*/React.createElement("span", {
      className: "rmt__track",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rmt__thumb"
    })), /*#__PURE__*/React.createElement("style", null, `
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
        `));
  }
  window.ReadingModeToggle = ReadingModeToggle;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/reading-mode-toggle.kit.jsx", error: String((e && e.message) || e) }); }

// assets/reading-mode.js
try { (() => {
/* ============================================================
   PocketStudio — Reading Mode (dyslexia) helper
   ------------------------------------------------------------
   Drop-in, framework-free. Persists a USER preference and toggles
   the dyslexia reading mode system-wide.

   Quick start
   -----------
   1) Load colors_and_type.css (defines the override layer).
   2) Put this near the END of <body>, OR — to avoid a flash of the
      wrong font — inline the tiny bootstrap (see PSReadingMode.boot)
      in <head> and load this file later for the full API + buttons.
   3) Mark any button with  data-reading-toggle  and it auto-wires:
        <button data-reading-toggle aria-pressed="false">Reading mode</button>

   API (window.PSReadingMode)
   --------------------------
     .isOn()            -> boolean
     .set(on:boolean)   -> apply + persist
     .toggle()          -> flip + persist
     .boot()            -> apply persisted value (no UI); safe to call early

   Events
   ------
     document fires 'ps-reading-mode-change' with detail:{on}
   ============================================================ */
(function () {
  var KEY = 'ps-reading-mode'; // localStorage key
  var VALUE = 'dyslexic'; // the default mode
  var OFF = 'off'; // explicit opt-out
  var ATTR = 'data-reading-mode';

  // DEFAULT ON: no stored value means dyslexic mode is active.
  function read() {
    try {
      return localStorage.getItem(KEY) !== OFF;
    } catch (e) {
      return true;
    }
  }
  function write(on) {
    try {
      on ? localStorage.setItem(KEY, VALUE) : localStorage.setItem(KEY, OFF);
    } catch (e) {}
  }
  function apply(on) {
    var root = document.documentElement;
    if (on) root.setAttribute(ATTR, VALUE);else root.removeAttribute(ATTR);
  }
  function syncButtons(on) {
    var btns = document.querySelectorAll('[data-reading-toggle]');
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      // Optional auto-label: element with [data-reading-label] gets text swapped
      var lbl = b.querySelector('[data-reading-label]');
      if (lbl) lbl.textContent = on ? 'Reading mode: on' : 'Reading mode: off';
      if (!b.getAttribute('aria-label') && !b.querySelector('[data-reading-label]')) {
        b.setAttribute('aria-label', (on ? 'Turn off' : 'Turn on') + ' dyslexia-friendly reading mode');
      }
    }
  }
  function set(on) {
    on = !!on;
    apply(on);
    write(on);
    syncButtons(on);
    document.dispatchEvent(new CustomEvent('ps-reading-mode-change', {
      detail: {
        on: on
      }
    }));
  }
  var API = {
    isOn: read,
    set: set,
    toggle: function () {
      set(!read());
    },
    boot: function () {
      apply(read());
    }
  };
  window.PSReadingMode = API;

  // Apply persisted value immediately (so font swaps before/at first paint
  // when this script is in <head>; harmless if later).
  apply(read());

  // Wire up once DOM is ready.
  function init() {
    syncButtons(read());
    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('[data-reading-toggle]');
      if (t) {
        e.preventDefault();
        API.toggle();
      }
    });
    // Respect changes made in another tab.
    window.addEventListener('storage', function (e) {
      if (e.key === KEY) {
        apply(read());
        syncButtons(read());
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/reading-mode.js", error: String((e && e.message) || e) }); }

// ui_kits/agent-dashboard/AppShell.jsx
try { (() => {
/* Agent Dashboard — shell chrome: sidebar (desktop) + bottom-tab (mobile) + topbar */
(function () {
  const TABS = [['home', 'Home', 'home'], ['agents', 'Agents', 'grid'], ['runs', 'Runs', 'chart'], ['you', 'You', 'user']];
  function Brand() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-brand"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ps-mark",
      "aria-hidden": "true"
    }, "P"), /*#__PURE__*/React.createElement("span", {
      className: "ad-brand-wm"
    }, "Pocket", /*#__PURE__*/React.createElement("span", null, "Studio")));
  }
  function Sidebar({
    tab,
    setTab
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      className: "ad-sidebar"
    }, /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement("nav", {
      className: "ad-side-nav",
      "aria-label": "Primary"
    }, TABS.map(([id, label, icon]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      className: 'ad-side-link' + (tab === id ? ' active' : ''),
      onClick: () => setTab(id)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20
    }), " ", /*#__PURE__*/React.createElement("span", null, label)))), /*#__PURE__*/React.createElement("div", {
      className: "ad-side-foot"
    }, /*#__PURE__*/React.createElement(ReadingModeToggle, null)));
  }
  function BottomTab({
    tab,
    setTab
  }) {
    return /*#__PURE__*/React.createElement("nav", {
      className: "ad-bottomtab",
      "aria-label": "Primary"
    }, TABS.map(([id, label, icon]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      className: 'ad-tab' + (tab === id ? ' active' : ''),
      onClick: () => setTab(id),
      "aria-current": tab === id
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 24
    }), /*#__PURE__*/React.createElement("span", null, label))));
  }
  function TopBar({
    title,
    onCreate
  }) {
    return /*#__PURE__*/React.createElement("header", {
      className: "ad-topbar"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ad-topbar-title"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "ad-topbar-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "ad-iconbtn",
      "aria-label": "Notifications"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      className: "ad-notif-dot"
    })), /*#__PURE__*/React.createElement("button", {
      className: "ad-iconbtn ad-create-sm",
      "aria-label": "New agent",
      onClick: onCreate
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 20
    }))));
  }
  Object.assign(window, {
    Sidebar,
    BottomTab,
    TopBar
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent-dashboard/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agent-dashboard/Parts.jsx
try { (() => {
/* Agent Dashboard — small parts: StatusDot, badges, cards, rows, skeleton, empty */
(function () {
  const STATUS = {
    running: ['Running', 'var(--lime)'],
    paused: ['Paused', 'var(--amber)'],
    failed: ['Failed', 'var(--coral)'],
    idle: ['Idle', 'var(--cyan)']
  };
  function StatusBadge({
    status
  }) {
    const [label, c] = STATUS[status] || STATUS.idle;
    return /*#__PURE__*/React.createElement("span", {
      className: "ad-badge",
      style: {
        color: c,
        background: `color-mix(in oklab, ${c} 16%, transparent)`
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ad-dot",
      style: {
        background: c,
        boxShadow: status === 'running' ? `0 0 8px ${c}` : 'none'
      }
    }), label);
  }
  function StatCard({
    icon,
    label,
    value,
    accent
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-stat"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ad-stat-ic",
      style: {
        color: accent
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20
    })), /*#__PURE__*/React.createElement("span", {
      className: "ad-stat-val"
    }, value), /*#__PURE__*/React.createElement("span", {
      className: "ad-stat-lbl"
    }, label));
  }
  function AgentCard({
    agent,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("button", {
      className: 'ad-agent' + (agent.live ? ' ad-agent-live' : ''),
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "ad-agent-top"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ad-agent-ic",
      style: {
        color: agent.color
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: agent.icon,
      size: 22
    })), /*#__PURE__*/React.createElement(StatusBadge, {
      status: agent.status
    })), /*#__PURE__*/React.createElement("h3", {
      className: "ad-agent-name"
    }, agent.name), /*#__PURE__*/React.createElement("p", {
      className: "ad-agent-desc"
    }, agent.desc), /*#__PURE__*/React.createElement("div", {
      className: "ad-agent-foot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ad-meta"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 14
    }), " every ", agent.every), /*#__PURE__*/React.createElement("span", {
      className: "ad-meta"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "activity",
      size: 14
    }), " ", agent.runs, " runs")));
  }
  function RunRow({
    run
  }) {
    const [, c] = {
      ok: ['', 'var(--lime)'],
      failed: ['', 'var(--coral)'],
      running: ['', 'var(--cyan)']
    }[run.state];
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-run"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ad-run-dot",
      style: {
        background: c
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "ad-run-main"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ad-run-title"
    }, run.title), /*#__PURE__*/React.createElement("span", {
      className: "ad-run-sub"
    }, run.when, " \xB7 ", run.dur)), /*#__PURE__*/React.createElement("span", {
      className: "ad-run-state",
      style: {
        color: c
      }
    }, run.state === 'ok' ? 'Success' : run.state === 'failed' ? 'Failed' : 'Running'));
  }
  function Skeleton({
    w = '100%',
    h = 12,
    r = 6,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-sk",
      style: {
        width: w,
        height: h,
        borderRadius: r,
        ...style
      }
    });
  }
  function EmptyState({
    icon = 'sparkle',
    title,
    body,
    cta,
    onCta
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-empty"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ad-empty-ic"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 26
    })), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, body), cta && /*#__PURE__*/React.createElement("button", {
      className: "ad-btn ad-btn-primary",
      onClick: onCta
    }, cta));
  }
  Object.assign(window, {
    StatusBadge,
    StatCard,
    AgentCard,
    RunRow,
    Skeleton,
    EmptyState
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent-dashboard/Parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agent-dashboard/Screens.jsx
try { (() => {
/* Agent Dashboard — data + screens */
(function () {
  const {
    useState
  } = React;
  const AGENTS = [{
    id: 'triage',
    name: 'Inbox triage bot',
    desc: 'Sorts & labels new mail. Quiet, dependable, low-stakes.',
    icon: 'bot',
    color: 'var(--cyan)',
    status: 'running',
    every: '15 min',
    runs: 1284
  }, {
    id: 'lead',
    name: 'Lead scorer',
    desc: 'Scores inbound leads and nudges the warm ones.',
    icon: 'zap',
    color: 'var(--oxblood-bright)',
    status: 'running',
    every: '5 min',
    runs: 642,
    live: true
  }, {
    id: 'standup',
    name: 'Standup digest',
    desc: 'Summarizes yesterday into one calm morning note.',
    icon: 'activity',
    color: 'var(--amber)',
    status: 'paused',
    every: 'daily',
    runs: 96
  }, {
    id: 'invoice',
    name: 'Invoice chaser',
    desc: 'Politely follows up on overdue invoices.',
    icon: 'clock',
    color: 'var(--coral-bright)',
    status: 'failed',
    every: '6 hr',
    runs: 211
  }];
  const RUNS = [{
    title: 'Triaged 38 messages',
    when: '2 min ago',
    dur: '1.2s',
    state: 'ok'
  }, {
    title: 'Scored 12 new leads',
    when: '5 min ago',
    dur: '0.8s',
    state: 'ok'
  }, {
    title: 'Chase: 3 invoices',
    when: '14 min ago',
    dur: '—',
    state: 'failed'
  }, {
    title: 'Triaged 21 messages',
    when: '17 min ago',
    dur: '1.0s',
    state: 'ok'
  }, {
    title: 'Scoring batch',
    when: 'now',
    dur: 'running',
    state: 'running'
  }];
  function Overview({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-screen"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ad-tldr"
    }, /*#__PURE__*/React.createElement("span", {
      className: "kicker"
    }, "// TODAY"), /*#__PURE__*/React.createElement("p", null, "3 agents running, 1 needs you. Everything else is handled.")), /*#__PURE__*/React.createElement("div", {
      className: "ad-stats"
    }, /*#__PURE__*/React.createElement(StatCard, {
      icon: "activity",
      label: "Runs today",
      value: "312",
      accent: "var(--cyan)"
    }), /*#__PURE__*/React.createElement(StatCard, {
      icon: "check",
      label: "Success rate",
      value: "98%",
      accent: "var(--lime)"
    }), /*#__PURE__*/React.createElement(StatCard, {
      icon: "zap",
      label: "Active agents",
      value: "3",
      accent: "var(--steel-bright)"
    }), /*#__PURE__*/React.createElement(StatCard, {
      icon: "clock",
      label: "Saved / wk",
      value: "11h",
      accent: "var(--amber)"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ad-block"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ad-block-head"
    }, /*#__PURE__*/React.createElement("h2", null, "Needs you")), /*#__PURE__*/React.createElement("div", {
      className: "ad-attention"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ad-attention-ic"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      className: "ad-attention-main"
    }, /*#__PURE__*/React.createElement("strong", null, "Invoice chaser failed"), /*#__PURE__*/React.createElement("span", null, "Webhook returned 500. Not your fault \u2014 retry or check the URL.")), /*#__PURE__*/React.createElement("button", {
      className: "ad-btn ad-btn-ghost ad-btn-sm"
    }, "Fix"))), /*#__PURE__*/React.createElement("div", {
      className: "ad-block"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ad-block-head"
    }, /*#__PURE__*/React.createElement("h2", null, "Recent runs"), /*#__PURE__*/React.createElement("a", {
      className: "ad-link"
    }, "View all")), /*#__PURE__*/React.createElement("div", {
      className: "ad-runs"
    }, RUNS.map((r, i) => /*#__PURE__*/React.createElement(RunRow, {
      key: i,
      run: r
    })))));
  }
  function Agents({
    openAgent,
    openCreate,
    loading
  }) {
    if (loading) {
      return /*#__PURE__*/React.createElement("div", {
        className: "ad-screen"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ad-agents"
      }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
        className: "ad-agent",
        key: i
      }, /*#__PURE__*/React.createElement("div", {
        className: "ad-agent-top"
      }, /*#__PURE__*/React.createElement(Skeleton, {
        w: 44,
        h: 44,
        r: 12
      }), /*#__PURE__*/React.createElement(Skeleton, {
        w: 70,
        h: 22,
        r: 999
      })), /*#__PURE__*/React.createElement(Skeleton, {
        w: "60%",
        h: 16,
        style: {
          marginTop: 12
        }
      }), /*#__PURE__*/React.createElement(Skeleton, {
        w: "90%",
        h: 11,
        style: {
          marginTop: 10
        }
      }), /*#__PURE__*/React.createElement(Skeleton, {
        w: "40%",
        h: 11,
        style: {
          marginTop: 8
        }
      })))));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-screen"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ad-screen-head"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "kicker"
    }, "// ", AGENTS.length, " AGENTS"), /*#__PURE__*/React.createElement("h1", null, "Your agents")), /*#__PURE__*/React.createElement("button", {
      className: "ad-btn ad-btn-primary",
      onClick: openCreate
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    }), " New agent")), /*#__PURE__*/React.createElement("div", {
      className: "ad-agents"
    }, AGENTS.map(a => /*#__PURE__*/React.createElement(AgentCard, {
      key: a.id,
      agent: a,
      onClick: () => openAgent(a)
    }))));
  }
  function AgentDetail({
    agent,
    back
  }) {
    const [paused, setPaused] = useState(agent.status === 'paused');
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-screen"
    }, /*#__PURE__*/React.createElement("button", {
      className: "ad-back",
      onClick: back
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrowLeft",
      size: 18
    }), " All agents"), /*#__PURE__*/React.createElement("div", {
      className: "ad-detail-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ad-agent-ic ad-detail-ic",
      style: {
        color: agent.color
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: agent.icon,
      size: 28
    })), /*#__PURE__*/React.createElement("div", {
      className: "ad-detail-meta"
    }, /*#__PURE__*/React.createElement("h1", null, agent.name), /*#__PURE__*/React.createElement("p", null, agent.desc))), /*#__PURE__*/React.createElement("div", {
      className: "ad-detail-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: 'ad-btn ' + (paused ? 'ad-btn-primary' : 'ad-btn-ghost'),
      onClick: () => setPaused(p => !p)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: paused ? 'play' : 'pause',
      size: 18
    }), " ", paused ? 'Resume' : 'Pause'), /*#__PURE__*/React.createElement("button", {
      className: "ad-btn ad-btn-ghost"
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      className: "ad-btn ad-btn-ghost ad-btn-danger"
    }, "Delete")), /*#__PURE__*/React.createElement("div", {
      className: "ad-stats ad-stats-3"
    }, /*#__PURE__*/React.createElement(StatCard, {
      icon: "activity",
      label: "Total runs",
      value: agent.runs,
      accent: "var(--cyan)"
    }), /*#__PURE__*/React.createElement(StatCard, {
      icon: "clock",
      label: "Every",
      value: agent.every,
      accent: "var(--amber)"
    }), /*#__PURE__*/React.createElement(StatCard, {
      icon: "check",
      label: "Success",
      value: "98%",
      accent: "var(--lime)"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ad-block"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ad-block-head"
    }, /*#__PURE__*/React.createElement("h2", null, "Run history")), /*#__PURE__*/React.createElement("div", {
      className: "ad-runs"
    }, RUNS.map((r, i) => /*#__PURE__*/React.createElement(RunRow, {
      key: i,
      run: r
    })))));
  }
  function Settings() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-screen"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ad-screen-head"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "kicker"
    }, "// YOU"), /*#__PURE__*/React.createElement("h1", null, "Settings"))), /*#__PURE__*/React.createElement("div", {
      className: "ad-settings"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ad-setting"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Dyslexia reading mode"), /*#__PURE__*/React.createElement("span", null, "OpenDyslexic + roomier spacing. Your preference, saved on this device.")), /*#__PURE__*/React.createElement(ReadingModeToggle, null)), /*#__PURE__*/React.createElement("div", {
      className: "ad-setting"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Notifications"), /*#__PURE__*/React.createElement("span", null, "Ping me only when an agent needs a human.")), /*#__PURE__*/React.createElement("span", {
      className: "ad-pill-on"
    }, "On")), /*#__PURE__*/React.createElement("div", {
      className: "ad-setting"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Theme"), /*#__PURE__*/React.createElement("span", null, "Ink (dark). Paper coming soon.")), /*#__PURE__*/React.createElement("span", {
      className: "ad-pill"
    }, "Ink"))));
  }
  function CreateSheet({
    open,
    close
  }) {
    const [step, setStep] = useState(0);
    if (!open) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "ad-modal",
      onClick: close
    }, /*#__PURE__*/React.createElement("div", {
      className: "ad-sheet",
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      className: "ad-sheet-head"
    }, /*#__PURE__*/React.createElement("h2", null, step === 0 ? 'New agent' : 'Almost there'), /*#__PURE__*/React.createElement("button", {
      className: "ad-iconbtn",
      onClick: close,
      "aria-label": "Close"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 20
    }))), step === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "ad-form"
    }, /*#__PURE__*/React.createElement("label", {
      className: "ad-field"
    }, /*#__PURE__*/React.createElement("span", null, "What should it do?"), /*#__PURE__*/React.createElement("input", {
      className: "ad-input",
      placeholder: "Sort my inbox every 15 minutes"
    })), /*#__PURE__*/React.createElement("label", {
      className: "ad-field"
    }, /*#__PURE__*/React.createElement("span", null, "Name it"), /*#__PURE__*/React.createElement("input", {
      className: "ad-input",
      placeholder: "Inbox triage bot"
    })), /*#__PURE__*/React.createElement("p", {
      className: "ad-hint"
    }, "You can change all of this later. Nothing is permanent.")) : /*#__PURE__*/React.createElement("div", {
      className: "ad-form"
    }, /*#__PURE__*/React.createElement("label", {
      className: "ad-field"
    }, /*#__PURE__*/React.createElement("span", null, "Run every"), /*#__PURE__*/React.createElement("input", {
      className: "ad-input",
      defaultValue: "15 minutes"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ad-confirm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkle",
      size: 18
    }), " Ready to spin up. It\u2019ll start paused so you can watch the first run.")), /*#__PURE__*/React.createElement("div", {
      className: "ad-sheet-foot"
    }, step === 1 && /*#__PURE__*/React.createElement("button", {
      className: "ad-btn ad-btn-ghost",
      onClick: () => setStep(0)
    }, "Back"), /*#__PURE__*/React.createElement("button", {
      className: "ad-btn ad-btn-primary ad-btn-block",
      onClick: () => step === 0 ? setStep(1) : close()
    }, step === 0 ? 'Next' : 'Create agent'))));
  }
  Object.assign(window, {
    Overview,
    Agents,
    AgentDetail,
    Settings,
    CreateSheet
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent-dashboard/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
/* Marketing — Work CTA + Footer */
(function () {
  function Footer() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      className: "mk-cta",
      id: "work"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mk-cta-in"
    }, /*#__PURE__*/React.createElement("span", {
      className: "kicker mk-kick"
    }, "// WORK WITH US"), /*#__PURE__*/React.createElement("h2", {
      className: "mk-cta-h"
    }, "Got a chaos-to-product idea?", /*#__PURE__*/React.createElement("br", null), "Let\u2019s ship the ", /*#__PURE__*/React.createElement("span", {
      className: "mk-em"
    }, "small"), " version first."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Tell us the messy version. We\u2019ll find the lean, profitable cut and build it with you."), /*#__PURE__*/React.createElement("form", {
      className: "mk-cta-form",
      onSubmit: e => e.preventDefault()
    }, /*#__PURE__*/React.createElement("input", {
      className: "mk-input",
      type: "email",
      placeholder: "you@somewhere.gay",
      "aria-label": "Your email"
    }), /*#__PURE__*/React.createElement("button", {
      className: "mk-btn mk-btn-primary mk-btn-lg",
      type: "submit"
    }, "Start the conversation")), /*#__PURE__*/React.createElement("p", {
      className: "mk-fineprint"
    }, "No funnels, no \u201Csynergy.\u201D A real human replies."))), /*#__PURE__*/React.createElement("footer", {
      className: "mk-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mk-footer-in"
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 22
    }), /*#__PURE__*/React.createElement("p", {
      className: "mk-footer-tag"
    }, "A queer creative-technology studio. Built for outsiders, in public."), /*#__PURE__*/React.createElement("div", {
      className: "mk-footer-links"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#products"
    }, "Products"), /*#__PURE__*/React.createElement("a", {
      href: "#manifesto"
    }, "Manifesto"), /*#__PURE__*/React.createElement("a", {
      href: "#work"
    }, "Work with us"), /*#__PURE__*/React.createElement("a", {
      href: "#top"
    }, "Back to top")), /*#__PURE__*/React.createElement("span", {
      className: "mk-footer-copy"
    }, "\xA9 PocketStudio \xB7 clarity over polish, edge over etiquette."))));
  }
  window.Footer = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Header.jsx
try { (() => {
/* Marketing — Header: logo + nav + reading-mode toggle + mobile menu */
(function () {
  const {
    useState
  } = React;
  function Logo({
    size = 30
  }) {
    return /*#__PURE__*/React.createElement("a", {
      href: "#top",
      className: "ps-logo",
      "aria-label": "PocketStudio home"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ps-mark",
      "aria-hidden": "true"
    }, "P"), /*#__PURE__*/React.createElement("span", {
      className: "ps-wm",
      style: {
        fontSize: size
      }
    }, "Pocket", /*#__PURE__*/React.createElement("span", null, "Studio")));
  }
  function Header() {
    const [open, setOpen] = useState(false);
    const links = [['Work', '#work'], ['Products', '#products'], ['Manifesto', '#manifesto']];
    return /*#__PURE__*/React.createElement("header", {
      className: "mk-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mk-header-in"
    }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", {
      className: "mk-nav-desktop",
      "aria-label": "Primary"
    }, links.map(([t, h]) => /*#__PURE__*/React.createElement("a", {
      key: h,
      href: h
    }, t)), /*#__PURE__*/React.createElement(ReadingModeToggle, {
      compact: true
    }), /*#__PURE__*/React.createElement("a", {
      href: "#work",
      className: "mk-btn mk-btn-primary"
    }, "Work with us")), /*#__PURE__*/React.createElement("button", {
      className: "mk-burger",
      "aria-label": open ? 'Close menu' : 'Open menu',
      "aria-expanded": open,
      onClick: () => setOpen(o => !o)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: open ? 'x' : 'menu',
      size: 24
    }))), open && /*#__PURE__*/React.createElement("div", {
      className: "mk-sheet"
    }, links.map(([t, h]) => /*#__PURE__*/React.createElement("a", {
      key: h,
      href: h,
      onClick: () => setOpen(false)
    }, t)), /*#__PURE__*/React.createElement("div", {
      className: "mk-sheet-row"
    }, /*#__PURE__*/React.createElement(ReadingModeToggle, null)), /*#__PURE__*/React.createElement("a", {
      href: "#work",
      className: "mk-btn mk-btn-primary mk-btn-block",
      onClick: () => setOpen(false)
    }, "Work with us")));
  }
  Object.assign(window, {
    Header,
    Logo
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
/* Marketing — Hero: display headline, neon bloom, primary CTA */
(function () {
  function Hero() {
    return /*#__PURE__*/React.createElement("section", {
      className: "mk-hero",
      id: "top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mk-bloom",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mk-hero-in"
    }, /*#__PURE__*/React.createElement("span", {
      className: "kicker mk-kick"
    }, "// BUILT FOR OUTSIDERS"), /*#__PURE__*/React.createElement("h1", {
      className: "mk-hero-h"
    }, "Tools for brains the", /*#__PURE__*/React.createElement("br", null), "manuals ", /*#__PURE__*/React.createElement("span", {
      className: "mk-em"
    }, "forgot.")), /*#__PURE__*/React.createElement("p", {
      className: "lead mk-hero-p"
    }, "We build lean, profitable software for single moms, neurospicy makers, and chaos-to-product founders. No sludge. No gatekeeping."), /*#__PURE__*/React.createElement("div", {
      className: "mk-hero-cta"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#work",
      className: "mk-btn mk-btn-primary mk-btn-lg"
    }, "Build the thing ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 20
    })), /*#__PURE__*/React.createElement("a", {
      href: "#products",
      className: "mk-btn mk-btn-ghost mk-btn-lg"
    }, "See what we ship")), /*#__PURE__*/React.createElement("div", {
      className: "mk-trust"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "shield",
      size: 16
    }), " Accessible by default"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 16
    }), " Trauma-informed"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "zap",
      size: 16
    }), " Lean & profitable"))));
  }
  window.Hero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Manifesto.jsx
try { (() => {
/* Marketing — Manifesto: TL;DR-led principles (low cognitive load) */
(function () {
  const PRINCIPLES = [['zap', 'Clarity over polish', 'If it needs a manual, it’s broken. We ship the obvious thing, then make it beautiful.'], ['sparkle', 'Edge over etiquette', 'We’d rather be useful and a little feral than inoffensive and forgettable.'], ['shield', 'Accessible by default', 'AA contrast, real focus states, 44px targets, reading mode. Not a setting we forgot.'], ['heartHandshake', 'Trauma-informed', 'Errors aren’t your fault. The tone stays warm even when the work gets hard.']];
  function Manifesto() {
    return /*#__PURE__*/React.createElement("section", {
      className: "mk-section",
      id: "manifesto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mk-section-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "kicker"
    }, "// HOW WE WORK"), /*#__PURE__*/React.createElement("h2", {
      className: "mk-h2"
    }, "The TL;DR: we make small things that pay for themselves and don\u2019t make you feel stupid.")), /*#__PURE__*/React.createElement("div", {
      className: "mk-principles"
    }, PRINCIPLES.map(([ic, t, d]) => /*#__PURE__*/React.createElement("article", {
      className: "mk-principle",
      key: t
    }, /*#__PURE__*/React.createElement("span", {
      className: "mk-principle-ic"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22
    })), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d)))));
  }
  window.Manifesto = Manifesto;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Manifesto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Products.jsx
try { (() => {
/* Marketing — Products: the four surfaces as a roster */
(function () {
  const PRODUCTS = [['grid', 'Agent Dashboard', 'Run and watch your AI agents. Calm, dense, dependable.', 'cyan', 'Live'], ['gamepad', 'Monster Survivor', 'A neon survivors-like you can clear in a lunch break.', 'coral', 'Playable'], ['mic', 'Rainbow Rest Stop', 'A podcast for outsiders who build. Soft landings, real talk.', 'violet', 'New eps'], ['terminal', 'Pocket CLI', 'Scaffold a profitable micro-app in one command.', 'lime', 'Beta']];
  function Products() {
    return /*#__PURE__*/React.createElement("section", {
      className: "mk-section",
      id: "products"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mk-section-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "kicker"
    }, "// WHAT WE SHIP"), /*#__PURE__*/React.createElement("h2", {
      className: "mk-h2"
    }, "Four things, all profitable, all built for non-standard brains.")), /*#__PURE__*/React.createElement("div", {
      className: "mk-products"
    }, PRODUCTS.map(([ic, t, d, c, tag]) => /*#__PURE__*/React.createElement("a", {
      className: 'mk-product mk-accent-' + c,
      key: t,
      href: "#work"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mk-product-top"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mk-product-ic"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 24
    })), /*#__PURE__*/React.createElement("span", {
      className: "mk-product-tag"
    }, tag)), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d), /*#__PURE__*/React.createElement("span", {
      className: "mk-product-go"
    }, "Open ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowUpRight",
      size: 16
    }))))));
  }
  window.Products = Products;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Products.jsx", error: String((e && e.message) || e) }); }

// ui_kits/monster-survivor/Arena.jsx
try { (() => {
/* Monster Survivor — Arena: a lightweight animated canvas backdrop.
   Not a real game loop's worth of logic — just enough motion to sit a HUD on. */
(function () {
  const {
    useRef,
    useEffect
  } = React;
  function Arena({
    paused
  }) {
    const ref = useRef(null);
    const pausedRef = useRef(paused);
    useEffect(() => {
      pausedRef.current = paused;
    }, [paused]);
    useEffect(() => {
      const cv = ref.current,
        ctx = cv.getContext('2d');
      let raf,
        w,
        h,
        t = 0;
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      function resize() {
        w = cv.clientWidth;
        h = cv.clientHeight;
        cv.width = w * DPR;
        cv.height = h * DPR;
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      }
      resize();
      window.addEventListener('resize', resize);
      // monsters: drifting toward center
      const mons = Array.from({
        length: 26
      }, () => ({
        a: Math.random() * Math.PI * 2,
        r: 180 + Math.random() * 260,
        sp: 0.12 + Math.random() * 0.18,
        sz: 7 + Math.random() * 10,
        c: Math.random() < 0.25 ? '#7C8BA0' : Math.random() < 0.5 ? '#E8483F' : '#B6F23A'
      }));
      const stars = Array.from({
        length: 70
      }, () => ({
        x: Math.random(),
        y: Math.random(),
        z: Math.random()
      }));
      function draw() {
        t += pausedRef.current ? 0 : 1;
        const cx = w / 2,
          cy = h / 2;
        ctx.fillStyle = '#0B0B0F';
        ctx.fillRect(0, 0, w, h);
        // grid floor glow
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.6);
        g.addColorStop(0, 'rgba(197,59,56,0.10)');
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
        // stars
        ctx.fillStyle = 'rgba(244,239,230,0.5)';
        stars.forEach(s => {
          const sz = s.z * 1.8 + 0.3;
          ctx.globalAlpha = 0.3 + s.z * 0.5;
          ctx.fillRect(s.x * w, s.y * h, sz, sz);
        });
        ctx.globalAlpha = 1;
        // monsters spiraling in
        mons.forEach(m => {
          if (!pausedRef.current) {
            m.a += m.sp * 0.01;
            m.r -= m.sp * 0.25;
            if (m.r < 70) m.r = 200 + Math.random() * 240;
          }
          const x = cx + Math.cos(m.a) * m.r,
            y = cy + Math.sin(m.a) * m.r * 0.62;
          ctx.beginPath();
          ctx.arc(x, y, m.sz, 0, Math.PI * 2);
          ctx.fillStyle = m.c;
          ctx.shadowColor = m.c;
          ctx.shadowBlur = 14;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
        // player orb
        const pulse = 1 + Math.sin(t * 0.06) * 0.08;
        ctx.beginPath();
        ctx.arc(cx, cy, 16 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = '#F4EFE6';
        ctx.shadowColor = '#33CBD2';
        ctx.shadowBlur = 22;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx, cy, 30 * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(51,203,210,0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.shadowBlur = 0;
        raf = requestAnimationFrame(draw);
      }
      draw();
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', resize);
      };
    }, []);
    return /*#__PURE__*/React.createElement("canvas", {
      ref: ref,
      className: "ms-canvas"
    });
  }
  window.Arena = Arena;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/monster-survivor/Arena.jsx", error: String((e && e.message) || e) }); }

// ui_kits/monster-survivor/HUD.jsx
try { (() => {
/* Monster Survivor — HUD: timer, level, resources, health/XP bars, abilities */
(function () {
  function Bar({
    pct,
    color,
    glow,
    label,
    sub
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ms-bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ms-bar-track"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ms-bar-fill",
      style: {
        width: pct + '%',
        background: color,
        boxShadow: glow
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "ms-bar-meta"
    }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, sub)));
  }
  function Chip({
    icon,
    children,
    color
  }) {
    return /*#__PURE__*/React.createElement("span", {
      className: "ms-chip"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 16,
      style: {
        color
      }
    }), children);
  }
  function HUD({
    onPause
  }) {
    const abilities = [{
      name: 'whip',
      icon: 'zap',
      lvl: 5,
      c: 'var(--lime)'
    }, {
      name: 'aura',
      icon: 'sparkle',
      lvl: 3,
      c: 'var(--cyan)'
    }, {
      name: 'shield',
      icon: 'shield',
      lvl: 2,
      c: 'var(--steel-bright)'
    }, {
      name: 'heart',
      icon: 'heart',
      lvl: 1,
      c: 'var(--coral-bright)'
    }];
    return /*#__PURE__*/React.createElement("div", {
      className: "ms-hud"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ms-hud-top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ms-resources"
    }, /*#__PURE__*/React.createElement(Chip, {
      icon: "sparkle",
      color: "var(--amber)"
    }, "1,240"), /*#__PURE__*/React.createElement(Chip, {
      icon: "x",
      color: "var(--coral-bright)"
    }, "312 kills")), /*#__PURE__*/React.createElement("div", {
      className: "ms-timer"
    }, "08:42"), /*#__PURE__*/React.createElement("button", {
      className: "ms-pause",
      onClick: onPause,
      "aria-label": "Pause"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pause",
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      className: "ms-bars"
    }, /*#__PURE__*/React.createElement(Bar, {
      pct: 72,
      color: "var(--coral)",
      glow: "0 0 14px rgba(255,92,92,.6)",
      label: "HP",
      sub: "216 / 300"
    }), /*#__PURE__*/React.createElement(Bar, {
      pct: 48,
      color: "var(--lime)",
      glow: "var(--glow-lime)",
      label: "LVL 7",
      sub: "XP 48%"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ms-abilities"
    }, abilities.map(a => /*#__PURE__*/React.createElement("div", {
      className: "ms-ability",
      key: a.name
    }, /*#__PURE__*/React.createElement("span", {
      className: "ms-ability-ic",
      style: {
        color: a.c
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 22
    })), /*#__PURE__*/React.createElement("span", {
      className: "ms-ability-lvl"
    }, a.lvl))), /*#__PURE__*/React.createElement("div", {
      className: "ms-ability ms-ability-empty"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    }))));
  }
  window.HUD = HUD;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/monster-survivor/HUD.jsx", error: String((e && e.message) || e) }); }

// ui_kits/monster-survivor/Menus.jsx
try { (() => {
/* Monster Survivor — Menus: Title, Level-up (text-heavy), Pause */
(function () {
  function TitleScreen({
    onPlay
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ms-screen ms-title"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ms-kicker"
    }, "\u25B2 POCKETSTUDIO ARCADE"), /*#__PURE__*/React.createElement("h1", {
      className: "ms-title-h"
    }, "Monster", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "Survivor")), /*#__PURE__*/React.createElement("p", {
      className: "ms-title-tag"
    }, "Outlast the swarm. Clear a run on your lunch break."), /*#__PURE__*/React.createElement("div", {
      className: "ms-title-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "ms-btn ms-btn-go",
      onClick: onPlay
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 20
    }), " Start a run"), /*#__PURE__*/React.createElement("button", {
      className: "ms-btn ms-btn-ghost"
    }, "Characters")), /*#__PURE__*/React.createElement("div", {
      className: "ms-title-foot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ms-meta"
    }, "Best: 18:24"), /*#__PURE__*/React.createElement("span", {
      className: "ms-meta"
    }, "Coins: 4,120")));
  }
  const UPGRADES = [{
    icon: 'zap',
    name: 'Static Whip',
    tier: 'Common',
    c: 'var(--lime)',
    tierC: 'var(--fg2)',
    desc: 'Lash everything in front of you. +20% damage and a wider arc. Your bread-and-butter clear tool.',
    pips: 5
  }, {
    icon: 'sparkle',
    name: 'Glitter Aura',
    tier: 'Rare',
    c: 'var(--cyan)',
    tierC: 'var(--cyan)',
    desc: 'A ring of damage hugs you at all times. Great for panic moments when the swarm closes in.',
    pips: 3
  }, {
    icon: 'heart',
    name: 'Soft Landing',
    tier: 'Epic',
    c: 'var(--amber-bright)',
    tierC: 'var(--amber-bright)',
    desc: 'Heal 8% on level-up and shrug off the next hit each wave. Built for outlasting, not flexing.',
    pips: 1
  }];
  function LevelUpMenu({
    onPick
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ms-screen ms-levelup"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ms-levelup-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ms-kicker",
      style: {
        color: 'var(--lime)'
      }
    }, "\u2726 LEVEL UP \u2014 PICK ONE"), /*#__PURE__*/React.createElement("h2", {
      className: "ms-levelup-h"
    }, "You hit level 7. Choose your upgrade.")), /*#__PURE__*/React.createElement("div", {
      className: "ms-cards"
    }, UPGRADES.map(u => /*#__PURE__*/React.createElement("button", {
      className: "ms-card",
      key: u.name,
      onClick: onPick
    }, /*#__PURE__*/React.createElement("div", {
      className: "ms-card-top"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ms-card-ic",
      style: {
        color: u.c
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: u.icon,
      size: 26
    })), /*#__PURE__*/React.createElement("span", {
      className: "ms-card-tier",
      style: {
        color: u.tierC
      }
    }, u.tier)), /*#__PURE__*/React.createElement("h3", {
      className: "ms-card-name"
    }, u.name), /*#__PURE__*/React.createElement("p", {
      className: "ms-card-desc"
    }, u.desc), /*#__PURE__*/React.createElement("div", {
      className: "ms-pips"
    }, Array.from({
      length: 5
    }).map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "ms-pip",
      style: {
        background: i < u.pips ? u.c : 'var(--ink-600)'
      }
    })))))), /*#__PURE__*/React.createElement("button", {
      className: "ms-skip",
      onClick: onPick
    }, "Skip for 30 coins"));
  }
  function PauseMenu({
    onResume,
    onQuit
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ms-screen ms-pause-screen"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ms-pause-card"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ms-kicker"
    }, "\u2016 PAUSED"), /*#__PURE__*/React.createElement("h2", {
      className: "ms-pause-h"
    }, "Take a breath. The swarm can wait."), /*#__PURE__*/React.createElement("div", {
      className: "ms-settings"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ms-setting"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Reading mode"), /*#__PURE__*/React.createElement("span", null, "OpenDyslexic for menus & upgrade text.")), /*#__PURE__*/React.createElement(ReadingModeToggle, null)), /*#__PURE__*/React.createElement("div", {
      className: "ms-setting"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Sound"), /*#__PURE__*/React.createElement("span", null, "Music + SFX")), /*#__PURE__*/React.createElement("span", {
      className: "ms-toggle-pill ms-on"
    }, "On")), /*#__PURE__*/React.createElement("div", {
      className: "ms-setting"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Screen shake"), /*#__PURE__*/React.createElement("span", null, "Juice on big hits")), /*#__PURE__*/React.createElement("span", {
      className: "ms-toggle-pill ms-on"
    }, "Low"))), /*#__PURE__*/React.createElement("div", {
      className: "ms-pause-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "ms-btn ms-btn-go ms-btn-block",
      onClick: onResume
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 18
    }), " Resume"), /*#__PURE__*/React.createElement("button", {
      className: "ms-btn ms-btn-ghost ms-btn-block",
      onClick: onQuit
    }, "Quit to title"))));
  }
  Object.assign(window, {
    TitleScreen,
    LevelUpMenu,
    PauseMenu
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/monster-survivor/Menus.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rainbow-rest-stop/Episodes.jsx
try { (() => {
/* Rainbow Rest Stop — Episode list + Show notes (text-heavy) */
(function () {
  const EPISODES = [{
    num: 41,
    date: 'May 24',
    len: '52 min',
    title: 'The lean version of your big idea',
    blurb: 'Cutting a chaotic dream down to the one profitable thing you can ship this month.'
  }, {
    num: 40,
    date: 'May 17',
    len: '47 min',
    title: 'Rejection is a redirect (mostly)',
    blurb: 'On hearing “no” without it taking the whole week from you.'
  }, {
    num: 39,
    date: 'May 10',
    len: '58 min',
    title: 'Building while burnt out',
    blurb: 'Trauma-informed productivity that doesn’t pretend you’re a machine.'
  }, {
    num: 38,
    date: 'May 3',
    len: '44 min',
    title: 'Pricing for outsiders',
    blurb: 'Charging money when the world told you that you couldn’t.'
  }];
  function EpisodeList({
    onPlay
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "rr-section",
      id: "episodes"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rr-section-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "kicker rr-kick"
    }, "// MORE EPISODES"), /*#__PURE__*/React.createElement("h2", {
      className: "rr-h2"
    }, "The back catalog")), /*#__PURE__*/React.createElement("div", {
      className: "rr-eps"
    }, EPISODES.map(e => /*#__PURE__*/React.createElement("article", {
      className: "rr-ep",
      key: e.num
    }, /*#__PURE__*/React.createElement("button", {
      className: "rr-ep-play",
      "aria-label": 'Play episode ' + e.num,
      onClick: onPlay
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      className: "rr-ep-main"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rr-ep-meta"
    }, "EP ", e.num, " \xB7 ", e.date, " \xB7 ", e.len), /*#__PURE__*/React.createElement("h3", null, e.title), /*#__PURE__*/React.createElement("p", null, e.blurb))))));
  }
  function ShowNotes() {
    return /*#__PURE__*/React.createElement("section", {
      className: "rr-section rr-notes",
      id: "notes"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rr-section-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "kicker rr-kick"
    }, "// SHOW NOTES"), /*#__PURE__*/React.createElement("h2", {
      className: "rr-h2"
    }, "Episode 41 \u2014 show notes")), /*#__PURE__*/React.createElement("div", {
      className: "rr-tldr"
    }, /*#__PURE__*/React.createElement("strong", null, "TL;DR"), /*#__PURE__*/React.createElement("p", null, "Your idea isn\u2019t too big \u2014 it\u2019s just un-cut. We walk through finding the smallest version that still pays rent, and why \u201Clean\u201D is a kindness to your future self, not a compromise.")), /*#__PURE__*/React.createElement("div", {
      className: "rr-notes-body"
    }, /*#__PURE__*/React.createElement("h4", null, "In this episode"), /*#__PURE__*/React.createElement("ul", {
      className: "rr-timestamps"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
      className: "rr-ts"
    }, "02:14"), " Why \u201Cbig\u201D ideas stall \u2014 and the cut that frees them"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
      className: "rr-ts"
    }, "11:40"), " The one-month profitable slice test"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
      className: "rr-ts"
    }, "24:08"), " A listener\u2019s chaos-to-product story"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
      className: "rr-ts"
    }, "38:52"), " Charging money without flinching"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
      className: "rr-ts"
    }, "47:30"), " Soft landing: this week\u2019s rest stop")), /*#__PURE__*/React.createElement("h4", null, "From the conversation"), /*#__PURE__*/React.createElement("blockquote", {
      className: "rr-quote"
    }, "\u201CLean isn\u2019t the small, sad version of your dream. It\u2019s the part of the dream that survives contact with a Tuesday.\u201D"), /*#__PURE__*/React.createElement("p", null, "We get into the difference between shrinking an idea and ", /*#__PURE__*/React.createElement("em", null, "focusing"), " it \u2014 and why the version you can actually finish beats the version you keep describing. Plenty of plain-language steps, no hustle-grind sermon.")));
  }
  Object.assign(window, {
    EpisodeList,
    ShowNotes
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rainbow-rest-stop/Episodes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rainbow-rest-stop/Player.jsx
try { (() => {
/* Rainbow Rest Stop — Player: interactive (fake) audio player */
(function () {
  const {
    useState,
    useRef,
    useEffect
  } = React;
  const DUR = 3122; // seconds (52:02)
  function fmt(s) {
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60);
    return m + ':' + String(ss).padStart(2, '0');
  }
  function Player({
    ep
  }) {
    const [playing, setPlaying] = useState(false);
    const [t, setT] = useState(412);
    const barRef = useRef(null);
    useEffect(() => {
      if (!playing) return;
      const id = setInterval(() => setT(x => Math.min(DUR, x + 1)), 1000);
      return () => clearInterval(id);
    }, [playing]);
    function seek(e) {
      const r = barRef.current.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      setT(Math.round(p * DUR));
    }
    const pct = t / DUR * 100;
    return /*#__PURE__*/React.createElement("div", {
      className: "rr-player"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rr-player-art",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rr-art-rainbow"
    }), /*#__PURE__*/React.createElement("span", {
      className: "rr-art-glyph"
    }, "\u25CF")), /*#__PURE__*/React.createElement("div", {
      className: "rr-player-body"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rr-ep-kicker"
    }, "EP ", ep.num, " \xB7 ", ep.date), /*#__PURE__*/React.createElement("h2", {
      className: "rr-ep-title"
    }, ep.title), /*#__PURE__*/React.createElement("div", {
      className: "rr-scrub",
      ref: barRef,
      onClick: seek,
      role: "slider",
      "aria-label": "Seek",
      "aria-valuemin": 0,
      "aria-valuemax": DUR,
      "aria-valuenow": t
    }, /*#__PURE__*/React.createElement("div", {
      className: "rr-scrub-track"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rr-scrub-fill",
      style: {
        width: pct + '%'
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "rr-scrub-thumb",
      style: {
        left: pct + '%'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "rr-times"
    }, /*#__PURE__*/React.createElement("span", null, fmt(t)), /*#__PURE__*/React.createElement("span", null, "-", fmt(DUR - t))), /*#__PURE__*/React.createElement("div", {
      className: "rr-controls"
    }, /*#__PURE__*/React.createElement("button", {
      className: "rr-ctl",
      "aria-label": "Back 15 seconds",
      onClick: () => setT(x => Math.max(0, x - 15))
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrowLeft",
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      className: "rr-ctl-n"
    }, "15")), /*#__PURE__*/React.createElement("button", {
      className: "rr-play",
      onClick: () => setPlaying(p => !p),
      "aria-label": playing ? 'Pause' : 'Play'
    }, /*#__PURE__*/React.createElement(Icon, {
      name: playing ? 'pause' : 'play',
      size: 26
    })), /*#__PURE__*/React.createElement("button", {
      className: "rr-ctl",
      "aria-label": "Forward 30 seconds",
      onClick: () => setT(x => Math.min(DUR, x + 30))
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      className: "rr-ctl-n"
    }, "30")))));
  }
  window.Player = Player;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rainbow-rest-stop/Player.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rainbow-rest-stop/RRHeader.jsx
try { (() => {
/* Rainbow Rest Stop — Header + Subscribe row */
(function () {
  function RRHeader() {
    return /*#__PURE__*/React.createElement("header", {
      className: "rr-header"
    }, /*#__PURE__*/React.createElement("a", {
      className: "rr-brand",
      href: "#top",
      "aria-label": "Rainbow Rest Stop home"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rr-brand-glyph",
      "aria-hidden": "true"
    }, "\u25CF"), /*#__PURE__*/React.createElement("span", {
      className: "rr-brand-wm"
    }, "Rainbow", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "Rest Stop"))), /*#__PURE__*/React.createElement("div", {
      className: "rr-header-actions"
    }, /*#__PURE__*/React.createElement(ReadingModeToggle, {
      compact: true
    }), /*#__PURE__*/React.createElement("a", {
      className: "rr-btn rr-btn-primary",
      href: "#subscribe"
    }, "Subscribe")));
  }
  function Subscribe() {
    const apps = ['Apple Podcasts', 'Spotify', 'Overcast', 'RSS'];
    return /*#__PURE__*/React.createElement("section", {
      className: "rr-subscribe",
      id: "subscribe"
    }, /*#__PURE__*/React.createElement("span", {
      className: "kicker rr-kick"
    }, "// NEVER MISS A REST STOP"), /*#__PURE__*/React.createElement("h2", {
      className: "rr-sub-h"
    }, "Pull over wherever you listen."), /*#__PURE__*/React.createElement("div", {
      className: "rr-apps"
    }, apps.map(a => /*#__PURE__*/React.createElement("a", {
      className: "rr-app",
      key: a,
      href: "#"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a === 'RSS' ? 'rss' : 'mic',
      size: 18
    }), a))));
  }
  Object.assign(window, {
    RRHeader,
    Subscribe
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rainbow-rest-stop/RRHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ReadingModeToggle = __ds_scope.ReadingModeToggle;

})();
