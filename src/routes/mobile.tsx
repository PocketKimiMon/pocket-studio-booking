import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";

export const Route = createFileRoute("/mobile")({
  component: PocketStudio,
});

const styles = `
:root{--bone:#F3ECDE;--void:#120E17;--lime:#FF6A00;--flush:#E85D04;--violet:#0FA3A3;--aqua:#5FF0C8;--ash:#6F6878;--mist:#5A5460}
*{box-sizing:border-box}
.ps{background:var(--bone);color:var(--void);font-family:'Inter',system-ui,sans-serif;font-weight:400;line-height:1.55;min-height:100vh;overflow-x:hidden}
.ps a{color:var(--violet);text-decoration:none}
.ps a:hover{text-decoration:underline}
.ps .mono{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase}
.ps .serif{font-family:'Bricolage Grotesque',serif;font-weight:600;letter-spacing:-.02em}
.ps .hand{font-family:'Caveat',cursive;font-weight:600}
.ps .wrap{max-width:1100px;margin:0 auto;padding:0 22px}

/* top bar */
.ps-top{position:sticky;top:0;z-index:50;background:rgba(243,236,222,.88);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid rgba(18,14,23,.12)}
.ps-top-inner{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 22px;max-width:1100px;margin:0 auto}
.ps-avail{display:flex;align-items:center;gap:8px;min-width:0}
.ps-avail .mono{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ps-dot{width:8px;height:8px;border-radius:50%;background:var(--lime);position:relative;flex-shrink:0}
.ps-dot::after{content:'';position:absolute;inset:0;border-radius:50%;background:var(--lime);animation:ps-pulse 2.2s infinite ease-out}
@keyframes ps-pulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(3.5);opacity:0}}
.ps-top-right{display:flex;align-items:center;gap:10px;flex-shrink:0}
.ps-top-right a.tel{color:var(--void);font-weight:600;font-size:13px}
.ps-btn{display:inline-block;background:var(--lime);color:var(--void);font-weight:700;padding:9px 16px;border-radius:999px;font-size:13px;border:1.5px solid var(--void);box-shadow:2px 2px 0 var(--void);transition:transform .12s ease,box-shadow .12s ease}
.ps-btn:hover{text-decoration:none;transform:translate(-1px,-1px);box-shadow:3px 3px 0 var(--void)}

/* hero */
.ps-hero{padding:44px 0 30px;position:relative}
.ps-scissors{filter:drop-shadow(3px 3px 0 rgba(18,14,23,.18));margin-bottom:18px}
.ps-kicker{color:var(--mist);margin-bottom:14px}
.ps-word{font-family:'Bricolage Grotesque',serif;font-weight:750;font-size:clamp(42px,9vw,96px);line-height:.95;letter-spacing:-.03em;margin:0 0 18px}
.ps-word span.hl{background:var(--lime);padding:.02em .08em .04em;border-radius:.08em;box-shadow:3px 3px 0 var(--void);display:inline-block}
.ps-tag{font-family:'Bricolage Grotesque',serif;font-weight:500;font-size:clamp(18px,2.6vw,24px);line-height:1.35;max-width:640px;color:var(--void);margin:0 0 26px}
.ps-promo{position:relative;border:2px solid var(--void);background:var(--lime);border-radius:16px;box-shadow:7px 7px 0 var(--void);padding:22px 24px;max-width:560px;overflow:hidden}
.ps-promo .blob{position:absolute;top:-30px;left:-30px;width:120px;height:120px;background:#a8e030;border-radius:50%;filter:blur(20px);opacity:.6;pointer-events:none}
.ps-promo .arrow{position:absolute;top:8px;right:14px;font-family:'Caveat',cursive;font-size:36px;font-weight:700;color:var(--void);transform:rotate(15deg)}
.ps-promo .k{color:var(--void);font-weight:600;margin-bottom:6px;position:relative}
.ps-promo h3{font-family:'Bricolage Grotesque',serif;font-weight:600;font-size:22px;margin:0 0 8px;position:relative}
.ps-promo p{margin:0;font-size:14.5px;position:relative;max-width:420px}

/* notice bands */
.ps-band{border-radius:12px;padding:16px 20px;margin:16px 0;font-size:15px}
.ps-band b{font-weight:700}
.ps-band.violet{border:1.5px solid rgba(15,163,163,.35);border-left:4px solid var(--violet);background:rgba(95,240,200,.22)}
.ps-band.flush{border:1.5px solid rgba(232,93,4,.3);border-left:4px solid var(--flush);background:rgba(232,93,4,.07)}

/* marquee */
.ps-marquee{overflow:hidden;border-top:1.5px solid var(--void);border-bottom:1.5px solid var(--void);background:var(--void);color:var(--bone);margin:36px 0}
.ps-marquee-track{display:flex;white-space:nowrap;animation:ps-scroll 28s linear infinite;padding:12px 0;gap:40px}
.ps-marquee-track span{font-family:'Bricolage Grotesque',serif;font-weight:600;font-size:22px;letter-spacing:-.01em}
.ps-marquee-track span::after{content:'✦';color:var(--lime);margin-left:40px}
@keyframes ps-scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

/* section headers */
.ps-section{padding:36px 0}
.ps-shead{display:flex;align-items:baseline;gap:14px;margin-bottom:24px}
.ps-shead .num{font-family:'IBM Plex Mono',monospace;color:var(--flush);font-size:14px;font-weight:600}
.ps-shead h2{font-family:'Bricolage Grotesque',serif;font-weight:600;font-size:clamp(28px,5vw,42px);letter-spacing:-.02em;margin:0}

/* about */
.ps-about{display:grid;grid-template-columns:1.2fr .85fr;gap:32px}
@media(max-width:760px){.ps-about{grid-template-columns:1fr}}
.ps-about .lede{font-family:'Bricolage Grotesque',serif;font-weight:500;font-size:clamp(19px,2.4vw,22px);line-height:1.4;margin:0 0 14px}
.ps-about p{color:var(--mist);font-size:15.5px;margin:0 0 12px}
.ps-darkcard{background:var(--void);color:var(--bone);border:2px solid var(--void);border-radius:16px;box-shadow:7px 7px 0 var(--lime);padding:26px;position:relative}
.ps-darkcard h3{font-family:'Bricolage Grotesque',serif;font-weight:600;font-size:22px;margin:0 0 14px;color:var(--bone)}
.ps-darkcard ul{list-style:none;padding:0;margin:0}
.ps-darkcard li{position:relative;padding-left:22px;margin:8px 0;font-size:15px;color:#e7dfcf}
.ps-darkcard li::before{content:'✦';position:absolute;left:0;color:var(--lime);font-weight:700}
.ps-darkcard .heart{position:absolute;bottom:14px;right:20px;font-family:'Caveat',cursive;font-size:34px;color:var(--flush);transform:rotate(-8deg)}

/* services */
.ps-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px}
.ps-card{background:#fff;border:1.5px solid rgba(18,14,23,.14);border-radius:16px;padding:24px;position:relative;transition:transform .15s ease,box-shadow .15s ease,border-color .15s ease;overflow:hidden}
.ps-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--accent,var(--lime))}
.ps-card:hover{transform:translateY(-4px);border-color:var(--void);box-shadow:6px 6px 0 var(--void)}
.ps-card:focus-within{outline:3px solid var(--violet);outline-offset:3px}
.ps-card h3{font-family:'Bricolage Grotesque',serif;font-weight:600;font-size:20px;margin:0 0 4px}
.ps-card .time{font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:var(--ash);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px}
.ps-card p{margin:0 0 14px;color:var(--mist);font-size:14.5px}
.ps-tag-pill{display:inline-block;font-family:'IBM Plex Mono',monospace;font-size:10.5px;font-weight:600;padding:5px 10px;border-radius:999px;letter-spacing:.08em;text-transform:uppercase;background:var(--void);color:var(--bone)}
.ps-tag-pill.violet{background:var(--violet);color:#fff}
.ps-tag-pill.lime{background:var(--lime);color:var(--void)}
.ps-sticker{position:absolute;top:-10px;right:-10px;background:var(--flush);color:#fff;font-family:'Caveat',cursive;font-weight:700;font-size:18px;padding:6px 12px;border-radius:999px;border:1.5px solid var(--void);box-shadow:3px 3px 0 var(--void);z-index:2}

/* policies */
.ps-pcard{background:#fff;border:1.5px solid rgba(18,14,23,.14);border-radius:14px;padding:20px;transition:transform .15s ease,box-shadow .15s ease,border-color .15s ease}
.ps-pcard:hover{transform:translateY(-2px);border-color:var(--void);box-shadow:4px 4px 0 var(--void)}
.ps-pcard h4{font-family:'Bricolage Grotesque',serif;font-weight:600;font-size:17px;margin:0 0 6px}
.ps-pcard p{margin:0;font-size:14px;color:var(--mist)}
.ps-pcard .n{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--flush);margin-bottom:6px}

/* updates */
.ps-post{background:#fff;border:1.5px solid rgba(18,14,23,.14);border-radius:16px;padding:22px 24px;margin-bottom:14px;box-shadow:2px 2px 0 rgba(18,14,23,.08);transition:box-shadow .15s ease}
.ps-post:hover{box-shadow:5px 5px 0 var(--void)}
.ps-post .date{font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--ash);text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px}
.ps-post h4{font-family:'Bricolage Grotesque',serif;font-weight:600;font-size:20px;margin:0 0 6px}
.ps-post p{margin:0 0 8px;color:var(--mist);font-size:14.5px}
.ps-post .lnk{font-family:'Caveat',cursive;font-weight:700;font-size:20px;color:var(--violet)}

/* book */
.ps-embed{position:relative;border:2px solid var(--void);border-radius:16px;overflow:hidden;min-height:700px;box-shadow:6px 6px 0 var(--void);background:#fff}
.ps-embed iframe{width:100%;min-height:700px;border:0;display:block}
.ps-loading{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:#fff;z-index:1}
.ps-loading.hidden{display:none}
.ps-spinner{width:32px;height:32px;border-radius:50%;border:2px solid rgba(18,14,23,.14);border-top-color:var(--lime);animation:ps-spin 1s linear infinite}
@keyframes ps-spin{to{transform:rotate(360deg)}}
.ps-book-terms{margin-top:14px;font-size:13px;color:var(--mist);line-height:1.5}

/* footer */
.ps-footer{border-top:1px solid rgba(18,14,23,.15);margin-top:48px;padding:32px 0 40px}
.ps-footer-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
@media(max-width:600px){.ps-footer-grid{grid-template-columns:1fr}}
.ps-footer h5{font-family:'Bricolage Grotesque',serif;font-weight:600;font-size:20px;margin:0 0 6px}
.ps-footer p,.ps-footer a{font-size:14px;color:var(--mist)}
.ps-footer a{display:block;margin:2px 0}
.ps-copy{margin-top:24px;padding-top:16px;border-top:1px dashed rgba(18,14,23,.2);color:var(--ash)}
`;

