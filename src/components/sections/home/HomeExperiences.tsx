import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const HomeExperiences: React.FC = () => {
  return (
    <section className="w-full border-b border-[#D9EAF3]/40 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8" id="experiences">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block select-none font-script text-3xl font-normal leading-none tracking-wide text-[#2f6b8f] sm:text-4xl">
              Southern coastline...
            </span>
            <h2 className="font-heading text-[32px] font-normal leading-tight text-[#173F56] sm:text-[36px] md:text-[44px]">
              Explore Beyond Your Stay
            </h2>
          </div>
          <p className="max-w-md font-sans text-[15px] font-light leading-relaxed text-slate-600">
            Curated encounters along Sri Lanka&apos;s southern shoreline, from uncrowded surf points to age-old heritage paths.
          </p>
        </Reveal>

        {/* 3 Experience Cards */}
        <Stagger className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
          {/* Card 1: Southern Coast Beaches */}
          <StaggerItem className="group overflow-hidden rounded-3xl border border-[#D9EAF3]/70 bg-white shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)]">
            <div className="relative h-56 overflow-hidden sm:h-64">
              <Image
                src="/images/hotel/hero-beach.jpg"
                alt="Southern Coast Beaches & Surf Breaks"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 rounded-full border border-[#D9EAF3] bg-white/95 px-3.5 py-1 backdrop-blur-md">
                <span className="font-sans text-xs font-medium text-[#2f6b8f]">Coastal Tides</span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="mb-3 font-heading text-2xl font-normal text-[#173F56]">
                Southern Coast Beaches
              </h3>
              <p className="mb-6 font-sans text-sm font-light leading-relaxed text-slate-600">
                Secluded sandy coves, quiet natural tidal pools for sunset dips, and beginner-to-intermediate surf breaks tucked away from heavy resort crowds.
              </p>
              <Link
                href="/experiences"
                className="inline-flex items-center gap-1 font-sans text-xs font-medium text-[#2f6b8f] transition-transform group-hover:translate-x-1"
              >
                <span>Explore Coves</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </StaggerItem>

          {/* Card 2: Coastal Exploration */}
          <StaggerItem className="group overflow-hidden rounded-3xl border border-[#D9EAF3]/70 bg-white shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)]">
            <div className="relative h-56 overflow-hidden sm:h-64">
              <Image
                src="/images/hotel/property-grounds.jpg"
                alt="Coastal Exploration and Lighthouse Trail"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 rounded-full border border-[#D9EAF3] bg-white/95 px-3.5 py-1 backdrop-blur-md">
                <span className="font-sans text-xs font-medium text-[#2f6b8f]">Coast Trails</span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="mb-3 font-heading text-2xl font-normal text-[#173F56]">
                Coastal Exploration
              </h3>
              <p className="mb-6 font-sans text-sm font-light leading-relaxed text-slate-600">
                Scenic trails towards historic Dondra Lighthouse, protected sea turtle conservation sanctuaries, and tranquil shaded village bicycle circuits.
              </p>
              <Link
                href="/experiences"
                className="inline-flex items-center gap-1 font-sans text-xs font-medium text-[#2f6b8f] transition-transform group-hover:translate-x-1"
              >
                <span>View Trails</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </StaggerItem>

          {/* Card 3: Local Food & Culture */}
          <StaggerItem className="group overflow-hidden rounded-3xl border border-[#D9EAF3]/70 bg-white shadow-[0_4px_24px_-4px_rgba(23,63,86,0.04)]">
            <div className="relative h-56 overflow-hidden sm:h-64">
              <Image
                src="/images/hotel/property-exterior.jpg"
                alt="Local Food & Clay Pot Dining Culture"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 rounded-full border border-[#D9EAF3] bg-white/95 px-3.5 py-1 backdrop-blur-md">
                <span className="font-sans text-xs font-medium text-[#2f6b8f]">Local Flavours</span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="mb-3 font-heading text-2xl font-normal text-[#173F56]">
                Local Food &amp; Culture
              </h3>
              <p className="mb-6 font-sans text-sm font-light leading-relaxed text-slate-600">
                Morning harbour fresh catch seafood, authentic wood-fired clay pot curry dining, and aromatic heritage cinnamon plantation tastings.
              </p>
              <Link
                href="/experiences"
                className="inline-flex items-center gap-1 font-sans text-xs font-medium text-[#2f6b8f] transition-transform group-hover:translate-x-1"
              >
                <span>Taste Culture</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </StaggerItem>
        </Stagger>

        {/* Discover All Experiences Link */}
        <Reveal delay={0.1}>
          <div className="text-center">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#2f6b8f] transition-colors hover:text-[#173F56]"
            >
              <span>Discover All Coastal Experiences</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
