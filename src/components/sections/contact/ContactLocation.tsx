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

const ADDRESS_TEXT =
  "NOONNA BEACH HOTEL 2, 81170 Kumbalgama, Southern Province, Sri Lanka";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/Mnts3PWGC7eZ8qFx7";

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
      className="w-full bg-surface-container-lowest py-16 lg:py-24 border-t border-[#D9EAF3]"
      id="property-location"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Centered Header with Waves Ornament */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="font-script text-3xl sm:text-4xl text-[#397FA8] block leading-tight">
            where the waves meet the road...
          </span>

          <h2 className="font-headline-hero text-3xl sm:text-4xl lg:text-5xl text-[#173F56] font-normal tracking-tight">
            Find Your Way to the Coast
          </h2>

          <div
            className="flex items-center justify-center gap-3.5 py-2"
            aria-hidden="true"
          >
            <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#397FA8]/40" />
            <div className="w-8 h-8 rounded-full bg-[#F1F9FD] border border-[#D9EAF3] flex items-center justify-center text-[#397FA8]">
              <Waves className="w-4 h-4" />
            </div>
            <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#397FA8]/40" />
          </div>

          <p className="font-body-md text-[#475569] text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Tucked peacefully between Ahangama and Weligama along Sri
            Lanka&apos;s southern coastal highway, directly facing the coastal
            reef and gentle surf breaks.
          </p>
        </div>

        {/* Main Split Grid: Address Details (5 cols) + Interactive Map (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* Left Column: Clean Sanctuary Location Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#D9EAF3] shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] p-6 sm:p-7 flex flex-col justify-between gap-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#D9EAF3] pb-4">
                <div>
                  <span className="font-label-sm text-[10px] uppercase tracking-[0.14em] text-[#397FA8] font-semibold block mb-0.5">
                    Sanctuary Address
                  </span>
                  <h3 className="font-headline-sm text-xl sm:text-2xl text-[#173F56] font-medium">
                    Noonna Beach Hotel
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#397FA8]/10 text-[#397FA8] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="font-body-md text-sm font-semibold text-[#173F56]">
                  NOONNA BEACH HOTEL 2
                </p>
                <p className="font-body-md text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
                  81170 Kumbalgama, Southern Province, Sri Lanka
                </p>
                <p className="font-label-sm text-[11px] text-[#64748B] font-medium tracking-wide pt-0.5">
                  GPS: 5.9724° N, 80.3719° E
                </p>
              </div>

              {/* Compact Balanced Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "11.5px", lineHeight: "16px" }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#173F56] hover:bg-[#397FA8] text-white font-medium shadow-2xs transition-colors"
                >
                  <Navigation className="w-3 h-3" aria-hidden="true" />
                  <span>Get Directions</span>
                </a>

                <button
                  id="copy-address-btn"
                  type="button"
                  onClick={handleCopy}
                  style={{ fontSize: "11.5px", lineHeight: "16px" }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F1F9FD] hover:bg-[#D9EAF3]/60 border border-[#D9EAF3] text-[#173F56] font-medium transition-colors"
                >
                  {copied ? (
                    <Check
                      className="w-3 h-3 text-emerald-600"
                      aria-hidden="true"
                    />
                  ) : (
                    <Copy
                      className="w-3 h-3 text-[#397FA8]"
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
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#64748B] font-semibold block">
                  Transit Proximity
                </span>
                <div className="grid grid-cols-3 divide-x divide-[#D9EAF3] rounded-2xl bg-[#F1F9FD]/70 border border-[#D9EAF3] py-3">
                  <div className="px-2 text-center">
                    <span className="block font-headline-hero text-base sm:text-lg font-normal text-[#173F56]">
                      1.2 km
                    </span>
                    <span className="text-[10px] text-[#64748B] font-medium block mt-0.5">
                      Kumbalgama Rail
                    </span>
                  </div>
                  <div className="px-2 text-center">
                    <span className="block font-headline-hero text-base sm:text-lg font-normal text-[#173F56]">
                      11 km
                    </span>
                    <span className="text-[10px] text-[#64748B] font-medium block mt-0.5">
                      Koggala Airport
                    </span>
                  </div>
                  <div className="px-2 text-center">
                    <span className="block font-headline-hero text-base sm:text-lg font-normal text-[#173F56]">
                      95 km
                    </span>
                    <span className="text-[10px] text-[#64748B] font-medium block mt-0.5">
                      Mattala (HRI)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3.5 border-t border-[#D9EAF3] flex items-center justify-between text-[11px] text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <BadgeCheck
                    className="w-3.5 h-3.5 text-[#397FA8]"
                    aria-hidden="true"
                  />
                  <span>Ahangama &amp; Weligama Bay</span>
                </span>
                <Link
                  href="/experiences"
                  className="text-[#397FA8] hover:text-[#173F56] font-semibold transition-colors"
                >
                  Experiences →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Live Embedded Google Map */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#D9EAF3] shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] overflow-hidden flex flex-col">
            <div className="relative flex-1 min-h-[340px] lg:min-h-[420px] bg-[#F1F9FD]">
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
                className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md hover:bg-white font-semibold text-[#173F56] hover:text-[#397FA8] shadow-md border border-[#D9EAF3] transition-all"
              >
                <span>Open in Maps</span>
                <ExternalLink
                  className="w-3 h-3 text-[#397FA8]"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="px-6 py-3.5 bg-[#F1F9FD]/60 border-t border-[#D9EAF3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1.5 font-medium text-[#173F56]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Matara Coastal Road, Kumbalgama Beachfront Shoreline
              </span>
              <span className="text-[#64748B]">
                Direct Oceanfront Sanctuary Access
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}