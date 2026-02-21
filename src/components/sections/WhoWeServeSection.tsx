import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHO_WE_SERVE, waLink } from "@/lib/constants";

export default function WhoWeServeSection() {
  return (
    <section className="section-padding bg-brand-light">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag">Who We Help</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-brand-navy mt-4 mb-4">
            Print For Everyone,{" "}
            <span className="text-brand-red">Made For You</span>
          </h2>
          <p className="font-inter text-brand-muted text-lg max-w-xl mx-auto">
            Whether it&apos;s one custom tee or 50 branded uniforms — we handle it
            all locally.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHO_WE_SERVE.map((segment) => (
            <div
              key={segment.id}
              className="card group hover:border-brand-red/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Emoji */}
              <div className="text-4xl mb-4">{segment.emoji}</div>

              <h3 className="font-sora font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-red transition-colors">
                {segment.title}
              </h3>
              <p className="font-inter text-brand-muted text-sm leading-relaxed mb-4">
                {segment.description}
              </p>

              {/* Examples */}
              <ul className="flex flex-col gap-1.5 mb-6">
                {segment.examples.map((ex) => (
                  <li
                    key={ex}
                    className="font-inter text-xs text-brand-muted flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                    {ex}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={waLink(segment.cta)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-whatsapp font-sora font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                <MessageCircle size={16} />
                Get a Quote
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-10 font-inter text-brand-muted text-sm">
          Not sure which category fits?{" "}
          <a
            href={waLink("default")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-red font-semibold hover:underline"
          >
            Just message us — we&apos;ll sort it out.
          </a>
        </p>
      </div>
    </section>
  );
}
