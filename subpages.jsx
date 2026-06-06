/* global React, ReactDOM, Nav, Footer, Icon, Counter, DashFrameLab, DashProjectCreator, DashDeliveryPackager */
const { useState, useEffect } = React;

/* ============================================================
   Shared building blocks
   ============================================================ */
function PageHero({ eyebrow, title, sub }) {
  return (
    <section className="pagehero" data-screen-label="Page Hero">
      <div className="pagehero__bg"/>
      <div className="hero__stars" style={{position:"absolute", inset:0, opacity:0.5}}/>
      <div className="lightleak lightleak--cyan lightleak--top-right"/>
      <div className="container">
        <div className="pagehero__inner">
          <div className="eyebrow pagehero__eyebrow reveal">{eyebrow}</div>
          <h1 className="pagehero__title reveal" style={{transitionDelay:"0.06s"}}>{title}</h1>
          {sub && <p className="pagehero__sub reveal" style={{transitionDelay:"0.12s"}}>{sub}</p>}
        </div>
      </div>
    </section>
  );
}

function PageCTA({ tag = "Let's Talk", title, sub, btn = "Get In Touch", href = "Contact.html" }) {
  return (
    <section className="pagecta">
      <div className="lightleak lightleak--cyan lightleak--bot-left"/>
      <div className="container">
        <div className="pagecta__inner reveal">
          <div className="shead__tag" style={{justifyContent:"center", marginBottom:24}}>{tag}</div>
          <h2 className="pagecta__title">{title}</h2>
          {sub && <p className="pagecta__sub">{sub}</p>}
          <a href={href} className="btn btn--solid magnetic" style={{marginTop:8}}>{btn} <span className="arr"><Icon.ArrR/></span></a>
        </div>
      </div>
    </section>
  );
}

function Crumb({ here }) {
  return (
    <div className="crumb">
      <div className="container">
        <a href="index.html">Home</a> <span>/</span> <em>{here}</em>
      </div>
    </div>
  );
}

/* ============================================================
   ABOUT
   ============================================================ */