function Scissors() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="14" cy="44" r="8" stroke="#120E17" strokeWidth="2.5" fill="#F3ECDE"/>
      <circle cx="46" cy="44" r="8" stroke="#120E17" strokeWidth="2.5" fill="#F3ECDE"/>
      <path d="M20 38 L52 8 M40 38 L8 8" stroke="#120E17" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="30" cy="30" r="2" fill="#FF6A00"/>
    </svg>
  );
}

const services = [
  { name: "Buzz Cut", time: "30 MIN · $50", desc: "Clean fade or one-length buzz. In and out, sharp.", accent: "var(--lime)", tag: null },
  { name: "Short Cut", time: "45 MIN · $65", desc: "Scissor + clipper work. Shape, texture, done right.", accent: "var(--flush)", tag: null },
  { name: "Long Cut", time: "60 MIN · $100", desc: "Long layers, curtain bangs, wolf cuts, shags. Bring inspo.", accent: "var(--violet)", tag: null },
  { name: "New-Client Color Consult", time: "45 MIN · $35", desc: "Sit down, talk hair history, plan the vibe. Applied to your first color booking.", accent: "var(--violet)", tag: { label: "NEW CLIENTS", cls: "violet" } },
  { name: "Existing-Client Color", time: "90–120 MIN · $120+", desc: "Root touch-ups, gloss, lift, tone, and creative color for people I already know.", accent: "var(--lime)", tag: { label: "2+ DAYS OUT = TEA + GOODS", cls: "lime" } },
  { name: "Add-on: Tea + Product Recs", time: "FREE · WITH 2+ DAY BOOKINGS", desc: "Book 2+ days ahead and get tea in-service plus real product recs for your hair.", accent: "var(--flush)", tag: null },
];

