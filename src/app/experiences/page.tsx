import type { Metadata } from "next";
import { ExperiencesHero } from "@/components/sections/experiences/ExperiencesHero";
import { NearbyBeachesSection } from "@/components/sections/experiences/NearbyBeachesSection";
import { HeritageSection } from "@/components/sections/experiences/HeritageSection";
import { CulinarySpotlights } from "@/components/sections/experiences/CulinarySpotlights";
import { HotelSurroundings } from "@/components/sections/experiences/HotelSurroundings";
import { CoastalMotion } from "@/components/sections/experiences/CoastalMotion";
import { PreFooterCta } from "@/components/shared/PreFooterCta";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { absoluteUrl } from "@/lib/siteUrl";

const title = "Experiences & Coastal Journeys";
const fullTitle = "Experiences & Coastal Journeys | Noonna Beach Hotel";
const description =
  "Explore 13 southern beaches and surf breaks, 9 historic sanctuaries and mangrove lagoons, and authentic coastal dining surrounding Noonna Beach Hotel in Kumbalgama, Sri Lanka.";
const canonical = absoluteUrl("/experiences");
const image = "/images/hotel/hero-beach.jpg";
const imageUrl = absoluteUrl(image) ?? image;

export const metadata: Metadata = {
  title,
  description,
  alternates: canonical ? { canonical } : undefined,
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
    title: fullTitle,
    description:
      "Explore 13 southern beaches, 9 historic sanctuaries, and authentic coastal dining surrounding Noonna Beach Hotel in Kumbalgama, Sri Lanka.",
    url: canonical ?? undefined,
    siteName: "Noonna Beach Hotel",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Coastal shores and surf breaks near Noonna Beach Hotel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description:
      "Explore 13 southern beaches, 9 historic sanctuaries, and authentic coastal dining near Noonna Beach Hotel.",
    images: [imageUrl],
  },
};

export default function ExperiencesPage() {
  return (
    <div className="w-full bg-surface-container-lowest min-h-screen text-on-surface pt-20">
      <section className="w-full bg-surface-container-lowest border-b border-[#D9EAF3]/60">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Experiences" },
            ]}
          />
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
