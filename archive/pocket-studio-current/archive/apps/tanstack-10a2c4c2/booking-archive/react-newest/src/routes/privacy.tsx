import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pocket Studio" },
      { name: "description", content: "Privacy Policy for Pocket Studio (MyKey Pocket), an independent Seattle hair studio." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bone)", color: "var(--color-void)", fontFamily: "var(--font-sans)" }}>
      <div className="mx-auto max-w-[720px] px-5 py-14 sm:px-8">
        <Link to="/" className="text-sm underline" style={{ color: "var(--color-ash)" }}>← back</Link>
        <h1 className="mt-6 text-4xl font-black" style={{ fontFamily: "var(--font-display)" }}>Privacy Policy</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--color-ash)", fontFamily: "var(--font-mono)" }}>Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose mt-8 space-y-5 text-[15px] leading-relaxed" style={{ color: "var(--color-mist)" }}>
          <p>
            Pocket Studio, operated by MyKey Pocket in Seattle, Washington ("we," "us," "our"),
            respects your privacy. This Policy explains what we collect, why, and how we handle it.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Information we collect</h2>
          <ul className="list-disc pl-5">
            <li>Contact info you provide (name, email, phone) when booking or messaging.</li>
            <li>Appointment details (service, timing, notes) needed to serve you.</li>
            <li>Payment info handled by our payment processors — we do not store card numbers.</li>
            <li>Emergency-request form submissions (name, contact, service, timing).</li>
          </ul>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>How we use it</h2>
          <ul className="list-disc pl-5">
            <li>To schedule, confirm, and provide your services.</li>
            <li>To send appointment reminders and studio updates you request.</li>
            <li>To handle billing, cancellations, and no-show fees.</li>
            <li>To respond to questions or emergency booking requests.</li>
          </ul>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Third-party services</h2>
          <p>
            We use trusted vendors to run the studio, including Cal.com for scheduling and
            FormSubmit for form delivery. Information you enter into these tools is subject to their
            respective privacy policies.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Sharing</h2>
          <p>
            We do not sell your information. We share it only with vendors who help us operate the
            studio, or where required by law.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Retention</h2>
          <p>
            We keep records only as long as needed to provide services, comply with law, and resolve
            disputes. You can request deletion at any time.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Your choices</h2>
          <p>
            You may opt out of non-essential messages at any time. To access, update, or delete your
            information, contact us.
          </p>

          <h2 className="mt-8 text-xl font-bold" style={{ color: "var(--color-void)", fontFamily: "var(--font-display)" }}>Contact</h2>
          <p>
            Email <a className="underline" href="mailto:mykeypocket@icloud.com">mykeypocket@icloud.com</a>{" "}
            or call/text <a className="underline" href="tel:14259182029">425-918-2029</a>.
          </p>
        </div>
      </div>
    </div>
  );
}