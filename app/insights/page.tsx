import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import FinalCTA from "@/components/sections/FinalCTA";
import { formatDate, posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical guidance on AI strategy, ROI, and implementation for small and growing businesses.",
  alternates: { canonical: "https://www.stait.ai/insights" },
};

export default function InsightsPage() {
  const [featured, ...rest] = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical AI, plainly explained."
        intro="Short, useful reads on AI strategy, ROI, and implementation for owners and leadership teams."
        glow="purple"
      />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <Reveal>
            <Link
              href={`/insights/${featured.slug}`}
              className="group relative grid overflow-hidden rounded-3xl bg-navy text-white lg:grid-cols-[1.4fr_1fr]"
            >
              <div className="relative p-10 sm:p-14">
                <div className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: featured.color }}>
                  Featured · {featured.tag}
                </div>
                <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist">{featured.excerpt}</p>
                <div className="mt-8 flex items-center gap-3 text-sm text-haze">
                  {formatDate(featured.date)} · {featured.readMinutes} min read
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
              <div className="relative hidden min-h-[320px] lg:block" aria-hidden>
                <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 60% 50%, ${featured.color}66, transparent 60%)` }} />
                <div className="absolute inset-y-0 left-0 w-1 bg-signature" />
              </div>
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delayMs={100 + i * 100}>
                <Link
                  href={`/insights/${p.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-white p-9 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(27,29,46,0.08)]"
                >
                  <div className="h-1.5 w-12 rounded-full" style={{ background: p.color }} />
                  <div className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-subtle">{p.tag}</div>
                  <h2 className="mt-3 font-display text-2xl font-semibold leading-snug">{p.title}</h2>
                  <p className="mt-3 text-lg leading-relaxed text-muted">{p.excerpt}</p>
                  <div className="mt-auto pt-8 text-sm text-subtle">
                    {formatDate(p.date)} · {p.readMinutes} min read
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
