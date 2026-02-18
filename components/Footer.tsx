import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-neutral-900">stait.ai</div>
            <div className="mt-1 text-xs text-neutral-600">AI strategy • Implementation • AI Ops • Governance</div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600">
            <Link href="/services" className="transition hover:text-neutral-900">
              Services
            </Link>
            <span>•</span>
            <Link href="/industries/accounting" className="transition hover:text-neutral-900">
              Industries
            </Link>
            <span>•</span>
            <Link href="/ai-readiness" className="transition hover:text-neutral-900">
              AI Readiness
            </Link>
            <span>•</span>
            <a href="mailto:hello@stait.ai" className="transition hover:text-neutral-900">
              hello@stait.ai
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-neutral-600">© {new Date().getFullYear()} stait.ai. All rights reserved.</div>
      </div>
    </footer>
  );
}
