/* Monster Survivor — HUD: timer, level, resources, health/XP bars, abilities */
(function () {
  function Bar({ pct, color, glow, label, sub }) {
    return (
      <div className="ms-bar">
        <div className="ms-bar-track">
          <div className="ms-bar-fill" style={{ width: pct + '%', background: color, boxShadow: glow }} />
        </div>
        <div className="ms-bar-meta"><span>{label}</span><span>{sub}</span></div>
      </div>
    );
  }
  function Chip({ icon, children, color }) {
    return (
      <span className="ms-chip">
        <Icon name={icon} size={16} style={{ color }} />{children}
      </span>
    );
  }
  function HUD({ onPause }) {
    const abilities = [
      { name: 'whip', icon: 'zap', lvl: 5, c: 'var(--lime)' },
      { name: 'aura', icon: 'sparkle', lvl: 3, c: 'var(--cyan)' },
      { name: 'shield', icon: 'shield', lvl: 2, c: 'var(--steel-bright)' },
      { name: 'heart', icon: 'heart', lvl: 1, c: 'var(--coral-bright)' },
    ];
    return (
      <div className="ms-hud">
        <div className="ms-hud-top">
          <div className="ms-resources">
            <Chip icon="sparkle" color="var(--amber)">1,240</Chip>
            <Chip icon="x" color="var(--coral-bright)">312 kills</Chip>
          </div>
          <div className="ms-timer">08:42</div>
          <button className="ms-pause" onClick={onPause} aria-label="Pause"><Icon name="pause" size={20} /></button>
        </div>

        <div className="ms-bars">
          <Bar pct={72} color="var(--coral)" glow="0 0 14px rgba(255,92,92,.6)" label="HP" sub="216 / 300" />
          <Bar pct={48} color="var(--lime)" glow="var(--glow-lime)" label="LVL 7" sub="XP 48%" />
        </div>

        <div className="ms-abilities">
          {abilities.map(a => (
            <div className="ms-ability" key={a.name}>
              <span className="ms-ability-ic" style={{ color: a.c }}><Icon name={a.icon} size={22} /></span>
              <span className="ms-ability-lvl">{a.lvl}</span>
            </div>
          ))}
          <div className="ms-ability ms-ability-empty"><Icon name="plus" size={18} /></div>
        </div>
      </div>
    );
  }
  window.HUD = HUD;
})();
