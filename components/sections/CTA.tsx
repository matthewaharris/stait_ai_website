"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-28 pt-16">
      <div className="glass relative overflow-hidden rounded-3xl p-10">
        <div aria-hidden className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[var(--accent)]/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[var(--accent2)]/25 blur-3xl" />

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm font-semibold text-[var(--accent2)]">Next step</div>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Let’s pick your first high-ROI AI pilot</h2>
            <p className="mt-4 max-w-xl text-[var(--muted)]">
              In one call we’ll identify a workflow worth automating, define a measurable KPI, and recommend the
              smallest safe pilot to ship in weeks.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@stait.ai?subject=Discovery%20Call%20Request&body=Hi%20stait.ai%2C%0A%0AWe%27d%20like%20to%20talk%20about%20AI%20implementation.%0A%0ACompany%3A%0AIndustry%3A%0ATop%20workflow%20to%20improve%3A%0A%0AThanks!"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
              >
                Email us <Mail className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                See packages <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <MapPin className="h-4 w-4" /> Boise, Idaho
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Typical pilot: 2–6 weeks
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Retainers available
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="rounded-3xl border border-white/10 bg-[var(--card)]/60 p-7"
          >
            <div className="text-sm font-semibold">Quick scorecard</div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Answer these 4 questions before we talk—we’ll use them to size impact.
            </p>

            <div className="mt-6 grid gap-3 text-sm">
              {[
                "What workflow is slow or error-prone today?",
                "How do you measure success (time, cost, revenue, quality)?",
                "Where does the relevant data live?",
                "Any privacy/compliance constraints?",
              ].map((q) => (
                <div key={q} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[var(--muted)]">
                  {q}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-[var(--muted)]">
              Tip: If your work is document-heavy (policies, SOPs, contracts, tickets), the fastest win is usually a
              secure knowledge assistant (RAG).
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
