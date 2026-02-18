import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

function Card({
  title,
  price,
  description,
  bullets,
  accent,
}: {
  title: string;
  price: string;
  description: string;
  bullets: string[];
  accent: "emerald" | "indigo" | "neutral";
}) {
  const accentClass =
    accent === "emerald"
      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
      : accent === "indigo"
        ? "bg-indigo-50 text-indigo-800 border-indigo-200"
        : "bg-neutral-50 text-neutral-800 border-neutral-200";

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base font-semibold tracking-tight">{title}</div>
          <div className="mt-2 text-sm text-neutral-700">{description}</div>
        </div>
        <div className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${accentClass}`}>{price}</div>
      </div>
      <div className="mt-5 space-y-2">
        {bullets.map((b) => (
          <div key={b} className="flex items-start gap-3 text-sm text-neutral-800">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
              →
            </span>
            <span>{b}</span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a href="#contact">
          <Button variant="secondary" className="w-full">
            Talk about this
          </Button>
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Services designed for SMB speed — built with enterprise discipline.
            </h2>
            <p className="mt-4 text-neutral-700">
              Start small, prove ROI, then scale. We’ll meet you where you are: low technical overhead, high
              operational impact.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal delayMs={60}>
            <Card
              title="AI Jumpstart"
              price="$12k–$25k"
              description="Your fastest path to a real pilot, ROI model, and roadmap."
              bullets={[
                "Opportunity audit + ROI model",
                "One pilot in production",
                "Security baseline + governance",
                "Team enablement + handoff",
              ]}
              accent="emerald"
            />
          </Reveal>
          <Reveal delayMs={120}>
            <Card
              title="Company Knowledge AI"
              price="$15k–$45k"
              description="A secure, private assistant trained on your policies, SOPs, and docs."
              bullets={[
                "Document ingestion + search",
                "Role-based access + logging",
                "Answer quality tuning",
                "Teams/Slack or web UI",
              ]}
              accent="indigo"
            />
          </Reveal>
          <Reveal delayMs={180}>
            <Card
              title="AI Ops Retainer"
              price="$2k–$6k/mo"
              description="Monitoring, optimization, and new automations each month."
              bullets={[
                "Quality + cost monitoring",
                "Prompt + workflow improvements",
                "Governance updates",
                "Quarterly roadmap refresh",
              ]}
              accent="neutral"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
