import PriceTable from "@/components/ks/PriceTable";
import SectionHeader from "@/components/ks/SectionHeader";
import { PRICE_ROWS, waLink } from "@/lib/constants";

export default function HomePricing() {
  return (
    <section id="pricing" className="bg-ks-fog">
      <div className="ks-container ks-section-y flex flex-col gap-10">
        <SectionHeader
          number="01"
          eyebrow="Pricing"
          title="Price per shirt. Setup included."
          aside={
            <p className="max-w-[26em] text-base leading-normal text-ks-body">
              No setup fees, no screens. Ordering 10 or more, or need staff shirts on repeat? Message us for a business
              rate.
            </p>
          }
        />
        <PriceTable rows={PRICE_ROWS} bulkLabel="Message us for a bulk price" bulkHref={waLink("bulk")} />
      </div>
    </section>
  );
}
