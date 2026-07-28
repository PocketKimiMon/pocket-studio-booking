/* Agent Dashboard — data + screens */
(function () {
  const { useState } = React;

  const AGENTS = [
    { id: 'triage', name: 'Inbox triage bot', desc: 'Sorts & labels new mail. Quiet, dependable, low-stakes.', icon: 'bot', color: 'var(--cyan)', status: 'running', every: '15 min', runs: 1284 },
    { id: 'lead', name: 'Lead scorer', desc: 'Scores inbound leads and nudges the warm ones.', icon: 'zap', color: 'var(--oxblood-bright)', status: 'running', every: '5 min', runs: 642, live: true },
    { id: 'standup', name: 'Standup digest', desc: 'Summarizes yesterday into one calm morning note.', icon: 'activity', color: 'var(--amber)', status: 'paused', every: 'daily', runs: 96 },
    { id: 'invoice', name: 'Invoice chaser', desc: 'Politely follows up on overdue invoices.', icon: 'clock', color: 'var(--coral-bright)', status: 'failed', every: '6 hr', runs: 211 },
  ];
  const RUNS = [
    { title: 'Triaged 38 messages', when: '2 min ago', dur: '1.2s', state: 'ok' },
    { title: 'Scored 12 new leads', when: '5 min ago', dur: '0.8s', state: 'ok' },
    { title: 'Chase: 3 invoices', when: '14 min ago', dur: '—', state: 'failed' },
    { title: 'Triaged 21 messages', when: '17 min ago', dur: '1.0s', state: 'ok' },
    { title: 'Scoring batch', when: 'now', dur: 'running', state: 'running' },
  ];

  function Overview({ go }) {
    return (
      <div className="ad-screen">
        <div className="ad-tldr">
          <span className="kicker">// TODAY</span>
          <p>3 agents running, 1 needs you. Everything else is handled.</p>
        </div>
        <div className="ad-stats">
          <StatCard icon="activity" label="Runs today" value="312" accent="var(--cyan)" />
          <StatCard icon="check" label="Success rate" value="98%" accent="var(--lime)" />
          <StatCard icon="zap" label="Active agents" value="3" accent="var(--steel-bright)" />
          <StatCard icon="clock" label="Saved / wk" value="11h" accent="var(--amber)" />
        </div>
        <div className="ad-block">
          <div className="ad-block-head"><h2>Needs you</h2></div>
          <div className="ad-attention">
            <span className="ad-attention-ic"><Icon name="bell" size={18} /></span>
            <div className="ad-attention-main">
              <strong>Invoice chaser failed</strong>
              <span>Webhook returned 500. Not your fault — retry or check the URL.</span>
            </div>
            <button className="ad-btn ad-btn-ghost ad-btn-sm">Fix</button>
          </div>
        </div>
        <div className="ad-block">
          <div className="ad-block-head"><h2>Recent runs</h2><a className="ad-link">View all</a></div>
          <div className="ad-runs">{RUNS.map((r, i) => <RunRow key={i} run={r} />)}</div>
        </div>
      </div>
    );
  }

  function Agents({ openAgent, openCreate, loading }) {
    if (loading) {
      return (
        <div className="ad-screen">
          <div className="ad-agents">
            {[0,1,2,3].map(i => (
              <div className="ad-agent" key={i}>
                <div className="ad-agent-top"><Skeleton w={44} h={44} r={12} /><Skeleton w={70} h={22} r={999} /></div>
                <Skeleton w="60%" h={16} style={{ marginTop: 12 }} />
                <Skeleton w="90%" h={11} style={{ marginTop: 10 }} />
                <Skeleton w="40%" h={11} style={{ marginTop: 8 }} />
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="ad-screen">
        <div className="ad-screen-head">
          <div><span className="kicker">// {AGENTS.length} AGENTS</span><h1>Your agents</h1></div>
          <button className="ad-btn ad-btn-primary" onClick={openCreate}><Icon name="plus" size={18} /> New agent</button>
        </div>
        <div className="ad-agents">
          {AGENTS.map(a => <AgentCard key={a.id} agent={a} onClick={() => openAgent(a)} />)}
        </div>
      </div>
    );
  }

  function AgentDetail({ agent, back }) {
    const [paused, setPaused] = useState(agent.status === 'paused');
    return (
      <div className="ad-screen">
        <button className="ad-back" onClick={back}><Icon name="arrowLeft" size={18} /> All agents</button>
        <div className="ad-detail-head">
          <span className="ad-agent-ic ad-detail-ic" style={{ color: agent.color }}><Icon name={agent.icon} size={28} /></span>
          <div className="ad-detail-meta">
            <h1>{agent.name}</h1>
            <p>{agent.desc}</p>
          </div>
        </div>
        <div className="ad-detail-actions">
          <button className={'ad-btn ' + (paused ? 'ad-btn-primary' : 'ad-btn-ghost')} onClick={() => setPaused(p => !p)}>
            <Icon name={paused ? 'play' : 'pause'} size={18} /> {paused ? 'Resume' : 'Pause'}
          </button>
          <button className="ad-btn ad-btn-ghost">Edit</button>
          <button className="ad-btn ad-btn-ghost ad-btn-danger">Delete</button>
        </div>
        <div className="ad-stats ad-stats-3">
          <StatCard icon="activity" label="Total runs" value={agent.runs} accent="var(--cyan)" />
          <StatCard icon="clock" label="Every" value={agent.every} accent="var(--amber)" />
          <StatCard icon="check" label="Success" value="98%" accent="var(--lime)" />
        </div>
        <div className="ad-block">
          <div className="ad-block-head"><h2>Run history</h2></div>
          <div className="ad-runs">{RUNS.map((r, i) => <RunRow key={i} run={r} />)}</div>
        </div>
      </div>
    );
  }

  function Settings() {
    return (
      <div className="ad-screen">
        <div className="ad-screen-head"><div><span className="kicker">// YOU</span><h1>Settings</h1></div></div>
        <div className="ad-settings">
          <div className="ad-setting">
            <div><strong>Dyslexia reading mode</strong><span>OpenDyslexic + roomier spacing. Your preference, saved on this device.</span></div>
            <ReadingModeToggle />
          </div>
          <div className="ad-setting">
            <div><strong>Notifications</strong><span>Ping me only when an agent needs a human.</span></div>
            <span className="ad-pill-on">On</span>
          </div>
          <div className="ad-setting">
            <div><strong>Theme</strong><span>Ink (dark). Paper coming soon.</span></div>
            <span className="ad-pill">Ink</span>
          </div>
        </div>
      </div>
    );
  }

  function CreateSheet({ open, close }) {
    const [step, setStep] = useState(0);
    if (!open) return null;
    return (
      <div className="ad-modal" onClick={close}>
        <div className="ad-sheet" onClick={e => e.stopPropagation()}>
          <div className="ad-sheet-head">
            <h2>{step === 0 ? 'New agent' : 'Almost there'}</h2>
            <button className="ad-iconbtn" onClick={close} aria-label="Close"><Icon name="x" size={20} /></button>
          </div>
          {step === 0 ? (
            <div className="ad-form">
              <label className="ad-field"><span>What should it do?</span>
                <input className="ad-input" placeholder="Sort my inbox every 15 minutes" /></label>
              <label className="ad-field"><span>Name it</span>
                <input className="ad-input" placeholder="Inbox triage bot" /></label>
              <p className="ad-hint">You can change all of this later. Nothing is permanent.</p>
            </div>
          ) : (
            <div className="ad-form">
              <label className="ad-field"><span>Run every</span>
                <input className="ad-input" defaultValue="15 minutes" /></label>
              <div className="ad-confirm"><Icon name="sparkle" size={18} /> Ready to spin up. It’ll start paused so you can watch the first run.</div>
            </div>
          )}
          <div className="ad-sheet-foot">
            {step === 1 && <button className="ad-btn ad-btn-ghost" onClick={() => setStep(0)}>Back</button>}
            <button className="ad-btn ad-btn-primary ad-btn-block" onClick={() => step === 0 ? setStep(1) : close()}>
              {step === 0 ? 'Next' : 'Create agent'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  Object.assign(window, { Overview, Agents, AgentDetail, Settings, CreateSheet });
})();
