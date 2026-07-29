import { createFileRoute, Link } from "@tanstack/react-router";
import { CAL_BASE, SERVICES } from "../lib/services";
import { seoHead } from "../lib/seo";

export const Route = createFileRoute("/mobile")({
  head: seoHead("/mobile"),
  component: PocketStudio,
});

function PocketStudio() {
  return (
    <div className="ps">
      <style>{`
        .ps * { box-sizing: border-box; margin: 0; padding: 0; }
        .ps { background: #FFF4E0; color: #120E17; font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; font-size: 17px; line-height: 1.6; min-height: 100vh; }
        .ps .wrap { max-width: 1024px; margin: 0 auto; padding: 0 16px; }
        .ps section { padding: 44px 0; border-bottom: 3px solid #120E17; }
        .ps section:last-of-type { border-bottom: 0; }
        .ps h1 { font-family: 'Bricolage Grotesque', 'Inter', sans-serif; font-weight: 800; line-height: 1.05; }
        .ps h2 { font-family: 'Bricolage Grotesque', 'Inter', sans-serif; font-weight: 700; font-size: clamp(28px, 6vw, 40px); line-height: 1.1; margin-bottom: 8px; }
        .ps .kick { font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 2.5px; text-transform: uppercase; color: #4D6670; margin-bottom: 10px; display: block; }
        .ps .hand { font-family: 'Caveat', cursive; font-size: 24px; color: #B3282D; }

        .ps .btn { display: inline-block; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 500; font-size: 16px; text-decoration: none; padding: 14px 22px; border: 3px solid #120E17; border-radius: 14px; color: #120E17; background: #fff; box-shadow: 4px 4px 0 #120E17; margin: 6px 10px 6px 0; cursor: pointer; }
        .ps .btn.primary { background: #8ACE00; }
        .ps .btn.alt { background: #B8A9F5; }
        .ps .btn:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0 #120E17; }

        .ps header { position: sticky; top: 0; z-index: 50; background: #FFF4E0; border-bottom: 3px solid #120E17; padding: 10px 0; }
        .ps header .wrap { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .ps .logo { font-family: 'Bricolage Grotesque', 'Inter', sans-serif; font-weight: 800; font-size: 20px; text-decoration: none; color: #120E17; }
        .ps .logo .dot { color: #8ACE00; }
        .ps header nav { display: flex; align-items: center; gap: 14px; }
        .ps header nav a.navlink { font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 13px; color: #120E17; text-decoration: none; }
        .ps header nav a.navlink:hover { text-decoration: underline; }
        .ps .btn.small { padding: 8px 14px; font-size: 13px; margin: 0; }

        .ps .hero { background: linear-gradient(135deg, #FDE68A 0%, #FFF4E0 55%, #B8A9F5 130%); }
        .ps .hero-inner { display: grid; grid-template-columns: 1.1fr .9fr; gap: 28px; align-items: center; }
        .ps .hero h1 { font-size: clamp(38px, 9vw, 68px); }
        .ps .hero h1 .hl { background: #8ACE00; padding: 0 8px; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
        .ps .hero p.lede { font-size: 19px; margin: 14px 0 22px; max-width: 46ch; }
        .ps .badges { margin-top: 18px; }
        .ps .badge { display: inline-block; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 12px; border: 2px solid #120E17; border-radius: 999px; padding: 4px 12px; margin: 4px 6px 0 0; background: #fff; }
        .ps .hero-img { position: relative; border: 3px solid #120E17; border-radius: 18px; overflow: hidden; box-shadow: 6px 6px 0 #120E17; transform: rotate(-1.5deg); }
        .ps .hero-img img { width: 100%; display: block; aspect-ratio: 4/3; object-fit: cover; }
        .ps .hero-img .cap { position: absolute; left: 10px; bottom: 8px; font-family: 'Caveat', cursive; font-size: 26px; color: #fff; text-shadow: 0 2px 0 rgba(18,14,23,.55); transform: rotate(-3deg); }

        .ps .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px; }
        .ps .grid.two { grid-template-columns: repeat(2, 1fr); }
        .ps .card { background: #fff; border: 3px solid #120E17; border-radius: 16px; padding: 18px; box-shadow: 4px 4px 0 #120E17; }
        .ps .card h3 { font-family: 'Bricolage Grotesque', 'Inter', sans-serif; font-size: 21px; margin-bottom: 6px; }
        .ps .card p { font-size: 15px; color: #2a2433; }
        .ps .meta { font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 13px; margin-top: 10px; color: #4D6670; }
        .ps .price { font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 500; font-size: 20px; display: inline-block; background: #FDE68A; border: 2px solid #120E17; border-radius: 10px; padding: 2px 10px; margin-bottom: 8px; }
        .ps .svc:nth-child(3n+1) { transform: rotate(-.8deg); }
        .ps .svc:nth-child(3n+2) { transform: rotate(.7deg); }
        .ps .svc:nth-child(3n) { transform: rotate(-.4deg); }
        .ps .card .btn { font-size: 14px; padding: 10px 16px; margin-top: 12px; }

        .ps .artist-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 28px; align-items: center; }
        .ps .artist-img { border: 3px solid #120E17; border-radius: 18px; overflow: hidden; box-shadow: 6px 6px 0 #8ACE00; transform: rotate(1.5deg); }
        .ps .artist-img img { width: 100%; display: block; aspect-ratio: 4/5; object-fit: cover; }

        .ps .steps { counter-reset: step; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 24px; }
        .ps .step { background: #fff; border: 3px solid #120E17; border-radius: 16px; padding: 16px; box-shadow: 4px 4px 0 #B8A9F5; position: relative; }
        .ps .step::before { counter-increment: step; content: counter(step); position: absolute; top: -14px; left: 14px; background: #8ACE00; border: 3px solid #120E17; border-radius: 50%; width: 34px; height: 34px; display: grid; place-items: center; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 600; }
        .ps .step h3 { font-size: 17px; margin: 16px 0 6px; font-family: 'Bricolage Grotesque', 'Inter', sans-serif; }
        .ps .step p { font-size: 14px; color: #2a2433; }

        .ps .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 24px; }
        .ps .gallery figure { border: 3px solid #120E17; border-radius: 16px; overflow: hidden; box-shadow: 4px 4px 0 #120E17; background: #fff; }
        .ps .gallery figure:nth-child(odd) { transform: rotate(-1deg); }
        .ps .gallery figure:nth-child(even) { transform: rotate(1deg); }
        .ps .gallery img { width: 100%; display: block; aspect-ratio: 1/1; object-fit: cover; }
        .ps .gallery figcaption { padding: 8px 12px; font-family: 'Caveat', cursive; font-size: 22px; }

        .ps .policies { background: #120E17; color: #FFF4E0; }
        .ps .policies h2 { color: #FFF4E0; }
        .ps .policies .kick { color: #8ACE00; }
        .ps .policies .card { background: #1D1726; color: #FFF4E0; border-color: #FFF4E0; box-shadow: 4px 4px 0 #8ACE00; }
        .ps .policies .card p { color: #d9d2c0; }
        .ps .policies ul { list-style: none; margin-top: 8px; }
        .ps .policies li { padding: 4px 0 4px 26px; position: relative; font-size: 14px; }
        .ps .policies li::before { content: "✂"; position: absolute; left: 0; color: #8ACE00; }

        .ps .contact-list { font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 16px; margin-top: 12px; }
        .ps .contact-list a { color: #120E17; }
        .ps .form label { display: block; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; margin: 14px 0 6px; }
        .ps .form input, .ps .form select, .ps .form textarea { width: 100%; font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; font-size: 16px; padding: 12px 14px; border: 3px solid #120E17; border-radius: 12px; background: #fff; }
        .ps .form textarea { min-height: 110px; resize: vertical; }
        .ps .form .btn { width: 100%; margin-top: 18px; text-align: center; }
        .ps .fineprint { font-size: 13px; color: #4D6670; margin-top: 12px; }

        .ps footer { padding: 26px 0 40px; font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 13px; color: #4D6670; }
        .ps footer .wrap { display: flex; flex-wrap: wrap; gap: 12px; justify-content: space-between; align-items: center; }

        @media (max-width: 860px) {
          .ps .hero-inner, .ps .artist-grid { grid-template-columns: 1fr; }
          .ps .grid, .ps .grid.two, .ps .gallery { grid-template-columns: 1fr 1fr; }
          .ps .steps { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .ps .grid, .ps .grid.two, .ps .gallery, .ps .steps { grid-template-columns: 1fr; }
          .ps header nav a.navlink { display: none; }
          .ps .hero { padding-top: 24px; }
        }
      `}</style>

      <header>
        <div className="wrap">
          <a className="logo" href="#top">pocket studio<span className="dot">.</span></a>
          <nav>
            <a className="navlink" href="#services">services</a>
            <a className="navlink" href="#artist">the artist</a>
            <a className="navlink" href="#policies">policies</a>
            <a className="btn primary small" href={CAL_BASE} target="_blank" rel="noreferrer">book</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-inner">
          <div>
            <span className="kick">seattle · house calls only</span>
            <h1>your chair <span className="hl">comes to you.</span></h1>
            <p className="lede">i'm mykey (they/them) — a solo hair artist doing cuts + color in your space. no front desk, no phone tag, no fluorescent waiting room. you book, i show up, you get a great cut in your own kitchen.</p>
            <a className="btn primary" href={CAL_BASE} target="_blank" rel="noreferrer">book a slot →</a>
            <a className="btn" href="tel:425-918-2029">call/text 425-918-2029</a>
            <div className="badges">
              <span className="badge">$25 deposit</span>
              <span className="badge">travel fee waived for now</span>
              <span className="badge">calendar opens the 1st</span>
            </div>
            <p className="hand" style={{ marginTop: 14 }}>same hands, same energy, way fewer hoops ✂</p>
          </div>
          <div className="hero-img">
            <img src="/classic/hero-mykey.jpg" alt="mykey mid-cut at a house call, cape on, clippers in hand" loading="lazy" />
            <span className="cap">house call, capitol hill ~</span>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <span className="kick">the menu</span>
          <h2>cuts + color, at your place</h2>
          <div className="grid">
            {SERVICES.map((s) => (
              <div className="card svc" key={s.slug}>
                <span className="price">{s.price}</span>
                <h3>{s.name}</h3>
                <p>{s.blurb}</p>
                <div className="meta">{s.duration} · house call</div>
                <a className="btn alt" href={`${CAL_BASE}${s.slug}`} target="_blank" rel="noreferrer">book {s.name.toLowerCase()} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="artist">
        <div className="wrap artist-grid">
          <div className="artist-img">
            <img src="/classic/artist-mykey.jpg" alt="mykey pocket, seattle hair artist, portrait" loading="lazy" />
          </div>
          <div>
            <span className="kick">the artist</span>
            <h2>hi, i'm mykey.</h2>
            <p>i cut hair, i answer my own phone, and i'd rather come to you than make you sit under fluorescent lights. i'm building pocket studio around one idea: getting a haircut shouldn't cost your whole afternoon or your whole nervous system.</p>
            <p style={{ marginTop: 12 }}>quiet appointments? say the word. need the playlist off, the chat low, the lights dim? that's not an accommodation, it's just how i work. judgment-free, neurodivergent-friendly, built by one brain on purpose.</p>
            <p className="hand" style={{ marginTop: 16 }}>— mykey</p>
          </div>
        </div>
      </section>

      <section id="how">
        <div className="wrap">
          <span className="kick">how it works</span>
          <h2>book → i drive → you sit</h2>
          <div className="steps">
            <div className="step"><h3>pick a slot</h3><p>the calendar opens the 1st for the month ahead. grab a time, pay the $25 deposit, done.</p></div>
            <div className="step"><h3>i text you</h3><p>day-before reminder, then a 2-hour check-in on the day. reply "yep" to keep the slot.</p></div>
            <div className="step"><h3>i show up</h3><p>cape, tools, clippers, a little mat. you point me at an outlet and decent light.</p></div>
            <div className="step"><h3>zero cleanup</h3><p>i sweep, i pack, i go. you're left with a great cut and your own bathroom.</p></div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="wrap">
          <span className="kick">the work</span>
          <h2>recent chairs</h2>
          <div className="gallery">
            <figure><img src="/classic/cut-1.jpg" alt="taper fade, fresh line-up" loading="lazy" /><figcaption>taper, ballard ~</figcaption></figure>
            <figure><img src="/classic/cut-2.jpg" alt="curly cut, full volume" loading="lazy" /><figcaption>curls, fremont ~</figcaption></figure>
            <figure><img src="/classic/cut-3.jpg" alt="long layers, blowout" loading="lazy" /><figcaption>long cut, queen anne ~</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="policies" id="policies">
        <div className="wrap">
          <span className="kick">policies</span>
          <h2>the fine print, minus the fine print</h2>
          <div className="grid two">
            <div className="card">
              <h3>booking</h3>
              <ul>
                <li>$25 deposit holds your slot (stripe, comes off your total)</li>
                <li>calendar opens the 1st for the month ahead</li>
                <li>2-hour confirmation — reply "yep" or the slot may release</li>
                <li>travel fee ($25 + $2/mi, 30-mi range) waived for now</li>
              </ul>
            </div>
            <div className="card">
              <h3>cancellations</h3>
              <ul>
                <li>free to cancel up to 24 hours out</li>
                <li>inside 24 hours or no-show may mean a charge</li>
                <li>manage everything on the my bookings page with your ref code</li>
                <li>running late? just text — i'd rather know</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <span className="kick">contact</span>
          <h2>talk to a human (me)</h2>
          <div className="grid two">
            <div className="card">
              <h3>fastest: text me</h3>
              <p>questions, "are you in my neighborhood?", emergency bang situations — all fair game.</p>
              <div className="contact-list">
                <div>call/text · <a href="tel:425-918-2029">425-918-2029</a></div>
                <div>email · <a href="mailto:mykeypocket@icloud.com">mykeypocket@icloud.com</a></div>
                <div>hours · thu–sun</div>
              </div>
            </div>
            <div className="card">
              <h3>or send a note</h3>
              <form className="form" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="ps-name">name</label>
                <input id="ps-name" name="name" autoComplete="name" required />
                <label htmlFor="ps-email">email</label>
                <input id="ps-email" name="email" type="email" autoComplete="email" required />
                <label htmlFor="ps-msg">what's up?</label>
                <textarea id="ps-msg" name="message" required />
                <button className="btn primary" type="submit">send it →</button>
                <p className="fineprint">goes straight to my phone. i reply myself.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>© 2026 pocket studio · mykey pocket (they/them) · seattle, wa</span>
          <span>house calls only · not affiliated with rudy's barbershop</span>
        </div>
      </footer>
    </div>
  );
}