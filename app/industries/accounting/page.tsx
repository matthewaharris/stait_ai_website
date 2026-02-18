import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function AccountingIndustryPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Navbar />
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">AI for Accounting Firms</h1>
          <p className="mt-4 text-lg text-neutral-700">
            Reduce administrative burden. Improve client response. Scale intelligently.
          </p>
        </div>

        <section className="mt-10 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Common challenges</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>• Seasonal workload spikes during filing periods</li>
            <li>• Manual intake and document routing workflows</li>
            <li>• Compliance and privacy requirements</li>
            <li>• Knowledge bottlenecks concentrated in senior staff</li>
            <li>• Burnout from repetitive, high-volume admin work</li>
          </ul>
        </section>

        <section className="mt-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Where AI delivers value</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li>• Intake automation and document classification</li>
            <li>• Summarization for faster internal review</li>
            <li>• Internal knowledge search for policy/tax guidance</li>
            <li>• Draft client responses and standardized follow-ups</li>
            <li>• Better throughput without sacrificing compliance discipline</li>
          </ul>
        </section>

        <section className="mt-6 rounded-3xl border border-indigo-200 bg-indigo-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-indigo-950">Example ROI model</h2>
          <p className="mt-4 text-sm leading-relaxed text-indigo-950/90">
            If a 25-person firm reduces 6 hours per week of manual document review across 10 senior staff, that’s
            3,000+ hours annually. At $125/hour billable equivalent, that’s ~$375,000 in potential productivity lift.
          </p>
        </section>

        <div className="mt-10">
          <Link href="/#contact">
            <Button size="lg">Start with AI Jumpstart</Button>
          </Link>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
