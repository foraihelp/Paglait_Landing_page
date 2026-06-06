"use client";
import Reveal from "./Reveal";

// Generic placeholders — swap in real partner logos when client list is confirmed.
const partners = ["STUDIO ONE","ARC LABS","HELIOS","NEBULA","ATELIER 9","VOLTA"];

export default function Trusted() {
  return (
    <section className="border-t border-line py-[70px]" data-screen-label="09 Trusted">
      <div className="max-w-[1320px] mx-auto px-10">
        <Reveal>
          <div className="shead-tag mb-[18px]">▸ Trusted By Visionaries</div>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center">
          <Reveal direction="left">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
              {partners.map(l => (
                <div key={l} className="h-14 border border-line bg-[#0f0f0f]/40 grid place-items-center font-display font-semibold text-[17px] text-ink-2 tracking-[-0.01em] hover:text-ink hover:border-line-2 transition-colors">
                  {l}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="testimonial relative border border-line p-6 flex flex-col justify-end overflow-hidden" style={{aspectRatio: "4/3"}}>
              <span className="corner tl"/><span className="corner tr"/><span className="corner bl"/><span className="corner br"/>
              <div className="relative z-[2] italic text-sm leading-[1.6] text-ink">
                <span className="block font-display text-[38px] text-accent leading-[0.5] mb-3.5">&ldquo;</span>
                PaglaitVFX is a rare combination of artistic excellence and technical innovation. Their pipeline and team are world-class.
              </div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-3 mt-3.5 relative z-[2]">— Director, Feature Film</div>
              <div className="absolute bottom-4 right-[18px] flex gap-1.5 z-[3]">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"/>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"/>
                <span className="w-1.5 h-1.5 rounded-full bg-accent"/>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"/>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"/>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
