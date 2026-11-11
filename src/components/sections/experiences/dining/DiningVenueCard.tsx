"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  Clock,
  Coffee,
  Flame,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import type { DiningAction, DiningVenue } from "@/data/diningData";

function HighlightIcon({ icon }: { icon: "dinner_dining" | "skillet" | "local_cafe" | "coffee" }) {
  const cls = "w-[13px] h-[13px] text-[#397FA8] shrink-0";
  if (icon === "dinner_dining") return <UtensilsCrossed className={cls} aria-hidden="true" />;
  if (icon === "skillet") return <Flame className={cls} aria-hidden="true" />;
  return <Coffee className={cls} aria-hidden="true" />;
}

function MetaIcon({ icon }: { icon: "schedule" | "call" | "location_on" }) {
  const cls = "w-[14px] h-[14px] text-[#397FA8] shrink-0";
  if (icon === "schedule") return <Clock className={cls} aria-hidden="true" />;
  if (icon === "call") return <Phone className={cls} aria-hidden="true" />;
  return <MapPin className={cls} aria-hidden="true" />;
}

function ActionIcon({ icon }: { icon: DiningAction["icon"] }) {
  const cls = "w-[13px] h-[13px]";
  if (icon === "directions") return <Navigation className={cls} aria-hidden="true" />;
  if (icon === "call") return <Phone className={cls} aria-hidden="true" />;
  if (icon === "table_restaurant") return <CalendarDays className={cls} aria-hidden="true" />;
  return <MessageCircle className={cls} aria-hidden="true" />;
}

function actionClass(variant: DiningAction["variant"]) {
  if (variant === "primary") {
    return "px-3 py-2 rounded-lg bg-[#397FA8] hover:bg-[#2e698d] text-white text-[11px] font-medium transition-colors flex items-center gap-1 duration-200 hover:shadow hover:scale-105 active:scale-95";
  }
  if (variant === "outline") {
    return "px-2.5 py-2 rounded-lg border border-slate-200 hover:border-[#397FA8]/40 hover:text-[#397FA8] text-slate-700 text-[11px] font-medium transition-colors flex items-center gap-1";
  }
  return "px-3 py-2 rounded-lg bg-slate-100 hover:bg-[#397FA8] hover:text-white text-slate-700 text-[11px] font-medium transition-colors flex items-center gap-1";
}

interface Props {
  venue: DiningVenue;
  onOpenModal: (venue: DiningVenue) => void;
}

