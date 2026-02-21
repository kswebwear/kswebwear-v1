"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={clsx(
            "bg-white rounded-2xl border transition-all duration-200 overflow-hidden",
            openIndex === i ? "border-brand-red/30 shadow-sm" : "border-gray-100"
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="font-sora font-semibold text-brand-navy text-base leading-snug">
              {faq.question}
            </span>
            <ChevronDown
              size={18}
              className={clsx(
                "text-brand-red flex-shrink-0 transition-transform duration-200",
                openIndex === i ? "rotate-180" : ""
              )}
            />
          </button>

          {openIndex === i && (
            <div className="px-6 pb-5">
              <p className="font-inter text-brand-muted text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
