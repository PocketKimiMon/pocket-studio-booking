/* Marketing — Products: the four surfaces as a roster */
(function () {
  const PRODUCTS = [
    ['grid', 'Agent Dashboard', 'Run and watch your AI agents. Calm, dense, dependable.', 'cyan', 'Live'],
    ['gamepad', 'Monster Survivor', 'A neon survivors-like you can clear in a lunch break.', 'coral', 'Playable'],
    ['mic', 'Rainbow Rest Stop', 'A podcast for outsiders who build. Soft landings, real talk.', 'violet', 'New eps'],
    ['terminal', 'Pocket CLI', 'Scaffold a profitable micro-app in one command.', 'lime', 'Beta'],
  ];
  function Products() {
    return (
      <section className="mk-section" id="products">
        <div className="mk-section-head">
          <span className="kicker">// WHAT WE SHIP</span>
          <h2 className="mk-h2">Four things, all profitable, all built for non-standard brains.</h2>
        </div>
        <div className="mk-products">
          {PRODUCTS.map(([ic, t, d, c, tag]) => (
            <a className={'mk-product mk-accent-' + c} key={t} href="#work">
              <div className="mk-product-top">
                <span className="mk-product-ic"><Icon name={ic} size={24} /></span>
                <span className="mk-product-tag">{tag}</span>
              </div>
              <h3>{t}</h3>
              <p>{d}</p>
              <span className="mk-product-go">Open <Icon name="arrowUpRight" size={16} /></span>
            </a>
          ))}
        </div>
      </section>
    );
  }
  window.Products = Products;
})();
