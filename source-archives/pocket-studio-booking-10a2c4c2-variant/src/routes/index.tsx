import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Scissors } from "lucide-react";
import { Site } from "../components/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Site><div className="mx-auto max-w-6xl px-5 pb-20">
    <section className="pt-14 sm:pt-24"><div className="mb-5"><Scissors size={56}/></div>
      <p className="font-mono text-xs uppercase tracking-[.2em] text-[var(--color-mist)]">Seattle hair artist · house calls · former Rudy's clients welcome</p>
      <h1 className="mt-4 text-[clamp(3.5rem,11vw,8rem)] font-black leading-[.9] tracking-tight" style={{fontFamily:"var(--font-display)"}}>POCKET <span className="inline-block rounded-lg bg-[var(--color-lime)] px-3 shadow-[6px_6px_0_#120E17]">STUDIO</span></h1>
      <p className="mt-8 max-w-2xl text-2xl leading-tight" style={{fontFamily:"var(--font-display)"}}>Cuts & color at your place.<br/>Bold looks, zero salon attitude.</p>
      <div className="mt-10 max-w-xl rounded-2xl border-2 border-black bg-[var(--color-lime)] p-6 shadow-[9px_9px_0_#120E17]"><p className="font-mono text-xs uppercase">Current offer</p><h2 className="mt-2 text-2xl font-black" style={{fontFamily:"var(--font-display)"}}>Refer a friend, both get 20% off your next cut.</h2><p className="mt-2">Send someone new my way. When they book and sit, you both get 20% off your next appointments.</p></div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2"><div className="rounded-xl border-l-4 border-[var(--color-violet-brand)] bg-white/60 p-4 text-sm"><b>Booking runs on Cal.com.</b> Calendar opens about one month at a time and needs at least 2 days' notice.</div><div className="rounded-xl border-l-4 border-[var(--color-flush)] bg-white/60 p-4 text-sm"><b>House calls, Seattle area only.</b> Safe, reasonably private workspace required.</div></div>
      <div className="mt-8 flex flex-wrap gap-5 font-mono text-xs text-[var(--color-mist)]"><span><Clock size={14} className="mr-1 inline"/>THU 11–6 · FRI 12–5 · SAT–SUN 12–8</span><span><MapPin size={14} className="mr-1 inline"/>Seattle, WA</span></div>
    </section>
    <section className="mt-24 grid gap-5 sm:grid-cols-3"><Link to="/services" className="rounded-2xl bg-white p-6 hover:-translate-y-1"><p className="font-mono text-xs text-[var(--color-flush)]">01</p><h2 className="mt-2 text-2xl font-black" style={{fontFamily:"var(--font-display)"}}>Services + pricing</h2><p className="mt-2 text-sm text-[var(--color-mist)]">Cuts, color, consults, tea.</p></Link><Link to="/about" className="rounded-2xl bg-[var(--color-void)] p-6 text-[var(--color-bone)] hover:-translate-y-1"><p className="font-mono text-xs text-[var(--color-lime)]">02</p><h2 className="mt-2 text-2xl font-black" style={{fontFamily:"var(--font-display)"}}>About the chair</h2><p className="mt-2 text-sm text-white/70">Small studio, careful hands.</p></Link><Link to="/book" className="rounded-2xl bg-[var(--color-violet-brand)] p-6 text-white hover:-translate-y-1"><p className="font-mono text-xs text-white/70">03</p><h2 className="mt-2 text-2xl font-black" style={{fontFamily:"var(--font-display)"}}>Book an appointment</h2><p className="mt-2 text-sm text-white/80">Pick your slot on Cal.com.</p></Link></section>
  </div></Site>;
}