export function DiningVenueCard({ venue, onOpenModal }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSrc =
    activeIndex === 0
      ? venue.mainImage.src
      : (venue.thumbs[activeIndex - 1]?.src ?? venue.mainImage.src);
  const mainAlt =
    activeIndex === 0
      ? venue.mainImage.alt
      : (venue.thumbs[activeIndex - 1]?.alt ?? venue.mainImage.alt);

  // Card 1 & 2 have 4 thumbnails (grid-cols-4), Cards 3-9 have 3 thumbnails (grid-cols-3)
  const galleryCols =
    venue.thumbs.length === 4 ? "grid-cols-4 gap-1.5 p-2" : "grid-cols-3 gap-2 p-2.5";

  if (venue.featured) {
    return (
      <div className="mt-12 max-w-4xl mx-auto w-full">
        <div
          id={venue.id}
          data-dining-id={venue.id}
          onClick={() => onOpenModal(venue)}
          className="dining-card bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col md:flex-row cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-slate-300"
        >
          <div className="relative h-64 md:h-auto md:w-5/12 shrink-0 overflow-hidden min-h-[260px]">
            <Image
              src={mainSrc}
              alt={mainAlt}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="w-full h-full object-cover group-hover:scale-105 duration-300 card-main-img transition-all"
            />
            <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-slate-900/80 text-white text-[11px] font-medium backdrop-blur-xs">
              {venue.locationBadge}
            </span>
            <span className="absolute top-3.5 right-3.5 px-2 py-0.5 rounded bg-[#e5f1f8] text-[#244b62] text-[10px] font-semibold uppercase">
              {venue.categoryBadge}
            </span>
            <div className="absolute bottom-2 left-2 right-2 grid grid-cols-3 gap-1.5 p-1 bg-slate-900/70 backdrop-blur-md rounded-xl z-10">
              {venue.thumbs.slice(0, 3).map((t, i) => {
                const idx = i + 1;
                const active = activeIndex === idx;
                return (
                  <button
                    key={`${venue.id}-ft-${i}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(idx);
                    }}
                    className={`thumb-btn cursor-pointer relative h-10 rounded-lg overflow-hidden group/img transition-all duration-200 p-0 border-0 text-left w-full ${
                      active ? "ring-2 ring-[#397FA8] opacity-100" : "opacity-80"
                    }`}
                    data-img-src={t.src}
                  >
                    <Image
                      src={t.src}
                      alt={t.alt}
                      fill
                      sizes="120px"
                      className="w-full h-full object-cover group-hover/img:scale-110 duration-200"
                    />
                    <span className="absolute inset-0 bg-slate-900/30 flex items-end p-0.5 text-[8px] text-white font-medium">
                      {t.label ?? ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200/60 text-[11px] font-bold flex items-center gap-0.5">
                    ★ {venue.rating}
                  </span>
                  <span className="text-[11px] text-slate-500 font-light">{venue.reviews}</span>
                </div>
                {venue.priceNote ? (
                  <span className="text-[11px] font-semibold text-slate-700">{venue.priceNote}</span>
                ) : null}
              </div>
              <h3 className="font-cormorant text-2xl md:text-3xl text-slate-900 font-medium group-hover:text-[#397FA8] transition-colors leading-snug">
                {venue.number}. {venue.name}
              </h3>
              <p className="text-[11px] text-[#397FA8] font-medium mt-1 mb-3">{venue.subtitle}</p>

              <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                {venue.meta.map((m, idx) => (
                  <div key={`${m.text}-${idx}`} className="flex items-center gap-1.5 text-[11px]">
                    <MetaIcon icon={m.icon} />
                    <span className={m.truncate ? "truncate" : ""}>
                      {m.href ? (
                        <a
                          href={m.href}
                          className="hover:text-[#397FA8] text-slate-600 font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {m.text}
                        </a>
                      ) : (
                        <span>
                          {m.text}
                          {m.emphasis ? (
                            <span className="text-emerald-600 font-medium ml-1">
                              • {m.emphasis}
                            </span>
                          ) : null}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[11px] font-medium text-slate-600 flex items-center gap-1.5">
                <Coffee className="w-[14px] h-[14px] text-[#397FA8]" aria-hidden="true" />
                {venue.featuredFooterLeft ?? "Beachside Specialty Roastery"}
              </span>
              <div className="flex items-center gap-2">
                {venue.actions.map((a) => (
                  <a
                    key={`${a.label}-${a.href}`}
                    href={a.href}
                    target={a.external ? "_blank" : undefined}
                    rel={a.external ? "noopener noreferrer" : undefined}
                    className={actionClass(a.variant)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ActionIcon icon={a.icon} />
                    {a.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id={venue.id}
      data-dining-id={venue.id}
      onClick={() => onOpenModal(venue)}
      className="dining-card bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-slate-300"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={mainSrc}
          alt={mainAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover group-hover:scale-105 duration-300 card-main-img transition-all"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/80 text-white text-[11px] font-medium backdrop-blur-xs">
          {venue.locationBadge}
        </span>
        <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#e5f1f8] text-[#244b62] text-[10px] font-semibold uppercase">
          {venue.categoryBadge}
        </span>
      </div>

      <div className={`grid ${galleryCols} bg-slate-50 border-y border-slate-100`}>
        {venue.thumbs.map((t, i) => {
          const idx = i + 1;
          const active = activeIndex === idx;
          return (
            <button
              key={`${venue.id}-thumb-${i}`}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(idx);
              }}
              className={`thumb-btn cursor-pointer relative h-16 rounded overflow-hidden group/img transition-all duration-200 p-0 border-0 text-left w-full ${
                active ? "ring-2 ring-[#397FA8] opacity-100" : "opacity-80"
              }`}
              data-img-src={t.src}
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="120px"
                className="w-full h-full object-cover group-hover/img:scale-110 duration-200"
              />
              <span className="absolute inset-0 bg-slate-900/30 flex items-end p-1 text-[8px] text-white font-medium">
                {t.label ?? ""}
              </span>
            </button>
          );
        })}
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-1.5 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200/60 text-[11px] font-bold flex items-center gap-0.5">
                ★ {venue.rating}
              </span>
              <span className="text-[11px] text-slate-500 font-light">{venue.reviews}</span>
            </div>
            {venue.secondaryPill ? (
              <span className="px-2 py-0.5 rounded bg-sky-50 text-[#244b62] text-[10px] font-semibold uppercase">
                {venue.secondaryPill}
              </span>
            ) : venue.priceNote ? (
              <span className="text-[11px] font-medium text-slate-600">{venue.priceNote}</span>
            ) : null}
          </div>

          <h3 className="font-cormorant text-2xl text-slate-900 font-medium group-hover:text-[#397FA8] transition-colors leading-snug">
            {venue.number}. {venue.name}
          </h3>
          <p className="text-[11px] text-[#397FA8] font-medium mt-1 mb-2.5">{venue.subtitle}</p>
          {venue.description ? (
            <p className="text-xs text-slate-600 font-light leading-relaxed">{venue.description}</p>
          ) : null}

          {venue.highlights && venue.highlights.length > 0 ? (
            <div className="mt-4 p-3 rounded-xl bg-[#e5f1f8]/60 border border-sky-200/60 space-y-2 text-[11px]">
              {venue.highlights.map((h, i) => (
                <div key={h.label} className="flex items-center justify-between gap-2">
                  <span
                    className={`${
                      i === 0 ? "font-medium text-[#244b62]" : "text-slate-600"
                    } flex items-center gap-1`}
                  >
                    <HighlightIcon icon={h.icon} />
                    {h.label}
                  </span>
                  <span className={`${i === 0 ? "font-bold text-[#397FA8]" : "text-slate-500"}`}>
                    {h.value}
                  </span>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
            {venue.meta.map((m, idx) => (
              <div key={`${m.text}-${idx}`} className="flex items-center gap-1.5 text-[11px]">
                <MetaIcon icon={m.icon} />
                <span className={m.truncate ? "truncate" : ""}>
                  {m.href ? (
                    <a
                      href={m.href}
                      className="hover:text-[#397FA8] text-slate-600 font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {m.text}
                    </a>
                  ) : (
                    <span>
                      {m.text}
                      {m.emphasis ? (
                        <span className="text-emerald-600 font-medium ml-1">
                          • {m.emphasis}
                        </span>
                      ) : null}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            {venue.actions
              .filter((a) => a.icon === "directions" || a.icon === "call")
              .map((a) => (
                <a
                  key={`${a.label}-${a.href}`}
                  href={a.href}
                  target={a.external ? "_blank" : undefined}
                  rel={a.external ? "noopener noreferrer" : undefined}
                  className={actionClass(a.variant)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ActionIcon icon={a.icon} />
                  {a.label}
                </a>
              ))}
          </div>
          <div className="flex items-center gap-2">
            {venue.actions
              .filter((a) => a.icon === "table_restaurant" || a.icon === "chat")
              .map((a) => (
                <a
                  key={`${a.label}-${a.href}`}
                  href={a.href}
                  target={a.external ? "_blank" : undefined}
                  rel={a.external ? "noopener noreferrer" : undefined}
                  className={actionClass(a.variant)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ActionIcon icon={a.icon} />
                  {a.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
