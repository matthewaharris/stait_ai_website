import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Boxes, Rocket, ServerCog } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Products",
  description:
    "stait.ai builds, deploys, and operates production software — including our own products QuoteMagic and OACP, and custom apps we build and manage for clients.",
  alternates: { canonical: "https://www.stait.ai/products" },
};

const buildSteps = [
  {
    icon: Rocket,
    title: "We build it",
    body: "Design and engineering with enterprise-grade habits — security, observability, and AI where it adds real leverage.",
  },
  {
    icon: ServerCog,
    title: "We run it",
    body: "Hosting, deploys, monitoring, and cost transparency under our managed infrastructure, so it stays reliable in production.",
  },
  {
    icon: Boxes,
    title: "You own the outcome",
    body: "A product working in your business — without hiring and managing an in-house engineering team.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Navbar />
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold text-indigo-700">Products</div>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">Software we build, deploy, and run</h1>
          <p className="mt-4 text-lg text-neutral-700">
            stait.ai isn&rsquo;t only advisory. We ship and operate real production software — our own products, and
            custom apps we build and manage for clients. AI strategy and implementation are how we think; working
            software is what we deliver.
          </p>
        </div>

        {/* ---------- OUR PRODUCTS ---------- */}
        <div className="mt-12 flex items-center gap-3">
          <span className="text-sm font-semibold text-indigo-700">Our products</span>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* QuoteMagic */}
          <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-3">
                <span className="rounded-xl border border-neutral-200 bg-white p-1">
                  <Image
                    src="/quotemagic-icon.png"
                    alt="QuoteMagic logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-md"
                  />
                </span>
                <span className="text-2xl font-semibold tracking-tight">
                  <span className="text-sky-500">Quote</span>
                  <span className="text-fuchsia-600">Magic</span>
                </span>
              </div>
              <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-600">
                Built &amp; operated by Stait AI
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
              Mobile-first quoting and price-book software for trade contractors. Field teams build professional
              quotes in minutes, reuse a smart price book for accurate pricing, and track every job from open pipeline
              to won to paid — all from their phone.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                <span>Fast, mobile-first quoting built for the field</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                <span>Reusable price book for consistent, accurate pricing</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                <span>Pipeline tracking from open to won to paid</span>
              </li>
            </ul>

            <div className="mt-5 flex-1" />
            <a
              href="https://quotemagic.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50"
            >
              Visit QuoteMagic
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* OACP */}
          <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white text-2xl">
                  🤖
                </span>
                <span className="text-2xl font-semibold tracking-tight text-indigo-600">OACP</span>
              </div>
              <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-600">
                Open source · by Stait AI
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
              The Open Agent Communication Protocol — an open network where specialized AI agents register what they
              do, discover each other by capability, and earn tokens for completed work. Each agent brings its own
              model; OACP gives it an identity and a wallet.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                <span>Capability discovery + cryptographic agent identity</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                <span>Token economy — agents earn for real work</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                <span>Drop-in SDK (npm / pip), works with LangChain &amp; CrewAI</span>
              </li>
            </ul>

            <div className="mt-5 flex-1" />
            <a
              href="https://www.oacp-agora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50"
            >
              Visit OACP
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* ---------- CUSTOM APPS ---------- */}
        <div className="mt-12 flex items-center gap-3">
          <span className="text-sm font-semibold text-indigo-700">Custom apps for your business</span>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>

        <p className="mt-4 max-w-3xl text-neutral-700">
          When the software you need doesn&rsquo;t exist off the shelf, we build it for you — and then keep it
          running. It&rsquo;s the same team, stack, and discipline behind QuoteMagic, pointed at your problem.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {buildSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-neutral-200 bg-white p-2">
                    <Icon className="h-4 w-4 text-neutral-700" />
                  </div>
                  <div className="text-sm font-semibold text-neutral-900">{step.title}</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{step.body}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-6 max-w-3xl text-sm text-neutral-600">
          Custom builds pair naturally with our{" "}
          <Link href="/services" className="font-medium text-indigo-700 underline-offset-2 hover:underline">
            Implementation Partner
          </Link>{" "}
          engagements and{" "}
          <Link href="/services#managed-infrastructure" className="font-medium text-indigo-700 underline-offset-2 hover:underline">
            Managed AI Infrastructure
          </Link>{" "}
          — build and operate, under one roof.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/#contact">
            <Button size="lg">Book a strategy call</Button>
          </Link>
          <a href="https://quotemagic.app" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              See QuoteMagic live
            </Button>
          </a>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
