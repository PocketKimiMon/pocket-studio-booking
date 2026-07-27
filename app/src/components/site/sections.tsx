import { Link } from "@tanstack/react-router";
import { calEventUrl, contact, hours, policies, scenes, services, whyDirect } from "../../lib/site";
import {
  IconArrow,
  IconCalendar,
  IconCheck,
  IconKey,
  IconMail,
  IconPhone,
  IconPin,
  IconPlus,
  IconScissors,
  IconZap,
} from "./icons";
import { MkMonogram } from "./logo";
import { ReadingModeToggle } from "./reading-mode-toggle";

type Level = "h1" | "h2";

/* ---------- nav (shared chrome, every page) ---------- */

export function Nav() {
  return (
    <header className="mk-nav">
      <div className="mk-wrap mk-nav-inner">
        <Link className="mk-brand" to="/" aria-label="MyKey Pocket, home">
          <MkMonogram />
          <span>mykey pocket</span>
        </Link>
        <nav className="mk-nav-links" aria-label="Sections">
          <Link
            className="mk-nav-link"
            activeProps={{ className: "mk-nav-link mk-active" }}
            to="/services"
          >
            Services
          </Link>
          <Link
            className="mk-nav-link"
            activeProps={{ className: "mk-nav-link mk-active" }}
            to="/about"
          >
            About
          </Link>
          <Link
            className="mk-nav-link"
            activeProps={{ className: "mk-nav-link mk-active" }}
            to="/policies"
          >
            Policies
          </Link>
        </nav>
        <ReadingModeToggle compact />
        <Link className="mk-ticket-cta" to="/book">
          <span className="mk-notch" aria-hidden="true" />
          Book a cut
        </Link>
      </div>
    </header>
  );
}

/* ---------- hero: stop 01, the chair ---------- */

