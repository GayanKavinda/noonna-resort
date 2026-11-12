import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HomeStayBento: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8 border-b border-[#D9EAF3]/40" id="the-stay">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-script text-3xl sm:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block leading-none select-none">
              Private sanctuary...
            </span>
            <h2 className="font-heading text-[36px] md:text-[44px] leading-tight text-[#173F56] font-normal">
              Your Own Coastal Hideaway
            </h2>
          </div>
          <p className="text-[15px] text-slate-600 max-w-md font-light leading-relaxed font-sans">
            A comfortable base for relaxed days along Sri Lanka&apos;s southern coast. Enjoy uninterrupted privacy and open views across the palms to the surf.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden relative group min-h-[440px] border border-[#D9EAF3]/60 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)]">
            <div className="relative w-full h-full min-h-[440px]">
              <Image
                src="/images/rooms/deluxe-ocean-suite.jpg"
                alt="Noonna Beach Hotel coastal retreat interior"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="w-full h-full min-h-[440px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e]/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs tracking-wider uppercase text-white font-medium mb-2 border border-white/30 font-sans">
                Entire Resort Rental
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-normal text-white mb-1.5">
                A Private Resort Stay by the Sea
              </h3>
              <p className="text-sm text-white/90 font-light font-sans">
                Reserved exclusively for your group or family, with open coastal views and a peaceful shoreline setting.
              </p>
            </div>
          </div>

          {/* Right Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Top Image: Grounds */}
            <div className="h-[240px] rounded-3xl overflow-hidden bg-white relative group border border-[#D9EAF3]/60 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/hotel/property-grounds.jpg"
                  alt="Garden Pathways and Tropical Palms"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#D9EAF3] shadow-sm">
                <span className="text-xs text-[#173F56] font-medium font-sans">
                  Garden Footpath &amp; Sea Breeze
                </span>
              </div>
            </div>

            {/* Bottom Card: Accommodation Profile */}
            <div className="p-8 rounded-3xl bg-white border border-[#D9EAF3]/60 flex flex-col justify-between flex-grow shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-[#397FA8] uppercase tracking-widest font-semibold font-sans">
                    Accommodation Profile
                  </span>
                  <span className="flex items-center gap-1 text-[#397FA8] text-xs font-semibold font-sans">
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Verified Booking
                  </span>
                </div>

                <h4 className="font-heading text-2xl font-normal text-[#173F56] mb-3">
                  Entire Resort Rental
                </h4>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed font-light font-sans">
                  Reserved exclusively for your party as a private resort stay, with dedicated host assistance and peaceful coastal surroundings.
                </p>

                {/* 4 Feature Pills in exact Stitch geometry */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#D9EAF3] text-xs font-medium text-[#173F56] font-sans">
                    <svg className="w-4 h-4 text-[#397FA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18M3 10h18M3 14h18" />
                    </svg>
                    <span>Entire Resort</span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#D9EAF3] text-xs font-medium text-[#173F56] font-sans">
                    <svg className="w-4 h-4 text-[#397FA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    <span>Ocean Veranda</span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#D9EAF3] text-xs font-medium text-[#173F56] font-sans">
                    <svg className="w-4 h-4 text-[#397FA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16M4 12v5a3 3 0 003 3h10a3 3 0 003-3v-5M7 12V6a2 2 0 012-2h1a2 2 0 012 2v6" />
                    </svg>
                    <span>Private Stay</span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#D9EAF3] text-xs font-medium text-[#173F56] font-sans">
                    <svg className="w-4 h-4 text-[#397FA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>Group &amp; Family</span>
                  </div>
                </div>
              </div>

              <Link
                href="/stay"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#397FA8] hover:text-[#173F56] transition-colors pt-2 font-sans"
              >
                <span>Explore the Stay</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
