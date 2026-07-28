/* Marketing — Hero: display headline, neon bloom, primary CTA */
(function () {
  function Hero() {
    return (
      <section className="mk-hero" id="top">
        <div className="mk-bloom" aria-hidden="true" />
        <div className="mk-hero-in">
          <span className="kicker mk-kick">// BUILT FOR OUTSIDERS</span>
          <h1 className="mk-hero-h">
            Tools for brains the<br />manuals <span className="mk-em">forgot.</span>
          </h1>
          <p className="lead mk-hero-p">
            We build lean, profitable software for single moms, neurospicy makers,
            and chaos-to-product founders. No sludge. No gatekeeping.
          </p>
          <div className="mk-hero-cta">
            <a href="#work" className="mk-btn mk-btn-primary mk-btn-lg">
              Build the thing <Icon name="arrowRight" size={20} />
            </a>
            <a href="#products" className="mk-btn mk-btn-ghost mk-btn-lg">See what we ship</a>
          </div>
          <div className="mk-trust">
            <span><Icon name="shield" size={16} /> Accessible by default</span>
            <span><Icon name="heart" size={16} /> Trauma-informed</span>
            <span><Icon name="zap" size={16} /> Lean &amp; profitable</span>
          </div>
        </div>
      </section>
    );
  }
  window.Hero = Hero;
})();
