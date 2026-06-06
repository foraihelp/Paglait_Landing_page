# PaglaitVFX — Cinematic Studio Website

A premium, dark-luxury single-page site for **PaglaitVFX** — cinematic VFX, AI workflow, and pipeline technology. Built with Next.js 14 (App Router), Tailwind CSS, Framer Motion, and Lenis smooth scroll.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build & run production:

```bash
npm run build
npm start
```

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with extended theme tokens (`accent`, `gold`, `cyan`, `ink`, `bg`)
- **Framer Motion** for scroll reveals, magnetic buttons, hover lifts
- **Lenis** smooth-scroll (RAF-driven)
- **next/font** for self-hosted **Space Grotesk** (display) + **Inter** (body) + **JetBrains Mono** (UI)

## Project structure

```
paglaitvfx-next/
├── app/
│   ├── layout.tsx          # fonts, metadata, smooth-scroll wrapper
│   ├── page.tsx            # composes all sections
│   └── globals.css         # design tokens, cinematic CSS scenes, glassmorphism
├── components/
│   ├── Nav.tsx             # fixed nav with scroll-shrink
│   ├── Hero.tsx            # portal, particles, side counter, magnetic CTAs
│   ├── Showreel.tsx        # YouTube embed + custom chrome + IntersectionObserver autoplay
│   ├── About.tsx           # feature cards + studio scene + stats
│   ├── Services.tsx        # 11-slot service strip
│   ├── Projects.tsx        # tabbed featured projects
│   ├── Products.tsx        # glassmorphism dashboard cards
│   ├── Pipeline.tsx        # 6-step animated electric-blue flow
│   ├── BigStats.tsx        # 6-up stat strip
│   ├── Trusted.tsx         # partner logo wall + testimonial
│   ├── Join.tsx            # careers section
│   ├── Footer.tsx          # multi-column + contact form
│   ├── Icons.tsx           # all inline SVG icons (one place to edit)
│   ├── Reveal.tsx          # Framer Motion in-view reveal (up / left / fade)
│   ├── MagneticButton.tsx  # spring-based mouse-tracking magnetism
│   └── SmoothScroll.tsx    # Lenis wrapper
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Design tokens

Defined in `tailwind.config.ts` + `app/globals.css`:

| Token       | Value      | Usage                                |
|-------------|------------|--------------------------------------|
| `bg`        | `#050505`  | Page background                      |
| `bg-1`      | `#0a0a0a`  | Section backgrounds                  |
| `bg-2`      | `#0f0f0f`  | Secondary panels                     |
| `panel`     | `#111111`  | Card surfaces                        |
| `line`      | `#1d1d1d`  | Hairline borders                     |
| `accent`    | `#ff7a00`  | Cinematic orange — primary           |
| `gold`      | `#ffc857`  | Hover / secondary accent             |
| `cyan`      | `#00d1ff`  | Electric blue — tech/pipeline glow   |
| `ink`       | `#ffffff`  | Foreground text                      |
| `ink-3`     | `#a0a0a0`  | Muted text                           |

## Customization

- **Brand color**: change `accent` in `tailwind.config.ts` and `--accent` in `globals.css` to repalette.
- **Showreel video**: edit `VIDEO_ID` in `components/Showreel.tsx`.
- **Projects / Products / Services**: each component holds its own data array at the top — edit in place or move to `lib/data.ts`.
- **Partner logos**: replace placeholders in `components/Trusted.tsx` (`partners` array). For real logos, drop SVGs into `public/logos/` and swap the `<div>` for `<Image>`.
- **Imagery**: the project scenes (`scene-castle`, `scene-astronaut`, etc.) are pure-CSS atmospheric placeholders. Replace with `<Image>` calls and remove the `.scene-*` class to slot in real renders.
- **Contact form**: `Footer.tsx` currently logs to console — wire `onSubmit` to your API route (`app/api/contact/route.ts`) or a form service (Resend, Formspree, etc.).

## Motion notes

- **Scroll reveals** use Framer Motion's `whileInView` with `once: true` to avoid re-animating.
- **Magnetic buttons** wrap any control via `<MagneticButton>` and apply a spring-tracked translate.
- **Smooth scroll** is Lenis-driven; disable by removing `<SmoothScroll>` in `app/layout.tsx`.
- **Reduced motion**: `Reveal.tsx` honors `prefers-reduced-motion` and short-circuits to static rendering.

## Performance tips

- The film-grain overlay is an inline SVG data URI (zero requests).
- Particles in the hero are CSS-only (no canvas).
- All Framer Motion components are `"use client"` — the layout shell, page, services, and big-stats sections stay server-rendered.

## Deploy

Drop the project on Vercel — zero config required. For static export, add `output: "export"` to `next.config.mjs` and run `npm run build`.

---

© 2026 PaglaitVFX. All rights reserved.
