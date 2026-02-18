import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

function Step({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-neutral-900">{title}</div>
        <div className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
          {n}
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-700">{body}</p>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="border-y border-neutral-200 bg-neutral-50">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">A delivery model that keeps AI practical.</h2>
            <p className="mt-4 text-neutral-700">
              We focus on the shortest path to measurable impact — while keeping risk, security, and maintainability
              front-and-center.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          <Reveal delayMs={60}>
            <Step
              n="01"
              title="Diagnose"
              body="Map workflows, find bottlenecks, and size ROI. Choose a pilot that pays back fast."
            />
          </Reveal>
          <Reveal delayMs={120}>
            <Step
              n="02"
              title="Pilot"
              body="Build one production-grade use case with metrics, guardrails, and stakeholder buy-in."
            />
          </Reveal>
          <Reveal delayMs={180}>
            <Step
              n="03"
              title="Productionize"
              body="Harden reliability, security, and operations. Integrate with the tools your team already uses."
            />
          </Reveal>
          <Reveal delayMs={240}>
            <Step
              n="04"
              title="AI Ops"
              body="Measure quality + cost over time. Improve, expand, and keep governance current as the business grows."
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
