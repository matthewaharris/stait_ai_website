import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import { PackageCardGrid } from "@/components/sections/PackageCards";
import Approach from "@/components/sections/Approach";
import FinalCTA from "@/components/sections/FinalCTA";
import { careTiers, packages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Four fixed-fee ways to work with Stait AI: the AI Foundations Workshop ($1,500), the AI Strategy Blueprint ($2,500), the AI Workflow Pilot ($9,500), and the AI Transformation Program ($25,000).",
  alternates: { canonical: "https://www.stait.ai/services" },
};

type Cell = boolean | string;
const compare: { label: string; values: [Cell, Cell, Cell, Cell] }[] = [
  { label: "Duration", values: ["1 day + 30 days", "3 days over 3 weeks", "3 weeks + 30 days", "6 weeks + 30 days"] },
  { label: "Requires a Blueprint first", values: [false, false, "Or paid scoping", "Or equal evidence"] },
  { label: "Hands-on team training", values: [true, false, "Role training", true] },
  { label: "Prompt library + quick wins", values: [true, true, false, false] },
  { label: "AI readiness scorecard", values: [false, true, false, false] },
  { label: "Opportunity map + ROI model", values: [false, true, false, false] },
  { label: "Roadmap", values: [false, "90 days", false, "12 months, light"] },
  { label: "AI usage policy", values: ["Starter guidelines", true, "Update", "Full governance"] },
  { label: "Production workflows", values: [false, false, "1", "2 + configured assistant"] },
  { label: "Integration with your systems", values: [false, false, "Up to 2 systems", "Up to 2 per workflow"] },
  { label: "KPI dashboard", values: [false, false, "One page", true] },
  { label: "Measured results", values: ["Day 30 scorecard", false, "Before-and-after", "Before-and-after"] },
  { label: "Follow-up support", values: ["30-day follow-up", "30-day check-in", "30 days", "30 days"] },
];

const faqs = [
  {
    q: "Where should we start?",
    a: "Most clients start with the AI Strategy Blueprint. If your team is new to AI, the Workshop is a low-cost first step. If you know which workflow matters most, a paid scoping session can lead straight to a Pilot. The free discovery call is where we recommend the smallest step that fits.",
  },
  {
    q: "Do fees credit toward the next step?",
    a: "Yes, in part. One credit applies to the next step only when booked within 60 days, and credits don't chain. That's $625 from Workshop to Blueprint, $2,375 from Blueprint to Pilot, and $2,500 toward the Program.",
  },
  {
    q: "What if the Pilot doesn't work?",
    a: "We agree on an acceptance test before we start, using your real past cases. If the workflow fails that test, we keep working at no extra charge until it passes, as long as the client's agreed duties are met.",
  },
  {
    q: "Will you guarantee a return?",
    a: "No. We estimate returns on conservative numbers from your own inputs, then measure real results against a baseline. If seats or an off-the-shelf tool solve your problem, we'll tell you, even if that means no build for us.",
  },
  {
    q: "Who isn't a good fit?",
    a: "We're not the right partner if you can't name a workflow, want an AI strategy for show, need guaranteed accuracy, want staff cuts hidden from staff, or want automated decisions about people.",
  },
  {
    q: "Do you work outside Boise?",
    a: "Yes. We're based in Boise and work with clients nationwide. Discovery can be remote, and in-person coaching is where the Workshop works best.",
  },
  {
    q: "What do you need from our team?",
    a: "A leadership sponsor, a named internal owner, access to the people who do the work, and access to the systems involved. For builds, we need samples and access in hand before we start the clock.",
  },
  {
    q: "What happens to our data, and who owns the work?",
    a: "Your data stays yours, and it's never used to train public models. Model, hosting, and automation accounts sit in your name. Client-specific work is yours once it's paid for.",
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
        title="Four ways to put AI to work."
        intro="Fixed fees, clear deliverables, and a path that grows with you, from a single day of training to measured workflows running in your business."
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
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-[28%] pb-6" />
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

      <section className="bg-paper py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>After launch</Eyebrow>
            </Reveal>
            <Reveal delayMs={100}>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Stait Care.</h2>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Models and APIs change underneath you. Care keeps your workflow tested, tuned, and reported in plain
                language for a fixed monthly fee. It runs 90 days, then month to month with 30 days&rsquo; notice.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {careTiers.map((t, i) => (
              <Reveal key={t.name} delayMs={200 + i * 100} className="rounded-3xl border border-line bg-white p-8 shadow-[0_20px_50px_rgba(27,29,46,0.06)]">
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-subtle">{t.fit}</div>
                <h3 className="mt-3 font-display text-2xl font-semibold">{t.name}</h3>
                <div className="mt-4 font-display text-4xl font-semibold tracking-tight">
                  {t.price}
                  <span className="text-lg font-normal text-muted"> /month</span>
                </div>
                <div className="mt-1 text-muted">{t.hours}</div>
                <p className="mt-5 text-[17px] leading-relaxed text-muted">{t.includes}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 text-white">
        <Container className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <Eyebrow dark>For owners</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Not ready to bring your team?</h2>
            <p className="mt-4 text-lg text-mist">
              Start with our half-day owner seminar and leave with one recurring task working in the AI tool you already have.
            </p>
          </div>
          <Button href="/seminar" size="lg" variant="light">
            See the seminar
          </Button>
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
