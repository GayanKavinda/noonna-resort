"use client";

import type { DestinationDiscoverData, DestinationDiscoverSlide } from "@/data/destinationDetailData";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, MapPin, Compass, Landmark, UtensilsCrossed, Waves, List } from "lucide-react";

const catIcon = {
  landmark: Landmark,
  compass: Compass,
  utensils: UtensilsCrossed,
  waves: Waves,
} as const;

const filters = [
  { label: "All Destinations", icon: "all" },
  { label: "The Beaches & Surf Breaks", note: "(Individual Pages)", icon: "beach" },
  { label: "Hidden Swim Spots & Viewpoints", note: "(Individual Pages)", icon: "spots" },
  { label: "Historical, Cultural & Wildlife", note: "(Single Page Hub)", icon: "heritage" },
  { label: "A Taste of Sri Lanka", note: "(Single Dining Directory)", icon: "taste" },
] as const;

function SlideCard({ slide }: { slide: DestinationDiscoverSlide }) {
  const Icon = catIcon[slide.categoryIcon];
  return (
    <div className="snap-start shrink-0 w-[340px] sm:w-[380px] h-[480px] relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-[#D9EAF3]/80 bg-[#173F56] flex flex-col justify-between">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={slide.imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        crossOrigin="anonymous"
        loading="eager"
        src={slide.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/95 via-on-primary-fixed/40 to-transparent" />
      <div className="relative p-6 flex items-start justify-between z-10">
        <span
          className={`px-3 py-1 rounded-full backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase border border-white/20 ${
            slide.topBadgeVariant === "primary" ? "bg-[#397FA8]" : "bg-white/20"
          }`}
        >
          {slide.topBadge}
        </span>
        <span className="px-3 py-1 rounded-full bg-[#173F56]/80 backdrop-blur-md text-tertiary-fixed text-[11px] font-medium flex items-center gap-1.5 border border-white/10">
          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
          {slide.distance}
        </span>
      </div>
      <div className="relative p-6 z-10 text-white space-y-2">
        <div className="flex items-center gap-2 text-tertiary-fixed text-[11px] font-medium uppercase tracking-wider">
          <Icon className="w-4 h-4" aria-hidden="true" />
          {slide.category}
        </div>
        <h3 className="font-serif text-2xl text-white font-medium leading-snug group-hover:text-tertiary-fixed transition-colors">
          {slide.title}
        </h3>
        <p className="text-xs text-white/80 font-light leading-relaxed">{slide.description}</p>
        <div className="pt-4 border-t border-white/20 flex items-center justify-between">
          <span className="text-[11px] text-tertiary-fixed-dim/95">{slide.footerLeft}</span>
          <Link
            className="text-xs text-tertiary-fixed font-semibold hover:text-white flex items-center gap-1.5 transition-colors"
            href={slide.href}
          >
            {slide.linkLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function DestinationDiscoverCarousel({ discover }: { discover: DestinationDiscoverData }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: -1 | 1) => trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });

  return (
    <section className="w-full bg-surface-container-lowest py-20 border-t border-[#D9EAF3]/60" id="regional-discoveries">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6 pb-6 border-b border-[#D9EAF3]/60">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#397FA8] font-script italic block text-3xl" style={{ fontSize: "2.1rem", lineHeight: 1 }}>
                {discover.sectionScript}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#397FA8]/10 text-[#397FA8] text-[10px] font-semibold tracking-wider uppercase">
                Curated Itineraries
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl text-[#173F56] font-serif font-medium tracking-tight">
              {discover.sectionTitle}
            </h2>
            <p className="text-sm text-[#4A6B82] max-w-2xl font-light leading-relaxed mt-2">{discover.sectionDeck}</p>
          </div>
          <div className="flex items-center gap-3 self-start lg:self-auto shrink-0">
            <button
              aria-label="Previous destinations"
              className="w-11 h-11 rounded-full border border-[#D9EAF3] bg-white hover:bg-[#D9EAF3]/30 text-[#173F56] flex items-center justify-center transition-all shadow-sm hover:border-[#397FA8] active:scale-95 shrink-0"
              onClick={() => scrollBy(-1)}
              type="button"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              aria-label="Next destinations"
              className="w-11 h-11 rounded-full border border-[#D9EAF3] bg-white hover:bg-[#D9EAF3]/30 text-[#173F56] flex items-center justify-center transition-all shadow-sm hover:border-[#397FA8] active:scale-95 shrink-0"
              onClick={() => scrollBy(1)}
              type="button"
            >
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 -mt-2" style={{ scrollbarWidth: "none" }}>
          {filters.map((f, i) => (
            <button
              key={f.label}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide shrink-0 transition-colors flex items-center gap-1.5 ${
                i === 0
                  ? "bg-[#397FA8] text-white shadow-sm"
                  : "bg-white border border-[#D9EAF3] hover:border-[#397FA8] hover:text-[#397FA8] text-[#40484e]"
              }`}
              type="button"
            >
              {i === 0 ? (
                <List className="w-3.5 h-3.5" aria-hidden="true" />
              ) : f.icon === "beach" ? (
                <Waves className="w-4 h-4 text-[#397FA8]" aria-hidden="true" />
              ) : f.icon === "spots" ? (
                <Compass className="w-4 h-4 text-[#397FA8]" aria-hidden="true" />
              ) : f.icon === "heritage" ? (
                <Landmark className="w-4 h-4 text-[#397FA8]" aria-hidden="true" />
              ) : (
                <UtensilsCrossed className="w-4 h-4 text-[#397FA8]" aria-hidden="true" />
              )}
              <span>
                {f.label} {"note" in f ? <span className="text-[10px] text-[#397FA8] font-normal">{f.note}</span> : null}
              </span>
            </button>
          ))}
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory"
          id="coastal-carousel-track"
          style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
        >
          {discover.slides.map((slide) => (
            <SlideCard key={slide.id} slide={slide} />
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#D9EAF3]/50 text-xs text-[#4A6B82]">
          <div className="flex items-center gap-2">
            <span className="w-8 h-1 rounded-full bg-[#397FA8]" />
            <span className="w-2 h-1 rounded-full bg-[#D9EAF3]" />
            <span className="w-2 h-1 rounded-full bg-[#D9EAF3]" />
            <span className="w-2 h-1 rounded-full bg-[#D9EAF3]" />
            <span className="w-2 h-1 rounded-full bg-[#D9EAF3]" />
            <span className="w-2 h-1 rounded-full bg-[#D9EAF3]" />
            <span className="text-[11px] font-medium text-[#173F56] ml-2">Swipe or use arrows to view all 6 destinations</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#397FA8] font-medium">
              <Compass className="w-4 h-4 text-[#397FA8] shrink-0 mr-1" aria-hidden="true" /> All transfers arrangeable via Front Portico
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
