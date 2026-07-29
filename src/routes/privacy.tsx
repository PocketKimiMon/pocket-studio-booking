import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { LegalLayout, LegalSection } from "../components/LegalLayout";
import { headFor } from "../lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => headFor("/privacy"),
  component: Page,
});

const linkStyle = { color: "var(--color-lime)" } as const;

function L({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="underline underline-offset-4" style={linkStyle}>
      {children}
    </a>
  );
}

function Page() {
  return (
    <LegalLayout
      kicker="THE LEGAL STUFF"
      title="privacy policy"
      updated="july 29, 2026"
      intro="i'm mykey pocket — a solo hair artist (they/them) in seattle, wa, doing house calls only. this policy covers what i collect when you book or browse, why, and who touches it. 'i/me/my' means mykey pocket; 'you' means the person booking, browsing, or sitting in the chair."
    >
      <div
        className="mt-10 border-2 p-5 text-base leading-relaxed"
        style={{
          borderColor: "var(--color-lime)",
          borderRadius: 12,
          background: "var(--color-card-2)",
          color: "var(--color-mist)",
        }}
      >
        <p className="font-black" style={{ color: "var(--color-void)" }}>
          the short version
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-6">
          <li>i collect what i need to cut your hair: your name, contact info, booking details, and the hair notes you give me.</li>
          <li>payments run through <strong>stripe</strong> — i never see or store your card number.</li>
          <li>some bookings run through <strong>cal.com</strong>; those follow cal.com's privacy policy too.</li>
          <li>i text and email you about your appointment. that's the point of collecting your number.</li>
          <li>i don't sell your data, run ads on it, or share it with anyone who isn't helping deliver your appointment.</li>
          <li>want to see, fix, or delete what i have? text or email me. i'm a one-person shop — you'll get a real answer.</li>
        </ul>
        <p className="mt-3">
          the rest of this page is the same thing in more detail. the detailed version controls if there's ever a conflict.
        </p>
      </div>

      <LegalSection title="1. what i collect">
        <p>
          <strong>information you give me directly.</strong> booking details — your name, email
          address, phone number, the service you're booking, your preferred date and time, your
          booking reference code, and any notes you add (hair history, inspo, access instructions
          for the house call). house-call details — the address where i'm coming, plus anything you
          tell me about the space: parking, pets, where the good light is. hair &amp; safety
          information you choose to disclose — allergies, sensitivities, prior chemical work (color,
          bleach, relaxers, keratin). i ask because it keeps you safe and your hair intact. and
          whatever you send through the site, by text, or by email — including emergency booking
          requests.
        </p>
        <p>
          <strong>payment information.</strong> deposits ($25) and any other card payments are
          processed by <strong>stripe</strong>. your card number goes to stripe, not to me. i
          receive only what stripe shares back: confirmation that you paid, the amount, the last
          four digits of the card, and your billing email. stripe's handling of your data is
          governed by{" "}
          <L href="https://stripe.com/privacy">stripe's privacy policy</L>.
        </p>
        <p>
          <strong>information collected automatically.</strong> like most websites, the hosting
          platform may log your ip address, browser type, pages visited, and timestamps — i use
          this only to keep the site running and to understand, in aggregate, what's working. the
          site also uses browser storage for functional things, like keeping a booking flow intact.
          no advertising trackers, no cross-site profiling.
        </p>
        <p>
          <strong>information from third parties.</strong> if you book through a{" "}
          <strong>cal.com</strong> link, cal.com shares the booking details with me (name, contact
          info, appointment time). that's the only third-party source of personal data i use.
        </p>
      </LegalSection>

      <LegalSection title="2. how i use it">
        <ul className="list-disc space-y-1.5 pl-6">
          <li>to <strong>book, confirm, reschedule, and cancel</strong> your appointments — including the reference code that identifies your booking;</li>
          <li>to <strong>send reminders and confirmations</strong> by sms and email — including the 2-hour confirmation message before your appointment (if i don't hear back, the slot may be released, per the terms of service);</li>
          <li>to <strong>take payment</strong>: the deposit via stripe, and the balance due at your appointment;</li>
          <li>to <strong>enforce cancellation and no-show policies</strong>, including invoicing a no-call-no-show charge (up to the full service amount) when there's no card on file;</li>
          <li>to <strong>plan your service safely</strong> — allergies and prior chemical work directly affect what i can and should do to your hair;</li>
          <li>to <strong>get to you</strong> — travel fee math ($25 base + $2 per mile from seattle) uses your address;</li>
          <li>to <strong>respond</strong> to messages, questions, and emergency booking requests;</li>
          <li>to <strong>meet legal obligations</strong> — tax records for payments, responding to lawful requests, that kind of thing.</li>
        </ul>
        <p>
          i do not sell your personal information. i do not rent it, trade it, or use it for
          targeted advertising. i have no advertisers to share it with even if i wanted to.
        </p>
      </LegalSection>

      <LegalSection title="3. who sees your data">
        <p>your information is only shared with the services that make the appointment happen:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr style={{ color: "var(--color-void)" }}>
                <th className="border-b-2 pb-2 pr-4 text-left font-black" style={{ borderColor: "var(--color-lime)" }}>third party</th>
                <th className="border-b-2 pb-2 pr-4 text-left font-black" style={{ borderColor: "var(--color-lime)" }}>what they get</th>
                <th className="border-b-2 pb-2 text-left font-black" style={{ borderColor: "var(--color-lime)" }}>why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b py-2 pr-4 align-top font-bold" style={{ borderColor: "var(--color-card-2)", color: "var(--color-void)" }}>stripe</td>
                <td className="border-b py-2 pr-4 align-top" style={{ borderColor: "var(--color-card-2)" }}>payment details, billing email, amount</td>
                <td className="border-b py-2 align-top" style={{ borderColor: "var(--color-card-2)" }}>processing the $25 deposit and any card payments</td>
              </tr>
              <tr>
                <td className="border-b py-2 pr-4 align-top font-bold" style={{ borderColor: "var(--color-card-2)", color: "var(--color-void)" }}>cal.com</td>
                <td className="border-b py-2 pr-4 align-top" style={{ borderColor: "var(--color-card-2)" }}>booking details for appointments booked through cal.com links</td>
                <td className="border-b py-2 align-top" style={{ borderColor: "var(--color-card-2)" }}>some booking flows run on their scheduler</td>
              </tr>
              <tr>
                <td className="border-b py-2 pr-4 align-top font-bold" style={{ borderColor: "var(--color-card-2)", color: "var(--color-void)" }}>sms/email providers</td>
                <td className="border-b py-2 pr-4 align-top" style={{ borderColor: "var(--color-card-2)" }}>your phone number or email and message content</td>
                <td className="border-b py-2 align-top" style={{ borderColor: "var(--color-card-2)" }}>delivering reminders, confirmations, and replies</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 align-top font-bold" style={{ color: "var(--color-void)" }}>website hosting provider</td>
                <td className="py-2 pr-4 align-top">standard server logs</td>
                <td className="py-2 align-top">keeping the site online and secure</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          each of these processes data under their own privacy policies and their own security
          practices. beyond that list, i share personal information only if the law requires it (a
          valid subpoena, for example) or if it's necessary to protect someone's safety or my legal
          rights.
        </p>
      </LegalSection>

      <LegalSection title="4. sms &amp; email communications">
        <p>
          by giving me your phone number or email when booking, you're agreeing to receive{" "}
          <strong>transactional messages</strong> about your appointments: booking confirmations,
          reminders, the 2-hour confirmation request, schedule changes, and replies to things you
          send me. message and data rates from your carrier may apply.
        </p>
        <p>
          you can opt out of reminders any time by replying STOP to a text or telling me directly —
          but fair warning: if you opt out, you might miss the 2-hour confirmation window, and the
          slot-release rule in the terms still applies. opting out of marketing-style messages (if
          i ever send any) will never affect your bookings.
        </p>
      </LegalSection>

      <LegalSection title="5. how long i keep it">
        <ul className="list-disc space-y-1.5 pl-6">
          <li><strong>booking records &amp; contact info:</strong> kept while you're an active client and for a reasonable period after (generally up to 3 years) so rebooking is easy and i can answer "what did we do last time?";</li>
          <li><strong>payment &amp; invoice records:</strong> kept as long as tax and accounting rules require (typically 7 years);</li>
          <li><strong>contact form messages:</strong> kept until the conversation is resolved, then periodically cleared out;</li>
          <li><strong>site logs:</strong> rotated by the hosting provider on their normal schedule.</li>
        </ul>
        <p>
          when data is no longer needed, it's deleted or anonymized. you can always ask me to
          delete sooner — see the next section.
        </p>
      </LegalSection>

      <LegalSection title="6. your rights &amp; choices">
        <p>you can, at any time:</p>
        <ul className="list-disc space-y-1.5 pl-6">
          <li><strong>see</strong> what personal information i have about you;</li>
          <li><strong>correct</strong> anything that's wrong;</li>
          <li><strong>delete</strong> your information (subject to records i'm legally required to keep, like tax documents);</li>
          <li><strong>opt out</strong> of sms or email reminders;</li>
          <li><strong>ask questions</strong> about any of this.</li>
        </ul>
        <p>
          to do any of the above: text or call{" "}
          <L href="tel:425-918-2029">425-918-2029</L>, or email{" "}
          <L href="mailto:mykeypocket@icloud.com">mykeypocket@icloud.com</L> (alternate:{" "}
          <L href="mailto:itspocketmykey@gmail.com">itspocketmykey@gmail.com</L>). i'll respond
          within a reasonable time — usually fast, because it's just me and i read everything.
        </p>
        <p>
          washington residents: if state privacy laws give you additional rights (access,
          correction, deletion, appeal), i honor them through the same contact channels, no special
          form required.
        </p>
      </LegalSection>

      <LegalSection title="7. security">
        <p>
          this is a one-person studio, and i treat your information accordingly: payment data stays
          inside stripe, booking data lives in the booking system, and i don't keep paper copies of
          your personal details lying around. no system is perfectly secure, but i use reputable
          providers and limit what exists in the first place — the less data held, the less there
          is to lose.
        </p>
      </LegalSection>

      <LegalSection title="8. kids">
        <p>
          my services and this site aren't directed at children under 13, and i don't knowingly
          collect their information online. if a minor is getting a cut, a parent or guardian books
          and provides the contact details.
        </p>
      </LegalSection>

      <LegalSection title="9. changes to this policy">
        <p>
          if this policy changes, the new version goes up on this page with a new effective date.
          for anything significant, i'll note it on the site before it takes effect. continuing to
          book after a change means you accept the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="10. contact">
        <p>
          pocket studio / mykey pocket — seattle, wa (house calls only)
          <br />
          text or call: <L href="tel:425-918-2029">425-918-2029</L>
          <br />
          email: <L href="mailto:mykeypocket@icloud.com">mykeypocket@icloud.com</L> (alternate:{" "}
          <L href="mailto:itspocketmykey@gmail.com">itspocketmykey@gmail.com</L>)
        </p>
        <p>
          pocket studio is an independent, solo operation and is{" "}
          <strong>not affiliated with rudy's barbershop</strong> or any other salon or barbershop
          chain.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
