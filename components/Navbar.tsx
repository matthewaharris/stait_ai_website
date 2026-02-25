"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/industries/accounting", label: "Industries" },
  { href: "/ai-readiness", label: "AI Readiness" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4">
        {/* Mobile: grid so logo centers between hamburger and CTA */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center md:flex md:justify-between">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-lg p-1.5 text-neutral-700 transition hover:bg-neutral-100 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-3 font-semibold tracking-tight md:justify-start"
            aria-label="stait.ai home"
          >
            <Image
              src="/stait-logo.svg"
              alt="stait logo"
              width={165}
              height={124}
              className="h-12 w-auto md:h-14"
              priority
            />
            <span className="hidden text-base font-semibold text-neutral-900 md:inline">stait.ai</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-neutral-600 transition hover:text-neutral-900">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50"
          >
            Book a call
          </Link>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="border-t border-neutral-200/80 bg-white px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
