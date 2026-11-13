import React from "react";
import Image from "next/image";
import { HOTEL_INFO } from "@/lib/constants";
import { Reveal } from "@/components/motion/Reveal";

export const HomeVideoShowcase: React.FC = () => {
  return (
    <section className="w-full border-b border-[#D9EAF3]/40 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block select-none font-script text-3xl font-normal leading-none tracking-wide text-[#2f6b8f] sm:text-4xl">
              Film &amp; atmosphere...
            </span>
            <h2 className="font-heading text-[32px] font-normal leading-tight text-[#173F56] sm:text-[36px] md:text-[40px]">
              See More of Noonna Beach
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#2f6b8f] transition-colors hover:text-[#173F56]"
            href={HOTEL_INFO.socials.youtube}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Watch on YouTube</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </Reveal>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Main 8-Col Feature */}
          <Reveal className="group relative h-[260px] cursor-pointer overflow-hidden rounded-3xl border border-[#D9EAF3]/60 bg-white shadow-[0_8px_32px_-6px_rgba(23,63,86,0.06)] sm:h-[340px] md:h-[380px] lg:col-span-8 lg:h-[400px]">
            <Image
              src="/images/hotel/hero-beach.jpg"
              alt="The Rhythm of Noonna Beach Feature Film Preview"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e]/70 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2f6b8f]/90 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                <svg className="ml-1 h-7 w-7 fill-current sm:h-9 sm:w-9" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-6 sm:left-8 sm:right-8">
              <span className="mb-1 block font-sans text-xs font-medium uppercase tracking-wider text-[#bce2fe]">
                Official Feature Preview · 01:30
              </span>
              <h3 className="font-heading text-xl font-normal text-white sm:text-2xl">
                The Rhythm of Noonna Beach
              </h3>
            </div>
          </Reveal>

          {/* Right 4-Col Side Card */}
          <Reveal delay={0.05} className="flex flex-col gap-6 lg:col-span-4">
            <div className="rounded-3xl border border-[#D9EAF3]/70 bg-white p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.03)] sm:p-8">
              <span
                className="mb-2 block font-script text-3xl font-normal tracking-wide text-[#2f6b8f] md:text-4xl"
                style={{ fontSize: "1.75rem" }}
              >
                Film &amp; atmosphere...
              </span>
              <h4 className="mb-3 font-heading text-2xl font-normal text-[#173F56]">
                Morning Tides &amp; Veranda Calm
              </h4>
              <p className="mb-6 font-sans text-sm font-light leading-relaxed text-slate-600">
                Experience the gentle daylight awakening across the southern coast palms and the early sea mist settling over the warm waters.
              </p>
              <div className="group relative h-36 cursor-pointer overflow-hidden rounded-2xl border border-[#D9EAF3]/60">
                <Image
                  src="/images/hotel/property-exterior.jpg"
                  alt="Morning Tides & Ceylon Tea Video Still"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#001e2e]/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#2f6b8f]">
                    <svg className="ml-0.5 h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
