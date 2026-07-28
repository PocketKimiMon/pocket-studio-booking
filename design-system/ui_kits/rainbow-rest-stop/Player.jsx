/* Rainbow Rest Stop — Player: interactive (fake) audio player */
(function () {
  const { useState, useRef, useEffect } = React;
  const DUR = 3122; // seconds (52:02)
  function fmt(s) { const m = Math.floor(s / 60); const ss = Math.floor(s % 60); return m + ':' + String(ss).padStart(2, '0'); }
  function Player({ ep }) {
    const [playing, setPlaying] = useState(false);
    const [t, setT] = useState(412);
    const barRef = useRef(null);
    useEffect(() => {
      if (!playing) return;
      const id = setInterval(() => setT(x => Math.min(DUR, x + 1)), 1000);
      return () => clearInterval(id);
    }, [playing]);
    function seek(e) {
      const r = barRef.current.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      setT(Math.round(p * DUR));
    }
    const pct = (t / DUR) * 100;
    return (
      <div className="rr-player">
        <div className="rr-player-art" aria-hidden="true">
          <span className="rr-art-rainbow" />
          <span className="rr-art-glyph">●</span>
        </div>
        <div className="rr-player-body">
          <span className="rr-ep-kicker">EP {ep.num} · {ep.date}</span>
          <h2 className="rr-ep-title">{ep.title}</h2>
          <div className="rr-scrub" ref={barRef} onClick={seek} role="slider"
               aria-label="Seek" aria-valuemin={0} aria-valuemax={DUR} aria-valuenow={t}>
            <div className="rr-scrub-track"><div className="rr-scrub-fill" style={{ width: pct + '%' }} /><span className="rr-scrub-thumb" style={{ left: pct + '%' }} /></div>
          </div>
          <div className="rr-times"><span>{fmt(t)}</span><span>-{fmt(DUR - t)}</span></div>
          <div className="rr-controls">
            <button className="rr-ctl" aria-label="Back 15 seconds" onClick={() => setT(x => Math.max(0, x - 15))}>
              <Icon name="arrowLeft" size={20} /><span className="rr-ctl-n">15</span>
            </button>
            <button className="rr-play" onClick={() => setPlaying(p => !p)} aria-label={playing ? 'Pause' : 'Play'}>
              <Icon name={playing ? 'pause' : 'play'} size={26} />
            </button>
            <button className="rr-ctl" aria-label="Forward 30 seconds" onClick={() => setT(x => Math.min(DUR, x + 30))}>
              <Icon name="arrowRight" size={20} /><span className="rr-ctl-n">30</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  window.Player = Player;
})();
