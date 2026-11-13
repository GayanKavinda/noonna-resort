import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

const MAPS_URL = "https://maps.app.goo.gl/7Fea7dbtqiWPuo2T8";

export const HomeLocation: React.FC = () => {
  return (
    <section className="w-full border-b border-[#D9EAF3]/40 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column (5 Cols) */}
          <Reveal className="lg:col-span-5">
            <div className="mb-8">
              <span className="mb-2 block select-none font-script text-3xl font-normal leading-none tracking-wide text-[#2f6b8f] sm:text-4xl">
                The path to tranquility...
              </span>
              <h2 className="mb-4 font-heading text-[32px] font-normal leading-tight tracking-tight text-[#173F56] sm:text-[36px] md:text-[44px]">
                Find Your Way to the Coast
              </h2>
              <p className="font-sans text-[15px] font-light leading-relaxed text-slate-600">
                Noonna Beach Hotel is quietly positioned along Sri Lanka&apos;s celebrated southern coastline, tucked away from the main highway between historic UNESCO Galle Fort and the gentle coastal bays of Matara.
              </p>
            </div>

            {/* 3 Transit Items */}
            <div className="mb-8 space-y-3.5 font-sans sm:mb-10">
              <div className="flex items-start gap-4 rounded-2xl border border-[#D9EAF3] bg-white p-4 shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)] transition-all duration-200 hover:border-[#2f6b8f]/50">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D9EAF3] bg-[#D9EAF3]/50 text-[#2f6b8f]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-[#173F56]">
                    Airport Transfer &amp; Expressway
                  </h4>
                  <p className="text-xs font-light leading-relaxed text-slate-600">
                    Approx. 2.5 hours scenic expressway drive from Colombo Bandaranaike International Airport (CMB).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#D9EAF3] bg-white p-4 shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)] transition-all duration-200 hover:border-[#2f6b8f]/50">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D9EAF3] bg-[#D9EAF3]/50 text-[#2f6b8f]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-[#173F56]">
                    Coastal Rail Access
                  </h4>
                  <p className="text-xs font-light leading-relaxed text-slate-600">
                    Direct coastal railway connections link Galle and Matara stations within 30 minutes of our gates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#D9EAF3] bg-white p-4 shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)] transition-all duration-200 hover:border-[#2f6b8f]/50">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D9EAF3] bg-[#D9EAF3]/50 text-[#2f6b8f]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-[#173F56]">
                    Sanctuary Coordinates
                  </h4>
                  <p className="text-xs font-light leading-relaxed text-slate-600">
                    Southern Coast Shoreline, Matara District, Southern Province, Sri Lanka.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col items-stretch gap-3 border-t border-[#D9EAF3]/60 pt-4 font-sans sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#2f6b8f] px-5 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_4px_24px_-4px_rgba(23,63,86,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2e698c] sm:w-auto"
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Get Directions</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </a>

              <Link
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#D9EAF3] bg-white px-5 text-xs font-semibold uppercase tracking-wider text-[#173F56] transition-all duration-200 hover:bg-[#D9EAF3]/20 hover:text-[#2f6b8f] sm:w-auto"
                href="/contact"
              >
                <span>Contact Host</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </Reveal>

          {/* Right Column (7 Cols Map Graphic) */}
          <Reveal delay={0.05} className="lg:col-span-7">
            <div className="rounded-3xl border border-[#D9EAF3] bg-white p-2.5 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.05)] sm:p-3">
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-[#D9EAF3]/40 sm:h-[340px] md:h-[380px]">
                <Image
                  src="/images/hotel/hero-beach.jpg"
                  alt="Southern Coast Sri Lanka Map View"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#001e2e]/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute h-12 w-12 animate-ping rounded-full bg-[#2f6b8f]/30" />
                    <div className="relative z-10 flex items-center gap-2 rounded-full border border-[#D9EAF3] bg-white/95 px-4 py-2 shadow-lg backdrop-blur-md">
                      <svg className="h-5 w-5 text-[#2f6b8f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-sans text-xs font-semibold tracking-wide text-[#173F56]">
                        Noonna Beach Hotel
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-xl border border-[#D9EAF3] bg-white/90 px-3 py-2 font-sans text-xs font-medium text-slate-700 backdrop-blur-sm sm:bottom-4 sm:left-4 sm:px-4">
                  Southern Province, Sri Lanka
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
