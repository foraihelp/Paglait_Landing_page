/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakSlider, TweakToggle, TweakRadio */
const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#00d1ff",
  "glow": 1,
  "grain": 0.05,
  "smooth": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--accent", t.accent);
    r.setProperty("--glow", t.glow);
    r.setProperty("--grain", t.grain);
    r.setProperty("--accent-2", lighten(t.accent, 0.25));
  }, [t.accent, t.glow, t.grain]);

  /* ----- Reveal on scroll ----- */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-fade");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });

  /* ----- Magnetic buttons ----- */
  useEffect(() => {
    const els = document.querySelectorAll(".magnetic");
    const handlers = [];
    els.forEach(el => {
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
      };
      const onLeave = () => { el.style.transform = ""; };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      handlers.push([el, onMove, onLeave]);
    });
    return () => {
      handlers.forEach(([el, m, l]) => {
        el.removeEventListener("mousemove", m);
        el.removeEventListener("mouseleave", l);
      });
    };
  });

  /* ----- Smooth-scroll for in-page anchor links ----- */
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  /* ----- Smooth scroll (Lenis-lite via lerp) ----- */
  useEffect(() => {
    if (!t.smooth) return;
    let target = window.scrollY;
    let current = target;
    let raf = 0;
    let active = true;

    const onWheel = (e) => {
      if (e.ctrlKey) return;       // allow zoom
      e.preventDefault();
      target = Math.max(0, Math.min(document.documentElement.scrollHeight - window.innerHeight, target + e.deltaY));
    };
    const tick = () => {
      if (!active) return;
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.5) current = target;
      window.scrollTo(0, current);
      raf = requestAnimationFrame(tick);
    };
    target = window.scrollY;
    current = target;
    window.addEventListener("wheel", onWheel, { passive: false });
    raf = requestAnimationFrame(tick);
    return () => {
      active = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
    };
  }, [t.smooth]);

  return (
    <>
      <Nav/>
      <Hero/>
      <Showreel/>
      <About/>
      <Services/>
      <Projects/>
      <Products/>
      <Pipeline/>
      <BigStats/>
      <Join/>
      <Footer/>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Accent">
          <TweakColor
            label="Accent color"
            value={t.accent}
            options={["#00d1ff","#00f0ff","#5fb6ff","#a6f0ff","#b388ff"]}
            onChange={v => setTweak("accent", v)}
          />
        </TweakSection>
        <TweakSection title="Mood">
          <TweakSlider label="Glow intensity" min={0} max={1.6} step={0.05}
            value={t.glow} onChange={v => setTweak("glow", v)}/>
          <TweakSlider label="Film grain" min={0} max={0.18} step={0.01}
            value={t.grain} onChange={v => setTweak("grain", v)}/>
          <TweakToggle label="Smooth scroll" value={t.smooth}
            onChange={v => setTweak("smooth", v)}/>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

function lighten(hex, amt) {
  // assume #rrggbb
  const h = hex.replace("#","");
  const r = Math.min(255, Math.round(parseInt(h.slice(0,2),16) + 255 * amt));
  const g = Math.min(255, Math.round(parseInt(h.slice(2,4),16) + 255 * amt));
  const b = Math.min(255, Math.round(parseInt(h.slice(4,6),16) + 255 * amt));
  return "#" + [r,g,b].map(x => x.toString(16).padStart(2,"0")).join("");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
