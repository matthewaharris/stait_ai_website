"use client";

import { motion } from "framer-motion";
import { Lock, Radar, ShieldCheck, Users } from "lucide-react";
import Container from "@/components/ui/Container";

const items = [
  {
    title: "Safe by default",
    icon: ShieldCheck,
    body: "Permissions, citations, audit trails, and guardrails are built into delivery.",
  },
  {
    title: "Operational observability",
    icon: Radar,
    body: "Track quality, usage, and ROI so systems improve instead of drifting.",
  },
  {
    title: "Privacy and compliance",
    icon: Lock,
    body: "Design with least-privilege access and governance controls from day one.",
  },
  {
    title: "Adoption and enablement",
    icon: Users,
    body: "Implementation includes workflows and team readiness, not just tooling.",
  },
];

const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

export default function Proof() {
  return (
    <section id="proof" className="border-y border-neutral-200 bg-white">
      <Container className="py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl"
        >
          <div className="text-sm font-semibold text-indigo-700">How we deliver</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
            Enterprise rigor, without the enterprise drag
          </h2>
          <p className="mt-3 text-neutral-700">
            Every engagement is built with enterprise-grade habits — security, observability, and adoption baked in
            from day one, right-sized for a growing business.
          </p>
        </motion.div>

        {/* Proof points grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-neutral-200 bg-white p-2">
                    <Icon className="h-4 w-4 text-neutral-700" />
                  </div>
                  <div className="text-sm font-semibold text-neutral-900">{item.title}</div>
                </div>
                <p className="mt-3 text-sm text-neutral-700">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
