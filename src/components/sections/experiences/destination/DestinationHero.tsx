"use client";

import type { DestinationHeroData } from "@/data/destinationDetailData";
import { MapPin, Waves, Sun, Navigation, Droplets, Compass } from "lucide-react";
import { NEUTRAL_IMAGE_PLACEHOLDER } from "@/lib/imageFallback";

const metaIcons = {
  location_on: MapPin,
  waves: Waves,
  wb_sunny: Sun,
  near_me: Navigation,
  pool: Droplets,
  surfing: Waves,
  compass: Compass,
} as const;

export function DestinationHero({ hero }: { hero: DestinationHeroData }) {
  return (
    <section className="w-full bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10">
        <div className="flex flex-col items-center text-center mb-4 sm:mb-6 lg:mb-8">
          <span className="text-[10px] sm:text-[11px] lg:text-xs font-semibold tracking-[0.22em] uppercase text-[#2f6b8f]">
            Destination
          </span>
          <div className="flex items-center gap-3 mt-2.5 sm:mt-3 w-full max-w-md">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D9EAF3] to-[#397FA8]/40" aria-hidden="true" />
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D9EAF3] bg-white text-[#2f6b8f] shadow-sm">
              <Waves className="w-4 h-4" aria-hidden="true" />
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D9EAF3] to-[#397FA8]/40" aria-hidden="true" />
          </div>
          <p className="mt-2.5 sm:mt-3 font-serif text-lg sm:text-xl lg:text-2xl text-[#173F56] tracking-tight text-balance px-2">
            {hero.title}
          </p>
        </div>
        <div className="relative w-full rounded-2xl overflow-hidden shadow-sm bg-surface-container">
          <div className="w-full min-h-[280px] h-[46vw] max-h-[320px] sm:h-[380px] sm:max-h-none md:h-[420px] lg:h-[460px] relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={hero.imageAlt}
              className="w-full h-full object-cover rounded-2xl absolute inset-0"
              crossOrigin="anonymous"
              loading="eager"
              src={hero.image}
              onError={(e) => {
                if (e.currentTarget.src !== NEUTRAL_IMAGE_PLACEHOLDER) {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = NEUTRAL_IMAGE_PLACEHOLDER;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/90 via-on-primary-fixed/35 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-12 text-white">
              <span className="text-tertiary-fixed font-script italic tracking-wide mb-1 sm:mb-1.5 text-[1.35rem] sm:text-[1.6rem] lg:text-[2.2rem] leading-none">
                {hero.script}
              </span>
              <h1 className="font-serif text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-[52px] text-white tracking-tight sm:leading-tight max-w-4xl text-balance">
                {hero.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-tertiary-fixed-dim/95 max-w-2xl mt-2 sm:mt-3 font-light leading-relaxed">
                {hero.deck}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 mt-3 sm:mt-4 lg:mt-6 pt-3 sm:pt-4 border-t border-white/20 text-[11px] sm:text-xs lg:text-[13px] font-medium text-white/90">
                {hero.meta.map((item, idx) => {
                  const Icon = metaIcons[item.icon];
                  return (
                    <span key={item.label} className="contents">
                      {idx > 0 ? <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed hidden sm:inline-block" /> : null}
                      <span className="flex items-center gap-1.5 min-w-0">
                        <Icon className="text-tertiary-fixed w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0" aria-hidden="true" />
                        <span className="leading-snug">{item.label}</span>
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
