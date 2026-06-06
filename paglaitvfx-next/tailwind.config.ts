import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:        "#050505",
        "bg-1":    "#0a0a0a",
        "bg-2":    "#0f0f0f",
        panel:     "#111111",
        "panel-2": "#161616",
        line:      "#1d1d1d",
        "line-2":  "#2a2a2a",
        ink:       "#ffffff",
        "ink-2":   "#c8c8c8",
        "ink-3":   "#a0a0a0",
        "ink-4":   "#5a5a5a",
        accent:    "#ff7a00",
        gold:      "#ffc857",
        cyan:      "#00d1ff",
      },
      fontFamily: {
        display: ['var(--font-display)', 'Space Grotesk', 'system-ui'],
        body:    ['var(--font-body)',    'Inter', 'system-ui'],
        mono:    ['var(--font-mono)',    'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter:  "-0.03em",
      },
      boxShadow: {
        glow:       "0 0 24px rgba(255,122,0,.5), 0 0 60px rgba(255,122,0,.25)",
        "glow-cyan":"0 0 24px rgba(0,209,255,.5), 0 0 50px rgba(0,209,255,.25)",
      },
      keyframes: {
        flow: {
          "0%":   { transform: "translateX(0%)",   opacity: "0" },
          "10%":  { opacity: "1" },
          "90%":  { opacity: "1" },
          "100%": { transform: "translateX(700%)", opacity: "0" },
        },
        portalPulse: {
          "0%,100%": { transform: "scale(1)",     filter: "brightness(1)" },
          "50%":     { transform: "scale(1.015)", filter: "brightness(1.15)" },
        },
        spark:    { to: { transform: "rotate(360deg)" } },
        bounce:   { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(4px)" } },
        pulsering:{ "0%": { transform: "scale(0.9)", opacity: "0.8" }, "100%": { transform: "scale(1.4)", opacity: "0" } },
        float: {
          "0%":   { transform: "translate(0, 100vh)", opacity: "0" },
          "10%":  { opacity: "0.9" },
          "90%":  { opacity: "0.9" },
          "100%": { transform: "translate(40px, -10vh)", opacity: "0" },
        },
      },
      animation: {
        flow:        "flow 4.5s linear infinite",
        portalPulse: "portalPulse 4s ease-in-out infinite",
        spark:       "spark 3.5s linear infinite",
        bouncey:     "bounce 2.6s ease-in-out infinite",
        pulsering:   "pulsering 3s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