export function Hero() {
  return (
    <section className="mk-hero">
      <div className="mk-hero-media" aria-hidden="true">
        <img
          className="mk-scene-img"
          src={scenes.chair.src}
          alt={scenes.chair.alt}
          fetchPriority="high"
          data-scrub
        />
      </div>
      <p className="mk-waypoint">{scenes.chair.stop}</p>
      <div className="mk-wrap mk-hero-content">
        <h1 className="mk-hero-title" data-split>
          Your <span className="mk-em">chair</span> is ready.
        </h1>
        <p className="mk-hero-sub">
          Cuts and color, booked direct with MyKey. The chair in Fremont, or
          your own place within 30 miles of Seattle. No front desk. No phone
          tag.
        </p>
        <div className="mk-hero-ctas">
          <Link className="mk-hero-cta" to="/book">
            Book a cut
            <IconArrow size={19} />
          </Link>
          <Link className="mk-hero-secondary" to="/services">
            See the menu
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- route marquee ---------- */

const marqueeStops = [
  "chair at rudy's fremont",
  "house calls within 30 miles",
  "book direct, no front desk",
  "quiet chair, zero small talk required",
];

export function RouteMarquee() {
  const doubled = [...marqueeStops, ...marqueeStops];
  return (
    <div className="mk-marquee" aria-hidden="true">
      <div className="mk-marquee-track">
        {doubled.map((stop, i) => (
          <span className="mk-marquee-item" key={i}>
            {stop}
            <IconScissors size={14} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- home closing band: the short version ---------- */

export function HomeClose() {
  return (
    <section className="mk-section">
      <div className="mk-wrap">
        <div className="mk-section-head">
          <h2 className="mk-h2">The short version.</h2>
          <p className="mk-tldr">
            <strong>TL;DR</strong> Cuts and color with MyKey, in the Fremont
            chair or at your place. The menu lives on the services page.
            Booking takes about a minute and the calendar confirms instantly.
          </p>
        </div>
        <div className="mk-close-ctas">
          <Link className="mk-page-cta" to="/book">
            Book a cut
            <IconArrow size={18} />
          </Link>
          <Link className="mk-hero-secondary" to="/services">
            See the menu
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- services ---------- */

export function Services({ level = "h2" }: { level?: Level }) {
  const H = level;
  return (
    <section className="mk-section">
      <div className="mk-wrap">
        <div className="mk-section-head">
          <p className="mk-kicker">{"// the menu"}</p>
          <H className="mk-h2">Pick a service.</H>
          <p className="mk-tldr">
            <strong>TL;DR</strong> Five services, one menu for the chair and
            the house call. Prices are quoted before anything touches your
            head.
          </p>
        </div>
        <div className="mk-services">
          {services.map((s) => (
            <div className="mk-service-row" key={s.name}>
              <button
                className="mk-service-btn"
                type="button"
                aria-expanded="false"
                data-service-toggle
              >
                <span className="mk-service-name">{s.name}</span>
                <span className="mk-service-meta">
                  {s.duration} · {s.lead}
                </span>
                <span className="mk-service-price">{s.price}</span>
                <span className="mk-service-plus" aria-hidden="true">
                  <IconPlus size={18} />
                </span>
              </button>
              <div className="mk-service-detail">
                <div className="mk-service-detail-inner">
                  <div className="mk-service-detail-pad">
                    <p className="mk-service-desc">{s.description}</p>
                    <span className="mk-service-meta">{s.tag}</span>
                    <a
                      className="mk-chip-cta"
                      href={calEventUrl(s.slug)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Book a cut
                      <IconCalendar size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mk-services-note">
          <IconPin size={16} />
          House calls: every service travels. Within 30 miles of Seattle, and
          any travel fee is quoted before you book, never after.
        </p>
        <div className="mk-close-ctas">
          <Link className="mk-page-cta" to="/book">
            Book a cut
            <IconArrow size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- about ---------- */

export function About({ level = "h2" }: { level?: Level }) {
  const H = level;
  return (
    <section className="mk-section">
      <div className="mk-wrap mk-about-rail">
        <div className="mk-section-head">
          <p className="mk-kicker">{"// about the artist"}</p>
          <H className="mk-h2">The human behind the chair.</H>
        </div>
        <div className="mk-about-grid">
          <div className="mk-about-body">
            <p>
              I am MyKey, a Seattle hair artist taking clients direct. I cut
              and color all textures, but the transformations are my favorite:
              the grow-out rescue, the I-need-a-change moment, the color
              correction that takes six hours and a lot of trust.
            </p>
            <p>
              My chair is a low-judgment zone. Come with reference pics, come
              with bedhead, come with a vague idea and we will talk it through.
            </p>
            <ul className="mk-about-facts">
              <li>pronouns: they/them</li>
              <li>seattle, wa</li>
              <li>{contact.phoneDisplay}</li>
              <li>{contact.email}</li>
            </ul>
            <ul className="mk-why-list">
              {whyDirect.map((w) => (
                <li key={w}>
                  <IconCheck size={16} />
                  {w}
                </li>
              ))}
            </ul>
            <p className="mk-quiet-note">
              <strong>The quiet chair.</strong> Silent Cuts and AuDHD
              first-time appointments are always on the menu: same cuts, paced
              for you, zero small talk required. Say so in the booking notes
              and I handle the rest.
            </p>
            <div className="mk-close-ctas">
              <Link className="mk-page-cta" to="/book">
                Book a cut
                <IconArrow size={18} />
              </Link>
            </div>
          </div>
          <figure className="mk-crop-frame">
            <img src={scenes.color.src} alt={scenes.color.alt} loading="lazy" />
            <figcaption className="mk-crop-caption">
              {scenes.color.stop} · color worth the afternoon
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ---------- policies ---------- */

export function Policies({ level = "h2" }: { level?: Level }) {
  const H = level;
  return (
    <section className="mk-section">
      <div className="mk-wrap">
        <div className="mk-section-head">
          <p className="mk-kicker">{"// the fine print"}</p>
          <H className="mk-h2">So nobody gets surprised.</H>
          <p className="mk-tldr">
            <strong>TL;DR</strong> Book ahead, cancel 24 hours out, and answer
            the confirmation text. Everything below is just that, spelled out.
          </p>
        </div>
        <div className="mk-policy-grid">
          {policies.map((p, i) => (
            <div className="mk-policy" key={p.title}>
              <span className="mk-policy-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mk-policy-title">{p.title}</h3>
                <p className="mk-policy-body">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          className="mk-emg-cta"
          href={`mailto:${contact.email}?subject=Emergency%20booking%20request&body=Hi%20MyKey%2C%20I%20need%20an%20appointment%20sooner%20than%20the%20calendar%20allows.%0A%0AName%3A%0APhone%3A%0AWhat%20I%20need%3A%0AWhen%20I%20need%20it%3A`}
        >
          Need it sooner? Send an emergency request
          <IconZap size={15} />
        </a>
      </div>
    </section>
  );
}

/* ---------- hours + contact (policies page) ---------- */

export function ContactRows() {
  return (
    <div className="mk-contact-rows">
      <a className="mk-contact-row" href={`tel:${contact.tel}`}>
        <IconPhone size={16} />
        <span className="mk-contact-label">
          Text MyKey · {contact.phoneDisplay}
        </span>
      </a>
      <a className="mk-contact-row" href={`mailto:${contact.email}`}>
        <IconMail size={16} />
        <span className="mk-contact-label">{contact.email}</span>
      </a>
      <span className="mk-contact-row">
        <IconPin size={16} />
        <span className="mk-contact-label">
          Fremont chair + house calls, {contact.location}
        </span>
      </span>
    </div>
  );
}

export function HoursContact() {
  return (
    <section className="mk-section mk-book">
      <div className="mk-wrap">
        <div className="mk-section-head">
          <h2 className="mk-h2">Hours and contact.</h2>
          <p className="mk-tldr">
            <strong>TL;DR</strong> Text is fastest. The calendar opens one
            month at a time on the 1st.
          </p>
        </div>
        <div className="mk-book-grid">
          <div>
            <div className="mk-hours">
              {hours.map((h) => (
                <div className="mk-hours-row" key={h.days}>
                  <span className="mk-hours-days">{h.days}</span>
                  <span className="mk-hours-time">{h.time}</span>
                </div>
              ))}
            </div>
            <ContactRows />
          </div>
          <div>
            <p className="mk-book-fine">
              The chair is inside Rudy's Barbershop in Fremont (not affiliated;
              just where the chair lives). House calls run within 30 miles of
              Seattle. Booking runs on Cal.com, reminders come by text or
              email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- booking calendar (book page, the fallback path) ---------- */

export function BookingCalendar() {
  return (
    <section className="mk-section mk-book" id="calendar">
      <div className="mk-wrap">
        <div className="mk-section-head">
          <h2 className="mk-h2">Straight to the calendar.</h2>
          <p className="mk-tldr">
            <strong>TL;DR</strong> Rather skip the chat? The calendar below is
            live and confirms instantly. Chair appointments and house calls
            book in the same place.
          </p>
        </div>
        <div className="mk-book-grid">
          <div>
            <ContactRows />
            <p className="mk-book-fine">
              By booking you agree to the 24-hour cancel rule, the no-show
              charge, and SMS or email reminders. Booking runs on Cal.com.
            </p>
          </div>
          <div className="mk-cal-frame">
            <iframe
              src={contact.calEmbed}
              title="Book an appointment with MyKey on Cal.com"
              loading="lazy"
            />
            <a
              className="mk-banner-cta"
              href={contact.calUrl}
              target="_blank"
              rel="noreferrer"
            >
              Book a cut
              <IconArrow size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- footer (shared chrome, every page) ---------- */

export function Footer() {
  return (
    <footer className="mk-footer">
      <div className="mk-wrap">
        <div className="mk-footer-top">
          <Link className="mk-footer-brand" to="/">
            <MkMonogram />
            pocket studio / mykey pocket
          </Link>
          <div className="mk-footer-links">
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/policies">Policies</Link>
            <Link to="/book">Book a cut</Link>
            <a href={`tel:${contact.tel}`}>Text MyKey</a>
            <a href={`mailto:${contact.email}`}>Email</a>
            <ReadingModeToggle />
          </div>
        </div>
        <div className="mk-footer-legal">
          <span>© 2026 pocket studio / mykey pocket</span>
          <span>not affiliated with Rudy's Barbershop</span>
          <span>pronouns: they/them · seattle, wa</span>
          <span>
            <IconKey size={13} style={{ transform: "translateY(1px)" }} /> built
            by one brain, on purpose
          </span>
        </div>
      </div>
    </footer>
  );
}
