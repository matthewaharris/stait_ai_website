import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { accentStyles, packages } from "@/lib/packages";
import { cn } from "@/lib/cn";

/** The four engagements as stepped cards. Heights rise left→right on large screens. */
export function PackageCardGrid() {
  const heights = ["xl:min-h-[500px]", "xl:min-h-[560px]", "xl:min-h-[620px]", "xl:min-h-[680px]"];
  return (
    <div className="grid items-end gap-6 md:grid-cols-2 xl:grid-cols-4">
      {packages.map((p, i) => {
        const a = accentStyles[p.accent];
        const dark = i === packages.length - 1;
        return (
          <Reveal key={p.slug} from="rise" delayMs={150 + i * 150} className="h-full">
            <Link
              href={`/services/${p.slug}`}
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition duration-300 hover:-translate-y-1 sm:p-10",
                heights[i],
                dark
                  ? "bg-navy text-white shadow-[0_30px_60px_rgba(17,19,39,0.25)]"
                  : "border border-line bg-white shadow-[0_20px_50px_rgba(27,29,46,0.06)] hover:shadow-[0_30px_60px_rgba(27,29,46,0.12)]",
              )}
            >
              <div className={cn("absolute inset-x-0 top-0 h-2", a.bar)} />
              {dark && (
                <div aria-hidden className="glow-purple pointer-events-none absolute -bottom-40 -right-40 h-[480px] w-[480px] rounded-full" />
              )}
              <span className={cn("relative font-mono text-sm uppercase tracking-[0.15em]", dark ? a.textOnDark : a.text)}>
                {p.step} · {p.stage}
              </span>
              <h3 className="relative mt-5 font-display text-3xl font-semibold leading-tight tracking-tight">{p.name}</h3>
              <p className={cn("relative mt-4 text-lg leading-relaxed", dark ? "text-mist" : "text-muted")}>{p.summary}</p>
              <ul className={cn("relative mt-6 space-y-2 text-[15px]", dark ? "text-mist" : "text-muted")}>
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", a.dot)} />
                    {h}
                  </li>
                ))}
              </ul>
              <div
                className={cn(
                  "relative mt-auto flex items-end justify-between border-t pt-6",
                  dark ? "border-navy-line" : "border-line",
                )}
              >
                <div>
                  <div className={cn("text-sm", dark ? "text-haze" : "text-subtle")}>{p.duration}</div>
                  <div className="font-display text-4xl font-semibold tracking-tight">{p.price}</div>
                </div>
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full transition group-hover:translate-x-1",
                    dark ? "bg-white text-navy" : "bg-paper text-ink",
                  )}
                >
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}

export default function PackageCards() {
  return (
    <section id="services" className="bg-paper py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>How we engage</Eyebrow>
            </Reveal>
            <Reveal delayMs={100}>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Four ways to work with us.
              </h2>
            </Reveal>
          </div>
          <Reveal delayMs={200}>
            <p className="max-w-sm text-lg text-muted">
              Start where you are. Part of your fee credits toward the next step when booked within 60 days.
            </p>
          </Reveal>
        </div>
        <div className="mt-16">
          <PackageCardGrid />
        </div>
      </Container>
    </section>
  );
}
