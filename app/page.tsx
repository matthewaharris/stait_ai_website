import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Packages from "@/components/sections/Packages";
import Process from "@/components/sections/Process";
import Proof from "@/components/sections/Proof";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Packages />
      <Process />
      <Proof />
      <CTA />
      <Footer />
    </main>
  );
}
