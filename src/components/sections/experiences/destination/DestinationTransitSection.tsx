"use client";

import type { DestinationTransitData } from "@/data/destinationDetailData";
import { Car, Bike, Footprints, Train } from "lucide-react";
import { NEUTRAL_IMAGE_PLACEHOLDER } from "@/lib/imageFallback";

const iconMap = {
  electric_rickshaw: Car,
  pedal_bike: Bike,
  footprint: Footprints,
  train: Train,
} as const;

export function DestinationTransitSection({ transit }: { transit: DestinationTransitData }) {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-[#D9EAF3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-slate-100">
          <div className="min-w-0">
            <span className="font-['Moon_Dance',cursive] text-[#2f6b8f] italic block text-[26px] sm:text-[32px] leading-none mb-1">
              {transit.sectionScript}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] text-[#173F56] font-['Cormorant_Garamond',serif] font-normal tracking-tight leading-tight text-balance">
              {transit.sectionTitle}
            </h2>
            <p className="font-['Inter',sans-serif] text-sm sm:text-[15px] text-[#475569] max-w-2xl font-light leading-relaxed mt-2 sm:mt-2.5">
              {transit.sectionDeck}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {transit.cards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={card.title}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#2f6b8f] ${
                  card.featured ? "border-2 border-[#2f6b8f]/40 relative" : "border border-slate-200"
                }`}
              >
                <div>
                  <div className="w-full h-40 sm:h-44 relative overflow-hidden bg-[#173F56]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={card.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-t-xl"
                      crossOrigin="anonymous"
                      loading="eager"
                      src={card.image}
                      onError={(e) => {
                        if (e.currentTarget.src !== NEUTRAL_IMAGE_PLACEHOLDER) {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = NEUTRAL_IMAGE_PLACEHOLDER;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#173F56]/70 via-transparent to-transparent" />
                    <span
                      className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2.5 py-1 rounded-full font-['Inter',sans-serif] text-[10px] sm:text-[11px] font-semibold tracking-wide shadow-sm max-w-[calc(100%-1.25rem)] leading-snug text-center ${
                        card.featured
                          ? "bg-[#2f6b8f] text-white border border-white/20"
                          : /km/i.test(card.durationBadge)
                            ? "bg-[#173F56]/95 backdrop-blur-md border border-white/25 text-white"
                            : "bg-white/95 backdrop-blur-md border border-slate-200 text-[#173F56]"
                      }`}
                    >
                      {card.durationBadge}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-white text-xs min-w-0">
                      <Icon className="w-[17px] h-[17px] text-tertiary-fixed shrink-0" aria-hidden="true" />
                      <span className="font-medium text-[11px] text-white/90 font-['Inter',sans-serif] leading-snug">
                        {card.iconLabel}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 space-y-2">
                    <div>
                      <h3 className="text-[19px] sm:text-[20px] font-['Cormorant_Garamond',serif] font-medium text-[#173F56] leading-snug text-balance">
                        {card.title}
                      </h3>
                      <span className="text-[12px] font-['Inter',sans-serif] font-semibold text-[#2f6b8f] block mt-0.5 leading-snug">
                        {card.subtitle}
                      </span>
                    </div>
                    <p className="text-[13px] font-['Inter',sans-serif] text-[#475569] font-light leading-relaxed pt-1">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[11px] font-['Inter',sans-serif]">
                  <span className={`${card.featured ? "text-[#2f6b8f] font-semibold" : "text-neutral-500 font-light"} leading-snug`}>
                    {card.leftNote}
                  </span>
                  <span className="text-[#173F56] font-medium leading-snug">{card.rightNote}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
