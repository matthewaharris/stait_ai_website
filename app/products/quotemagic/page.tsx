import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "QuoteMagic — Quoting Software for Trade Contractors",
  description:
    "QuoteMagic is mobile-first quoting and price-book software for trade contractors, built and operated by Stait AI.",
  alternates: { canonical: "https://www.stait.ai/products/quotemagic" },
};

const features = [
  { title: "Quote on site", text: "Build professional quotes from your phone in minutes, right at the job.", color: "bg-brand-blue" },
  { title: "Smart price book", text: "Reuse a price book for consistent, accurate pricing across every quote.", color: "bg-brand-violet" },
  { title: "Track every job", text: "Follow each quote from open pipeline to won to paid.", color: "bg-brand-violet" },
];

export default function QuoteMagicPage() {
  return (
    <>
      <PageHero
        eyebrow="A Stait AI product"
        title={
          <span className="flex items-center gap-5">
            <Image src="/quotemagic-icon.png" alt="" width={96} height={96} className="h-16 w-16 rounded-2xl bg-white p-1.5 sm:h-20 sm:w-20" />
            <span>
              <span className="text-[#38bdf8]">Quote</span>
              <span className="text-[#e879f9]">Magic</span>
            </span>
          </span>
        }
        intro="Mobile-first quoting and price-book software for trade contractors. Built, hosted, and operated by Stait AI."
        glow="blue"
      >
        <Button href="https://quotemagic.app" size="lg" variant="light">
          Visit QuoteMagic
        </Button>
      </PageHero>

      <section className="bg-paper py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delayMs={i * 120} className="rounded-3xl border border-line bg-white p-9">
                <div className={`h-1.5 w-12 rounded-full ${f.color}`} />
                <h2 className="mt-6 font-display text-2xl font-semibold">{f.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-muted">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <Eyebrow>Need something custom?</Eyebrow>
            </Reveal>
            <Reveal delayMs={100}>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                We build software for clients the same way.
              </h2>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                QuoteMagic runs on the same stack and discipline we bring to client work. In the AI Transformation Program
                we design, build, and launch custom AI tools inside your business.
              </p>
            </Reveal>
          </div>
          <Reveal delayMs={250} className="lg:justify-self-end">
            <Button href="/services/ai-transformation-program" size="lg">
              See the Transformation Program
            </Button>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
