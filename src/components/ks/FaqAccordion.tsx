"use client";

import { useId, useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="flex min-w-0 flex-col border-t border-ks-ink">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.question} className="border-b border-ks-line">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-ks-btn w-full cursor-pointer items-center justify-between gap-6 bg-transparent py-5 text-left text-xl font-bold text-ks-ink"
              >
                <span>{item.question}</span>
                <span aria-hidden="true" className="font-ks-mono text-2xl font-normal">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen}>
              <p className="pb-6 pr-12 text-base leading-relaxed text-ks-body">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
