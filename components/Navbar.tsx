import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/services", label: "Services" },
  { href: "/industries/accounting", label: "Industries" },
  { href: "/ai-readiness", label: "AI Readiness" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="group inline-flex items-center gap-3 font-semibold tracking-tight" aria-label="stait.ai home">
          <Image
            src="/stait-logo.png"
            alt="stait logo"
            width={165}
            height={124}
            className="h-12 w-auto md:h-14"
            priority
          />
          <span className="hidden text-base font-semibold text-neutral-900 md:inline">stait.ai</span>
          <span className="hidden rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-600 lg:inline">
            AI implementation
          </span>
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
    </header>
  );
}
