import type { Metadata } from "next";
import Script from "next/script";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free Call",
  description:
    "Book a free 30-minute discovery call with Stait AI. We'll learn your business, identify strong AI use cases, and recommend the right starting point.",
  alternates: { canonical: "https://www.stait.ai/contact" },
};

const cover = [
  "Your top bottlenecks: operations, documents, customer response",
  "One or two AI use cases with real ROI potential",
  "Risk, privacy, and data considerations",
  "The right starting point and a fixed-fee proposal",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a free call"
        title={
          <>
            Let&rsquo;s find your best <span className="text-brand-violet">AI opportunity</span>.
          </>
        }
        intro="A free, no-obligation 30-minute call. You'll leave with a clear view of where AI can help and what it would take."
      />

      <section id="schedule" className="bg-paper py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>What we&rsquo;ll cover</Eyebrow>
            </Reveal>
            <ul className="mt-8">
              {cover.map((c, i) => (
                <Reveal as="li" key={c} from="left" delayMs={100 + i * 100} className="flex gap-5 border-b border-line py-5 text-lg first:border-t">
                  <span className="font-semibold text-brand-purple">✓</span>
                  {c}
                </Reveal>
              ))}
            </ul>
            <Reveal delayMs={500} className="mt-12 space-y-2 text-lg">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">Prefer email?</div>
              <a href={`mailto:${site.email}`} className="font-display text-2xl font-semibold text-brand-purple hover:text-brand-sky">
                {site.email}
              </a>
              <p className="text-muted">Boise-based · Serving clients nationwide</p>
            </Reveal>
          </div>
          <Reveal delayMs={150}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Pick a time</Eyebrow>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Schedule your call directly.</h2>
          </Reveal>
          <Reveal delayMs={200} className="mt-10 overflow-hidden rounded-3xl border border-line bg-paper p-2 sm:p-4">
            <div className="calendly-inline-widget" data-url={site.calendlyUrl} style={{ minWidth: "320px", height: "720px" }} />
          </Reveal>
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        </Container>
      </section>
    </>
  );
}
