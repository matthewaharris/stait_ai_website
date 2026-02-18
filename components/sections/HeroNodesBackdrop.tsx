"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

const NODE_COUNT = 28;
const LINK_DISTANCE = 220;

export default function HeroNodesBackdrop({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const nodes: NodePoint[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (nodes.length === 0) {
        for (let i = 0; i < NODE_COUNT; i += 1) {
          nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            r: 2 + Math.random() * 1.8,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const now = performance.now();
      const pulse = 0.65 + 0.35 * Math.sin(now * 0.0015);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x <= 0 || n.x >= width) n.vx *= -1;
        if (n.y <= 0 || n.y >= height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.4 * pulse;
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const nodePulse = 0.45 + 0.4 * Math.sin(now * 0.0019 + n.x * 0.02 + n.y * 0.02);
        ctx.fillStyle = `rgba(30, 64, 175, ${nodePulse})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={cn(
        "absolute inset-0 h-full w-full [mask-image:radial-gradient(circle_at_50%_45%,black,transparent_92%)]",
        className,
      )}
    />
  );
}
