"use client";

import type { DestinationGalleryData } from "@/data/destinationDetailData";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { NEUTRAL_IMAGE_PLACEHOLDER } from "@/lib/imageFallback";

export function DestinationGallerySection({ gallery }: { gallery: DestinationGalleryData }) {
  return (
    <section className="w-full bg-surface-container-lowest py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-[#D9EAF3]/60 gap-3">
          <div className="min-w-0">
            <span className="font-script text-2xl lg:text-3xl text-[#2f6b8f] italic block leading-none mb-1">
              {gallery.sectionScript}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#173F56] font-medium tracking-tight text-balance">
              {gallery.sectionTitle}
            </h2>
          </div>
          <Link
            className="text-xs font-semibold text-[#2f6b8f] hover:text-[#173F56] transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto tracking-wide py-1"
            href={gallery.allHref}
          >
            <span>All Coastal Outings</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {gallery.items.map((item) => {
            const isLarge = item.span === "lg:col-span-7" || item.span === "lg:col-span-5";
            return (
              <div
                key={item.title}
                className={`md:col-span-12 ${item.span} bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between hover:border-[#2f6b8f] relative ${
                  isLarge ? "min-h-[300px] sm:min-h-[380px] lg:min-h-[420px]" : "min-h-[280px] sm:min-h-[360px]"
                }`}
              >
                <div className="absolute inset-0 bg-[#173F56] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    crossOrigin="anonymous"
                    loading="eager"
                    src={item.image}
                    onError={(e) => {
                      if (e.currentTarget.src !== NEUTRAL_IMAGE_PLACEHOLDER) {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = NEUTRAL_IMAGE_PLACEHOLDER;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173F56]/90 via-[#173F56]/35 to-transparent" />
                </div>
                <div className="relative p-4 sm:p-6 flex items-start justify-between gap-2 z-10">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#173F56]/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase border border-white/25 shadow-sm font-['Inter',sans-serif] leading-snug">
                    {item.topBadge}
                  </span>
                  {item.topBadgeRight ? (
                    <span className={`px-2.5 sm:px-3 py-1 rounded-full backdrop-blur-md text-[10px] sm:text-[11px] font-semibold border font-['Inter',sans-serif] flex items-center gap-1 shadow-sm leading-snug text-right ${
                      item.topBadgeRight.includes("km")
                        ? "bg-[#2f6b8f] text-white border-white/20"
                        : "bg-white/90 text-[#173F56] border-white/80"
                    }`}>
                      {item.topBadgeRight.includes("km") ? <MapPin className="w-[14px] h-[14px] text-white shrink-0" aria-hidden="true" /> : null}
                      <span>{item.topBadgeRight}</span>
                    </span>
                  ) : null}
                </div>
                <div className={`relative ${isLarge ? "p-4 sm:p-6 lg:p-8" : "p-4 sm:p-6 lg:p-8"} z-10 text-white`}>
                  <span className="font-['Moon_Dance',cursive] text-tertiary-fixed text-xl sm:text-2xl italic block mb-1">
                    {item.script}
                  </span>
                  <h3
                    className={`font-['Cormorant_Garamond',serif] ${
                      isLarge ? "text-xl sm:text-2xl lg:text-3xl" : "text-xl sm:text-2xl"
                    } text-white font-medium tracking-tight mb-2 text-balance`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-[13px] text-white/90 font-['Inter',sans-serif] font-light leading-relaxed ${
                      item.span === "lg:col-span-7" ? "max-w-xl" : ""
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
