import type { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import { Opportunity, Gap } from "@/components/sections/Stats";
import { Founder, Comparison, Responsible, ProductsStrip } from "@/components/sections/Trust";
import Approach from "@/components/sections/Approach";
import PackageCards from "@/components/sections/PackageCards";
import { UseCases, RoiMath } from "@/components/sections/UseCasesRoi";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: { absolute: "Stait AI — AI Training, Strategy & Implementation for Growing Businesses" },
  alternates: { canonical: "https://www.stait.ai/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Opportunity />
      <Gap />
      <Founder />
      <Approach />
      <PackageCards />
      <UseCases />
      <RoiMath />
      <Comparison />
      <Responsible />
      <ProductsStrip />
      <FinalCTA />
    </>
  );
}
