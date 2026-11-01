import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import { PackageCardGrid } from "@/components/sections/PackageCards";
import Approach from "@/components/sections/Approach";
import FinalCTA from "@/components/sections/FinalCTA";
import { packages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Three fixed-fee ways to work with Stait AI: the AI Foundations Workshop ($1,500), the AI Strategy Blueprint ($2,500), and the AI Transformation Program ($25,000).",
  alternates: { canonical: "https://www.stait.ai/services" },
};

type Cell = boolean | string;
const compare: { label: string; values: [Cell, Cell, Cell] }[] = [
  { label: "Duration", values: ["1 day", "3 days", "6 weeks"] },
  { label: "Hands-on team training", values: [true, false, true] },
  { label: "Quick wins + prompt library", values: [true, true, true] },
  { label: "AI readiness scorecard", values: [false, true, true] },
  { label: "Opportunity map + ROI model", values: [false, true, true] },
  { label: "90-day roadmap", values: [false, true, true] },
  { label: "AI usage policy", values: ["Starter guidelines", true, "Full governance"] },
  { label: "Full strategy + 12-month roadmap", values: [false, false, true] },
  { label: "Custom AI tools built & launched", values: [false, false, "2–3 tools"] },
  { label: "Integration with your systems", values: [false, false, true] },
  { label: "ROI & KPI tracking dashboard", values: [false, false, true] },
  { label: "Follow-up support", values: [false, "30-day check-in", "30 days"] },
];

const faqs = [
  {
    q: "Where should we start?",
    a: "Most clients start with the AI Strategy Blueprint. If your team is new to AI, the Workshop is a low-cost first step. If you already know what you want built, we can scope the Transformation Program directly. The free discovery call is where we recommend the right fit.",
  },
  {
    q: "Do fees credit toward the next step?",
    a: "Yes. The Workshop fee credits toward the Blueprint, and the Blueprint fee credits toward the Transformation Program, when booked within 60 days.",
  },
  {
    q: "Do you work outside Boise?",
    a: "Yes. We're based in Boise and work with clients nationwide. Workshops and discovery can be on-site or remote.",
  },
  {
    q: "What do you need from our team?",
    a: "A leadership sponsor, access to the people who do the work, and access to the systems involved. We keep the time commitment light and schedule around your operations.",
  },
  {
    q: "What happens to our data?",
    a: "Your data stays yours. We build private, permissioned tools, and your data is never used to train public models.",
  },
];

function CellView({ v }: { v: Cell }) {
  if (v === true) return <span className="font-semibold text-brand-purple">✓</span>;
  if (v === false) return <span className="text-mist">—</span>;
  return <span className="text-ink">{v}</span>;
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & pricing"
        title="Three ways to put AI to work."
        intro="Fixed fees, clear deliverables, and a path that grows with you, from a single day of training to custom AI tools running in your business."
      >
        <Button href="/contact" size="lg">
          Book a free call
        </Button>
        <Button href="/ai-readiness" size="lg" variant="outline-light">
          Take the readiness quiz
        </Button>
      </PageHero>

      <section className="bg-paper py-24">
        <Container>
          <PackageCardGrid />
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <Reveal>
            <Eyebrow>Compare</Eyebrow>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">What&rsquo;s included.</h2>
          </Reveal>
          <Reveal delayMs={200} className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-[34%] pb-6" />
                  {packages.map((p) => (
                    <th key={p.slug} className="px-4 pb-6 align-bottom">
                      <div className="font-mono text-xs uppercase tracking-[0.15em] text-subtle">{p.shortName}</div>
                      <div className="mt-1 font-display text-3xl font-semibold tracking-tight">{p.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[17px]">
                {compare.map((row) => (
                  <tr key={row.label} className="border-t border-line">
                    <td className="py-4 pr-4 text-muted">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-4 py-4">
                        <CellView v={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </Container>
      </section>

      <Approach />

      <section className="bg-white py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Questions</Eyebrow>
            </Reveal>
            <Reveal delayMs={100}>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Common questions.</h2>
            </Reveal>
          </div>
          <div>
            {faqs.map((f, i) => (
              <Reveal key={f.q} delayMs={i * 80}>
                <details className="group border-b border-line py-6 first:border-t">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-semibold">
                    {f.q}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper text-xl text-brand-purple transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
