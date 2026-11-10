import type { Metadata } from "next";
import Link from "next/link";
import { ExperiencesHero } from "@/components/sections/experiences/ExperiencesHero";
import { NearbyBeachesSection } from "@/components/sections/experiences/NearbyBeachesSection";
import { HeritageSection } from "@/components/sections/experiences/HeritageSection";
import { CulinarySpotlights } from "@/components/sections/experiences/CulinarySpotlights";
import { HotelSurroundings } from "@/components/sections/experiences/HotelSurroundings";
import { CoastalMotion } from "@/components/sections/experiences/CoastalMotion";
import { PreFooterCta } from "@/components/shared/PreFooterCta";

export const metadata: Metadata = {
  title: "Experiences & Coastal Journeys | Noonna Beach Hotel",
  description:
    "Explore 13 southern beaches and surf breaks, 9 historic sanctuaries and mangrove lagoons, and authentic coastal dining surrounding Noonna Beach Hotel in Kumbalgama, Sri Lanka.",
  keywords: [
    "Noonna Beach Hotel experiences",
    "Midigama surf breaks",
    "Lazy Left surf",
    "Rams Right Midigama",
    "Galle Dutch Fort",
    "Kushtarajagala rock relief",
    "Koggala stilt fishermen",
    "Kumbalgama Sri Lanka",
    "Weligama Bay surfing",
    "southern Sri Lanka coastal guide",
  ],
  openGraph: {
    title: "Experiences & Coastal Journeys | Noonna Beach Hotel",
    description:
      "Explore 13 southern beaches, 9 historic sanctuaries, and authentic coastal dining surrounding Noonna Beach Hotel in Kumbalgama, Sri Lanka.",
    url: "/experiences",
    siteName: "Noonna Beach Hotel",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: "/images/hotel/hero-beach.jpg",
        width: 1200,
        height: 630,
        alt: "Coastal shores and surf breaks near Noonna Beach Hotel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiences & Coastal Journeys | Noonna Beach Hotel",
    description:
      "Explore 13 southern beaches, 9 historic sanctuaries, and authentic coastal dining near Noonna Beach Hotel.",
    images: ["/images/hotel/hero-beach.jpg"],
  },
};

export default function ExperiencesPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Section 1: Breadcrumb Navigation Bar */}
      <section className="w-full bg-white pt-24 pb-2 md:pt-28 md:pb-3 border-b border-[#D9EAF3]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-slate-500 font-light"
          >
            <Link
              href="/"
              className="hover:text-[#397FA8] transition-colors focus:outline-none focus:ring-1 focus:ring-[#397FA8]"
            >
              Home
            </Link>
            <span className="text-slate-300" aria-hidden="true">
              /
            </span>
            <span className="text-[#173F56] font-medium" aria-current="page">
              Experiences
            </span>
          </nav>
        </div>
      </section>

      <ExperiencesHero />
      <NearbyBeachesSection />
      <HeritageSection />
      <CulinarySpotlights />
      <HotelSurroundings />
      <CoastalMotion />

      <PreFooterCta context="experiences" />
    </div>
  );
}