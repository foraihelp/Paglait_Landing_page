/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

/* tiny icons reused */
const FLIcon = {
  Brain: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor"/><circle cx="12" cy="12" r="9" stroke="currentColor" strokeDasharray="2 3"/></svg>,
  Bolt:  () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2" stroke="currentColor"/></svg>,
  Layers:() => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3L3 8l9 5 9-5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5" stroke="currentColor" fill="none"/></svg>,
  Flow:  () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="6" r="2" stroke="currentColor"/><circle cx="19" cy="6" r="2" stroke="currentColor"/><circle cx="5" cy="18" r="2" stroke="currentColor"/><circle cx="19" cy="18" r="2" stroke="currentColor"/><path d="M7 6h10M7 18h10M5 8v8M19 8v8" stroke="currentColor" strokeDasharray="2 2"/></svg>,
  Grid:  () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="7" height="7" stroke="currentColor"/><rect x="13" y="4" width="7" height="7" stroke="currentColor"/><rect x="4" y="13" width="7" height="7" stroke="currentColor"/><rect x="13" y="13" width="7" height="7" stroke="currentColor"/></svg>,
  Sync:  () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 11-3-6.7M21 3v6h-6" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>,
  ArrR:  () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h7m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/></svg>,
};

/* ─────────  Hero  ───────── */
function FLHero() {
  return (
    <section className="fl-hero" data-screen-label="01 FrameLab Hero">
      <span className="fl-hero__ring fl-hero__ring--2"/>
      <span className="fl-hero__ring fl-hero__ring--1"/>
      <span className="fl-hero__ring fl-hero__ring--3"/>
      <div className="hero__stars" style={{position:"absolute", inset:0, zIndex:0}}/>

      <div className="container fl-hero__inner">
        <div className="fl-hero__badge reveal">Coming Soon · Q3 2026</div>
        <img src="assets/framelab.png" alt="FrameLab" className="fl-hero__logo reveal" style={{transitionDelay:"0.04s"}}/>
        <p className="fl-hero__sub reveal" style={{transitionDelay:"0.16s"}}>
          Next Generation AI-Powered VFX Production Ecosystem
        </p>
        <p className="fl-hero__copy reveal" style={{transitionDelay:"0.24s"}}>
          A unified workspace where artistry meets machine intelligence. Plan, produce,
          review, and deliver — guided by an AI that understands cinematic craft.
        </p>
        <div className="fl-hero__cta reveal" style={{transitionDelay:"0.32s"}}>
          <button className="btn btn--solid magnetic">Request Early Access <span className="arr"><FLIcon.ArrR/></span></button>
          <button className="btn btn--ghost magnetic">Watch the Vision</button>
        </div>
      </div>
    </section>
  );
}

/* ─────────  Vision  ───────── */
function FLVision() {
  return (
    <section className="fl-section fl-vision" data-screen-label="02 Vision">
      <div className="lightleak lightleak--cyan lightleak--top-right"/>
      <div className="container">
        <div className="fl-section__head reveal">
          <div className="fl-section__tag">The Vision</div>
        </div>
        <p className="fl-vision__quote reveal">
          We are building <em>the operating system</em> for cinematic production —
          where every frame, every shot, every render is orchestrated by intelligence
          that <em>thinks in motion</em>.
        </p>
        <div className="fl-vision__byline reveal">— PaglaitVFX · Research Division</div>
      </div>
    </section>
  );
}

