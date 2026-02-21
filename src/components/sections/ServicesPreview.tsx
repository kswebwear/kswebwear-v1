import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PRICING, waLink } from "@/lib/constants";

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="tag">Pricing</span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-brand-navy mt-4">
              Simple, Transparent Pricing
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand-red font-sora font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            See All Services <ArrowRight size={16} />
          </Link>
        </div>

        {/* Pricing Tables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Single-Side */}
          <div className="card">
            <h3 className="font-sora font-bold text-xl text-brand-navy mb-5">
              Single-Side Printing
            </h3>
            <div className="flex flex-col gap-3">
              {PRICING.singleSide.map((tier) => (
                <div
                  key={tier.qty}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <span className="font-inter text-sm text-brand-navy font-medium">
                    {tier.qty}
                  </span>
                  <span className="font-sora font-semibold text-sm text-brand-red">
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Double-Side */}
          <div className="card">
            <h3 className="font-sora font-bold text-xl text-brand-navy mb-5">
              Double-Side Printing
            </h3>
            <div className="flex flex-col gap-3">
              {PRICING.doubleSide.map((tier) => (
                <div
                  key={tier.qty}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <span className="font-inter text-sm text-brand-navy font-medium">
                    {tier.qty}
                  </span>
                  <span className="font-sora font-semibold text-sm text-brand-red">
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-8 space-y-2">
          <p className="font-inter text-sm text-brand-muted text-center">
            Includes print setup &amp; small-batch production.
          </p>
          <p className="font-inter text-sm text-brand-muted text-center">
            Bulk pricing available for business and event orders.{" "}
            <a
              href={waLink("bulk")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red font-semibold hover:underline"
            >
              Message for details &rarr;
            </a>
          </p>
          <p className="font-inter text-sm text-brand-muted text-center">
            Need ongoing staff shirts? Ask about repeat business pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
