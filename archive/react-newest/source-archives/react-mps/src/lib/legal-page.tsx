import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const legalStyles = `
:root{--bone:#F3ECDE;--void:#120E17;--lime:#8ACE00;--flush:#FF5A5F;--violet:#9B5CFF;--ash:#6F6878;--mist:#5A5460}
.lp{background:var(--bone);color:var(--void);font-family:'Inter',system-ui,sans-serif;min-height:100vh;padding:32px 22px 60px;line-height:1.6}
.lp .box{max-width:720px;margin:0 auto}
.lp a{color:var(--violet)}
.lp .back{font-family:'IBM Plex Mono',monospace;font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:var(--void);display:inline-block;margin-bottom:24px;text-decoration:none;border-bottom:1.5px solid var(--void);padding-bottom:2px}
.lp .back:hover{color:var(--violet);border-color:var(--violet)}
.lp h1{font-family:'Bricolage Grotesque',serif;font-weight:750;font-size:clamp(30px,6vw,48px);letter-spacing:-.02em;margin:0 0 8px;line-height:1.05}
.lp .updated{font-family:'IBM Plex Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--ash);margin-bottom:24px}
.lp h2{font-family:'Bricolage Grotesque',serif;font-weight:600;font-size:22px;letter-spacing:-.01em;margin:28px 0 8px}
.lp p{margin:0 0 12px;color:var(--void);font-size:15.5px}
.lp ul{padding-left:20px;margin:0 0 14px}
.lp li{margin:4px 0;font-size:15.5px}
.lp .foot{margin-top:40px;padding-top:20px;border-top:1px dashed rgba(18,14,23,.25);font-family:'IBM Plex Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--ash);text-align:center}
`;

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: legalStyles }} />
      <div className="lp">
        <div className="box">
          <Link to="/" className="back">← back to booking</Link>
          <h1>{title}</h1>
          <div className="updated">Last updated: July 17, 2026</div>
          {children}
          <div className="foot">© pocket studio / mykey pocket · seattle, wa</div>
        </div>
      </div>
    </>
  );
}