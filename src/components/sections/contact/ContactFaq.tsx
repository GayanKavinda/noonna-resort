"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What accommodations and private ocean views can I expect?",
    answer:
      "Noonna Beach Hotel is offered as an entire resort rental for a private resort stay for your group or family. Enjoy a private coastal retreat with shared spaces, ocean-facing verandas overlooking the surf breaks, and a peaceful setting for an unhurried stay along Kumbalgama's shoreline.",
  },
  {
    question:
      "What are the check-in and check-out times, and can I arrive early?",
    answer:
      "Check-in is available 24 hours and check-out is available from 12:00 to 14:00. Any arrival or departure arrangements beyond these stated times should be confirmed through the applicable booking channel or directly with the property if agreed.",
  },
  {
    question: "Are breakfast options available during the stay?",
    answer:
      "Breakfast options may be available during your stay, including Italian, Asian, American, and breakfast-to-go options, subject to arrangement and availability. Please confirm details with the property or your booking channel.",
  },
  {
    question:
      "Can airport transfers or local transport be arranged?",
    answer:
      "Transport arrangements such as local tuk-tuks or transfers may be possible depending on availability. Please confirm options, routes, and timing directly with the property or through your booking arrangements.",
  },
  {
    question:
      "What are the beach conditions, swimming, and surf access like directly in front?",
    answer:
      "Noonna Beach Hotel sits along a tranquil stretch of golden sand facing gentle breaker tides. You have direct access to peaceful morning walks and proximity to famous surf points like Midigama and Weligama just minutes down the coast.",
  },
  {
    question: "What facilities can guests expect?",
    answer:
      "Based on supplied listing information, facilities may include sea views, air-conditioning, balconies, private bathrooms, bathrobes, tea and coffee makers, free Wi-Fi, work desks, and garden/outdoor areas. Specific setup for an entire-resort stay should be confirmed directly with the property.",
  },
];

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24" id="faq-section">
      <Container size="narrow">
        <Reveal>
          <SectionHeading
            eyebrow="clear details & peaceful planning..."
            title="Frequently Asked Questions"
            deck="Everything you need to know about your coastal retreat at Noonna Beach Hotel."
            alignment="center"
            className="mb-8 sm:mb-12 md:mb-16"
          />
        </Reveal>

        <Stagger className="space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <StaggerItem
                key={item.question}
                className="rounded-2xl border border-[#D9EAF3] bg-white transition-all duration-200 overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 md:p-6 text-left cursor-pointer transition-colors hover:bg-[#F1F9FD]/60 focus:outline-none focus:ring-2 focus:ring-[#2f6b8f] focus:ring-inset"
                >
                  <span className="font-heading text-base sm:text-lg md:text-xl font-medium text-[#173F56] pr-2 sm:pr-4 leading-snug text-balance">
                    {item.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full border border-[#D9EAF3] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#2f6b8f] text-white rotate-180 border-[#2f6b8f]"
                        : "text-[#2f6b8f] bg-[#F1F9FD]"
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
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 md:px-6 md:pb-7 pt-1 text-slate-600 font-body text-sm md:text-base font-light leading-relaxed border-t border-slate-100 bg-[#FAFDFE]/40">
                    <p>{item.answer}</p>
                  </div>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-8 sm:mt-12">
          <div className="text-center max-w-xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#F1F9FD] border border-[#D9EAF3]">
            <p className="font-body text-sm text-[#475569] mb-3 leading-relaxed">
              Have an inquiry not answered above or require custom arrangements?
            </p>
            <a
              href="https://www.booking.com/hotel/lk/noonna-beach.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-body text-sm font-medium text-[#2f6b8f] hover:text-[#173F56] transition-colors"
            >
              <span>Inquire directly with our Concierge Desk</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}


