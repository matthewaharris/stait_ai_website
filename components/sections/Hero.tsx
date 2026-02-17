import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroInteractiveCard from "@/components/sections/HeroInteractiveCard";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="text-sm text-neutral-600">{label}</div>
      <div className="mt-1 text-2xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-emerald-100 blur-3xl opacity-80" />
        <div className="absolute -bottom-40 right-[-10%] h-[420px] w-[520px] rounded-full bg-gradient-to-tr from-rose-100 via-amber-100 to-sky-100 blur-3xl opacity-70" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      </div>

      <Container className="relative grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm">
              <Image src="/stait-logo.svg" alt="stait logo" width={180} height={135} className="h-12 w-auto sm:h-14" priority />
              <div className="text-sm text-neutral-700">
                <span className="block text-base font-semibold text-neutral-900">stait.ai</span>
                Practical AI implementation partner
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={40}>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              Serving Boise + nationwide • SMB focus • Enterprise-ready delivery
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              stait.ai helps growing businesses implement AI with measurable results.
            </h1>
          </Reveal>

          <Reveal delayMs={140}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-700">
              We design, deploy, and manage practical AI systems that reduce cost, eliminate manual work, and improve
              customer response —{" "}
              <span className="font-medium text-neutral-900">
                without requiring you to hire an in-house AI team.
              </span>
            </p>
          </Reveal>

          <Reveal delayMs={200}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#contact">
                <Button size="lg">Book a strategy call</Button>
              </a>
              <a href="#services">
                <Button variant="secondary" size="lg">
                  See services & pricing
                </Button>
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={260}>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Stat label="Typical pilot timeline" value="2–6 weeks" />
              <Stat label="Setup cost range" value="$12k–$45k" />
              <Stat label="Ops retainer" value="$2k–$6k/mo" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delayMs={120}>
            <HeroInteractiveCard>
              <div className="mb-5 rounded-2xl border border-neutral-200/80 bg-neutral-50/80 p-4">
                <Image
                  src="/stait-logo.svg"
                  alt="stait logo"
                  width={220}
                  height={165}
                  className="mx-auto h-16 w-auto sm:h-20"
                  priority
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-neutral-900">AI Jumpstart (most popular)</div>
                <div className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">v1 offer</div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                A focused engagement that turns “AI curiosity” into a working pilot, a measurable ROI model, and a
                12-month roadmap.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Opportunity audit + ROI model",
                  "One production-grade pilot",
                  "Security & governance baseline",
                  "Team enablement + handoff",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                      ✓
                    </span>
                    <span className="text-sm text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                  <div className="text-xs text-neutral-600">Price</div>
                  <div className="mt-1 text-sm font-semibold">$12k–$25k</div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                  <div className="text-xs text-neutral-600">Duration</div>
                  <div className="mt-1 text-sm font-semibold">6–8 weeks</div>
                </div>
              </div>

              <div className="mt-6">
                <a href="#contact">
                  <Button className="w-full">Start with Jumpstart</Button>
                </a>
              </div>
            </HeroInteractiveCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
