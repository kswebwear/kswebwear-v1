import Link from "next/link";
import { ArrowRight, Shirt, Package, Wind, Briefcase } from "lucide-react";
import { SERVICES, waLink } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Shirt,
  Package,
  Wind,
  Briefcase,
};

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="tag">What We Print</span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-brand-navy mt-4">
              Our Services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand-red font-sora font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            See All Services <ArrowRight size={16} />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Shirt;
            return (
              <div
                key={service.id}
                className="group relative bg-brand-light rounded-2xl p-6 hover:bg-brand-navy hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-brand-red/10 group-hover:bg-brand-red/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon size={22} className="text-brand-red" />
                </div>

                {/* From price */}
                <div className="text-xs font-sora font-semibold text-brand-red uppercase tracking-wider mb-2">
                  From {service.from}
                </div>

                <h3 className="font-sora font-bold text-lg text-brand-navy group-hover:text-white mb-2 transition-colors">
                  {service.title}
                </h3>
                <p className="font-inter text-brand-muted group-hover:text-white/70 text-sm leading-relaxed mb-4 transition-colors">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-inter bg-white group-hover:bg-white/10 text-brand-muted group-hover:text-white/60 px-2 py-0.5 rounded-full transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={waLink("default")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-whatsapp font-sora font-semibold text-xs hover:gap-2.5 transition-all duration-200"
                >
                  <MessageCircle size={14} />
                  Get Quote
                </a>
              </div>
            );
          })}
        </div>

        {/* Pricing note */}
        <div className="mt-10 p-4 bg-brand-light rounded-xl border-l-4 border-brand-red">
          <p className="font-inter text-sm text-brand-muted">
            <span className="font-semibold text-brand-navy">Pricing guidance:</span>{" "}
            Custom tees from $28 · Oversized from $34 · Hoodies from $55 · Business packs from $300.
            Final pricing depends on quantity and design.{" "}
            <a
              href={waLink("default")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red font-semibold hover:underline"
            >
              Get an exact quote →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
