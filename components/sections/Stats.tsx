import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import GrowBar from "@/components/ui/GrowBar";

// TODO(owner): verify these figures against the latest published reports before launch.
const stats = [
  {
    value: 58,
    label: "of U.S. small businesses now use generative AI",
    source: "U.S. Chamber of Commerce, 2025",
    color: "text-brand-purple",
    bar: "bg-brand-purple",
  },
  {
    value: 88,
    label: "of organizations use AI in at least one business function",
    source: "McKinsey, The State of AI, 2025",
    color: "text-brand-sky",
    bar: "bg-brand-blue",
  },
];

const reasons = [
  { n: "01", text: "Starting with tools instead of business problems", color: "text-brand-violet" },
  { n: "02", text: "No owner, roadmap, or way to measure ROI", color: "text-brand-violet" },
  { n: "03", text: "Never connected to real, daily workflows", color: "text-brand-violet" },
  { n: "04", text: "Teams weren't trained to use it with confidence", color: "text-brand-violet" },
];

export function Opportunity() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow>The opportunity</Eyebrow>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            AI has moved from experiment to everyday business tool.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-20">
          {stats.map((s, i) => (
            <Reveal key={s.source} delayMs={200 + i * 150}>
              <div className={`font-display text-8xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-9xl ${s.color}`}>
                <CountUp value={s.value} suffix="%" />
              </div>
              <div className="mt-8 h-3 overflow-hidden rounded-full bg-line">
                <GrowBar className={`h-full rounded-full ${s.bar}`} style={{ width: `${s.value}%` }} delay={0.3 + i * 0.15} />
              </div>
              <p className="mt-6 max-w-md text-xl leading-snug">{s.label}</p>
              <p className="mt-3 font-mono text-sm text-subtle">{s.source}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Gap() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div aria-hidden className="glow-purple pointer-events-none absolute -left-52 top-40 h-[820px] w-[820px] rounded-full" />
      <Container className="relative">
        <Reveal>
          <Eyebrow dark>The gap</Eyebrow>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Most businesses are stuck between curiosity and results.
          </h2>
        </Reveal>
        <div className="mt-16 grid items-end gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal delayMs={200}>
            <div className="text-white font-display text-[120px] font-semibold leading-[0.85] tracking-[-0.06em] sm:text-[180px]">
              <CountUp value={95} suffix="%" />
            </div>
            <p className="mt-8 max-w-md text-xl leading-snug sm:text-2xl">
              of generative AI pilots deliver no measurable impact on the bottom line
            </p>
            <p className="mt-3 font-mono text-sm text-subtle">MIT NANDA, The GenAI Divide, 2025</p>
          </Reveal>
          <div>
            <Reveal delayMs={300}>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-haze">Why it happens</div>
            </Reveal>
            <ul className="mt-2">
              {reasons.map((r, i) => (
                <Reveal
                  as="li"
                  key={r.n}
                  from="left"
                  delayMs={400 + i * 100}
                  className="flex items-baseline gap-6 border-b border-navy-line py-5 last:border-b-0"
                >
                  <span className={`font-mono text-sm ${r.color}`}>{r.n}</span>
                  <span className="text-lg sm:text-xl">{r.text}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
