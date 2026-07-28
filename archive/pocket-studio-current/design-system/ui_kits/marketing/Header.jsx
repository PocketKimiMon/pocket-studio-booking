/* Marketing — Header: logo + nav + reading-mode toggle + mobile menu */
(function () {
  const { useState } = React;
  function Logo({ size = 30 }) {
    return (
      <a href="#top" className="ps-logo" aria-label="PocketStudio home">
        <span className="ps-mark" aria-hidden="true">P</span>
        <span className="ps-wm" style={{ fontSize: size }}>Pocket<span>Studio</span></span>
      </a>
    );
  }
  function Header() {
    const [open, setOpen] = useState(false);
    const links = [['Work', '#work'], ['Products', '#products'], ['Manifesto', '#manifesto']];
    return (
      <header className="mk-header">
        <div className="mk-header-in">
          <Logo />
          <nav className="mk-nav-desktop" aria-label="Primary">
            {links.map(([t, h]) => <a key={h} href={h}>{t}</a>)}
            <ReadingModeToggle compact />
            <a href="#work" className="mk-btn mk-btn-primary">Work with us</a>
          </nav>
          <button className="mk-burger" aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <Icon name={open ? 'x' : 'menu'} size={24} />
          </button>
        </div>
        {open && (
          <div className="mk-sheet">
            {links.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
            <div className="mk-sheet-row"><ReadingModeToggle /></div>
            <a href="#work" className="mk-btn mk-btn-primary mk-btn-block" onClick={() => setOpen(false)}>Work with us</a>
          </div>
        )}
      </header>
    );
  }
  Object.assign(window, { Header, Logo });
})();
