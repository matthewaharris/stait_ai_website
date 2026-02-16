export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold">stait.ai</div>
            <div className="mt-1 text-xs text-[var(--muted)]">
              AI strategy • Implementation • AI Ops • Governance
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
            <a href="#services" className="hover:text-white transition">Services</a>
            <span className="text-white/20">•</span>
            <a href="#process" className="hover:text-white transition">Process</a>
            <span className="text-white/20">•</span>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <span className="text-white/20">•</span>
            <a href="mailto:hello@stait.ai" className="hover:text-white transition">hello@stait.ai</a>
          </div>
        </div>

        <div className="mt-8 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} stait.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
