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
  UtensilsCrossed,
} from "lucide-react";
import type { DiningAction, DiningVenue } from "@/data/diningData";
import { NEUTRAL_IMAGE_PLACEHOLDER } from "@/lib/imageFallback";

const FALLBACK_IMAGE = NEUTRAL_IMAGE_PLACEHOLDER;

function HighlightIcon({ icon }: { icon: "dinner_dining" | "skillet" | "local_cafe" | "coffee" }) {
  const cls = "w-[13px] h-[13px] text-[#2f6b8f] shrink-0";
  if (icon === "dinner_dining") return <UtensilsCrossed className={cls} aria-hidden="true" />;
  if (icon === "skillet") return <Flame className={cls} aria-hidden="true" />;
  return <Coffee className={cls} aria-hidden="true" />;
}

function MetaIcon({ icon }: { icon: "schedule" | "call" | "location_on" }) {
  const cls = "w-[14px] h-[14px] text-[#2f6b8f] shrink-0";
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
    return "inline-flex min-h-[36px] items-center justify-center gap-1 rounded-lg bg-[#2f6b8f] px-3 py-2 text-[11px] font-medium text-white transition-colors duration-200 hover:bg-[#25566f] hover:shadow active:scale-95 sm:hover:scale-105";
  }
  if (variant === "outline") {
    return "inline-flex min-h-[36px] items-center justify-center gap-1 rounded-lg border border-slate-200 px-2.5 py-2 text-[11px] font-medium text-slate-700 transition-colors hover:border-[#2f6b8f]/40 hover:text-[#2f6b8f]";
  }
  return "inline-flex min-h-[36px] items-center justify-center gap-1 rounded-lg bg-slate-100 px-3 py-2 text-[11px] font-medium text-slate-700 transition-colors hover:bg-[#2f6b8f] hover:text-white";
}

interface Props {
  venue: DiningVenue;
  onOpenModal: (venue: DiningVenue) => void;
}

