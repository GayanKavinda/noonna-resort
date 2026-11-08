import React from "react";
import Image from "next/image";

export const HomeWelcome: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-8 border-b border-[#D9EAF3]/40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column (5 Cols in Stitch) */}
        <div className="lg:col-span-5 text-left flex flex-col items-start">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-[#D9EAF3]/50 border border-[#D9EAF3]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#397FA8]" />
            <span className="text-[11px] uppercase tracking-widest text-[#173F56] font-semibold">
              Private Southern Shoreline
            </span>
          </div>

          <span
            className="font-script text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block"
            style={{ fontSize: "1.75rem" }}
          >
            Where the ocean sets the rhythm...
          </span>

          <h2 className="font-heading text-[42px] md:text-[50px] leading-tight text-[#173F56] font-normal tracking-tight mb-6">
            A Little Closer to the Ocean
          </h2>

          <p className="text-[16px] text-slate-600 leading-relaxed mb-8 font-light font-sans">
            A relaxed coastal stay for travellers looking to slow down and enjoy Sri Lanka&apos;s southern shoreline. Designed for stillness, warm ocean breezes, and unhurried days at Noonna Beach Hotel Sri Lanka.
          </p>

          <div className="flex items-center gap-3 text-xs text-[#173F56] font-medium py-2 px-4 rounded-xl bg-white border border-[#D9EAF3] shadow-sm">
            <svg className="w-4 h-4 text-[#397FA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15c2.5-2.5 5.5-2.5 8 0 2.5 2.5 5.5 2.5 8 0M3 10c2.5-2.5 5.5-2.5 8 0 2.5 2.5 5.5 2.5 8 0" />
            </svg>
            <span>Footsteps to warm Indian Ocean tidal breaks</span>
          </div>
        </div>

        {/* Right Column (7 Cols in Stitch) */}
        <div className="lg:col-span-7">
          <div className="w-full relative rounded-3xl overflow-hidden shadow-[0_16px_40px_-8px_rgba(23,63,86,0.06)] bg-white border border-[#D9EAF3]/50 group">
            <div className="relative w-full h-[480px]">
              <Image
                src="/images/hotel/property-exterior.jpg"
                alt="Sun-drenched Ocean Veranda facing Indian Ocean"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-2 border border-[#D9EAF3] shadow-sm">
              <svg className="w-4 h-4 text-[#397FA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-xs uppercase tracking-wider text-[#173F56] font-medium font-sans">
                Sun-drenched Ocean Veranda
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
