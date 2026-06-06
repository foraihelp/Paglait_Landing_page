"use client";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

const steps = [
  { i: <Icon.Client/>, t: "Client",     s: ["Project Brief", "& Onboarding"] },
  { i: <Icon.Prod/>,   t: "Production", s: ["Planning &",    "Scheduling"]   },
  { i: <Icon.AssetP/>, t: "Assets",     s: ["Creation &",    "Management"]   },
  { i: <Icon.Review/>, t: "Review",     s: ["Collaborate &", "Approve"]      },
  { i: <Icon.Pub/>,    t: "Publish",    s: ["Final Output",  "Preparation"]  },
  { i: <Icon.Del/>,    t: "Delivery",   s: ["Secure Delivery","& Archive"]   },
];

export default function Pipeline() {
  return (
    <section className="border-t border-line py-[70px]" data-screen-label="07 Pipeline">
      <div className="max-w-[1320px] mx-auto px-10">
        <Reveal>
          <div className="shead-tag mb-2">▸ The Paglait Pipeline</div>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-center">
          <Reveal>
            <div className="pipeline-track relative grid grid-cols-3 md:grid-cols-6 gap-5 md:gap-0 py-7">
              {steps.map((s, i) => (
                <div key={i} className="text-center relative">
                  <div className="step-node relative w-[60px] h-[60px] mx-auto mb-3.5 rounded-full grid place-items-center text-cyan z-[2]">
                    {s.i}
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink mb-1">{s.t}</div>
                  <div className="text-[11px] text-ink-3 leading-[1.45]">
                    {s.s.map((l, j) => <div key={j}>{l}</div>)}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="border border-line p-[22px] bg-[#0f0c0a]/50">
              <h4 className="font-display font-bold text-[22px] leading-[1.1] tracking-tighter mb-3">
                Intelligent. <em className="not-italic text-accent">Automated. Scalable.</em>
              </h4>
              <p className="text-ink-2 text-xs leading-[1.55] mb-[18px]">
                Our AI-powered pipeline ensures quality, speed and transparency at every stage of production.
              </p>
              <MagneticButton className="btn btn-small">Explore Pipeline <span className="arr"><Icon.ArrR/></span></MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
