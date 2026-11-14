"use client";

import type { DestinationVitalsData } from "@/data/destinationDetailData";
import {
  Waves,
  MapPin,
  Thermometer,
  Footprints,
  Clock,
  Wind,
  Navigation,
  MessageCircle,
  Droplets,
  Compass,
} from "lucide-react";
import { NEUTRAL_IMAGE_PLACEHOLDER } from "@/lib/imageFallback";

const cardIconMap = {
  schedule: Clock,
  surfing: Waves,
  pool: Droplets,
  compass: Compass,
} as const;

export function DestinationVitalsSection({ vitals }: { vitals: DestinationVitalsData }) {
  const { showcase } = vitals;
  return (
    <section className="w-full bg-surface-container-lowest py-10 sm:py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 mb-8 sm:mb-10 border-b border-[#D9EAF3]/70">
          <div className="min-w-0">
            <span className="block font-script italic text-[#2f6b8f] text-[26px] sm:text-[32px] leading-none mb-2">
              {vitals.sectionScript}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#173F56] font-normal tracking-tight text-balance">
              {vitals.sectionTitle}
            </h2>
            <p className="font-sans text-sm text-[#475569] font-light max-w-2xl mt-2 leading-relaxed">
              {vitals.sectionDeck}
            </p>
          </div>
          <div className="flex items-center gap-2 self-start lg:self-auto">
            <span className="px-3 py-1.5 rounded-full bg-[#2f6b8f]/10 text-[#2f6b8f] text-[11px] sm:text-xs font-medium tracking-wide border border-[#2f6b8f]/20 flex items-center gap-1.5">
              <Droplets className="w-4 h-4 shrink-0" aria-hidden="true" /> <span className="leading-snug">{vitals.climateBadge}</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D9EAF3] shadow-md relative min-h-[280px] sm:min-h-[340px] lg:min-h-full flex flex-col justify-end group bg-[#173F56]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={showcase.imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              crossOrigin="anonymous"
              loading="eager"
              src={showcase.image}
              onError={(e) => {
                if (e.currentTarget.src !== NEUTRAL_IMAGE_PLACEHOLDER) {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = NEUTRAL_IMAGE_PLACEHOLDER;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173F56]/95 via-[#173F56]/35 to-transparent" />
            <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2 z-10">
              <span className="max-w-full px-2.5 py-0.5 sm:py-1 rounded-full bg-[#173F56]/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold tracking-wide border border-white/25 shadow-sm flex items-center gap-1.5">
                <Waves className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-tertiary-fixed shrink-0" aria-hidden="true" /> <span className="leading-snug">{showcase.topBadge}</span>
              </span>
              <span className="px-2.5 py-0.5 sm:py-1 rounded-full bg-[#173F56]/95 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold border border-white/25 shadow-sm flex items-center gap-1.5">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-tertiary-fixed shrink-0" aria-hidden="true" /> <span className="leading-snug">{showcase.distanceBadge}</span>
              </span>
            </div>
            <div className="relative p-4 sm:p-5 lg:p-6 z-10 text-white">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="px-2 py-0.5 rounded-full bg-[#173F56]/80 text-white text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider border border-white/25">
                  {showcase.panelBadge}
                </span>
                <span className="text-[10px] sm:text-[11px] text-white/80 leading-snug">{showcase.panelBadgeText}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] text-white font-normal leading-tight mb-1 text-balance">{showcase.title}</h3>
              <p className="text-[12px] sm:text-[13px] text-white/90 font-light leading-relaxed max-w-xl mb-2.5">{showcase.description}</p>
              <div className="pt-2.5 border-t border-white/20 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-2 sm:gap-2.5 text-[10px] sm:text-[11px] text-tertiary-fixed">
                {showcase.facts.map((fact) => {
                  const Icon = fact.icon === "thermostat" ? Thermometer : fact.icon === "surfing" ? Waves : Footprints;
                  return (
                    <div key={fact.label} className="flex items-center gap-1.5 min-w-0">
                      <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span className="leading-snug">{fact.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
            {vitals.cards.map((card) => {
              const Icon = cardIconMap[card.icon];
              const LeftIcon = card.left.icon === "air" ? Wind : Waves;
              return (
                <div
                  key={card.title}
                  className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#D9EAF3] shadow-sm hover:shadow-md hover:border-[#2f6b8f] transition-all group"
                >
                  <div className="flex items-start sm:items-center justify-between mb-2 gap-2">
                    <div className="flex items-start sm:items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#2f6b8f]/10 text-[#2f6b8f] flex items-center justify-center group-hover:bg-[#2f6b8f] group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-[#4A6B82] font-medium block">
                          {card.eyebrow}
                        </span>
                        <h4 className="font-serif text-[17px] sm:text-lg font-medium text-[#173F56] leading-snug text-balance">{card.title}</h4>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#2f6b8f] bg-[#2f6b8f]/10 px-2 py-0.5 rounded-full shrink-0 text-center leading-snug">
                      {card.pill}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-[12px] text-[#4A6B82] font-light leading-relaxed mb-2">{card.description}</p>
                  <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-[#173F56]">
                    <span className="flex items-center gap-1.5 min-w-0">
                      <LeftIcon className="w-3.5 h-3.5 text-[#2f6b8f] shrink-0" aria-hidden="true" /> <span className="leading-snug">{card.left.label}</span>
                    </span>
                    <span className={`${card.right === "Crystalline clarity" ? "font-medium text-[#2f6b8f]" : "text-[#4A6B82]"} leading-snug`}>
                      {card.right}
                    </span>
                  </div>
                </div>
              );
            })}

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#173F56] border border-[#2f6b8f]/40 shadow-md text-white flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#2f6b8f]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-start sm:items-center justify-between mb-2 gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-tertiary-fixed font-semibold">
                      {vitals.intel.eyebrow}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-white/80 font-mono leading-snug">{vitals.intel.coordinates}</span>
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-medium text-white mb-1 leading-snug text-balance">{vitals.intel.title}</h4>
                <p className="text-[11px] sm:text-[12px] text-white/80 font-light leading-relaxed mb-3">{vitals.intel.description}</p>
              </div>
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  className="min-h-10 sm:h-9 px-3 bg-[#2f6b8f] hover:bg-[#2D6A8E] text-white text-[11px] font-medium rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all text-center"
                  href={vitals.intel.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{vitals.intel.mapsLabel}</span>
                </a>
                <a
                  className="min-h-10 sm:h-9 px-3 bg-white/10 hover:bg-white hover:text-[#173F56] text-white text-[11px] font-medium rounded-lg flex items-center justify-center gap-1.5 border border-white/20 transition-all text-center"
                  href={vitals.intel.hostHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{vitals.intel.hostLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
