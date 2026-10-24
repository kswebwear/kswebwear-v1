import Eyebrow from "@/components/ks/Eyebrow";
import FaqAccordion from "@/components/ks/FaqAccordion";
import { HOME_FAQS } from "@/lib/constants";

export default function HomeFaq() {
  return (
    <section id="faq" className="border-t border-ks-line">
      <div className="ks-container ks-section-y flex flex-wrap gap-x-20 gap-y-10">
        <div className="flex flex-[1_1_17rem] flex-col gap-3">
          <Eyebrow number="05">FAQ</Eyebrow>
          <h2 className="ks-display text-ks-h2 leading-none tracking-[-0.02em]">Good to know.</h2>
        </div>
        <div className="min-w-0 flex-[999_1_35rem]">
          <FaqAccordion items={HOME_FAQS} />
        </div>
      </div>
    </section>
  );
}
