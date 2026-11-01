"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Orbiter = { radius: number; size: number; period: number; start: number };

type GraphNode = {
  id: string;
  label?: string;
  /** Puts the label above the node, for nodes with an edge crossing underneath. */
  labelAbove?: boolean;
  x: number;
  y: number;
  color: string;
  /** Edges stop this far from the node's center, so they meet the outer ring. */
  trim: number;
  rings: number[];
  orbiters: Orbiter[];
  drift: { x: number; y: number; periodX: number; periodY: number };
};

const LINE = "#2c2f4d";
const EDGE = "#3d4168";

const nodes: GraphNode[] = [
  {
    id: "hub", x: 300, y: 300, color: "#9b7bff", trim: 156, rings: [128, 156],
    orbiters: [
      { radius: 128, size: 5, period: 26, start: 40 },
      { radius: 156, size: 6, period: 38, start: 200 },
      { radius: 156, size: 4, period: 38, start: 310 },
    ],
    drift: { x: 0, y: 0, periodX: 1, periodY: 1 },
  },
  {
    id: "learn", label: "Learn", labelAbove: true, x: 105, y: 125, color: "#1ea5e3", trim: 44, rings: [28, 44],
    orbiters: [
      { radius: 28, size: 3, period: 9, start: 20 },
      { radius: 44, size: 4, period: 15, start: 190 },
    ],
    drift: { x: 12, y: 9, periodX: 17, periodY: 13 },
  },
  {
    id: "plan", label: "Plan", labelAbove: true, x: 492, y: 112, color: "#9b7bff", trim: 48, rings: [30, 48],
    orbiters: [
      { radius: 30, size: 3, period: 11, start: 120 },
      { radius: 48, size: 4, period: 18, start: 300 },
    ],
    drift: { x: 10, y: 12, periodX: 14, periodY: 19 },
  },
  {
    id: "build", label: "Build", x: 515, y: 425, color: "#1ea5e3", trim: 44, rings: [28, 44],
    orbiters: [
      { radius: 28, size: 3, period: 10, start: 250 },
      { radius: 44, size: 4, period: 16, start: 60 },
    ],
    drift: { x: 11, y: 10, periodX: 19, periodY: 15 },
  },
  {
    id: "operate", label: "Operate", x: 125, y: 480, color: "#9b7bff", trim: 46, rings: [29, 46],
    orbiters: [
      { radius: 29, size: 3, period: 12, start: 330 },
      { radius: 46, size: 4, period: 17, start: 150 },
    ],
    drift: { x: 12, y: 8, periodX: 15, periodY: 18 },
  },
  { id: "r1", x: 300, y: 42, color: "#c9cbdb", trim: 7, rings: [], orbiters: [], drift: { x: 8, y: 6, periodX: 13, periodY: 11 } },
  { id: "r2", x: 566, y: 262, color: "#c9cbdb", trim: 7, rings: [], orbiters: [], drift: { x: 6, y: 9, periodX: 12, periodY: 16 } },
  { id: "r3", x: 322, y: 560, color: "#c9cbdb", trim: 7, rings: [], orbiters: [], drift: { x: 9, y: 6, periodX: 16, periodY: 12 } },
  { id: "r4", x: 36, y: 305, color: "#c9cbdb", trim: 7, rings: [], orbiters: [], drift: { x: 6, y: 9, periodX: 11, periodY: 14 } },
];

const byId = new Map(nodes.map((n, i) => [n.id, i]));

// Order matters: the ring runs Learn → Plan → Build → Operate and back again.
const spokes = ["learn", "plan", "build", "operate"].map((id) => ["hub", id]);
const ring = [
  ["learn", "r1"], ["r1", "plan"],
  ["plan", "r2"], ["r2", "build"],
  ["build", "r3"], ["r3", "operate"],
  ["operate", "r4"], ["r4", "learn"],
];
const edges = [...spokes, ...ring].map(([from, to]) => ({ from: byId.get(from)!, to: byId.get(to)! }));

/** A pulse crosses its edge during the first `span` of each `period` seconds. */
type Pulse = { edge: number; period: number; offset: number; span: number };

const RING_LAP = 14;
const pulses: Pulse[] = [
  ...spokes.map((_, i) => ({ edge: i, period: 7, offset: i / spokes.length, span: 0.28 })),
  // Two signals, half a lap apart, hand off from edge to edge around the ring.
  ...[0, 0.5].flatMap((lap) =>
    ring.map((_, i) => ({
      edge: spokes.length + i,
      period: RING_LAP,
      offset: 1 + lap - i / ring.length,
      span: 1 / ring.length,
    })),
  ),
];

function edgeEnds(ax: number, ay: number, a: GraphNode, bx: number, by: number, b: GraphNode) {
  const length = Math.hypot(bx - ax, by - ay);
  const ux = (bx - ax) / length;
  const uy = (by - ay) / length;
  return { x1: ax + ux * a.trim, y1: ay + uy * a.trim, x2: bx - ux * b.trim, y2: by - uy * b.trim };
}

