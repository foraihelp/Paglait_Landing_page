/* global React */
const { useState, useEffect, useRef } = React;

/* ---------- shared tiny icons (simple geometric only) ---------- */
const Icon = {
  ArrR:    () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h7m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/></svg>,
  ArrL:    () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 6H3m0 0l3-3M3 6l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square"/></svg>,
  Plus:    () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/></svg>,
  Play:    () => <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M0 0v12l10-6L0 0z"/></svg>,
  Pause:   () => <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><rect x="0" y="0" width="3" height="12"/><rect x="7" y="0" width="3" height="12"/></svg>,
  Vol:     () => <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 6v4h3l4 3V3L5 6H2z" fill="currentColor"/><path d="M11 5s1 1 1 3-1 3-1 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none"/></svg>,
  Full:    () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 5V2h3M10 5V2H7M2 7v3h3M10 7v3H7" stroke="currentColor" strokeWidth="1.5"/></svg>,
  /* service icons — simple circles + shapes only */
  Comp:    () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="9" r="5" stroke="currentColor"/><circle cx="15" cy="15" r="5" stroke="currentColor"/></svg>,
  Match:   () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2" stroke="currentColor"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4" stroke="currentColor" strokeWidth="1.4"/></svg>,
  Clean:   () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="5" y="6" width="14" height="13" stroke="currentColor"/><path d="M9 6V4h6v2" stroke="currentColor"/></svg>,
  Roto:    () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 19L19 5M5 5l14 14" stroke="currentColor" strokeWidth="1.4"/></svg>,
  Matte:   () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 18l5-7 4 5 3-4 4 6" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>,
  CG:      () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="7" stroke="currentColor"/><path d="M5 12h14M12 5a10 10 0 010 14M12 5a10 10 0 000 14" stroke="currentColor"/></svg>,
  PipeIco: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 8l4-3 6 5 4-3M5 16l4-3 6 5 4-3" stroke="currentColor" strokeWidth="1.4"/></svg>,
  AI:      () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor"/><circle cx="12" cy="12" r="9" stroke="currentColor" strokeDasharray="2 3"/></svg>,
  Asset:   () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="7" height="7" stroke="currentColor"/><rect x="13" y="4" width="7" height="7" stroke="currentColor"/><rect x="4" y="13" width="7" height="7" stroke="currentColor"/><rect x="13" y="13" width="7" height="7" stroke="currentColor"/></svg>,
  Folder:  () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7h6l2 2h8v10H4V7z" stroke="currentColor"/></svg>,
  Track:   () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 18l5-9 4 5 3-3 6 8" stroke="currentColor" strokeWidth="1.4" fill="none"/><circle cx="3" cy="18" r="1" fill="currentColor"/></svg>,
  /* feature icons */
  Bolt:    () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2" stroke="currentColor"/></svg>,
  Layers:  () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3L3 8l9 5 9-5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5" stroke="currentColor" fill="none"/></svg>,
  Chip:    () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="6" y="6" width="12" height="12" stroke="currentColor"/><rect x="9" y="9" width="6" height="6" stroke="currentColor"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" stroke="currentColor"/></svg>,
  Globe:   () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor"/><ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor"/><path d="M3 12h18" stroke="currentColor"/></svg>,
  /* value icons */
  Innov:   () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="5" stroke="currentColor"/><path d="M9 17h6M10 20h4" stroke="currentColor"/></svg>,
  Grow:    () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" stroke="currentColor"/></svg>,
  Flex:    () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 4l-3 8 3 8M18 4l3 8-3 8" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>,
  Heart:   () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 19s-7-4-7-10a4 4 0 017-2 4 4 0 017 2c0 6-7 10-7 10z" stroke="currentColor" fill="none"/></svg>,
  /* pipeline step icons */
  Client:  () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="3" stroke="currentColor"/><path d="M5 20c0-4 3-7 7-7s7 3 7 7" stroke="currentColor"/></svg>,
  Prod:    () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="6" width="16" height="12" stroke="currentColor"/><path d="M8 3v3M16 3v3M4 10h16" stroke="currentColor"/></svg>,
  AssetP:  () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="6" y="3" width="12" height="18" stroke="currentColor"/><circle cx="12" cy="12" r="3" stroke="currentColor"/></svg>,
  Review:  () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="6" stroke="currentColor"/><path d="M16 16l5 5" stroke="currentColor" strokeWidth="1.4"/></svg>,
  Pub:     () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 6v12H4V9l8-6z" stroke="currentColor"/><path d="M9 21v-7h6v7" stroke="currentColor"/></svg>,
  Del:     () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 10l9-6 9 6v10H3V10z" stroke="currentColor"/><path d="M3 10l9 6 9-6" stroke="currentColor"/></svg>,
  /* contact */
  Mail:    () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" stroke="currentColor"/><path d="M3 6l9 7 9-7" stroke="currentColor"/></svg>,
  Phone:   () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 3h4l2 5-3 2a11 11 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 5a2 2 0 012-2z" stroke="currentColor"/></svg>,
  Pin:     () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z" stroke="currentColor"/><circle cx="12" cy="9" r="2.5" stroke="currentColor"/></svg>,
  /* socials */
  IG:      () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor"/><circle cx="12" cy="12" r="4" stroke="currentColor"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>,
  LI:      () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" stroke="currentColor"/><path d="M7 10v7M7 7v.5M11 17v-7M11 13c0-2 2-3 3-3s3 1 3 3v4" stroke="currentColor"/></svg>,
  YT:      () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor"/><path d="M11 10l4 2-4 2v-4z" fill="currentColor"/></svg>,
  X:       () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6"/></svg>,
};

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
    { label: "Home",     href: "index.html" },
    { label: "About",    href: "About.html" },
    { label: "Services", href: "Services.html" },
    { label: "Projects", href: "Projects.html" },
    { label: "Products", href: "Products.html" },
    { label: "FrameLab", href: "FrameLab.html" },
    { label: "Careers",  href: "Careers.html" },
    { label: "Contact",  href: "Contact.html" },
  ];
  // current file (e.g. "About.html"); default to index.html
  const here = (typeof window !== "undefined" && window.location.pathname.split("/").pop()) || "index.html";
  const current = here === "" ? "index.html" : here;
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="index.html" className="nav__logo-wrap">
        <img src="assets/paglait-mark.png" alt="" className="nav__logo-img"/>
        <span className="nav__logo-text">PAGLAIT<b>VFX</b></span>
      </a>
      <div className="nav__menu">
        {items.map((it) => (
          <a key={it.label} href={it.href} className={it.href === current ? "active" : ""}>{it.label}</a>
        ))}
      </div>
      <a href="Contact.html" className="btn btn--small magnetic">Let's Talk <span className="arr"><Icon.ArrR/></span></a>
    </nav>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  // 36 floating particles
  const particles = Array.from({length: 36}, (_, i) => {
    const left = (i * 37 + 3) % 100;
    const dur  = 12 + (i * 2.3) % 22;
    const delay = (i * 1.7) % 18;
    const size = 1 + (i % 3) * 0.7;
    return { left, dur, delay, size, key: i };
  });

  // Parallax portal
  const portalRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (portalRef.current) {
        portalRef.current.style.transform = `translateY(calc(-50% + ${y * 0.18}px)) scale(${1 - Math.min(y, 600) * 0.0003})`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero__bg"/>
      <div className="hero__stars"/>

      {/* Scope HUD */}
      <div className="scope-hud">
        <div className="scope-hud__cluster">
          <span>SCN<b>001</b></span>
          <span>TC<b>00:00:32:14</b></span>
          <span>LAT<b>19.0760°N</b></span>
          <span>LON<b>72.8777°E</b></span>
        </div>
        <div className="scope-hud__cluster">
          <span className="scope-hud__rec">REC</span>
          <span>4K · DV</span>
          <span>ƒ/1.4</span>
        </div>
      </div>

      <div className="particles">
        {particles.map(p => (
          <span key={p.key} className="particle" style={{
            left: `${p.left}%`,
            width: `${p.size}px`, height: `${p.size}px`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}/>
        ))}
      </div>

      <div className="portal" ref={portalRef}>
        <div className="portal__sparks"/>
        <div className="portal__ring"/>
        <div className="portal__core"/>
      </div>
      <div className="hero__anamorphic"/>
      <div className="figure"/>
      <div className="hero__mist"/>

      <div className="hero__counter">
        {["01","02","03","04","05"].map((n,i) => (
          <span key={n} className={i===0?"active":""}>{n}</span>
        ))}
      </div>

      <div className="container">
        <div className="hero__content">
          <div className="eyebrow hero__eyebrow reveal">// We Are · Studio Mumbai · Est. 2024</div>
          <h1 className="hero__title">
            {["PAGLAIT"].map((w,i) => (
              <span key={i} className="word reveal" style={{transitionDelay: `${i*0.08}s`}}>{w}</span>
            ))}
            <em className="reveal" style={{transitionDelay: "0.12s"}}>VFX</em>
          </h1>
          <div className="hero__tagline reveal" style={{transitionDelay: "0.2s"}}>
            <span>Cinematic VFX</span><span className="dot"/>
            <span>AI Workflow</span><span className="dot"/>
            <span>Pipeline Technology</span>
          </div>
          <p className="hero__copy reveal" style={{transitionDelay: "0.28s"}}>
            We craft visual stories that move the world. Combining artistry,
            technology and next-generation pipelines to deliver cinematic
            excellence at the speed of imagination.
          </p>
          <div className="hero__cta reveal" style={{transitionDelay: "0.36s"}}>
            <a href="#projects" className="btn btn--solid magnetic">Explore Work <span className="arr"><Icon.ArrR/></span></a>
            <a href="#products" className="btn btn--ghost magnetic">Discover Products</a>
            <a href="#showreel" className="play-btn magnetic">
              <span className="play-btn__icon"><span className="play-tri"/></span>
              Watch Showreel
            </a>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-arrow"/> Scroll To Explore
      </div>
    </section>
  );
}

