import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "AI for Accounting Firms",
  description:
    "Practical AI implementation for accounting firms: intake automation, knowledge search, response speed, and measurable productivity lift.",
  alternates: { canonical: "https://www.stait.ai/industries/accounting" },
};

const challenges = [
  "Seasonal workload spikes during filing periods",
  "Manual intake and document routing workflows",
  "Compliance and privacy requirements",
  "Knowledge bottlenecks concentrated in senior staff",
  "Burnout from repetitive, high-volume admin work",
];

const value = [
  "Intake automation and document classification",
  "Summarization for faster internal review",
  "Internal knowledge search for policy/tax guidance",
  "Draft client responses and standardized follow-ups",
  "Better throughput without sacrificing compliance discipline",
  "Internal AI champions on staff who own the workflow once we hand it off",
];

const lists = [
  { eyebrow: "Common challenges", bar: "violet" as const, dot: "bg-brand-violet", items: challenges },
  { eyebrow: "Where AI delivers value", bar: "blue" as const, dot: "bg-brand-blue", items: value },
];

export default function AccountingIndustryPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries · Accounting"
        title="AI for accounting firms."
        intro="Reduce administrative burden. Improve client response. Scale intelligently."
        glow="blue"
      >
        <Button href="/contact" size="lg">
          Book a free call
        </Button>
        <Button href="/services" size="lg" variant="secondary">
          See packages
        </Button>
      </PageHero>

      <section className="bg-paper py-20 sm:py-28">
        <Container className="grid gap-8 lg:grid-cols-2">
          {lists.map((l, i) => (
            <Reveal
              key={l.eyebrow}
              delayMs={i * 100}
              className="rounded-3xl border border-line bg-white p-9 shadow-[0_20px_50px_rgba(27,29,46,0.06)] sm:p-11"
            >
              <Eyebrow bar={l.bar}>{l.eyebrow}</Eyebrow>
              <ul className="mt-8 space-y-4">
                {l.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[17px] text-ink">
                    <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${l.dot}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal className="relative overflow-hidden rounded-3xl bg-navy p-9 text-white sm:p-14">
            <div aria-hidden className="glow-purple pointer-events-none absolute -right-48 -top-48 h-[560px] w-[560px] rounded-full" />
            <div className="relative max-w-3xl">
              <Eyebrow dark bar="purple">
                Example ROI model
              </Eyebrow>
              <p className="mt-8 font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                If 10 senior staff each spend 6 hours a week on manual document review, cutting that by half at 80%
                adoption, less 3 hours of human review, frees about{" "}
                <span className="text-brand-violet">1,100 hours</span> a year.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-mist">
                At $125/hour billable equivalent, that&rsquo;s about $136,500 of capacity. Illustrative, and it&rsquo;s
                capacity rather than cash until the time is billed or reinvested.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
