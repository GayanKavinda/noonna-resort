import React from "react";
import { HOTEL_INFO } from "@/lib/constants";
import { ArrowUpRight, ShieldCheck, MessageCircle } from "lucide-react";

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
  | "taste"
  | "southern-heritage";

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
    showSecondary?: boolean;
    secondaryText?: string;
    secondaryHref?: string;
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
    eyebrow: "your quiet sanctuary...",
    title: "Reserve Your Oceanfront Hideaway",
    deck: "Wake to unhurried tides, private verandas, and ocean breezes. Secure your preferred dates directly.",
    buttonText: "Check Suite Availability on Booking.com",
    href: HOTEL_INFO.bookingUrl,
    trustBadge: "Secured through Booking.com • Verified Private Coastal Listing",
  },
  experiences: {
    eyebrow: "begin your coastal journey...",
    title: "Anchor Your Days by the Ocean",
    deck: "From sunrise surf at Midigama to twilight stilt fishermen, make Noonna your peaceful home base on the southern coast.",
    buttonText: "Plan Your Stay on Booking.com",
    href: HOTEL_INFO.bookingUrl,
    trustBadge: "Secured through Booking.com • Verified Private Coastal Listing",
  },
  gallery: {
    eyebrow: "experience stillness firsthand...",
    title: "Step Into the Living Atmosphere",
    deck: "Turn captured coastal moments into your reality. Reserve your intimate stay along Sri Lanka's golden shoreline.",
    buttonText: "Reserve Your Room on Booking.com",
    href: HOTEL_INFO.bookingUrl,
    trustBadge: "Secured through Booking.com • Verified Private Coastal Listing",
  },
  contact: {
    eyebrow: "we are here to welcome you...",
    title: "Let Us Prepare Your Stay",
    deck: "Have questions before booking? Speak with our host or book directly for guaranteed rates and peaceful arrival.",
    buttonText: "Book Your Stay on Booking.com",
    href: HOTEL_INFO.bookingUrl,
    trustBadge: "Secured through Booking.com • Verified Private Coastal Listing",
    showSecondary: Boolean(HOTEL_INFO.socials.whatsapp),
    secondaryText: "Chat with Concierge on WhatsApp",
    secondaryHref: HOTEL_INFO.socials.whatsapp,
  },
  heritage: {
    eyebrow: "sacred chronicles & timeless heritage...",
    title: "Anchor Your Days in Southern Heritage",
    deck: "From ancient 8th-century granite sanctuaries to fortified colonial ramparts, return to unhurried coastal living on the sands of Thalpe.",
    buttonText: "Reserve Your Room on Booking.com",
    href: HOTEL_INFO.bookingUrl,
    trustBadge: "Secured through Booking.com • Verified Private Coastal Listing",
  },
  beaches: {
    eyebrow: "surf, coves & unhurried tides...",
    title: "Return to Stillness After the Swell",
    deck: "Spend unhurried mornings catching point breaks and reef coves, and your afternoons resting on private verandas immersed in ocean breeze.",
    buttonText: "Book Your Stay on Booking.com",
    href: HOTEL_INFO.bookingUrl,
    trustBadge: "Secured through Booking.com • Verified Private Coastal Listing",
  },
  swim: {
    eyebrow: "secret lagoons & golden horizons...",
    title: "Where Secluded Tides Meet Golden Sunsets",
    deck: "From protected coral tide pools to iconic palm-crested promontories, retreat to barefoot sanctuary comfort after your coastal wanderings.",
    buttonText: "Book Your Stay on Booking.com",
    href: HOTEL_INFO.bookingUrl,
    trustBadge: "Secured through Booking.com • Verified Private Coastal Listing",
  },
  wildlife: {
    eyebrow: "coastal wild & gentle waterways...",
    title: "Rest in Tranquility After Southern Expeditions",
    deck: "Gliding through mangrove estuaries and witnessing ocean giants at sunrise, then retreating to quiet luxury and soothing sea breezes.",
    buttonText: "Reserve Your Room on Booking.com",
    href: HOTEL_INFO.bookingUrl,
    trustBadge: "Secured through Booking.com • Verified Private Coastal Listing",
  },
  taste: {
    eyebrow: "artisanal flavors & clay pot feasts...",
    title: "A Peaceful Base for Coastal Gastronomy",
    deck: "Explore authentic wood-fired curries, ocean-caught catches, and artisan beach cafes, with Noonna Beach Hotel as your serene retreat.",
    buttonText: "Reserve Your Room on Booking.com",
    href: HOTEL_INFO.bookingUrl,
    trustBadge: "Secured through Booking.com • Verified Private Coastal Listing",
  },
  "southern-heritage": {
    eyebrow: "rest & unwind...",
    title: "Make Room for a Slower Stay",
    deck: "From ancient 300-year-old granite sanctuaries to fortified colonial ramparts, return to barefoot sanctuary comfort and quiet tides on the secluded shores of Kumbalgama.",
    buttonText: "Reserve Your Room on Booking.com",
    href: HOTEL_INFO.bookingUrl,
    trustBadge: "Secured through Booking.com • Verified Private Coastal Listing",
  },
};

export const PreFooterCta: React.FC<PreFooterCtaProps> = ({
  context = "home",
  className = "",
}) => {
  const content = CTA_CONTENT[context];

  return (
    <section className={`w-full bg-white py-8 sm:py-12 border-t border-[#D9EAF3]/70 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Philosophy Script Eyebrow */}
        <p className="font-script text-3xl sm:text-4xl text-[#397FA8] mb-3 tracking-wide select-none lowercase">
          {content.eyebrow}
        </p>

        {/* Main Garamond Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-slate-900 font-normal tracking-tight mb-4 leading-tight">
          {content.title}
        </h2>

        {/* Descriptive Subtitle Deck */}
        <p className="text-slate-600 font-light text-base sm:text-lg max-w-2xl mx-auto mb-9 leading-relaxed font-sans">
          {content.deck}
        </p>

        {/* Action Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-7">
          {/* Primary Booking Button */}
          <a
            href={content.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#397FA8] hover:bg-[#2e698d] text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-sm hover:shadow group gap-2 font-sans"
          >
            <span>{content.buttonText}</span>
            <ArrowUpRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>

          {/* Optional Secondary Concierge CTA for Contact page */}
          {content.showSecondary && content.secondaryHref && (
            <a
              href={content.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-sm rounded-lg border border-slate-200 transition-colors duration-200 gap-2 font-sans"
            >
              <MessageCircle className="w-[18px] h-[18px] text-[#397FA8]" />
              <span>{content.secondaryText}</span>
            </a>
          )}
        </div>

        {/* Trust & Verification Badge */}
        <div className="inline-flex items-center justify-center gap-2 text-xs text-slate-500 font-light font-sans">
          <ShieldCheck className="w-[17px] h-[17px] text-[#397FA8]" />
          <span>{content.trustBadge}</span>
        </div>
      </div>
    </section>
  );
};
