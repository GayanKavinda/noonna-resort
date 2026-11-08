import React from "react";
import { HOTEL_INFO } from "@/lib/constants";

export type CtaRouteContext =
  | "home"
  | "stay"
  | "experiences"
  | "gallery"
  | "contact"
  | "heritage"
  | "beaches"
  | "swim"
  | "wildlife"
  | "taste";

interface PreFooterCtaProps {
  context?: CtaRouteContext;
  className?: string;
}

const CTA_CONTENT: Record<
  CtaRouteContext,
  {
    eyebrow: string;
    title: string;
    deck: string;
    buttonText: string;
    href?: string;
    trustBadge: string;
  }
> = {
  home: {
    eyebrow: "rest & unwind...",
    title: "Make Room for a Slower Stay",
    deck: "Explore the property and check your preferred dates for an intimate beach stay on Sri Lanka's southern coast.",
    buttonText: "Book Your Stay on Booking.com",
    href: HOTEL_INFO.bookingUrl,
    trustBadge: "Secured through Booking.com • Verified Private Coastal Listing",
  },
  stay: {
    eyebrow: "pure oceanfront calm...",
    title: "Reserve Your Sanctuary by the Sea",
    deck: "Direct ocean views, private balcony breeze, and the rhythmic sound of Indian Ocean tides. Simple, peaceful, unforgettable.",
    buttonText: "Check Availability on Booking.com",
    href: HOTEL_INFO.bookingUrl,
    trustBadge: "Secured through Booking.com • Verified Private Coastal Listing",
  },
  experiences: {
    eyebrow: "unfold the southern shores...",
    title: "Begin Your Coastal Expedition",
    deck: "From legendary surf breaks to ancient coastal temples and fresh spice markets. Let Noonna be your serene harbor.",
    buttonText: "Plan Your Visit",
    href: "/contact",
    trustBadge: "Authentic Southern Province Explorations",
  },
  gallery: {
    eyebrow: "from memory to presence...",
    title: "Step Inside the Frames",
    deck: "Pictures capture the light, but only arrival brings the breeze. Experience Noonna Beach Hotel in person.",
    buttonText: "Reserve Your Stay on Booking.com",
    href: HOTEL_INFO.bookingUrl,
    trustBadge: "Secured through Booking.com • Verified Private Coastal Listing",
  },
  contact: {
    eyebrow: "we are here to welcome you...",
    title: "Have Questions Before Your Journey?",
    deck: "Speak directly with our concierge for arrival guidance, surf conditions, or bespoke trip planning.",
    buttonText: "Inquire with Host",
    href: "/contact",
    trustBadge: "Direct Host Inquiries & Arrival Assistance",
  },
  heritage: {
    eyebrow: "stories carved in coral & stone...",
    title: "Walk Through Centuries of Southern History",
    deck: "Ancient temples, lighthouse lookouts, and historic maritime trade routes are waiting just beyond the palms.",
    buttonText: "Plan Heritage Route",
    href: "/experiences",
    trustBadge: "Authentic Southern Province Explorations",
  },
  beaches: {
    eyebrow: "warm waters & unhurried waves...",
    title: "Ride the Rhythm of Southern Breaks",
    deck: "Beginner-friendly curls, quiet natural tidal pools, and uncrowded golden sands at your doorstep.",
    buttonText: "View Surf Breaks",
    href: "/experiences",
    trustBadge: "Authentic Southern Province Explorations",
  },
  swim: {
    eyebrow: "clarity in every stroke...",
    title: "Immerse in Natural Ocean Tidal Pools",
    deck: "Protected natural swimming inlets and tranquil ocean dips right along the quiet Kumbalgama coastline.",
    buttonText: "Explore Coastal Coves",
    href: "/experiences",
    trustBadge: "Authentic Southern Province Explorations",
  },
  wildlife: {
    eyebrow: "wild nature & tropical estuaries...",
    title: "Encounter Sri Lanka's Coastal Biodiversity",
    deck: "From migratory shorebirds and sea turtle conservation points to winding river safaris.",
    buttonText: "Discover Wildlife Trails",
    href: "/experiences",
    trustBadge: "Authentic Southern Province Explorations",
  },
  taste: {
    eyebrow: "fresh harvest & ocean delicacies...",
    title: "Savor Authentic Southern Coastal Flavors",
    deck: "Fresh-caught seafood, wood-fired clay pot curries, and single-origin Ceylon cinnamon.",
    buttonText: "Taste Ceylon Cuisine",
    href: "/experiences",
    trustBadge: "Authentic Southern Province Explorations",
  },
};

export const PreFooterCta: React.FC<PreFooterCtaProps> = ({
  context = "home",
  className = "",
}) => {
  const content = CTA_CONTENT[context];

  return (
    <section className={`w-full bg-white ${className}`}>
      <div className="mx-auto py-20 md:py-24 px-8 bg-white border-t border-[#D9EAF3] text-center shadow-[0_8px_32px_-6px_rgba(23,63,86,0.05)] relative overflow-hidden w-full">
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Cursive Eyebrow matching Master Asset */}
          <span className="font-script text-3xl sm:text-4xl text-[#397FA8] font-normal tracking-wide block mb-2 leading-none select-none">
            {content.eyebrow}
          </span>

          {/* Main Garamond Title matching Master Asset */}
          <h2 className="font-heading text-[42px] md:text-[50px] leading-tight text-[#173F56] font-normal tracking-tight mb-5">
            {content.title}
          </h2>

          {/* Descriptive Subtitle Deck */}
          <p className="text-[15px] text-slate-600 max-w-lg mx-auto mb-10 leading-relaxed font-light font-sans">
            {content.deck}
          </p>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={content.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-[54px] px-10 rounded-xl bg-[#397FA8] hover:bg-[#2e698c] text-white text-[15px] font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-[0_8px_24px_-4px_rgba(23,63,86,0.2)] hover:-translate-y-0.5 font-sans"
            >
              <span>{content.buttonText}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Trust & Verification Badge */}
          <div className="inline-flex items-center gap-2 text-slate-500 text-xs font-normal font-sans">
            <svg className="w-4 h-4 text-[#397FA8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>{content.trustBadge}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
