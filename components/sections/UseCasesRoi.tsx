import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import GrowBar from "@/components/ui/GrowBar";

const useCases = [
  { title: "Customer service", text: "Faster answers, 24/7 intake, and smarter routing", color: "bg-brand-blue" },
  { title: "Documents & invoices", text: "Automatic extraction, sorting, and data entry", color: "bg-brand-violet" },
  { title: "Sales & proposals", text: "Quotes, follow-ups, and proposals drafted in minutes", color: "bg-brand-blue" },
  { title: "Company knowledge", text: "A private assistant that knows your policies and processes", color: "bg-brand-violet" },
  { title: "Reporting", text: "Weekly numbers summarized without spreadsheet wrangling", color: "bg-brand-blue" },
  { title: "Marketing", text: "On-brand content, emails, and social posts at scale", color: "bg-brand-violet" },
];

export function UseCases() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div aria-hidden className="glow-blue pointer-events-none absolute -bottom-96 -right-72 h-[900px] w-[900px] rounded-full" />
      <Container className="relative">
        <Reveal>
          <Eyebrow dark>Where AI pays off</Eyebrow>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            The work that slows your team down is where AI helps most.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u, i) => (
            <Reveal
              key={u.title}
              delayMs={150 + i * 90}
              className="rounded-3xl border border-navy-line bg-navy-2 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#3b3f66]"
            >
              <div className={`h-1.5 w-12 rounded-full ${u.color}`} />
              <h3 className="mt-6 font-display text-2xl font-semibold">{u.title}</h3>
              <p className="mt-2 text-lg leading-snug text-mist">{u.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

const factors = [
  { v: "20 hrs", l: "weekly task", op: "×" },
  { v: "50%", l: "time reduction", op: "×" },
  { v: "80%", l: "adoption", op: "−" },
  { v: "3 hrs", l: "added review", op: "=" },
];

export function RoiMath() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow bar="blue">The math</Eyebrow>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            One workflow, on conservative numbers.
          </h2>
        </Reveal>

        <Reveal delayMs={200} className="mt-14 flex flex-wrap items-end gap-x-6 gap-y-8 lg:gap-x-8">
          {factors.map((f) => (
            <div key={f.l} className="flex items-end gap-6 lg:gap-8">
              <div>
                <div className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">{f.v}</div>
                <div className="mt-2 text-muted">{f.l}</div>
              </div>
              <span className="pb-9 font-display text-4xl text-mist">{f.op}</span>
            </div>
          ))}
          <div>
            <div className="font-display text-5xl font-semibold tracking-tight text-brand-purple sm:text-6xl">
              <CountUp value={5} suffix=" hrs" />
            </div>
            <div className="mt-2 text-muted">freed per week, net of review</div>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-[auto_1fr] items-center gap-x-8 gap-y-5">
          <span className="text-lg text-muted">Annual value at $40/hour</span>
          <div className="flex items-center gap-5">
            <GrowBar className="h-12 rounded-xl bg-mist" style={{ width: "78%" }} delay={0.2} />
            <span className="font-display text-2xl font-semibold">$10,400</span>
          </div>
          <span className="text-lg text-muted">After running costs</span>
          <div className="flex items-center gap-5">
            <GrowBar
              className="h-12 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue"
              style={{ width: "60%" }}
              delay={0.4}
              duration={1.3}
            />
            <span className="font-display text-2xl font-semibold text-brand-purple">$8,000</span>
          </div>
        </div>
        <p className="mt-8 font-mono text-sm text-subtle">Illustrative example · freed time is capacity, not cash · we run this with your real numbers, and if it doesn\u2019t pay, we say so</p>
      </Container>
    </section>
  );
}
