"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import HeroNetwork from "@/components/sections/HeroNetwork";
import { track } from "@/lib/track";

const ease: [number, number, number, number] = [0.2, 0.75, 0.25, 1];
const up = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease },
});

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="glow-purple absolute -right-56 -top-40 h-[900px] w-[900px] rounded-full" />
        <div className="glow-blue absolute -bottom-96 right-32 h-[760px] w-[760px] rounded-full" />
        <div className="glow-blue absolute -bottom-[420px] -left-72 h-[760px] w-[760px] rounded-full" />
      </div>

      <Container className="relative grid items-center gap-12 pb-16 pt-16 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:pb-24">
        <div>
          <motion.div {...up(0.1)}>
            <Eyebrow dark>AI strategy &amp; implementation</Eyebrow>
          </motion.div>
          <motion.h1
            {...up(0.2)}
            className="mt-7 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl xl:text-[84px]"
          >
            Put AI to <span className="text-sunset">work</span> in your business.
          </motion.h1>
          <motion.p {...up(0.35)} className="mt-7 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
            Practical AI training, strategy, and custom implementation for small and growing businesses. Senior
            expertise, hands-on delivery, fixed fees.
          </motion.p>
          <motion.div {...up(0.5)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg" onClick={() => track("cta_click", { location: "hero", cta: "book_call" })}>
              Book a free call
            </Button>
            <Button href="/services" size="lg" variant="outline-light">
              See our services
            </Button>
          </motion.div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[580px]">
          <HeroNetwork className="absolute inset-0 h-full w-full" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease }}
          >
            <Image
              src="/brand/stait-mark.png"
              alt=""
              width={355}
              height={395}
              priority
              className="w-[32%] drop-shadow-[0_0_50px_rgba(155,123,255,0.45)]"
            />
          </motion.div>
        </div>
      </Container>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-4 border-t border-navy-line py-7"
        >
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm uppercase tracking-[0.2em]">
            <span className="text-haze">Learn</span>
            <span className="text-navy-line">/</span>
            <span className="text-haze">Plan</span>
            <span className="text-navy-line">/</span>
            <span className="text-haze">Build</span>
            <span className="text-navy-line">/</span>
            <span className="text-haze">Operate</span>
          </div>
          <span className="text-sm text-haze">Boise-based · Serving clients nationwide</span>
        </motion.div>
      </Container>
    </section>
  );
}
