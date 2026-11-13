"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Copy,
  Navigation,
  BadgeCheck,
  ExternalLink,
  Waves,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const ADDRESS_TEXT = "Noonna Beach Hotel, Kumbalgama, Southern Province, Sri Lanka";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/7Fea7dbtqiWPuo2T8";

const EMBED_MAP_URL =
  "https://maps.google.com/maps?q=Noonna%20Beach%20Hotel%20Kumbalgama%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed";

export function ContactLocation() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS_TEXT);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      className="w-full bg-surface-container-lowest py-12 sm:py-16 lg:py-24 border-t border-[#D9EAF3]"
      id="property-location"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8 sm:space-y-12">
        <Reveal className="max-w-2xl mx-auto text-center space-y-3">
          <span className="font-script text-2xl sm:text-3xl lg:text-4xl text-[#2f6b8f] block leading-tight">
            where the waves meet the road...
          </span>

          <h2 className="font-headline-hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#173F56] font-normal tracking-tight text-balance">
            Find Your Way to the Coast
          </h2>

          <div
            className="flex items-center justify-center gap-3.5 py-1 sm:py-2"
            aria-hidden="true"
          >
            <span className="h-px w-12 sm:w-16 lg:w-24 bg-gradient-to-r from-transparent to-[#397FA8]/40" />
            <div className="w-8 h-8 rounded-full bg-[#F1F9FD] border border-[#D9EAF3] flex items-center justify-center text-[#2f6b8f]">
              <Waves className="w-4 h-4" />
            </div>
            <span className="h-px w-12 sm:w-16 lg:w-24 bg-gradient-to-l from-transparent to-[#397FA8]/40" />
          </div>

          <p className="font-body-md text-[#475569] text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Tucked peacefully between Ahangama and Weligama along Sri
            Lanka&apos;s southern coastal highway, directly facing the coastal
            reef and gentle surf breaks.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-stretch">
          <Reveal className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-[#D9EAF3] shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] p-5 sm:p-6 lg:p-7 flex flex-col justify-between gap-5 sm:gap-6 h-full">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between border-b border-[#D9EAF3] pb-4 gap-3">
                <div className="min-w-0">
                  <span className="font-label-sm text-[10px] uppercase tracking-[0.14em] text-[#2f6b8f] font-semibold block mb-0.5">
                    Sanctuary Address
                  </span>
                  <h3 className="font-headline-sm text-xl sm:text-2xl text-[#173F56] font-medium leading-snug text-balance">
                    Noonna Beach Hotel
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#2f6b8f]/10 text-[#2f6b8f] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="font-body-md text-sm font-semibold text-[#173F56]">
                  Noonna Beach Hotel
                </p>
                <p className="font-body-md text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
                  Kumbalgama, Southern Province, Sri Lanka
                </p>
              </div>

              {/* Compact Balanced Buttons */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2 pt-1">
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "11.5px", lineHeight: "16px" }}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg bg-[#173F56] hover:bg-[#2f6b8f] text-white font-medium shadow-2xs transition-colors text-center"
                >
                  <Navigation className="w-3 h-3 shrink-0" aria-hidden="true" />
                  <span>Get Directions</span>
                </a>

                <button
                  id="copy-address-btn"
                  type="button"
                  onClick={handleCopy}
                  style={{ fontSize: "11.5px", lineHeight: "16px" }}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg bg-[#F1F9FD] hover:bg-[#D9EAF3]/60 border border-[#D9EAF3] text-[#173F56] font-medium transition-colors text-center"
                >
                  {copied ? (
                    <Check
                      className="w-3 h-3 text-emerald-700 shrink-0"
                      aria-hidden="true"
                    />
                  ) : (
                    <Copy
                      className="w-3 h-3 text-[#2f6b8f] shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <span>{copied ? "Copied!" : "Copy Address"}</span>
                </button>
              </div>
            </div>

            {/* Bottom Proximity & Footer */}
            <div className="space-y-4">
              <div className="space-y-2.5">
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#475569] font-semibold block">
                  Transit Proximity
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-y sm:divide-y-0 divide-[#D9EAF3] rounded-2xl bg-[#F1F9FD]/70 border border-[#D9EAF3] overflow-hidden">
                  <div className="px-3 py-3 text-center">
                    <span className="block font-headline-hero text-base sm:text-lg font-normal text-[#173F56]">
                      1.2 km
                    </span>
                    <span className="text-[10px] text-[#475569] font-medium block mt-0.5 leading-snug">
                      Kumbalgama Rail
                    </span>
                  </div>
                  <div className="px-3 py-3 text-center">
                    <span className="block font-headline-hero text-base sm:text-lg font-normal text-[#173F56]">
                      11 km
                    </span>
                    <span className="text-[10px] text-[#475569] font-medium block mt-0.5 leading-snug">
                      Koggala Airport
                    </span>
                  </div>
                  <div className="px-3 py-3 text-center">
                    <span className="block font-headline-hero text-base sm:text-lg font-normal text-[#173F56]">
                      95 km
                    </span>
                    <span className="text-[10px] text-[#475569] font-medium block mt-0.5 leading-snug">
                      Mattala (HRI)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3.5 border-t border-[#D9EAF3] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] text-[#475569]">
                <span className="flex items-center gap-1.5">
                  <BadgeCheck
                    className="w-3.5 h-3.5 text-[#2f6b8f] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="leading-snug">Ahangama &amp; Weligama Bay</span>
                </span>
                <Link
                  href="/experiences"
                  className="text-[#2f6b8f] hover:text-[#173F56] font-semibold transition-colors inline-flex py-1"
                >
                  Experiences →
                </Link>
              </div>
            </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7 h-full">
            <div className="bg-white rounded-3xl border border-[#D9EAF3] shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] overflow-hidden flex flex-col h-full">
              <div className="relative flex-1 min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] bg-[#F1F9FD]">
                <iframe
                  title="Noonna Beach Hotel Location on Google Maps"
                  src={EMBED_MAP_URL}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "11px", lineHeight: "14px" }}
                  className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-10 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-lg bg-white/95 backdrop-blur-md hover:bg-white font-semibold text-[#173F56] hover:text-[#2f6b8f] shadow-md border border-[#D9EAF3] transition-all"
                >
                  <span>Open in Maps</span>
                  <ExternalLink
                    className="w-3 h-3 text-[#2f6b8f] shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="px-4 sm:px-6 py-3 sm:py-3.5 bg-[#F1F9FD]/60 border-t border-[#D9EAF3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#475569]">
                <span className="flex items-center gap-1.5 font-medium text-[#173F56] min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="leading-snug">Matara Coastal Road, Kumbalgama Beachfront Shoreline</span>
                </span>
                <span className="text-[#475569] leading-snug">
                  Direct Oceanfront Sanctuary Access
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}