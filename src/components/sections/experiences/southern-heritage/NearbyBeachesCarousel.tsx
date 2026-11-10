"use client";

import { useRef } from "react";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
  Waves,
  Droplets,
  Wind,
} from "lucide-react";
import { BEACH_CARDS } from "@/data/southernHeritageData";

function FooterIcon({ icon }: { icon: "surfing" | "waves" | "camera" | "pool" }) {
  const cls = "w-[15px] h-[15px] text-[#397FA8]";
  if (icon === "camera") return <Camera className={cls} />;
  if (icon === "pool") return <Droplets className={cls} />;
  if (icon === "surfing") return <Wind className={cls} />;
  return <Waves className={cls} />;
}

export function NearbyBeachesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section className="w-full py-16 lg:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-xl space-y-2">
            <p className="font-script text-2xl md:text-3xl text-[#397FA8] leading-none">
              turquoise tides &amp; golden sands...
            </p>
            <h2 className="font-cormorant text-2xl md:text-3xl lg:text-[34px] font-normal text-[#173F56] leading-snug tracking-tight">
              Nearby Beaches &amp; Secret Swims
            </h2>
            <p className="font-body text-sm text-[#475569] font-light leading-relaxed">
              From sheltered turquoise tidal coves and calm turtle lagoons to
              world-class beginner surf points, explore idyllic neighborhood
              coastlines within minutes of Noonna Beach Hotel.
            </p>
          </div>
          <div className="flex items-center gap-2.5 self-start md:self-end">
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-neutral-400 mr-2">
              <MoveHorizontal className="w-[15px] h-[15px]" />
              <span>Scroll or swipe</span>
            </div>
            <button
              aria-label="Previous beaches"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-[#173F56] hover:border-[#397FA8] hover:text-[#397FA8] transition-all duration-200 shadow-sm bg-white"
              onClick={() => scrollBy(-1)}
              type="button"
            >
              <ChevronLeft className="w-[18px] h-[18px]" />
            </button>
            <button
              aria-label="Next beaches"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-[#173F56] hover:border-[#397FA8] hover:text-[#397FA8] transition-all duration-200 shadow-sm bg-white"
              onClick={() => scrollBy(1)}
              type="button"
            >
              <ChevronRight className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {BEACH_CARDS.map((card) => (
            <div
              key={card.title}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[340px] bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col group hover:shadow-md transition-shadow snap-start shrink-0"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#cfe3ee] via-[#e6eef3] to-[#b8d4e6]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px]">
                  {card.distance}
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[#173F56] text-[10px] font-semibold uppercase tracking-wider">
                  {card.imageBadge}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#397FA8]">
                    {card.subtitle}
                  </span>
                  <h3 className="font-cormorant text-2xl font-medium text-[#173F56] leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[#475569] font-light leading-relaxed">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-slate-100 text-[#475569] text-[10px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[12px] text-neutral-500 font-medium">
                  <span className="flex items-center gap-1 text-[#173F56]">
                    <FooterIcon icon={card.footerIcon} /> {card.footerLabel}
                  </span>
                  <a
                    className="text-[#397FA8] hover:text-[#2c6687] transition-colors flex items-center gap-1 font-semibold"
                    href={card.mapHref}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Explore Maps →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
