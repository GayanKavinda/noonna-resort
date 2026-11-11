import type { DestinationTransitData } from "@/data/destinationDetailData";
import { Car, Bike, Footprints, Train } from "lucide-react";

const iconMap = {
  electric_rickshaw: Car,
  pedal_bike: Bike,
  footprint: Footprints,
  train: Train,
} as const;

export function DestinationTransitSection({ transit }: { transit: DestinationTransitData }) {
  return (
    <section className="w-full bg-white py-20 border-b border-[#D9EAF3]/60 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6 pb-6 border-b border-slate-100">
          <div>
            <span className="font-['Moon_Dance',cursive] text-[#397FA8] italic block text-[32px] leading-none mb-1">
              {transit.sectionScript}
            </span>
            <h2 className="text-3xl lg:text-[42px] text-[#173F56] font-['Cormorant_Garamond',serif] font-normal tracking-tight leading-tight">
              {transit.sectionTitle}
            </h2>
            <p className="font-['Inter',sans-serif] text-[15px] text-[#475569] max-w-2xl font-light leading-relaxed mt-2.5">
              {transit.sectionDeck}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transit.cards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={card.title}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#397FA8] ${
                  card.featured ? "border-2 border-[#397FA8]/40 relative" : "border border-slate-200"
                }`}
              >
                <div>
                  <div className="w-full h-44 relative overflow-hidden bg-[#173F56]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={card.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-t-xl"
                      crossOrigin="anonymous"
                      loading="eager"
                      src={card.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#173F56]/70 via-transparent to-transparent" />
                    <span
                      className={`absolute top-3 right-3 px-2.5 py-1 rounded-full font-['Inter',sans-serif] text-[11px] font-semibold tracking-wide ${
                        card.featured
                          ? "bg-[#397FA8] text-white shadow-xs"
                          : "bg-white/95 backdrop-blur-md border border-slate-200 text-[#173F56] shadow-sm"
                      }`}
                    >
                      {card.durationBadge}
                    </span>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs">
                      <Icon className="w-[17px] h-[17px] text-tertiary-fixed" aria-hidden="true" />
                      <span className="font-medium text-[11px] text-white/90 font-['Inter',sans-serif]">
                        {card.iconLabel}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <div>
                      <h3 className="text-[20px] font-['Cormorant_Garamond',serif] font-medium text-[#173F56] leading-snug">
                        {card.title}
                      </h3>
                      <span className="text-[12px] font-['Inter',sans-serif] font-semibold text-[#397FA8] block mt-0.5">
                        {card.subtitle}
                      </span>
                    </div>
                    <p className="text-[13px] font-['Inter',sans-serif] text-[#475569] font-light leading-relaxed pt-1">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-['Inter',sans-serif]">
                  <span className={card.featured ? "text-[#397FA8] font-semibold" : "text-neutral-500 font-light"}>
                    {card.leftNote}
                  </span>
                  <span className="text-[#173F56] font-medium">{card.rightNote}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
