import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI Readiness & Opportunity Assessment, AI Jumpstart pilots, Company Knowledge AI, and AI Ops Retainer services for growing businesses.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Navbar />
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
          <p className="mt-4 text-lg text-neutral-700">
            Start small, prove ROI, then scale. Practical implementation with enterprise-grade habits.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <section className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-indigo-950">AI Readiness &amp; Opportunity Assessment</h2>
            <p className="mt-1 text-sm text-indigo-900/90">$1,500–$2,500 • Boise cohort $1,250 limited • 1–2 weeks</p>
            <ul className="mt-4 space-y-2 text-sm text-indigo-900/90">
              <li>• Workflow and bottleneck audit</li>
              <li>• Opportunity map with ROI estimates</li>
              <li>• Governance and risk baseline</li>
              <li>• Prioritized implementation roadmap</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">AI Jumpstart</h2>
            <p className="mt-1 text-sm text-neutral-600">6–8 weeks • $12k–$25k</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Readiness assessment + opportunity mapping</li>
              <li>• ROI model and measurable success criteria</li>
              <li>• One production-grade pilot</li>
              <li>• Governance baseline and 90-day roadmap</li>
            </ul>
            <p className="mt-4 text-sm text-neutral-700">
              Outcome: operational efficiency gains now with a strategic foundation for future AI capability.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Company Knowledge AI</h2>
            <p className="mt-1 text-sm text-neutral-600">$15k–$45k</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Secure assistant / RAG for internal knowledge</li>
              <li>• Faster answers for staff and improved operational throughput</li>
              <li>• Permissions, citations, and auditability</li>
              <li>• Expandable architecture for additional workflows</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">AI Ops Retainer</h2>
            <p className="mt-1 text-sm text-neutral-600">$2k–$6k/mo</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Monitoring for quality, reliability, and usage</li>
              <li>• Continuous improvement and optimization backlog</li>
              <li>• Governance updates and performance tuning</li>
              <li>• Quarterly strategic planning and capability expansion</li>
            </ul>
          </section>
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