const policies = [
  { n: "01", h: "Cancellation", p: "24-hour notice required. Genuine emergencies excepted — text or call as soon as you can." },
  { n: "02", h: "No-show", p: "Miss without notice and the full quoted price may be charged. Repeat no-shows are refused future bookings." },
  { n: "03", h: "2-Hour Verify", p: "You'll get a check-in text about 2 hours before. No response = slot released. Reply to hold your spot." },
  { n: "04", h: "House Calls", p: "Seattle area only. Clean, private-ish, safe workspace required. Pets secured if we haven't met them." },
];

const posts = [
  { date: "JUL 12, 2026", h: "Now taking former Rudy's clients", p: "If we used to work together at Rudy's, come on over. Same hands, better tea, your couch." },
  { date: "JUN 28, 2026", h: "Summer color slots open", p: "Rolling one-month calendar. Book 2+ days out for the full tea + goods experience." },
  { date: "JUN 05, 2026", h: "Why house calls, actually", p: "Fewer salon costs, more of your money into the actual work. And you don't have to leave the couch." },
];

function PocketStudio() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIframeLoaded(true), 6000);
    return () => clearTimeout(t);
  }, []);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="ps">
        <div className="ps-top">
          <div className="ps-top-inner">
            <div className="ps-avail">
              <span className="ps-dot" />
              <span className="mono">AVAILABLE FOR BOOKINGS</span>
            </div>
            <div className="ps-top-right">
              <a href="tel:425-918-2029" className="tel">425-918-2029</a>
              <a href="#book" className="ps-btn">BOOK NOW</a>
            </div>
          </div>
        </div>

        <main className="wrap">
          <section className="ps-hero">
            <div className="ps-scissors"><Scissors /></div>
            <div className="mono ps-kicker">SEATTLE HAIR ARTIST · HOUSE CALLS · FORMER RUDY'S CLIENTS WELCOME</div>
            <h1 className="ps-word">POCKET / <span className="hl">STUDIO</span></h1>
            <p className="ps-tag">Cuts &amp; color at your place.<br/>Bold looks, zero salon attitude.</p>
            <div className="ps-promo">
              <div className="blob" />
              <div className="arrow">→</div>
              <div className="mono k">CURRENT OFFER</div>
              <h3>Refer a friend, both get 20% off your next cut.</h3>
              <p>Send someone new my way. When they book &amp; sit, you both get 20% off your next appointments. No limit — keep 'em coming.</p>
            </div>
          </section>

          <section className="ps-band violet">
            <b>Booking runs on Cal.com.</b> Calendar opens about one month at a time and needs at least 2 days' notice. Deposits or card-on-file may be enabled — disclosed at checkout if so.
          </section>
          <section className="ps-band flush">
            <b>House calls, Seattle area only.</b> I'll need a safe, reasonably private workspace and an accurate address. I may decline or end a visit if the location isn't safe or suitable for professional service.
          </section>
        </main>

        <div className="ps-marquee" aria-hidden>
          <div className="ps-marquee-track">
            <span>POCKET STUDIO</span><span>SEATTLE HAIR</span><span>HOUSE CALLS</span><span>CUTS &amp; COLOR</span>
            <span>POCKET STUDIO</span><span>SEATTLE HAIR</span><span>HOUSE CALLS</span><span>CUTS &amp; COLOR</span>
          </div>
        </div>

        <main className="wrap">
          <section className="ps-section" id="about">
            <div className="ps-shead"><span className="num">00</span><h2>About</h2></div>
            <div className="ps-about">
              <div>
                <p className="lede">Hi, I'm MyKey. I cut and color hair in Seattle out of a mobile setup — your kitchen, your bathroom, your patio, whatever works.</p>
                <p>I worked the salon floor for years, most recently at Rudy's, and I loved the people and hated the overhead. Pocket Studio is what happened when I decided clients should pay for the actual work, not for someone else's rent.</p>
                <p>Expect real conversation, honest recommendations, tea if you're around long enough, and a cut that fits how you actually live — not how your stylist wants to Instagram it.</p>
              </div>
              <div className="ps-darkcard">
                <h3>Why Pocket Studio?</h3>
                <ul>
                  <li>Salon-trained, salon-free pricing</li>
                  <li>Your space, your music, your rules</li>
                  <li>Real color consults, not upsells</li>
                  <li>Tea + product recs on longer bookings</li>
                  <li>Ex-Rudy's clients — you already know</li>
                </ul>
                <div className="heart">♡ seattle</div>
              </div>
            </div>
          </section>

          <section className="ps-section" id="services">
            <div className="ps-shead"><span className="num">01</span><h2>Services + Pricing</h2></div>
            <div className="ps-grid">
              {services.map((s, i) => (
                <div className="ps-card" key={s.name} style={{ ["--accent" as string]: s.accent } as CSSProperties}>
                  {i === 4 && <div className="ps-sticker" style={{ transform: "rotate(-3deg)" }}>tea + goods!</div>}
                  <h3>{s.name}</h3>
                  <div className="time">{s.time}</div>
                  <p>{s.desc}</p>
                  {s.tag ? <span className={`ps-tag-pill ${s.tag.cls}`}>{s.tag.label}</span> : <a href="#book" className="ps-tag-pill">BOOK</a>}
                </div>
              ))}
            </div>
          </section>

          <section className="ps-section" id="policies">
            <div className="ps-shead"><span className="num">02</span><h2>Policies</h2></div>
            <div className="ps-grid">
              {policies.map(p => (
                <div className="ps-pcard" key={p.h}>
                  <div className="n">{p.n}</div>
                  <h4>{p.h}</h4>
                  <p>{p.p}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="ps-section" id="updates">
            <div className="ps-shead"><span className="num">03</span><h2>Updates</h2></div>
            <div>
              {posts.map(p => (
                <article className="ps-post" key={p.h}>
                  <div className="date">{p.date}</div>
                  <h4>{p.h}</h4>
                  <p>{p.p}</p>
                  <span className="lnk">read more →</span>
                </article>
              ))}
            </div>
          </section>

          <section className="ps-section" id="book">
            <div className="ps-shead"><span className="num">04</span><h2>Book</h2></div>
            <div className="ps-embed">
              <div className={`ps-loading ${iframeLoaded ? "hidden" : ""}`}>
                <div className="ps-spinner" />
                <div className="mono" style={{ color: "var(--ash)" }}>LOADING CALENDAR…</div>
              </div>
              <iframe
                src="https://cal.com/maneautoimation/"
                title="Book with Pocket Studio on Cal.com"
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
              />
            </div>
            <p className="ps-book-terms">
              by booking you agree to the <a href="/terms">terms of service</a> and <a href="/privacy">privacy policy</a>, including the 24-hour cancel rule, no-show charge, SMS/email reminders, and house-call terms. booking runs on cal.com.
            </p>
          </section>
        </main>

        <footer className="ps-footer">
          <div className="wrap">
            <div className="ps-footer-grid">
              <div>
                <h5>Pocket Studio</h5>
                <p>Seattle hair artist. House calls. Cuts &amp; color at your place.</p>
              </div>
              <div>
                <h5>Contact</h5>
                <a href="mailto:mykeypocket@icloud.com">mykeypocket@icloud.com</a>
                <a href="tel:425-918-2029">425-918-2029</a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="/terms">Terms</a>
                <a href="/privacy">Privacy</a>
              </div>
            </div>
            <div className="ps-copy mono">© pocket studio / mykey pocket · seattle, wa</div>
          </div>
        </footer>
      </div>
    </>
  );
}