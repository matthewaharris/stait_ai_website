import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import GrowBar from "@/components/ui/GrowBar";

const steps = [
  { n: "01", title: "Learn", text: "Your team understands what AI can do today and how to use it safely.", ring: "border-brand-blue", num: "text-brand-blue" },
  { n: "02", title: "Plan", text: "We map your workflows, size the ROI, and build a prioritized roadmap.", ring: "border-brand-violet", num: "text-brand-violet" },
  { n: "03", title: "Build", text: "We implement custom AI tools and automations inside your real workflows.", ring: "border-brand-blue", num: "text-brand-blue" },
  { n: "04", title: "Operate", text: "We train, support, and measure results so adoption sticks.", ring: "border-brand-violet", num: "text-brand-violet" },
];

export default function Approach({ id = "approach" }: { id?: string }) {
  return (
    <section id={id} className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div aria-hidden className="glow-purple pointer-events-none absolute -right-72 -top-72 h-[900px] w-[900px] rounded-full" />
      <Container className="relative">
        <Reveal>
          <Eyebrow dark>Our approach</Eyebrow>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            A clear path from first conversation to working AI.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <GrowBar
            className="absolute left-12 right-12 top-[46px] hidden h-1 rounded-full lg:block"
            style={{ background: "linear-gradient(90deg,#1ea5e3,#9b7bff)" }}
            delay={0.3}
            duration={1.4}
          />
          <div className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delayMs={400 + i * 200}>
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-full border-4 bg-navy font-mono text-xl ${s.ring} ${s.num}`}
                >
                  {s.n}
                </div>
                <h3 className="mt-8 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{s.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-mist">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
