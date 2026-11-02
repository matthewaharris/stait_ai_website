"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { nav } from "@/lib/site";
import { track } from "@/lib/track";
import { cn } from "@/lib/cn";

export function Logo({ dark = true, className }: { dark?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image src="/brand/stait-mark.png" alt="" width={355} height={395} className="h-9 w-auto" priority />
      <Image
        src={dark ? "/brand/stait-word-white.png" : "/brand/stait-word-dark.png"}
        alt="Stait AI"
        width={360}
        height={130}
        className="h-6 w-auto"
        priority
      />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled ? "border-navy-line bg-navy/90 backdrop-blur-md" : "border-transparent bg-navy",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" aria-label="Stait AI home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition",
                  active ? "text-white" : "text-haze hover:text-white",
                )}
              >
                {link.label}
                {active && <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-signature" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="/contact"
            className="hidden sm:inline-flex"
            onClick={() => track("cta_click", { location: "navbar", cta: "book_call" })}
          >
            Book a free call
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-navy-line bg-navy px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-navy-line py-3 text-base text-white/90 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" size="lg" className="mt-5">
              Book a free call
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
