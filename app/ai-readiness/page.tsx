import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import AIReadinessForm from "@/components/forms/AIReadinessForm";

export const metadata: Metadata = {
  title: "AI Readiness Quiz",
  description:
    "Answer 10 quick yes/no questions to see where your business stands on AI readiness and what to prioritize next.",
  alternates: { canonical: "https://www.stait.ai/ai-readiness" },
};

export default function AIReadinessPage() {
  return (
    <>
      <PageHero
        eyebrow="AI readiness quiz"
        title="How ready is your business for AI?"
        intro="Answer 10 quick yes/no questions to see where you stand and what to prioritize next. Takes about two minutes."
        bar="blue"
        glow="blue"
      />
      <section className="bg-paper py-20 sm:py-24">
        <Container className="max-w-3xl">
          <AIReadinessForm />
        </Container>
      </section>
    </>
  );
}
