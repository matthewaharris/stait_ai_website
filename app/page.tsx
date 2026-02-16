import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Proof from "@/components/sections/Proof";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Proof />
      <CTA />
      <Footer />
    </main>
  );
}