export default function HeroNetwork({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodeEls = [...svg.querySelectorAll<SVGGElement>("[data-node]")];
    const glowEls = [...svg.querySelectorAll<SVGCircleElement>("[data-glow]")];
    const orbiterEls = [...svg.querySelectorAll<SVGGElement>("[data-orbiter]")];
    const orbiterData = nodes.flatMap((n) => n.orbiters);
    const edgeEls = [...svg.querySelectorAll<SVGLineElement>("[data-edge]")];
    const pulseEls = [...svg.querySelectorAll<SVGCircleElement>("[data-pulse]")];

    const xs = nodes.map((n) => n.x);
    const ys = nodes.map((n) => n.y);
    const heat = nodes.map(() => 0);

    let raf = 0;
    let startedAt: number | null = null;

    const frame = (now: number) => {
      startedAt ??= now;
      const t = (now - startedAt) / 1000;

      nodes.forEach((n, i) => {
        xs[i] = n.x + n.drift.x * Math.sin((t / n.drift.periodX) * Math.PI * 2);
        ys[i] = n.y + n.drift.y * Math.sin((t / n.drift.periodY) * Math.PI * 2);
        nodeEls[i].setAttribute("transform", `translate(${xs[i]} ${ys[i]})`);
        heat[i] = 0;
      });

      orbiterEls.forEach((el, i) => {
        const o = orbiterData[i];
        el.setAttribute("transform", `rotate(${o.start + (t / o.period) * 360})`);
      });

      edges.forEach((e, i) => {
        const ends = edgeEnds(xs[e.from], ys[e.from], nodes[e.from], xs[e.to], ys[e.to], nodes[e.to]);
        const el = edgeEls[i];
        el.setAttribute("x1", String(ends.x1));
        el.setAttribute("y1", String(ends.y1));
        el.setAttribute("x2", String(ends.x2));
        el.setAttribute("y2", String(ends.y2));
      });

      pulses.forEach((p, i) => {
        const el = pulseEls[i];
        const progress = (((t / p.period + p.offset) % 1) + 1) % 1;
        if (progress >= p.span) {
          el.setAttribute("opacity", "0");
          return;
        }
        const f = progress / p.span;
        const e = edges[p.edge];
        const ends = edgeEnds(xs[e.from], ys[e.from], nodes[e.from], xs[e.to], ys[e.to], nodes[e.to]);
        el.setAttribute("cx", String(ends.x1 + (ends.x2 - ends.x1) * f));
        el.setAttribute("cy", String(ends.y1 + (ends.y2 - ends.y1) * f));
        el.setAttribute("opacity", String(Math.min(1, Math.sin(f * Math.PI) * 2.5)));
        // The destination node lights up as a pulse arrives.
        heat[e.to] = Math.max(heat[e.to], f > 0.7 ? (f - 0.7) / 0.3 : 0);
      });

      glowEls.forEach((el, i) => el.setAttribute("opacity", String(heat[i] * 0.5)));

      raf = requestAnimationFrame(frame);
    };

    // Don't spend frames once the hero has scrolled out of view.
    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting) raf = requestAnimationFrame(frame);
    });
    observer.observe(svg);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg ref={svgRef} viewBox="0 0 600 600" className={className} fill="none" aria-hidden>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.9 }}>
        {edges.map((e, i) => {
          const a = nodes[e.from];
          const b = nodes[e.to];
          const ends = edgeEnds(a.x, a.y, a, b.x, b.y, b);
          return (
            <line
              key={`${a.id}-${b.id}`}
              data-edge
              x1={ends.x1.toFixed(1)}
              y1={ends.y1.toFixed(1)}
              x2={ends.x2.toFixed(1)}
              y2={ends.y2.toFixed(1)}
              stroke={EDGE}
              strokeWidth="1.5"
            />
          );
        })}
      </motion.g>

      {nodes.map((n, i) => (
        <g key={n.id} data-node transform={`translate(${n.x} ${n.y})`}>
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
          >
            <circle data-glow r={n.trim + 8} fill={n.color} opacity="0" />
            {n.rings.map((r, ringIndex) => (
              <circle
                key={r}
                r={r}
                stroke={LINE}
                strokeWidth="1.5"
                strokeDasharray={ringIndex === 0 ? "3 7" : undefined}
                fill={ringIndex === n.rings.length - 1 ? "#111327" : undefined}
              />
            ))}
            {n.id !== "hub" && <circle r={n.rings.length ? 6 : 4} fill={n.color} />}
            {n.orbiters.map((o) => (
              <g key={`${o.radius}-${o.start}`} data-orbiter transform={`rotate(${o.start})`}>
                <circle cx={o.radius} r={o.size} fill={n.color} />
              </g>
            ))}
            {n.label && (
              <text
                y={n.labelAbove ? -(n.trim + 13) : n.trim + 22}
                textAnchor="middle"
                fill="#a3a6bd"
                fontSize="14"
                letterSpacing="2"
                className="font-mono uppercase"
              >
                {n.label}
              </text>
            )}
          </motion.g>
        </g>
      ))}

      {pulses.map((p, i) => (
        <circle key={i} data-pulse r="4" fill={nodes[edges[p.edge].from].color} opacity="0" />
      ))}
    </svg>
  );
}
