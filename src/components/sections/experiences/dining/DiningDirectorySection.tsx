"use client";

import { useState } from "react";
import { Compass } from "lucide-react";
import { DINING_DIRECTORY, DINING_VENUES, DINING_VITALS, type DiningVenue } from "@/data/diningData";
import { DiningVenueCard } from "./DiningVenueCard";
import { DiningModal } from "./DiningModal";

export function DiningDirectorySection() {
  const [activeFilter, setActiveFilter] = useState("All 10 Destinations");
  const [selectedVenue, setSelectedVenue] = useState<DiningVenue | null>(null);

  const filteredVenues = DINING_VENUES.filter((venue) => {
    if (activeFilter === "All 10 Destinations") return true;
    const badge = venue.categoryBadge.toLowerCase();
    const name = venue.name.toLowerCase();
    if (activeFilter === "Clay Pot Feasts") {
      return (
        badge.includes("clay") ||
        badge.includes("local") ||
        badge.includes("favorite") ||
        badge.includes("buffet") ||
        name.includes("mettha") ||
        name.includes("kumbala")
      );
    }
    if (activeFilter === "Beach Grills") {
      return badge.includes("grill") || badge.includes("seafood") || badge.includes("fresh catch");
    }
    if (activeFilter === "Rooftop Vistas") {
      return badge.includes("rooftop") || badge.includes("sunset") || badge.includes("panorama");
    }
    if (activeFilter === "Artisan Cafes") {
      return (
        badge.includes("cafe") ||
        badge.includes("roast") ||
        badge.includes("surf") ||
        badge.includes("coffee") ||
        badge.includes("artisan")
      );
    }
    return true;
  });

  const regular = filteredVenues.filter((v) => !v.featured);
  const featured = filteredVenues.filter((v) => v.featured);

  return (
    <>
      {/* 2. QUICK VITALS BENTO BAR (AT A GLANCE: 5 CLEAN CARDS) - exact ref & master layout */}
      <section className="w-full bg-white -mt-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#e5f1f8] flex items-center justify-center text-[#397FA8] shrink-0">
                <Compass className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
                  {DINING_VITALS.title}
                </p>
                <p className="text-xs text-slate-500 font-light">
                  {DINING_VITALS.subtitle}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2" id="filter-pill-container">
              {DINING_VITALS.pills.map((pill) => {
                const isActive = activeFilter === pill;
                return (
                  <button
                    key={pill}
                    type="button"
                    onClick={() => setActiveFilter(pill)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 ${
                      isActive
                        ? "bg-[#397FA8] text-white shadow-xs"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    {pill}
                  </button>
                );
              })}
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" id="dining-cards-grid">
            {regular.map((venue) => (
              <DiningVenueCard key={venue.id} venue={venue} onOpenModal={setSelectedVenue} />
            ))}
          </div>

          {featured.map((venue) => (
            <DiningVenueCard key={venue.id} venue={venue} onOpenModal={setSelectedVenue} />
          ))}

          {filteredVenues.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              No dining spots found under this category filter.
            </div>
          )}
        </div>
      </section>

      <DiningModal venue={selectedVenue} onClose={() => setSelectedVenue(null)} />
    </>
  );
}
