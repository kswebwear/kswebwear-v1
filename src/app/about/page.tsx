import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { waLink, SITE_CONFIG } from "@/lib/constants";
import Button from "@/components/ks/Button";
import CtaBand from "@/components/ks/CtaBand";
import Eyebrow from "@/components/ks/Eyebrow";
import PageHero from "@/components/ks/PageHero";
import SectionHeader from "@/components/ks/SectionHeader";

export const metadata: Metadata = {
  title: "About Us | KS Web & Wear - Local Print Shop",
  description:
    "KS Web & Wear is a local custom T-shirt printing business based in Tallawong, NSW. Printing for events, businesses, and groups.",
};

const values = [
  {
    title: "Local & Accessible",
    desc: "We're based in Tallawong. You can WhatsApp us and pickup in person. No warehouses, no chatbots.",
  },
  {
    title: "Real Relationships",
    desc: "We remember your designs, your sizes, and your preferences. Repeat clients are our best clients.",
  },
  {
    title: "Fast & Responsive",
    desc: "Fast WhatsApp replies, 2–4 day turnaround. When you need it done, we get it done.",
  },
  {
    title: "Built for Groups",
    desc: "Events, small businesses, teams. We love printing for groups that care about how they look.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Real people. Local business. Real prints."
        intro="We're not a factory, not an online store, and not a generic print platform. We're your local print shop in Tallawong."
      />

      <section className="border-t border-ks-line">
        <div className="ks-container ks-section-y flex flex-wrap gap-x-20 gap-y-10">
          <div className="flex flex-[1_1_17rem] flex-col gap-3">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="ks-display text-ks-h2 leading-none tracking-[-0.02em]">Started local. Staying local.</h2>
          </div>
          <div className="flex min-w-0 flex-[999_1_35rem] flex-col gap-5 text-[19px] leading-[1.55] text-ks-body">
            <p>
              KS Web &amp; Wear started right here in Tallawong, NSW. What began as a simple idea, helping people get
              custom printed tees without the hassle of big platforms, has grown into a real local business serving
              events, small businesses, and groups across the Hills District and Western Sydney.
            </p>
            <p>
              We use DTF (Direct to Film) printing, one of the best technologies available for custom garments. It means
              full colour on any fabric and prints that actually last. We don&apos;t do screen printing, heat vinyl, or
              bargain-bin quality. We do it right, or we don&apos;t do it.
            </p>
            <p>
              Our orders come in through WhatsApp and Instagram because that&apos;s how real conversations happen. We
              quote you personally, send you a design proof before printing, and you pick up locally. No mystery, no
              hidden fees.
            </p>
            <p>
              Whether you&apos;re after matching birthday tees or branded uniforms for your team, this is the place.
              Minimum 2 shirts per order. Best value from 3+.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ks-fog">
        <div className="ks-container ks-section-y flex flex-col gap-10">
          <SectionHeader eyebrow="What we stand for" title="Our values." />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col gap-3 border-t-2 border-ks-ink pt-5">
                <h3 className="ks-title text-ks-h3">{v.title}</h3>
                <p className="text-base leading-[1.55] text-ks-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="ks-container ks-section-y flex flex-wrap gap-x-20 gap-y-10">
          <div className="flex flex-[1_1_17rem] flex-col gap-3">
            <Eyebrow>Where to find us</Eyebrow>
            <h2 className="ks-display text-ks-h2 leading-none tracking-[-0.02em]">Based in Tallawong, NSW.</h2>
          </div>
          <div className="flex min-w-0 flex-[999_1_35rem] flex-col gap-6">
            <p className="max-w-[34em] text-[19px] leading-[1.55] text-ks-body">
              We&apos;re local to Tallawong (2762), serving the Hills District and greater Western Sydney. Local pickup
              is always available. Confirm pickup time via WhatsApp.
            </p>
            <div className="border-t border-ks-ink pt-5">
              <p className="ks-title text-2xl">{SITE_CONFIG.location}</p>
              <p className="mt-1 text-base text-ks-body">Near Rouse Hill, Schofields, Marsden Park, Kellyville</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Got a design in mind?">
        <div className="flex flex-wrap gap-3">
          <Button href={waLink("default")} variant="ink" size="lg" icon={<MessageCircle size={20} aria-hidden="true" />}>
            Chat on WhatsApp
          </Button>
          <Button href="/contact" variant="ink" size="lg">
            Contact us
          </Button>
        </div>
      </CtaBand>
    </>
  );
}
