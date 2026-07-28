/* Marketing — Manifesto: TL;DR-led principles (low cognitive load) */
(function () {
  const PRINCIPLES = [
    ['zap', 'Clarity over polish', 'If it needs a manual, it’s broken. We ship the obvious thing, then make it beautiful.'],
    ['sparkle', 'Edge over etiquette', 'We’d rather be useful and a little feral than inoffensive and forgettable.'],
    ['shield', 'Accessible by default', 'AA contrast, real focus states, 44px targets, reading mode. Not a setting we forgot.'],
    ['heartHandshake', 'Trauma-informed', 'Errors aren’t your fault. The tone stays warm even when the work gets hard.'],
  ];
  function Manifesto() {
    return (
      <section className="mk-section" id="manifesto">
        <div className="mk-section-head">
          <span className="kicker">// HOW WE WORK</span>
          <h2 className="mk-h2">The TL;DR: we make small things that pay for themselves and don’t make you feel stupid.</h2>
        </div>
        <div className="mk-principles">
          {PRINCIPLES.map(([ic, t, d]) => (
            <article className="mk-principle" key={t}>
              <span className="mk-principle-ic"><Icon name={ic} size={22} /></span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
  window.Manifesto = Manifesto;
})();
