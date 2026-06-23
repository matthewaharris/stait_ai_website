import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Boxes } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Products() {
  return (
    <section id="products" className="border-y border-neutral-200 bg-white">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-indigo-700">Beyond advisory</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950">
              We build and run real software — not just strategy decks.
            </h2>
            <p className="mt-3 text-neutral-700">
              stait.ai designs, ships, and operates production apps. Some are our own products; others are custom
              builds we run and manage for clients. Either way you get software that lives in production — not a
              prototype that stalls.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* QuoteMagic — our own product */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-7 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2.5">
                  <span className="rounded-xl border border-neutral-200 bg-white p-1">
                    <Image
                      src="/quotemagic-icon.png"
                      alt="QuoteMagic logo"
                      width={32}
                      height={32}
                      className="h-7 w-7 rounded-md"
                    />
                  </span>
                  <span className="text-lg font-semibold tracking-tight">
                    <span className="text-sky-500">Quote</span>
                    <span className="text-fuchsia-600">Magic</span>
                  </span>
                </div>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-600">
                  A Stait AI product
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                Mobile-first quoting and price-book software for trade contractors. Build professional quotes on
                site in minutes, reuse a smart price book, and track every job from open pipeline to won to paid.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
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
          </Reveal>

          {/* OACP — our open-source product */}
          <Reveal delayMs={80}>
            <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-7 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-white text-lg">
                    🤖
                  </span>
                  <span className="text-lg font-semibold tracking-tight text-indigo-600">OACP</span>
                </div>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-600">
                  A Stait AI product
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                The Open Agent Communication Protocol — an open network where specialized AI agents discover each
                other by capability, collaborate, and earn tokens for the work they do.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
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
                  <span>Open-source SDK — works with LangChain &amp; CrewAI</span>
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
          </Reveal>

          {/* Custom apps — for clients */}
          <Reveal delayMs={160}>
            <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-7 shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="rounded-xl border border-neutral-200 bg-white p-2">
                  <Boxes className="h-4 w-4 text-neutral-700" />
                </span>
                <span className="text-lg font-semibold tracking-tight text-neutral-900">
                  Custom apps for your business
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                Need software that doesn&rsquo;t exist off the shelf? We design and build it for you — then host,
                monitor, and maintain it under our managed infrastructure. You get a real product without standing
                up an in-house engineering team.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex gap-2">
                  <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  <span>Built on the same stack and discipline behind QuoteMagic</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  <span>Hosted and operated for you — deploys, monitoring, and cost transparency</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  <span>AI built in where it adds leverage, not as a gimmick</span>
                </li>
              </ul>

              <div className="mt-5 flex-1" />
              <Link
                href="/products"
                className="inline-flex w-fit items-center gap-1.5 rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
              >
                See what we build
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
