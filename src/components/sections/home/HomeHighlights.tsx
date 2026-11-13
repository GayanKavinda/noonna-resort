import React from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const HomeHighlights: React.FC = () => {
  return (
    <section className="w-full border-b border-[#D9EAF3]/40 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-xl text-center sm:mb-16">
          <span className="mb-2 block select-none font-script text-3xl font-normal leading-none tracking-wide text-[#2f6b8f] sm:text-4xl">
            Tailored comforts...
          </span>
          <h2 className="font-heading text-[32px] font-normal leading-tight text-[#173F56] sm:text-[36px] md:text-[40px]">
            Stay Highlights
          </h2>
          <p className="mt-3 font-sans text-[15px] font-light text-slate-600">
            Thoughtfully arranged essential amenities for an effortless tropical pause.
          </p>
        </Reveal>

        {/* 5-Column Grid matching Stitch Reference */}
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {/* Card 1: High-Speed Wi-Fi */}
          <StaggerItem className="p-6 rounded-2xl bg-white border border-[#D9EAF3] hover:border-[#2f6b8f]/50 transition-all duration-200 flex flex-col items-center text-center shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)]">
            <div className="w-12 h-12 rounded-full border border-[#D9EAF3] bg-white flex items-center justify-center text-[#2f6b8f] mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.393 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-[#173F56] mb-1.5 font-normal">
              High-Speed Wi-Fi
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed font-sans">
              Stay connected or work remotely beside the Indian Ocean.
            </p>
          </StaggerItem>

          {/* Card 2: Private Parking */}
          <StaggerItem className="p-6 rounded-2xl bg-white border border-[#D9EAF3] hover:border-[#2f6b8f]/50 transition-all duration-200 flex flex-col items-center text-center shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)]">
            <div className="w-12 h-12 rounded-full border border-[#D9EAF3] bg-white flex items-center justify-center text-[#2f6b8f] mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-[#173F56] mb-1.5 font-normal">
              Private Parking
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed font-sans">
              Secure gated vehicle parking directly on the premises.
            </p>
          </StaggerItem>

          {/* Card 3: Coastal Breakfast */}
          <StaggerItem className="p-6 rounded-2xl bg-white border border-[#D9EAF3] hover:border-[#2f6b8f]/50 transition-all duration-200 flex flex-col items-center text-center shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)]">
            <div className="w-12 h-12 rounded-full border border-[#D9EAF3] bg-white flex items-center justify-center text-[#2f6b8f] mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-[#173F56] mb-1.5 font-normal">
              Coastal Breakfast
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed font-sans">
              Tropical fruits, Ceylon tea, and fresh morning bakery selections.
            </p>
          </StaggerItem>

          {/* Card 4: Private En-Suite */}
          <StaggerItem className="p-6 rounded-2xl bg-white border border-[#D9EAF3] hover:border-[#2f6b8f]/50 transition-all duration-200 flex flex-col items-center text-center shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)]">
            <div className="w-12 h-12 rounded-full border border-[#D9EAF3] bg-white flex items-center justify-center text-[#2f6b8f] mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16M4 12v5a3 3 0 003 3h10a3 3 0 003-3v-5M7 12V6a2 2 0 012-2h1a2 2 0 012 2v6" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-[#173F56] mb-1.5 font-normal">
              Private En-Suite
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed font-sans">
              Dedicated private bathroom with organic botanical wash amenities.
            </p>
          </StaggerItem>

          {/* Card 5: Beach Access Path */}
          <StaggerItem className="p-6 rounded-2xl bg-white border border-[#D9EAF3] hover:border-[#2f6b8f]/50 transition-all duration-200 flex flex-col items-center text-center shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)]">
            <div className="w-12 h-12 rounded-full border border-[#D9EAF3] bg-white flex items-center justify-center text-[#2f6b8f] mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15c2.5-2.5 5.5-2.5 8 0 2.5 2.5 5.5 2.5 8 0M3 10c2.5-2.5 5.5-2.5 8 0 2.5 2.5 5.5 2.5 8 0" />
              </svg>
            </div>
            <h3 className="font-heading text-xl text-[#173F56] mb-1.5 font-normal">
              Beach Access Path
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed font-sans">
              Footsteps onto an uncrowded southern coast golden sand beach.
            </p>
          </StaggerItem>
        </Stagger>

        <Reveal delay={0.1}>
          <p className="text-xs text-center text-slate-500 mt-10 italic font-sans">
            *Amenities indicated are verified placeholders confirmed for guest arrivals.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