export function DiningVenueCard({ venue, onOpenModal }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const resolveImg = (src: string) => (imgErrors[src] ? FALLBACK_IMAGE : src);
  const isErrored = (src: string) => !!imgErrors[src];
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
      <div className="mx-auto mt-8 w-full max-w-4xl sm:mt-12">
        <div
          id={venue.id}
          data-dining-id={venue.id}
          onClick={() => onOpenModal(venue)}
          className="dining-card group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-xl md:flex-row"
        >
          <div className="flex shrink-0 flex-col md:w-5/12">
            <div className="relative h-56 overflow-hidden sm:h-64 md:h-auto md:min-h-[260px] md:flex-1">
              <Image
                src={resolveImg(mainSrc)}
                alt={mainAlt}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                unoptimized={isErrored(mainSrc)}
                className="card-main-img h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                onError={() => setImgErrors((prev) => (prev[mainSrc] ? prev : { ...prev, [mainSrc]: true }))}
              />
              <span className="absolute left-3 top-3 rounded bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-xs sm:left-3.5 sm:top-3.5">
                {venue.locationBadge}
              </span>
              <span className="absolute right-3 top-3 rounded bg-[#e5f1f8] px-2 py-0.5 text-[10px] font-semibold uppercase text-[#244b62] sm:right-3.5 sm:top-3.5">
                {venue.categoryBadge}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-slate-100 bg-slate-50 p-2.5">
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
                    className={`thumb-btn group/img relative h-14 w-full cursor-pointer overflow-hidden rounded border-0 p-0 text-left transition-all duration-200 sm:h-16 ${
                      active ? "opacity-100 ring-2 ring-[#2f6b8f]" : "opacity-80"
                    }`}
                    data-img-src={t.src}
                  >
                    <Image
                      src={resolveImg(t.src)}
                      alt={t.alt}
                      fill
                      sizes="120px"
                      unoptimized={isErrored(t.src)}
                      className="h-full w-full object-cover duration-200 group-hover/img:scale-110"
                      onError={() => setImgErrors((prev) => (prev[t.src] ? prev : { ...prev, [t.src]: true }))}
                    />
                    <span className="absolute inset-0 flex items-end bg-slate-900/30 p-1 text-[8px] font-medium text-white">
                      {t.label ?? ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:gap-6 sm:p-6 md:p-8">
              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="flex items-center gap-0.5 rounded border border-amber-200/60 bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-700">
                      ★ {venue.rating}
                    </span>
                    <span className="text-[11px] font-light text-slate-500">{venue.reviews}</span>
                  </div>
                  {venue.priceNote ? (
                    <span className="text-[11px] font-semibold text-slate-700">{venue.priceNote}</span>
                  ) : null}
                </div>
                <h3 className="font-cormorant text-2xl font-medium leading-snug text-slate-900 transition-colors group-hover:text-[#2f6b8f] md:text-3xl">
                  {venue.number}. {venue.name}
                </h3>
                <p className="mb-3 mt-1 text-[11px] font-medium text-[#2f6b8f]">{venue.subtitle}</p>
                {venue.description ? (
                  <p className="text-sm font-light leading-relaxed text-slate-600">
                    {venue.description}
                  </p>
                ) : null}

                <div className="mt-4 flex flex-col justify-between gap-3 border-t border-slate-100 pt-3.5 text-xs text-slate-500 sm:flex-row sm:items-start">
                  {venue.meta.map((m, idx) => (
                    <div key={`${m.text}-${idx}`} className="flex min-w-0 items-start gap-1.5 text-[11px]">
                      <MetaIcon icon={m.icon} />
                      <span className={m.truncate ? "min-w-0 truncate" : "break-words"}>
                        {m.href ? (
                          <a
                            href={m.href}
                            className="font-medium text-slate-600 hover:text-[#2f6b8f]"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {m.text}
                          </a>
                        ) : (
                          <span>
                            {m.text}
                            {m.emphasis ? (
                              <span className="ml-1 font-medium text-emerald-700">
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

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600">
                  <Coffee className="h-[14px] w-[14px] text-[#2f6b8f]" aria-hidden="true" />
                  {venue.featuredFooterLeft ?? "Beachside Specialty Roastery"}
                </span>
                <div className="flex flex-wrap items-center gap-2">
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
      className="dining-card group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden sm:h-56">
        <Image
          src={resolveImg(mainSrc)}
          alt={mainAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={isErrored(mainSrc)}
          className="card-main-img h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
          onError={() => setImgErrors((prev) => (prev[mainSrc] ? prev : { ...prev, [mainSrc]: true }))}
        />
        <span className="absolute left-3 top-3 rounded bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-xs">
          {venue.locationBadge}
        </span>
        <span className="absolute right-3 top-3 rounded bg-[#e5f1f8] px-2 py-0.5 text-[10px] font-semibold uppercase text-[#244b62]">
          {venue.categoryBadge}
        </span>
      </div>

      <div className={`grid ${galleryCols} border-y border-slate-100 bg-slate-50`}>
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
              className={`thumb-btn group/img relative h-14 w-full cursor-pointer overflow-hidden rounded border-0 p-0 text-left transition-all duration-200 sm:h-16 ${
                active ? "opacity-100 ring-2 ring-[#2f6b8f]" : "opacity-80"
              }`}
              data-img-src={t.src}
            >
              <Image
                src={resolveImg(t.src)}
                alt={t.alt}
                fill
                sizes="120px"
                unoptimized={isErrored(t.src)}
                className="h-full w-full object-cover duration-200 group-hover/img:scale-110"
                onError={() => setImgErrors((prev) => (prev[t.src] ? prev : { ...prev, [t.src]: true }))}
              />
              <span className="absolute inset-0 flex items-end bg-slate-900/30 p-1 text-[8px] font-medium text-white">
                {t.label ?? ""}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:gap-6 sm:p-6">
        <div>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-1.5">
            <div className="flex items-center gap-1.5">
              <span className="flex items-center gap-0.5 rounded border border-amber-200/60 bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-700">
                ★ {venue.rating}
              </span>
              <span className="text-[11px] font-light text-slate-500">{venue.reviews}</span>
            </div>
            {venue.secondaryPill ? (
              <span className="rounded bg-sky-50 px-2 py-0.5 text-[10px] font-semibold uppercase text-[#244b62]">
                {venue.secondaryPill}
              </span>
            ) : venue.priceNote ? (
              <span className="text-[11px] font-medium text-slate-600">{venue.priceNote}</span>
            ) : null}
          </div>

          <h3 className="font-cormorant text-2xl font-medium leading-snug text-slate-900 transition-colors group-hover:text-[#2f6b8f]">
            {venue.number}. {venue.name}
          </h3>
          <p className="mb-2.5 mt-1 text-[11px] font-medium text-[#2f6b8f]">{venue.subtitle}</p>
          {venue.description ? (
            <p className="text-xs font-light leading-relaxed text-slate-600">{venue.description}</p>
          ) : null}

          {venue.highlights && venue.highlights.length > 0 ? (
            <div className="mt-4 space-y-2 rounded-xl border border-sky-200/60 bg-[#e5f1f8]/60 p-3 text-[11px]">
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
                  <span className={`${i === 0 ? "font-bold text-[#2f6b8f]" : "text-slate-500"}`}>
                    {h.value}
                  </span>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-500">
            {venue.meta.map((m, idx) => (
              <div key={`${m.text}-${idx}`} className="flex min-w-0 items-center gap-1.5 text-[11px]">
                <MetaIcon icon={m.icon} />
                <span className={m.truncate ? "min-w-0 truncate" : "break-words"}>
                  {m.href ? (
                    <a
                      href={m.href}
                      className="font-medium text-slate-600 hover:text-[#2f6b8f]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {m.text}
                    </a>
                  ) : (
                    <span>
                      {m.text}
                      {m.emphasis ? (
                        <span className="ml-1 font-medium text-emerald-700">
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

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4 text-xs">
          <div className="flex flex-wrap items-center gap-2">
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
          <div className="flex flex-wrap items-center gap-2">
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
