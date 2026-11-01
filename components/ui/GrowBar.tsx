"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

/** A horizontal bar that grows from the left when scrolled into view. */
export default function GrowBar({
  className,
  style,
  delay = 0,
  duration = 1.1,
  axis = "x",
}: {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  axis?: "x" | "y";
}) {
  const from = axis === "x" ? { scaleX: 0 } : { scaleY: 0 };
  const to = axis === "x" ? { scaleX: 1 } : { scaleY: 1 };
  return (
    <motion.div
      initial={from}
      whileInView={to}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.2, 0.75, 0.25, 1] }}
      style={{ transformOrigin: axis === "x" ? "left" : "top", ...style }}
      className={cn(className)}
    />
  );
}
