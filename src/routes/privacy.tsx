import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { seoHead } from "../lib/seo";

export const Route = createFileRoute("/privacy")({
  head: seoHead("/privacy"),
  component: Privacy,
});

function Strong({ children }: { children: ReactNode }) {
  return <strong style={{ color: "var(--color-void)", fontWeight: 700 }}>{children}</strong>;
}

function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-6 text-base font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>
      {children}
    </h3>
  );
}

function Ul({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5">{children}</ul>;
}

function Li({ children }: { children: ReactNode }) {
  return <li>{children}</li>;
}

const SUMMARY_POINTS = [
  <>i collect what i need to cut your hair: your name, contact info, booking details, and hair notes you give me.</>,
  <>payments run through <Strong>stripe</Strong> — i never see or store your card number.</>,
  <>some bookings run through <Strong>cal.com</Strong>; those follow cal.com's privacy policy too.</>,
  <>i text and email you about your appointment. that's the point of collecting your number.</>,
  <>i don't sell your data, run ads on it, or share it with anyone who isn't helping deliver your appointment.</>,
  <>want to see, fix, or delete what i have? text or email me. i'm a one-person shop — you'll get a real answer.</>,
];

const THIRD_PARTIES: { who: ReactNode; gets: string; why: string }[] = [
  { who: <Strong>stripe</Strong>, gets: "payment details, billing email, amount", why: "processing the $25 deposit and any card payments" },
  { who: <Strong>cal.com</Strong>, gets: "booking details for appointments booked through cal.com links", why: "some booking flows run on their scheduler" },
  { who: <Strong>sms/email providers</Strong>, gets: "your phone number or email and message content", why: "delivering reminders, confirmations, and replies" },
  { who: <Strong>website hosting provider</Strong>, gets: "standard server logs", why: "keeping the site online and secure" },
];

function Privacy() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bone)", color: "var(--color-void)", fontFamily: "var(--font-sans)" }}>
      <div className="mx-auto max-w-[720px] px-5 py-14 sm:px-8">
        <Link to="/" className="text-sm underline" style={{ color: "var(--color-ash)" }}>← back</Link>
        <h1 className="mt-6 text-4xl font-black" style={{ fontFamily: "var(--font-display)" }}>privacy policy</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>effective date: july 29, 2026</p>

        <div className="mt-8 space-y-5 text-[15px] leading-relaxed" style={{ color: "var(--color-mist)" }}>
          <P>
            <Strong>who this covers:</Strong> pocket studio / mykey pocket — a solo hair artist
            (they/them) based in seattle, wa, doing house calls only. throughout this policy, "i,"
            "me," and "my" mean mykey pocket, and "you" means the person booking, browsing, or
            sitting in the chair.
          </P>

          {/* plain-language summary card */}
          <aside
            className="rounded-md p-6 sm:p-8"
            style={{ border: "2px solid var(--color-void)", boxShadow: "4px 4px 0 var(--color-lime)", background: "rgba(255,255,255,0.35)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>
              the short version (plain-language summary)
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {SUMMARY_POINTS.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="mt-4 border-t pt-4 text-sm" style={{ borderColor: "var(--color-ash)", color: "var(--color-ash)" }}>
              the rest of this page is the same thing in more detail. the detailed version controls
              if there's ever a conflict.
            </p>
          </aside>

          <H2>1. what i collect</H2>

          <H3>1.1 information you give me directly</H3>
          <Ul>
            <Li><Strong>booking details:</Strong> your name, email address, phone number, the service you're booking, your preferred date and time, your booking reference code, and any notes you add (hair history, inspo, access instructions for the house call).</Li>
            <Li><Strong>house-call details:</Strong> the address where i'm coming, plus anything you tell me about the space — parking, pets, where the good light is.</Li>
            <Li><Strong>hair &amp; safety information:</Strong> things you choose to disclose, like allergies, sensitivities, and prior chemical work (color, bleach, relaxers, keratin). i ask because it keeps you safe and your hair intact.</Li>
            <Li><Strong>contact form &amp; messages:</Strong> whatever you send through the site, by text, or by email — including urgent booking requests.</Li>
          </Ul>

          <H3>1.2 payment information</H3>
          <P>
            deposits ($25) and any other card payments are processed by <Strong>stripe</Strong>.
            your card number goes to stripe, not to me. i receive only what stripe shares back:
            confirmation that you paid, the amount, the last four digits of the card, and your
            billing email. stripe's handling of your data is governed by{" "}
            <a
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="underline"
              style={{ color: "var(--color-void)" }}
            >
              stripe's privacy policy
            </a>
            .
          </P>

          <H3>1.3 information collected automatically</H3>
          <Ul>
            <Li><Strong>basic site logs:</Strong> like most websites, the hosting platform may log your ip address, browser type, pages visited, and timestamps. i use this only to keep the site running and to understand, in aggregate, what's working.</Li>
            <Li><Strong>cookies/local storage:</Strong> the site uses browser storage for functional things — like keeping a booking flow or a draft message intact. no advertising trackers, no cross-site profiling.</Li>
          </Ul>

          <H3>1.4 information from third parties</H3>
          <P>
            if you book through a <Strong>cal.com</Strong> link, cal.com shares the booking details
            with me (name, contact info, appointment time). that's the only third-party source of
            personal data i use.
          </P>

          <H2>2. how i use it</H2>
          <Ul>
            <Li>to <Strong>book, confirm, reschedule, and cancel</Strong> your appointments — including the reference code in your booking confirmation email.</Li>
            <Li>to <Strong>send reminders and confirmations</Strong> by sms and email — including the 2-hour confirmation message before your appointment (if i don't hear back, the slot may be released, per the terms of service).</Li>
            <Li>to <Strong>take payment</Strong>: the deposit via stripe, and the balance due at your appointment.</Li>
            <Li>to <Strong>enforce cancellation and no-show policies</Strong>, including invoicing a no-call-no-show charge (up to the full service amount) when there's no card on file.</Li>
            <Li>to <Strong>plan your service safely</Strong> — allergies and prior chemical work directly affect what i can and should do to your hair.</Li>
            <Li>to <Strong>get to you</Strong> — your address is how i plan the route and timing for the house call. there's no travel fee right now; if one is ever introduced, it'll be quoted before your appointment, never surprise-billed.</Li>
            <Li>to <Strong>respond</Strong> to messages, questions, and urgent booking requests.</Li>
            <Li>to <Strong>meet legal obligations</Strong> — tax records for payments, responding to lawful requests, that kind of thing.</Li>
          </Ul>
          <P>
            i do not sell your personal information. i do not rent it, trade it, or use it for
            targeted advertising. i have no advertisers to share it with even if i wanted to.
          </P>

          <H2>3. who sees your data (third parties)</H2>
          <P>your information is only shared with the services that make the appointment happen:</P>
          <div className="overflow-x-auto rounded-md" style={{ border: "1px solid var(--color-void)" }}>
            <table className="w-full min-w-[540px] border-collapse text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--color-void)", background: "rgba(255,255,255,0.35)" }}>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-void)", fontFamily: "var(--font-mono)" }}>third party</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-void)", fontFamily: "var(--font-mono)" }}>what they get</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-void)", fontFamily: "var(--font-mono)" }}>why</th>
                </tr>
              </thead>
              <tbody>
                {THIRD_PARTIES.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i === THIRD_PARTIES.length - 1 ? "none" : "1px solid var(--color-ash)" }}>
                    <td className="px-4 py-3 align-top">{row.who}</td>
                    <td className="px-4 py-3 align-top">{row.gets}</td>
                    <td className="px-4 py-3 align-top">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            each of these processes data under their own privacy policies and their own security
            practices. beyond that list, i share personal information only if the law requires it
            (a valid subpoena, for example) or if it's necessary to protect someone's safety or my
            legal rights.
          </P>

          <H2>4. sms &amp; email communications</H2>
          <P>
            by giving me your phone number or email when booking, you're agreeing to receive{" "}
            <Strong>transactional messages</Strong> about your appointments: booking confirmations,
            reminders, the 2-hour confirmation request, schedule changes, and replies to things you
            send me. message and data rates from your carrier may apply.
          </P>
          <P>
            you can opt out of reminders any time by replying STOP to a text or telling me directly
            — but fair warning: if you opt out, you might miss the 2-hour confirmation window, and
            the slot-release rule in the terms still applies. opting out of marketing-style messages
            (if i ever send any) will never affect your bookings.
          </P>

          <H2>5. how long i keep it</H2>
          <Ul>
            <Li><Strong>booking records &amp; contact info:</Strong> kept while you're an active client and for a reasonable period after (generally up to 3 years) so rebooking is easy and i can answer "what did we do last time?"</Li>
            <Li><Strong>payment &amp; invoice records:</Strong> kept as long as tax and accounting rules require (typically 7 years).</Li>
            <Li><Strong>contact form messages:</Strong> kept until the conversation is resolved, then periodically cleared out.</Li>
            <Li><Strong>site logs:</Strong> rotated by the hosting provider on their normal schedule.</Li>
          </Ul>
          <P>
            when data is no longer needed, it's deleted or anonymized. you can always ask me to
            delete sooner — see section 6.
          </P>

          <H2>6. your rights &amp; choices</H2>
          <P>you can, at any time:</P>
          <Ul>
            <Li><Strong>see</Strong> what personal information i have about you;</Li>
            <Li><Strong>correct</Strong> anything that's wrong;</Li>
            <Li><Strong>delete</Strong> your information (subject to records i'm legally required to keep, like tax documents);</Li>
            <Li><Strong>opt out</Strong> of sms or email reminders;</Li>
            <Li><Strong>ask questions</Strong> about any of this.</Li>
          </Ul>
          <P>
            to do any of the above: text or call{" "}
            <a href="tel:+14259182029" className="underline" style={{ color: "var(--color-void)" }}>
              <Strong>425-918-2029</Strong>
            </a>
            , or email{" "}
            <a href="mailto:mykeypocket@icloud.com" className="underline" style={{ color: "var(--color-void)" }}>
              <Strong>mykeypocket@icloud.com</Strong>
            </a>
            . i'll respond within a reasonable time — usually fast, because it's just me and i read
            everything.
          </P>
          <P>
            washington residents: if state privacy laws give you additional rights (access,
            correction, deletion, appeal), i honor them through the same contact channels, no
            special form required.
          </P>

          <H2>7. security</H2>
          <P>
            this is a one-person studio, and i treat your information accordingly: payment data
            stays inside stripe, booking data lives in the booking system, and i don't keep paper
            copies of your personal details lying around. no system is perfectly secure, but i use
            reputable providers and limit what exists in the first place — the less data held, the
            less there is to lose.
          </P>

          <H2>8. kids</H2>
          <P>
            my services and this site aren't directed at children under 13, and i don't knowingly
            collect their information online. if a minor is getting a cut, a parent or guardian
            books and provides the contact details.
          </P>

          <H2>9. changes to this policy</H2>
          <P>
            if this policy changes, the new version goes up on this page with a new effective date.
            for anything significant, i'll note it on the site before it takes effect. continuing to
            book after a change means you accept the updated policy.
          </P>

          <H2>10. contact</H2>
          <P>
            pocket studio / mykey pocket — seattle, wa (house calls only)
            <br />
            text or call:{" "}
            <a href="tel:+14259182029" className="underline" style={{ color: "var(--color-void)" }}>
              <Strong>425-918-2029</Strong>
            </a>
            <br />
            email:{" "}
            <a href="mailto:mykeypocket@icloud.com" className="underline" style={{ color: "var(--color-void)" }}>
              <Strong>mykeypocket@icloud.com</Strong>
            </a>
          </P>
          <P>
            pocket studio is an independent, solo operation and is{" "}
            <Strong>not affiliated with rudy's barbershop</Strong> or any other salon or barbershop
            chain.
          </P>

          <p className="mt-12 border-t pt-5 text-[13px] italic leading-relaxed" style={{ borderColor: "var(--color-ash)", color: "var(--color-ash)" }}>
            draft template notice: this document is a working draft prepared for the pocket studio
            website. it is provided for informational purposes only and does not constitute legal
            advice. before publishing, it should be reviewed by a licensed attorney familiar with
            washington state law, consumer privacy requirements, and text-messaging regulations
            (such as the TCPA).
          </p>
        </div>
      </div>
    </div>
  );
}
