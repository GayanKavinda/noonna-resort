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
import { NEUTRAL_IMAGE_PLACEHOLDER } from "@/lib/imageFallback";

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
    <div className="discover-slide snap-start shrink-0 w-[min(84vw,260px)] sm:w-[290px] md:w-[310px] h-[360px] sm:h-[380px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-[#D9EAF3]/80 bg-[#173F56] flex flex-col justify-between">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={slide.imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        crossOrigin="anonymous"
        loading="eager"
        src={slide.image}
        onError={(e) => {
          if (e.currentTarget.src !== NEUTRAL_IMAGE_PLACEHOLDER) {
            e.currentTarget.onerror = null;
            e.currentTarget.src = NEUTRAL_IMAGE_PLACEHOLDER;
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 via-[45%] to-black/5 to-[75%]" />
      <div className="relative p-3.5 sm:p-4 flex items-start justify-between gap-2 z-10">
        <span
          className={`max-w-[62%] px-2.5 py-0.5 rounded-full backdrop-blur-md text-white text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase border border-white/25 shadow-sm leading-snug ${
            slide.topBadgeVariant === "primary" ? "bg-[#2f6b8f]" : "bg-[#173F56]/85"
          }`}
        >
          {slide.topBadge}
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-[#173F56]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 border border-white/25 shadow-sm shrink-0">
          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-tertiary-fixed shrink-0" aria-hidden="true" />
          {slide.distance}
        </span>
      </div>
      <div className="relative p-3.5 sm:p-4 z-10 text-white space-y-1.5">
        <div className="flex items-center gap-1.5 text-tertiary-fixed text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
          <span className="leading-snug">{slide.category}</span>
        </div>
        <h3 className="font-serif text-[1.1rem] sm:text-lg md:text-xl text-white font-medium leading-snug group-hover:text-tertiary-fixed transition-colors text-balance">
          {slide.title}
        </h3>
        <p className="text-[11px] sm:text-xs text-white/80 font-light leading-relaxed line-clamp-3">{slide.description}</p>
        <div className="pt-2.5 sm:pt-3 border-t border-white/20 flex items-end justify-between gap-2">
          <span className="text-[10px] sm:text-[11px] text-tertiary-fixed-dim/95 line-clamp-2 min-w-0 leading-snug">{slide.footerLeft}</span>
          <Link
            className="text-[11px] sm:text-xs text-tertiary-fixed font-semibold hover:text-white inline-flex items-center justify-end gap-1 transition-colors shrink-0 text-right leading-snug"
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
  const [shuffled, setShuffled] = useState<DestinationDiscoverSlide[]>(discover.slides);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const activeIndexRef = useRef(0);
  const scrollBehavior = (): ScrollBehavior => (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth");

  useEffect(() => {
    const id = window.setTimeout(() => {
      setShuffled(shuffleSlides(discover.slides));
    }, 0);
    return () => window.clearTimeout(id);
  }, [discover.slides]);

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
    setCanScroll(max > 4);
    const step = getScrollStep();
    const idx = step > 0 ? Math.round(el.scrollLeft / step) : 0;
    const clamped = Math.min(Math.max(idx, 0), Math.max(visibleSlides.length - 1, 0));
    activeIndexRef.current = clamped;
    setActiveIndex(clamped);
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

  const scrollToIndex = useCallback(
    (idx: number, behavior: ScrollBehavior = "smooth") => {
      const el = trackRef.current;
      if (!el) return;
      const step = getScrollStep();
      const max = Math.max(0, el.scrollWidth - el.clientWidth);
      const left = Math.min(idx * step, max);
      el.scrollTo({ left, behavior: behavior === "smooth" ? scrollBehavior() : behavior });
    },
    [getScrollStep],
  );

  const total = visibleSlides.length;

  const scrollBy = (dir: -1 | 1) => {
    if (total <= 0) return;
    const el = trackRef.current;
    if (!el) return;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    if (max <= 4) return;
    const step = getScrollStep();
    let next = activeIndexRef.current + dir;
    if (dir === 1 && (el.scrollLeft >= max - 4 || next >= total)) {
      el.scrollTo({ left: 0, behavior: scrollBehavior() });
      return;
    }
    if (dir === -1 && (el.scrollLeft <= 4 || next < 0)) {
      el.scrollTo({ left: max, behavior: scrollBehavior() });
      return;
    }
    next = Math.min(Math.max(next, 0), total - 1);
    el.scrollTo({ left: Math.min(next * step, max), behavior: scrollBehavior() });
  };

  useEffect(() => {
    if (paused || total <= 1 || !canScroll) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const max = Math.max(0, el.scrollWidth - el.clientWidth);
      if (max <= 4) return;
      if (el.scrollLeft >= max - 4) {
        el.scrollTo({ left: 0, behavior: scrollBehavior() });
        return;
      }
      const step = getScrollStep();
      el.scrollBy({ left: step, behavior: scrollBehavior() });
    }, 3500);
    return () => window.clearInterval(id);
  }, [paused, total, canScroll, getScrollStep]);

  return (
    <section
      className="w-full bg-surface-container-lowest py-12 sm:py-16 lg:py-20 border-t border-[#D9EAF3]/60"
      id="regional-discoveries"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-[#D9EAF3]/60">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span
                className="text-[#2f6b8f] font-script italic block text-[1.75rem] sm:text-3xl leading-none"
              >
                {discover.sectionScript}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#2f6b8f]/10 text-[#2f6b8f] text-[10px] font-semibold tracking-wider uppercase">
                Curated Itineraries
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#173F56] font-serif font-medium tracking-tight text-balance">
              {discover.sectionTitle}
            </h2>
            <p className="text-sm text-[#4A6B82] max-w-2xl font-light leading-relaxed mt-2">
              {discover.sectionDeck}
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 self-start lg:self-auto shrink-0">
            <button
              aria-label="Previous destinations"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D9EAF3] bg-white hover:bg-[#D9EAF3]/30 text-[#173F56] flex items-center justify-center transition-all shadow-sm hover:border-[#2f6b8f] active:scale-95 shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={total <= 1 || !canScroll}
              onClick={() => scrollBy(-1)}
              type="button"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              aria-label="Next destinations"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D9EAF3] bg-white hover:bg-[#D9EAF3]/30 text-[#173F56] flex items-center justify-center transition-all shadow-sm hover:border-[#2f6b8f] active:scale-95 shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={total <= 1 || !canScroll}
              onClick={() => scrollBy(1)}
              type="button"
            >
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="discover-filters flex flex-wrap items-center gap-2 pb-3 mb-5 sm:mb-6 -mt-1">
          {filters.map((f) => {
            const active = activeFilter === f.id;
            return (
              <button
                key={f.id}
                aria-pressed={active}
                className={`discover-filter-chip px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs md:text-[13px] font-medium tracking-wide shrink-0 transition-colors flex items-center gap-1.5 max-w-full ${
                  active
                    ? "bg-[#2f6b8f] text-white shadow-sm"
                    : "bg-white border border-[#D9EAF3] hover:border-[#2f6b8f] hover:text-[#2f6b8f] text-[#40484e]"
                }`}
                onClick={() => setActiveFilter(f.id)}
                type="button"
              >
                {f.icon === "all" ? (
                  <List className="discover-filter-chip-icon w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                ) : f.icon === "beaches" ? (
                  <Waves
                    className={`discover-filter-chip-icon w-3.5 h-3.5 shrink-0 ${active ? "text-white" : "text-[#2f6b8f]"}`}
                    aria-hidden="true"
                  />
                ) : f.icon === "spots" ? (
                  <Compass
                    className={`discover-filter-chip-icon w-3.5 h-3.5 shrink-0 ${active ? "text-white" : "text-[#2f6b8f]"}`}
                    aria-hidden="true"
                  />
                ) : f.icon === "heritage" ? (
                  <Landmark
                    className={`discover-filter-chip-icon w-3.5 h-3.5 shrink-0 ${active ? "text-white" : "text-[#2f6b8f]"}`}
                    aria-hidden="true"
                  />
                ) : (
                  <UtensilsCrossed
                    className={`discover-filter-chip-icon w-3.5 h-3.5 shrink-0 ${active ? "text-white" : "text-[#2f6b8f]"}`}
                    aria-hidden="true"
                  />
                )}
                <span className="text-left leading-snug">
                  {f.label}{" "}
                  {f.note ? (
                    <span
                      className={`discover-filter-chip-note text-[10px] font-normal ${active ? "text-white/85" : "text-[#2f6b8f]"}`}
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
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-5 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
          id="coastal-carousel-track"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {visibleSlides.map((slide) => (
            <SlideCard key={slide.id} slide={slide} />
          ))}
        </div>

        <div className="mt-4 sm:mt-5 lg:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 sm:pt-5 border-t border-[#D9EAF3]/50 text-xs text-[#4A6B82]">
          <div className="flex items-center gap-2 flex-wrap">
            {visibleSlides.map((slide, i) => (
              <button
                key={slide.id}
                aria-label={`Go to destination ${i + 1}`}
                className={`h-1 rounded-full transition-all ${
                  i === activeIndex ? "w-8 bg-[#2f6b8f]" : "w-2 bg-[#D9EAF3] hover:bg-[#2f6b8f]/50"
                }`}
                onClick={() => scrollToIndex(i)}
                type="button"
              />
            ))}
            <span className="text-[11px] font-medium text-[#173F56] ml-1 sm:ml-2 leading-snug">
              {total > 0 ? `${activeIndex + 1} of ${total}` : "0 of 0"} destination{total === 1 ? "" : "s"}
              {activeFilter === "all" ? " — swipe or use arrows to view all" : ` in ${filters.find((f) => f.id === activeFilter)?.label ?? "filter"}`}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#2f6b8f] font-medium leading-snug">
              <Compass className="w-4 h-4 text-[#2f6b8f] shrink-0 mr-0.5" aria-hidden="true" /> All transfers
              arrangeable via Front Portico
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
