import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HOTEL_INFO } from "@/lib/constants";

export const HomeHero: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden flex items-center min-h-screen h-screen bg-[#173F56]">
      {/* Background Image & Duotone Bleed */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/images/hotel/hero-beach.jpg"
          alt="Sri Lanka Southern Coast Ocean View at Golden Hour"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover scale-100 object-center"
          style={{ objectFit: "cover", objectPosition: "center 42%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e2e]/85 via-[#001e2e]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e]/80 via-transparent to-black/30" />
      </div>

      {/* Hero Content Container - Full Height Layout with Header Clearance */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-between h-full pt-28 pb-8">
        <div className="w-full" />

        {/* Headline & CTAs (Left Aligned matching Stitch reference) */}
        <div className="max-w-2xl text-left my-auto py-8">
          <h1 className="font-heading text-white text-[46px] md:text-[56px] lg:text-[64px] leading-[1.08] font-normal mb-4 tracking-tight drop-shadow-md">
            Your Quiet Escape
            <br />
            <span className="italic font-normal">by the Sea</span>
          </h1>

          <p className="text-[16px] md:text-[18px] text-white/90 font-light max-w-lg mb-8 leading-relaxed drop-shadow-sm font-sans">
            Discover a slower pace where Indian Ocean tides meet modern barefoot sanctuary living.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-7 rounded-xl bg-[#397FA8] hover:bg-[#2e698c] text-white text-[14px] font-medium transition-all duration-300 inline-flex items-center gap-2 shadow-[0_8px_24px_-4px_rgba(23,63,86,0.35)] hover:-translate-y-0.5"
            >
              <span>Book Your Stay</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <Link
              href="#the-stay"
              className="h-12 px-7 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[14px] font-medium border border-white/30 backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5"
            >
              <span>Explore the Stay</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Status / Meta Bar */}
        <div className="w-full flex items-center justify-between pt-6 border-t border-white/20">
          <div className="flex items-center gap-2 text-white/85 text-xs font-light font-sans">
            <svg className="w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15c2.5-2.5 5.5-2.5 8 0 2.5 2.5 5.5 2.5 8 0M3 10c2.5-2.5 5.5-2.5 8 0 2.5 2.5 5.5 2.5 8 0" />
            </svg>
            <span>Uncrowded Southern Shoreline · Matara District</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-white/70 text-xs font-light font-sans">
            <span>Scroll to explore</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
