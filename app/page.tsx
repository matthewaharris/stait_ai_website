import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Packages from "@/components/sections/Packages";
import Process from "@/components/sections/Process";
import CaseStudy from "@/components/sections/CaseStudy";
import Proof from "@/components/sections/Proof";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Navbar />
      <Hero />
      <Problems />
      <Packages />
      <Process />
      <CaseStudy />
      <Proof />
      <CTA />
      <Footer />
    </main>
  );
}
