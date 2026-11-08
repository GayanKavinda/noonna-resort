import React from "react";

export const HomeHighlights: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8 border-b border-[#D9EAF3]/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span
            className="font-script text-3xl md:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block"
            style={{ fontSize: "1.75rem" }}
          >
            Tailored comforts...
          </span>
          <h2 className="font-heading text-[40px] leading-tight text-[#173F56] font-normal">
            Stay Highlights
          </h2>
          <p className="text-[15px] text-slate-600 mt-3 font-light font-sans">
            Thoughtfully arranged essential amenities for an effortless tropical pause.
          </p>
        </div>

        {/* 5-Column Grid matching Stitch Reference Lines 383-419 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Card 1: High-Speed Wi-Fi */}
          <div className="p-6 rounded-2xl bg-white border border-[#D9EAF3] hover:border-[#397FA8]/50 transition-all duration-200 flex flex-col items-center text-center shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)]">
            <div className="w-12 h-12 rounded-full border border-[#D9EAF3] bg-white flex items-center justify-center text-[#397FA8] mb-4">
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
          </div>

          {/* Card 2: Private Parking */}
          <div className="p-6 rounded-2xl bg-white border border-[#D9EAF3] hover:border-[#397FA8]/50 transition-all duration-200 flex flex-col items-center text-center shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)]">
            <div className="w-12 h-12 rounded-full border border-[#D9EAF3] bg-white flex items-center justify-center text-[#397FA8] mb-4">
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
          </div>

          {/* Card 3: Coastal Breakfast */}
          <div className="p-6 rounded-2xl bg-white border border-[#D9EAF3] hover:border-[#397FA8]/50 transition-all duration-200 flex flex-col items-center text-center shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)]">
            <div className="w-12 h-12 rounded-full border border-[#D9EAF3] bg-white flex items-center justify-center text-[#397FA8] mb-4">
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
          </div>

          {/* Card 4: Private En-Suite */}
          <div className="p-6 rounded-2xl bg-white border border-[#D9EAF3] hover:border-[#397FA8]/50 transition-all duration-200 flex flex-col items-center text-center shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)]">
            <div className="w-12 h-12 rounded-full border border-[#D9EAF3] bg-white flex items-center justify-center text-[#397FA8] mb-4">
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
          </div>

          {/* Card 5: Beach Access Path */}
          <div className="p-6 rounded-2xl bg-white border border-[#D9EAF3] hover:border-[#397FA8]/50 transition-all duration-200 flex flex-col items-center text-center shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)]">
            <div className="w-12 h-12 rounded-full border border-[#D9EAF3] bg-white flex items-center justify-center text-[#397FA8] mb-4">
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
          </div>
        </div>

        <p className="text-xs text-center text-slate-400 mt-10 italic font-sans">
          *Amenities indicated are verified placeholders confirmed for guest arrivals.
        </p>
      </div>
    </section>
  );
};
