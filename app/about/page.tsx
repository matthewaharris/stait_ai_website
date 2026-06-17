import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "stait.ai brings two decades of enterprise engineering and leadership experience — across sectors ranging from defense and utilities to business technology — to growing businesses adopting AI.",
  alternates: { canonical: "https://www.stait.ai/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Navbar />
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold text-indigo-700">Who&rsquo;s behind stait.ai</div>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">Enterprise rigor, without the enterprise drag</h1>
        </div>

        <div className="mt-8 max-w-3xl rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
            {/* Headshot */}
            <div className="shrink-0">
              <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-neutral-200 bg-white sm:h-32 sm:w-32">
                <Image
                  src="/matt-headshot.jpeg"
                  alt="Matt Harris, Founder of stait.ai"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="min-w-0">
              <div className="text-lg font-semibold text-neutral-900">Matt Harris</div>
              <div className="mt-0.5 text-sm text-neutral-500">Founder &amp; Principal</div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                AI is moving fast &mdash; new tools, new platforms, new possibilities every week. But for most
                small and growing businesses, it&rsquo;s hard to know where to start or who to trust. I built
                stait.ai to bridge that gap: bring two decades of enterprise engineering and leadership
                experience to SMBs and deliver turnkey AI solutions that actually work in production &mdash; not
                just in a demo.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Over 20+ years I&rsquo;ve built and scaled software teams across sectors ranging from defense and
                utilities to business technology. I&rsquo;ve seen what works at enterprise scale &mdash; and I know
                how to distill that into practical, right-sized implementation for growing businesses.
              </p>

              <ul className="mt-5 space-y-2">
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                  Two decades leading high-impact teams &mdash; building products, maintaining critical
                  infrastructure, exploring for natural resources, and supporting the U.S. military.
                </li>
              </ul>

              <p className="mt-4 text-sm text-neutral-600">
                BS Computer Science &middot; MBA &middot; Stanford Executive Program in Corporate Innovation
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/#contact">
            <Button size="lg">Book a strategy call</Button>
          </Link>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
