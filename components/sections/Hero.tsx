"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative">
      <div aria-hidden className="aurora" />
      <div aria-hidden className="grid-fade absolute inset-0 opacity-35" />

      <div className="mx-auto max-w-6xl px-4 pb-24 pt-20 md:pt-24">
        <div className="grid items-start gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.05}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white"
            >
              <Sparkles className="h-4 w-4" />
              Boise-based AI implementation partner
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.15}
              className="mt-6 text-balance text-4xl font-semibold leading-tight md:text-6xl"
            >
              Practical AI.
              <span className="block bg-gradient-to-r from-[var(--accent2)] via-white to-[var(--accent)] bg-clip-text text-transparent">
                Measurable results.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.25}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[var(--muted)] md:text-lg"
            >
              We help growing companies implement AI safely and profitably—without hiring a full ML team. Start with a
              focused assessment, ship a pilot in weeks, then scale with confidence.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.35}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(109,94,243,0.25)] hover:brightness-110 transition"
              >
                Book a discovery call <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                See packages
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.45}
              className="mt-10 flex flex-wrap gap-2 text-xs text-[var(--muted)]"
            >
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">AI readiness</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Company knowledge assistant (RAG)</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Workflow automation</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">AI Ops + governance</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative"
          >
            <div className="glass relative overflow-hidden rounded-3xl p-6">
              <div aria-hidden className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[var(--accent)]/40 blur-3xl" />
              <div aria-hidden className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-[var(--accent2)]/35 blur-3xl" />

              <div className="relative">
                <div className="text-sm font-semibold">Start here</div>
                <div className="mt-1 text-2xl font-semibold">AI Jumpstart</div>
                <div className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  A fast assessment + pilot plan that identifies the highest ROI work, the safest path to production,
                  and the metrics to prove value.
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    { k: "Timeline", v: "2–3 weeks" },
                    { k: "Deliverables", v: "Roadmap + ROI + pilot spec" },
                    { k: "Outcome", v: "Clear plan to ship in weeks" },
                  ].map((r) => (
                    <div
                      key={r.k}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <div className="text-xs text-[var(--muted)]">{r.k}</div>
                      <div className="text-sm font-semibold">{r.v}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[var(--bg)] hover:brightness-95 transition"
                >
                  Get the scorecard <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <motion.div
              aria-hidden
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -bottom-8 -left-8 hidden w-56 rounded-3xl p-5 md:block"
            >
              <div className="text-xs text-[var(--muted)]">Example pilot</div>
              <div className="mt-2 text-sm font-semibold">Company knowledge assistant</div>
              <div className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                Secure “ask your docs” with permissions, citations, and analytics.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
