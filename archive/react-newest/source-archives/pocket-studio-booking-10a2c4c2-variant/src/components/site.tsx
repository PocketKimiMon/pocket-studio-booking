import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { contact } from "../content";

const links = [
  ["/", "Home"], ["/services", "Services"], ["/about", "About"],
  ["/updates", "Updates"], ["/policies", "Policies"], ["/book", "Book"],
] as const;

export function Site({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-[var(--color-bone)] text-[var(--color-void)]" style={{fontFamily:"var(--font-sans)"}}>
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[color:var(--color-bone)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="text-xl font-black" style={{fontFamily:"var(--font-display)"}}>pocket<span className="text-[var(--color-flush)]">·</span>studio</Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.slice(1).map(([to,label]) => <Link key={to} to={to} className="text-sm font-semibold hover:text-[var(--color-violet-brand)]" activeProps={{className:"text-[var(--color-violet-brand)]"}}>{label}</Link>)}
          <Link to="/book" className="rounded-full border-2 border-black bg-[var(--color-lime)] px-5 py-2 text-sm font-black shadow-[3px_3px_0_#120E17]">BOOK NOW</Link>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
      </div>
      {open && <nav className="grid gap-1 border-t border-black/10 px-5 py-3 md:hidden">{links.map(([to,label])=><Link key={to} to={to} onClick={()=>setOpen(false)} className="rounded-lg px-3 py-3 font-semibold hover:bg-white/50">{label}</Link>)}</nav>}
    </header>
    <main>{children}</main>
    <footer className="mt-20 border-t border-black/10">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2">
        <div><div className="text-xl font-black" style={{fontFamily:"var(--font-display)"}}>Pocket Studio</div><p className="mt-1 text-sm text-[var(--color-mist)]">Cuts & color in Seattle. Bold looks, zero salon attitude.</p></div>
        <div className="text-sm sm:text-right"><a href={`tel:${contact.tel}`}>{contact.phone}</a><br/><a href={`mailto:${contact.email}`}>{contact.email}</a><div className="mt-3 flex gap-4 sm:justify-end"><Link to="/terms">Terms</Link><Link to="/privacy">Privacy</Link></div></div>
      </div>
    </footer>
  </div>;
}

export function Page({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <Site><div className="mx-auto max-w-6xl px-5 py-14 sm:py-20"><p className="font-mono text-xs uppercase tracking-[.2em] text-[var(--color-flush)]">{eyebrow}</p><h1 className="mt-2 text-5xl font-black tracking-tight sm:text-7xl" style={{fontFamily:"var(--font-display)"}}>{title}</h1><div className="mt-10">{children}</div></div></Site>;
}

export function Card({ children }: { children: ReactNode }) { return <div className="rounded-2xl border border-black/15 bg-white p-6 shadow-[5px_5px_0_rgba(18,14,23,.08)]">{children}</div>; }
