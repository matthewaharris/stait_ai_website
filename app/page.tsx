import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import InlineCTA from "@/components/InlineCTA";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Packages from "@/components/sections/Packages";
import ManagedInfrastructure from "@/components/sections/ManagedInfrastructure";
import Process from "@/components/sections/Process";
import CaseStudy from "@/components/sections/CaseStudy";
import Proof from "@/components/sections/Proof";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Implementation for Growing Businesses",
  description:
    "stait.ai helps growing businesses reduce manual work, improve margins, and build long-term strategic AI capability.",
  alternates: { canonical: "https://www.stait.ai/" },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Navbar />
      <Hero />
      <Problems />
      <InlineCTA
        location="home_after_problems"
        title="Turn implementation risk into a focused plan."
      />
      <Packages />
      <ManagedInfrastructure />
      <InlineCTA
        location="home_after_packages"
        title="Choose your entry point and move quickly."
      />
      <Process />
      <CaseStudy />
      <InlineCTA
        location="home_after_case_study"
        title="See what practical AI outcomes can look like in your business."
      />
      <Proof />
      <CTA />
      <Footer />
    </main>
  );
}
