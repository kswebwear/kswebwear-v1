import type { Metadata } from "next";
import { Instagram, MessageCircle } from "lucide-react";
import { waLink, SITE_CONFIG } from "@/lib/constants";
import Button from "@/components/ks/Button";
import CtaBand from "@/components/ks/CtaBand";
import Eyebrow from "@/components/ks/Eyebrow";
import PageHero from "@/components/ks/PageHero";
import SectionHeader from "@/components/ks/SectionHeader";
import PortfolioGrid from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = {
  title: "Our Work | KS Web & Wear Portfolio",
  description:
    "See real custom T-shirt printing orders from KS Web & Wear in Tallawong. Events, businesses, and group orders. Follow us on Instagram for fresh work.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Fresh off the press."
        intro="Real orders. Real clients. Real local. We post completed orders on Instagram every week, so @kswebwear is the most up-to-date gallery of our work."
      >
        <Button href={waLink("default")} size="lg" icon={<MessageCircle size={20} aria-hidden="true" />}>
          Get a quote
        </Button>
        <Button href={SITE_CONFIG.instagram} variant="secondary" size="lg" icon={<Instagram size={20} aria-hidden="true" />}>
          Follow @kswebwear
        </Button>
      </PageHero>

      <section className="bg-ks-ink text-ks-on-dark">
        <div className="ks-container ks-section-y flex flex-wrap items-center gap-x-14 gap-y-10">
          <div className="min-w-0 flex-[1_1_26rem] bg-ks-ink">
            <video
              src="/videos/portfolio-showcase.mp4"
              controls
              preload="none"
              playsInline
              className="block w-full"
              aria-label="KS Web & Wear order showcase video"
            />
          </div>
          <div className="flex min-w-0 flex-[1_1_20rem] flex-col gap-5">
            <Eyebrow onDark>Showcase</Eyebrow>
            <h2 className="ks-display text-ks-h2 leading-none tracking-[-0.02em]">See the work in action.</h2>
            <p className="text-base leading-[1.55]">
              Every order is packed with care, labelled by size, and ready for pickup from Tallawong. This is what a real
              KS Web &amp; Wear order looks like.
            </p>
            <div>
              <Button href={waLink("default")} icon={<MessageCircle size={20} aria-hidden="true" />}>
                Start your order
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ks-container ks-section-y flex flex-col gap-10">
          <SectionHeader
            eyebrow="All orders"
            title="25+ real orders."
            aside={
              <Button href={SITE_CONFIG.instagram} variant="link">
                More on Instagram
              </Button>
            }
          />
          <PortfolioGrid />
        </div>
      </section>

      <CtaBand title="Like what you see?">
        <div className="flex flex-wrap gap-3">
          <Button href={waLink("default")} variant="ink" size="lg" icon={<MessageCircle size={20} aria-hidden="true" />}>
            Get a quote on WhatsApp
          </Button>
          <Button href="/services" variant="ink" size="lg">
            See our services
          </Button>
        </div>
      </CtaBand>
    </>
  );
}
