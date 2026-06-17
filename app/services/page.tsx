import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "A three-step ladder for growing businesses: an AI Foundations Workshop to learn, an AI Opportunity Deep Dive to plan, and an Implementation Partner to build and operate production systems.",
  alternates: { canonical: "https://www.stait.ai/services" },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Navbar />
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
          <p className="mt-4 text-lg text-neutral-700">
            A ladder from low commitment to high. Learn what AI means for your business, plan around your real
            workflows, then build and operate production systems — start anywhere, and each step stands on its own.
          </p>
        </div>

        {/* ---------- LEARN ---------- */}
        <div className="mt-12 flex items-center gap-3">
          <span className="text-sm font-semibold text-indigo-700">01 · Learn</span>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="mt-6 grid gap-6">
          <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">AI Foundations Workshop</h2>
            <p className="mt-1 text-sm text-neutral-600">$500 / session • half-day • on-site or remote</p>
            <p className="mt-3 text-sm text-neutral-700">
              A guided session for your leadership and the people closest to the work — what AI tools exist today, how a
              business your size should approach adoption, and what to ignore.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Plain-English map of the AI landscape relevant to your business</li>
              <li>• High-level AI readiness snapshot</li>
              <li>• A prioritized short list of safe, fast next steps</li>
            </ul>
          </section>
        </div>

        {/* ---------- PLAN ---------- */}
        <div className="mt-12 flex items-center gap-3">
          <span className="text-sm font-semibold text-indigo-700">02 · Plan</span>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="mt-6 grid gap-6">
          <section className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-indigo-950">AI Opportunity Deep Dive</h2>
            <p className="mt-1 text-sm text-indigo-900/90">$1,500–$2,500 • Boise cohort $1,250 limited • 1–2 days</p>
            <p className="mt-3 text-sm leading-relaxed text-indigo-950/90">
              We map your real workflows, surface the highest-ROI opportunities, and identify the people inside your org
              who can become internal AI champions — then train those champions so capability stays in the building.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-indigo-900/90">
              <li>• Workflow and bottleneck audit with opportunity map + ROI estimates</li>
              <li>• Named internal AI champions, trained to lead adoption</li>
              <li>• Governance and risk baseline</li>
              <li>• Prioritized 90-day implementation roadmap</li>
            </ul>
          </section>
        </div>

        {/* ---------- BUILD & OPERATE ---------- */}
        <div className="mt-12 flex items-center gap-3">
          <span className="text-sm font-semibold text-indigo-700">03 · Build &amp; Operate</span>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>
        <p className="mt-4 max-w-3xl text-sm text-neutral-700">
          As your Implementation Partner we design, build, and run the actual solutions — on a one-time or ongoing
          basis. These are the concrete ways we build, matched to where you are.
        </p>
        <div className="mt-6 grid gap-6">
          <section id="managed-infrastructure" className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Managed AI Infrastructure &amp; Deployment</h2>
            <p className="mt-1 text-sm text-neutral-600">$1,500–$5,000 / month</p>
            <p className="mt-3 text-sm text-neutral-700">
              Managed deployments, monitoring, and cost transparency across your stack.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Centralized deployment dashboard (status, deploy history, alerts)</li>
              <li>• Managed hosting across providers (Vercel, Render, Railway, Supabase, Clerk, etc.)</li>
              <li>• Domain + SSL management support</li>
              <li>• Cost tracking + monthly billing summary</li>
              <li>• Baseline monitoring + incident visibility</li>
            </ul>
            <p className="mt-4 text-sm text-neutral-700">
              Flat monthly management fee + pass-through platform usage. Overages billed monthly based on actual
              provider costs.
            </p>
            <p className="mt-3 text-sm text-neutral-700">
              We can host apps under clientname.stait.app (great for pilots/staging/internal tools) and map to your
              custom domain for production.
            </p>
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
