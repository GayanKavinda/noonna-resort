import React from "react";
import Image from "next/image";
import { HOTEL_INFO } from "@/lib/constants";

export const HomeVideoShowcase: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8 border-b border-[#D9EAF3]/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-script text-3xl sm:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block leading-none select-none">
              Film &amp; atmosphere...
            </span>
            <h2 className="font-heading text-[36px] md:text-[40px] leading-tight text-[#173F56] font-normal">
              See More of Noonna Beach
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-2 text-sm font-medium text-[#397FA8] hover:text-[#173F56] transition-colors font-sans"
            href={HOTEL_INFO.socials.youtube}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Watch on YouTube</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* 2-Column Showcase matching Stitch Reference Lines 598-627 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main 8-Col Feature */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-[0_8px_32px_-6px_rgba(23,63,86,0.06)] bg-white border border-[#D9EAF3]/60 group cursor-pointer h-[400px]">
            <Image
              src="/images/hotel/hero-beach.jpg"
              alt="The Rhythm of Noonna Beach Feature Film Preview"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e]/70 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#397FA8]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-9 h-9 ml-1 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-8 right-8 text-white">
              <span className="text-xs text-[#bce2fe] uppercase tracking-wider block mb-1 font-medium font-sans">
                Official Feature Preview · 01:30
              </span>
              <h3 className="font-heading text-2xl font-normal text-white">
                The Rhythm of Noonna Beach
              </h3>
            </div>
          </div>

          {/* Right 4-Col Side Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-white border border-[#D9EAF3]/70 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.03)]">
              <span
                className="font-script text-3xl md:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block"
                style={{ fontSize: "1.75rem" }}
              >
                Film &amp; atmosphere...
              </span>
              <h4 className="font-heading text-2xl font-normal text-[#173F56] mb-3">
                Morning Tides &amp; Veranda Calm
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-light font-sans">
                Experience the gentle daylight awakening across the southern coast palms and the early sea mist settling over the warm waters.
              </p>
              <div className="h-36 rounded-2xl overflow-hidden relative group cursor-pointer border border-[#D9EAF3]/60">
                <Image
                  src="/images/hotel/property-exterior.jpg"
                  alt="Morning Tides & Ceylon Tea Video Still"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#001e2e]/20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/95 text-[#397FA8] flex items-center justify-center">
                    <svg className="w-5 h-5 ml-0.5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
