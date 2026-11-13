"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Coffee, Compass, Flame, LayoutGrid, Soup, Sunset } from "lucide-react";
import {
  DINING_DIRECTORY,
  DINING_FILTERS,
  DINING_VENUES,
  DINING_VITALS,
  type DiningCategory,
  type DiningVenue,
} from "@/data/diningData";
import { DiningVenueCard } from "./DiningVenueCard";
import { DiningModal } from "./DiningModal";

const FILTER_ICONS = {
  all: LayoutGrid,
  "clay-pot": Soup,
  "beach-grill": Flame,
  rooftop: Sunset,
  cafe: Coffee,
} as const;

export function DiningDirectorySection() {
  const [activeFilter, setActiveFilter] = useState<DiningCategory | "all">("all");
  const [selectedVenue, setSelectedVenue] = useState<DiningVenue | null>(null);

  const filteredVenues = DINING_VENUES.filter(
    (v) => activeFilter === "all" || v.categories.includes(activeFilter)
  );

  const regular = filteredVenues.filter((v) => !v.featured);
  const featured = filteredVenues.filter((v) => v.featured);

  return (
    <>
      <section className="w-full bg-white">
        <div className="mx-auto max-w-4xl px-4 pt-5 pb-4 sm:px-6 sm:pt-6">
          {/* Header */}
          <p className="text-center text-sm font-light leading-snug text-slate-500">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-slate-900">
              {DINING_VITALS.title}
            </span>
            <span className="mx-1.5">·</span>
            {DINING_VITALS.subtitle}
          </p>

          {/* Divider with icon */}
          <div className="my-4 flex items-center gap-4" aria-hidden="true">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f1f8] text-[#2f6b8f]">
              <Compass className="h-4 w-4" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
          </div>

          {/* Filters */}
          <div className="-mx-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
            <div
              id="filter-pill-container"
              className="flex w-max min-w-full items-center justify-start gap-2 sm:w-auto sm:flex-wrap sm:justify-center"
            >
              {DINING_FILTERS.map(({ id, label }) => {
                const isActive = activeFilter === id;
                const Icon = FILTER_ICONS[id];
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveFilter(id)}
                    className={`inline-flex min-h-[36px] shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-3.5 text-[11px] font-medium leading-none transition-colors duration-200 sm:min-h-0 sm:h-7 sm:px-3 sm:text-[10px] ${
                      isActive
                        ? "bg-[#2f6b8f] text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-[#2f6b8f] hover:text-[#2f6b8f]"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 sm:h-3 sm:w-3" aria-hidden="true" />
                    <span className="whitespace-nowrap">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Curated Culinary Directory */}
      <section className="w-full border-t border-slate-100 bg-white pt-10 pb-10 sm:pt-12 sm:pb-12" id="dining-directory">
        <div className="mx-auto max-w-7xl px-4 pt-6 pb-6 sm:px-6 sm:pt-10 lg:px-12">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2f6b8f]">
              {DINING_DIRECTORY.eyebrow}
            </span>
            <h2 className="mt-2 font-cormorant text-[32px] leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {DINING_DIRECTORY.title}
            </h2>
            <p className="mt-3 text-sm font-light leading-relaxed text-slate-600">
              {DINING_DIRECTORY.subtitle}
            </p>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
            id="dining-cards-grid"
            transition={{ layout: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } }}
          >
            <AnimatePresence initial={false}>
              {regular.map((venue) => (
                <motion.div
                  key={venue.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.2, ease: "easeInOut" },
                    layout: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
                  }}
                >
                  <DiningVenueCard venue={venue} onOpenModal={setSelectedVenue} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence initial={false}>
            {featured.map((venue) => (
              <motion.div
                key={venue.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.2, ease: "easeInOut" },
                  layout: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
                }}
              >
                <DiningVenueCard venue={venue} onOpenModal={setSelectedVenue} />
              </motion.div>
            ))}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {filteredVenues.length === 0 && (
              <motion.div
                key="no-dining-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="text-center py-12 text-slate-500 text-sm"
              >
                No dining spots found under this category filter.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <DiningModal venue={selectedVenue} onClose={() => setSelectedVenue(null)} />
    </>
  );
}
