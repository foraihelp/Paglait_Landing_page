"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Icon } from "./Icons";
import MagneticButton from "./MagneticButton";

const items = ["Home","About","Services","Projects","Products","Technology","Careers","Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={clsx(
      "fixed top-0 inset-x-0 z-50 flex items-center justify-between",
      "px-10 transition-all duration-200 backdrop-blur-md",
      scrolled
        ? "py-3 bg-bg/90 border-b border-line"
        : "py-[18px] bg-gradient-to-b from-bg/90 via-bg/60 to-transparent"
    )}>
      <div className="font-display font-bold text-[22px] tracking-tightest">
        PAGLAIT<span className="text-accent">VFX</span>
      </div>
      <div className="hidden md:flex gap-9">
        {items.map((it, i) => (
          <a key={it} href="#" className={clsx(
            "relative font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 py-1",
            i === 0 ? "text-ink" : "text-ink-2 hover:text-ink"
          )}>
            {it}
            {i === 0 && (
              <span className="absolute inset-x-0 -bottom-1.5 h-px bg-accent" style={{boxShadow: "0 0 10px var(--accent)"}}/>
            )}
          </a>
        ))}
      </div>
      <MagneticButton className="btn btn-small">
        Let&apos;s Talk <span className="arr"><Icon.ArrR/></span>
      </MagneticButton>
    </nav>
  );
}
