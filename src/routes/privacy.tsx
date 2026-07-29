import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pocket Studio" },
      {
        name: "description",
        content:
          "Privacy Policy for Pocket Studio (MyKey Pocket), an independent Seattle hair studio.",
      },
    ],
  }),
  component: PrivacyPage,
});

const S = {
  h2: {
    fontFamily: "var(--font-display)",
    fontSize: 22,
    fontWeight: 900,
    marginTop: 36,
    marginBottom: 12,
  } as const,
  h3: {
    fontFamily: "var(--font-display)",
    fontSize: 17,
    fontWeight: 800,
    marginTop: 24,
    marginBottom: 8,
  } as const,
  p: { marginBottom: 14, lineHeight: 1.75, color: "var(--color-mist)" } as const,
  li: { marginBottom: 10, lineHeight: 1.7, color: "var(--color-mist)" } as const,
};

function PrivacyPage() {
  return (
    <div
      style={{
        background: "var(--color-bone)",
        color: "var(--color-void)",
        fontFamily: "var(--font-sans)",
        minHeight: "100vh",
      }}
    >
      {/* top bar */}
      <header
        className="sticky top-0 z-50 border-b-2"
        style={{ background: "var(--color-bone)", borderColor: "var(--color-void)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
          <Link
            to="/"
            className="text-sm font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ✂ POCKET STUDIO
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="hidden text-sm underline-offset-4 hover:underline sm:block"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ← home
            </Link>
            <Link
              to="/book"
              className="border-2 px-4 py-1.5 text-sm font-black transition-transform hover:-translate-y-0.5"
              style={{
                background: "var(--color-lime)",
                borderColor: "var(--color-void)",
                boxShadow: "3px 3px 0 var(--color-void)",
              }}
            >
              BOOK
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-14">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            letterSpacing: "0.2em",
            color: "var(--color-flush)",
          }}
        >
          LEGAL
        </p>
        <h1
          className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          privacy policy
        </h1>
        <p className="mt-4" style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-ash)" }}>
          <strong>effective date:</strong> july 29, 2026
        </p>
        <p className="mt-4" style={S.p}>
          <strong>who this covers:</strong> pocket studio / mykey pocket — a solo hair artist
          (they/them) based in seattle, wa, doing house calls only. throughout this policy, "i,"
          "me," and "my" mean mykey pocket, and "you" means the person booking, browsing, or
          sitting in the chair.
        </p>

        {/* plain-language summary card */}
        <div
          className="mt-8 border-2 p-6"
          style={{
            background: "var(--color-card-2)",
            borderColor: "var(--color-void)",
            boxShadow: "5px 5px 0 var(--color-void)",
          }}
        >
          <h2 style={{ ...S.h2, marginTop: 0 }}>the short version (plain-language summary)</h2>
          <ul className="list-disc pl-5">
            <li style={S.li}>
              i collect what i need to cut your hair: your name, contact info, booking details,
              and hair notes you give me.
            </li>
            <li style={S.li}>
              payments run through <strong>stripe</strong> — i never see or store your card number.
            </li>
            <li style={S.li}>
              some bookings run through <strong>cal.com</strong>; those follow cal.com's privacy
              policy too.
            </li>
            <li style={S.li}>
              i text and email you about your appointment. that's the point of collecting your
              number.
            </li>
            <li style={S.li}>
              i don't sell your data, run ads on it, or share it with anyone who isn't helping
              deliver your appointment.
            </li>
            <li style={S.li}>
              want to see, fix, or delete what i have? text or email me. i'm a one-person shop —
              you'll get a real answer.
            </li>
          </ul>
          <p style={{ ...S.p, marginBottom: 0 }}>
            the rest of this page is the same thing in more detail. the detailed version controls
            if there's ever a conflict.
          </p>
        </div>

        <h2 style={S.h2}>1. what i collect</h2>
        <h3 style={S.h3}>1.1 information you give me directly</h3>
        <ul className="list-disc pl-5">
          <li style={S.li}>
            <strong>booking details:</strong> your name, email address, phone number, the service
            you're booking, your preferred date and time, your booking reference code, and any
            notes you add (hair history, inspo, access instructions for the house call).
          </li>
          <li style={S.li}>
            <strong>house-call details:</strong> the address where i'm coming, plus anything you
            tell me about the space — parking, pets, where the good light is.
          </li>
          <li style={S.li}>
            <strong>hair &amp; safety information:</strong> things you choose to disclose, like
            allergies, sensitivities, and prior chemical work (color, bleach, relaxers, keratin).
            i ask because it keeps you safe and your hair intact.
          </li>
          <li style={S.li}>
            <strong>contact form &amp; messages:</strong> whatever you send through the site, by
            text, or by email — including emergency booking requests.
          </li>
          <li style={S.li}>
            <strong>account info (if you log in):</strong> basic profile details tied to your
            login so your bookings attach to you.
          </li>
        </ul>

        <h3 style={S.h3}>1.2 payment information</h3>
        <p style={S.p}>
          deposits ($25) and any other card payments are processed by <strong>stripe</strong>.
          your card number goes to stripe, not to me. i receive only what stripe shares back:
          confirmation that you paid, the amount, the last four digits of the card, and your
          billing email. stripe's handling of your data is governed by{" "}
          <a
            href="https://stripe.com/privacy"
            target="_blank"
            rel="noreferrer"
            className="underline"
            style={{ color: "var(--color-flush)" }}
          >
            stripe's privacy policy
          </a>
          .
        </p>

        <h3 style={S.h3}>1.3 information collected automatically</h3>
        <ul className="list-disc pl-5">
          <li style={S.li}>
            <strong>basic site logs:</strong> like most websites, the hosting platform may log
            your ip address, browser type, pages visited, and timestamps. i use this only to
            keep the site running and to understand, in aggregate, what's working.
          </li>
          <li style={S.li}>
            <strong>cookies/local storage:</strong> the site uses browser storage for functional
            things — like keeping a booking flow or a draft message intact. no advertising
            trackers, no cross-site profiling.
          </li>
        </ul>

        <h3 style={S.h3}>1.4 information from third parties</h3>
        <p style={S.p}>
          if you book through a <strong>cal.com</strong> link, cal.com shares the booking details
          with me (name, contact info, appointment time). that's the only third-party source of
          personal data i use.
        </p>

        <h2 style={S.h2}>2. how i use it</h2>
        <ul className="list-disc pl-5">
          <li style={S.li}>
            to <strong>book, confirm, reschedule, and cancel</strong> your appointments —
            including the reference code you use on the "my bookings" page.
          </li>
          <li style={S.li}>
            to <strong>send reminders and confirmations</strong> by sms and email — including the
            2-hour confirmation message before your appointment (if i don't hear back, the slot
            may be released, per the terms of service).
          </li>
          <li style={S.li}>
            to <strong>take payment</strong>: the deposit via stripe, and the balance due at your
            appointment.
          </li>
          <li style={S.li}>
            to <strong>enforce cancellation and no-show policies</strong>, including invoicing a
            no-call-no-show charge (up to the full service amount) when there's no card on file.
          </li>
          <li style={S.li}>
            to <strong>plan your service safely</strong> — allergies and prior chemical work
            directly affect what i can and should do to your hair.
          </li>
          <li style={S.li}>
            to <strong>get to you</strong>: travel fee math ($25 base + $2 per mile from seattle)
            uses your address.
          </li>
          <li style={S.li}>
            to <strong>respond</strong> to messages, questions, and emergency booking requests.
          </li>
          <li style={S.li}>
            to <strong>meet legal obligations</strong> — tax records for payments, responding to
            lawful requests, that kind of thing.
          </li>
        </ul>
        <p style={S.p}>
          i do not sell your personal information. i do not rent it, trade it, or use it for
          targeted advertising. i have no advertisers to share it with even if i wanted to.
        </p>

        <h2 style={S.h2}>3. who sees your data (third parties)</h2>
        <p style={S.p}>
          your information is only shared with the services that make the appointment happen:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr style={{ borderBottom: "2px solid var(--color-void)" }}>
                <th className="py-2 pr-4" style={{ fontFamily: "var(--font-mono)" }}>third party</th>
                <th className="py-2 pr-4" style={{ fontFamily: "var(--font-mono)" }}>what they get</th>
                <th className="py-2" style={{ fontFamily: "var(--font-mono)" }}>why</th>
              </tr>
            </thead>
            <tbody style={{ color: "var(--color-mist)" }}>
              <tr style={{ borderBottom: "1px solid rgba(18,14,23,.15)" }}>
                <td className="py-2 pr-4 font-bold">stripe</td>
                <td className="py-2 pr-4">payment details, billing email, amount</td>
                <td className="py-2">processing the $25 deposit and any card payments</td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(18,14,23,.15)" }}>
                <td className="py-2 pr-4 font-bold">cal.com</td>
                <td className="py-2 pr-4">booking details for appointments booked through cal.com links</td>
                <td className="py-2">some booking flows run on their scheduler</td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(18,14,23,.15)" }}>
                <td className="py-2 pr-4 font-bold">sms/email providers</td>
                <td className="py-2 pr-4">your phone number or email and message content</td>
                <td className="py-2">delivering reminders, confirmations, and replies</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold">website hosting provider</td>
                <td className="py-2 pr-4">standard server logs</td>
                <td className="py-2">keeping the site online and secure</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...S.p, marginTop: 14 }}>
          each of these processes data under their own privacy policies and their own security
          practices. beyond that list, i share personal information only if the law requires it
          (a valid subpoena, for example) or if it's necessary to protect someone's safety or my
          legal rights.
        </p>

        <h2 style={S.h2}>4. sms &amp; email communications</h2>
        <p style={S.p}>
          by giving me your phone number or email when booking, you're agreeing to receive{" "}
          <strong>transactional messages</strong> about your appointments: booking confirmations,
          reminders, the 2-hour confirmation request, schedule changes, and replies to things you
          send me. message and data rates from your carrier may apply.
        </p>
        <p style={S.p}>
          you can opt out of reminders any time by replying STOP to a text or telling me directly
          — but fair warning: if you opt out, you might miss the 2-hour confirmation window, and
          the slot-release rule in the terms still applies. opting out of marketing-style
          messages (if i ever send any) will never affect your bookings.
        </p>

        <h2 style={S.h2}>5. how long i keep it</h2>
        <ul className="list-disc pl-5">
          <li style={S.li}>
            <strong>booking records &amp; contact info:</strong> kept while you're an active
            client and for a reasonable period after (generally up to 3 years) so rebooking is
            easy and i can answer "what did we do last time?"
          </li>
          <li style={S.li}>
            <strong>payment &amp; invoice records:</strong> kept as long as tax and accounting
            rules require (typically 7 years).
          </li>
          <li style={S.li}>
            <strong>contact form messages:</strong> kept until the conversation is resolved, then
            periodically cleared out.
          </li>
          <li style={S.li}>
            <strong>site logs:</strong> rotated by the hosting provider on their normal schedule.
          </li>
        </ul>
        <p style={S.p}>
          when data is no longer needed, it's deleted or anonymized. you can always ask me to
          delete sooner — see section 6.
        </p>

        <h2 style={S.h2}>6. your rights &amp; choices</h2>
        <p style={S.p}>you can, at any time:</p>
        <ul className="list-disc pl-5">
          <li style={S.li}>
            <strong>see</strong> what personal information i have about you;
          </li>
          <li style={S.li}>
            <strong>correct</strong> anything that's wrong;
          </li>
          <li style={S.li}>
            <strong>delete</strong> your information (subject to records i'm legally required to
            keep, like tax documents);
          </li>
          <li style={S.li}>
            <strong>opt out</strong> of sms or email reminders;
          </li>
          <li style={S.li}>
            <strong>ask questions</strong> about any of this.
          </li>
        </ul>
        <p style={S.p}>
          to do any of the above: text or call <strong>425-918-2029</strong>, or email{" "}
          <strong>mykeypocket@icloud.com</strong> (alternate:{" "}
          <strong>itspocketmykey@gmail.com</strong>). i'll respond within a reasonable time —
          usually fast, because it's just me and i read everything.
        </p>
        <p style={S.p}>
          washington residents: if state privacy laws give you additional rights (access,
          correction, deletion, appeal), i honor them through the same contact channels, no
          special form required.
        </p>

        <h2 style={S.h2}>7. security</h2>
        <p style={S.p}>
          this is a one-person studio, and i treat your information accordingly: payment data
          stays inside stripe, booking data lives in the booking system, and i don't keep paper
          copies of your personal details lying around. no system is perfectly secure, but i use
          reputable providers and limit what exists in the first place — the less data held, the
          less there is to lose.
        </p>

        <h2 style={S.h2}>8. kids</h2>
        <p style={S.p}>
          my services and this site aren't directed at children under 13, and i don't knowingly
          collect their information online. if a minor is getting a cut, a parent or guardian
          books and provides the contact details.
        </p>

        <h2 style={S.h2}>9. changes to this policy</h2>
        <p style={S.p}>
          if this policy changes, the new version goes up on this page with a new effective date.
          for anything significant, i'll note it on the site before it takes effect. continuing
          to book after a change means you accept the updated policy.
        </p>

        <h2 style={S.h2}>10. contact</h2>
        <p style={S.p}>
          pocket studio / mykey pocket — seattle, wa (house calls only)
          <br />
          text or call: <strong>425-918-2029</strong>
          <br />
          email: <strong>mykeypocket@icloud.com</strong> (alternate:{" "}
          <strong>itspocketmykey@gmail.com</strong>)
        </p>
        <p style={S.p}>
          pocket studio is an independent, solo operation and is{" "}
          <strong>not affiliated with rudy's barbershop</strong> or any other salon or barbershop
          chain.
        </p>

        <hr className="my-10" style={{ borderColor: "rgba(18,14,23,.2)" }} />
        <p className="text-xs" style={{ color: "var(--color-ash)", fontStyle: "italic" }}>
          draft template notice: this document is a working draft prepared for the pocket studio
          website. it is provided for informational purposes only and does not constitute legal
          advice. before publishing, it should be reviewed by a licensed attorney familiar with
          washington state law, consumer privacy requirements, and text-messaging regulations
          (such as the TCPA).
        </p>
      </main>
    </div>
  );
}
