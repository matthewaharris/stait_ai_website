"use client";

import Image from "next/image";
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

const credentials = [
  "Senior Software Engineering Manager at Intuit — led teams building and shipping products that power small businesses across the QuickBooks ecosystem",
  "Led AI-enabled development transformation across 300+ engineers with CTO-level visibility",
  "Former engineering manager at Idaho Power and enterprise architect at Devon Energy",
  "Lead Software Engineer at Northrop Grumman — DoD aerospace systems",
  "BS Computer Science, MBA, Stanford Executive Program in Corporate Innovation",
];

const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

export default function Proof() {
  return (
    <section id="proof" className="border-y border-neutral-200 bg-white">
      <Container className="py-16 sm:py-20">
        {/* Founder section */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <div className="text-sm font-semibold text-indigo-700">
            Who&rsquo;s behind stait.ai
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
            Enterprise rigor, without the enterprise drag
          </h2>

          <div className="mt-8 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
              {/* Headshot */}
              <div className="shrink-0">
                <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-neutral-200 bg-white sm:h-32 sm:w-32">
                  <Image
                    src="/matt-headshot.jpeg"
                    alt="Matthew Harris, Founder of stait.ai"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="min-w-0">
                <div className="text-lg font-semibold text-neutral-900">
                  Matt Harris
                </div>
                <div className="mt-0.5 text-sm text-neutral-500">
                  Founder &amp; Principal
                </div>

                <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                  AI is moving fast &mdash; new tools, new platforms, new
                  possibilities every week. But for most small and growing
                  businesses, it&rsquo;s hard to know where to start or who to
                  trust. I built stait.ai to bridge that gap: bring two decades
                  of enterprise engineering and leadership experience to SMBs
                  and deliver turnkey AI solutions that actually work in
                  production &mdash; not just in a demo.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  I&rsquo;ve spent 20+ years building and scaling software teams
                  at companies like Intuit, Idaho Power, Devon Energy, and
                  Northrop Grumman. Most recently I led AI-enabled development
                  transformation across Intuit&rsquo;s Workforce Solutions
                  organization of 300+ engineers. I&rsquo;ve seen what works at
                  enterprise scale &mdash; and I know how to distill that into
                  practical, right-sized implementation for growing businesses.
                </p>

                <ul className="mt-5 space-y-2">
                  {credentials.map((cred) => (
                    <li
                      key={cred}
                      className="flex items-start gap-2 text-sm text-neutral-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Proof points grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                  <div className="text-sm font-semibold text-neutral-900">
                    {item.title}
                  </div>
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
