import React from "react";
import Image from "next/image";
import Link from "next/link";
import { STAY_DATA } from "@/data/stayData";

interface StayHeroProps {
  className?: string;
}

export const StayHero: React.FC<StayHeroProps> = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-white pt-8 pb-16 md:pt-12 md:pb-20 border-b border-[#D9EAF3]/60 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-slate-500 font-light mb-8"
        >
          <Link
            href="/"
            className="hover:text-[#397FA8] transition-colors focus:outline-none focus:ring-1 focus:ring-[#397FA8]"
          >
            Home
          </Link>
          <span className="text-slate-300" aria-hidden="true">
            /
          </span>
          <span className="text-[#173F56] font-medium" aria-current="page">
            The Stay
          </span>
        </nav>

        {/* Split Suite Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Room Overview & Key Specs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="font-script text-3xl sm:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block">
              where the ocean sets the rhythm...
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] text-[#173F56] font-normal tracking-tight mb-4">
              Double Room <br />
              <span className="italic font-normal">with Private Bathroom</span>
            </h1>

            <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-8 font-light max-w-xl">
              {STAY_DATA.shortDescription}
            </p>

            {/* Core Specifications 4-Chip Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              {STAY_DATA.heroBadges.map((badge, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-2xl bg-white border border-[#D9EAF3] shadow-xs flex items-start gap-3 hover:border-[#397FA8]/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EBF5FB] flex items-center justify-center text-[#397FA8] shrink-0 mt-0.5">
                    {badge.icon === "bed" && (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.75"
                          d="M3 7v11m0-4h18m0-7v11M3 10h18M7 10V7h4v3"
                        />
                      </svg>
                    )}
                    {badge.icon === "group" && (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.75"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    )}
                    {badge.icon === "shower" && (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.75"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    )}
                    {badge.icon === "waves" && (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.75"
                          d="M3 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M3 9c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#173F56]">
                      {badge.label}
                    </p>
                    <p className="text-[11px] text-slate-500 font-light">
                      {badge.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs & Official Booking Link */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <a
                href={STAY_DATA.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-7 rounded-xl bg-[#397FA8] hover:bg-[#2E698D] text-white text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 shadow-[0_8px_24px_-4px_rgba(23,63,86,0.18)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#397FA8] focus:ring-offset-2"
              >
                <span>Check Availability on Booking.com</span>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <a
                href="#accommodation-blueprint"
                className="h-12 px-5 rounded-xl bg-white hover:bg-[#EBF5FB]/60 text-[#173F56] text-sm font-medium border border-[#D9EAF3] transition-colors inline-flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#397FA8]"
              >
                <span>Explore Room Details</span>
                <svg
                  className="w-4 h-4 text-[#397FA8]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-light">
              <svg
                className="w-4 h-4 text-[#397FA8]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Official Booking.com Listing · Verified Accommodation</span>
            </div>
          </div>

          {/* Right Column: Prominent Interior Photo */}
          <div className="lg:col-span-6">
            <div className="w-full relative rounded-3xl overflow-hidden shadow-[0_16px_40px_-8px_rgba(23,63,86,0.08)] bg-slate-100 border border-[#D9EAF3]/70 group">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px]">
                <Image
                  src="/images/rooms/deluxe-ocean-suite.jpg"
                  alt="Interior of Double Room with Private Bathroom at Noonna Beach Hotel"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e]/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Info Pill */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between border border-[#D9EAF3] shadow-sm">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#397FA8] font-semibold">
                      Confirmed Room
                    </p>
                    <p className="font-heading text-base sm:text-lg text-[#173F56] font-normal">
                      Double Room with Private Bathroom
                    </p>
                  </div>
                  <span className="px-3 py-1.5 rounded-full bg-[#EBF5FB] text-[#397FA8] text-xs font-semibold border border-[#D9EAF3] flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>1 Room Only</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

