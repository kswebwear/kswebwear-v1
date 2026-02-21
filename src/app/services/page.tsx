import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Shirt, Package, Wind, Briefcase, Check, ArrowRight } from "lucide-react";
import { SERVICES, BUSINESS_PACKS, waLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services | Custom DTF T-Shirt Printing & Merch",
  description:
    "Custom DTF printing for tees, hoodies, and business merch packs. Individuals, gyms, and small businesses welcome. Starting from $28. Tallawong pickup.",
};

const iconMap: Record<string, React.ElementType> = {
  Shirt,
  Package,
  Wind,
  Briefcase,
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
            We&apos;re not a clothing store — we&apos;re a local print shop. Every order
            is custom-printed to your brief with full-colour DTF technology.
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

      {/* Core Services */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="tag">What We Print</span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-brand-navy mt-4">
              Core Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Shirt;
              return (
                <div key={service.id} className="card flex gap-5">
                  <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-brand-red" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-sora font-bold text-xl text-brand-navy">
                        {service.title}
                      </h3>
                      <span className="text-sm font-sora font-semibold text-brand-red flex-shrink-0">
                        From {service.from}
                      </span>
                    </div>
                    <p className="font-inter text-brand-muted text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-inter bg-brand-light text-brand-muted px-2 py-0.5 rounded-full border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DTF explanation */}
          <div className="mt-10 bg-brand-navy rounded-2xl p-6 md:p-8">
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

      {/* Business Packs */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="tag">For Gyms & Businesses</span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-brand-navy mt-4 mb-4">
              Business Merch Packs
            </h2>
            <p className="font-inter text-brand-muted text-lg max-w-xl mx-auto">
              Fixed-price packs designed for gyms and small businesses. No
              complicated custom quotes — just pick a pack and message us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BUSINESS_PACKS.map((pack) => (
              <div
                key={pack.id}
                className={`relative card flex flex-col ${pack.popular ? "border-brand-red ring-2 ring-brand-red/20" : ""}`}
              >
                {/* Popular badge */}
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-red text-white font-sora font-semibold text-xs px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <div className="text-xs font-sora font-semibold text-brand-muted uppercase tracking-wider mb-1">
                    {pack.quantity}
                  </div>
                  <h3 className="font-sora font-bold text-2xl text-brand-navy mb-1">
                    {pack.name}
                  </h3>
                  <div className="font-sora font-bold text-3xl text-brand-red">
                    {pack.price}
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                  {pack.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 font-inter text-sm text-brand-muted"
                    >
                      <Check size={14} className="text-brand-red flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(pack.cta)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pack.popular ? "btn-whatsapp justify-center" : "btn-outline justify-center"}
                >
                  <MessageCircle size={16} />
                  Enquire on WhatsApp
                </a>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 font-inter text-brand-muted text-sm">
            Need a custom quantity?{" "}
            <a
              href={waLink("default")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red font-semibold hover:underline"
            >
              Message us for a tailored quote →
            </a>
          </p>
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
                { num: "1", title: "Your design file", desc: "PNG, PDF, or vector (AI/EPS). High res = best result. No design? Tell us your idea and we'll help." },
                { num: "2", title: "Garment details", desc: "Shirt style (regular, oversized), colour, and size breakdown for your order." },
                { num: "3", title: "Quantity", desc: "How many pieces? Singles are welcome. Bigger orders unlock better pricing." },
                { num: "4", title: "Placement", desc: "Front, back, sleeve? Full chest or pocket print? Just describe it or sketch it." },
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
            Just WhatsApp us with your idea. No forms, no fuss — we&apos;ll guide you
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
