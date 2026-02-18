"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

export default function CaseStudy() {
  return (
    <section id="case-study" className="border-y border-neutral-200 bg-white">
      <Container className="py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm sm:p-10"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
            Modeled case study: Regional Accounting Firm (35 employees)
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Challenge</div>
              <p className="mt-2 text-sm text-neutral-700">Manual document intake and classification during tax season.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Solution</div>
              <p className="mt-2 text-sm text-neutral-700">AI-powered intake + internal knowledge assistant.</p>
            </div>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-neutral-800">
            <li>• 60% reduction in manual document review</li>
            <li>• Faster client turnaround</li>
            <li>• Reduced staff burnout</li>
            <li>• ROI achieved within ~4 months</li>
          </ul>

          <p className="mt-6 text-neutral-700">AI doesn’t replace your team. It amplifies them.</p>

          <a href="/services" className="mt-7 inline-flex">
            <Button variant="secondary">See services</Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
