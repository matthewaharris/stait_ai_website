import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";
import { scenarios } from "@/lib/scenarios";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Modeled AI engagements showing how Stait AI helps growing businesses cut manual work, respond faster, and build lasting AI capability.",
  alternates: { canonical: "https://www.stait.ai/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="What AI looks like in practice."
        intro="Modeled engagements based on the work we do. Each shows the problem, the approach, and the expected outcomes."
        glow="blue"
      />

      <section className="bg-paper py-20 sm:py-28">
        <Container className="space-y-8">
          {scenarios.map((s, i) => {
            const num = parseInt(s.metric.replace(/\D/g, ""), 10);
            return (
              <Reveal
                as="article"
                key={s.slug}
                delayMs={i * 60}
                className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-[0_20px_50px_rgba(27,29,46,0.06)] lg:grid-cols-[360px_1fr]"
              >
                <div className="relative flex flex-col justify-between overflow-hidden bg-navy p-9 text-white">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full"
                    style={{ background: `radial-gradient(circle, ${s.color}55, transparent 65%)` }}
                  />
                  <div className="relative font-mono text-xs uppercase tracking-[0.2em]" style={{ color: s.color }}>
                    {s.industry}
                  </div>
                  <div className="relative mt-10">
                    <div className="font-display text-7xl font-semibold tracking-[-0.04em]">
                      ~<CountUp value={num} suffix="%" />
                    </div>
                    <div className="mt-3 text-lg text-mist">{s.metricLabel}</div>
                  </div>
                </div>
                <div className="p-9 sm:p-11">
                  <h2 className="font-display text-3xl font-semibold tracking-tight">{s.title}</h2>
                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <div className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">Challenge</div>
                      <p className="mt-3 text-lg leading-relaxed text-muted">{s.challenge}</p>
                    </div>
                    <div>
                      <div className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">Approach</div>
                      <p className="mt-3 text-lg leading-relaxed text-muted">{s.approach}</p>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-line pt-6">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">Modeled outcomes</div>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {s.outcomes.map((o) => (
                        <li key={o} className="flex gap-3 text-[17px]">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: s.color }} />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 text-sm text-subtle">Typical engagement: {s.engagement}</div>
                </div>
              </Reveal>
            );
          })}
          <p className="pt-4 text-center text-sm text-subtle">
            Modeled scenarios for illustration. Actual results are scoped and measured per engagement.
          </p>
        </Container>
      </section>

      <FinalCTA title={<>Want your own scenario mapped to <span className="text-brand-violet">ROI</span>?</>} />
    </>
  );
}
