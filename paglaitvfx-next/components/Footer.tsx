"use client";
import { useState } from "react";
import { Icon } from "./Icons";

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // wire to your endpoint of choice
    console.log("contact form", form);
  };

  return (
    <footer className="border-t border-line pt-[70px] pb-10" data-screen-label="11 Footer">
      <div className="max-w-[1320px] mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-display font-bold text-[28px] tracking-tighter mb-3.5">
              PAGLAIT<span className="text-accent">VFX</span>
            </h3>
            <p className="text-[11px] text-ink-3 leading-[1.6] mb-[18px]">
              Cinematic VFX. AI Workflows.<br/>Pipeline Technology.
            </p>
            <div className="flex gap-2.5">
              {[Icon.IG, Icon.LI, Icon.YT, Icon.X].map((I, idx) => (
                <a key={idx} href="#" className="w-8 h-8 border border-line grid place-items-center text-ink-2 hover:border-accent hover:text-accent transition-colors">
                  <I/>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <FooterCol title="Company" links={["About Us","Services","Projects","Careers","Contact"]}/>
          <FooterCol title="Products" links={["All Products","Pipeline","Tools","AI Solutions","Coming Soon"]}/>
          <FooterCol title="Resources" links={["Blog","Case Studies","Documentation","Help Center"]}/>

          {/* Contact */}
          <div>
            <FooterHeading>Let&apos;s Build Something Cinematic</FooterHeading>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-ink-2"><span className="text-accent flex-none"><Icon.Mail/></span> hello@paglaitvfx.in</div>
              <div className="flex items-center gap-2.5 text-xs text-ink-2"><span className="text-accent flex-none"><Icon.Phone/></span> +91 12345 67890</div>
              <div className="flex items-center gap-2.5 text-xs text-ink-2"><span className="text-accent flex-none"><Icon.Pin/></span> Mumbai, India</div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit}>
            <FooterHeading>Send Us A Message</FooterHeading>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input
                type="text" placeholder="Name" required
                value={form.name}  onChange={e => setForm({ ...form, name:  e.target.value })}
                className="w-full bg-white/[0.03] border border-line px-3 py-3 text-ink text-xs outline-none focus:border-accent transition-colors"
              />
              <input
                type="email" placeholder="Email" required
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/[0.03] border border-line px-3 py-3 text-ink text-xs outline-none focus:border-accent transition-colors"
              />
            </div>
            <textarea
              placeholder="Your Message" required
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/[0.03] border border-line px-3 py-3 text-ink text-xs outline-none focus:border-accent transition-colors min-h-[76px] resize-y"
            />
            <button
              type="submit"
              className="mt-2 px-[18px] py-3 bg-accent text-[#0a0604] font-mono text-[10px] tracking-[0.22em] uppercase hover:bg-gold transition-all hover:shadow-glow"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-14 pt-5 border-t border-line flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-ink-3 flex-wrap gap-2">
          <div>© 2026 PaglaitVFX. All Rights Reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Privacy Policy</a>
            <a href="#" className="hover:text-ink">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent mb-3.5 flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-accent inline-block"/>{children}
    </h5>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <ul className="flex flex-col gap-2.5">
        {links.map(l => (
          <li key={l}><a href="#" className="text-xs text-ink-2 hover:text-ink transition-colors">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
