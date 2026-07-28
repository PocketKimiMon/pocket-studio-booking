import { createFileRoute } from "@tanstack/react-router";
import { Page, Card } from "../components/site";
import { policies } from "../content";

export const Route = createFileRoute("/policies")({ component: Policies });

function Policies() {
  return <Page eyebrow="policies" title="The house rules.">
    <div className="grid gap-3 sm:grid-cols-2">
      {policies.map(([title, body]) => (
        <Card key={title}>
          <h3 className="text-base font-bold" style={{fontFamily:"var(--font-display)"}}>{title}</h3>
          <p className="mt-1 text-sm text-[var(--color-mist)]">{body}</p>
        </Card>
      ))}
    </div>
  </Page>;
}
