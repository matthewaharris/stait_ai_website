import Link from "next/link";
import { Logo } from "@/components/Navbar";
import { packages } from "@/lib/packages";
import { site } from "@/lib/site";

const company = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/insights", label: "Insights" },
  { href: "/ai-readiness", label: "AI readiness quiz" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="h-1 w-full bg-signature" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-haze">{site.tagline}</p>
            <div className="mt-6 flex gap-4 font-mono text-xs uppercase tracking-[0.2em]">
              <span className="text-haze">Learn</span>
              <span className="text-haze">Plan</span>
              <span className="text-haze">Build</span>
              <span className="text-haze">Operate</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">Services</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/seminar" className="text-mist transition hover:text-white">
                  Owner seminar
                </Link>
              </li>
              {packages.map((p) => (
                <li key={p.slug}>
                  <Link href={`/services/${p.slug}`} className="text-mist transition hover:text-white">
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products/quotemagic" className="text-mist transition hover:text-white">
                  QuoteMagic
                </Link>
              </li>
              <li>
                <Link href="/products/oacp" className="text-mist transition hover:text-white">
                  OACP
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">Company</div>
            <ul className="mt-4 space-y-3 text-sm">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-mist transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">Get in touch</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="text-mist transition hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="text-mist">{site.location}</li>
              <li className="text-mist">Serving clients nationwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-navy-line pt-8 text-xs text-subtle sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </span>
          <span>stait.ai</span>
        </div>
      </div>
    </footer>
  );
}
