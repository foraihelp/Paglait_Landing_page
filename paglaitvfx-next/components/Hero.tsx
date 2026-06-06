"use client";
import { motion } from "framer-motion";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  left: (i * 37) % 100,
  dur:  14 + (i * 2.3) % 18,
  delay: (i * 1.7) % 16,
  size: 1 + (i % 3) * 0.7,
  key: i,
}));

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden isolate pt-[140px] pb-16" data-screen-label="01 Hero">
      <div className="hero-bg absolute inset-0 -z-20"/>
      <div className="hero-stars absolute inset-0 -z-10"/>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {PARTICLES.map(p => (
          <span key={p.key} className="particle" style={{
            left:  `${p.left}%`,
            width: `${p.size}px`,
            height:`${p.size}px`,
            animationDuration: `${p.dur}s`,
            animationDelay:    `${p.delay}s`,
          }}/>
        ))}
      </div>

      {/* Portal */}
      <motion.div
        className="absolute right-[8%] top-[42%] -translate-y-1/2 w-[460px] h-[460px] -z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <motion.div
          className="portal-sparks absolute inset-[-20px] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />
        <div className="portal-ring absolute inset-0 rounded-full animate-portalPulse"/>
        <div className="portal-core absolute inset-[18%] rounded-full"/>
      </motion.div>

      {/* Silhouetted figure */}
      <div className="figure absolute right-[23%] bottom-[14%] w-[50px] h-[180px] -z-10"/>

      {/* Ground mist */}
      <div className="hero-mist absolute inset-x-0 bottom-0 h-[280px] -z-10"/>

      {/* Side counter */}
      <div className="hero-counter absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
        {["01","02","03","04","05"].map((n, i) => (
          <span key={n} className={`font-mono text-[11px] tracking-[0.18em] transition-colors duration-300 ${i === 0 ? "text-accent" : "text-ink-4"}`}>
            {n}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-[1320px] mx-auto px-10 relative z-10">
        <div className="max-w-[760px] pl-20 pt-10">
          <Reveal>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-3 mb-4">// We Are</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-bold text-[clamp(80px,11vw,168px)] leading-[0.88] tracking-tightest mb-5">
              PAGLAIT<em className="not-italic text-accent" style={{textShadow: "0 0 40px rgba(255,122,0,0.6)"}}>VFX</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="font-mono text-xs tracking-[0.32em] uppercase text-ink-2 mb-7 flex gap-3 flex-wrap items-center">
              <span>Cinematic VFX</span>
              <span className="w-1 h-1 rounded-full bg-accent" style={{boxShadow:"0 0 8px var(--accent)"}}/>
              <span>AI Workflow</span>
              <span className="w-1 h-1 rounded-full bg-accent" style={{boxShadow:"0 0 8px var(--accent)"}}/>
              <span>Pipeline Technology</span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-[460px] text-ink-2 text-[15px] leading-[1.6] mb-9">
              We craft visual stories that move the world. Combining artistry,
              technology and next-generation pipelines to deliver cinematic
              excellence at the speed of imagination.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex gap-3.5 flex-wrap items-center">
              <MagneticButton className="btn btn-solid">Explore Work <span className="arr"><Icon.ArrR/></span></MagneticButton>
              <MagneticButton className="btn btn-ghost">Discover Products</MagneticButton>
              <MagneticButton as="a" href="#showreel" className="flex items-center gap-3 py-2 text-ink font-mono text-[11px] tracking-[0.18em] uppercase">
                <span className="w-9 h-9 rounded-full border border-accent grid place-items-center bg-accent/10 group-hover:bg-accent transition-colors">
                  <span className="play-tri inline-block w-0 h-0" style={{borderLeft:"8px solid var(--accent)", borderTop:"5px solid transparent", borderBottom:"5px solid transparent", marginLeft:"2px"}}/>
                </span>
                Watch Showreel
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll prompt */}
      <div className="absolute bottom-7 left-20 flex items-center gap-4 font-mono text-[10px] tracking-[0.32em] uppercase text-ink-3">
        <span className="scroll-arrow animate-bouncey"/> Scroll To Explore
      </div>
    </section>
  );
}
