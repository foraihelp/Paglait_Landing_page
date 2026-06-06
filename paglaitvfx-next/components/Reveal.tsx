"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import clsx from "clsx";

const variants: Record<string, Variants> = {
  up: {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0,  transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] } },
  },
  left: {
    hidden:  { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0,  transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] } },
  },
  fade: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.1 } },
  },
};

type Direction = "up" | "left" | "fade";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "h2" | "h3" | "p";
  once?: boolean;
}

export default function Reveal({
  children, direction = "up", delay = 0, className, as = "div", once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const v = variants[direction];
  const Component = motion[as] as any;

  if (reduce) {
    return <Component className={clsx(className)}>{children}</Component>;
  }
  return (
    <Component
      className={clsx(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ delay }}
      variants={v}
    >
      {children}
    </Component>
  );
}
