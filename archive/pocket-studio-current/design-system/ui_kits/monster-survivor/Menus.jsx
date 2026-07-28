/* Monster Survivor — Menus: Title, Level-up (text-heavy), Pause */
(function () {
  function TitleScreen({ onPlay }) {
    return (
      <div className="ms-screen ms-title">
        <span className="ms-kicker">▲ POCKETSTUDIO ARCADE</span>
        <h1 className="ms-title-h">Monster<br /><span>Survivor</span></h1>
        <p className="ms-title-tag">Outlast the swarm. Clear a run on your lunch break.</p>
        <div className="ms-title-actions">
          <button className="ms-btn ms-btn-go" onClick={onPlay}><Icon name="play" size={20} /> Start a run</button>
          <button className="ms-btn ms-btn-ghost">Characters</button>
        </div>
        <div className="ms-title-foot">
          <span className="ms-meta">Best: 18:24</span>
          <span className="ms-meta">Coins: 4,120</span>
        </div>
      </div>
    );
  }

  const UPGRADES = [
    { icon: 'zap', name: 'Static Whip', tier: 'Common', c: 'var(--lime)', tierC: 'var(--fg2)',
      desc: 'Lash everything in front of you. +20% damage and a wider arc. Your bread-and-butter clear tool.', pips: 5 },
    { icon: 'sparkle', name: 'Glitter Aura', tier: 'Rare', c: 'var(--cyan)', tierC: 'var(--cyan)',
      desc: 'A ring of damage hugs you at all times. Great for panic moments when the swarm closes in.', pips: 3 },
    { icon: 'heart', name: 'Soft Landing', tier: 'Epic', c: 'var(--amber-bright)', tierC: 'var(--amber-bright)',
      desc: 'Heal 8% on level-up and shrug off the next hit each wave. Built for outlasting, not flexing.', pips: 1 },
  ];
  function LevelUpMenu({ onPick }) {
    return (
      <div className="ms-screen ms-levelup">
        <div className="ms-levelup-head">
          <span className="ms-kicker" style={{ color: 'var(--lime)' }}>✦ LEVEL UP — PICK ONE</span>
          <h2 className="ms-levelup-h">You hit level 7. Choose your upgrade.</h2>
        </div>
        <div className="ms-cards">
          {UPGRADES.map(u => (
            <button className="ms-card" key={u.name} onClick={onPick}>
              <div className="ms-card-top">
                <span className="ms-card-ic" style={{ color: u.c }}><Icon name={u.icon} size={26} /></span>
                <span className="ms-card-tier" style={{ color: u.tierC }}>{u.tier}</span>
              </div>
              <h3 className="ms-card-name">{u.name}</h3>
              <p className="ms-card-desc">{u.desc}</p>
              <div className="ms-pips">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="ms-pip" style={{ background: i < u.pips ? u.c : 'var(--ink-600)' }} />
                ))}
              </div>
            </button>
          ))}
        </div>
        <button className="ms-skip" onClick={onPick}>Skip for 30 coins</button>
      </div>
    );
  }

  function PauseMenu({ onResume, onQuit }) {
    return (
      <div className="ms-screen ms-pause-screen">
        <div className="ms-pause-card">
          <span className="ms-kicker">‖ PAUSED</span>
          <h2 className="ms-pause-h">Take a breath. The swarm can wait.</h2>
          <div className="ms-settings">
            <div className="ms-setting">
              <div><strong>Reading mode</strong><span>OpenDyslexic for menus &amp; upgrade text.</span></div>
              <ReadingModeToggle />
            </div>
            <div className="ms-setting">
              <div><strong>Sound</strong><span>Music + SFX</span></div>
              <span className="ms-toggle-pill ms-on">On</span>
            </div>
            <div className="ms-setting">
              <div><strong>Screen shake</strong><span>Juice on big hits</span></div>
              <span className="ms-toggle-pill ms-on">Low</span>
            </div>
          </div>
          <div className="ms-pause-actions">
            <button className="ms-btn ms-btn-go ms-btn-block" onClick={onResume}><Icon name="play" size={18} /> Resume</button>
            <button className="ms-btn ms-btn-ghost ms-btn-block" onClick={onQuit}>Quit to title</button>
          </div>
        </div>
      </div>
    );
  }

  Object.assign(window, { TitleScreen, LevelUpMenu, PauseMenu });
})();
