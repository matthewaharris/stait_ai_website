import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "AI for Owners Seminar",
  description:
    "A half-day seminar for Treasure Valley business owners. Leave with one recurring task working in the AI tool you already have, a one-page AI rule for your staff, and a plan for next week.",
  alternates: { canonical: "https://www.stait.ai/seminar" },
};

const agenda = [
  { when: "8:30", title: "Arrive", text: "Food, Wi-Fi, and login help" },
  { when: "9:00", title: "How these tools work and fail", text: "Why the gap is integration, not awareness" },
  { when: "9:15", title: "Your first real task", text: "Set privacy first, then rewrite a difficult email" },
  { when: "9:45", title: "Prompting and checking", text: "A simple prompt pattern, then spot the errors" },
  { when: "10:15", title: "Data rules", text: "What's safe to paste, and what never is" },
  { when: "10:45", title: "Practice", text: "Summarize a contract or build a standard procedure" },
  { when: "11:15", title: "Find your workflow", text: "Audit your week and pick one recurring task" },
  { when: "11:30", title: "Build it", text: "Build, test, and add a human review step" },
  { when: "12:00", title: "Share and plan", text: "Compare notes and write your plan for next week" },
];

const takeaways = [
  "A workbook and copy-paste prompt pack",
  "One-page data rules",
  "A one-page AI policy starter",
  "A plan chooser for the right AI tool and tier",
  "A written plan for using it next week",
  "A list of the best free resources",
];

export default function SeminarPage() {
  return (
    <>
      <PageHero
        eyebrow="Half-day owner seminar"
        title="AI for Owners: from dabbling to one working process."
        intro="For owners and general managers of Treasure Valley firms with 5 to 100 employees who've tried AI and have little to show for it."
        glow="blue"
        aside={
          <div className="lg:text-right">
            <div className="font-display text-6xl font-semibold tracking-tight sm:text-7xl">$149</div>
            <div className="mt-2 font-mono text-sm uppercase tracking-[0.15em] text-haze">3.5 hours · morning</div>
            <div className="mt-1 text-sm text-haze">$99 for chamber members and early birds</div>
          </div>
        }
      >
        <Button href="/contact" size="lg">
          Join the interest list
        </Button>
      </PageHero>

      <section className="bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>You&rsquo;ll leave with</Eyebrow>
            </Reveal>
            <Reveal delayMs={100}>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
                One recurring task working in the AI tool you already have.
              </h2>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Free AI courses are good, and we&rsquo;ll point you to the best ones. This session adds what they
                leave out: a tool-neutral view, local peers, advice on the right plan and data rules for your business,
                and follow-up after the day.
              </p>
            </Reveal>
          </div>
          <ul>
            {takeaways.map((t, i) => (
              <Reveal as="li" key={t} from="left" delayMs={100 + i * 80} className="flex gap-4 border-b border-line py-4 text-lg first:border-t">
                <span className="font-semibold text-brand-purple">✓</span>
                {t}
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow bar="blue">The morning</Eyebrow>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Mostly hands-on.</h2>
          </Reveal>
          <ul className="mt-10">
            {agenda.map((a, i) => (
              <Reveal as="li" key={a.when} delayMs={i * 50} className="grid grid-cols-[72px_1fr] gap-4 border-t border-line py-5">
                <span className="font-mono text-sm text-brand-sky">{a.when}</span>
                <span>
                  <span className="block font-display text-xl font-semibold">{a.title}</span>
                  <span className="mt-1 block text-lg text-muted">{a.text}</span>
                </span>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className="mt-10 text-lg leading-relaxed text-muted">
              The first sessions are planned for early 2027, with dates and venue to be announced. Please bring a laptop
              or phone and use only fictional or non-sensitive data. Your ticket includes a $100 credit toward a Workshop
              or Blueprint within 60 days.
            </p>
          </Reveal>
        </Container>
      </section>

      <FinalCTA title={<>Want a seat at the first <span className="text-brand-violet">session</span>?</>} />
    </>
  );
}
