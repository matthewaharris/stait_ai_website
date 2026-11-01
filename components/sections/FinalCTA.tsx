import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

const steps = [
  { n: "1", title: "Free 30-minute discovery call", text: "We learn your business and goals", ring: "border-brand-blue text-brand-blue" },
  { n: "2", title: "Your recommended starting point", text: "A short proposal with scope and fixed fee", ring: "border-brand-violet text-brand-violet" },
  { n: "3", title: "Kick off within two weeks", text: "On-site or remote, on your schedule", ring: "border-brand-blue text-brand-blue" },
];

export default function FinalCTA({
  title = (
    <>
      Let&rsquo;s put AI to <span className="text-sunset">work</span> for you.
    </>
  ),
}: {
  title?: React.ReactNode;
}) {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="glow-purple absolute -right-56 -top-52 h-[900px] w-[900px] rounded-full" />
        <div className="glow-blue absolute -bottom-[500px] left-72 h-[900px] w-[900px] rounded-full" />
      </div>
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Reveal>
            <Eyebrow dark>Next steps</Eyebrow>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              {title}
            </h2>
          </Reveal>
          <ol className="mt-12">
            {steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.n}
                from="left"
                delayMs={250 + i * 150}
                className="flex items-center gap-6 border-b border-navy-line py-5 last:border-b-0"
              >
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] font-mono ${s.ring}`}>
                  {s.n}
                </span>
                <div>
                  <div className="font-display text-xl font-semibold sm:text-2xl">{s.title}</div>
                  <div className="mt-1 text-haze">{s.text}</div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
        <Reveal from="scale" delayMs={200} className="flex flex-col items-center text-center">
          <Image
            src="/brand/stait-mark.png"
            alt=""
            width={355}
            height={395}
            className="w-48 drop-shadow-[0_0_50px_rgba(155,123,255,0.45)] sm:w-60"
          />
          <Button href="/contact" size="lg" className="mt-12">
            Book a free call
          </Button>
          <a href={`mailto:${site.email}`} className="mt-5 text-lg text-haze transition hover:text-white">
            {site.email}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
