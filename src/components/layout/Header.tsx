"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS, HOTEL_INFO, type NavItem } from "@/lib/constants";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getScrollSnapshot() {
  return window.scrollY > 24;
}

function getServerScrollSnapshot() {
  return false;
}

export const Header: React.FC = () => {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [menuState, setMenuState] = useState({ open: false, path: pathname });
  const mobileMenuOpen = menuState.open && menuState.path === pathname;
  const setMobileMenuOpen = (next: boolean | ((open: boolean) => boolean)) => {
    setMenuState((prev) => {
      const openNow = prev.open && prev.path === pathname;
      const resolved = typeof next === "function" ? next(openNow) : next;
      return { open: resolved, path: pathname };
    });
  };
  const [dropdownState, setDropdownState] = useState<{ value: string | null; path: string }>({ value: null, path: pathname });
  const openDropdown = dropdownState.path === pathname ? dropdownState.value : null;
  const setOpenDropdown = (value: string | null) => setDropdownState({ value, path: pathname });
  const [expandedState, setExpandedState] = useState<{ value: string | null; path: string }>({ value: null, path: pathname });
  const mobileExpanded = expandedState.path === pathname ? expandedState.value : null;
  const setMobileExpanded = (value: string | null) => setExpandedState({ value, path: pathname });
  const scrolled = useSyncExternalStore(subscribeScroll, getScrollSnapshot, getServerScrollSnapshot);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !mobileMenuOpen;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownState({ value: null, path: pathname });
        setMenuState({ open: false, path: pathname });
      }
    };
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownState({ value: null, path: pathname });
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileMenuOpen]);

  const isItemActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    if (pathname === item.href) return true;
    if (pathname?.startsWith(`${item.href}/`)) return true;
    return item.children?.some((c) => c.href !== item.href && pathname === c.href.split("#")[0]) ?? false;
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        transparent ? "bg-transparent border-b border-transparent" : "bg-white border-b border-gray-100"
      }`}
      data-purpose="site-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-3 sm:gap-4 lg:gap-6">
        {/* Brand Logo & Wordmark */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1 lg:flex-initial" data-purpose="brand-lockup">
          <Link
            href="/"
            className="block shrink-0 focus:outline-none focus:ring-2 focus:ring-[#2f6b8f] focus:ring-offset-2 rounded"
            aria-label="Noonna Beach Hotel Home"
          >
            <Image
              src="/images/branding/logo.png"
              alt="Noonna Beach Hotel Logo"
              width={48}
              height={48}
              priority
              className={`h-10 sm:h-12 w-auto object-contain transition-[filter] duration-300 ${transparent ? "brightness-0 invert" : ""}`}
            />
          </Link>
          <div className="flex flex-col justify-center min-w-0">
            <Link
              href="/"
              className={`font-heading font-semibold text-[20px] sm:text-[23px] tracking-tight leading-tight hover:opacity-95 transition-colors truncate ${
                transparent ? "text-white" : "text-[#2f6b8f]"
              }`}
            >
              Noonna
            </Link>
            <span
              className={`font-sans uppercase text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.18em] sm:tracking-widest -mt-0.5 transition-colors truncate ${
                transparent ? "text-white/80" : "text-[#475569]"
              }`}
            >
              Beach Hotel
            </span>
          </div>
        </div>

        {/* Center Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-8 lg:gap-10"
          data-purpose="primary-nav"
          ref={dropdownRef}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = isItemActive(item);
            const hasChildren = !!item.children?.length;
            const open = openDropdown === item.label;

            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-sans text-sm transition-colors py-1 ${
                    transparent
                      ? isActive
                        ? "font-semibold text-white"
                        : "font-medium text-white/90 hover:text-white"
                      : isActive
                        ? "font-semibold text-[#2f6b8f] hover:text-[#25566f]"
                        : "font-medium text-[#334155] hover:text-[#2f6b8f]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(open ? null : item.label)}
                  aria-expanded={open}
                  aria-haspopup="menu"
                  className={`font-sans text-sm transition-colors py-1 inline-flex items-center gap-1 ${
                    transparent
                      ? isActive
                        ? "font-semibold text-white"
                        : "font-medium text-white/90 hover:text-white"
                      : isActive
                        ? "font-semibold text-[#2f6b8f] hover:text-[#25566f]"
                        : "font-medium text-[#334155] hover:text-[#2f6b8f]"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      role="menu"
                      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 4 }}
                      transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56"
                    >
                      <div className="rounded-xl border border-[#D9EAF3] bg-white/98 backdrop-blur-sm shadow-[0_12px_32px_-8px_rgba(23,63,86,0.18)] p-2">
                        {item.children?.map((child) => {
                          const childPath = child.href.split("#")[0];
                          const childActive =
                            child.href === item.href
                              ? pathname === item.href
                              : pathname === childPath;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              onClick={() => setOpenDropdown(null)}
                              className={`block px-3 py-2.5 rounded-lg text-sm font-sans transition-colors ${
                                childActive
                                  ? "bg-[#EAF5FA] text-[#2f6b8f] font-semibold"
                                  : "text-[#334155] hover:bg-[#F4FAFC] hover:text-[#2f6b8f]"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right Side: Social Media Icons + Primary CTA Button */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 shrink-0" data-purpose="header-actions">
          <div className="hidden lg:flex items-center gap-2.5" data-purpose="social-links">
            {[
              {
                href: HOTEL_INFO.socials.instagram,
                label: "Official Instagram: @noonnabeach",
                title: "Instagram (@noonnabeach)",
                path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
              },
              {
                href: HOTEL_INFO.socials.youtube,
                label: "Official YouTube: Noonna Beach Hotel Films",
                title: "YouTube (Noonna Beach Hotel Films)",
                path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
              },
              {
                href: HOTEL_INFO.socials.whatsapp ? `https://wa.me/${HOTEL_INFO.socials.whatsapp}` : "https://wa.me/noonnabeachhotel",
                label: "Official WhatsApp Concierge",
                title: "WhatsApp Concierge",
                path: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z",
              },
              {
                href: HOTEL_INFO.socials.facebook,
                label: "Official Facebook: /noonnabeachhotel",
                title: "Facebook (/noonnabeachhotel)",
                path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.title}
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-200 shadow-xs motion-reduce:transition-none ${
                  transparent
                    ? "border-white/40 text-white hover:text-[#173F56] hover:bg-white"
                    : "border-[#2f6b8f]/40 text-[#2f6b8f] hover:text-white hover:bg-[#2f6b8f]"
                }`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={item.path} />
                </svg>
              </a>
            ))}
          </div>

          <a
            href={HOTEL_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#2f6b8f] hover:bg-[#245670] text-white text-[11px] sm:text-xs md:text-sm font-medium px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-sm transition-colors duration-200 hover:shadow-md motion-reduce:transition-none group"
            data-purpose="cta-booking-button"
          >
            <span className="font-sans tracking-wide whitespace-nowrap">Book Your Stay</span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </a>

          <button
            type="button"
            className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors motion-reduce:transition-none ${
              transparent ? "text-white hover:bg-white/10" : "text-[#173F56] hover:bg-gray-100"
            }`}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-primary-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-primary-navigation"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-[#D9EAF3] bg-white px-4 sm:px-6 shadow-lg max-h-[calc(100vh-4.5rem)] overflow-y-auto overscroll-contain"
          >
            <nav className="flex flex-col space-y-1 py-4" aria-label="Mobile Primary Navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = isItemActive(item);
                const hasChildren = !!item.children?.length;
                const expanded = mobileExpanded === item.label;
                const submenuId = `mobile-submenu-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`font-sans text-base py-2.5 min-h-11 flex items-center ${
                        isActive
                          ? "font-semibold text-[#2f6b8f]"
                          : "font-medium text-slate-800 hover:text-[#2f6b8f]"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.href} className="py-1">
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(expanded ? null : item.label)}
                      aria-expanded={expanded}
                      aria-controls={submenuId}
                      className={`w-full flex items-center justify-between font-sans text-base py-2.5 min-h-11 ${
                        isActive
                          ? "font-semibold text-[#2f6b8f]"
                          : "font-medium text-slate-800 hover:text-[#2f6b8f]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          id={submenuId}
                          initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 mt-1 pl-3 border-l border-[#D9EAF3] flex flex-col">
                            {item.children?.map((child) => {
                              const childPath = child.href.split("#")[0];
                              const childActive =
                                child.href === item.href
                                  ? pathname === item.href
                                  : pathname === childPath;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`font-sans text-[15px] py-2.5 min-h-11 flex items-center ${
                                    childActive
                                      ? "font-semibold text-[#2f6b8f]"
                                      : "font-medium text-slate-700 hover:text-[#2f6b8f]"
                                  }`}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
