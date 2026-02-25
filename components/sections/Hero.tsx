import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroNodesBackdrop from "@/components/sections/HeroNodesBackdrop";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <HeroNodesBackdrop className="z-10 opacity-100" />
        <div className="absolute -top-24 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-emerald-100 opacity-70 blur-3xl" />
        <div className="absolute -bottom-36 right-[-10%] h-[420px] w-[520px] rounded-full bg-gradient-to-tr from-rose-100 via-amber-100 to-sky-100 opacity-60 blur-3xl" />
      </div>

      <Container className="relative z-20 grid gap-10 pb-16 pt-0 sm:pb-20 sm:pt-0 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Image
              src="/stait-ai-2.svg"
              alt="stait logo"
              width={720}
              height={540}
              className="-mt-10 h-60 w-auto sm:-mt-14 sm:h-72"
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
              We design, deploy, and manage practical AI systems that eliminate operational bottlenecks while
              positioning your business to scale intelligently — without hiring an in-house AI team.
            </p>
            <p className="mt-3 text-sm font-medium text-neutral-700">
              From roadmap → pilot → managed production infrastructure.
            </p>
          </Reveal>

          <Reveal delayMs={220}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/#contact">
                <Button size="lg">Book a strategy call</Button>
              </Link>
              <Link href="/ai-readiness">
                <Button variant="secondary" size="lg">
                  Take the AI Readiness Assessment
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pt-24">
          <Reveal delayMs={120}>
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-neutral-900">Start here</div>
                <div className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                  Assessment Offer
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                AI Readiness &amp; Opportunity Assessment — $1,500–$2,500 (Boise cohort $1,250 limited) — 1–2 weeks
              </p>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
                Deliverables include workflow review, opportunity map, ROI estimate, governance baseline, and a
                prioritized 90-day AI action plan.
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
