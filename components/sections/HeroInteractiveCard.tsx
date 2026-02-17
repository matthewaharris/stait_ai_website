"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

export default function HeroInteractiveCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [pos, setPos] = useState({ x: 50, y: 45 });

  const glow = useMemo(
    () => ({
      background: `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, rgba(56, 189, 248, 0.28), rgba(99, 102, 241, 0.14) 35%, transparent 68%)`,
    }),
    [pos],
  );

  return (
    <div
      className={cn("relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm", className)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPos({ x, y });
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 transition-opacity duration-300 motion-reduce:hidden" style={glow} />
      <div className="relative">{children}</div>
    </div>
  );
}
