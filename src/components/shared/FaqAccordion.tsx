"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaqItem } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

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
  const reduceMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={`w-full bg-white py-16 md:py-24 ${className}`}>
      <Container size="narrow">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            deck={deck}
            alignment="center"
            className="mb-12 md:mb-16"
          />
        </Reveal>

        {/* Accordion Container */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <Reveal key={item.id} delay={index * 0.03} y={12}>
                <div className="rounded-2xl border border-[#D9EAF3] bg-white transition-all duration-200 overflow-hidden shadow-2xs">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer transition-colors hover:bg-[#F1F9FD]/60 focus:outline-none focus:ring-2 focus:ring-[#2f6b8f] focus:ring-inset"
                  >
                    <span className="font-heading text-lg md:text-xl font-medium text-[#173F56] pr-4">
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

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 md:px-6 md:pb-7 pt-1 text-slate-600 font-body text-sm md:text-base font-light leading-relaxed border-t border-slate-100 bg-[#FAFDFE]/40">
                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

