"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, MapPin, MessageCircle, Navigation, Phone, Star, UtensilsCrossed, X } from "lucide-react";
import type { DiningVenue } from "@/data/diningData";
import { NEUTRAL_IMAGE_PLACEHOLDER } from "@/lib/imageFallback";

interface Props {
  venue: DiningVenue | null;
  onClose: () => void;
}

export function DiningModal({ venue, onClose }: Props) {
  const [selected, setSelected] = useState<{ id: string; img: string } | null>(null);
  const [failedHeroSrc, setFailedHeroSrc] = useState<string | null>(null);
  const [thumbErrors, setThumbErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!venue) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [venue, onClose]);

  if (!venue) return null;
  const m = venue.modal;
  const selectedHero = selected?.id === venue.id ? selected.img : m.img;
  const heroFailed = failedHeroSrc === selectedHero;
  const currentHeroImg = heroFailed ? NEUTRAL_IMAGE_PLACEHOLDER : selectedHero;

  const gallery = venue.thumbs.slice(0, 3);

  const whatsappMsg = encodeURIComponent(
    `Hello Noonna Concierge, I am staying at the hotel and would like to arrange dining / reservations for ${m.title}. Could you please assist?`
  );
  const whatsappUrl = `https://wa.me/94779206951?text=${whatsappMsg}`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${m.title} ${m.address}`
  )}`;

  const callMeta = venue.meta.find((x) => x.icon === "call" && x.href);

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-3 backdrop-blur-xs sm:p-4"
      style={{
        paddingTop: "max(0.75rem, env(safe-area-inset-top))",
        paddingRight: "max(0.75rem, env(safe-area-inset-right))",
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        paddingLeft: "max(0.75rem, env(safe-area-inset-left))",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex max-h-[min(90vh,calc(100dvh-1.5rem))] w-full max-w-3xl scale-100 transform flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 sm:max-h-[90vh]">
        <button
          aria-label="Close details"
          className="absolute right-3 top-3 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-md transition-all hover:bg-white hover:text-slate-900 sm:right-4 sm:top-4"
          type="button"
          onClick={onClose}
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-64 md:h-72">
          <Image
            src={currentHeroImg}
            alt={m.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            unoptimized={heroFailed}
            className="h-full w-full object-cover transition-all duration-300"
            onError={() => {
              if (failedHeroSrc !== selectedHero) setFailedHeroSrc(selectedHero);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 text-white sm:bottom-4 sm:left-6 sm:right-6">
            <div className="mb-1.5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#2f6b8f] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                {m.tag}
              </span>
              <span className="rounded-full bg-[#25566f]/90 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur-md">
                {m.dist}
              </span>
            </div>
            <h2 className="font-cormorant text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl">
              {venue.number}. {m.title}
            </h2>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-200">
              <div className="flex items-center gap-1 text-amber-300">
                <Star className="h-[15px] w-[15px] fill-current" aria-hidden="true" />
                <span className="font-bold">{m.rating}</span>
                <span className="font-light text-slate-300">{m.reviews}</span>
              </div>
              <span aria-hidden="true">•</span>
              <span className="font-medium text-slate-200">{m.price}</span>
            </div>
          </div>
        </div>

        <div className="min-h-0 space-y-6 overflow-y-auto overscroll-contain p-4 sm:p-6 md:p-8">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-sans">
                Photo Gallery Strip
              </h5>
              <span className="text-[11px] text-[#2f6b8f] font-medium">{m.dist}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {gallery.map((t, i) => {
                const thumbFailed = !!thumbErrors[t.src];
                const thumbSrc = thumbFailed ? NEUTRAL_IMAGE_PLACEHOLDER : t.src;
                const isActive = currentHeroImg === t.src;
                return (
                  <button
                    key={`${t.src}-${i}`}
                    type="button"
                    onClick={() => setSelected({ id: venue.id, img: t.src })}
                    className={`group relative h-20 w-full cursor-pointer overflow-hidden rounded-xl border border-slate-200 p-0 text-left transition-all sm:h-24 ${
                      isActive ? "ring-2 ring-[#2f6b8f]" : ""
                    }`}
                  >
                    <Image
                      src={thumbSrc}
                      alt={t.alt}
                      fill
                      sizes="180px"
                      unoptimized={thumbFailed}
                      className="w-full h-full object-cover group-hover:scale-105 duration-200"
                      onError={() => setThumbErrors((prev) => (prev[t.src] ? prev : { ...prev, [t.src]: true }))}
                    />
                    {t.label ? (
                      <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-slate-900/80 text-[10px] text-white font-medium">
                        {t.label}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
            <div className="flex items-start gap-2">
              <Clock className="w-[18px] h-[18px] text-[#2f6b8f] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-slate-800">Service Hours</p>
                <p className="text-slate-600 mt-0.5">{m.hours}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-[18px] h-[18px] text-[#2f6b8f] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-slate-800">Verified Address</p>
                <p className="text-slate-600 mt-0.5">{m.address}</p>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-sans">
              Overview &amp; Heritage
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed font-light">{m.desc}</p>
            {m.dietary ? (
              <p className="text-xs text-slate-500 font-light italic mt-1.5">{m.dietary}</p>
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#e5f1f8]/60 border border-sky-200/60">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <UtensilsCrossed className="w-[18px] h-[18px] text-[#2f6b8f]" aria-hidden="true" />
                  <h5 className="text-xs font-semibold text-[#244b62] uppercase tracking-wider">
                    Culinary Highlights
                  </h5>
                </div>
                <span className="text-xs font-bold text-[#2f6b8f]">{m.price}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-light">{m.specialties}</p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-[18px] h-[18px] text-amber-700" aria-hidden="true" />
                  <h5 className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
                    Noonna Concierge Note
                  </h5>
                </div>
                <span className="text-xs font-bold text-amber-800">Assistance</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-light">
                Our concierge desk can arrange personalized tuk-tuks, confirm daily fresh catch arrivals, or reserve sunset veranda seats.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-1.5 mb-2.5">
              <Star className="w-4 h-4 text-[#2f6b8f]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                Verified Traveler Reviews
              </span>
              <span className="text-[11px] text-slate-500">({m.rating} • {m.reviews})</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200/70 text-slate-600 font-light">
                <span className="font-semibold text-slate-800">&quot;Authentic southern flavor&quot;</span> — Unmatched depth of spices and local clay-pot culinary tradition.
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200/70 text-slate-600 font-light">
                <span className="font-semibold text-slate-800">&quot;Warm coastal hospitality&quot;</span> — Gentle ocean breeze, attentive hosts, and serene surroundings.
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200/70 text-slate-600 font-light">
                <span className="font-semibold text-slate-800">&quot;Must-visit recommendation&quot;</span> — High praise from both local epicures and international travelers.
              </div>
            </div>
          </div>

          <div className="flex flex-col items-stretch gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2f6b8f] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#2f6b8f] sm:flex-1"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Ask Concierge via WhatsApp
            </a>
            {callMeta ? (
              <a
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-700 transition-colors hover:border-[#2f6b8f]/40 hover:text-[#2f6b8f] sm:w-auto"
                href={callMeta.href}
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> {callMeta.text}
              </a>
            ) : null}
            <a
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-700 transition-colors hover:bg-slate-200 sm:w-auto"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
