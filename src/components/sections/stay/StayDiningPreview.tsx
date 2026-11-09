import React from "react";
import Image from "next/image";
import { STAY_DATA } from "@/data/stayData";

interface StayDiningPreviewProps {
  className?: string;
}

export const StayDiningPreview: React.FC<StayDiningPreviewProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full bg-white py-16 md:py-24 border-b border-[#D9EAF3]/60 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Dining Editorial Info */}
          <div className="lg:col-span-5 text-left flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-[#EBF5FB] border border-[#D9EAF3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#397FA8]" />
              <span className="text-[11px] uppercase tracking-widest text-[#173F56] font-semibold">
                Dining & Refreshments
              </span>
            </div>

            <span className="font-script text-3xl sm:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block">
              a taste of the coast...
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] leading-tight text-[#173F56] font-normal mb-4 tracking-tight">
              Food & Your Stay
            </h2>

            <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-6 font-light">
              Experience the relaxed pace of southern coastal living. Enjoy peaceful morning refreshments and authentic regional flavours sourced from surrounding markets and coastal villages.
            </p>

            {/* 3 Dining Highlight Cards */}
            <div className="space-y-3 w-full mb-6">
              {STAY_DATA.diningFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-[#D9EAF3] flex items-start gap-3.5 shadow-2xs hover:border-[#397FA8]/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EBF5FB] text-[#397FA8] flex items-center justify-center shrink-0 mt-0.5">
                    {feature.iconName === "takeout_dining" && (
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
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    )}
                    {feature.iconName === "restaurant" && (
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
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    )}
                    {feature.iconName === "local_bar" && (
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
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#173F56]">
                      {feature.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-light leading-relaxed mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Host Note Neutral Banner */}
            <div className="p-3.5 rounded-2xl bg-[#EBF5FB]/80 border border-[#D9EAF3] text-xs text-[#173F56] font-light flex items-start gap-2.5 w-full">
              <svg
                className="w-4 h-4 text-[#397FA8] shrink-0 mt-0.5"
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
              <span>
                <strong className="font-medium text-[#173F56]">
                  Host Note:
                </strong>{" "}
                Specific breakfast options, meal inquiries, and regional dining recommendations are arranged directly with the property host.
              </span>
            </div>
          </div>

          {/* Right Column: Coastal Garden Grounds Imagery */}
          <div className="lg:col-span-7">
            <div className="w-full relative rounded-3xl overflow-hidden shadow-[0_16px_40px_-8px_rgba(23,63,86,0.08)] bg-slate-100 border border-[#D9EAF3]/70 group">
              <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px]">
                <Image
                  src="/images/hotel/property-grounds.jpg"
                  alt="Coastal grounds and serene tropical garden at Noonna Beach Hotel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e]/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#D9EAF3] shadow-xs flex items-center gap-2">
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="text-xs uppercase tracking-wider text-[#173F56] font-medium">
                    Garden Grounds & Open-Air Surroundings
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

