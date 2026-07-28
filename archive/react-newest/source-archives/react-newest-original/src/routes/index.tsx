import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: MergeHub });

const versions = [
  {
    to: "/studio",
    label: "Newest React studio",
    detail: "Original 10a2c4c2 page: booking helper, service links, policies, emergency request.",
    color: "var(--color-lime)",
  },
  {
    to: "/mobile",
    label: "Mobile / house-call page",
    detail: "Original mykey-pocket-studio page: referral offer, pricing, posts, house-call copy.",
    color: "var(--color-violet-brand)",
  },
  {
    to: "/classic",
    label: "Classic static booking page",
    detail: "Original pocket-studio-booking HTML page: Cal.com embed, legal pages, assets, operations docs.",
    color: "var(--color-flush)",
  },
];

function MergeHub() {
  return <div className="min-h-screen bg-[var(--color-bone)] px-5 py-16 text-[var(--color-void)]" style={{fontFamily:"var(--font-sans)"}}>
    <div className="mx-auto max-w-5xl">
      <p className="font-mono text-xs uppercase tracking-[.2em] text-[var(--color-flush)]">Pocket Studio · local merge workspace</p>
      <h1 className="mt-4 text-6xl font-black leading-[.9] tracking-tight sm:text-8xl" style={{fontFamily:"var(--font-display)"}}>THREE<br/><span className="inline-block rounded-lg bg-[var(--color-lime)] px-3 shadow-[6px_6px_0_#120E17]">PAGES.</span></h1>
      <p className="mt-8 max-w-xl text-xl text-[var(--color-mist)]">Nothing removed. Each original page is preserved as its own route while we decide the final merge.</p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {versions.map((v, i) => <Link key={v.to} to={v.to} className="group rounded-2xl border-2 border-black bg-white p-6 shadow-[6px_6px_0_#120E17] transition hover:-translate-y-1">
          <div className="font-mono text-xs text-[var(--color-ash)]">0{i + 1}</div>
          <div className="mt-4 h-3 w-20 rounded-full" style={{background:v.color}} />
          <h2 className="mt-5 text-2xl font-black" style={{fontFamily:"var(--font-display)"}}>{v.label}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-mist)]">{v.detail}</p>
          <span className="mt-6 inline-block font-mono text-xs uppercase tracking-wider group-hover:underline">Open page →</span>
        </Link>)}
      </div>
      <div className="mt-12 rounded-2xl bg-[var(--color-void)] p-6 text-[var(--color-bone)]">
        <h2 className="text-2xl font-black" style={{fontFamily:"var(--font-display)"}}>Preservation</h2>
        <p className="mt-2 text-sm text-white/70">Full source copies are stored in <code>source-archives/</code>. The classic page remains intact under <code>public/classic/</code>. Choose what to combine next.</p>
      </div>
    </div>
  </div>;
}
