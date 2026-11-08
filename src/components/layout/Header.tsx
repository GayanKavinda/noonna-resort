"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, HOTEL_INFO } from "@/lib/constants";
import { HeaderIcons } from "./HeaderIcons";
import { Button } from "@/components/ui/Button";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        {/* Left Side: Brand Lockup */}
        <div className="flex shrink-0 items-center gap-3.5">
          <Link
            href="/"
            className="block rounded focus:outline-none focus:ring-2 focus:ring-[#397FA8] focus:ring-offset-2"
            aria-label="Noonna Beach Hotel Home"
          >
            <Image
              src="/images/branding/logo.png"
              alt="Noonna Beach Hotel Emblem"
              width={48}
              height={48}
              priority
              className="h-11 w-auto object-contain"
            />
          </Link>

          <Link href="/" className="flex flex-col justify-center leading-tight">
            <span className="font-heading text-[23px] font-semibold tracking-tight text-[#397FA8] leading-none hover:opacity-95">
              Noonna
            </span>
            <span className="font-body text-[9.5px] font-semibold tracking-widest text-[#64748B] uppercase mt-0.5">
              Beach Hotel
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-10"
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
                className={`font-body text-sm py-1 transition-colors duration-150 ${
                  isActive
                    ? "font-semibold text-[#397FA8] border-b-2 border-[#397FA8]"
                    : "font-medium text-[#334155] hover:text-[#397FA8]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Social Media Icons + Primary CTA Button */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          {/* Social Icons (Master Specification Cluster) */}
          <HeaderIcons className="hidden lg:flex" />

          {/* Primary CTA: "Book Your Stay" */}
          <Button
            href={HOTEL_INFO.bookingUrl}
            isExternal
            variant="primary"
            size="md"
            icon={
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
            }
          >
            Book Your Stay
          </Button>

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