/* ─────────  Features  ───────── */
function FLFeatures() {
  const features = [
    { n: "01", i: <FLIcon.Brain/>,  t: "Cognitive Pipeline",      c: "An AI that learns your studio's craft. Auto-assigns shots, predicts bottlenecks, and surfaces creative opportunities before they become problems." },
    { n: "02", i: <FLIcon.Bolt/>,   t: "Real-time Inference",     c: "Run roto, matchmove, denoise, and upscale on-the-fly using fine-tuned models that operate at the speed of decision-making." },
    { n: "03", i: <FLIcon.Layers/>, t: "Unified Asset Graph",     c: "Every model, texture, shot, and version lives in one navigable graph. No more file-system spelunking — query by intent." },
    { n: "04", i: <FLIcon.Flow/>,   t: "Adaptive Workflow",       c: "Routes shots through the right team and the right tools automatically, with override-anywhere collaboration baked in." },
    { n: "05", i: <FLIcon.Grid/>,   t: "Collaborative Canvas",    c: "Review sessions powered by spatial annotation, frame-accurate comments, and AI summarization across hundreds of takes." },
    { n: "06", i: <FLIcon.Sync/>,   t: "Render-Agnostic Cloud",   c: "Burst to any farm — on-prem, public cloud, or hybrid — without rewriting a single submission script." },
  ];
  return (
    <section className="fl-section" data-screen-label="03 Features">
      <div className="container">
        <div className="fl-section__head reveal">
          <div className="fl-section__tag">Features</div>
          <h2 className="fl-section__title">Built like a studio. <em>Powered like a model.</em></h2>
          <p className="fl-section__sub">Every capability designed to compound — not replace — the work of your artists.</p>
        </div>
        <div className="fl-features">
          {features.map((f,i) => (
            <div className="fl-feature reveal" key={f.t} style={{transitionDelay: `${i*0.06}s`}}>
              <div className="fl-feature__num">{f.n}</div>
              <div className="fl-feature__icon">{f.i}</div>
              <div className="fl-feature__title">{f.t}</div>
              <p className="fl-feature__copy">{f.c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────  Workflow showcase — real product screenshot  ───────── */
function FLWorkflow() {
  return (
    <section className="fl-section fl-workflow" data-screen-label="04 Workflow">
      <div className="lightleak lightleak--cyan lightleak--bot-left"/>
      <div className="container">
        <div className="fl-section__head reveal">
          <div className="fl-section__tag">The Workspace</div>
          <h2 className="fl-section__title">One interface. <em>Every discipline.</em></h2>
          <p className="fl-section__sub">A single command center for supervisors, leads, and artists — calibrated for the way studios actually work.</p>
        </div>

        <div className="fl-dashboard-real reveal">
          <div className="fl-dashboard-real__chrome">
            <div className="fl-dashboard-real__lights"><span/><span/><span/></div>
            <div className="fl-dashboard-real__url">framelab.app / workspace / stud-demo</div>
            <div className="fl-dashboard-real__userpill">LIVE BUILD</div>
          </div>
          <img
            src="assets/framelab-dashboard.png"
            alt="FrameLab workspace — production overview dashboard"
            className="fl-dashboard-real__img"
          />
          <div className="fl-dashboard-real__caption">
            <span>▸ FrameLab Workspace</span>
            <span>Studio Demo · 14 Active Projects · 54 Shots</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────  AI Automation  ───────── */
function FLAI() {
  const items = [
    { t: "Cognitive Iteration",    c: "AI-assisted roto, matchmove and clean-up dramatically reduce hand-keyed work." },
    { t: "Adaptive Coverage",      c: "Models trained on your studio's craft handle the repeatable parts of the pipeline." },
    { t: "Tool-Agnostic Workflow", c: "Bring your own DCC, your own render farm, your own storage — FrameLab orchestrates around it." },
  ];
  // Big neural network visual
  const nodes = [
    [50,50,8],   // center
    [25,25,4],[75,25,4],[25,75,4],[75,75,4],
    [50,15,3],[50,85,3],[15,50,3],[85,50,3],
    [35,40,2],[65,40,2],[35,60,2],[65,60,2],
  ];
  const links = [
    [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],
    [1,9],[2,10],[3,11],[4,12],[5,9],[5,10],[6,11],[6,12],[7,9],[7,11],[8,10],[8,12]
  ];
  return (
    <section className="fl-section fl-ai" data-screen-label="05 AI">
      <div className="container">
        <div className="fl-ai__grid">
          <div className="reveal-left">
            <div className="fl-section__tag" style={{justifyContent:"flex-start", marginBottom:24}}>AI Automation</div>
            <h2 className="fl-ai__title">An engine that <em>thinks in shots.</em></h2>
            <p className="fl-ai__copy">
              FrameLab observes how your studio works and quietly automates the parts your artists shouldn't have to think about — leaving the craft to them.
            </p>
            <ul className="fl-ai__list">
              {items.map((it, idx) => (
                <li key={it.t} className="reveal">
                  <b>{String(idx+1).padStart(2,"0")}</b>
                  <div>
                    <span>{it.t}</span>
                    <p>{it.c}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="fl-ai__visual reveal">
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              {links.map(([a, b], i) => (
                <line key={i}
                  x1={nodes[a][0]} y1={nodes[a][1]}
                  x2={nodes[b][0]} y2={nodes[b][1]}
                  stroke="#00d1ff" strokeWidth="0.25" opacity="0.5"/>
              ))}
              {nodes.map(([x,y,r], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r={r * 1.8} fill="#00d1ff" opacity="0.18"/>
                  <circle cx={x} cy={y} r={r} fill="#00f0ff">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur={`${2 + i * 0.2}s`} repeatCount="indefinite"/>
                  </circle>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────  Coming Soon CTA  ───────── */
function FLCTA() {
  return (
    <section className="fl-section fl-cta" data-screen-label="06 Coming Soon">
      <div className="fl-cta__container">
        <div className="fl-section__tag reveal" style={{justifyContent:"center"}}>Coming Soon · Q3 2026</div>
        <h2 className="fl-cta__title reveal">The studio of <br/>the future arrives.</h2>
        <p className="fl-cta__sub reveal">Join the early-access waitlist and help shape the future of cinematic production.</p>
        <a href="mailto:info@paglaitvfx.in" className="fl-cta__email reveal">info@paglaitvfx.in</a>
      </div>
    </section>
  );
}

/* ─────────  Early Access  ───────── */
function FLEarly() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const submit = (e) => { e.preventDefault(); setDone(true); };
  return (
    <section className="fl-section fl-early" data-screen-label="07 Early Access">
      <div className="container">
        <div className="fl-early__card reveal">
          <div className="fl-section__tag" style={{marginBottom:24}}>Early Access</div>
          <h3 className="fl-early__head">Get Early Access</h3>
          <p className="fl-early__copy">Be among the first studios and artists to experience the future of AI-powered VFX production workflows.</p>
          {done ? (
            <div className="fl-early__ok">
              ▸ Request received. We'll be in touch via <a href="mailto:info@paglaitvfx.in">info@paglaitvfx.in</a>.
            </div>
          ) : (
            <form className="fl-early__form" onSubmit={submit}>
              <input type="email" placeholder="your@studio.com" required
                value={email} onChange={e => setEmail(e.target.value)}/>
              <button type="submit">Request Early Access <span className="arr"><FLIcon.ArrR/></span></button>
            </form>
          )}
          <div className="fl-early__direct">
            Or write to us directly
             · 
            <a href="mailto:info@paglaitvfx.in">info@paglaitvfx.in</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────  Root  ───────── */
function FrameLabApp() {
  /* Reveal observer */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-fade");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });

  /* Magnetic buttons */
  useEffect(() => {
    const els = document.querySelectorAll(".magnetic");
    const handlers = [];
    els.forEach(el => {
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - (r.left + r.width/2)) * 0.18}px, ${(e.clientY - (r.top + r.height/2)) * 0.22}px)`;
      };
      const onLeave = () => { el.style.transform = ""; };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      handlers.push([el, onMove, onLeave]);
    });
    return () => handlers.forEach(([el, m, l]) => { el.removeEventListener("mousemove", m); el.removeEventListener("mouseleave", l); });
  });

  return (
    <>
      <Nav/>
      <FLHero/>
      <FLVision/>
      <FLFeatures/>
      <FLWorkflow/>
      <FLAI/>
      <FLCTA/>
      <FLEarly/>
      <Footer/>
    </>
  );
}

const flRoot = ReactDOM.createRoot(document.getElementById("root"));
flRoot.render(<FrameLabApp/>);
