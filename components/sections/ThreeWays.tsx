import Link from "next/link";
import { GraduationCap, Compass, Rocket, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

type Prong = {
  step: string;
  tag: string;
  name: string;
  icon: typeof GraduationCap;
  bestFor: string;
  blurb: string;
  leaveWith: string[];
  price: string;
  meta: string;
  cta: string;
  featured?: boolean;
};

const prongs: Prong[] = [
  {
    step: "01",
    tag: "Learn",
    name: "AI Foundations Workshop",
    icon: GraduationCap,
    bestFor: "Teams that are AI-curious but unsure where to start.",
    blurb:
      "A guided session for your leadership and the people closest to the work. We walk through the AI tools that actually exist today, how a business your size should think about adoption — and just as importantly, what to ignore.",
    leaveWith: [
      "A plain-English map of the AI landscape relevant to your business",
      "A high-level AI readiness snapshot",
      "A prioritized short list of safe, fast next steps",
    ],
    price: "$500 / session",
    meta: "Half-day • on-site or remote • leadership + key staff",
    cta: "Book a workshop",
  },
  {
    step: "02",
    tag: "Plan",
    name: "AI Opportunity Deep Dive",
    icon: Compass,
    bestFor: "Teams ready to commit to a direction and build internal capability.",
    blurb:
      "We map your real workflows, surface the highest-ROI opportunities, and identify the people inside your org who can become internal AI champions — then give those champions hands-on training so capability stays in the building.",
    leaveWith: [
      "Workflow opportunity map + ROI estimate",
      "Named internal AI champions, trained to lead adoption",
      "Governance baseline + risk controls",
      "A prioritized 90-day action plan",
    ],
    price: "$1,500–$2,500",
    meta: "1–2 days • Boise cohort $1,250 limited",
    cta: "Start a deep dive",
    featured: true,
  },
  {
    step: "03",
    tag: "Build & Operate",
    name: "Implementation Partner",
    icon: Rocket,
    bestFor: "Teams with a validated opportunity who want production-grade systems without hiring an AI team.",
    blurb:
      "We design, build, and run the actual solutions — from a single high-leverage pilot to a managed AI operation. This is where the packages below come in, matched to where you are.",
    leaveWith: [
      "Production-grade systems, not demos",
      "Guardrails, audit trails, and observability from day one",
      "Integration with the tools your team already uses",
    ],
    price: "Scoped per engagement",
    meta: "One-time build or ongoing partnership",
    cta: "Scope an implementation",
  },
];

export default function ThreeWays() {
  return (
    <section id="approach" className="bg-white">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-indigo-700">How we work with you</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
              Three ways to work with stait.ai
            </h2>
            <p className="mt-3 text-neutral-700">
              Start anywhere on the ladder. Most teams begin with a workshop, plan around their real workflows, then
              build — but each step stands on its own.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {prongs.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.step} delayMs={i * 80}>
                <div
                  className={
                    p.featured
                      ? "flex h-full flex-col rounded-3xl border border-indigo-300 bg-white p-6 shadow-sm ring-1 ring-indigo-300"
                      : "flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700">
                      <span
                        className={
                          p.featured
                            ? "rounded-xl border border-indigo-200 bg-indigo-50 p-2"
                            : "rounded-xl border border-neutral-200 bg-neutral-50 p-2"
                        }
                      >
                        <Icon className="h-4 w-4 text-indigo-700" />
                      </span>
                      {p.tag}
                    </div>
                    <span className="text-sm font-semibold text-neutral-300">{p.step}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-neutral-950">{p.name}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{p.bestFor}</p>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-700">{p.blurb}</p>

                  <div className="mt-5">
                    <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">You leave with</div>
                    <ul className="mt-2 space-y-2 text-sm text-neutral-700">
                      {p.leaveWith.map((item) => (
                        <li key={item} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-none text-indigo-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-neutral-100 pt-4">
                    <div className="text-base font-semibold text-neutral-950">{p.price}</div>
                    <div className="mt-1 text-xs text-neutral-500">{p.meta}</div>
                  </div>

                  <div className="mt-5 flex-1" />
                  <Link
                    href="/#contact"
                    className={
                      p.featured
                        ? "inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
                        : "inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50"
                    }
                  >
                    {p.cta}
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
