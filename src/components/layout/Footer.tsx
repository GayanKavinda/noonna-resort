"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, HOTEL_INFO } from "@/lib/constants";

export const Footer: React.FC = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/images/branding/logo.png"
                alt="Noonna Beach Hotel Logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-tight text-slate-900 leading-none">
                  Noonna Beach Hotel
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-sans">
              A quiet private coastal accommodation on Sri Lanka&apos;s southern shoreline. Designed for quiet restorative days, horizon contemplation, and effortless Indian Ocean barefoot luxury.
            </p>
            <p className="font-script text-2xl text-[#2f6b8f] pt-2">
              where the ocean sets the rhythm...
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-5 font-sans">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs font-sans">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`transition-colors ${
                        isActive
                          ? "text-[#2f6b8f] font-semibold"
                          : "text-slate-600 hover:text-[#2f6b8f]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-5 font-sans">
              Contact &amp; Location
            </h4>
            <ul className="space-y-3 text-xs text-slate-600 font-sans">
              <li className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 text-[#2f6b8f] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Southern Coast, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 text-[#2f6b8f] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <a
                  href={HOTEL_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2f6b8f] transition-colors"
                >
                  Verified on Booking.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 text-[#2f6b8f] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Link href="/contact" className="hover:text-[#2f6b8f] transition-colors">
                  Inquire with Host
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-5 font-sans">
              Connect
            </h4>
            <p className="text-xs text-slate-500 mb-4 font-sans leading-relaxed">
              Follow our ocean journals and seasonal retreat stories.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={HOTEL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram (@noonnabeach)"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#2f6b8f]/30 flex items-center justify-center text-[#2f6b8f] hover:bg-[#2f6b8f] hover:text-white transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={HOTEL_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook (/noonnabeachhotel)"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#2f6b8f]/30 flex items-center justify-center text-[#2f6b8f] hover:bg-[#2f6b8f] hover:text-white transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={HOTEL_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube (Noonna Beach Hotel Films)"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-[#2f6b8f]/30 flex items-center justify-center text-[#2f6b8f] hover:bg-[#2f6b8f] hover:text-white transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href={HOTEL_INFO.socials.whatsapp || "https://wa.me/94771234567"}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Concierge (+94 Concierge Direct)"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full border border-[#2f6b8f]/30 flex items-center justify-center text-[#2f6b8f] hover:bg-[#2f6b8f] hover:text-white transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a
                href="tel:+94771234567"
                title="Direct Phone (+94 Call Host)"
                aria-label="Phone"
                className="w-8 h-8 rounded-full border border-[#2f6b8f]/30 flex items-center justify-center text-[#2f6b8f] hover:bg-[#2f6b8f] hover:text-white transition-all shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex min-w-0 max-w-full flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500 font-sans">
              Accepted Payments:
            </span>
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <div className="h-6 px-3 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center shadow-sm" title="Visa">
                <span className="font-bold italic text-slate-700 text-xs tracking-tight">VISA</span>
              </div>
              <div className="h-6 px-2.5 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center gap-0.5 shadow-sm" title="Mastercard">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EB001B] inline-block -mr-1 opacity-90" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F79E1B] inline-block opacity-90" />
                <span className="font-medium text-[9px] text-slate-700 tracking-tight ml-1 hidden sm:inline">mastercard</span>
              </div>
              <div className="h-6 px-2.5 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center shadow-sm" title="American Express">
                <span className="font-bold text-[9px] text-[#2e698d] tracking-wider">AMEX</span>
              </div>
              <div className="h-6 px-2.5 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center shadow-sm" title="PayPal">
                <span className="font-bold italic text-[9px] text-[#003087]">Pay<span className="text-[#005ea6]">Pal</span></span>
              </div>
              <div className="h-6 px-2.5 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center gap-0.5 shadow-sm" title="Apple Pay">
                <svg className="w-2.5 h-2.5 fill-current text-slate-800" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.74-7.94-12.14-14.59-6.08-9.16-10.79-19.78-14.13-31.84-3.35-12.07-5.02-23.78-5.02-35.14 0-14.7 3.63-26.96 10.9-36.78 7.27-9.82 16.48-14.84 27.64-15.06 4.35 0 9.24 1.12 14.68 3.35 5.43 2.23 9.38 3.4 11.83 3.52 2.01-.12 6.08-1.35 12.21-3.69 6.13-2.34 11.16-3.35 15.08-3.02 11.16.67 20.31 4.58 27.46 11.72-9.82 5.92-14.62 14.28-14.4 25.08.22 8.37 3.46 15.34 9.71 20.92 6.25 5.58 13.73 8.87 22.43 9.88-2.01 6.14-4.58 12.67-7.7 19.59zM119.22 31.84c0-7.37 2.68-14.23 8.04-20.59 5.36-6.36 11.94-10.38 19.75-12.06.67 7.03-1.68 13.9-7.03 20.59-5.36 6.7-12.28 10.73-20.76 12.06z" />
                </svg>
                <span className="font-medium text-[9px] text-slate-800 tracking-tight">Pay</span>
              </div>
              <div className="h-6 px-2.5 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center gap-0.5 shadow-sm" title="Google Pay">
                <span className="font-medium text-[9px] text-slate-600 tracking-tight">G</span>
                <span className="font-medium text-[9px] text-slate-800 tracking-tight">Pay</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col items-center justify-center text-center space-y-2 text-[11px] text-slate-500 font-sans">
          <p>© 2026 Noonna Beach Hotel. All rights reserved. Rates and availability subject to seasonal confirmation.</p>
          <div className="flex items-center justify-center gap-3 text-slate-500">
            <Link href="/privacy" className="hover:text-slate-700 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-500" aria-hidden="true">•</span>
            <Link href="/terms" className="hover:text-slate-700 transition-colors">
              Terms of Stay
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
