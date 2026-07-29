/* PocketStudio — Reading Mode (dyslexia) helper. DEFAULT ON, persisted. */
(function () {
  var KEY = 'ps-reading-mode';
  var VALUE = 'dyslexic';
  var OFF = 'off';
  var ATTR = 'data-reading-mode';
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
  apply(read());
  function init() {
    syncButtons(read());
    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('[data-reading-toggle]');
      if (t) { e.preventDefault(); API.toggle(); }
    });
    window.addEventListener('storage', function (e) {
      if (e.key === KEY) { apply(read()); syncButtons(read()); }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
