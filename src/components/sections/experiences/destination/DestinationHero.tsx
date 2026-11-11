import type { DestinationHeroData } from "@/data/destinationDetailData";
import { MapPin, Waves, Sun, Navigation } from "lucide-react";

const metaIcons = {
  location_on: MapPin,
  waves: Waves,
  wb_sunny: Sun,
  near_me: Navigation,
} as const;

export function DestinationHero({ hero }: { hero: DestinationHeroData }) {
  return (
    <section className="w-full bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-8 sm:pt-8 sm:pb-10">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-sm bg-surface-container">
          <div className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={hero.imageAlt}
              className="w-full h-full object-cover rounded-2xl absolute inset-0"
              crossOrigin="anonymous"
              loading="eager"
              src={hero.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/90 via-on-primary-fixed/35 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-12 text-white">
              <span className="text-tertiary-fixed font-script italic tracking-wide mb-1.5 text-[1.6rem] sm:text-[1.85rem] lg:text-[2.2rem] leading-none">
                {hero.script}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] text-white tracking-tight leading-tight max-w-4xl">
                {hero.title}
              </h1>
              <p className="text-base sm:text-lg text-tertiary-fixed-dim/95 max-w-2xl mt-2 sm:mt-3 font-light leading-relaxed">
                {hero.deck}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20 text-xs sm:text-[13px] font-medium text-white/90">
                {hero.meta.map((item, idx) => {
                  const Icon = metaIcons[item.icon];
                  return (
                    <span key={item.label} className="contents">
                      {idx > 0 ? <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed hidden sm:inline-block" /> : null}
                      <span className="flex items-center gap-1.5">
                        <Icon className="text-tertiary-fixed w-4 h-4 sm:w-[18px] sm:h-[18px]" aria-hidden="true" />
                        {item.label}
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
