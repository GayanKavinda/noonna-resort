import React from "react";
import { STAY_DATA } from "@/data/stayData";

interface StayAmenitiesProps {
  className?: string;
}

export const StayAmenities: React.FC<StayAmenitiesProps> = ({
  className = "",
}) => {
  return (
    <section
      id="suite-details"
      className={`w-full bg-white py-16 md:py-24 border-b border-[#D9EAF3]/60 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <span className="font-script text-3xl md:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block">
            tailored comforts...
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[40px] leading-tight text-[#173F56] font-normal tracking-tight">
            Thoughtful Essentials
          </h2>
          <p className="text-[15px] sm:text-base text-slate-600 mt-3 font-light">
            Everything you need for an effortless, barefoot coastal rhythm.
          </p>
        </div>

        {/* 4-Column Categorized Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAY_DATA.amenityCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white border border-[#D9EAF3] shadow-2xs hover:border-[#397FA8]/50 hover:shadow-sm transition-all flex flex-col group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EBF5FB] text-[#397FA8] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  {category.iconName === "bed" && (
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
                  {category.iconName === "shower" && (
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
                  {category.iconName === "local_cafe" && (
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
                  {category.iconName === "wifi" && (
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
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="font-heading text-xl text-[#173F56] font-normal leading-tight">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-center gap-2.5 text-xs text-slate-600 font-light"
                  >
                    <svg
                      className="w-4 h-4 text-[#397FA8] shrink-0"
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

