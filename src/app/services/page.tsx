import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";
import { PRICE_ROWS, waLink } from "@/lib/constants";
import Button from "@/components/ks/Button";
import CtaBand from "@/components/ks/CtaBand";
import Eyebrow from "@/components/ks/Eyebrow";
import PageHero from "@/components/ks/PageHero";
import PriceTable from "@/components/ks/PriceTable";
import SectionHeader from "@/components/ks/SectionHeader";

export const metadata: Metadata = {
  title: "Services & Pricing | Custom DTF T-Shirt Printing",
  description:
    "Custom DTF printing for events, businesses & groups. Minimum 2 shirts per order. Single-side from $26, double-side from $32. Tallawong pickup.",
};

const businessPoints = [
  "Logo tees & branded uniforms",
  "Recurring order support",
  "Consistent quality across batches",
  "Local pickup or delivery for larger orders",
];

const dtfPoints = [
  "Full colour, no extra cost",
  "Works on any fabric colour",
  "Wash-resistant & durable",
  "Great for complex designs",
];

const toSend = [
  {
    title: "Your design file",
    desc: "PNG, PDF, or vector (AI/EPS). High res = best result. No design? We can help with basic layout.",
  },
  { title: "Garment details", desc: "Shirt colour and size breakdown for your order." },
  { title: "Quantity", desc: "Minimum 2 shirts per order. Best value starts from 3+ shirts." },
  { title: "Placement", desc: "Front, back, or both? Just describe it or sketch it." },
];

function CheckList({ items, onDark = false }: { items: string[]; onDark?: boolean }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-3 p-0">
      {items.map((item) => (
        <li key={item} className={`flex items-center gap-3 text-base ${onDark ? "text-ks-on-dark" : "text-ks-body"}`}>
          <Check size={16} aria-hidden="true" className={onDark ? "text-ks-accent-on-dark" : "text-ks-accent"} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Custom printing. Real quality."
        intro="We're a local print shop in Tallawong. Every order is custom-printed to your brief with full-colour DTF technology. Minimum 2 shirts per order."
      >
        <Button href={waLink("default")} size="lg" icon={<MessageCircle size={20} aria-hidden="true" />}>
          Get a quote on WhatsApp
        </Button>
      </PageHero>

      <section className="bg-ks-fog">
        <div className="ks-container ks-section-y flex flex-col gap-10">
          <SectionHeader
            eyebrow="Pricing"
            title="Clear pricing, no surprises."
            aside={
              <p className="max-w-[26em] text-base leading-normal text-ks-body">
                Includes print setup and small-batch production. Need ongoing staff shirts? Ask about repeat business
                pricing.
              </p>
            }
          />
          <PriceTable rows={PRICE_ROWS} bulkLabel="Message us for a bulk price" bulkHref={waLink("bulk")} />
        </div>
      </section>

      <section>
        <div className="ks-container ks-section-y flex flex-wrap gap-x-20 gap-y-10">
          <div className="flex flex-[1_1_17rem] flex-col gap-3">
            <Eyebrow>For businesses</Eyebrow>
            <h2 className="ks-display text-ks-h2 leading-none tracking-[-0.02em]">Business &amp; staff printing.</h2>
          </div>
          <div className="flex min-w-0 flex-[999_1_35rem] flex-col gap-6">
            <p className="max-w-[34em] text-[19px] leading-[1.55] text-ks-body">
              We regularly print for local cafes, tradies, retail shops, and small businesses across Western Sydney.
              Whether you need a one-off batch of branded tees or ongoing staff uniforms, we keep it simple and
              affordable.
            </p>
            <CheckList items={businessPoints} />
            <div>
              <Button href={waLink("business")} variant="secondary">
                Enquire about business orders
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ks-ink text-ks-on-dark">
        <div className="ks-container ks-section-y flex flex-wrap gap-x-20 gap-y-10">
          <div className="flex flex-[1_1_17rem] flex-col gap-3">
            <Eyebrow onDark>DTF printing</Eyebrow>
            <h2 className="ks-display text-ks-h2 leading-none tracking-[-0.02em]">What is DTF?</h2>
          </div>
          <div className="flex min-w-0 flex-[999_1_35rem] flex-col gap-6">
            <p className="max-w-[34em] text-[19px] leading-[1.55]">
              DTF (Direct to Film) is a modern printing method that produces vibrant, full-colour prints on virtually any
              fabric colour, including black and dark shirts. It&apos;s durable, wash-resistant, and works on cotton,
              polyester, and blends. Perfect for custom designs with multiple colours, gradients, and fine details.
            </p>
            <CheckList items={dtfPoints} onDark />
          </div>
        </div>
      </section>

      <section>
        <div className="ks-container ks-section-y flex flex-col gap-10">
          <SectionHeader eyebrow="Getting started" title="What to send us." />
          <ol className="m-0 grid list-none grid-cols-1 gap-10 p-0 md:grid-cols-2">
            {toSend.map((item, i) => (
              <li key={item.title} className="flex flex-col gap-3 border-t border-ks-line pt-6">
                <span className="font-ks-mono text-sm text-ks-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="ks-title text-2xl">{item.title}</h3>
                <p className="text-base leading-[1.55] text-ks-body">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Not sure where to start?">
        <div className="flex flex-wrap gap-3">
          <Button href={waLink("default")} variant="ink" size="lg" icon={<MessageCircle size={20} aria-hidden="true" />}>
            Chat on WhatsApp
          </Button>
          <Button href="/faq" variant="ink" size="lg">
            Read the FAQ
          </Button>
        </div>
      </CtaBand>
    </>
  );
}
