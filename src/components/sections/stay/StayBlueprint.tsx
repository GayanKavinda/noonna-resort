import React from "react";
import { STAY_DATA } from "@/data/stayData";

interface StayBlueprintProps {
  className?: string;
}

export const StayBlueprint: React.FC<StayBlueprintProps> = ({
  className = "",
}) => {
  return (
    <section
      id="accommodation-blueprint"
      className={`w-full bg-white py-16 md:py-24 border-b border-[#D9EAF3]/60 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="font-script text-3xl md:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block">
            where thoughtful design meets calm...
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[44px] leading-tight text-[#173F56] font-normal mb-3 tracking-tight">
            Inside the Stay
          </h2>
          <p className="text-[15px] sm:text-base text-slate-600 font-light leading-relaxed">
            Thoughtfully appointed for couple travelers, surf wanderers, and quiet coastal retreats. One primary accommodation configured for peaceful comfort.
          </p>
        </div>

        {/* Room Overview Bar */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#D9EAF3] mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] border border-[#D9EAF3] flex items-center justify-center text-[#397FA8] shadow-xs shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#397FA8] font-medium block mb-0.5">
                Primary Accommodation
              </span>
              <h3 className="font-heading text-xl sm:text-2xl text-[#173F56] font-normal tracking-tight">
                {STAY_DATA.roomName}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3.5 py-1.5 rounded-full bg-[#EBF5FB]/80 text-[#173F56] text-xs font-normal border border-[#D9EAF3] shadow-2xs flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#397FA8]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{STAY_DATA.capacity}</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#EBF5FB]/80 text-[#173F56] text-xs font-normal border border-[#D9EAF3] shadow-2xs flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[#397FA8]"
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
              <span>{STAY_DATA.bedding}</span>
            </span>
          </div>
        </div>

        {/* 8 Structured Accommodation Blueprint Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {STAY_DATA.specifications.map((spec) => (
            <div
              key={spec.id}
              className="p-6 rounded-2xl bg-white border border-[#D9EAF3] shadow-2xs hover:border-[#397FA8]/50 hover:shadow-sm transition-all duration-300 flex flex-col group hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EBF5FB] border border-[#D9EAF3] text-[#397FA8] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 mb-4 shadow-2xs">
                {spec.iconName === "bed" && (
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
                {spec.iconName === "shower" && (
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
                {spec.iconName === "waves" && (
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
                {spec.iconName === "mode_fan" && (
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
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
                {spec.iconName === "tv" && (
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
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                )}
                {spec.iconName === "coffee" && (
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
                      d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
                    />
                  </svg>
                )}
                {spec.iconName === "checkroom" && (
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                )}
                {spec.iconName === "desk" && (
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
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                )}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#397FA8] font-medium block mb-1">
                {spec.category}
              </span>
              <h4 className="font-heading text-lg sm:text-[19px] text-[#173F56] font-normal mb-2 leading-snug">
                {spec.title}
              </h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verification Footnote */}
        <div className="p-4 rounded-xl bg-[#EBF5FB]/60 border border-[#D9EAF3] flex items-start sm:items-center justify-center gap-2.5 max-w-2xl mx-auto shadow-2xs text-center">
          <svg
            className="w-4 h-4 text-[#397FA8] shrink-0 mt-0.5 sm:mt-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-xs text-slate-600 font-light">
            <strong className="font-medium text-[#173F56]">
              Note:
            </strong>{" "}
            Room availability and seasonal reservations are managed directly via Booking.com.
          </p>
        </div>
      </div>
    </section>
  );
};

