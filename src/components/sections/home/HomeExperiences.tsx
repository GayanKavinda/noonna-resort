import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HomeExperiences: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8 border-b border-[#D9EAF3]/40" id="experiences">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-script text-3xl sm:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block leading-none select-none">
              Southern coastline...
            </span>
            <h2 className="font-heading text-[36px] md:text-[44px] leading-tight text-[#173F56] font-normal">
              Explore Beyond Your Stay
            </h2>
          </div>
          <p className="text-[15px] text-slate-600 max-w-md font-light leading-relaxed font-sans">
            Curated encounters along Sri Lanka&apos;s southern shoreline, from uncrowded surf points to age-old heritage paths.
          </p>
        </div>

        {/* 3 Experience Cards matching Stitch Reference Lines 435-481 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Card 1: Southern Coast Beaches */}
          <div className="rounded-3xl overflow-hidden bg-white border border-[#D9EAF3]/70 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] group">
            <div className="h-64 overflow-hidden relative">
              <Image
                src="/images/hotel/hero-beach.jpg"
                alt="Southern Coast Beaches & Surf Breaks"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#D9EAF3]">
                <span className="text-xs text-[#397FA8] font-medium font-sans">Coastal Tides</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-heading text-2xl font-normal text-[#173F56] mb-3">
                Southern Coast Beaches
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 font-sans">
                Secluded sandy coves, quiet natural tidal pools for sunset dips, and beginner-to-intermediate surf breaks tucked away from heavy resort crowds.
              </p>
              <Link
                href="/experiences"
                className="text-xs font-medium text-[#397FA8] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform font-sans"
              >
                <span>Explore Coves</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 2: Coastal Exploration */}
          <div className="rounded-3xl overflow-hidden bg-white border border-[#D9EAF3]/70 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] group">
            <div className="h-64 overflow-hidden relative">
              <Image
                src="/images/hotel/property-grounds.jpg"
                alt="Coastal Exploration and Lighthouse Trail"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#D9EAF3]">
                <span className="text-xs text-[#397FA8] font-medium font-sans">Coast Trails</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-heading text-2xl font-normal text-[#173F56] mb-3">
                Coastal Exploration
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 font-sans">
                Scenic trails towards historic Dondra Lighthouse, protected sea turtle conservation sanctuaries, and tranquil shaded village bicycle circuits.
              </p>
              <Link
                href="/experiences"
                className="text-xs font-medium text-[#397FA8] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform font-sans"
              >
                <span>View Trails</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 3: Local Food & Culture */}
          <div className="rounded-3xl overflow-hidden bg-white border border-[#D9EAF3]/70 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] group">
            <div className="h-64 overflow-hidden relative">
              <Image
                src="/images/hotel/property-exterior.jpg"
                alt="Local Food & Clay Pot Dining Culture"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#D9EAF3]">
                <span className="text-xs text-[#397FA8] font-medium font-sans">Local Flavours</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-heading text-2xl font-normal text-[#173F56] mb-3">
                Local Food &amp; Culture
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 font-sans">
                Morning harbour fresh catch seafood, authentic wood-fired clay pot curry dining, and aromatic heritage cinnamon plantation tastings.
              </p>
              <Link
                href="/experiences"
                className="text-xs font-medium text-[#397FA8] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform font-sans"
              >
                <span>Taste Culture</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Discover All Experiences Link */}
        <div className="text-center">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#397FA8] hover:text-[#173F56] transition-colors font-sans"
          >
            <span>Discover All Coastal Experiences</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
