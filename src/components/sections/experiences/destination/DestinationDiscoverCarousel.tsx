"use client";

import type {
  DestinationDiscoverData,
  DestinationDiscoverFilterId,
  DestinationDiscoverSlide,
} from "@/data/destinationDetailData";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Compass,
  Landmark,
  UtensilsCrossed,
  Waves,
  List,
} from "lucide-react";

const catIcon = {
  landmark: Landmark,
  compass: Compass,
  utensils: UtensilsCrossed,
  waves: Waves,
} as const;

const filters: {
  id: DestinationDiscoverFilterId;
  label: string;
  note?: string;
  icon: DestinationDiscoverFilterId | "all";
}[] = [
  { id: "all", label: "All Destinations", icon: "all" },
  { id: "beaches", label: "The Beaches & Surf Breaks", note: "(Individual Pages)", icon: "beaches" },
  { id: "spots", label: "Hidden Swim Spots & Viewpoints", note: "(Individual Pages)", icon: "spots" },
  { id: "heritage", label: "Historical, Cultural & Wildlife", note: "(Single Page Hub)", icon: "heritage" },
  { id: "taste", label: "A Taste of Sri Lanka", note: "(Single Dining Directory)", icon: "taste" },
];

function shuffleSlides(slides: DestinationDiscoverSlide[]): DestinationDiscoverSlide[] {
  const arr = [...slides];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function SlideCard({ slide }: { slide: DestinationDiscoverSlide }) {
  const Icon = catIcon[slide.categoryIcon];
  return (
    <div className="discover-slide snap-start shrink-0 w-[340px] sm:w-[380px] h-[480px] relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-[#D9EAF3]/80 bg-[#173F56] flex flex-col justify-between">
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
          className={`px-3 py-1 rounded-full backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase border border-white/25 shadow-sm ${
            slide.topBadgeVariant === "primary" ? "bg-[#397FA8]" : "bg-[#173F56]/85"
          }`}
        >
          {slide.topBadge}
        </span>
        <span className="px-3 py-1 rounded-full bg-[#173F56]/90 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1.5 border border-white/25 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-tertiary-fixed" aria-hidden="true" />
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
  const [activeFilter, setActiveFilter] = useState<DestinationDiscoverFilterId>("all");
  const [shuffled] = useState(() => shuffleSlides(discover.slides));
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const visibleSlides = useMemo(() => {
    if (activeFilter === "all") return shuffled;
    return shuffled.filter((s) => s.filter === activeFilter);
  }, [activeFilter, shuffled]);

  const getScrollStep = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 380;
    const first = el.querySelector<HTMLElement>(".discover-slide");
    const gap = parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap || "24") || 24;
    return (first?.offsetWidth ?? 380) + gap;
  }, []);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    const left = el.scrollLeft;
    setCanPrev(left > 4);
    setCanNext(left < max - 4);

    const step = getScrollStep();
    const idx = step > 0 ? Math.round(left / step) : 0;
    setActiveIndex(Math.min(Math.max(idx, 0), Math.max(visibleSlides.length - 1, 0)));
  }, [getScrollStep, visibleSlides.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "auto" });
    const id = requestAnimationFrame(updateScrollState);
    return () => cancelAnimationFrame(id);
  }, [activeFilter, visibleSlides.length, updateScrollState]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateScrollState();
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateScrollState]);

  const scrollBy = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * getScrollStep(), behavior: "smooth" });
  };

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * getScrollStep(), behavior: "smooth" });
  };

  const total = visibleSlides.length;

  return (
    <section
      className="w-full bg-surface-container-lowest py-20 border-t border-[#D9EAF3]/60"
      id="regional-discoveries"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6 pb-6 border-b border-[#D9EAF3]/60">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[#397FA8] font-script italic block text-3xl"
                style={{ fontSize: "2.1rem", lineHeight: 1 }}
              >
                {discover.sectionScript}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#397FA8]/10 text-[#397FA8] text-[10px] font-semibold tracking-wider uppercase">
                Curated Itineraries
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl text-[#173F56] font-serif font-medium tracking-tight">
              {discover.sectionTitle}
            </h2>
            <p className="text-sm text-[#4A6B82] max-w-2xl font-light leading-relaxed mt-2">
              {discover.sectionDeck}
            </p>
          </div>
          <div className="flex items-center gap-3 self-start lg:self-auto shrink-0">
            <button
              aria-label="Previous destinations"
              className="w-11 h-11 rounded-full border border-[#D9EAF3] bg-white hover:bg-[#D9EAF3]/30 text-[#173F56] flex items-center justify-center transition-all shadow-sm hover:border-[#397FA8] active:scale-95 shrink-0 disabled:opacity-40 disabled:pointer-events-none"
              disabled={!canPrev || total === 0}
              onClick={() => scrollBy(-1)}
              type="button"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              aria-label="Next destinations"
              className="w-11 h-11 rounded-full border border-[#D9EAF3] bg-white hover:bg-[#D9EAF3]/30 text-[#173F56] flex items-center justify-center transition-all shadow-sm hover:border-[#397FA8] active:scale-95 shrink-0 disabled:opacity-40 disabled:pointer-events-none"
              disabled={!canNext || total === 0}
              onClick={() => scrollBy(1)}
              type="button"
            >
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="discover-filters flex flex-wrap items-center gap-2 pb-3 mb-6 -mt-1">
          {filters.map((f) => {
            const active = activeFilter === f.id;
            return (
              <button
                key={f.id}
                aria-pressed={active}
                className={`discover-filter-chip px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium tracking-wide shrink-0 transition-colors flex items-center gap-1.5 ${
                  active
                    ? "bg-[#397FA8] text-white shadow-sm"
                    : "bg-white border border-[#D9EAF3] hover:border-[#397FA8] hover:text-[#397FA8] text-[#40484e]"
                }`}
                onClick={() => setActiveFilter(f.id)}
                type="button"
              >
                {f.icon === "all" ? (
                  <List className="discover-filter-chip-icon w-3.5 h-3.5" aria-hidden="true" />
                ) : f.icon === "beaches" ? (
                  <Waves
                    className={`discover-filter-chip-icon w-3.5 h-3.5 ${active ? "text-white" : "text-[#397FA8]"}`}
                    aria-hidden="true"
                  />
                ) : f.icon === "spots" ? (
                  <Compass
                    className={`discover-filter-chip-icon w-3.5 h-3.5 ${active ? "text-white" : "text-[#397FA8]"}`}
                    aria-hidden="true"
                  />
                ) : f.icon === "heritage" ? (
                  <Landmark
                    className={`discover-filter-chip-icon w-3.5 h-3.5 ${active ? "text-white" : "text-[#397FA8]"}`}
                    aria-hidden="true"
                  />
                ) : (
                  <UtensilsCrossed
                    className={`discover-filter-chip-icon w-3.5 h-3.5 ${active ? "text-white" : "text-[#397FA8]"}`}
                    aria-hidden="true"
                  />
                )}
                <span>
                  {f.label}{" "}
                  {f.note ? (
                    <span
                      className={`discover-filter-chip-note text-[10px] font-normal ${active ? "text-white/85" : "text-[#397FA8]"}`}
                    >
                      {f.note}
                    </span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth"
          id="coastal-carousel-track"
          style={{ scrollbarWidth: "none" }}
        >
          {visibleSlides.map((slide) => (
            <SlideCard key={slide.id} slide={slide} />
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#D9EAF3]/50 text-xs text-[#4A6B82]">
          <div className="flex items-center gap-2 flex-wrap">
            {visibleSlides.map((slide, i) => (
              <button
                key={slide.id}
                aria-label={`Go to destination ${i + 1}`}
                className={`h-1 rounded-full transition-all ${
                  i === activeIndex ? "w-8 bg-[#397FA8]" : "w-2 bg-[#D9EAF3] hover:bg-[#397FA8]/50"
                }`}
                onClick={() => scrollToIndex(i)}
                type="button"
              />
            ))}
            <span className="text-[11px] font-medium text-[#173F56] ml-2">
              {total > 0 ? `${activeIndex + 1} of ${total}` : "0 of 0"} destination{total === 1 ? "" : "s"}
              {activeFilter === "all" ? " — swipe or use arrows to view all" : ` in ${filters.find((f) => f.id === activeFilter)?.label ?? "filter"}`}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#397FA8] font-medium">
              <Compass className="w-4 h-4 text-[#397FA8] shrink-0 mr-1" aria-hidden="true" /> All transfers
              arrangeable via Front Portico
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
