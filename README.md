# PaglaitVFX — Cinematic Studio Website

Premium dark-luxury single-page site for **PaglaitVFX** + dedicated **FrameLab** product launch page. Built with React (via Babel for the static build) and a parallel **Next.js 14** source tree.

## What's in this repo

```
paglait-vfx/
├── index.html                # Main site (root entry)
├── FrameLab.html             # FrameLab product launch page
├── PaglaitVFX.bundle.html    # Single-file bundled build (offline-capable)
│
├── styles.css                # Shared design tokens + components
├── framelab.css              # FrameLab page styles
│
├── components.jsx            # Shared React components (Nav, Hero, Showreel, etc.)
├── framelab.jsx              # FrameLab page React tree
├── app.jsx                   # Main-site React entry + Lenis smooth scroll + tweaks
│
├── image-slot.js             # Drag-and-drop image placeholder web component
├── tweaks-panel.jsx          # Floating tweaks panel
│
├── assets/                   # Logos + project images (real)
│   ├── paglait.png           #   wordmark + symbol
│   ├── paglait-mark.png      #   P glyph only (used in nav/footer)
│   ├── framelab.png          #   FrameLab full lockup
│   ├── framelab-mark.png     #   F glyph only
│   ├── framelab-dashboard.png#   real workspace screenshot
│   └── projects/             #   Dhurandhar, Ordinary Man, Flowerbomb, RR, Pepsi, Miniso, Hyundai
│
└── paglaitvfx-next/          # Parallel Next.js 14 + Tailwind + Framer Motion source
```

## Quick run

**Static** — open `index.html` directly, or serve the folder:

```bash
npx serve .
```

**Next.js source** (modular React, ready for Vercel):

```bash
cd paglaitvfx-next
npm install
npm run dev
```

## Stack

- **Static build** — Vanilla HTML + Babel-transpiled JSX, Lenis-lite smooth scroll, IntersectionObserver reveals, magnetic buttons
- **Next.js source** — Next 14 App Router · TypeScript · Tailwind · Framer Motion · Lenis
- **Typography** — Space Grotesk (display) · Inter (body) · JetBrains Mono (UI)
- **Palette** — `#050505` bg · `#00d1ff` cyan accent · `#00f0ff` secondary · `#ffffff` ink

## Site structure

1. Hero (with cinematic portal, scope HUD, anamorphic streak)
2. Showreel (YouTube embed, viewport autoplay, custom chrome)
3. About + Founder block (Indrani Pal, CEO & Founder)
4. Services strip (11 disciplines)
5. Featured Projects (7 real works)
6. Products — **FrameLab, VFX_Project_Creator, Framelab_Delivery_Packager**
7. Pipeline (6-step animated cyan flow)
8. Studio Philosophy (3 numbered visionary statements)
9. Join the Future (careers)
10. Footer (contact: `info@paglaitvfx.in`)

## FrameLab page (FrameLab.html)

Apple/NVIDIA product-launch presentation:

1. Hero — animated coming-soon badge, full FrameLab logo, holographic rings
2. Vision — pull-quote
3. Features — 6 capability cards with hover glow
4. Workspace — real FrameLab dashboard screenshot framed in a browser chrome
5. AI Automation — neural network visual + capability list
6. Coming Soon CTA — with `info@paglaitvfx.in` button
7. Early Access — form card

## Contact

**info@paglaitvfx.in** · Mumbai, India

---

© 2026 PaglaitVFX. All rights reserved.
