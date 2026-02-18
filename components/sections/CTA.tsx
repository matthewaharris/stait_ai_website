import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-140px] h-[380px] w-[780px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-100 via-indigo-100 to-emerald-100 blur-3xl opacity-80" />
      </div>

      <Container className="relative py-16 sm:py-20">
        <Reveal>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-semibold tracking-tight">Ready to find your highest-ROI AI pilot?</h2>
                <p className="mt-4 text-neutral-700">
                  Book a short call. We’ll identify 1–2 strong use cases, estimate ROI, and outline a pilot plan you
                  can execute immediately.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href="mailto:hello@stait.ai?subject=stait.ai%20strategy%20call">
                    <Button size="lg">Book a strategy call</Button>
                  </a>
                  <a href="/ai-readiness">
                    <Button variant="secondary" size="lg">
                      Take the AI Readiness Assessment
                    </Button>
                  </a>
                </div>

                <p className="mt-4 text-sm text-neutral-600">
                  Boise meetings available • Serving clients nationwide (remote-friendly)
                </p>
                <div className="mt-3 inline-flex rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-xs text-indigo-900">
                  Assessment pricing: $1,500–$2,500 • Boise cohort: $1,250 limited
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <div className="text-sm font-semibold">What we’ll cover</div>
                  <div className="mt-4 space-y-3 text-sm text-neutral-700">
                    {[
                      "Your top 3 bottlenecks (ops, docs, customer response)",
                      "A pilot that can ship in 2–6 weeks",
                      "Expected ROI + measurement plan",
                      "Risk / privacy considerations",
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm">
                          ✓
                        </span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
