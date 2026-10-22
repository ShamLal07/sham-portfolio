"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ServiceFAQ } from "@/data/servicesCatalog";

interface ServiceFaqAccordionProps {
  faqs: ServiceFAQ[];
  serviceTitle: string;
}

export function ServiceFaqAccordion({ faqs, serviceTitle }: ServiceFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-[#161822] border-amber-500/40 shadow-lg shadow-amber-500/5"
                : "bg-[#12131A] border-white/10 hover:border-white/20"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full py-4.5 px-6 flex items-center justify-between text-left cursor-pointer gap-4"
              aria-expanded={isOpen}
            >
              <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                {faq.question}
              </span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? "bg-amber-500 text-white rotate-180"
                    : "bg-white/10 text-white/70"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
