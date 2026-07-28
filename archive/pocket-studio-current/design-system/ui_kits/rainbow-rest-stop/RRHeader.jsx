/* Rainbow Rest Stop — Header + Subscribe row */
(function () {
  function RRHeader() {
    return (
      <header className="rr-header">
        <a className="rr-brand" href="#top" aria-label="Rainbow Rest Stop home">
          <span className="rr-brand-glyph" aria-hidden="true">●</span>
          <span className="rr-brand-wm">Rainbow<br /><span>Rest Stop</span></span>
        </a>
        <div className="rr-header-actions">
          <ReadingModeToggle compact />
          <a className="rr-btn rr-btn-primary" href="#subscribe">Subscribe</a>
        </div>
      </header>
    );
  }
  function Subscribe() {
    const apps = ['Apple Podcasts', 'Spotify', 'Overcast', 'RSS'];
    return (
      <section className="rr-subscribe" id="subscribe">
        <span className="kicker rr-kick">// NEVER MISS A REST STOP</span>
        <h2 className="rr-sub-h">Pull over wherever you listen.</h2>
        <div className="rr-apps">
          {apps.map(a => (
            <a className="rr-app" key={a} href="#">
              <Icon name={a === 'RSS' ? 'rss' : 'mic'} size={18} />{a}
            </a>
          ))}
        </div>
      </section>
    );
  }
  Object.assign(window, { RRHeader, Subscribe });
})();
