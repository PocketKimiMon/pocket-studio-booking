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
  var KEY = 'ps-reading-mode';          // localStorage key
  var VALUE = 'dyslexic';               // the default mode
  var OFF = 'off';                      // explicit opt-out
  var ATTR = 'data-reading-mode';

  // DEFAULT ON: no stored value means dyslexic mode is active.
  function read() {
    try { return localStorage.getItem(KEY) !== OFF; } catch (e) { return true; }
  }
  function write(on) {
    try { on ? localStorage.setItem(KEY, VALUE) : localStorage.setItem(KEY, OFF); } catch (e) {}
  }
  function apply(on) {
    var root = document.documentElement;
    if (on) root.setAttribute(ATTR, VALUE);
    else root.removeAttribute(ATTR);
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
        b.setAttribute('aria-label',
          (on ? 'Turn off' : 'Turn on') + ' dyslexia-friendly reading mode');
      }
    }
  }
  function set(on) {
    on = !!on;
    apply(on);
    write(on);
    syncButtons(on);
    document.dispatchEvent(new CustomEvent('ps-reading-mode-change', { detail: { on: on } }));
  }

  var API = {
    isOn: read,
    set: set,
    toggle: function () { set(!read()); },
    boot: function () { apply(read()); }
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
      if (t) { e.preventDefault(); API.toggle(); }
    });
    // Respect changes made in another tab.
    window.addEventListener('storage', function (e) {
      if (e.key === KEY) { apply(read()); syncButtons(read()); }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
