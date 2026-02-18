"use client";

import { motion } from "framer-motion";
import { Shield, Wand2, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";

const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

const cards = [
  {
    badge: "START HERE",
    title: "AI Jumpstart",
    price: "$12k–$25k",
    timeline: "6–8 weeks",
    icon: Wand2,
    points: [
      "AI readiness assessment + ROI model",
      "One production-grade pilot",
      "Governance baseline + risk controls",
      "90-day execution roadmap",
    ],
  },
  {
    badge: "BUILD",
    title: "Company GPT",
    price: "$15k–$45k",
    icon: Shield,
    points: [
      "Secure knowledge assistant (RAG)",
      "Faster internal operations and response time",
      "Role-based permissions + auditability",
      "Scalable capability for future workflows",
    ],
  },
  {
    badge: "OPERATE",
    title: "AI Ops Retainer",
    price: "$2k–$6k/mo",
    icon: Wrench,
    points: [
      "Sustained quality, reliability, and performance",
      "Continuous optimization and cost control",
      "Governance updates as operations evolve",
      "Quarterly improvement roadmap",
    ],
  },
];

export default function Packages() {
  return (
    <section id="services" className="border-y border-neutral-200 bg-neutral-50">
      <Container className="py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl"
        >
          <div className="text-sm font-semibold text-indigo-700">Services</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">Start small, prove ROI, then scale.</h2>
          <p className="mt-3 text-neutral-700">
            Each package is built to deliver immediate operational efficiency while creating strategic capability you
            can compound over time.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
                  {card.badge}
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xl font-semibold text-neutral-950">{card.title}</div>
                    <div className="mt-1 text-sm text-neutral-600">{card.price}</div>
                    {"timeline" in card ? <div className="text-xs text-neutral-500">{card.timeline}</div> : null}
                  </div>
                  <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-2">
                    <Icon className="h-4 w-4 text-neutral-700" />
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
