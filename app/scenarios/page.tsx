import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

type Scenario = {
  title: string;
  challenge: string;
  solution: string;
  outcomes: string[];
};

const scenarios: Scenario[] = [
  {
    title: "Scenario: Multi-Location Home Services Operator (50 employees)",
    challenge:
      "Dispatch and customer updates are split across email, texts, and disconnected job systems, causing delayed responses and high admin overhead.",
    solution:
      "AI-assisted job triage, appointment summarization, and internal playbook search integrated with service management workflows.",
    outcomes: [
      "~35% reduction in manual scheduling and routing effort",
      "Faster customer response windows during peak demand",
      "Improved first-time resolution through better technician context",
      "Stronger margin control via clearer operational visibility",
    ],
  },
  {
    title: "Scenario: Regional Healthcare Clinic Group (8 locations)",
    challenge:
      "Front-office teams handle repetitive patient intake, policy checks, and referral coordination manually, increasing delays and staff fatigue.",
    solution:
      "AI-driven intake assistance, structured referral summaries, and governed internal knowledge retrieval for policy and procedure questions.",
    outcomes: [
      "~40% faster intake and referral processing cycle time",
      "Reduced non-clinical burden on senior staff",
      "More consistent policy application across locations",
      "Scalable governance baseline for future AI use cases",
    ],
  },
  {
    title: "Scenario: Commercial Insurance Brokerage (30 employees)",
    challenge:
      "Account teams spend significant time reviewing submissions, summarizing policy changes, and drafting repetitive client communications.",
    solution:
      "AI-supported submission classification, policy comparison summaries, and draft client response workflows with human review controls.",
    outcomes: [
      "~50% reduction in manual review time for standard submissions",
      "Quicker turnaround for renewals and policy updates",
      "Higher client satisfaction through more consistent communication",
      "Strategic capacity unlocked for higher-value advisory work",
    ],
  },
];

export const metadata: Metadata = {
  title: "Other AI Implementation Scenarios",
  description:
    "Modeled scenarios showing how stait.ai helps growing businesses combine operational efficiency with long-term strategic AI advantage.",
  alternates: { canonical: "https://www.stait.ai/scenarios" },
};

export default function ScenariosPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Navbar />
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight">
              Other Modeled Scenarios
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              These modeled engagements show how AI can create immediate
              operational gains while building durable strategic capability.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6">
          {scenarios.map((scenario, index) => (
            <Reveal key={scenario.title} delayMs={index * 80}>
              <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
                  {scenario.title}
                </h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                    <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                      Challenge
                    </div>
                    <p className="mt-2 text-sm text-neutral-700">
                      {scenario.challenge}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                    <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                      Approach
                    </div>
                    <p className="mt-2 text-sm text-neutral-700">
                      {scenario.solution}
                    </p>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    Modeled outcomes
                  </div>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                    {scenario.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-sm text-neutral-700"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={180}>
          <div className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Want your own scenario mapped to ROI?
            </h2>
            <p className="mt-3 text-neutral-700">
              We can model opportunities for your team, estimate impact, and
              define a low-risk pilot path in 1–2 weeks.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#contact">
                <Button>Book a strategy call</Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary">Review services</Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
      <Footer />
    </main>
  );
}
