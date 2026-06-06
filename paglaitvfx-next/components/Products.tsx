"use client";
import { motion } from "framer-motion";
import { Icon } from "./Icons";
import Reveal from "./Reveal";

const products = [
  { name: "PVFX Pipeline", desc: "End-to-end production pipeline management.", dash: "dash-pvfx"   },
  { name: "ShotFlow",      desc: "Smart shot tracking & task management.",    dash: "dash-shot"   },
  { name: "AssetHub",      desc: "Centralized asset management system.",      dash: "dash-asset"  },
  { name: "Review+",       desc: "Advanced review & collaboration.",          dash: "dash-review" },
  { name: "RenderWatch",   desc: "Real-time render monitoring.",              dash: "dash-render" },
];

export default function Products() {
  return (
    <section
      className="border-t border-line py-[70px]"
      data-screen-label="06 Products"
      style={{background: "linear-gradient(180deg, #050403 0%, #07060a 100%)"}}
    >
      <div className="max-w-[1320px] mx-auto px-10">
        <Reveal>
          <div className="flex items-center justify-between mb-9">
            <div className="shead-tag">Our Products</div>
            <a href="#" className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-2 hover:text-accent inline-flex items-center gap-2.5 transition-colors">
              View All Products <Icon.ArrR/>
            </a>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {products.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <motion.div
                className="product-card relative overflow-hidden transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className={`product-dash relative h-[150px] overflow-hidden border-b border-line ${p.dash}`}>
                  <div className="absolute top-2 left-2 flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"/>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"/>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"/>
                  </div>
                </div>
                <div className="absolute top-2.5 right-2.5 font-mono text-[9px] tracking-[0.2em] uppercase text-accent bg-accent/10 border border-accent/35 px-2 py-1 z-10">
                  Coming Soon
                </div>
                <div className="px-4 pt-4 pb-4.5 flex items-start justify-between gap-2.5">
                  <div>
                    <div className="font-mono text-xs tracking-[0.14em] uppercase text-ink mb-1">{p.name}</div>
                    <div className="text-[11px] text-ink-3 leading-[1.5] max-w-[170px]">{p.desc}</div>
                  </div>
                  <div className="w-[26px] h-[26px] border border-line-2 grid place-items-center text-ink-2 flex-none">
                    <Icon.ArrR/>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
