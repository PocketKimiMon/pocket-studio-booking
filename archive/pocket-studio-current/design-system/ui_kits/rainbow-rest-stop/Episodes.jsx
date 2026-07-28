/* Rainbow Rest Stop — Episode list + Show notes (text-heavy) */
(function () {
  const EPISODES = [
    { num: 41, date: 'May 24', len: '52 min', title: 'The lean version of your big idea', blurb: 'Cutting a chaotic dream down to the one profitable thing you can ship this month.' },
    { num: 40, date: 'May 17', len: '47 min', title: 'Rejection is a redirect (mostly)', blurb: 'On hearing “no” without it taking the whole week from you.' },
    { num: 39, date: 'May 10', len: '58 min', title: 'Building while burnt out', blurb: 'Trauma-informed productivity that doesn’t pretend you’re a machine.' },
    { num: 38, date: 'May 3', len: '44 min', title: 'Pricing for outsiders', blurb: 'Charging money when the world told you that you couldn’t.' },
  ];
  function EpisodeList({ onPlay }) {
    return (
      <section className="rr-section" id="episodes">
        <div className="rr-section-head"><span className="kicker rr-kick">// MORE EPISODES</span><h2 className="rr-h2">The back catalog</h2></div>
        <div className="rr-eps">
          {EPISODES.map(e => (
            <article className="rr-ep" key={e.num}>
              <button className="rr-ep-play" aria-label={'Play episode ' + e.num} onClick={onPlay}><Icon name="play" size={18} /></button>
              <div className="rr-ep-main">
                <span className="rr-ep-meta">EP {e.num} · {e.date} · {e.len}</span>
                <h3>{e.title}</h3>
                <p>{e.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
  function ShowNotes() {
    return (
      <section className="rr-section rr-notes" id="notes">
        <div className="rr-section-head"><span className="kicker rr-kick">// SHOW NOTES</span><h2 className="rr-h2">Episode 41 — show notes</h2></div>
        <div className="rr-tldr">
          <strong>TL;DR</strong>
          <p>Your idea isn’t too big — it’s just un-cut. We walk through finding the smallest version that still pays rent, and why “lean” is a kindness to your future self, not a compromise.</p>
        </div>
        <div className="rr-notes-body">
          <h4>In this episode</h4>
          <ul className="rr-timestamps">
            <li><span className="rr-ts">02:14</span> Why “big” ideas stall — and the cut that frees them</li>
            <li><span className="rr-ts">11:40</span> The one-month profitable slice test</li>
            <li><span className="rr-ts">24:08</span> A listener’s chaos-to-product story</li>
            <li><span className="rr-ts">38:52</span> Charging money without flinching</li>
            <li><span className="rr-ts">47:30</span> Soft landing: this week’s rest stop</li>
          </ul>
          <h4>From the conversation</h4>
          <blockquote className="rr-quote">“Lean isn’t the small, sad version of your dream. It’s the part of the dream that survives contact with a Tuesday.”</blockquote>
          <p>We get into the difference between shrinking an idea and <em>focusing</em> it — and why the version you can actually finish beats the version you keep describing. Plenty of plain-language steps, no hustle-grind sermon.</p>
        </div>
      </section>
    );
  }
  Object.assign(window, { EpisodeList, ShowNotes });
})();
