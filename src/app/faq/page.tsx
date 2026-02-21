import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { FAQS, waLink } from "@/lib/constants";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ | KS Web & Wear — Common Questions Answered",
  description:
    "Answers to common questions about custom T-shirt printing at KS Web & Wear: minimum orders, turnaround time, DTF printing, pickup, and more.",
};

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="section-container text-center">
          <span className="inline-block bg-brand-red/20 text-brand-red font-sora font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            FAQ
          </span>
          <h1 className="font-sora font-bold text-4xl md:text-5xl text-white mb-6">
            Common Questions
          </h1>
          <p className="font-inter text-white/70 text-xl max-w-xl mx-auto">
            Everything you need to know about ordering custom printed merch
            from us. Still have a question?{" "}
            <a
              href={waLink("default")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-whatsapp hover:underline"
            >
              Just WhatsApp us.
            </a>
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={FAQS} />
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-sora font-bold text-2xl md:text-3xl text-brand-navy mb-4">
              Didn&apos;t Find Your Answer?
            </h2>
            <p className="font-inter text-brand-muted text-lg mb-8">
              We&apos;re a real local business — just message us on WhatsApp and
              we&apos;ll answer any question you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink("default")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <MessageCircle size={20} />
                Ask on WhatsApp
              </a>
              <Link href="/contact" className="btn-outline px-8 py-4 justify-center">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick reference cards */}
      <section className="section-padding bg-brand-navy">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="font-sora font-bold text-2xl text-white">
              Quick Reference
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { emoji: "⏱️", label: "Turnaround", value: "3–5 Business Days" },
              { emoji: "📦", label: "Min. Order", value: "No Minimum (Singles OK)" },
              { emoji: "📍", label: "Pickup", value: "Tallawong, NSW 2762" },
              { emoji: "💬", label: "Quote Time", value: "Same Day (WhatsApp)" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="font-sora font-semibold text-white text-sm mb-1">
                  {item.label}
                </div>
                <div className="font-inter text-white/60 text-xs leading-relaxed">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
