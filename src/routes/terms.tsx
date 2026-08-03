import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { LegalLayout, LegalSection } from "../components/LegalLayout";
import { headFor } from "../lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => headFor("/terms"),
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
      title="terms of service"
      updated="july 29, 2026"
      intro="these terms govern your use of the pocket studio website and any appointment you book with pocket studio / mykey pocket — a solo hair artist (they/them) in seattle, wa, currently doing house calls only. by booking an appointment, paying a deposit, or using this site, you agree to these terms."
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
          <li>book through the site (or a cal.com link), pay a <strong>$25 deposit</strong>, get a reference code. the deposit comes off your total.</li>
          <li>the calendar opens <strong>on the 1st for the month ahead</strong>. cuts and color both need some lead time so i can do this right.</li>
          <li>i text/email a confirmation request <strong>2 hours before</strong> your appointment. no reply = the slot may be released.</li>
          <li>cancel with at least <strong>24 hours' notice</strong> and you're fine. no-call-no-show can be charged <strong>up to the full service amount</strong>.</li>
          <li>prices are quoted before or at the chair and depend on your hair. <strong>payment is due at the appointment.</strong></li>
          <li>house calls: give me a safe, ready spot, an accurate address, and a heads-up on allergies and past chemical work.</li>
          <li>pocket studio is <strong>not affiliated with rudy's barbershop</strong>.</li>
        </ul>
        <p className="mt-3">
          the full terms below control if there's ever a conflict with this summary.
        </p>
      </div>

      <LegalSection title="1. the services">
        <p>
          pocket studio provides hair services by appointment at your location within the seattle
          area (within 30 miles of seattle). current menu:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr style={{ color: "var(--color-void)" }}>
                <th className="border-b-2 pb-2 pr-4 text-left font-black" style={{ borderColor: "var(--color-lime)" }}>service</th>
                <th className="border-b-2 pb-2 pr-4 text-left font-black" style={{ borderColor: "var(--color-lime)" }}>duration</th>
                <th className="border-b-2 pb-2 text-left font-black" style={{ borderColor: "var(--color-lime)" }}>price</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["buzz cut", "30 min"],
                ["short cut", "45 min"],
                ["long cut", "60 min"],
                ["new-client color consult", "45 min"],
                ["existing-client color appointment", "3 hr (up to 5 for complex)"],
              ].map(([service, duration]) => (
                <tr key={service}>
                  <td className="border-b py-2 pr-4 align-top font-bold" style={{ borderColor: "var(--color-card-2)", color: "var(--color-void)" }}>{service}</td>
                  <td className="border-b py-2 pr-4 align-top" style={{ borderColor: "var(--color-card-2)" }}>{duration}</td>
                  <td className="border-b py-2 align-top" style={{ borderColor: "var(--color-card-2)" }}>priced at the chair</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          listed durations and prices are the baseline. actual time and final price vary with hair
          length, density, condition, history, and complexity — anything beyond the baseline is
          quoted before or at the chair, never after the fact.
        </p>
        <p>
          <strong>travel fee:</strong> house calls are seattle-area only. travel is{" "}
          <strong>currently free</strong> while i'm between chairs — but that won't last forever.
          the fee structure is <strong>$25 base + $2 per mile from seattle</strong>, and if it's in
          effect it's quoted before you book, never after. no surprises.
        </p>
      </LegalSection>

      <LegalSection title="2. booking">
        <ul className="list-disc space-y-1.5 pl-6">
          <li>appointments are booked through the <strong>booking engine on this site</strong>; some booking flows run through <strong>cal.com</strong>, and those bookings are also subject to these terms.</li>
          <li>the booking calendar <strong>opens on the 1st of each month for the full month ahead</strong>, first come, first served — and i don't hold slots.</li>
          <li>minimum lead times: <strong>haircuts 2 days, new-client color consults 3 days, existing-client color 1 week.</strong> color takes prep and i won't wing it. need it sooner? the emergency request option on the contact page exists for that, but nothing is guaranteed.</li>
          <li>every booking gets a <strong>reference code</strong> — keep it, it's how we find and manage your booking.</li>
          <li>a booking is a reservation of my time, not a guarantee of a specific result. hair is a collaboration; we'll talk before scissors move.</li>
        </ul>
        <p>
          i may reschedule a booking for safety or availability reasons; you'll be notified as early
          as possible.
        </p>
      </LegalSection>

      <LegalSection title="3. deposits">
        <ul className="list-disc space-y-1.5 pl-6">
          <li>a <strong>$25 deposit</strong> is required to hold your slot, paid via a <strong>stripe payment link</strong> after you book.</li>
          <li>the deposit is <strong>applied to your total</strong> at the appointment.</li>
          <li>stripe processes the payment; i never see your card number. refunds of deposits, where owed under these terms, go back through stripe.</li>
          <li>a slot isn't fully held until the deposit is paid. unpaid bookings may be released.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. confirmation rule">
        <ul className="list-disc space-y-1.5 pl-6">
          <li><strong>2 hours before</strong> your appointment, i send a confirmation request by text and/or email.</li>
          <li>if i don't hear back from you, <strong>the slot may be released</strong> and the appointment treated as cancelled under section 5.</li>
          <li>life happens — if you confirm late or reach out, i'll do my best to keep you in, but released slots go to the next person waiting.</li>
        </ul>
        <p>
          opting out of sms/email means you take responsibility for confirming another way.
        </p>
      </LegalSection>

      <LegalSection title="5. cancellations &amp; no-shows">
        <ul className="list-disc space-y-1.5 pl-6">
          <li>you can cancel free of charge up to <strong>24 hours before</strong> your appointment, by texting or calling <L href="tel:425-918-2029">425-918-2029</L>. genuine emergencies are the exception — emergencies are real and i'm reasonable.</li>
          <li>cancellations inside 24 hours may forfeit the deposit.</li>
          <li>a <strong>no-call-no-show</strong> — you're not there, i can't reach you, no cancellation — may be charged <strong>up to the full service amount</strong>. if there's a card on file it may be charged; otherwise i'll <strong>send an invoice</strong>, which is due on receipt.</li>
          <li>deposits for appointments i have to cancel on my end are always refunded in full.</li>
          <li>repeat no-shows may lose the ability to book in advance.</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. pricing &amp; payment">
        <ul className="list-disc space-y-1.5 pl-6">
          <li>prices are <strong>quoted before or at the chair</strong> and can vary based on hair length, density, condition, and complexity. the menu prices above are the baseline; if your hair needs more, i'll tell you before we start, not after.</li>
          <li><strong>color is always priced at the chair</strong> — it depends on your hair, your history, and what we're doing. a consult (required for new color clients) is how we get to a real number.</li>
          <li><strong>payment is due in full at the time of the appointment</strong>, minus your deposit, unless we work something out in advance. taxes apply if required.</li>
          <li>quotes are good for the appointment they're quoted at. prices on the site may change, but a confirmed booking keeps the price quoted at booking unless the scope changes at the chair by agreement.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. house-call terms">
        <p>because i come to you, i need a few things from your side:</p>
        <ul className="list-disc space-y-1.5 pl-6">
          <li><strong>a safe, ready spot:</strong> decent light, a chair, access to an outlet, and enough room to work. if the space is unsafe or unworkable, i may have to decline the service, and the no-show policy may apply — nothing personal.</li>
          <li><strong>an accurate address and access details</strong> (gate codes, parking, which floor). wrong or incomplete addresses can cost us the appointment window.</li>
          <li><strong>honest disclosure:</strong> tell me about <strong>allergies, sensitivities, and prior chemical work</strong> (color, bleach, relaxers, keratin, henna, box dye — all of it) before i start. this is a safety requirement, not a formality. undisclosed history that changes the service may result in rescheduling or repricing at the chair.</li>
          <li><strong>be ready at the agreed time</strong>, secure pets if we haven't met them, and don't be impaired during the appointment.</li>
          <li>bookings for anyone under 18 are made by a parent or guardian, who provides the contact details.</li>
          <li>the travel fee (section 1) applies when in effect and is always quoted up front.</li>
        </ul>
      </LegalSection>

      <LegalSection title="8. liability">
        <ul className="list-disc space-y-1.5 pl-6">
          <li>i carry out every service with professional care, but you acknowledge that hair services — especially chemical services — carry inherent risks (sensitivity or allergic reaction, breakage, unexpected lift or tone), and results vary by hair type, condition, and history. a consultation does not guarantee a specific final look, and a strand or patch test may be recommended before color work.</li>
          <li>to the fullest extent allowed by law, my total liability for any claim arising from a service or these terms is <strong>limited to the amount you paid for the service giving rise to the claim</strong>.</li>
          <li>i'm not liable for indirect or consequential damages (missed events, lost wages, emotional distress), or for reactions or results caused by <strong>undisclosed allergies, sensitivities, or prior chemical work</strong>.</li>
          <li>nothing in these terms limits liability that can't be limited under washington law, including for gross negligence or intentional misconduct.</li>
        </ul>
      </LegalSection>

      <LegalSection title="9. intellectual property &amp; photos">
        <p>
          the website — text, photography, design, logos, and branding — belongs to pocket studio /
          mykey pocket. you may not copy, reproduce, or reuse site content for commercial purposes
          without written permission. photos i take of finished work are only used (portfolio,
          socials) with your permission, and you can withdraw that permission anytime by text or
          email.
        </p>
      </LegalSection>

      <LegalSection title="10. acceptable use of the site">
        <p>
          don't misuse the site: no scraping, no fake or fraudulent bookings, no interfering with
          the booking engine or other people's appointments. fraudulent bookings or chargeback
          abuse may result in cancellation of bookings and refusal of future service.
        </p>
      </LegalSection>

      <LegalSection title="11. affiliation disclaimer">
        <p>
          pocket studio is an independent, one-person studio. it is{" "}
          <strong>not affiliated with, endorsed by, or connected to rudy's barbershop</strong> or
          any other salon or barbershop business. if you found this site through the old shop —
          same hands, separate business.
        </p>
      </LegalSection>

      <LegalSection title="12. governing law &amp; disputes">
        <p>
          these terms are governed by the laws of the <strong>state of washington</strong>. any
          dispute will be handled in the state or federal courts located in{" "}
          <strong>king county, washington</strong>, unless we agree to resolve it informally first
          — which i'd genuinely prefer. text me and let's talk before it becomes a thing.
        </p>
      </LegalSection>

      <LegalSection title="13. changes to these terms">
        <p>
          i may update these terms as the business grows (new chair, new studio — fingers crossed).
          the current version lives on this page with its effective date, and material changes will
          be flagged on the site before they take effect. bookings made before a change stay under
          the policies in effect when you booked, except where the law says otherwise. continuing
          to use the site or services after an update means you accept the new terms.
        </p>
      </LegalSection>

      <LegalSection title="14. contact">
        <p>
          questions about any of this — before or after booking:
          <br />
          text or call: <L href="tel:425-918-2029">425-918-2029</L>
          <br />
          email: <L href="mailto:mykeypocket@icloud.com">mykeypocket@icloud.com</L> (alternate:{" "}
          <L href="mailto:itspocketmykey@gmail.com">itspocketmykey@gmail.com</L>)
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
