import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Nav />
      <Hero />
      <LogoCloud />
      <Services />
      <Process />
      <CTA />
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} stait.ai — Practical AI implementation.
          </p>
          <p className="text-sm text-neutral-600">Boise, Idaho • Serving clients nationwide</p>
        </div>
      </footer>
    </main>
  );
}
