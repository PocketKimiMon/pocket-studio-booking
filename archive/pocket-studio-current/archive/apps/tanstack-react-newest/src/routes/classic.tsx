import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/classic")({ component: Classic });

function Classic() {
  return <div className="flex min-h-screen flex-col bg-[var(--color-void)]">
    <div className="flex items-center justify-between px-4 py-2 text-[var(--color-bone)]">
      <span className="font-mono text-xs uppercase tracking-wider">Classic static page (preserved intact)</span>
      <Link to="/" className="font-mono text-xs underline">← all versions</Link>
    </div>
    <iframe src="/classic/index.html" title="Classic Pocket Studio booking page" className="w-full flex-1 border-0 bg-white" style={{minHeight:"90vh"}} />
  </div>;
}
