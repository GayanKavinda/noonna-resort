import type { Metadata } from "next";
import { ExperiencesHero } from "@/components/sections/experiences/ExperiencesHero";
import { NearbyBeachesSection } from "@/components/sections/experiences/NearbyBeachesSection";
import { HeritageSection } from "@/components/sections/experiences/HeritageSection";
import { CulinarySpotlights } from "@/components/sections/experiences/CulinarySpotlights";
import { HotelSurroundings } from "@/components/sections/experiences/HotelSurroundings";
import { CoastalMotion } from "@/components/sections/experiences/CoastalMotion";
import { PreFooterCta } from "@/components/shared/PreFooterCta";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

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
    <div className="w-full bg-surface-container-lowest min-h-screen text-on-surface">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-8 pb-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Experiences" },
          ]}
        />
      </div>

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