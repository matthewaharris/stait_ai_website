import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-emerald-100 opacity-70 blur-3xl" />
        <div className="absolute -bottom-36 right-[-10%] h-[420px] w-[520px] rounded-full bg-gradient-to-tr from-rose-100 via-amber-100 to-sky-100 opacity-60 blur-3xl" />
      </div>

      <Container className="relative grid gap-10 pb-16 pt-1 sm:pb-20 sm:pt-2 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Image
              src="/stait-logo.svg?v=2"
              alt="stait logo"
              width={720}
              height={540}
              className="-mt-4 h-60 w-auto sm:-mt-6 sm:h-72"
              priority
            />
          </Reveal>

          <Reveal>
            <p className="mt-3 inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
              Boise-first relationships • Nationwide delivery • SMB focus • Enterprise-ready discipline
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              AI Implementation for Growing Businesses
            </h1>
          </Reveal>

          <Reveal delayMs={120}>
            <p className="mt-4 text-xl font-medium text-neutral-900">
              Reduce manual work. Improve margins. Build long-term competitive advantage.
            </p>
          </Reveal>

          <Reveal delayMs={160}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-700">
              We help growing companies implement AI safely and profitably—without hiring an in-house AI team. Start
              with a focused assessment, ship a pilot in weeks, then scale with confidence.
            </p>
          </Reveal>

          <Reveal delayMs={220}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#contact">
                <Button size="lg">Book a strategy call</Button>
              </a>
              <a href="/ai-readiness">
                <Button variant="secondary" size="lg">
                  Take the AI Readiness Assessment
                </Button>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delayMs={120}>
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-neutral-900">Start here</div>
                <div className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                  AI Jumpstart
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                A focused engagement that turns curiosity into an execution plan, one production-grade pilot, and a
                roadmap for long-term advantage.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                  <div className="text-xs text-neutral-600">Timeline</div>
                  <div className="mt-1 text-sm font-semibold text-neutral-900">6–8 weeks</div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                  <div className="text-xs text-neutral-600">Price</div>
                  <div className="mt-1 text-sm font-semibold text-neutral-900">$12k–$25k</div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
                Includes assessment, ROI framing, governance baseline, pilot design, and implementation plan.
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
