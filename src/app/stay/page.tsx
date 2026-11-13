import type { Metadata } from "next";
import { StayHero } from "@/components/sections/stay/StayHero";
import { StayVisualMosaic } from "@/components/sections/stay/StayVisualMosaic";
import { StayBlueprint } from "@/components/sections/stay/StayBlueprint";
import { StayAmenities } from "@/components/sections/stay/StayAmenities";
import { StayDiningPreview } from "@/components/sections/stay/StayDiningPreview";
import { StayPolicies } from "@/components/sections/stay/StayPolicies";
import { StayLocationMap } from "@/components/sections/stay/StayLocationMap";
import { PreFooterCta } from "@/components/shared/PreFooterCta";
import { absoluteUrl } from "@/lib/siteUrl";

const title = "The Stay | Entire Resort Rental";
const fullTitle = "The Stay | Entire Resort Rental | Noonna Beach Hotel";
const description =
  "Explore an entire resort rental at Noonna Beach Hotel in Kumbalgama, Sri Lanka. A private resort stay in a peaceful coastal setting, steps from the shoreline.";
const canonical = absoluteUrl("/stay");
const image = "/images/rooms/deluxe-ocean-suite.jpg";
const imageUrl = absoluteUrl(image) ?? image;

export const metadata: Metadata = {
  title,
  description,
  alternates: canonical ? { canonical } : undefined,
  openGraph: {
    title: fullTitle,
    description:
      "A serene coastal sanctuary in Kumbalgama, Southern Province, Sri Lanka, offered as an entire resort rental for a private resort stay.",
    url: canonical ?? undefined,
    siteName: "Noonna Beach Hotel",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 800,
        alt: "Noonna Beach Hotel in Kumbalgama, Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description:
      "A private resort stay at Noonna Beach Hotel in Kumbalgama, Sri Lanka.",
    images: [imageUrl],
  },
};

export default function StayPage() {
  // Structured data uses only supported, owner/Booking-confirmed information.
  // Exact production hostname/canonical, fixed priceRange, ratings/reviews,
  // street/postal details, room/occupancy counts, and unverified geo are omitted.
  // Coordinates below are the property pin resolved from the owner-provided
  // Google Maps link (https://maps.app.goo.gl/7Fea7dbtqiWPuo2T8): !3d5.93312 !4d80.6138029.
  const hotelRoomSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Noonna Beach Hotel",
    description:
      "Noonna Beach Hotel in Kumbalgama, Southern Province, Sri Lanka, offered as an entire resort rental for a private resort stay along the southern coast.",
    image: "/images/rooms/deluxe-ocean-suite.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kumbalgama",
      addressRegion: "Southern Province",
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 5.93312,
      longitude: 80.6138029,
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Entire resort rental / private resort stay",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air conditioning",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free private parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Sea views and balconies (as available)",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Restaurant and bar",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24-hour front desk",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Room service",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Garden",
        value: true,
      },
    ],
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
