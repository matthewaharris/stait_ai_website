"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { track } from "@/lib/track";

type InlineCTAProps = {
  title?: string;
  subtitle?: string;
  location: string;
};

const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

export default function InlineCTA({
  title = "Ready to move from AI ideas to measurable outcomes?",
  subtitle = "Start with a strategy call or take the AI Readiness Assessment to see your highest-leverage next steps.",
  location,
}: InlineCTAProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease }}
      className="mx-auto max-w-6xl px-4 py-6"
    >
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-7">
        <h3 className="text-xl font-semibold tracking-tight text-neutral-950">{title}</h3>
        <p className="mt-2 text-sm text-neutral-700">{subtitle}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#contact"
            onClick={() => track("cta_click", { location, cta: "book_call" })}
          >
            <Button>Book a strategy call</Button>
          </Link>
          <Link
            href="/ai-readiness"
            onClick={() => track("cta_click", { location, cta: "ai_readiness" })}
          >
            <Button variant="secondary">Take AI Readiness</Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
