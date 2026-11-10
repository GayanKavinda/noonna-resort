"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CarouselSlide } from "@/types";
import { Container } from "@/components/ui/Container";

interface DiscoverCarouselProps {
  slides: CarouselSlide[];
  eyebrow?: string;
  title?: string;
  deck?: string;
  className?: string;
  id?: string;
}

export const DiscoverCarousel: React.FC<DiscoverCarouselProps> = ({
  slides,
  eyebrow = "unfold the journey...",
  title = "Curated Southern Discoveries",
  deck = "Handpicked coves, heritage landmarks, and serene coastal encounters surrounding Noonna Beach Hotel.",
  className = "",
  id,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className={`w-full bg-white py-16 md:py-24 overflow-hidden ${className}`}>
      <Container>
        {/* Carousel Header trio & Directional Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-[#D9EAF3]/60">
          <div className="max-w-2xl space-y-1.5">
            <span className="block font-script text-3xl md:text-4xl text-[#397FA8] leading-none mb-1 select-none">
              {eyebrow}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px] text-[#173F56] font-normal tracking-tight leading-tight">
              {title}
            </h2>
            <p className="font-body text-slate-600 text-sm md:text-base font-light leading-relaxed">
              {deck}
            </p>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous discovery slide"
              className="w-10 h-10 rounded-full border border-[#D9EAF3] flex items-center justify-center text-[#173F56] hover:bg-[#397FA8] hover:text-white hover:border-[#397FA8] disabled:opacity-40 disabled:pointer-events-none transition-all duration-200 cursor-pointer shadow-2xs"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next discovery slide"
              className="w-10 h-10 rounded-full border border-[#D9EAF3] flex items-center justify-center text-[#173F56] hover:bg-[#397FA8] hover:text-white hover:border-[#397FA8] disabled:opacity-40 disabled:pointer-events-none transition-all duration-200 cursor-pointer shadow-2xs"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Scroll Track */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[360px] max-w-[380px] shrink-0 snap-start rounded-2xl bg-white border border-[#D9EAF3] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Slide Image Container */}
              <div className="relative h-56 w-full bg-[#F1F9FD] overflow-hidden">
                {slide.imageSrc ? (
                  <Image
                    src={slide.imageSrc}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[#397FA8]/40">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#397FA8] text-xs font-semibold uppercase tracking-wider border border-[#D9EAF3]">
                    {slide.tag}
                  </span>
                </div>
              </div>

              {/* Slide Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-xs text-[#64748B] font-mono block mb-1.5">
                    {slide.meta}
                  </span>
                  <h3 className="font-heading text-2xl font-medium text-[#173F56] mb-2 leading-tight group-hover:text-[#397FA8] transition-colors">
                    {slide.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
                    {slide.description}
                  </p>
                </div>

                {slide.href && (
                  <Link
                    href={slide.href}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#397FA8] hover:text-[#173F56] transition-colors mt-auto"
                  >
                    <span>Explore detail</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

