"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type From = "up" | "left" | "scale" | "fade" | "rise";

const hidden: Record<From, string> = {
  up: "opacity-0 translate-y-6",
  left: "opacity-0 -translate-x-6",
  scale: "opacity-0 scale-90",
  fade: "opacity-0",
  rise: "opacity-0 translate-y-16",
};

/** Scroll-triggered entrance. Content is visible without JS / with reduced motion. */
export default function Reveal({
  children,
  className,
  delayMs = 0,
  from = "up",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  from?: From;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // The start state depends on measuring the element, so it can't be set during render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState("hidden");
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      // Already on screen at load: animate in right away.
      requestAnimationFrame(() => requestAnimationFrame(() => setState("shown")));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("shown");
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as any}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "transition-all duration-[850ms] ease-[cubic-bezier(.2,.75,.25,1)] will-change-transform",
        state === "hidden" ? hidden[from] : "opacity-100 translate-x-0 translate-y-0 scale-100",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
