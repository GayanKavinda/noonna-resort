"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, MapPin, MessageCircle, Navigation, Phone, Star, UtensilsCrossed, X } from "lucide-react";
import type { DiningVenue } from "@/data/diningData";

interface Props {
  venue: DiningVenue | null;
  onClose: () => void;
}

export function DiningModal({ venue, onClose }: Props) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    if (!venue) {
      setSelectedImg(null);
      return;
    }
    setSelectedImg(venue.modal.img);
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
  const currentHeroImg = selectedImg || m.img;

  // Build 4-thumb gallery from venue thumbs + main image
  const gallery: { src: string; alt: string; label?: string }[] = [
    { src: venue.mainImage.src, alt: venue.mainImage.alt, label: "Main" },
    ...venue.thumbs,
  ].slice(0, 4);

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
      className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 transform transition-all duration-300 max-h-[90vh] flex flex-col scale-100">
        <button
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 shadow-md flex items-center justify-center transition-all cursor-pointer border border-slate-200"
          type="button"
          onClick={onClose}
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="relative h-64 md:h-72 w-full shrink-0 overflow-hidden">
          <Image
            src={currentHeroImg}
            alt={m.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#397FA8] text-white text-[10px] font-semibold uppercase tracking-wider">
                {m.tag}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium">
                {m.dist}
              </span>
            </div>
            <h2 className="font-cormorant text-3xl md:text-4xl text-white font-medium leading-tight">
              {venue.number}. {m.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-slate-200">
              <div className="flex items-center gap-1 text-amber-300">
                <Star className="w-[15px] h-[15px] fill-current" aria-hidden="true" />
                <span className="font-bold">{m.rating}</span>
                <span className="text-slate-300 font-light">{m.reviews}</span>
              </div>
              <span>•</span>
              <span className="text-slate-200 font-medium">{m.price}</span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-sans">
                Photo Gallery Strip (Click to View)
              </h5>
              <span className="text-[11px] text-[#397FA8] font-medium">{m.dist}</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {gallery.map((t, i) => {
                const isActive = currentHeroImg === t.src;
                return (
                  <button
                    key={`${t.src}-${i}`}
                    type="button"
                    onClick={() => setSelectedImg(t.src)}
                    className={`group relative rounded-xl overflow-hidden h-20 border border-slate-200 cursor-pointer p-0 text-left w-full transition-all ${
                      isActive ? "ring-2 ring-[#397FA8]" : ""
                    }`}
                  >
                    <Image
                      src={t.src}
                      alt={t.alt}
                      fill
                      sizes="180px"
                      className="w-full h-full object-cover group-hover:scale-105 duration-200"
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
              <Clock className="w-[18px] h-[18px] text-[#397FA8] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-slate-800">Service Hours</p>
                <p className="text-slate-600 mt-0.5">{m.hours}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-[18px] h-[18px] text-[#397FA8] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-slate-800">Verified Address</p>
                <p className="text-slate-600 mt-0.5">{m.address}</p>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans">
              Overview &amp; Village Heritage
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
                  <UtensilsCrossed className="w-[18px] h-[18px] text-[#397FA8]" aria-hidden="true" />
                  <h5 className="text-xs font-semibold text-[#244b62] uppercase tracking-wider">
                    Culinary Highlights
                  </h5>
                </div>
                <span className="text-xs font-bold text-[#397FA8]">{m.price}</span>
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
              <Star className="w-4 h-4 text-[#397FA8]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                Verified Traveler Experience
              </span>
              <span className="text-[11px] text-slate-400">({m.rating} • {m.reviews})</span>
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

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <a
              className="w-full sm:flex-1 py-3 px-5 rounded-lg bg-[#397FA8] hover:bg-[#2f6b8f] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-colors"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp Concierge
            </a>
            {callMeta ? (
              <a
                className="w-full sm:w-auto py-3 px-4 rounded-lg border border-slate-200 hover:border-[#397FA8]/40 hover:text-[#397FA8] text-slate-700 text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
                href={callMeta.href}
              >
                <Phone className="w-4 h-4" aria-hidden="true" /> {callMeta.text}
              </a>
            ) : null}
            <a
              className="w-full sm:w-auto py-3 px-5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="w-4 h-4" aria-hidden="true" /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
