import React from "react";
import Image from "next/image";
import Link from "next/link";
import { STAY_DATA } from "@/data/stayData";

interface StayLocationMapProps {
  className?: string;
}

export const StayLocationMap: React.FC<StayLocationMapProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full bg-white py-16 md:py-24 border-b border-[#D9EAF3]/60 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Regional Transit & Location Context */}
          <div className="lg:col-span-5 text-left">
            <div className="mb-6">
              <span className="font-script text-3xl md:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block">
                southern horizons...
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-[44px] leading-tight text-[#173F56] font-normal mb-3 tracking-tight">
                Find Us on the Southern Coast
              </h2>
              <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed font-light mb-4">
                Set quietly along Kumbalgama beach in Sri Lanka&apos;s Southern Province, close to famous southern surf spots and coastal railway connections.
              </p>

              {/* Official Verified Address Card */}
              <div className="p-3.5 rounded-2xl bg-[#EBF5FB]/70 border border-[#D9EAF3] flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#397FA8] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-xs text-[#173F56] font-medium">
                  <strong>Official Location:</strong> {STAY_DATA.location.address}
                </p>
              </div>
            </div>

            {/* Regional Points Highlight List */}
            <div className="space-y-2.5 mb-8">
              {STAY_DATA.location.distances.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-white border border-[#D9EAF3] flex items-center justify-between shadow-2xs hover:border-[#397FA8]/40 transition-colors"
                >
                  <span className="text-xs font-medium text-[#173F56] flex items-center gap-2.5">
                    {item.iconName === "train" && (
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
                          d="M12 4v1m6 11h2m-6 0h-4m-6 0H2m4 0a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0zM4 6h16v10H4z"
                        />
                      </svg>
                    )}
                    {item.iconName === "surfing" && (
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
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.75"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    {item.iconName === "beach_access" && (
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
                          d="M12 3v18m0-18C7.03 3 3 7.03 3 12h18c0-4.97-4.03-9-9-9z"
                        />
                      </svg>
                    )}
                    {item.iconName === "waves" && (
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
                          d="M3 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M3 9c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"
                        />
                      </svg>
                    )}
                    {item.iconName === "explore" && (
                      <svg
                        className="w-4 h-4 text-[#397FA8]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                      </svg>
                    )}
                    <span>{item.place}</span>
                  </span>
                  <span className="text-xs font-semibold text-[#397FA8]">
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#397FA8] hover:text-[#173F56] transition-colors focus:outline-none focus:ring-1 focus:ring-[#397FA8]"
              >
                <span>Explore Coastal Experiences</span>
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Coastal Shoreline Photo & Pin Overlay */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-3 bg-white border border-[#D9EAF3] shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)]">
              <div className="w-full h-[360px] sm:h-[400px] rounded-2xl relative overflow-hidden bg-slate-100 group">
                <Image
                  src="/images/hotel/hero-beach.jpg"
                  alt="Coastal shoreline near Kumbalgama in Southern Sri Lanka"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-[#001e2e]/30 pointer-events-none" />

                {/* Central Geographic Location Badge */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="relative flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#397FA8]/30 animate-ping absolute" />
                    <div className="px-5 py-3 rounded-full bg-white/95 backdrop-blur-md shadow-lg flex items-center gap-2.5 border border-[#D9EAF3]">
                      <svg
                        className="w-5 h-5 text-[#397FA8]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span className="text-xs sm:text-sm text-[#173F56] font-semibold tracking-wide">
                        Kumbalgama, Southern Province
                      </span>
                    </div>
                  </div>
                </div>

                {/* Verified Pin Tag */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl text-xs text-slate-600 font-medium border border-[#D9EAF3] shadow-xs">
                  Noonna Beach Hotel · Kumbalgama, Sri Lanka
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
