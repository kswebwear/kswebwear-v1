import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Check, ArrowRight } from "lucide-react";
import { PRICING, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services & Pricing | Custom DTF T-Shirt Printing",
  description:
    "Custom DTF printing for events, businesses & groups. Minimum 2 shirts per order. Single-side from $26, double-side from $32. Tallawong pickup.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="section-container text-center">
          <span className="inline-block bg-brand-red/20 text-brand-red font-sora font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Our Services
          </span>
          <h1 className="font-sora font-bold text-4xl md:text-5xl text-white mb-6">
            Custom Printing.{" "}
            <span className="text-brand-red">Real Quality.</span>
          </h1>
          <p className="font-inter text-white/70 text-xl max-w-2xl mx-auto mb-8">
            We&apos;re a local print shop in Tallawong. Every order
            is custom-printed to your brief with full-colour DTF technology.
            Minimum 2 shirts per order.
          </p>
          <a
            href={waLink("default")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-4"
          >
            <MessageCircle size={20} />
            Get a Quote on WhatsApp
          </a>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="tag">Transparent Pricing</span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-brand-navy mt-4">
              Clear Pricing, No Surprises
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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

          <div className="mt-8 space-y-2 text-center">
            <p className="font-inter text-sm text-brand-muted">
              Includes print setup &amp; small-batch production.
            </p>
            <p className="font-inter text-sm text-brand-muted">
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
            <p className="font-inter text-sm text-brand-muted">
              Need ongoing staff shirts? Ask about repeat business pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Business Printing */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <span className="tag">For Businesses</span>
            <h2 className="font-sora font-bold text-3xl text-brand-navy mt-4 mb-4">
              Business &amp; Staff Printing
            </h2>
            <p className="font-inter text-brand-muted text-base leading-relaxed mb-6">
              We regularly print for local cafes, tradies, retail shops, and small
              businesses across Western Sydney. Whether you need a one-off batch of
              branded tees or ongoing staff uniforms, we keep it simple and affordable.
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              {["Logo tees & branded uniforms", "Recurring order support", "Consistent quality across batches", "Local pickup or delivery for larger orders"].map((item) => (
                <li key={item} className="font-inter text-sm text-brand-navy flex items-center gap-2">
                  <Check size={14} className="text-brand-red flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={waLink("business")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-6 py-3"
            >
              <MessageCircle size={18} />
              Enquire About Business Orders
            </a>
          </div>
        </div>
      </section>

      {/* Business Order Callout */}
      <section className="bg-brand-navy py-6">
        <div className="section-container flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="font-sora font-semibold text-white text-sm">
            Bulk &amp; Business Orders Welcome
          </p>
          <span className="hidden sm:block text-white/30">|</span>
          <p className="font-inter text-white/60 text-sm">
            Staff uniforms, branded merch, recurring orders
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white font-sora font-semibold text-sm px-5 py-2 rounded-full hover:bg-red-600 transition-colors"
          >
            Enquire Now <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* DTF explanation */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="bg-brand-navy rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h3 className="font-sora font-bold text-white text-xl mb-3">
                  What is DTF Printing?
                </h3>
                <p className="font-inter text-white/70 text-sm leading-relaxed">
                  DTF (Direct to Film) is a modern printing method that produces
                  vibrant, full-colour prints on virtually any fabric colour —
                  including black and dark shirts. It&apos;s durable, wash-resistant,
                  and works on cotton, polyester, and blends. Perfect for custom
                  designs with multiple colours, gradients, and fine details.
                </p>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                {["Full colour — no extra cost", "Works on any fabric colour", "Wash-resistant & durable", "Great for complex designs"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-white/70 text-sm font-inter">
                    <Check size={14} className="text-brand-red" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to send us */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="text-center mb-10">
            <span className="tag">Getting Started</span>
            <h2 className="font-sora font-bold text-3xl text-brand-navy mt-4">
              What to Send Us
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col gap-4">
              {[
                { num: "1", title: "Your design file", desc: "PNG, PDF, or vector (AI/EPS). High res = best result. No design? We can help with basic layout." },
                { num: "2", title: "Garment details", desc: "Shirt colour and size breakdown for your order." },
                { num: "3", title: "Quantity", desc: "Minimum 2 shirts per order. Best value starts from 3+ shirts." },
                { num: "4", title: "Placement", desc: "Front, back, or both? Just describe it or sketch it." },
              ].map((item) => (
                <div key={item.num} className="card flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="font-sora font-bold text-white">{item.num}</span>
                  </div>
                  <div>
                    <h4 className="font-sora font-semibold text-brand-navy mb-1">{item.title}</h4>
                    <p className="font-inter text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href={waLink("default")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <MessageCircle size={20} />
                Send Us Your Brief on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-red section-padding">
        <div className="section-container text-center">
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="font-inter text-white/80 text-lg mb-8 max-w-md mx-auto">
            Just WhatsApp us with your idea. No fuss — we&apos;ll guide you
            from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink("default")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-red font-sora font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <Link href="/faq" className="btn-outline-white px-8 py-4 justify-center">
              Read the FAQ <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
