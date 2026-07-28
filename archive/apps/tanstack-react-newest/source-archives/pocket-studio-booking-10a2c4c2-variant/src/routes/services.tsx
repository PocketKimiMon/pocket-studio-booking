import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Card } from "../components/site";
import { services } from "../content";

export const Route = createFileRoute("/services")({ component: Services });

function Services() {
  return <Page eyebrow="services" title="What you can book.">
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((s) => (
        <Card key={s.slug}>
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-xl font-black" style={{fontFamily:"var(--font-display)"}}>{s.name}</h3>
            <span className="font-mono text-sm text-[var(--color-violet-brand)]">{s.price}</span>
          </div>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-[var(--color-ash)]">{s.duration} · {s.lead} out</p>
          <p className="mt-3 text-sm text-[var(--color-mist)]">{s.description}</p>
          <Link to="/book" className="mt-4 inline-block rounded-full bg-[var(--color-void)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-lime)]">Book →</Link>
        </Card>
      ))}
    </div>
    <p className="mt-8 text-sm text-[var(--color-mist)]">Book 2+ days ahead and get tea in-service plus real product recs for your hair.</p>
  </Page>;
}
