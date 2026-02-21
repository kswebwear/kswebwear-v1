import { MessageCircle } from "lucide-react";
import { PROCESS_STEPS, waLink } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section className="section-padding bg-brand-navy">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-red/20 text-brand-red font-sora font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-4">
            From Idea to Pickup in{" "}
            <span className="text-brand-red">4 Simple Steps</span>
          </h2>
          <p className="font-inter text-white/60 text-lg max-w-lg mx-auto">
            No complicated forms. No confusing steps. Just WhatsApp us and
            we&apos;ll handle the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.step} className="relative">
              {/* Connector line (desktop) */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-50%] h-px bg-white/10 z-0" />
              )}

              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-200 z-10 h-full">
                {/* Step number */}
                <div className="w-14 h-14 bg-brand-red rounded-2xl flex items-center justify-center mb-4">
                  <span className="font-sora font-bold text-white text-lg">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-sora font-bold text-white text-lg mb-2">
                  {step.title}
                </h3>
                <p className="font-inter text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={waLink("default")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-4"
          >
            <MessageCircle size={20} />
            Start with a WhatsApp Message
          </a>
        </div>
      </div>
    </section>
  );
}
