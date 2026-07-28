import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Page } from "../components/site";
import { contact } from "../content";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return <Page eyebrow="about" title="Small studio, careful hands.">
    <div className="grid gap-10 md:grid-cols-[1.2fr_.85fr]">
      <div className="space-y-4 text-lg leading-relaxed text-[var(--color-mist)]">
        <p>Hi, I'm MyKey (they/them) — a Seattle hairstylist running Pocket Studio as an indie mobile chair. Not affiliated with Rudy's Barbershop.</p>
        <p>I worked the salon floor for years, most recently at Rudy's, and I loved the people and hated the overhead. Pocket Studio is what happened when I decided clients should pay for the actual work, not for someone else's rent.</p>
        <p>Expect real conversation, honest recommendations, tea if you're around long enough, and a cut that fits how you actually live.</p>
        <ul className="space-y-2 pt-2 text-base text-[var(--color-void)]">
          <li>▍ Textured cuts, gender-inclusive shapes, grown-out grace.</li>
          <li>▍ Color built around your hair's biology — porosity, history, tone.</li>
          <li>▍ Consult-first for new color clients so pricing & timing are honest.</li>
        </ul>
      </div>
      <div className="rounded-2xl bg-[var(--color-void)] p-6 text-[var(--color-bone)] shadow-[10px_10px_0_var(--color-violet-brand)]">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-lime)]">say hi</p>
        <h3 className="mt-2 text-2xl font-bold" style={{fontFamily:"var(--font-display)"}}>Reach the chair</h3>
        <div className="mt-5 space-y-3 text-sm">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-3"><Mail size={16} className="text-[var(--color-lime)]"/>{contact.email}</a>
          <a href={`tel:${contact.tel}`} className="flex items-center gap-3"><Phone size={16} className="text-[var(--color-lime)]"/>{contact.phone}</a>
          <div className="flex items-center gap-3"><MapPin size={16} className="text-[var(--color-lime)]"/>{contact.location} · by appointment</div>
        </div>
        <p className="mt-6 text-xs text-white/60">Text is fastest. Please allow up to 24 hours for a reply outside studio hours.</p>
      </div>
    </div>
  </Page>;
}
