import React from "react";
import { HOME_FAQS } from "@/data/home";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { PreFooterCta } from "@/components/shared/PreFooterCta";

// Individual Homepage Modular Sections
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeWelcome } from "@/components/sections/home/HomeWelcome";
import { HomeStayBento } from "@/components/sections/home/HomeStayBento";
import { HomeHighlights } from "@/components/sections/home/HomeHighlights";
import { HomeExperiences } from "@/components/sections/home/HomeExperiences";
import { HomeGalleryPreview } from "@/components/sections/home/HomeGalleryPreview";
import { HomeSocialFeed } from "@/components/sections/home/HomeSocialFeed";
import { HomeVideoShowcase } from "@/components/sections/home/HomeVideoShowcase";
import { HomeLocation } from "@/components/sections/home/HomeLocation";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Welcome Introduction */}
      <HomeWelcome />

      {/* 3. The Stay Bento (Entire Resort Rental) */}
      <HomeStayBento />

      {/* 4. Stay Highlights (Confirmed Amenities) */}
      <HomeHighlights />

      {/* 5. Experiences (Southern Coastline) */}
      <HomeExperiences />

      {/* 6. Gallery Preview (Genuine Photography) */}
      <HomeGalleryPreview />

      {/* 7. Instagram Connection (Editorial Brand Banner) */}
      <HomeSocialFeed />

      {/* 8. Video Showcase (Atmospheric Cinema Still) */}
      <HomeVideoShowcase />

      {/* 9. Location & Arrival (Kumbalgama Guidance) */}
      <HomeLocation />

      {/* 10. Frequently Asked Questions */}
      <FaqAccordion
        items={HOME_FAQS}
        eyebrow="clear details & peaceful planning..."
        title="Frequently Asked Questions"
        deck="Everything you need to know about your coastal stay at Noonna Beach Hotel."
      />

      {/* 11. Pre-Footer Booking CTA */}
      <PreFooterCta context="home" />
    </>
  );
}
