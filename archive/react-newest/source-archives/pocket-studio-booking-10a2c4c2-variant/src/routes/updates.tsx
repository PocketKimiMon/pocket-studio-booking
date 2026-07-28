import { createFileRoute } from "@tanstack/react-router";
import { Page, Card } from "../components/site";
import { updates } from "../content";

export const Route = createFileRoute("/updates")({ component: Updates });

function Updates() {
  return <Page eyebrow="what's going on" title="Studio updates.">
    <div className="space-y-4">
      {updates.map((u) => (
        <Card key={u.title}>
          <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-ash)]">{u.date}</div>
          <h3 className="mt-1 text-xl font-black" style={{fontFamily:"var(--font-display)"}}>{u.title}</h3>
          <p className="mt-1 text-sm text-[var(--color-mist)]">{u.body}</p>
        </Card>
      ))}
    </div>
    <p className="mt-8 text-sm text-[var(--color-mist)]">To add a post, edit <code>src/content.ts</code>.</p>
  </Page>;
}