/* ---------- SHOWREEL ---------- */
function Showreel() {
  const playerRef = useRef(null);
  const iframeRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted]     = useState(true);

  const VIDEO_ID = "72qBDJECvZ8";
  const src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&playsinline=1&enablejsapi=1&disablekb=1`;

  const post = (cmd, args = []) => {
    if (!iframeRef.current) return;
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: cmd, args }),
      "*"
    );
  };

  // viewport autoplay
  useEffect(() => {
    const el = playerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { post("playVideo"); setPlaying(true); }
      else                       { post("pauseVideo"); setPlaying(false); }
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const togglePlay = () => {
    if (playing) post("pauseVideo");
    else         post("playVideo");
    setPlaying(!playing);
  };
  const toggleMute = () => {
    if (muted) post("unMute");
    else       post("mute");
    setMuted(!muted);
  };

  return (
    <section id="showreel" className="section section--flush showreel" data-screen-label="02 Showreel">
      <div className="container">
        <div className="eyebrow shead__tag reveal" style={{marginBottom: 28}}>▸ Showreel</div>
        <div className="showreel__grid">
          <div className="reveal-left">
            <h2 className="showreel__title">Crafting <br/><em>Cinematic Worlds</em></h2>
            <p className="showreel__copy">Visual storytelling powered by artistry, technology, and next-generation workflows.</p>
            <div className="showreel__ctas">
              <a href="#showreel" className="btn btn--solid magnetic">Watch Full Reel <span className="arr"><Icon.ArrR/></span></a>
              <a href="#projects" className="btn btn--ghost magnetic">Explore Projects <span className="arr"><Icon.ArrR/></span></a>
            </div>
          </div>
          <div className="player reveal" ref={playerRef}>
            <iframe
              ref={iframeRef}
              className="player__iframe"
              src={src}
              title="PaglaitVFX Showreel"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <div className="player__shade"/>
            <div className="player__caption"><b>▸</b> REEL_2026.mov · 4K · DolbyVision</div>
            <span className="corner tl"/><span className="corner tr"/><span className="corner bl"/><span className="corner br"/>
            <div className="player__playbar">
              <button className="player__icon" onClick={togglePlay}>
                {playing ? <Icon.Pause/> : <Icon.Play/>}
              </button>
              <div className="player__bar"/>
              <span className="player__time">LIVE / ∞</span>
              <button className="player__icon" onClick={toggleMute}>
                <Icon.Vol/>
                {muted && <span className="muted-x"/>}
              </button>
              <span className="player__icon"><Icon.Full/></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const features = [
    { i: <Icon.Bolt/>,   t: "AI Powered",     c: "Intelligent automation for modern production." },
    { i: <Icon.Layers/>, t: "Pipeline Design",c: "Scalable, robust & future-ready pipelines." },
    { i: <Icon.Chip/>,   t: "Production Tech",c: "Custom tools for creative freedom." },
    { i: <Icon.Globe/>,  t: "Global Delivery",c: "Trusted by studios worldwide." },
  ];
  const capabilities = [
    { t: "Cinematic Craft",    c: "Compositing, matchmove, matte painting and CG integration." },
    { t: "Pipeline Engineering",c: "Custom workflows built around how your team works." },
    { t: "AI-Powered Tools",   c: "In-house models for the parts that should be automated." },
    { t: "Made In Mumbai",     c: "Studio rooted in the Indian film capital." },
  ];
  return (
    <section className="section" id="about" data-screen-label="03 About">
      <div className="container">
        <div className="eyebrow shead__tag reveal" style={{marginBottom: 28}}>▸ About Us</div>
        <div className="about__grid">
          <div className="reveal-left">
            <h2 className="about__title">Where Art <br/><em>Meets Technology</em></h2>
            <p className="about__copy">PaglaitVFX is a next-generation studio building cinematic experiences and intelligent pipelines for the future of content creation.</p>
            <a href="#projects" className="btn btn--ghost magnetic">More About Us <span className="arr"><Icon.ArrR/></span></a>
          </div>
          <div className="reveal">
            <div className="features">
              {features.map(f => (
                <div className="feature" key={f.t}>
                  <span className="corner tl"/><span className="corner br"/>
                  <div className="feature__icon">{f.i}</div>
                  <div className="feature__title">{f.t}</div>
                  <div className="feature__copy">{f.c}</div>
                </div>
              ))}
            </div>
            <div className="studio">
              <div className="studio__monitors">
                {Array.from({length: 5}).map((_,i) => <div key={i} className="studio__mon"/>)}
              </div>
              <div className="studio__caption">
                <span className="play-btn__icon" style={{width:24,height:24}}><span className="play-tri" style={{borderLeftWidth:6}}/></span>
                Experience Our Studio
              </div>
            </div>
            <div className="statstrip">
              {capabilities.map(s => (
                <div key={s.t}>
                  <div className="capability__title">{s.t}</div>
                  <div className="capability__copy">{s.c}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─────  Founder  ───── */}
        <div className="founder reveal">
          <div className="founder__rule"/>
          <div className="founder__inner">
            <div className="founder__meta">
              <div className="eyebrow shead__tag" style={{marginBottom: 22}}>▸ Founder</div>
              <h3 className="founder__name">Indrani Pal</h3>
              <div className="founder__role">CEO &amp; Founder · PaglaitVFX</div>
            </div>
            <div className="founder__statement">
              <span className="founder__mark">“</span>
              <p>
                Building the future of cinematic production workflows
                through artistry, technology, and AI-driven innovation.
              </p>
            </div>
          </div>
          <div className="founder__halo"/>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const items = [
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
  // 11 doesn't fit 10-col, slice to 10 + tracking spans? simplify to 11 evenly
  return (
    <section className="section services" id="services" data-screen-label="04 Services">
      <div className="container">
        <div className="shead reveal">
          <div className="shead__tag">Services</div>
          <a className="shead__link" href="Services.html">View All Services <Icon.ArrR/></a>
        </div>
        <div className="services__grid" style={{gridTemplateColumns: `repeat(${items.length}, 1fr)`}}>
          {items.map((s,i) => (
            <div className="service" key={i}>
              <div className="service__icon">{s.i}</div>
              <div className="service__label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURED PROJECTS ---------- */
function Projects() {
  const [tab, setTab] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const tabs = ["All","Feature Films","Commercials"];
  const projs = [
    { t: "Dhurandhar",       s: "Feature Film",  img: "assets/projects/dhurandhar.jpg",  link: "https://youtu.be/BKOVzHcjEIo" },
    { t: "The Ordinary Man", s: "Feature Film",  img: "assets/projects/ordinaryman.jpg", link: "https://youtu.be/-RkfhTlgBnE" },
    { t: "Pushpa 2",         s: "Feature Film",  img: "assets/projects/pushpa2.jpg",    link: "https://youtu.be/1kVK0MZlbI4" },
    { t: "Flowerbomb",       s: "Commercial",    img: "assets/projects/flowerbomb.jpg"  },
    { t: "Rolls-Royce",      s: "Commercial",    img: "assets/projects/rollsroyce.png",  link: "https://youtu.be/rXuXyGHMAog" },
    { t: "Pepsi",            s: "Commercial",    img: "assets/projects/pepsi.jpg"       },
    { t: "Skechers",         s: "Commercial",    img: "assets/projects/skechers.jpg"    },
    { t: "Miniso",           s: "Commercial",    img: "assets/projects/miniso.jpg"      },
    { t: "Hyundai",          s: "Commercial",    img: "assets/projects/hyundai.jpg",     link: "https://youtu.be/IAGmS7Q1Yfs" },
  ];
  const filtered = tab === 0 ? projs : projs.filter(p => p.s === tabs[tab].replace(/s$/, ""));
  return (
    <section className="section projects" id="projects" data-screen-label="05 Projects">
      <div className="lightleak lightleak--bot-right"/>
      <div className="container">
        <div className="shead reveal">
          <div className="shead__tag">Featured Projects</div>
          <div style={{display:"flex", alignItems:"center", gap:32, flexWrap: "wrap"}}>
            <div className="tabs">
              {tabs.map((t,i) => (
                <button key={t} className={`tab ${i===tab?"active":""}`} onClick={() => setTab(i)}>{t}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="projgrid">
          {filtered.map((p,i) => (
            <div className="project reveal in" key={p.t} style={{transitionDelay: `${i*0.06}s`}}
                 onClick={() => p.link ? window.open(p.link, "_blank", "noopener") : setLightbox(p)}>
              <img src={p.img} alt={p.t} className="project__art project__art--img"/>
              <div className="project__overlay"/>
              {p.link && <div className="project__play"><span className="project__play-tri"/></div>}
              <div className="project__meta">
                <div className="project__title">{p.t.toUpperCase()}</div>
                <div className="project__type">{p.s}</div>
              </div>
              <div className="project__plus"><Icon.Plus/></div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.img} alt={lightbox.t} className="lightbox__img"/>
            <div className="lightbox__meta">
              <div className="lightbox__title">{lightbox.t}</div>
              <div className="lightbox__type">{lightbox.s}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- PRODUCT DASHBOARDS (detailed chrome) ---------- */
function DashChrome({ tabs, status, time, children }) {
  return (
    <>
      <div className="dash__sidebar">
        <i className="active"/><i/><i/><i/><i/><i/>
      </div>
      <div className="dash__body">
        <div className="dash__tabs">
          {tabs.map((t, i) => (
            <span key={t} className={i === 0 ? "active" : ""}>{t}</span>
          ))}
        </div>
        <div className="dash__statusrow">
          {status}
          <span className="dash__time">{time}</span>
        </div>
        <div className="dash__content">{children}</div>
      </div>
    </>
  );
}

function DashPVFX() {
  // line chart path (stable points)
  const pts = [4,10,7,16,12,22,18,28,24,34,30,42,38,48,46,58];
  const w = 220, h = 80;
  const path = pts.map((y, i) => `${i === 0 ? "M" : "L"}${(i / (pts.length-1)) * w} ${h - y}`).join(" ");
  return (
    <DashChrome
      tabs={["Overview", "Shots", "Tasks", "Render"]}
      status={<><span className="dash__pill dash__pill--live">● Live</span><span className="dash__pill dash__pill--info">PVFX 2.4</span></>}
      time="00:32:14"
    >
      <div className="dash__chart">
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="g-pvfx" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#00d1ff" stopOpacity="0.5"/>
              <stop offset="1" stopColor="#00d1ff" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="url(#g-pvfx)"/>
          <path d={path} fill="none" stroke="#00d1ff" strokeWidth="1.4" filter="drop-shadow(0 0 4px rgba(0,209,255,0.7))"/>
          <path d={path.replace(/L\d+(\.\d+)? \d+(\.\d+)?/g, (m, _, __, idx) => idx % 3 === 0 ? m : "")} fill="none" stroke="#00d1ff" strokeWidth="0.8" opacity="0.6"/>
          {pts.map((y, i) => i % 3 === 0 && <circle key={i} cx={(i/(pts.length-1))*w} cy={h-y} r="1.5" fill="#00d1ff"/>)}
        </svg>
      </div>
    </DashChrome>
  );
}

function DashShot() {
  const rows = [
    { label: "SHT_001", w: 92, val: "92%" },
    { label: "SHT_002", w: 68, val: "68%" },
    { label: "SHT_003", w: 81, val: "81%" },
    { label: "SHT_004", w: 45, val: "45%" },
    { label: "SHT_005", w: 73, val: "73%" },
  ];
  return (
    <DashChrome
      tabs={["Shots", "Assigned", "Review", "Done"]}
      status={<><span className="dash__pill dash__pill--warn">5 Pending</span><span className="dash__pill dash__pill--info">142 Total</span></>}
      time="14d:08h"
    >
      <div className="dash__bars">
        {rows.map(r => (
          <div className="dash__bar" key={r.label}>
            <b>{r.label}</b>
            <div style={{"--w": `${r.w}%`}}/>
            <span>{r.val}</span>
          </div>
        ))}
      </div>
    </DashChrome>
  );
}

function DashAsset() {
  return (
    <DashChrome
      tabs={["Library", "Recent", "Models", "Tex"]}
      status={<><span className="dash__pill dash__pill--info">3.2K Assets</span><span className="dash__pill dash__pill--live">v.42</span></>}
      time="HUMAN_001"
    >
      <div className="dash__viewer">
        <div className="dash__viewer-grid"/>
        <div className="dash__viewer-cube"/>
      </div>
    </DashChrome>
  );
}

function DashReview() {
  return (
    <DashChrome
      tabs={["Sessions", "Annotations", "Approvals"]}
      status={<><span className="dash__pill dash__pill--live">● Live · 12</span><span className="dash__pill dash__pill--warn">3 Notes</span></>}
      time="00:01:24"
    >
      <div className="dash__bignumber">SHT_042<small>SCENE · TAKE 12 · APPROVED</small></div>
      <div className="dash__filmstrip">
        <div/><div className="active"/><div/><div/>
      </div>
    </DashChrome>
  );
}

function DashRender() {
  const farms = [
    { name: "FARM 01", w: 88, val: "88%" },
    { name: "FARM 02", w: 64, val: "64%" },
    { name: "FARM 03", w: 92, val: "92%" },
    { name: "FARM 04", w: 41, val: "41%" },
    { name: "FARM 05", w: 76, val: "76%" },
    { name: "FARM 06", w: 95, val: "95%" },
  ];
  return (
    <DashChrome
      tabs={["Queue", "Farms", "History"]}
      status={<><span className="dash__pill dash__pill--live">6 Active</span><span className="dash__pill dash__pill--info">18M HRS</span></>}
      time="ETA 02h"
    >
      <div className="dash__loadrows">
        {farms.map(f => (
          <div className="dash__loadrow" key={f.name} style={{"--w": `${f.w}%`}}>
            <span>{f.name} · {f.val}</span>
          </div>
        ))}
      </div>
    </DashChrome>
  );
}

function DashProjectCreator() {
  // Folder tree visualization (project scaffolding)
  const rows = [
    { d: 0, n: "PROJECT_001/",   on: true  },
    { d: 1, n: "01_PREPRODUCTION", on: true },
    { d: 1, n: "02_PRODUCTION",    on: true },
    { d: 2, n: "shots/", on: true },
    { d: 2, n: "assets/", on: false },
    { d: 1, n: "03_DELIVERY", on: false },
  ];
  return (
    <DashChrome
      tabs={["Template", "Scaffold", "Naming"]}
      status={<><span className="dash__pill dash__pill--info">v1.0</span><span className="dash__pill dash__pill--live">● Generating</span></>}
      time="00:00:04"
    >
      <div className="dash__tree">
        {rows.map((r, i) => (
          <div key={i} className={`dash__tree-row ${r.on ? "on" : ""}`} style={{paddingLeft: r.d * 10 + 2}}>
            <span className="dash__tree-marker"/>
            <span className="dash__tree-name">{r.n}</span>
          </div>
        ))}
      </div>
    </DashChrome>
  );
}

function DashDeliveryPackager() {
  // Files flowing into a package — vertical conveyor + box silhouette
  const stages = [
    { label: "COLLECT",  w: 100 },
    { label: "VALIDATE", w: 80  },
    { label: "PACKAGE",  w: 55  },
    { label: "DELIVER",  w: 30  },
  ];
  return (
    <DashChrome
      tabs={["Queue", "Bundles", "Clients"]}
      status={<><span className="dash__pill dash__pill--info">42 Files</span><span className="dash__pill dash__pill--live">Bundling</span></>}
      time="ETA 12s"
    >
      <div className="dash__pipeline">
        {stages.map((s, i) => (
          <div key={s.label} className="dash__pipeline-stage">
            <span className="dash__pipeline-label">{s.label}</span>
            <div className="dash__pipeline-bar"><span style={{width: `${s.w}%`}}/></div>
          </div>
        ))}
      </div>
    </DashChrome>
  );
}

function DashFrameLab() {
  // Neural-network node graph (cyan dots + connections)
  const nodes = [
    [20, 30], [20, 56], [50, 18], [50, 44], [50, 70], [80, 30], [80, 56]
  ];
  const links = [
    [0,2],[0,3],[1,3],[1,4],[2,5],[3,5],[3,6],[4,6]
  ];
  return (
    <DashChrome
      tabs={["Workflow", "Models", "Inference", "Logs"]}
      status={<><span className="dash__pill dash__pill--live">● AI Active</span><span className="dash__pill dash__pill--info">FrameLab v1</span></>}
      time="NEURAL"
    >
      <svg viewBox="0 0 100 80" preserveAspectRatio="none" style={{position:"absolute", inset:0, width:"100%", height:"100%"}}>
        {links.map(([a, b], i) => (
          <line key={i}
            x1={nodes[a][0]} y1={nodes[a][1]}
            x2={nodes[b][0]} y2={nodes[b][1]}
            stroke="#00d1ff" strokeWidth="0.4" opacity="0.5"/>
        ))}
        {nodes.map(([x,y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="2.5" fill="#00d1ff" opacity="0.25"/>
            <circle cx={x} cy={y} r="1.4" fill="#00f0ff" filter="drop-shadow(0 0 3px #00d1ff)"/>
          </g>
        ))}
      </svg>
    </DashChrome>
  );
}

/* ---------- PRODUCTS ---------- */
function Products() {
  const prods = [
    { name: "FrameLab",                  desc: "AI-powered VFX production ecosystem.",                          v: "v1.0",  tag: "AI",       Dash: DashFrameLab,         page: "FrameLab.html" },
    { name: "VFX_Project_Creator",       desc: "Automated VFX project initialization & pipeline structuring.",  v: "v1.0",  tag: "PIPELINE", Dash: DashProjectCreator },
    { name: "Framelab_Delivery_Packager",desc: "Smart delivery packaging for modern VFX productions.",          v: "v1.0",  tag: "DELIVERY", Dash: DashDeliveryPackager },
  ];
  return (
    <section className="section products" id="products" data-screen-label="06 Products">
      <div className="lightleak lightleak--top-right"/>
      <div className="lightleak lightleak--cyan lightleak--bot-left"/>
      <div className="container">
        <div className="shead reveal">
          <div className="shead__tag">Our Products</div>
          <a className="shead__link" href="Products.html">View All Products <Icon.ArrR/></a>
        </div>
        <div className="prodgrid">
          {prods.map((p,i) => (
            <a className="product reveal" key={i} href={p.page || "#"} style={{transitionDelay: `${i*0.07}s`, display: "block", color: "inherit", textDecoration: "none"}}>
              <div className="product__dash">
                <p.Dash/>
              </div>
              <div className="product__cs">Coming Soon</div>
              <div className="product__body">
                <div style={{flex: 1}}>
                  <div className="product__name">
                    {p.name === "FrameLab" && <img src="assets/framelab-mark.png" alt="" className="product__name-mark"/>}
                    <span>{p.name}</span>
                  </div>
                  <div className="product__desc">{p.desc}</div>
                  <div className="product__meta">
                    <span><b>{p.v}</b></span>
                    <span>·</span>
                    <span>{p.tag}</span>
                  </div>
                </div>
                <div className="product__arrow"><Icon.ArrR/></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PIPELINE ---------- */
function Pipeline() {
  const steps = [
    { i: <Icon.Client/>,  t: "Client",     s: "Project Brief\n& Onboarding" },
    { i: <Icon.Prod/>,    t: "Production", s: "Planning &\nScheduling" },
    { i: <Icon.AssetP/>,  t: "Assets",     s: "Creation &\nManagement" },
    { i: <Icon.Review/>,  t: "Review",     s: "Collaborate &\nApprove" },
    { i: <Icon.Pub/>,     t: "Publish",    s: "Final Output\nPreparation" },
    { i: <Icon.Del/>,     t: "Delivery",   s: "Secure Delivery\n& Archive" },
  ];
  return (
    <section className="section pipeline" data-screen-label="07 Pipeline">
      <div className="lightleak lightleak--cyan lightleak--top-right"/>
      <div className="gridlines"/>
      <div className="container">
        <div className="eyebrow shead__tag reveal" style={{marginBottom: 18}}>▸ The Paglait Pipeline</div>
        <div className="pipeline__grid reveal">
          <div className="pipeline__track">
            <span className="pipeline__pulse pipeline__pulse--a"/>
            <span className="pipeline__pulse pipeline__pulse--b"/>
            <span className="pipeline__pulse pipeline__pulse--c"/>
            {steps.map((s,i) => (
              <div className="step" key={i}>
                <div className="step__node">{s.i}</div>
                <div className="step__num">0{i+1}</div>
                <div className="step__title">{s.t}</div>
                <div className="step__sub">{s.s.split('\n').map((l,j) => <div key={j}>{l}</div>)}</div>
              </div>
            ))}
          </div>
          <div className="pipeline__panel">
            <h4>Intelligent. <em>Automated. Scalable.</em></h4>
            <p>Our AI-powered pipeline ensures quality, speed and transparency at every stage of production.</p>
            <a href="FrameLab.html" className="btn btn--small magnetic">Explore Pipeline <span className="arr"><Icon.ArrR/></span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ANIMATED COUNTER ---------- */
function Counter({ to, prefix = "", suffix = "", duration = 1800 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    let started = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        started = true;
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min((t - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

/* ---------- BIG STATS → PHILOSOPHY ---------- */
function BigStats() {
  const statements = [
    { n: "01", t: "Building Future Production Workflows", c: "Pipelines designed for the next decade of cinematic storytelling." },
    { n: "02", t: "AI-Powered Pipeline Innovation",       c: "Intelligence woven through every stage of production." },
    { n: "03", t: "Next Generation Production Ecosystem", c: "A unified, modular toolset built by working artists." },
  ];
  return (
    <section className="philosophy" data-screen-label="08 Philosophy">
      <div className="lightleak lightleak--top-left"/>
      <div className="gridlines"/>
      <div className="container">
        <div className="shead__tag reveal" style={{marginBottom: 56}}>▸ Studio Philosophy</div>
        <div className="philosophy__grid">
          {statements.map((s, i) => (
            <div className="philosophy__item reveal" key={s.n} style={{transitionDelay: `${i*0.08}s`}}>
              <div className="philosophy__num">{s.n}</div>
              <h3 className="philosophy__title">{s.t}</h3>
              <p className="philosophy__copy">{s.c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUSTED ---------- */
function Trusted() {
  const logos = ["NETFLIX","prime video","Disney+ hotstar","ZEE5 STUDIOS","viacom STUDIOS","SONY NETWORKS"];
  return (
    <section className="section trusted" data-screen-label="09 Trusted">
      <div className="lightleak lightleak--bot-right"/>
      <div className="container">
        <div className="eyebrow shead__tag reveal" style={{marginBottom: 18}}>▸ Trusted By Visionaries</div>
        <div className="trusted__grid">
          <div className="reveal-left">
            <div className="logoswall">
              {logos.map(l => <div className="logo" key={l}>{l}</div>)}
            </div>
          </div>
          <div className="testimonial">
            <span className="corner tl"/><span className="corner tr"/><span className="corner bl"/><span className="corner br"/>
            <div className="testimonial__quote">
              PaglaitVFX is a rare combination of artistic excellence and technical innovation. Their pipeline and team are world-class.
            </div>
            <div className="testimonial__by">— Director, Feature Film</div>
            <div className="testimonial__dots">
              <span/><span/><span className="active"/><span/><span/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- JOIN ---------- */
function Join() {
  const vals = [
    { i: <Icon.Innov/>, t: "Innovation", c: "Work on cutting-edge projects & technology." },
    { i: <Icon.Grow/>,  t: "Growth",     c: "Learn, grow and evolve together." },
    { i: <Icon.Flex/>,  t: "Flexibility",c: "Hybrid, remote & global opportunities." },
    { i: <Icon.Heart/>, t: "Impact",     c: "Build visuals that inspire the world." },
  ];
  return (
    <section className="join" id="careers" data-screen-label="10 Join">
      <div className="lightleak lightleak--top-left"/>
      <div className="lightleak lightleak--cyan lightleak--bot-right"/>
      <div className="gridlines"/>
      <div className="container">
        <div className="join__grid">
          <div className="reveal-left">
            <h2 className="join__title">Join The Future <br/>Of Production</h2>
            <p className="join__copy">We are always looking for passionate artists, innovators and problem-solvers.</p>
            <div className="join__ctas">
              <a href="mailto:info@paglaitvfx.in?subject=Careers%20at%20PaglaitVFX" className="btn btn--solid magnetic">View Open Roles <span className="arr"><Icon.ArrR/></span></a>
              <a href="#about" className="btn btn--ghost magnetic">Life At PaglaitVFX</a>
            </div>
          </div>
          <div className="join__values reveal">
            {vals.map(v => (
              <div className="value" key={v.t}>
                <div className="value__icon">{v.i}</div>
                <div className="value__title">{v.t}</div>
                <div className="value__copy">{v.c}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New enquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:info@paglaitvfx.in?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <footer className="footer" id="contact" data-screen-label="11 Footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo-wrap">
              <img src="assets/paglait-mark.png" alt="" className="footer__logo-img"/>
              <h3 className="footer__logo-text">PAGLAIT<b>VFX</b></h3>
            </div>
            <p>Cinematic VFX. AI Workflows.<br/>Pipeline Technology.</p>
            <div className="footer__social">
              <a href="https://instagram.com/paglaitvfx" target="_blank" rel="noopener" aria-label="Instagram"><Icon.IG/></a>
              <a href="https://linkedin.com/company/paglaitvfx" target="_blank" rel="noopener" aria-label="LinkedIn"><Icon.LI/></a>
              <a href="https://www.youtube.com/@PaglaitVFX" target="_blank" rel="noopener" aria-label="YouTube"><Icon.YT/></a>
              <a href="mailto:info@paglaitvfx.in" aria-label="Email"><Icon.X/></a>
            </div>
          </div>
          <div className="footer__col">
            <h5>Company</h5>
            <ul><li><a href="About.html">About Us</a></li><li><a href="Services.html">Services</a></li><li><a href="Projects.html">Projects</a></li><li><a href="Careers.html">Careers</a></li><li><a href="Contact.html">Contact</a></li></ul>
          </div>
          <div className="footer__col">
            <h5>Products</h5>
            <ul><li><a href="Products.html">All Products</a></li><li><a href="FrameLab.html">FrameLab</a></li><li><a href="VFX_Project_Creator.html">VFX Project Creator</a></li><li><a href="Framelab_Delivery_Packager.html">Delivery Packager</a></li></ul>
          </div>
          <div className="footer__col">
            <h5>Resources</h5>
            <ul><li><a href="Projects.html">Our Work</a></li><li><a href="About.html">Studio</a></li><li><a href="FrameLab.html">FrameLab</a></li><li><a href="Contact.html">Get In Touch</a></li></ul>
          </div>
          <div className="footer__col footer__contact">
            <h5>Let's Build Something Cinematic</h5>
            <div className="row"><Icon.Mail/> <a href="mailto:info@paglaitvfx.in">info@paglaitvfx.in</a></div>
            <div className="row"><Icon.Pin/> Mumbai, India</div>
          </div>
          <div className="footer__col formcard">
            <h5>Send Us A Message</h5>
            {sent ? (
              <div className="formcard__ok">▸ Thanks{form.name ? `, ${form.name}` : ""}. Your mail client should now open — or write to us directly at <a href="mailto:info@paglaitvfx.in">info@paglaitvfx.in</a>.</div>
            ) : (
              <form onSubmit={submit}>
                <div className="formcard__row">
                  <input type="text" placeholder="Name" required value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
                  <input type="email" placeholder="Email" required value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
                </div>
                <textarea placeholder="Your Message" required value={form.message} onChange={e=>setForm({...form, message:e.target.value})}/>
                <button type="submit" className="formcard__send">Send Message</button>
              </form>
            )}
          </div>
        </div>
        <div className="footer__bottom">
          <div>© 2026 PaglaitVFX. All Rights Reserved.</div>
          <div><a href="mailto:info@paglaitvfx.in">Privacy Policy</a><a href="mailto:info@paglaitvfx.in">Terms & Conditions</a></div>
        </div>
      </div>
    </footer>
  );
}

/* Export to window for app.jsx + subpages */
Object.assign(window, {
  Nav, Hero, Showreel, About, Services, Projects, Products, Pipeline, BigStats, Join, Footer,
  Icon, Counter,
  DashFrameLab, DashProjectCreator, DashDeliveryPackager, DashChrome
});
