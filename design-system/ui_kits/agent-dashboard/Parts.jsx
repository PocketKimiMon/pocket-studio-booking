/* Agent Dashboard — small parts: StatusDot, badges, cards, rows, skeleton, empty */
(function () {
  const STATUS = {
    running: ['Running', 'var(--lime)'],
    paused:  ['Paused', 'var(--amber)'],
    failed:  ['Failed', 'var(--coral)'],
    idle:    ['Idle', 'var(--cyan)'],
  };
  function StatusBadge({ status }) {
    const [label, c] = STATUS[status] || STATUS.idle;
    return (
      <span className="ad-badge" style={{ color: c, background: `color-mix(in oklab, ${c} 16%, transparent)` }}>
        <span className="ad-dot" style={{ background: c, boxShadow: status === 'running' ? `0 0 8px ${c}` : 'none' }} />
        {label}
      </span>
    );
  }
  function StatCard({ icon, label, value, accent }) {
    return (
      <div className="ad-stat">
        <span className="ad-stat-ic" style={{ color: accent }}><Icon name={icon} size={20} /></span>
        <span className="ad-stat-val">{value}</span>
        <span className="ad-stat-lbl">{label}</span>
      </div>
    );
  }
  function AgentCard({ agent, onClick }) {
    return (
      <button className={'ad-agent' + (agent.live ? ' ad-agent-live' : '')} onClick={onClick}>
        <div className="ad-agent-top">
          <span className="ad-agent-ic" style={{ color: agent.color }}><Icon name={agent.icon} size={22} /></span>
          <StatusBadge status={agent.status} />
        </div>
        <h3 className="ad-agent-name">{agent.name}</h3>
        <p className="ad-agent-desc">{agent.desc}</p>
        <div className="ad-agent-foot">
          <span className="ad-meta"><Icon name="clock" size={14} /> every {agent.every}</span>
          <span className="ad-meta"><Icon name="activity" size={14} /> {agent.runs} runs</span>
        </div>
      </button>
    );
  }
  function RunRow({ run }) {
    const [, c] = ({ ok: ['', 'var(--lime)'], failed: ['', 'var(--coral)'], running: ['', 'var(--cyan)'] })[run.state];
    return (
      <div className="ad-run">
        <span className="ad-run-dot" style={{ background: c }} />
        <div className="ad-run-main">
          <span className="ad-run-title">{run.title}</span>
          <span className="ad-run-sub">{run.when} · {run.dur}</span>
        </div>
        <span className="ad-run-state" style={{ color: c }}>{run.state === 'ok' ? 'Success' : run.state === 'failed' ? 'Failed' : 'Running'}</span>
      </div>
    );
  }
  function Skeleton({ w = '100%', h = 12, r = 6, style }) {
    return <div className="ad-sk" style={{ width: w, height: h, borderRadius: r, ...style }} />;
  }
  function EmptyState({ icon = 'sparkle', title, body, cta, onCta }) {
    return (
      <div className="ad-empty">
        <span className="ad-empty-ic"><Icon name={icon} size={26} /></span>
        <h3>{title}</h3>
        <p>{body}</p>
        {cta && <button className="ad-btn ad-btn-primary" onClick={onCta}>{cta}</button>}
      </div>
    );
  }
  Object.assign(window, { StatusBadge, StatCard, AgentCard, RunRow, Skeleton, EmptyState });
})();
