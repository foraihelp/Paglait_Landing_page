"use client";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

const values = [
  { i: <Icon.Innov/>, t: "Innovation",  c: "Work on cutting-edge projects & technology." },
  { i: <Icon.Grow/>,  t: "Growth",      c: "Learn, grow and evolve together." },
  { i: <Icon.Flex/>,  t: "Flexibility", c: "Hybrid, remote & global opportunities." },
  { i: <Icon.Heart/>, t: "Impact",      c: "Build visuals that inspire the world." },
];

export default function Join() {
  return (
    <section className="join-bg relative py-[90px] overflow-hidden" data-screen-label="10 Join">
      <div className="max-w-[1320px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <h2 className="font-display font-bold text-[60px] leading-[0.96] tracking-tighter mb-5">
              Join The Future <br/>Of Production
            </h2>
            <p className="text-ink-2 text-sm leading-[1.6] max-w-[360px] mb-7">
              We are always looking for passionate artists, innovators and problem-solvers.
            </p>
            <div className="flex gap-3 flex-wrap">
              <MagneticButton className="btn btn-solid">View Open Roles <span className="arr"><Icon.ArrR/></span></MagneticButton>
              <MagneticButton className="btn btn-ghost">Life At PaglaitVFX</MagneticButton>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[18px]">
              {values.map((v, i) => (
                <Reveal key={v.t} delay={i * 0.06}>
                  <div className="text-center">
                    <div className="w-11 h-11 mx-auto mb-3 grid place-items-center text-accent border border-accent/30 rounded-full bg-accent/[0.05]">
                      {v.i}
                    </div>
                    <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink mb-1.5">{v.t}</div>
                    <div className="text-[11px] text-ink-3 leading-[1.5]">{v.c}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
