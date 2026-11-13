import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export const HomeWelcome: React.FC = () => {
  return (
    <section className="w-full border-b border-[#D9EAF3]/40 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Left Column (5 Cols in Stitch) */}
        <Reveal className="flex flex-col items-start text-left lg:col-span-5">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9EAF3] bg-[#D9EAF3]/50 px-3.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2f6b8f]" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#173F56]">
              Private Southern Shoreline
            </span>
          </div>

          <span className="mb-2 block select-none font-script text-3xl font-normal leading-none tracking-wide text-[#2f6b8f] sm:text-4xl">
            Where the ocean sets the rhythm...
          </span>

          <h2 className="mb-5 font-heading text-[34px] font-normal leading-tight tracking-tight text-[#173F56] sm:text-[42px] md:text-[50px] lg:mb-6">
            A Little Closer to the Ocean
          </h2>

          <p className="mb-6 font-sans text-[15px] font-light leading-relaxed text-slate-600 sm:mb-8 sm:text-[16px]">
            A relaxed coastal stay for travellers looking to slow down and enjoy Sri Lanka&apos;s southern shoreline. Designed for stillness, warm ocean breezes, and unhurried days at Noonna Beach Hotel Sri Lanka.
          </p>

          <div className="flex items-start gap-3 rounded-xl border border-[#D9EAF3] bg-white px-4 py-2.5 text-xs font-medium text-[#173F56] shadow-sm sm:items-center">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6b8f] sm:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15c2.5-2.5 5.5-2.5 8 0 2.5 2.5 5.5 2.5 8 0M3 10c2.5-2.5 5.5-2.5 8 0 2.5 2.5 5.5 2.5 8 0" />
            </svg>
            <span>Footsteps to warm Indian Ocean tidal breaks</span>
          </div>
        </Reveal>

        {/* Right Column (7 Cols in Stitch) */}
        <Reveal className="lg:col-span-7" delay={0.08}>
          <div className="group relative w-full overflow-hidden rounded-3xl border border-[#D9EAF3]/50 bg-white shadow-[0_16px_40px_-8px_rgba(23,63,86,0.06)]">
            <div className="relative h-[280px] w-full sm:h-[360px] md:h-[420px] lg:h-[480px]">
              <Image
                src="/images/hotel/property-exterior.jpg"
                alt="Sun-drenched Ocean Veranda facing Indian Ocean"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>
            <div className="absolute bottom-4 right-4 flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full border border-[#D9EAF3] bg-white/95 px-4 py-2 shadow-sm backdrop-blur-md sm:bottom-6 sm:right-6 sm:px-5 sm:py-2.5">
              <svg className="h-4 w-4 shrink-0 text-[#2f6b8f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="font-sans text-[11px] font-medium uppercase tracking-wider text-[#173F56] sm:text-xs">
                Sun-drenched Ocean Veranda
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
