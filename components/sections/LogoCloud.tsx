import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function LogoCloud() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <Container className="py-10">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-neutral-600">
              Built for growing businesses with enterprise-grade habits: security, governance, and measurable outcomes.
            </p>
            <p className="text-xs text-neutral-500">(Add client logos here as you land them.)</p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {["Accounting", "Construction", "Healthcare", "Insurance", "Logistics", "Services"].map((label) => (
              <div
                key={label}
                className="group flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-4 py-5 text-sm text-neutral-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
