"use client";

import React, { useState } from "react";
import { FaqItem } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FaqAccordionProps {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  deck?: string;
  className?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  eyebrow = "clear details & peaceful planning...",
  title = "Frequently Asked Questions",
  deck = "Everything you need to know about your coastal retreat at Noonna Beach Hotel.",
  className = "",
}) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={`w-full bg-white py-16 md:py-24 ${className}`}>
      <Container size="narrow">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          deck={deck}
          alignment="center"
          className="mb-12 md:mb-16"
        />

        {/* Accordion Container */}
        <div className="space-y-4">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#D9EAF3] bg-white transition-all duration-200 overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer transition-colors hover:bg-[#F1F9FD]/60 focus:outline-none focus:ring-2 focus:ring-[#397FA8] focus:ring-inset"
                >
                  <span className="font-heading text-lg md:text-xl font-medium text-[#173F56] pr-4">
                    {item.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full border border-[#D9EAF3] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#397FA8] text-white rotate-180 border-[#397FA8]"
                        : "text-[#397FA8] bg-[#F1F9FD]"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 md:px-6 md:pb-7 pt-1 text-slate-600 font-body text-sm md:text-base font-light leading-relaxed border-t border-slate-100 bg-[#FAFDFE]/40">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

