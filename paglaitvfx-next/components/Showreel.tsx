"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

const VIDEO_ID = "72qBDJECvZ8";

export default function Showreel() {
  const playerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted]     = useState(true);

  const src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&playsinline=1&enablejsapi=1&disablekb=1`;

  const post = (cmd: string, args: any[] = []) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: cmd, args }),
      "*"
    );
  };

  useEffect(() => {
    const el = playerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { post("playVideo");  setPlaying(true); }
      else                      { post("pauseVideo"); setPlaying(false); }
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const togglePlay = () => { playing ? post("pauseVideo") : post("playVideo"); setPlaying(!playing); };
  const toggleMute = () => { muted ? post("unMute") : post("mute"); setMuted(!muted); };

  return (
    <section id="showreel" className="border-t border-line" data-screen-label="02 Showreel"
      style={{background: "linear-gradient(180deg, #07060a 0%, #050403 100%)"}}>
      <div className="max-w-[1320px] mx-auto px-10 py-[70px]">
        <Reveal>
          <div className="shead-tag mb-7">▸ Showreel</div>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 items-center">
          <Reveal direction="left">
            <h2 className="font-display font-bold text-[72px] leading-[0.92] tracking-tighter">
              Crafting <br/><em className="not-italic text-accent">Cinematic Worlds</em>
            </h2>
            <p className="text-ink-2 mt-5 mb-7 leading-[1.6] text-sm max-w-[320px]">
              Visual storytelling powered by artistry, technology, and next-generation workflows.
            </p>
            <div className="flex gap-3 flex-wrap">
              <MagneticButton className="btn btn-solid">Watch Full Reel <span className="arr"><Icon.ArrR/></span></MagneticButton>
              <MagneticButton className="btn btn-ghost">Explore Projects <span className="arr"><Icon.ArrR/></span></MagneticButton>
            </div>
          </Reveal>

          <Reveal>
            <div ref={playerRef} className="relative aspect-video bg-black border border-line overflow-hidden isolate">
              <iframe
                ref={iframeRef}
                className="player-iframe"
                src={src}
                title="PaglaitVFX Showreel"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              <div className="player-shade absolute inset-0 pointer-events-none"/>
              <div className="absolute left-[18px] top-[18px] font-mono text-[10px] tracking-[0.2em] uppercase text-ink-3">
                <span className="text-accent mr-2">▸</span> REEL_2026.mov · 4K · DolbyVision
              </div>
              <span className="corner tl"/><span className="corner tr"/><span className="corner bl"/><span className="corner br"/>
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3.5 px-[18px] py-3.5"
                style={{background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)"}}>
                <button className="relative w-7 h-7 grid place-items-center text-ink" onClick={togglePlay}>
                  {playing ? <Icon.Pause/> : <Icon.Play/>}
                </button>
                <div className="player-bar flex-1"/>
                <span className="font-mono text-[10px] text-ink-2 tracking-[0.1em]">LIVE / ∞</span>
                <button className="relative w-7 h-7 grid place-items-center text-ink" onClick={toggleMute}>
                  <Icon.Vol/>
                  {muted && (
                    <span className="absolute left-1/2 top-1/2 w-[18px] h-px bg-accent -translate-x-1/2 -translate-y-1/2 -rotate-[25deg]"
                          style={{boxShadow:"0 0 4px var(--accent)"}}/>
                  )}
                </button>
                <span className="w-7 h-7 grid place-items-center text-ink"><Icon.Full/></span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
