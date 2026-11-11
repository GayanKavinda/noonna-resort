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
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-4">
          {/* Header */}
          <p className="text-center text-sm text-slate-500 font-light leading-snug">
            <span className="font-semibold text-slate-900 uppercase tracking-wider text-[13px]">
              {DINING_VITALS.title}
            </span>
            <span className="mx-1.5">·</span>
            {DINING_VITALS.subtitle}
          </p>

          {/* Divider with icon */}
          <div className="flex items-center gap-4 my-4" aria-hidden="true">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
            <div className="w-8 h-8 rounded-full bg-[#e5f1f8] flex items-center justify-center text-[#397FA8]">
              <Compass className="w-4 h-4" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
          </div>

          {/* Filters */}
          <div
            id="filter-pill-container"
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {DINING_FILTERS.map(({ id, label }) => {
              const isActive = activeFilter === id;
              const Icon = FILTER_ICONS[id];
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveFilter(id)}
                  className={`h-6 px-3 inline-flex items-center gap-1.5 rounded-full text-[10px] leading-none font-medium cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "bg-[#397FA8] text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-[#397FA8] hover:text-[#397FA8]"
                  }`}
                >
                  <Icon className="w-3 h-3 shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Curated Culinary Directory */}
      <section className="w-full bg-white border-t border-slate-100 pt-12 pb-12" id="dining-directory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#397FA8]">
              {DINING_DIRECTORY.eyebrow}
            </span>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-slate-900 mt-2">
              {DINING_DIRECTORY.title}
            </h2>
            <p className="text-slate-600 text-sm font-light mt-3 leading-relaxed">
              {DINING_DIRECTORY.subtitle}
            </p>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
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
                className="text-center py-12 text-slate-400 text-sm"
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
