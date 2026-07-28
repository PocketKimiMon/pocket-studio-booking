/* Marketing — Work CTA + Footer */
(function () {
  function Footer() {
    return (
      <React.Fragment>
        <section className="mk-cta" id="work">
          <div className="mk-cta-in">
            <span className="kicker mk-kick">// WORK WITH US</span>
            <h2 className="mk-cta-h">Got a chaos-to-product idea?<br />Let’s ship the <span className="mk-em">small</span> version first.</h2>
            <p className="lead">Tell us the messy version. We’ll find the lean, profitable cut and build it with you.</p>
            <form className="mk-cta-form" onSubmit={(e) => e.preventDefault()}>
              <input className="mk-input" type="email" placeholder="you@somewhere.gay" aria-label="Your email" />
              <button className="mk-btn mk-btn-primary mk-btn-lg" type="submit">Start the conversation</button>
            </form>
            <p className="mk-fineprint">No funnels, no “synergy.” A real human replies.</p>
          </div>
        </section>
        <footer className="mk-footer">
          <div className="mk-footer-in">
            <Logo size={22} />
            <p className="mk-footer-tag">A queer creative-technology studio. Built for outsiders, in public.</p>
            <div className="mk-footer-links">
              <a href="#products">Products</a>
              <a href="#manifesto">Manifesto</a>
              <a href="#work">Work with us</a>
              <a href="#top">Back to top</a>
            </div>
            <span className="mk-footer-copy">© PocketStudio · clarity over polish, edge over etiquette.</span>
          </div>
        </footer>
      </React.Fragment>
    );
  }
  window.Footer = Footer;
})();
