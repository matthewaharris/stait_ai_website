"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#proof", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 120], [0.0, 1.0]);
  const blur = useTransform(scrollY, [0, 120], ["blur(0px)", "blur(12px)"]);

  return (
    <div className="sticky top-0 z-50">
      <motion.div
        style={{ opacity, backdropFilter: blur }}
        className="mx-auto max-w-6xl px-4 pt-4"
      >
        <div className="glass flex items-center justify-between rounded-2xl px-5 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--accent)] font-semibold">
              s
            </span>
            <span className="text-sm font-semibold tracking-wide">stait.ai</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--muted)] hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition"
          >
            Book a call
          </a>
        </div>
      </motion.div>
    </div>
  );
}
