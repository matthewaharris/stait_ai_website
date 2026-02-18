"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const issues = [
  "Increasing operational cost pressure",
  "Manual document-heavy workflows",
  "Knowledge trapped in individuals",
  "Delayed customer response cycles",
  "No internal AI leadership",
];

const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

export default function Problems() {
  return (
    <section id="problems" className="border-y border-neutral-200 bg-neutral-50">
      <Container className="py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
            AI is no longer optional — but implementation risk is real.
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {issues.map((issue) => (
              <li key={issue} className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm">
                {issue}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-neutral-700">
            Most AI initiatives fail because they start with tools — not strategy. We start with ROI, governance, and
            operational leverage.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6"
          >
            <div className="text-sm font-semibold text-emerald-900">Immediate efficiency gains</div>
            <p className="mt-3 text-sm leading-relaxed text-emerald-900/90">
              Automation, response time improvement, administrative reduction, and margin lift from better operational
              throughput.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6"
          >
            <div className="text-sm font-semibold text-indigo-900">Strategic capability</div>
            <p className="mt-3 text-sm leading-relaxed text-indigo-900/90">
              Governance, decision support, and a scalable AI foundation that compounds advantage over time.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