function AboutPage() {
  const capabilities = [
    { i: <Icon.Comp/>,  t: "Cinematic Craft",      c: "Compositing, matchmove, matte painting, rotoscopy and CG integration delivered to feature-film standard." },
    { i: <Icon.PipeIco/>,t: "Pipeline Engineering", c: "Custom production pipelines and tooling built around the way your team actually works." },
    { i: <Icon.AI/>,    t: "AI-Powered Tools",     c: "In-house models and automation for the repeatable parts of production — so artists focus on craft." },
    { i: <Icon.Globe/>, t: "Made In Mumbai",       c: "A studio rooted in the Indian film capital, working with productions across the world." },
  ];
  const philosophy = [
    { n: "01", t: "Building Future Production Workflows", c: "Pipelines designed for the next decade of cinematic storytelling." },
    { n: "02", t: "AI-Powered Pipeline Innovation",       c: "Intelligence woven through every stage of production." },
    { n: "03", t: "Next Generation Production Ecosystem", c: "A unified, modular toolset built by working artists." },
  ];
  return (
    <>
      <PageHero eyebrow="// About Us" title={<>Where Art <em>Meets Technology</em></>}
        sub="PaglaitVFX is a next-generation studio building cinematic experiences and intelligent pipelines for the future of content creation."/>
      <Crumb here="About"/>

      <section className="section">
        <div className="container">
          <div className="prose reveal">
            <p>We are a cinematic VFX and technology studio working at the intersection of artistry and machine intelligence. From feature films to global commercial campaigns, we craft visual stories — and the production systems that make them possible.</p>
            <p>Our work spans compositing, CG integration, matte painting and full shot delivery, supported by an in-house engineering practice building the next generation of AI-assisted production tools under the <a href="FrameLab.html">FrameLab</a> banner.</p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <div className="founder reveal" style={{marginTop:0}}>
            <div className="founder__rule"/>
            <div className="founder__inner">
              <div className="founder__meta">
                <div className="eyebrow shead__tag" style={{marginBottom:22}}>▸ Founder</div>
                <h3 className="founder__name">Indrani Pal</h3>
                <div className="founder__role">CEO &amp; Founder · PaglaitVFX</div>
              </div>
              <div className="founder__statement">
                <span className="founder__mark">“</span>
                <p>Building the future of cinematic production workflows through artistry, technology, and AI-driven innovation.</p>
              </div>
            </div>
            <div className="founder__halo"/>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container">
          <div className="shead reveal"><div className="shead__tag">What We Do</div></div>
          <div className="caps">
            {capabilities.map((c,i) => (
              <div className="cap reveal" key={c.t} style={{transitionDelay:`${i*0.06}s`}}>
                <div className="cap__icon">{c.i}</div>
                <div className="cap__title">{c.t}</div>
                <p className="cap__copy">{c.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy">
        <div className="gridlines"/>
        <div className="container">
          <div className="shead__tag reveal" style={{marginBottom:56}}>▸ Studio Philosophy</div>
          <div className="philosophy__grid">
            {philosophy.map((s,i) => (
              <div className="philosophy__item reveal" key={s.n} style={{transitionDelay:`${i*0.08}s`}}>
                <div className="philosophy__num">{s.n}</div>
                <h3 className="philosophy__title">{s.t}</h3>
                <p className="philosophy__copy">{s.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA title={<>Let's build something <em>cinematic.</em></>}
        sub="Tell us about your production and we'll show you how we can help."/>
    </>
  );
}

/* ============================================================
   SERVICES
   ============================================================ */
function ServicesPage() {
  const services = [
    { i: <Icon.Comp/>,    t: "Compositing",          c: "Seamless integration of CG, plates and effects into final-grade shots." },
    { i: <Icon.Match/>,   t: "Matchmove & Tracking", c: "Camera solves and object tracking that lock CG to live action." },
    { i: <Icon.Clean/>,   t: "Cleanup & Paint",      c: "Rig removal, wire removal and plate restoration at any scale." },
    { i: <Icon.Roto/>,    t: "Rotoscopy",            c: "Precise mattes and articulated roto for complex compositing." },
    { i: <Icon.Matte/>,   t: "Matte Painting",       c: "Photoreal digital environments and set extensions." },
    { i: <Icon.CG/>,      t: "CG Integration",       c: "Lighting, lookdev and rendering that sits invisibly in the plate." },
    { i: <Icon.PipeIco/>, t: "Pipeline Development",  c: "Custom tools and pipelines tuned to your studio's workflow." },
    { i: <Icon.AI/>,      t: "AI Workflow",          c: "Model-assisted roto, denoise, upscale and shot automation." },
    { i: <Icon.Asset/>,   t: "Asset Management",     c: "Versioned, queryable libraries for models, textures and shots." },
    { i: <Icon.Track/>,   t: "Production Tracking",  c: "Shot, task and review tracking that keeps everyone in sync." },
  ];
  return (
    <>
      <PageHero eyebrow="// Services" title={<>Full-Service <em>VFX & Pipeline</em></>}
        sub="From a single hero shot to a full production pipeline — a complete creative and technical toolkit under one roof."/>
      <Crumb here="Services"/>

      <section className="section">
        <div className="container">
          <div className="srvlist">
            {services.map((s,i) => (
              <div className="srv reveal" key={s.t} style={{transitionDelay:`${(i%2)*0.06}s`}}>
                <div className="srv__icon">{s.i}</div>
                <div className="srv__body">
                  <div className="srv__title">{s.t}</div>
                  <p className="srv__copy">{s.c}</p>
                </div>
                <div className="srv__num">{String(i+1).padStart(2,"0")}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA title={<>Have a shot in mind? <em>Let's talk.</em></>}
        sub="Send us your brief and we'll scope it with you."/>
    </>
  );
}

/* ============================================================
   PROJECTS
   ============================================================ */
function ProjectsPage() {
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
    <>
      <PageHero eyebrow="// Our Work" title={<>Cinematic <em>Project Showcase</em></>}
        sub="A selection of feature films and global commercial campaigns crafted at PaglaitVFX."/>
      <Crumb here="Projects"/>

      <section className="section projects">
        <div className="container">
          <div className="shead reveal">
            <div className="shead__tag">Featured Projects</div>
            <div className="tabs">
              {tabs.map((t,i) => (
                <button key={t} className={`tab ${i===tab?"active":""}`} onClick={() => setTab(i)}>{t}</button>
              ))}
            </div>
          </div>
          <div className="projgrid projgrid--page">
            {filtered.map((p,i) => (
              <div className="project reveal in" key={p.t} style={{transitionDelay:`${i*0.06}s`}}
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

      <PageCTA title={<>Want to see <em>more?</em></>}
        sub="Reach out for our full showreel and shot breakdowns." btn="Request Showreel"/>
    </>
  );
}

/* ============================================================
   CAREERS
   ============================================================ */
function CareersPage() {
  const values = [
    { i: <Icon.Innov/>, t: "Innovation", c: "Work on cutting-edge projects & technology." },
    { i: <Icon.Grow/>,  t: "Growth",     c: "Learn, grow and evolve together." },
    { i: <Icon.Flex/>,  t: "Flexibility",c: "Hybrid, remote & global opportunities." },
    { i: <Icon.Heart/>, t: "Impact",     c: "Build visuals that inspire the world." },
  ];
  return (
    <>
      <PageHero eyebrow="// Careers" title={<>Join The Future <em>Of Production</em></>}
        sub="We're always looking for passionate artists, innovators and problem-solvers to build the next generation of cinematic production."/>
      <Crumb here="Careers"/>

      <section className="section">
        <div className="container">
          <div className="shead reveal"><div className="shead__tag">Why PaglaitVFX</div></div>
          <div className="caps">
            {values.map((v,i) => (
              <div className="cap reveal" key={v.t} style={{transitionDelay:`${i*0.06}s`}}>
                <div className="cap__icon">{v.i}</div>
                <div className="cap__title">{v.t}</div>
                <p className="cap__copy">{v.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <div className="shead reveal"><div className="shead__tag">Open Roles</div></div>
          <div className="noroles reveal">
            <div className="noroles__icon"><Icon.Track/></div>
            <h3 className="noroles__title">No open positions right now</h3>
            <p className="noroles__copy">We're not actively hiring at the moment — but we're growing, and new roles will be posted here soon. If you're a passionate artist, engineer or problem-solver, we'd still love to hear from you.</p>
            <a href="mailto:info@paglaitvfx.in?subject=Open%20Application" className="btn btn--solid magnetic">Send An Open Application <span className="arr"><Icon.ArrR/></span></a>
            <p className="noroles__note">Or write to us at <a href="mailto:info@paglaitvfx.in">info@paglaitvfx.in</a></p>
          </div>
        </div>
      </section>

      <PageCTA tag="Open Application" title={<>Think you're a <em>fit?</em></>}
        sub="We'd love to see your work." btn="Send Your Reel"
        href="mailto:info@paglaitvfx.in?subject=Open%20Application"/>
    </>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */
function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Enquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:info@paglaitvfx.in?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <>
      <PageHero eyebrow="// Contact" title={<>Let's Build Something <em>Cinematic</em></>}
        sub="Tell us about your project, your pipeline, or your idea. We read every message."/>
      <Crumb here="Contact"/>

      <section className="section">
        <div className="container">
          <div className="contact">
            <div className="contact__info reveal-left">
              <div className="contact__row">
                <div className="contact__icon"><Icon.Mail/></div>
                <div>
                  <div className="contact__label">Email</div>
                  <a href="mailto:info@paglaitvfx.in" className="contact__value">info@paglaitvfx.in</a>
                </div>
              </div>
              <div className="contact__row">
                <div className="contact__icon"><Icon.Pin/></div>
                <div>
                  <div className="contact__label">Studio</div>
                  <div className="contact__value">Mumbai, India</div>
                </div>
              </div>
              <div className="contact__social">
                <a href="https://instagram.com/paglaitvfx" target="_blank" rel="noopener" aria-label="Instagram"><Icon.IG/></a>
                <a href="https://linkedin.com/company/paglaitvfx" target="_blank" rel="noopener" aria-label="LinkedIn"><Icon.LI/></a>
                <a href="https://www.youtube.com/@PaglaitVFX" target="_blank" rel="noopener" aria-label="YouTube"><Icon.YT/></a>
              </div>
            </div>

            <div className="contact__form reveal">
              {sent ? (
                <div className="formcard__ok">▸ Thanks{form.name ? `, ${form.name}` : ""}. Your mail client should now open — or write to us directly at <a href="mailto:info@paglaitvfx.in">info@paglaitvfx.in</a>.</div>
              ) : (
                <form onSubmit={submit}>
                  <div className="formcard__row">
                    <input type="text" placeholder="Name" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                    <input type="email" placeholder="Email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
                  </div>
                  <input type="text" placeholder="Subject" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} style={{marginBottom:8}}/>
                  <textarea placeholder="Your Message" required value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
                  <button type="submit" className="formcard__send">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   PRODUCTS (overview)
   ============================================================ */
function ProductsPage() {
  const prods = [
    { name: "FrameLab",                  desc: "AI-powered VFX production ecosystem.",                          v: "v1.0", tag: "AI",       Dash: DashFrameLab,         page: "FrameLab.html" },
    { name: "VFX_Project_Creator",       desc: "Automated VFX project initialization & pipeline structuring.",  v: "v1.0", tag: "PIPELINE", Dash: DashProjectCreator,   page: "VFX_Project_Creator.html" },
    { name: "Framelab_Delivery_Packager",desc: "Smart delivery packaging for modern VFX productions.",          v: "v1.0", tag: "DELIVERY", Dash: DashDeliveryPackager, page: "Framelab_Delivery_Packager.html" },
  ];
  return (
    <>
      <PageHero eyebrow="// Products" title={<>Our Production <em>Software</em></>}
        sub="A growing ecosystem of cinematic production tools — built in-house by working artists and engineers."/>
      <Crumb here="Products"/>

      <section className="section products">
        <div className="container">
          <div className="prodgrid">
            {prods.map((p,i) => (
              <a className="product reveal" key={i} href={p.page} style={{transitionDelay:`${i*0.07}s`, display:"block", color:"inherit", textDecoration:"none"}}>
                <div className="product__dash"><p.Dash/></div>
                <div className="product__cs">Coming Soon</div>
                <div className="product__body">
                  <div style={{flex:1}}>
                    <div className="product__name">
                      {p.name === "FrameLab" && <img src="assets/framelab-mark.png" alt="" className="product__name-mark"/>}
                      <span>{p.name}</span>
                    </div>
                    <div className="product__desc">{p.desc}</div>
                    <div className="product__meta"><span><b>{p.v}</b></span><span>·</span><span>{p.tag}</span></div>
                  </div>
                  <div className="product__arrow"><Icon.ArrR/></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <PageCTA title={<>Want early access? <em>Join the list.</em></>}
        sub="Be among the first studios to deploy our tools." btn="Request Early Access"/>
    </>
  );
}

/* ============================================================
   PRODUCT DETAIL (generic)
   ============================================================ */
function ProductDetail({ data }) {
  const Dash = data.Dash;
  return (
    <>
      <PageHero eyebrow={`// ${data.tag} · Coming Soon`} title={data.name.replace(/_/g, " ")}
        sub={data.tagline}/>
      <Crumb here={data.name.replace(/_/g, " ")}/>

      <section className="section">
        <div className="container">
          <div className="pd__preview reveal">
            <div className="pd__chrome"><span/><span/><span/><b>{data.name}</b></div>
            <div className="pd__dash"><Dash/></div>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <div className="shead reveal"><div className="shead__tag">Features</div></div>
          <div className="caps">
            {data.features.map((f,i) => (
              <div className="cap reveal" key={f.t} style={{transitionDelay:`${i*0.06}s`}}>
                <div className="cap__icon">{f.i}</div>
                <div className="cap__title">{f.t}</div>
                <p className="cap__copy">{f.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA tag="Coming Soon" title={<>{data.name.replace(/_/g, " ")} is <em>almost here.</em></>}
        sub="Request early access and we'll be in touch." btn="Request Early Access"
        href="mailto:info@paglaitvfx.in?subject=Early%20Access"/>
    </>
  );
}

const PRODUCT_DETAILS = {
  "VFX_Project_Creator.html": {
    name: "VFX_Project_Creator", tag: "PIPELINE", Dash: DashProjectCreator,
    tagline: "Automated VFX Project Initialization & Pipeline Structuring.",
    features: [
      { i: <Icon.Folder/>,  t: "Auto Folder Structure", c: "Generate a complete, pipeline-ready project tree in one click." },
      { i: <Icon.PipeIco/>, t: "Pipeline-Ready Setup",  c: "Every project starts pre-wired for your studio's workflow." },
      { i: <Icon.Asset/>,   t: "Template Automation",   c: "Reusable project templates for shows, spots and R&D." },
      { i: <Icon.Track/>,   t: "Naming Conventions",    c: "Enforced, consistent naming across every shot and asset." },
      { i: <Icon.Bolt/>,    t: "Workflow Acceleration", c: "Cut project setup from hours to seconds." },
      { i: <Icon.AI/>,      t: "Smart Initialization",  c: "Sensible defaults inferred from project type and scope." },
    ],
  },
  "Framelab_Delivery_Packager.html": {
    name: "Framelab_Delivery_Packager", tag: "DELIVERY", Dash: DashDeliveryPackager,
    tagline: "Smart Delivery Packaging for Modern VFX Productions.",
    features: [
      { i: <Icon.Bolt/>,    t: "Delivery Automation",   c: "Automated, repeatable delivery builds with zero manual collation." },
      { i: <Icon.Folder/>,  t: "Smart Packaging",       c: "Collects shots, versions and metadata into client-ready bundles." },
      { i: <Icon.Globe/>,   t: "Client-Ready Exports",  c: "Export to any spec — naming, structure and formats per client." },
      { i: <Icon.Layers/>,  t: "Version Management",    c: "Always ships the right version, every time." },
      { i: <Icon.Asset/>,   t: "Folder Collection",     c: "Gathers scattered files into a clean, validated package." },
      { i: <Icon.AI/>,      t: "Delivery Optimization", c: "Validates and optimizes packages before they go out." },
    ],
  },
};

/* ============================================================
   Router + shared page init
   ============================================================ */
function usePageInit() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-fade");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
  useEffect(() => {
    const els = document.querySelectorAll(".magnetic");
    const hs = [];
    els.forEach(el => {
      const m = (e) => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX-(r.left+r.width/2))*0.18}px, ${(e.clientY-(r.top+r.height/2))*0.22}px)`; };
      const l = () => { el.style.transform = ""; };
      el.addEventListener("mousemove", m); el.addEventListener("mouseleave", l); hs.push([el,m,l]);
    });
    return () => hs.forEach(([el,m,l]) => { el.removeEventListener("mousemove",m); el.removeEventListener("mouseleave",l); });
  });
}

function SubPage() {
  usePageInit();
  const here = (window.location.pathname.split("/").pop()) || "";
  let Content;
  if (here === "About.html")    Content = AboutPage;
  else if (here === "Services.html") Content = ServicesPage;
  else if (here === "Projects.html") Content = ProjectsPage;
  else if (here === "Careers.html")  Content = CareersPage;
  else if (here === "Contact.html")  Content = ContactPage;
  else if (here === "Products.html") Content = ProductsPage;
  else if (PRODUCT_DETAILS[here])    Content = () => <ProductDetail data={PRODUCT_DETAILS[here]}/>;
  else Content = AboutPage;
  return (
    <>
      <Nav/>
      <Content/>
      <Footer/>
    </>
  );
}

const subRoot = ReactDOM.createRoot(document.getElementById("root"));
subRoot.render(<SubPage/>);
