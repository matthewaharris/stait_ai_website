"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
          <div className="text-sm font-semibold text-indigo-700">
            What this looks like in practice
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
            Scenario: Regional Accounting Firm (35 employees)
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                The problem
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                Tax season creates a surge of manual document intake and
                classification. Senior staff spend hours on administrative
                routing instead of client-facing work.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                The stait.ai approach
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                AI-powered intake automation paired with an internal knowledge
                assistant — deployed with governance controls, audit trails, and
                role-based access from day one.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Projected outcomes
            </div>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                ~60% reduction in manual document review
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                Faster client turnaround during peak periods
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                Reduced staff burnout and overtime
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                Expected ROI within ~4 months
              </li>
            </ul>
          </div>

          <p className="mt-6 text-neutral-700">
            AI doesn&rsquo;t replace your team. It amplifies them.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/services" className="inline-flex">
              <Button variant="secondary">See services</Button>
            </Link>
            <Link href="/scenarios" className="inline-flex">
              <Button variant="ghost">See Other Scenarios</Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
