"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, HOTEL_INFO } from "@/lib/constants";
import { HeaderIcons } from "./HeaderIcons";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100" data-purpose="site-header">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        
        {/* Left Side: Brand Lockup */}
        <div className="flex items-center gap-3.5 shrink-0" data-purpose="brand-lockup">
          <Link
            href="/"
            className="block focus:outline-none focus:ring-2 focus:ring-[#173F56] focus:ring-offset-2 rounded"
            aria-label="Noonna Beach Hotel Home"
          >
            <Image
              src="/images/branding/logo.png"
              alt="Noonna Beach Hotel Logo"
              width={48}
              height={48}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex flex-col justify-center">
            <Link
              href="/"
              className="font-heading font-semibold text-[23px] tracking-tight text-[#397FA8] leading-tight hover:opacity-95"
            >
              Noonna
            </Link>
            <span className="font-body uppercase text-[9.5px] font-semibold tracking-widest text-[#64748B] -mt-0.5">
              Beach Hotel
            </span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 lg:gap-10"
          data-purpose="primary-nav"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body text-sm transition-colors py-1 ${
                  isActive
                    ? "font-semibold text-[#397FA8] hover:text-[#2E698D]"
                    : "font-medium text-[#334155] hover:text-[#397FA8]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Social Media Icons + Primary CTA Button */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0" data-purpose="header-actions">
          {/* Social Icons Group (Exact 4-channel order: Instagram, YouTube, WhatsApp, Facebook) */}
          <HeaderIcons className="hidden lg:flex" />

          {/* Primary Action Button: "Book Your Stay" */}
          <a
            href={HOTEL_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#397FA8] hover:bg-[#2E698D] text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-lg shadow-xs transition-all duration-200 hover:shadow-md group"
            data-purpose="cta-booking-button"
          >
            <span className="font-body tracking-wide">Book Your Stay</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          {/* Mobile hamburger toggle (functional access only) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Functional Mobile Menu Fallback */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 shadow-lg">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-slate-700 hover:text-[#397FA8]"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 flex justify-center">
              <HeaderIcons />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
