"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Grid2X2, LayoutDashboard, Sparkles, Waves, X, ZoomIn } from "lucide-react";
import {
  ALL_GALLERY_IMAGES,
  FEATURED_IMAGE,
  GALLERY_FILTERS,
  GALLERY_GRID_IMAGES,
  GALLERY_INITIAL_VISIBLE,
  GALLERY_TOTAL_COUNT,
  type GalleryCategory,
  type GalleryImage,
} from "@/data/galleryData";

function ExpandMoreIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 15.5 5.5 9l1.4-1.4L12 12.7l5.1-5.1L18.5 9z" />
    </svg>
  );
}

export function GalleryPageContent() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loadedCount, setLoadedCount] = useState(GALLERY_INITIAL_VISIBLE);
  const [imgRatio, setImgRatio] = useState(3 / 2);

  const filteredGrid = useMemo(() => {
    if (activeFilter === "all") return GALLERY_GRID_IMAGES;
    const filter = GALLERY_FILTERS.find((f) => f.id === activeFilter);
    const matches = filter?.matchCategories ?? [];
    return GALLERY_GRID_IMAGES.filter((img) => img.gridCategory && matches.includes(img.gridCategory));
  }, [activeFilter]);

  const visibleGrid = useMemo(() => filteredGrid.slice(0, Math.min(loadedCount, filteredGrid.length)), [filteredGrid, loadedCount]);

  const showingCount = activeFilter === "all" ? Math.min(loadedCount, filteredGrid.length) : filteredGrid.length;
  const activeFilterTotal = GALLERY_FILTERS.find((f) => f.id === activeFilter)?.count ?? GALLERY_TOTAL_COUNT;

  const openLightbox = (id: number) => {
    const idx = ALL_GALLERY_IMAGES.findIndex((img) => img.id === id);
    if (idx >= 0) setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % ALL_GALLERY_IMAGES.length);
  };
  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + ALL_GALLERY_IMAGES.length) % ALL_GALLERY_IMAGES.length);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % ALL_GALLERY_IMAGES.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : (i - 1 + ALL_GALLERY_IMAGES.length) % ALL_GALLERY_IMAGES.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex]);

  const lightboxItem: GalleryImage | null = lightboxIndex === null ? null : ALL_GALLERY_IMAGES[lightboxIndex];

  const progressPercent = activeFilterTotal > 0 ? Math.round((showingCount / activeFilterTotal) * 100) : 0;
  const remaining = Math.max(activeFilterTotal - showingCount, 0);

  return (
    <>
      {/* 2. GALLERY INTRODUCTION */}
      <section className="w-full max-w-5xl mx-auto px-6 lg:px-8 pt-8 pb-12 text-center flex flex-col items-center">
        <span className="font-script text-3xl text-primary mb-2 select-none">
          moments captured in stillness...
        </span>
        <span className="font-label-sm text-label-sm tracking-[0.25em] text-secondary uppercase font-semibold mb-3">
          A CLOSER LOOK
        </span>
        <h1 className="font-headline-hero text-headline-hero text-on-surface max-w-3xl mb-6">
          Moments by the Sea
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto font-light leading-relaxed">
          Explore the spaces, scenery, and little details that make a stay at Noonna Beach Hotel special.
        </p>
      </section>

      {/* 3. FEATURED PHOTOGRAPH */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <div
          className="relative w-full h-[480px] lg:h-[580px] rounded-3xl overflow-hidden shadow-sm group cursor-pointer bg-white border border-slate-200"
          onClick={() => openLightbox(FEATURED_IMAGE.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openLightbox(FEATURED_IMAGE.id);
            }
          }}
        >
          <Image
            alt={FEATURED_IMAGE.alt}
            data-alt={FEATURED_IMAGE.dataAlt}
            src={FEATURED_IMAGE.src}
            fill
            unoptimized
            priority
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1280px) 100vw, 1152px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2f3131]/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
          <div className="absolute top-6 left-6 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
            <Waves className="text-primary w-4 h-4" strokeWidth={2} aria-hidden="true" />
            <span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary font-semibold">Kumbalgama Shoreline • Barefoot Sanctuary</span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-on-primary">
            <div>
              <span className="font-script text-2xl text-secondary-fixed block">evening stillness</span>
              <h2 className="font-headline-md text-headline-md text-on-primary drop-shadow-sm">Veranda Horizon at Dusk</h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-surface-container-lowest/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-label-md text-label-md hover:bg-surface-container-lowest/40 transition-colors">
              <ZoomIn className="w-[18px] h-[18px]" strokeWidth={1.8} aria-hidden="true" />
              <span>View Fullscreen</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. EXPANDABLE LUXURY EDITORIAL GALLERY TOOLBAR */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 border-b border-slate-200/80 pb-6">
          <div className="flex items-center flex-wrap gap-2 text-xs">
            {GALLERY_FILTERS.map((filter) => {
              const active = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setLoadedCount(GALLERY_INITIAL_VISIBLE);
                  }}
                  className={
                    active
                      ? "px-4 py-2 rounded-full bg-[#2f6b8f] text-white font-medium shadow-sm transition-all flex items-center gap-1.5"
                      : "px-4 py-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/70 font-medium transition-all flex items-center gap-1.5"
                  }
                >
                  <span>{filter.label}</span>
                  <span className={active ? "px-1.5 py-0.5 rounded-full bg-[#25566f]/90 text-[10px] font-semibold" : "px-1.5 py-0.5 rounded-full bg-slate-200 text-slate-600 text-[10px] font-semibold"}>
                    {filter.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between lg:justify-end gap-4 shrink-0 pt-2 lg:pt-0">
            <span className="text-xs text-slate-500 font-medium tracking-wide flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2f6b8f]" />
              Showing <strong className="text-slate-800 font-semibold">{showingCount}</strong> of {activeFilterTotal} Moments
            </span>
            <div className="h-4 w-px bg-slate-200" />
            <div className="inline-flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                aria-label="Editorial Grid View"
                aria-pressed={viewMode === "grid"}
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg flex items-center justify-center transition-colors ${
                  viewMode === "grid"
                    ? "bg-white text-[#2f6b8f] shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                title="Editorial Grid"
                type="button"
              >
                <Grid2X2 className="w-[18px] h-[18px]" strokeWidth={1.8} />
              </button>
              <button
                aria-label="Masonry View"
                aria-pressed={viewMode === "masonry"}
                onClick={() => setViewMode("masonry")}
                className={`p-1.5 rounded-lg flex items-center justify-center transition-colors ${
                  viewMode === "masonry"
                    ? "bg-white text-[#2f6b8f] shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
                title="Mosaic Masonry"
                type="button"
              >
                <LayoutDashboard className="w-[18px] h-[18px]" strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MAIN PHOTO GALLERY */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-8 mb-24">

        {/* keyframe injected once — cards fade+rise in on each mount */}
        <style>{`
          @keyframes cardIn {
            from { opacity: 0; transform: translateY(12px) scale(0.97); }
            to   { opacity: 1; transform: translateY(0)   scale(1);    }
          }
        `}</style>

        {/* Single wrapper — key forces remount on view switch, triggering per-card animation */}
        <div key={viewMode} id="gallery-grid">

          {/* ── GRID VIEW ── */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 items-start">
              {visibleGrid.map((item, i) => (
                <div
                  key={item.id}
                  style={{
                    animation: "cardIn 350ms ease both",
                    animationDelay: `${Math.min(i * 30, 300)}ms`,
                  }}
                  className="gallery-item group cursor-pointer relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 bg-slate-100"
                  data-category={item.gridCategory}
                  onClick={() => openLightbox(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(item.id);
                    }
                  }}
                >
                  <Image
                    alt={item.alt}
                    src={item.src}
                    fill
                    unoptimized
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#2f6b8f] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <ZoomIn className="w-5 h-5" strokeWidth={1.8} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── MASONRY VIEW ── */}
          {viewMode === "masonry" && (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 lg:gap-5">
              {visibleGrid.map((item, i) => {
                const isTall = i % 5 === 0 || i % 7 === 3;
                return (
                  <div
                    key={item.id}
                    style={{
                      animation: "cardIn 350ms ease both",
                      animationDelay: `${Math.min(i * 30, 300)}ms`,
                    }}
                    className={`gallery-item break-inside-avoid mb-4 lg:mb-5 group cursor-pointer relative overflow-hidden rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-300 bg-slate-100 ${
                      isTall ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                    data-category={item.gridCategory}
                    onClick={() => openLightbox(item.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openLightbox(item.id);
                      }
                    }}
                  >
                    <Image
                      alt={item.alt}
                      src={item.src}
                      fill
                      unoptimized
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#2f6b8f] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <ZoomIn className="w-5 h-5" strokeWidth={1.8} />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>{/* end key wrapper */}

        {/* PROGRESSIVE DISCLOSURE & ARCHIVE ACCESS CONTROLS */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-xs mb-4">
            <div className="flex justify-between text-xs text-slate-500 mb-1.5 font-medium">
              <span>Curated display: {showingCount} moments</span>
              <span className="text-[#2f6b8f] font-semibold">{progressPercent}% of {activeFilterTotal}</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
              <div className="h-full bg-[#2f6b8f] rounded-full" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-2">
            <button
              type="button"
              onClick={() => setLoadedCount((c) => Math.min(c + 9, GALLERY_GRID_IMAGES.length))}
              className="px-8 py-3 rounded-full bg-[#2f6b8f] hover:bg-[#25566f] text-white font-medium text-sm transition-all shadow-sm hover:shadow flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={activeFilter !== "all" || showingCount >= GALLERY_TOTAL_COUNT}
            >
              <span>Load More Moments</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#25566f]/90 font-semibold">{remaining} remaining</span>
              <ExpandMoreIcon className="w-[18px] h-[18px] group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              type="button"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium text-sm transition-all flex items-center gap-2"
            >
              <Sparkles className="w-[18px] h-[18px] text-[#2f6b8f]" strokeWidth={1.8} />
              <span>View Complete 36-Photo Archive</span>
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-4 font-light">
            High-resolution architectural &amp; coastal photography captured on location at Kumbalgama.
          </p>
        </div>
      </section>

      {/* 6. ZEN LIGHTBOX */}
      {lightboxItem && (
        <div
          aria-label="Photo Lightbox"
          aria-modal="true"
          role="dialog"
          id="gallery-lightbox"
          className="fixed inset-0 z-[100] bg-white flex h-dvh max-h-dvh flex-col overflow-hidden zen-fade"
          style={{
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <style>{`
            @keyframes zenFade { from { opacity: 0; } to { opacity: 1; } }
            @keyframes zenRise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
            .zen-fade { animation: zenFade .35s ease both; }
            .zen-rise { animation: zenRise .5s ease both; }
            @media (prefers-reduced-motion: reduce) {
              .zen-fade, .zen-rise { animation: none !important; transform: none !important; }
            }
          `}</style>

          {/* Top bar */}
          <div className="flex shrink-0 items-center justify-between px-4 pt-4 sm:px-10 sm:pt-8">
            <span
              id="lightbox-counter"
              className="text-xs font-medium tabular-nums tracking-[0.3em] text-[#64748B]"
            >
              {String((lightboxIndex ?? 0) + 1).padStart(2, "0")}
              <span className="mx-2 text-[#B8E0F5]">/</span>
              {String(ALL_GALLERY_IMAGES.length).padStart(2, "0")}
            </span>

            <button
              aria-label="Close Lightbox"
              onClick={closeLightbox}
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9EAF3] bg-white text-[#2f6b8f] shadow-sm transition-colors hover:bg-[#F1F9FD] hover:text-[#173F56] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6b8f]/40"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Image stage */}
          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-12 py-2 sm:px-14"
            style={{ containerType: "size" }}
            onClick={closeLightbox}
          >
            <button
              aria-label="Previous Photo"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              type="button"
              className="absolute left-1.5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D9EAF3] bg-white/95 text-[#2f6b8f] shadow-sm transition-colors hover:bg-[#F1F9FD] hover:text-[#173F56] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6b8f]/40 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={lightboxItem.id}
              alt={lightboxItem.alt}
              id="lightbox-img"
              src={lightboxItem.src}
              onLoad={(e) => {
                const { naturalWidth, naturalHeight } = e.currentTarget;
                if (naturalWidth && naturalHeight) setImgRatio(naturalWidth / naturalHeight);
              }}
              style={{
                aspectRatio: imgRatio,
                width: `min(100cqw, calc(100cqh * ${imgRatio}))`,
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "cover",
              }}
              className="zen-rise rounded-2xl border border-[#D9EAF3]/70 shadow-[0_20px_50px_rgba(23,63,86,0.12)] sm:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              aria-label="Next Photo"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              type="button"
              className="absolute right-1.5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#D9EAF3] bg-white/95 text-[#2f6b8f] shadow-sm transition-colors hover:bg-[#F1F9FD] hover:text-[#173F56] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6b8f]/40 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Caption */}
          <div
            key={`cap-${lightboxItem.id}`}
            className="zen-rise mx-auto w-full max-w-2xl shrink-0 overflow-y-auto overscroll-contain px-4 pb-4 pt-4 text-center sm:px-6 sm:pb-6 sm:pt-5"
            style={{ maxHeight: "min(38dvh, 22rem)" }}
          >
            <span
              id="lightbox-category"
              className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2f6b8f] sm:mb-3"
            >
              {lightboxItem.label}
            </span>

            <h4
              id="lightbox-title"
              className="font-headline-sm text-headline-sm mb-2 text-[#173F56] sm:mb-3"
            >
              {lightboxItem.title}
            </h4>

            <div className="mx-auto mb-2 h-px w-10 bg-[#2f6b8f]/40 sm:mb-3" />

            <p
              id="lightbox-caption"
              className="text-sm font-light leading-relaxed text-slate-500 sm:text-[15px]"
            >
              {lightboxItem.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}