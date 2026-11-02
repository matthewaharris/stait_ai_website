import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

const rows: { label: string; firm: string; freelance: string; stait: string }[] = [
  { label: "Senior expertise", firm: "Yes", freelance: "Varies", stait: "20+ years" },
  { label: "Builds working AI tools", firm: "Often hands off", freelance: "Yes", stait: "Hands-on" },
  { label: "Strategy tied to ROI", firm: "Yes", freelance: "Rarely", stait: "Built in" },
  { label: "Small-business pricing", firm: "Enterprise rates", freelance: "Yes", stait: "Fixed fees" },
  { label: "Training & support", firm: "Extra cost", freelance: "Limited", stait: "Included" },
];

export function Comparison() {
  return (
    <section className="bg-navy py-24 text-white sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow dark>Why Stait AI</Eyebrow>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Big-firm expertise, without the big-firm price.
          </h2>
        </Reveal>
        <Reveal delayMs={200} className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left">
            <thead>
              <tr className="font-mono text-xs uppercase tracking-[0.15em] text-haze">
                <th className="w-[34%] pb-5 font-normal" />
                <th className="px-5 pb-5 font-normal">Large firm</th>
                <th className="px-5 pb-5 font-normal">Freelance / DIY</th>
                <th className="rounded-t-2xl bg-gradient-to-b from-[#2a2255] to-[#1f1b42] px-5 py-5">
                  <span className="flex items-center gap-2">
                    <Image src="/brand/stait-mark.png" alt="" width={355} height={395} className="h-7 w-auto" />
                    <Image src="/brand/stait-word-white.png" alt="Stait AI" width={360} height={130} className="h-5 w-auto" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {rows.map((r, i) => (
                <tr key={r.label}>
                  <td className="border-t border-navy-line py-5">{r.label}</td>
                  <td className="border-t border-navy-line px-5 py-5 text-mist">{r.firm}</td>
                  <td className="border-t border-navy-line px-5 py-5 text-subtle">{r.freelance}</td>
                  <td
                    className={`border-t border-[#3b3470] bg-[#1f1b42] px-5 py-5 font-semibold text-brand-violet ${
                      i === rows.length - 1 ? "rounded-b-2xl" : ""
                    }`}
                  >
                    ✓ {r.stait}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}

const pillars = [
  { title: "Your data stays yours", text: "Private, permissioned tools. Your data is never used to train public models.", color: "border-brand-purple" },
  { title: "People stay in control", text: "Human review on the decisions that matter.", color: "border-brand-blue" },
  { title: "Clear rules", text: "A written AI usage policy your whole team understands.", color: "border-brand-purple" },
  { title: "Measured results", text: "We track time saved, quality, and cost, so you see the return.", color: "border-brand-blue" },
];

export function Responsible() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Responsible by design</Eyebrow>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Safe, secure, and measured from day one.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delayMs={150 + i * 120} className={`border-t-[6px] pt-7 ${p.color}`}>
              <h3 className="font-display text-2xl font-semibold leading-tight">{p.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Founder() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-[auto_1fr] lg:gap-20">
        <Reveal from="scale" className="relative mx-auto w-64 sm:w-72">
          <div className="absolute -inset-3 rounded-[36px] bg-signature opacity-90 blur-[2px]" />
          <div className="relative overflow-hidden rounded-[30px] border-4 border-white bg-paper">
            <Image
              src="/matt-headshot.jpeg"
              alt="Matt Harris, founder of Stait AI"
              width={576}
              height={576}
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              Senior AI expertise, sized for your business.
            </h2>
          </Reveal>
          <Reveal delayMs={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Stait AI was founded by Matt Harris, who has spent more than 20 years building and scaling software teams
              across sectors ranging from defense and utilities to business technology. Every engagement is led by
              senior people who design, build, and launch the work themselves.
            </p>
          </Reveal>
          <Reveal delayMs={300} className="mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-8">
            <div>
              <div className="font-display text-4xl font-semibold text-brand-purple">20+</div>
              <div className="mt-1 text-sm text-muted">years leading engineering teams</div>
            </div>
            <div>
              <div className="font-display text-4xl font-semibold text-brand-purple">CS · MBA</div>
              <div className="mt-1 text-sm text-muted">technical and business depth</div>
            </div>
            <div>
              <div className="font-display text-4xl font-semibold text-brand-purple">Stanford</div>
              <div className="mt-1 text-sm text-muted">Executive Program in Corporate Innovation</div>
            </div>
          </Reveal>
          <Reveal delayMs={400}>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-purple hover:text-brand-sky">
              More about us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function OacpMark({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`flex shrink-0 items-center justify-center rounded-2xl bg-navy font-mono text-sm font-medium tracking-tight text-white ring-1 ring-line ${className}`}
      style={{ backgroundImage: "radial-gradient(circle at 30% 25%, rgba(155,123,255,0.55), transparent 60%), radial-gradient(circle at 75% 80%, rgba(30,165,227,0.45), transparent 60%)" }}
    >
      OACP
    </span>
  );
}

const products = [
  {
    name: "QuoteMagic",
    text: "Mobile-first quoting and price-book software for trade contractors.",
    href: "/products/quotemagic",
    icon: <Image src="/quotemagic-icon.png" alt="" width={56} height={56} className="h-14 w-14 shrink-0 rounded-2xl border border-line bg-white p-1.5" />,
  },
  {
    name: "OACP",
    text: "An open network where AI agents discover each other, collaborate, and earn for completed work.",
    href: "/products/oacp",
    icon: <OacpMark />,
  },
];

export function ProductsStrip() {
  return (
    <section className="border-t border-line bg-paper py-14">
      <Container>
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">We build our own software too</div>
        </Reveal>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delayMs={100 + i * 120}>
              <Link
                href={p.href}
                className="group flex h-full items-center gap-5 rounded-3xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(27,29,46,0.08)]"
              >
                {p.icon}
                <div className="min-w-0 flex-1">
                  <div className="font-display text-lg font-semibold">{p.name}</div>
                  <p className="mt-0.5 text-[15px] leading-snug text-muted">{p.text}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-purple transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
