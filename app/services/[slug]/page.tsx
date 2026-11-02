import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import GrowBar from "@/components/ui/GrowBar";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";
import { accentStyles, getPackage, packages, type Package } from "@/lib/packages";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPackage(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.duration}, ${p.price}`,
    description: `${p.description} ${p.summary}`,
    alternates: { canonical: `https://www.stait.ai/services/${p.slug}` },
  };
}

const heroStyle: Record<Package["accent"], { bar: "blue" | "violet"; glow: "blue" | "purple" }> = {
  blue: { bar: "blue", glow: "blue" },
  purple: { bar: "violet", glow: "purple" },
  violet: { bar: "violet", glow: "purple" },
};

function DayTimeline({ p }: { p: Package }) {
  return (
    <div className="relative pl-12">
      <GrowBar
        axis="y"
        className="absolute bottom-6 left-[11px] top-6 w-[3px] rounded-full bg-gradient-to-b from-brand-blue to-brand-purple"
        duration={1.2}
      />
      {p.schedule.map((s, i) => (
        <Reveal key={s.when} from="left" delayMs={150 + i * 120} className="relative py-5">
          <span
            className={cn(
              "absolute -left-12 top-7 h-6 w-6 rounded-full border-4 border-brand-blue",
              i === p.schedule.length - 1 ? "bg-brand-purple border-brand-purple" : "bg-white",
            )}
          />
          <div className="font-mono text-sm text-brand-sky">{s.when}</div>
          <div className="mt-1 font-display text-2xl font-semibold">{s.title}</div>
          <div className="mt-1 text-lg text-muted">{s.detail.join(" · ")}</div>
        </Reveal>
      ))}
    </div>
  );
}

