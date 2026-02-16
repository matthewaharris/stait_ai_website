"use client";

import { motion } from "framer-motion";
import { Shield, Wand2, Wrench } from "lucide-react";

const cards = [
  {
    badge: "START HERE",
    badgeColor: "bg-[var(--accent2)] text-[var(--bg)]",
    title: "AI Jumpstart",
    price: "$15k–$25k",
    icon: Wand2,
    points: [
      "AI readiness assessment",
      "Use-case scoring + ROI model",
      "Pilot spec + architecture outline",
      "Exec readout + 12-month roadmap",
    ],
  },
  {
    badge: "BUILD",
    badgeColor: "bg-[var(--accent)] text-white",
    title: "Company GPT",
    price: "$25k–$60k",
    icon: Shield,
    points: [
      "Secure knowledge assistant (RAG)",
      "Permissions + citations",
      "Integrations (docs, CRM, ticketing)",
      "Analytics + adoption enablement",
    ],
  },
  {
    badge: "OPERATE",
    badgeColor: "bg-amber-200 text-[var(--bg)]",
    title: "AI Ops Retainer",
    price: "$2k–$7k / mo",
    icon: Wrench,
    points: [
      "Monitoring + tuning",
      "Quality + safety reviews",
      "Small enhancements",
      "Quarterly optimization roadmap",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-4 py-24">
      <div className="glass rounded-3xl border border-white/10 bg-white/5 p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-semibold text-[var(--accent2)]">Packages</div>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Easy to buy. Easy to scale.</h2>
            <p className="mt-3 max-w-2xl text-[var(--muted)]">
              Pick a clean entry point, ship a pilot quickly, and expand only after value is proven.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex w-fit items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/15 transition"
          >
            Request pricing + scope
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)]/60 p-6"
              >
                <div aria-hidden className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition" />

                <div className="relative">
                  <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${c.badgeColor}`}>
                    {c.badge}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-xl font-semibold">{c.title}</div>
                      <div className="mt-1 text-sm text-[var(--muted)]">{c.price}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-white/35" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-[var(--muted)]">
                    <span className="font-semibold text-white">Includes governance:</span> permissions, auditability, and safe defaults.
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
