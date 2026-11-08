import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HomeLocation: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8 border-b border-[#D9EAF3]/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (5 Cols) matching Stitch Reference Lines 634-681 */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <span className="font-script text-3xl sm:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block leading-none select-none">
                The path to tranquility...
              </span>
              <h2 className="font-heading text-[36px] md:text-[44px] leading-tight text-[#173F56] font-normal mb-4 tracking-tight">
                Find Your Way to the Coast
              </h2>
              <p className="text-[15px] text-slate-600 leading-relaxed font-light font-sans">
                Noonna Beach Hotel is quietly positioned along Sri Lanka&apos;s celebrated southern coastline, tucked away from the main highway between historic UNESCO Galle Fort and the gentle coastal bays of Matara.
              </p>
            </div>

            {/* 3 Transit Items */}
            <div className="space-y-3.5 mb-10 font-sans">
              {/* Item 1 */}
              <div className="p-4 rounded-2xl bg-white border border-[#D9EAF3] hover:border-[#397FA8]/50 shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)] transition-all duration-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D9EAF3]/50 border border-[#D9EAF3] flex items-center justify-center text-[#397FA8] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#173F56] mb-1">
                    Airport Transfer &amp; Expressway
                  </h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Approx. 2.5 hours scenic expressway drive from Colombo Bandaranaike International Airport (CMB).
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="p-4 rounded-2xl bg-white border border-[#D9EAF3] hover:border-[#397FA8]/50 shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)] transition-all duration-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D9EAF3]/50 border border-[#D9EAF3] flex items-center justify-center text-[#397FA8] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#173F56] mb-1">
                    Coastal Rail Access
                  </h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Direct coastal railway connections link Galle and Matara stations within 30 minutes of our gates.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="p-4 rounded-2xl bg-white border border-[#D9EAF3] hover:border-[#397FA8]/50 shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)] transition-all duration-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D9EAF3]/50 border border-[#D9EAF3] flex items-center justify-center text-[#397FA8] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#173F56] mb-1">
                    Sanctuary Coordinates
                  </h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Southern Coast Shoreline, Matara District, Southern Province, Sri Lanka.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[#D9EAF3]/60 font-sans">
              <a
                className="h-11 px-5 rounded-xl bg-[#397FA8] hover:bg-[#2e698c] text-white text-xs uppercase tracking-wider font-semibold transition-all duration-300 inline-flex items-center gap-2 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.2)] hover:-translate-y-0.5"
                href="https://maps.google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Get Directions</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </a>

              <Link
                className="h-11 px-5 rounded-xl bg-white hover:bg-[#D9EAF3]/20 text-[#173F56] hover:text-[#397FA8] text-xs uppercase tracking-wider font-semibold border border-[#D9EAF3] transition-all duration-200 inline-flex items-center gap-2"
                href="/contact"
              >
                <span>Contact Host</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column (7 Cols Map Graphic) matching Stitch Reference Lines 682-701 */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-3 bg-white border border-[#D9EAF3] shadow-[0_4px_24px_-4px_rgba(23,63,86,0.05)]">
              <div className="w-full h-[380px] rounded-2xl relative overflow-hidden bg-[#D9EAF3]/40">
                <Image
                  src="/images/hotel/hero-beach.jpg"
                  alt="Southern Coast Sri Lanka Map View"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#001e2e]/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#397FA8]/30 animate-ping absolute" />
                    <div className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-lg flex items-center gap-2 border border-[#D9EAF3] relative z-10">
                      <svg className="w-5 h-5 text-[#397FA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xs text-[#173F56] font-semibold tracking-wide font-sans">
                        Noonna Beach Hotel
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs text-slate-700 font-medium border border-[#D9EAF3] font-sans">
                  Southern Province, Sri Lanka
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
