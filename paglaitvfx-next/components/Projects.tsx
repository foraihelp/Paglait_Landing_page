"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "./Icons";
import Reveal from "./Reveal";

const tabs = ["All","Feature Films","Commercials","Music Videos","AI Experiments","Pipeline Tech"];
const projects = [
  { t: "The Dark Horizon",    s: "Feature Film",    scene: "scene-castle"    },
  { t: "Echoes of Tomorrow",  s: "Commercial",      scene: "scene-astronaut" },
  { t: "Lost Signal",         s: "Music Video",     scene: "scene-figure"    },
  { t: "AI Realm",            s: "AI Experiment",   scene: "scene-creature"  },
  { t: "Pipeline Visualizer", s: "R&D Project",     scene: "scene-pipeline"  },
];

export default function Projects() {
  const [tab, setTab] = useState(0);
  return (
    <section className="border-t border-line py-[70px]" data-screen-label="05 Projects">
      <div className="max-w-[1320px] mx-auto px-10">
        <Reveal>
          <div className="flex items-center justify-between mb-9 flex-wrap gap-4">
            <div className="shead-tag">Featured Projects</div>
            <div className="flex items-center gap-8 flex-wrap">
              <div className="flex gap-5">
                {tabs.map((t, i) => (
                  <button
                    key={t}
                    onClick={() => setTab(i)}
                    className={`font-mono text-[10px] tracking-[0.22em] uppercase py-1 border-b transition-colors ${i === tab ? "text-ink border-accent" : "text-ink-3 border-transparent hover:text-ink"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex gap-1.5 ml-auto">
                <button className="w-8 h-8 border border-line-2 grid place-items-center text-ink-2 hover:border-accent hover:text-accent transition-colors"><Icon.ArrL/></button>
                <button className="w-8 h-8 border border-line-2 grid place-items-center text-ink-2 hover:border-accent hover:text-accent transition-colors"><Icon.ArrR/></button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <motion.div
                className="relative aspect-[3/4] border border-line overflow-hidden bg-panel cursor-pointer"
                whileHover={{ y: -4, borderColor: "rgba(255,122,0,0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 ${p.scene}`}/>
                <div className="absolute inset-0" style={{background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.95) 100%)"}}/>
                <div className="absolute left-4 right-4 bottom-4 z-10">
                  <div className="font-display font-bold text-[20px] leading-[1.05] tracking-tighter uppercase mb-1.5">{p.t}</div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent">{p.s}</div>
                </div>
                <div className="absolute right-3 bottom-3 w-7 h-7 bg-accent grid place-items-center z-10" style={{color:"#0a0604"}}>
                  <Icon.Plus/>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
