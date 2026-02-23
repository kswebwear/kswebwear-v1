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
    "Custom DTF t-shirt printing for events, businesses & groups in Tallawong, NSW. Minimum 2 shirts. Fast turnaround. Get a quote on WhatsApp.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <WhoWeServeSection />
      <ServicesPreview />
      <PortfolioPreview />
      <ProcessSection />
      <TestimonialsSection />
      <LocalTrustSection />
      <HomeCTASection />
    </>
  );
}
