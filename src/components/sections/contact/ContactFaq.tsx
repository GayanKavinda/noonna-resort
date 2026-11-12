"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What accommodations and private ocean views can I expect?",
    answer:
      "Noonna Beach Hotel is offered as an entire-house rental for your group or family, not as separate rooms. Enjoy a private coastal retreat with comfortable shared spaces, ocean-facing verandas overlooking the surf breaks, and a peaceful setting for an unhurried stay along Kumbalgama's shoreline.",
  },
  {
    question:
      "What are the check-in and check-out times, and can I arrive early?",
    answer:
      "Standard check-in begins at 14:00 and check-out is until 11:00. Early check-in or relaxed late departure can be arranged depending on availability. If you arrive early, leave your luggage with our concierge and enjoy the beach while your stay is prepared.",
  },
  {
    question: "Is coastal breakfast included in the stay?",
    answer:
      "Fresh seasonal breakfasts can be prepared during your stay. Enjoy tropical fruits, freshly brewed Ceylon tea, and your choice of traditional Sri Lankan or continental morning dishes on your veranda or by the shore.",
  },
  {
    question:
      "Can the hotel coordinate private airport transfers and island transit?",
    answer:
      "Certainly. Private air-conditioned vehicle transfers can be arranged from Bandaranaike International Airport (CMB) or Mattala Rajapaksa International Airport (HRI) directly to our gates, as well as local tuk-tuks to Kumbalgama train station, Weligama, and Galle Fort.",
  },
  {
    question:
      "What are the beach conditions, swimming, and surf access like directly in front?",
    answer:
      "Noonna Beach Hotel sits along a tranquil stretch of golden sand facing gentle breaker tides. You have direct access to peaceful morning walks and proximity to famous surf points like Midigama and Weligama just minutes down the coast.",
  },
  {
    question: "What are the bathroom policies and Wi-Fi access?",
    answer:
      "The house includes private en-suite bathroom facilities with fresh towels and essential bath amenities. Complimentary high-speed fiber Wi-Fi is accessible throughout guest spaces, verandas, and property grounds.",
  },
];

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24" id="faq-section">
      <Container size="narrow">
        <SectionHeading
          eyebrow="clear details & peaceful planning..."
          title="Frequently Asked Questions"
          deck="Everything you need to know about your coastal retreat at Noonna Beach Hotel."
          alignment="center"
          className="mb-12 md:mb-16"
        />

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-2xl border border-[#D9EAF3] bg-white transition-all duration-200 overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
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

        <div className="mt-12 text-center max-w-xl mx-auto p-6 rounded-2xl bg-[#F1F9FD] border border-[#D9EAF3]">
          <p className="font-body text-sm text-[#475569] mb-3">
            Have an inquiry not answered above or require custom arrangements?
          </p>
          <a
            href="https://www.booking.com/hotel/lk/noonna-beach.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-[#397FA8] hover:text-[#173F56] transition-colors"
          >
            <span>Inquire directly with our Concierge Desk</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}

