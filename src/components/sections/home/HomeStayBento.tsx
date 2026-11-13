import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export const HomeStayBento: React.FC = () => {
  return (
    <section className="w-full border-b border-[#D9EAF3]/40 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8" id="the-stay">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block select-none font-script text-3xl font-normal leading-none tracking-wide text-[#2f6b8f] sm:text-4xl">
              Private sanctuary...
            </span>
            <h2 className="font-heading text-[32px] font-normal leading-tight text-[#173F56] sm:text-[36px] md:text-[44px]">
              Your Own Coastal Hideaway
            </h2>
          </div>
          <p className="max-w-md font-sans text-[15px] font-light leading-relaxed text-slate-600">
            A comfortable base for relaxed days along Sri Lanka&apos;s southern coast. Enjoy uninterrupted privacy and open views across the palms to the surf.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Main Card (7 Cols) */}
          <Reveal className="lg:col-span-7">
            <div className="group relative min-h-[320px] overflow-hidden rounded-3xl border border-[#D9EAF3]/60 bg-white shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] sm:min-h-[380px] lg:min-h-[440px]">
              <div className="relative h-full min-h-[320px] w-full sm:min-h-[380px] lg:min-h-[440px]">
                <Image
                  src="/images/rooms/deluxe-ocean-suite.jpg"
                  alt="Noonna Beach Hotel coastal retreat interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-8 sm:left-8 sm:right-8">
                <span className="mb-2 inline-block rounded-full border border-white/30 bg-[#25566f]/90 px-3 py-1 font-sans text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                  Entire Resort Rental
                </span>
                <h3 className="mb-1.5 font-heading text-2xl font-normal text-white md:text-3xl">
                  A Private Resort Stay by the Sea
                </h3>
                <p className="font-sans text-sm font-light text-white/90">
                  Reserved exclusively for your group or family, with open coastal views and a peaceful shoreline setting.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column (5 Cols) */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            {/* Top Image: Grounds */}
            <Reveal delay={0.05}>
              <div className="group relative h-[220px] overflow-hidden rounded-3xl border border-[#D9EAF3]/60 bg-white shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] sm:h-[240px]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/hotel/property-grounds.jpg"
                    alt="Garden Pathways and Tropical Palms"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-full border border-[#D9EAF3] bg-white/95 px-3.5 py-1.5 shadow-sm backdrop-blur-sm sm:bottom-4 sm:left-4 sm:px-4">
                  <span className="font-sans text-xs font-medium text-[#173F56]">
                    Garden Footpath &amp; Sea Breeze
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Bottom Card: Accommodation Profile */}
            <Reveal delay={0.1} className="flex-grow">
              <div className="flex h-full flex-grow flex-col justify-between rounded-3xl border border-[#D9EAF3]/60 bg-white p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)] sm:p-8">
                <div>
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#2f6b8f]">
                      Accommodation Profile
                    </span>
                    <span className="flex items-center gap-1 font-sans text-xs font-semibold text-[#2f6b8f]">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      Verified Booking
                    </span>
                  </div>

                  <h4 className="mb-3 font-heading text-2xl font-normal text-[#173F56]">
                    Entire Resort Rental
                  </h4>

                  <p className="mb-6 font-sans text-sm font-light leading-relaxed text-slate-600">
                    Reserved exclusively for your party as a private resort stay, with dedicated host assistance and peaceful coastal surroundings.
                  </p>

                  {/* 4 Feature Pills in exact Stitch geometry */}
                  <div className="mb-6 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2">
                    <div className="flex items-center gap-2 rounded-xl border border-[#D9EAF3] bg-white px-3 py-2 font-sans text-xs font-medium text-[#173F56]">
                      <svg className="h-4 w-4 text-[#2f6b8f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18M3 10h18M3 14h18" />
                      </svg>
                      <span>Entire Resort</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-[#D9EAF3] bg-white px-3 py-2 font-sans text-xs font-medium text-[#173F56]">
                      <svg className="h-4 w-4 text-[#2f6b8f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                      <span>Ocean Veranda</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-[#D9EAF3] bg-white px-3 py-2 font-sans text-xs font-medium text-[#173F56]">
                      <svg className="h-4 w-4 text-[#2f6b8f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16M4 12v5a3 3 0 003 3h10a3 3 0 003-3v-5M7 12V6a2 2 0 012-2h1a2 2 0 012 2v6" />
                      </svg>
                      <span>Private Stay</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-[#D9EAF3] bg-white px-3 py-2 font-sans text-xs font-medium text-[#173F56]">
                      <svg className="h-4 w-4 text-[#2f6b8f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span>Group &amp; Family</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/stay"
                  className="inline-flex items-center gap-2 pt-2 font-sans text-sm font-medium text-[#2f6b8f] transition-colors hover:text-[#173F56]"
                >
                  <span>Explore the Stay</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
