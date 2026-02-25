import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import AIReadinessForm from "@/components/forms/AIReadinessForm";

export const metadata: Metadata = {
  title: "AI Readiness Assessment",
  description:
    "Take the 10-question AI readiness assessment to get a score tier and next-step recommendations for implementation.",
  alternates: { canonical: "https://www.stait.ai/ai-readiness" },
};

export default function AIReadinessPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Navbar />
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">AI Readiness Assessment</h1>
          <p className="mt-4 text-lg text-neutral-700">
            Answer 10 quick yes/no questions to see where your organization stands and what to prioritize next.
          </p>
        </div>

        <div className="mt-10">
          <AIReadinessForm />
        </div>
      </Container>
      <Footer />
    </main>
  );
}
