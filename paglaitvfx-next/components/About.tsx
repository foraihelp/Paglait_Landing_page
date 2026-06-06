"use client";
import { motion } from "framer-motion";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

const features = [
  { i: <Icon.Bolt/>,   t: "AI Powered",     c: "Intelligent automation for modern production." },
  { i: <Icon.Layers/>, t: "Pipeline Design",c: "Scalable, robust & future-ready pipelines." },
  { i: <Icon.Chip/>,   t: "Production Tech",c: "Custom tools for creative freedom." },
  { i: <Icon.Globe/>,  t: "Global Delivery",c: "Trusted by studios worldwide." },
];
const stats = [
  { n: "10+",   l: "Years of Experience" },
  { n: "250+",  l: "Projects Delivered" },
  { n: "50+",   l: "Talented Artists" },
  { n: "100M+", l: "Frames Processed" },
];

export default function About() {
  return (
    <section className="border-t border-line py-[90px]" data-screen-label="03 About">
      <div className="max-w-[1320px] mx-auto px-10">
        <Reveal>
          <div className="shead-tag mb-7">▸ About Us</div>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12">
          <Reveal direction="left">
            <h2 className="font-display font-bold text-[68px] leading-[0.94] tracking-tighter mb-5">
              Where Art <br/><em className="not-italic text-accent">Meets Technology</em>
            </h2>
            <p className="text-ink-2 leading-[1.6] text-sm mb-7 max-w-[320px]">
              PaglaitVFX is a next-generation studio building cinematic experiences and intelligent pipelines for the future of content creation.
            </p>
            <MagneticButton className="btn btn-ghost">More About Us <span className="arr"><Icon.ArrR/></span></MagneticButton>
          </Reveal>

          <Reveal>
            {/* Feature cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-7">
              {features.map((f, i) => (
                <motion.div
                  key={f.t}
                  className="relative bg-gradient-to-b from-[#14100c]/70 to-[#0a0806]/70 border border-line p-[18px]"
                  whileHover={{ y: -2, borderColor: "rgba(255,122,0,0.5)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="corner tl"/><span className="corner br"/>
                  <div className="w-9 h-9 grid place-items-center bg-accent/[0.08] border border-accent/40 rounded-full mb-3.5 text-accent">
                    {f.i}
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-ink mb-2">{f.t}</div>
                  <div className="text-xs text-ink-3 leading-[1.55]">{f.c}</div>
                </motion.div>
              ))}
            </div>

            {/* Studio scene */}
            <div className="studio relative border border-line overflow-hidden flex items-stretch" style={{aspectRatio: "1320/300"}}>
              <div className="absolute inset-x-0 bottom-0 h-[60%] flex gap-1 px-3">
                {Array.from({length: 5}).map((_, i) => <div key={i} className="studio-mon flex-1"/>)}
              </div>
              <div className="absolute left-[18px] bottom-[14px] inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-2 bg-black/55 px-2.5 py-1.5 border border-line z-10">
                <span className="w-6 h-6 rounded-full border border-accent grid place-items-center bg-accent/10">
                  <span className="inline-block w-0 h-0" style={{borderLeft:"6px solid var(--accent)", borderTop:"4px solid transparent", borderBottom:"4px solid transparent", marginLeft:"1px"}}/>
                </span>
                Experience Our Studio
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-7">
              {stats.map((s, i) => (
                <Reveal key={s.l} delay={i * 0.06}>
                  <div className="font-display font-bold text-[40px] text-accent leading-none tracking-tighter">{s.n}</div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-3 mt-1.5">{s.l}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
