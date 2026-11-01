import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

/** Dark page header used on every inner page. */
export default function PageHero({
  eyebrow,
  title,
  intro,
  bar = "signature",
  glow = "purple",
  aside,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  bar?: "signature" | "blue" | "purple" | "violet";
  glow?: "purple" | "blue";
  aside?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden className={cn(`glow-${glow}`, "pointer-events-none absolute -right-64 -top-64 h-[880px] w-[880px] rounded-full")} />
      <Container className="relative pb-20 pt-16 sm:pb-24 sm:pt-24">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            <Reveal>
              <Eyebrow dark bar={bar}>
                {eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delayMs={100}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                {title}
              </h1>
            </Reveal>
            {intro && (
              <Reveal delayMs={200}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">{intro}</p>
              </Reveal>
            )}
            {children && (
              <Reveal delayMs={300} className="mt-10 flex flex-col gap-3 sm:flex-row">
                {children}
              </Reveal>
            )}
          </div>
          {aside && <Reveal delayMs={250}>{aside}</Reveal>}
        </div>
      </Container>
    </section>
  );
}
