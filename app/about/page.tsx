import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import PageHero from "@/components/sections/PageHero";
import { Comparison } from "@/components/sections/Trust";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Stait AI brings two decades of enterprise engineering and leadership experience to small and growing businesses adopting AI.",
  alternates: { canonical: "https://www.stait.ai/about" },
};

const principles = [
  { title: "Business first", text: "We start with your workflows and numbers, not with tools.", color: "border-brand-purple" },
  { title: "Hands-on", text: "The people who scope the work are the people who build it.", color: "border-brand-blue" },
  { title: "Right-sized", text: "Enterprise discipline, scaled to a growing business and a fixed fee.", color: "border-brand-purple" },
  { title: "Built to last", text: "Training, documentation, and governance so results stick after we leave.", color: "border-brand-blue" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Stait AI"
        title={
          <>
            Enterprise rigor, without the <span className="text-brand-violet">enterprise drag</span>.
          </>
        }
        intro="Stait AI is a hands-on AI consultancy for small and growing businesses, based in Boise and serving clients nationwide."
      />

      <section className="bg-white py-24 sm:py-32">
        <Container className="grid items-start gap-14 lg:grid-cols-[auto_1fr] lg:gap-20">
          <Reveal from="scale" className="relative mx-auto w-72 sm:w-80">
            <div className="absolute -inset-3 rounded-[36px] bg-signature opacity-90 blur-[2px]" />
            <div className="relative overflow-hidden rounded-[30px] border-4 border-white bg-paper">
              <Image src="/matt-headshot.jpeg" alt="Matt Harris, founder of Stait AI" width={640} height={640} className="aspect-square w-full object-cover" />
            </div>
          </Reveal>
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Founder &amp; Principal</Eyebrow>
            </Reveal>
            <Reveal delayMs={100}>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Matt Harris</h2>
            </Reveal>
            <Reveal delayMs={200} className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                AI is moving fast, with new tools, new platforms, and new possibilities every week. But for most small and
                growing businesses, it&rsquo;s hard to know where to start or who to trust. I built Stait AI to bridge that
                gap: bring two decades of enterprise engineering and leadership experience to SMBs and deliver turnkey AI
                solutions that actually work in production, not just in a demo.
              </p>
              <p>
                Over 20+ years I&rsquo;ve built and scaled software teams across sectors ranging from defense and utilities
                to business technology. I&rsquo;ve seen what works at enterprise scale, and I know how to distill that into
                practical, right-sized implementation for growing businesses.
              </p>
              <p>
                Two decades leading high-impact teams: building products, maintaining critical infrastructure, exploring
                for natural resources, and supporting the U.S. military.
              </p>
            </Reveal>
            <Reveal delayMs={300} className="mt-10 flex flex-wrap gap-3">
              {["BS Computer Science", "MBA", "Stanford Executive Program in Corporate Innovation"].map((c) => (
                <span key={c} className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium">
                  {c}
                </span>
              ))}
            </Reveal>
            <Reveal delayMs={400} className="mt-10">
              <Button href="/contact" size="lg">
                Book a free call
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Four principles behind every engagement.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.title} delayMs={150 + i * 120} className={`border-t-[6px] pt-7 ${p.color}`}>
                <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Comparison />
      <FinalCTA />
    </>
  );
}
