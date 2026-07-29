import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { seoHead } from "../lib/seo";

export const Route = createFileRoute("/terms")({
  head: seoHead("/terms"),
  component: Terms,
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

function Ul({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5">{children}</ul>;
}

function Li({ children }: { children: ReactNode }) {
  return <li>{children}</li>;
}

const SUMMARY_POINTS = [
  <>book through the site (or a cal.com link), pay a <Strong>$25 deposit</Strong>, get a reference code. the deposit comes off your total.</>,
  <>the calendar opens <Strong>on the 1st for the month ahead</Strong>. cuts book at least <Strong>2 days out</Strong>; new-client color consults <Strong>3 days</Strong>; existing-client color <Strong>1 week</Strong>.</>,
  <>i text/email a confirmation request <Strong>2 hours before</Strong> your appointment. no reply = the slot may be released.</>,
  <>cancel with at least <Strong>24 hours' notice</Strong> and you're fine. no-call-no-show can be charged <Strong>up to the full service amount</Strong>.</>,
  <>prices are quoted before or at the chair and depend on your hair. color is priced at the chair. <Strong>payment is due at the appointment.</Strong></>,
  <>house calls: give me a safe, ready spot, an accurate address, and a heads-up on allergies and past chemical work.</>,
  <>pocket studio is <Strong>not affiliated with rudy's barbershop</Strong>.</>,
];

const MENU: { service: string; duration: string; price: string }[] = [
  { service: "buzz cut", duration: "30 min", price: "$50" },
  { service: "taper / fade cut", duration: "45 min", price: "$65" },
  { service: "short cut", duration: "45 min", price: "$65" },
  { service: "long cut", duration: "60 min", price: "$100" },
  { service: "curl cut", duration: "75 min", price: "$120" },
  { service: "new-client color consult", duration: "45 min", price: "$35" },
  { service: "existing-client color", duration: "3–5 hr", price: "$120+" },
];

function Terms() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bone)", color: "var(--color-void)", fontFamily: "var(--font-sans)" }}>
      <div className="mx-auto max-w-[720px] px-5 py-14 sm:px-8">
        <Link to="/" className="text-sm underline" style={{ color: "var(--color-ash)" }}>← back</Link>
        <h1 className="mt-6 text-4xl font-black" style={{ fontFamily: "var(--font-display)" }}>terms of service</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>effective date: july 29, 2026</p>

        <div className="mt-8 space-y-5 text-[15px] leading-relaxed" style={{ color: "var(--color-mist)" }}>
          <P>
            these terms govern your use of the pocket studio website and any appointment you book
            with <Strong>pocket studio / mykey pocket</Strong> — a solo hair artist (they/them)
            based in seattle, wa, currently doing <Strong>house calls only</Strong>. "i/me/my"
            means mykey pocket; "you" means the client. by booking an appointment, paying a
            deposit, or using this site, you agree to these terms.
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
              the full terms below control if there's ever a conflict with this summary.
            </p>
          </aside>

          <H2>1. the services</H2>
          <P>
            pocket studio provides hair services by appointment at your location within the seattle
            area. current menu:
          </P>
          <div className="overflow-x-auto rounded-md" style={{ border: "1px solid var(--color-void)" }}>
            <table className="w-full min-w-[460px] border-collapse text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--color-void)", background: "rgba(255,255,255,0.35)" }}>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-void)", fontFamily: "var(--font-mono)" }}>service</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-void)", fontFamily: "var(--font-mono)" }}>duration</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-void)", fontFamily: "var(--font-mono)" }}>price</th>
                </tr>
              </thead>
              <tbody>
                {MENU.map((row, i) => (
                  <tr key={row.service} style={{ borderBottom: i === MENU.length - 1 ? "none" : "1px solid var(--color-ash)" }}>
                    <td className="px-4 py-3 align-top"><Strong>{row.service}</Strong></td>
                    <td className="px-4 py-3 align-top">{row.duration}</td>
                    <td className="px-4 py-3 align-top">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            house calls only right now, and there's <Strong>no travel fee for now</Strong> — call
            it a thank-you while we all make the jump, and it won't last forever. if a travel fee
            is ever introduced, it'll be quoted <Strong>before</Strong> your appointment, never
            surprise-billed.
          </P>

          <H2>2. booking</H2>
          <Ul>
            <Li>appointments are booked through the <Strong>booking engine on this site</Strong>; some booking flows run through <Strong>cal.com</Strong>, and those bookings are also subject to these terms.</Li>
            <Li>the booking calendar <Strong>opens on the 1st of each month for the full month ahead</Strong>, first come, first served.</Li>
            <Li>minimum lead times: <Strong>cuts — 2 days out; new-client color consult — 3 days; existing-client color — 1 week.</Strong> need it sooner? text me at <Strong>425-918-2029</Strong> and i'll see what's possible — nothing is guaranteed.</Li>
            <Li>every booking gets a <Strong>reference code</Strong>. keep it — reply to any booking email or text (or contact me directly) with it anytime to look up, manage, or cancel your booking.</Li>
            <Li>a booking is a reservation of my time, not a guarantee of a specific result. hair is a collaboration; we'll talk before scissors move.</Li>
          </Ul>

          <H2>3. deposits</H2>
          <Ul>
            <Li>a <Strong>$25 deposit</Strong> is required to hold your slot, paid via a <Strong>stripe payment link</Strong> after you book.</Li>
            <Li>the deposit is <Strong>applied to your total</Strong> at the appointment.</Li>
            <Li>stripe processes the payment; i never see your card number. refunds of deposits, where owed under these terms, go back through stripe.</Li>
            <Li>a slot isn't fully held until the deposit is paid. unpaid bookings may be released.</Li>
          </Ul>

          <H2>4. confirmation rule</H2>
          <Ul>
            <Li><Strong>2 hours before</Strong> your appointment, i send a confirmation request by text and/or email.</Li>
            <Li>if i don't hear back from you, <Strong>the slot may be released</Strong> and the appointment treated as cancelled under section 5.</Li>
            <Li>life happens — if you confirm late or reach out, i'll do my best to keep you in, but released slots go to the next person waiting.</Li>
          </Ul>

          <H2>5. cancellations &amp; no-shows</H2>
          <Ul>
            <Li>you can cancel free of charge up to <Strong>24 hours before</Strong> your appointment, by replying to any booking email or text or by texting/calling <Strong>425-918-2029</Strong>.</Li>
            <Li>cancellations inside 24 hours may forfeit the deposit.</Li>
            <Li>a <Strong>no-call-no-show</Strong> — you're not there, i can't reach you, no cancellation — may be charged <Strong>up to the full service amount</Strong>. if there's a card on file it may be charged; otherwise i'll <Strong>send an invoice</Strong>, which is due on receipt.</Li>
            <Li>deposits for appointments i have to cancel on my end are always refunded in full.</Li>
            <Li>repeat no-shows may lose the ability to book in advance.</Li>
          </Ul>

          <H2>6. pricing &amp; payment</H2>
          <Ul>
            <Li>prices are <Strong>quoted before or at the chair</Strong> and can vary based on hair length, density, condition, and complexity. the menu prices above are the baseline; if your hair needs more, i'll tell you before we start, not after.</Li>
            <Li><Strong>color is always priced at the chair</Strong> — it depends on your hair, your history, and what we're doing. a consult (required for new color clients) is how we get to a real number.</Li>
            <Li><Strong>payment is due in full at the time of the appointment</Strong>, minus your deposit.</Li>
            <Li>quotes are good for the appointment they're quoted at. prices on the site may change, but a confirmed booking keeps the price quoted at booking unless the scope changes at the chair by agreement.</Li>
          </Ul>

          <H2>7. house-call terms</H2>
          <P>because i come to you, i need a few things from your side:</P>
          <Ul>
            <Li><Strong>a safe, ready spot:</Strong> decent light, a chair, access to an outlet, and enough room to work. if the space is unsafe or unworkable, i may have to decline the service, and the no-show policy may apply.</Li>
            <Li><Strong>an accurate address and access details</Strong> (gate codes, parking, which floor). wrong or incomplete addresses can cost us the appointment window.</Li>
            <Li><Strong>honest disclosure:</Strong> tell me about <Strong>allergies, sensitivities, and prior chemical work</Strong> (color, bleach, relaxers, keratin, henna, box dye — all of it) before i start. this is a safety requirement, not a formality. undisclosed history that changes the service may result in rescheduling or repricing at the chair.</Li>
            <Li>there's currently <Strong>no travel fee</Strong> (see section 1); if one is ever introduced it'll be quoted before your appointment, never surprise-billed.</Li>
          </Ul>

          <H2>8. liability</H2>
          <Ul>
            <Li>i carry out every service with professional care, but you acknowledge that hair services — especially chemical services — carry inherent risks, and results vary by hair type, condition, and history.</Li>
            <Li>to the fullest extent allowed by law, my total liability for any claim arising from a service or these terms is <Strong>limited to the amount you paid for the service giving rise to the claim</Strong>.</Li>
            <Li>i'm not liable for indirect or consequential damages (missed events, lost wages, emotional distress), or for reactions or results caused by <Strong>undisclosed allergies, sensitivities, or prior chemical work</Strong>.</Li>
            <Li>nothing in these terms limits liability that can't be limited under washington law, including for gross negligence or intentional misconduct.</Li>
          </Ul>

          <H2>9. intellectual property</H2>
          <P>
            the website — text, photography, design, logos, and branding — belongs to pocket studio
            / mykey pocket. you may not copy, reproduce, or reuse site content for commercial
            purposes without written permission. photos i take of finished work are only used
            (portfolio, socials) with your permission, and you can withdraw that permission anytime.
          </P>

          <H2>10. acceptable use of the site</H2>
          <P>
            don't misuse the site: no scraping, no fake or fraudulent bookings, no interfering with
            the booking engine or other people's appointments. fraudulent bookings or chargeback
            abuse may result in cancellation of bookings and refusal of future service.
          </P>

          <H2>11. affiliation disclaimer</H2>
          <P>
            pocket studio is an independent, one-person studio. it is{" "}
            <Strong>not affiliated with, endorsed by, or connected to rudy's barbershop</Strong> or
            any other salon or barbershop business.
          </P>

          <H2>12. governing law &amp; disputes</H2>
          <P>
            these terms are governed by the laws of the <Strong>state of washington</Strong>. any
            dispute will be handled in the state or federal courts located in{" "}
            <Strong>king county, washington</Strong>, unless we agree to resolve it informally first
            — which i'd genuinely prefer. text me and let's talk before it becomes a thing.
          </P>

          <H2>13. changes to these terms</H2>
          <P>
            i may update these terms as the business grows (new chair, new studio — fingers
            crossed). the current version lives on this page with its effective date, and material
            changes will be flagged on the site before they take effect. bookings made before a
            change stay under the policies in effect when you booked, except where the law says
            otherwise.
          </P>

          <H2>14. contact</H2>
          <P>
            questions about any of this — before or after booking:
            <br />
            text or call{" "}
            <a href="tel:+14259182029" className="underline" style={{ color: "var(--color-void)" }}>
              <Strong>425-918-2029</Strong>
            </a>{" "}
            · email{" "}
            <a href="mailto:mykeypocket@icloud.com" className="underline" style={{ color: "var(--color-void)" }}>
              <Strong>mykeypocket@icloud.com</Strong>
            </a>
          </P>

          <p className="mt-12 border-t pt-5 text-[13px] italic leading-relaxed" style={{ borderColor: "var(--color-ash)", color: "var(--color-ash)" }}>
            draft template notice: this document is a working draft prepared for the pocket studio
            website. it is provided for informational purposes only and does not constitute legal
            advice. before publishing, it should be reviewed by a licensed attorney familiar with
            washington state law — in particular the enforceability of no-show fees, liability
            limitations, and consumer-protection requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
