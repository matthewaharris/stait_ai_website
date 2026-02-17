import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/75 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight"
          aria-label="stait.ai home"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow-sm">
            <span className="text-sm font-bold">S</span>
          </span>
          <span className="text-base">stait.ai</span>
          <span className="ml-2 hidden rounded-full border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-600 sm:inline">
            AI implementation
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-neutral-700 md:flex">
          <a className="hover:text-neutral-950" href="#services">
            Services
          </a>
          <a className="hover:text-neutral-950" href="#process">
            Process
          </a>
          <a className="hover:text-neutral-950" href="#contact">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a className="hidden md:block" href="#services">
            <Button variant="ghost">View services</Button>
          </a>
          <a href="#contact">
            <Button>Book a call</Button>
          </a>
        </div>
      </Container>
    </header>
  );
}
