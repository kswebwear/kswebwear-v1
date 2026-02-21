import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import WhoWeServeSection from "@/components/sections/WhoWeServeSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LocalTrustSection from "@/components/sections/LocalTrustSection";
import HomeCTASection from "@/components/sections/HomeCTASection";

export const metadata: Metadata = {
  title: "KS Web & Wear | Custom T-Shirt Printing Tallawong NSW",
  description:
    "Local custom DTF t-shirt printing for individuals, gyms & small businesses in Tallawong, NSW. 3–5 day turnaround. No minimums. Get a quote on WhatsApp.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <WhoWeServeSection />
      <ServicesPreview />
      <ProcessSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <LocalTrustSection />
      <HomeCTASection />
    </>
  );
}
