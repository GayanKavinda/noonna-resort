import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const HomeGalleryPreview: React.FC = () => {
  return (
    <section className="w-full border-b border-[#D9EAF3]/40 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8" id="gallery">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block select-none font-script text-3xl font-normal leading-none tracking-wide text-[#2f6b8f] sm:text-4xl">
              Visual diary...
            </span>
            <h2 className="font-heading text-[32px] font-normal leading-tight text-[#173F56] sm:text-[36px] md:text-[44px]">
              A Glimpse of the Coast
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#2f6b8f] transition-colors hover:text-[#173F56]"
          >
            <span>View All Photos</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </Reveal>

        {/* 4-Card Asymmetric Bento matching Stitch Reference */}
        <Stagger className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12">
          {/* Card 1: 8 Cols */}
          <StaggerItem className="group relative h-[260px] overflow-hidden rounded-3xl border border-[#D9EAF3]/60 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.05)] sm:h-[320px] md:col-span-8 md:h-[420px]">
            <Image
              src="/images/hotel/hero-beach.jpg"
              alt="Southern Coast Shoreline at Sundown"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-full border border-[#D9EAF3] bg-white/90 px-3.5 py-2 backdrop-blur-md sm:bottom-6 sm:left-6 sm:px-4">
              <span className="font-sans text-xs font-medium text-[#173F56]">
                Southern Coast Shoreline at Sundown
              </span>
            </div>
          </StaggerItem>

          {/* Card 2: 4 Cols */}
          <StaggerItem className="group relative h-[260px] overflow-hidden rounded-3xl border border-[#D9EAF3]/60 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.05)] sm:h-[320px] md:col-span-4 md:h-[420px]">
            <Image
              src="/images/hotel/property-grounds.jpg"
              alt="Garden Footpath to Sea"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-full border border-[#D9EAF3] bg-white/90 px-3.5 py-2 backdrop-blur-md sm:bottom-6 sm:left-6 sm:px-4">
              <span className="font-sans text-xs font-medium text-[#173F56]">
                Garden Footpath to Sea
              </span>
            </div>
          </StaggerItem>

          {/* Card 3: 6 Cols */}
          <StaggerItem className="group relative h-[240px] overflow-hidden rounded-3xl border border-[#D9EAF3]/60 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.05)] sm:h-[280px] md:col-span-6 md:h-[300px]">
            <Image
              src="/images/hotel/property-exterior.jpg"
              alt="Morning Tea on the Veranda"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-full border border-[#D9EAF3] bg-white/90 px-3.5 py-2 backdrop-blur-md sm:bottom-6 sm:left-6 sm:px-4">
              <span className="font-sans text-xs font-medium text-[#173F56]">
                Morning Tea on the Veranda
              </span>
            </div>
          </StaggerItem>

          {/* Card 4: 6 Cols */}
          <StaggerItem className="group relative h-[240px] overflow-hidden rounded-3xl border border-[#D9EAF3]/60 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.05)] sm:h-[280px] md:col-span-6 md:h-[300px]">
            <Image
              src="/images/rooms/deluxe-ocean-suite.jpg"
              alt="Twilight Ambiance at Noonna Beach"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-full border border-[#D9EAF3] bg-white/90 px-3.5 py-2 backdrop-blur-md sm:bottom-6 sm:left-6 sm:px-4">
              <span className="font-sans text-xs font-medium text-[#173F56]">
                Twilight Ambiance
              </span>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
};
