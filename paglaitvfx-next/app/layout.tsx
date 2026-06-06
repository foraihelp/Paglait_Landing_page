import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  variable: "--font-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400","500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PaglaitVFX — Cinematic VFX · AI Workflow · Pipeline Technology",
  description: "Next-generation studio building cinematic experiences and intelligent pipelines for the future of content creation.",
  openGraph: {
    title: "PaglaitVFX",
    description: "Cinematic VFX · AI Workflow · Pipeline Technology",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-bg text-ink font-body antialiased overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