function DayCards({ p }: { p: Package }) {
  const colors = [
    { text: "text-brand-sky", bar: "bg-brand-blue" },
    { text: "text-brand-purple", bar: "bg-brand-violet" },
    { text: "text-brand-sky", bar: "bg-brand-blue" },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {p.schedule.map((s, i) => (
        <Reveal key={s.when} delayMs={150 + i * 150} className="rounded-3xl border border-line bg-white p-8 shadow-[0_20px_50px_rgba(27,29,46,0.06)]">
          <div className="flex items-baseline justify-between gap-4">
            <span className={cn("shrink-0 whitespace-nowrap font-mono text-sm", colors[i % 3].text)}>{s.when}</span>
            <span className="text-right font-display text-2xl font-semibold">{s.title}</span>
          </div>
          <GrowBar className={cn("mt-5 h-1 rounded-full", colors[i % 3].bar)} delay={0.3 + i * 0.15} />
          <ul className="mt-6 space-y-3 text-lg">
            {s.detail.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

function Gantt({ p }: { p: Package }) {
  const bars = p.timeline ?? [];
  return (
    <Reveal className="overflow-x-auto rounded-3xl bg-navy p-8 text-white sm:p-10">
      <div className="min-w-[720px]">
        <div className="grid grid-cols-[220px_repeat(6,1fr)] border-b border-navy-line pb-4 font-mono text-sm text-subtle">
          <span />
          {[1, 2, 3, 4, 5, 6].map((w) => (
            <span key={w}>Wk {w}</span>
          ))}
        </div>
        {bars.map((b, i) => (
          <div key={b.label} className="grid grid-cols-[220px_1fr] items-center py-3">
            <span className="text-[17px]">{b.label}</span>
            <div className="relative h-9">
              <GrowBar
                className="absolute h-full rounded-full"
                style={{ left: `${(b.start / 6) * 100}%`, width: `${((b.end - b.start) / 6) * 100}%`, background: b.color }}
                delay={0.2 + i * 0.15}
                duration={0.9}
              />
            </div>
          </div>
        ))}
        <div className="grid grid-cols-[220px_1fr] items-center py-3">
          <span className="text-[17px] text-haze">Weekly check-ins</span>
          <div className="relative flex h-9 items-center">
            <div className="absolute inset-x-0 h-[3px] bg-navy-line" />
            <div className="relative grid w-full grid-cols-6">
              {[0, 1, 2, 3, 4, 5].map((w) => (
                <span key={w} className="h-4 w-4 rounded-full bg-white" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPackage(slug);
  if (!p) notFound();

  const a = accentStyles[p.accent];
  const hs = heroStyle[p.accent];
  const idx = packages.findIndex((x) => x.slug === p.slug);
  const next = packages[idx + 1];

  return (
    <>
      <PageHero
        eyebrow={`${p.step} · ${p.stage}`}
        bar={hs.bar}
        glow={hs.glow}
        title={p.name}
        intro={p.description}
        aside={
          <div className="lg:text-right">
            <div className="font-display text-6xl font-semibold tracking-tight sm:text-7xl">{p.price}</div>
            <div className="mt-2 font-mono text-sm uppercase tracking-[0.15em] text-haze">{p.duration} · fixed fee</div>
            <div className="mt-1 text-sm text-haze">{p.audience}</div>
          </div>
        }
      >
        <Button href="/contact" size="lg">
          Book a free call
        </Button>
        <Button href="/services" size="lg" variant="outline-light">
          Compare services
        </Button>
      </PageHero>

      <section className="bg-white py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Ideal for</Eyebrow>
            </Reveal>
            <ul className="mt-8">
              {p.idealFor.map((t, i) => (
                <Reveal as="li" key={t} from="left" delayMs={100 + i * 100} className="flex gap-5 border-b border-line py-5 text-xl first:border-t">
                  <span className={cn("font-mono text-sm", a.text)}>0{i + 1}</span>
                  {t}
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delayMs={200} className="relative overflow-hidden rounded-3xl bg-navy p-10 text-white">
            <div aria-hidden className="glow-purple pointer-events-none absolute -right-36 -top-36 h-[420px] w-[420px] rounded-full" />
            <div className={cn("relative font-mono text-xs uppercase tracking-[0.2em]", a.textOnDark)}>The outcome</div>
            <p className="relative mt-5 font-display text-3xl font-medium leading-snug tracking-tight">{p.outcome}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <Reveal>
            <Eyebrow bar={hs.bar}>How it works</Eyebrow>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{p.scheduleTitle}</h2>
          </Reveal>
          <div className="mt-14">
            {p.slug === "ai-foundations-workshop" && (
              <div className="max-w-3xl">
                <DayTimeline p={p} />
              </div>
            )}
            {(p.slug === "ai-strategy-blueprint" || p.slug === "ai-workflow-pilot") && <DayCards p={p} />}
            {p.slug === "ai-transformation-program" && (
              <div className="space-y-10">
                <Gantt p={p} />
                <DayCards p={p} />
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <Eyebrow>What you get</Eyebrow>
            </Reveal>
            <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
              {p.deliverables.map((d, i) => (
                <Reveal key={d} delayMs={i * 60} className="flex gap-4 border-t border-line py-5 text-lg">
                  <span className={cn("font-semibold", a.text)}>✓</span>
                  {d}
                </Reveal>
              ))}
            </div>
            {p.extras.length > 0 && (
              <Reveal delayMs={200} className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-lg text-muted">
                {p.extras.map((x) => (
                  <span key={x}>
                    <span className="font-semibold text-brand-purple">+</span> {x}
                  </span>
                ))}
              </Reveal>
            )}
          </div>

          <Reveal delayMs={200}>
            <div className="sticky top-28 rounded-3xl border-2 border-brand-purple bg-white p-9 shadow-[0_30px_60px_rgba(109,75,201,0.14)]">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-brand-purple">{p.shortName}</div>
              <div className="mt-4 font-display text-6xl font-semibold tracking-tight">{p.price}</div>
              <div className="mt-2 text-muted">
                {p.duration} · {p.audience}
              </div>
              <Button href="/contact" size="lg" className="mt-8 w-full">
                Book a free call
              </Button>
              <p className="mt-4 text-center text-sm text-subtle">30 minutes · no obligation</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {next && (
        <section className="border-t border-line bg-paper py-16">
          <Container>
            <Link
              href={`/services/${next.slug}`}
              className="group flex flex-col justify-between gap-6 rounded-3xl border border-line bg-white p-8 transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(27,29,46,0.08)] sm:flex-row sm:items-center sm:p-10"
            >
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">Next step up</div>
                <div className="mt-2 font-display text-3xl font-semibold">{next.name}</div>
                <div className="mt-1 text-lg text-muted">{next.summary}</div>
              </div>
              <span className="flex items-center gap-4">
                <span className="font-display text-3xl font-semibold">{next.price}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white transition group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </span>
            </Link>
          </Container>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
