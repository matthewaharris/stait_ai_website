import Image from "next/image";
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
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/stait-logo.svg" alt="stait logo" width={86} height={64} className="h-8 w-auto" />
            <p className="text-sm text-neutral-600">© {new Date().getFullYear()} stait.ai — Practical AI implementation.</p>
          </div>
          <p className="text-sm text-neutral-600">Boise, Idaho • Serving clients nationwide</p>
        </div>
      </footer>
    </main>
  );
}
