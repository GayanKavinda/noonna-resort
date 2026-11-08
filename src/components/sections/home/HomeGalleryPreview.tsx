import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HomeGalleryPreview: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8 border-b border-[#D9EAF3]/40" id="gallery">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-script text-3xl sm:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block leading-none select-none">
              Visual diary...
            </span>
            <h2 className="font-heading text-[36px] md:text-[44px] leading-tight text-[#173F56] font-normal">
              A Glimpse of the Coast
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#397FA8] hover:text-[#173F56] transition-colors font-sans"
          >
            <span>View All Photos</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* 4-Card Asymmetric Bento matching Stitch Reference Lines 503-528 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: 8 Cols, 420px */}
          <div className="md:col-span-8 h-[420px] rounded-3xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(23,63,86,0.05)] border border-[#D9EAF3]/60 group relative">
            <Image
              src="/images/hotel/hero-beach.jpg"
              alt="Southern Coast Shoreline at Sundown"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#D9EAF3]">
              <span className="text-xs text-[#173F56] font-medium font-sans">
                Southern Coast Shoreline at Sundown
              </span>
            </div>
          </div>

          {/* Card 2: 4 Cols, 420px */}
          <div className="md:col-span-4 h-[420px] rounded-3xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(23,63,86,0.05)] border border-[#D9EAF3]/60 group relative">
            <Image
              src="/images/hotel/property-grounds.jpg"
              alt="Garden Footpath to Sea"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#D9EAF3]">
              <span className="text-xs text-[#173F56] font-medium font-sans">
                Garden Footpath to Sea
              </span>
            </div>
          </div>

          {/* Card 3: 6 Cols, 300px */}
          <div className="md:col-span-6 h-[300px] rounded-3xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(23,63,86,0.05)] border border-[#D9EAF3]/60 group relative">
            <Image
              src="/images/hotel/property-exterior.jpg"
              alt="Morning Tea on the Veranda"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#D9EAF3]">
              <span className="text-xs text-[#173F56] font-medium font-sans">
                Morning Tea on the Veranda
              </span>
            </div>
          </div>

          {/* Card 4: 6 Cols, 300px */}
          <div className="md:col-span-6 h-[300px] rounded-3xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(23,63,86,0.05)] border border-[#D9EAF3]/60 group relative">
            <Image
              src="/images/rooms/deluxe-ocean-suite.jpg"
              alt="Twilight Ambiance at Noonna Beach"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#D9EAF3]">
              <span className="text-xs text-[#173F56] font-medium font-sans">
                Twilight Ambiance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
