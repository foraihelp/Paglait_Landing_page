"use client";
import { Icon } from "./Icons";
import Reveal from "./Reveal";

const services = [
  { i: <Icon.Comp/>,    l: "Compositing" },
  { i: <Icon.Match/>,   l: "Matchmove" },
  { i: <Icon.Clean/>,   l: "Cleanup" },
  { i: <Icon.Roto/>,    l: "Rotoscopy" },
  { i: <Icon.Matte/>,   l: "Matte Painting" },
  { i: <Icon.CG/>,      l: "CG Integration" },
  { i: <Icon.PipeIco/>, l: "Pipeline Dev" },
  { i: <Icon.AI/>,      l: "AI Workflow" },
  { i: <Icon.Asset/>,   l: "Asset MGMT" },
  { i: <Icon.Folder/>,  l: "Asset MGMT" },
  { i: <Icon.Track/>,   l: "Production Tracking" },
];

export default function Services() {
  return (
    <section className="border-t border-line py-[70px]" data-screen-label="04 Services">
      <div className="max-w-[1320px] mx-auto px-10">
        <Reveal>
          <div className="flex items-center justify-between mb-9">
            <div className="shead-tag">Services</div>
            <a href="#" className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-2 hover:text-accent inline-flex items-center gap-2.5 transition-colors">
              View All Services <Icon.ArrR/>
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid border border-line bg-line gap-px" style={{gridTemplateColumns: `repeat(${services.length}, minmax(0, 1fr))`}}>
            {services.map((s, i) => (
              <div key={i} className="service relative bg-bg-1 hover:bg-bg-2 px-3.5 py-7 text-center cursor-pointer transition-colors duration-300">
                <div className="service-icon w-11 h-11 mx-auto mb-3.5 grid place-items-center border border-line-2 rounded-full text-ink-2 transition-all duration-300">
                  {s.i}
                </div>
                <div className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-ink-2">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
