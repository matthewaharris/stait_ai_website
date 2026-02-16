"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Diagnose",
    meta: "Discovery + workflow mapping",
    points: [
      "Identify top friction and business KPIs",
      "Review data, systems, and constraints",
      "Score use cases by ROI + feasibility",
    ],
  },
  {
    title: "Pilot",
    meta: "2–6 weeks to measurable value",
    points: [
      "Build a focused MVP with guardrails",
      "Measure impact against a KPI",
      "Define production-ready requirements",
    ],
  },
  {
    title: "Production",
    meta: "Harden + integrate",
    points: [
      "Security, permissions, and auditability",
      "Integrations (docs, CRM, ticketing, email)",
      "Monitoring + quality checks",
    ],
  },
  {
    title: "AI Ops",
    meta: "Continuous improvement",
    points: [
      "Ongoing tuning, prompts, and evaluation",
      "Quarterly roadmap + new use cases",
      "Adoption support + change management",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-24">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm font-semibold text-[var(--accent2)]">How we work</div>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">A simple path from interest to impact</h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            We optimize for short cycles, clear ownership, and safe scaling.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            className="glass rounded-3xl p-7"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-xl font-semibold">{i + 1}. {s.title}</div>
                <div className="mt-1 text-sm text-[var(--muted)]">{s.meta}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-[var(--accent2)]">
                {i === 0 ? "START" : i === 3 ? "ONGOING" : "SHIP"}
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-white/50" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
