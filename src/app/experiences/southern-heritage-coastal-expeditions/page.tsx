import type { Metadata } from "next";
import type React from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SouthernHeritageHero } from "@/components/sections/experiences/southern-heritage/SouthernHeritageHero";
import { DivisionIntro } from "@/components/sections/experiences/southern-heritage/DivisionIntro";
import { HeritageChapter } from "@/components/sections/experiences/southern-heritage/HeritageChapter";
import { VisualFieldNotes } from "@/components/sections/experiences/southern-heritage/VisualFieldNotes";
import { NearbyBeachesCarousel } from "@/components/sections/experiences/southern-heritage/NearbyBeachesCarousel";
import { GastronomyBanner } from "@/components/sections/experiences/southern-heritage/GastronomyBanner";
import { SouthernHeritagePreFooter } from "@/components/sections/experiences/southern-heritage/SouthernHeritagePreFooter";
import {
  DIVISION_1,
  DIVISION_2,
  HERITAGE_CHAPTERS,
} from "@/data/southernHeritageData";

export const metadata: Metadata = {
  title: "Southern Heritage & Coastal Expeditions | Noonna Beach Hotel",
  description:
    "Discover nine curated southern Sri Lankan sanctuaries near Noonna Beach Hotel, from ancient granite reliefs and Galle Fort to Koggala lagoons, stilt fishermen, whale watching, and Weligama's snake farm.",
  keywords: [
    "Southern Heritage & Coastal Expeditions",
    "Noonna Beach Hotel experiences",
    "Galle Dutch Fort",
    "Kushtarajagala Rock Relief",
    "Kumbalgama Potters Village",
    "Martin Wickramasinghe Museum",
    "Taprobane Island",
    "Koggala Lake mangroves",
    "stilt fishermen Koggala",
    "whale watching Mirissa",
    "Snake Farm Weligama",
  ],
  openGraph: {
    title: "Southern Heritage & Coastal Expeditions | Noonna Beach Hotel",
    description:
      "Nine handpicked heritage sanctuaries and coastal expeditions curated by Noonna Beach Hotel in Kumbalgama, Sri Lanka.",
    url: "/experiences/southern-heritage-coastal-expeditions",
    siteName: "Noonna Beach Hotel",
    locale: "en_LK",
    type: "website",
  },
};

export default function SouthernHeritagePage() {
  const division1 = HERITAGE_CHAPTERS.filter((c) => c.division === 1);
  const division2 = HERITAGE_CHAPTERS.filter((c) => c.division === 2);

  return (
    <div className="w-full bg-white min-h-screen text-[#1a1c1c] pt-20">
      {/* BREADCRUMBS & CONTEXT BAR */}
      <section className="w-full bg-white border-b border-[#D9EAF3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Experiences", href: "/experiences" },
              { label: "Historical & Cultural Gems" },
            ]}
          />
          <div className="inline-flex items-center gap-2 self-start md:self-auto max-w-full px-3 py-1.5 sm:px-3.5 rounded-full bg-slate-50 border border-slate-200 text-[#0d628a] text-[11px] sm:text-xs font-medium leading-snug">
            <svg
              className="w-[15px] h-[15px] shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              style={{ fontVariationSettings: "'FILL' 1" } as React.CSSProperties}
            >
              <path d="M12 10.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.93 5.36-2.2 5.28a1 1 0 0 1-.53.53l-5.28 2.2a.5.5 0 0 1-.66-.66l2.2-5.28a1 1 0 0 1 .53-.53l5.28-2.2a.5.5 0 0 1 .66.66Z" />
            </svg>
            <span className="min-w-0">9 Curated Chapters • 0.4 km – 24 km from Kumbalgama</span>
          </div>
        </div>
      </section>

      <SouthernHeritageHero />

      <DivisionIntro
        eyebrow={DIVISION_1.eyebrow}
        title={DIVISION_1.title}
        description={DIVISION_1.description}
        icon={DIVISION_1.icon}
      />

      <div className="w-full space-y-12 sm:space-y-16 lg:space-y-24 pb-12 sm:pb-16">
        {division1.map((chapter) => (
          <HeritageChapter key={chapter.id} chapter={chapter} />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DivisionIntro
            eyebrow={DIVISION_2.eyebrow}
            title={DIVISION_2.title}
            description={DIVISION_2.description}
            icon={DIVISION_2.icon}
            variant="panel"
          />
        </div>

        {division2.map((chapter) => (
          <HeritageChapter key={chapter.id} chapter={chapter} />
        ))}
      </div>

      <VisualFieldNotes />
      <NearbyBeachesCarousel />
      <GastronomyBanner />
      <SouthernHeritagePreFooter />
    </div>
  );
}
