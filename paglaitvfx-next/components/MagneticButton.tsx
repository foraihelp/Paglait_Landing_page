"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ReactNode, useRef } from "react";
import clsx from "clsx";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
  as?: "button" | "a";
}

export default function MagneticButton({
  children, className, onClick, href, strength = 0.22, as = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top  + r.height / 2)) * strength);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  const props = {
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
    className: clsx("inline-flex", className),
    style: { x: sx, y: sy },
    ref: ref as any,
  };

  if (as === "a") return <motion.a href={href} {...props}>{children}</motion.a>;
  return <motion.button {...props}>{children}</motion.button>;
}
