/* Agent Dashboard — shell chrome: sidebar (desktop) + bottom-tab (mobile) + topbar */
(function () {
  const TABS = [
    ['home', 'Home', 'home'],
    ['agents', 'Agents', 'grid'],
    ['runs', 'Runs', 'chart'],
    ['you', 'You', 'user'],
  ];
  function Brand() {
    return (
      <div className="ad-brand">
        <span className="ps-mark" aria-hidden="true">P</span>
        <span className="ad-brand-wm">Pocket<span>Studio</span></span>
      </div>
    );
  }
  function Sidebar({ tab, setTab }) {
    return (
      <aside className="ad-sidebar">
        <Brand />
        <nav className="ad-side-nav" aria-label="Primary">
          {TABS.map(([id, label, icon]) => (
            <button key={id} className={'ad-side-link' + (tab === id ? ' active' : '')} onClick={() => setTab(id)}>
              <Icon name={icon} size={20} /> <span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="ad-side-foot">
          <ReadingModeToggle />
        </div>
      </aside>
    );
  }
  function BottomTab({ tab, setTab }) {
    return (
      <nav className="ad-bottomtab" aria-label="Primary">
        {TABS.map(([id, label, icon]) => (
          <button key={id} className={'ad-tab' + (tab === id ? ' active' : '')} onClick={() => setTab(id)} aria-current={tab === id}>
            <Icon name={icon} size={24} /><span>{label}</span>
          </button>
        ))}
      </nav>
    );
  }
  function TopBar({ title, onCreate }) {
    return (
      <header className="ad-topbar">
        <span className="ad-topbar-title">{title}</span>
        <div className="ad-topbar-actions">
          <button className="ad-iconbtn" aria-label="Notifications"><Icon name="bell" size={20} /><span className="ad-notif-dot" /></button>
          <button className="ad-iconbtn ad-create-sm" aria-label="New agent" onClick={onCreate}><Icon name="plus" size={20} /></button>
        </div>
      </header>
    );
  }
  Object.assign(window, { Sidebar, BottomTab, TopBar });
})();
