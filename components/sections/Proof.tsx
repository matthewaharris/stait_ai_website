"use client";

import { motion } from "framer-motion";
import { Lock, Radar, ShieldCheck, Users } from "lucide-react";

const items = [
  {
    title: "Safe by default",
    icon: ShieldCheck,
    body: "Permissions, citations, audit trails, and guardrails are built in—from day one.",
  },
  {
    title: "Observability",
    icon: Radar,
    body: "We measure quality and usage so the system improves instead of drifting.",
  },
  {
    title: "Privacy-first",
    icon: Lock,
    body: "We design for least-privilege access and deployment options that match your constraints.",
  },
  {
    title: "Adoption-focused",
    icon: Users,
    body: "Tools don’t deliver ROI—workflows + people do. We help teams actually use what we build.",
  },
];

export default function Proof() {
  return (
    <section id="proof" className="relative mx-auto max-w-6xl px-4 py-24">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="aurora opacity-40" />
      </div>

      <div className="glass rounded-3xl p-10">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="text-sm font-semibold text-[var(--accent2)]">Trust + clarity</div>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Enterprise rigor, without the enterprise drag
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              If you’ve been burned by “AI pilots” that never ship, you’re not alone. Our goal is to build systems you
              can run, measure, and improve—safely.
            </p>

            <div className="mt-7 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Founder profile</div>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                <li>• Engineering leader (20+ years)</li>
                <li>• BS Computer Science + MBA</li>
                <li>• Enterprise delivery experience (Intuit)</li>
              </ul>
              <div className="mt-4 text-xs text-[var(--muted)]">
                Focus: practical AI adoption, secure delivery, and measurable ROI.
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                  className="rounded-3xl border border-white/10 bg-[var(--card)]/60 p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-semibold">{it.title}</div>
                  </div>
                  <p className="mt-3 text-sm text-[var(--muted)]">{it.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
