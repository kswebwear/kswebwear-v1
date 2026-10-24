import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import HomeHero from "@/components/home/HomeHero";
import HomePricing from "@/components/home/HomePricing";
import HomeWork from "@/components/home/HomeWork";
import HomeHow from "@/components/home/HomeHow";
import HomeAudience from "@/components/home/HomeAudience";
import HomeFaq from "@/components/home/HomeFaq";
import CtaBand from "@/components/ks/CtaBand";
import Button from "@/components/ks/Button";
import { waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "KS Web & Wear | Custom T-Shirt Printing Tallawong NSW",
  description:
    "Custom DTF t-shirt printing for events, businesses & groups in Tallawong, NSW. Minimum 2 shirts. Fast turnaround. Get a quote on WhatsApp.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomePricing />
      <HomeWork />
      <HomeHow />
      <HomeAudience />
      <HomeFaq />
      <CtaBand title="Need shirts this week?">
        <Button href={waLink("default")} variant="ink" size="lg" icon={<MessageCircle size={20} aria-hidden="true" />}>
          Message us on WhatsApp
        </Button>
      </CtaBand>
    </>
  );
}
