"use client";
import Reveal from "./Reveal";

const stats = [
  { n: "250+",  l: "Projects Delivered" },
  { n: "50M+",  l: "Shots Delivered" },
  { n: "120+",  l: "Happy Clients" },
  { n: "50+",   l: "Software Tools" },
  { n: "18M+",  l: "Render Hours" },
  { n: "99.9%", l: "Uptime" },
];

export default function BigStats() {
  return (
    <section className="border-t border-b border-line py-14" data-screen-label="08 Stats">
      <div className="max-w-[1320px] mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.05}>
              <div className="font-display font-bold text-[56px] text-accent leading-none tracking-tighter">{s.n}</div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-3 mt-2">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
