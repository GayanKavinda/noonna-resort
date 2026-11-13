import type { Metadata } from "next";
import { StayHero } from "@/components/sections/stay/StayHero";
import { StayVisualMosaic } from "@/components/sections/stay/StayVisualMosaic";
import { StayBlueprint } from "@/components/sections/stay/StayBlueprint";
import { StayAmenities } from "@/components/sections/stay/StayAmenities";
import { StayDiningPreview } from "@/components/sections/stay/StayDiningPreview";
import { StayPolicies } from "@/components/sections/stay/StayPolicies";
import { StayLocationMap } from "@/components/sections/stay/StayLocationMap";
import { PreFooterCta } from "@/components/shared/PreFooterCta";

export const metadata: Metadata = {
  title: "The Stay | Entire Resort Rental | Noonna Beach Hotel",
  description:
    "Explore an entire resort rental at Noonna Beach Hotel in Kumbalgama, Sri Lanka. A private resort stay in a peaceful coastal setting, steps from the shoreline.",
  openGraph: {
    title: "The Stay | Entire Resort Rental | Noonna Beach Hotel",
    description:
      "A serene coastal sanctuary in Kumbalgama, Southern Province, Sri Lanka, offered as an entire resort rental for a private resort stay.",
    url: "https://noonnabeach.com/stay",
    siteName: "Noonna Beach Hotel",
    images: [
      {
        url: "/images/rooms/deluxe-ocean-suite.jpg",
        width: 1200,
        height: 800,
        alt: "Noonna Beach Hotel in Kumbalgama, Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function StayPage() {
  // Verified structured schema for Google Rich Results
  const hotelRoomSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Noonna Beach Hotel",
    description:
      "Noonna Beach Hotel in Kumbalgama, Sri Lanka, offered as an entire resort rental for a private resort stay along the southern coast.",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Private resort stay",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air conditioning",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free WiFi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Parking",
        value: true,
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kumbalgama",
      addressRegion: "Southern Province",
      addressCountry: "LK",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelRoomSchema) }}
      />

      <div className="flex flex-col w-full">
        {/* Section 2: Suite Showcase Hero (Split Layout) */}
        <StayHero />

        {/* Section 3: Accommodation Visual Mosaic */}
        <StayVisualMosaic />

        {/* Section 4: Inside the Stay (Blueprint - 8 Structured Specification Cards) */}
        <StayBlueprint />

        {/* Section 5: Thoughtful Essentials & Amenities Grid */}
        <StayAmenities />

        {/* Section 6: Food & Your Stay (Culinary Preview) */}
        <StayDiningPreview />

        {/* Section 7: Good to Know (Guest Policies & Quiet Hours) */}
        <StayPolicies />

        {/* Section 8: Find Us on the Southern Coast (Regional Transit & Location) */}
        <StayLocationMap />

        {/* Section 9: Master Pre-Footer Booking CTA */}
        <PreFooterCta context="stay" />
      </div>
    </>
  );
}

