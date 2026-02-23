"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

const bullets = [
  "Deployment monitoring & incident visibility",
  "Environment management and change tracking",
  "Cost transparency (showback/chargeback)",
  "Reliability + governance practices baked in",
];

export default function ManagedInfrastructure() {
  return (
    <section id="managed-infrastructure" className="border-y border-neutral-200 bg-white">
      <Container className="py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm sm:p-10"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950">
            Managed infrastructure that makes AI stick
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-700">
            Most AI projects fail after the build—when deployments, costs, and vendor sprawl get messy. We manage the
            deployment layer across your stack with a single view of status, costs, and changes.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800"
              >
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact">
              <Button>Book a strategy call</Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary">View services</Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
