import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { FAQS, waLink } from "@/lib/constants";
import Button from "@/components/ks/Button";
import CtaBand from "@/components/ks/CtaBand";
import FaqAccordion from "@/components/ks/FaqAccordion";
import PageHero from "@/components/ks/PageHero";

export const metadata: Metadata = {
  title: "FAQ | KS Web & Wear - Common Questions Answered",
  description:
    "Answers to common questions about custom T-shirt printing at KS Web & Wear: minimum orders, turnaround time, DTF printing, pickup, and more.",
};

const facts = [
  { label: "Turnaround", value: "2–4 business days" },
  { label: "Min. order", value: "2 shirts" },
  { label: "Pickup", value: "Tallawong, NSW 2762" },
  { label: "Quote time", value: "Same day, on WhatsApp" },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions."
        intro="Everything you need to know about ordering custom printed merch from us. Still have a question? Just WhatsApp us."
      >
        <Button href={waLink("default")} size="lg" icon={<MessageCircle size={20} aria-hidden="true" />}>
          Ask on WhatsApp
        </Button>
      </PageHero>

      <section className="border-t border-ks-line">
        <div className="ks-container ks-section-y flex flex-wrap gap-x-20 gap-y-10">
          <dl className="m-0 flex flex-[1_1_17rem] flex-col gap-5">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 border-t border-ks-line pt-4">
                <dt className="ks-label text-ks-muted">{fact.label}</dt>
                <dd className="ks-title m-0 text-xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="min-w-0 flex-[999_1_35rem]">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      <CtaBand title="Didn't find your answer?">
        <div className="flex flex-wrap gap-3">
          <Button href={waLink("default")} variant="ink" size="lg" icon={<MessageCircle size={20} aria-hidden="true" />}>
            Ask on WhatsApp
          </Button>
          <Button href="/contact" variant="ink" size="lg">
            Contact us
          </Button>
        </div>
      </CtaBand>
    </>
  );
}
