import React from "react";
import { HOTEL_INFO } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

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
    href: string;
  }
> = {
  home: {
    eyebrow: "rest & unwind...",
    title: "Make Room for a Slower Stay",
    deck: "Discover Noonna Beach Hotel and find a peaceful place to enjoy Sri Lanka's southern coast.",
    buttonText: "Explore Noonna on Booking.com",
    href: HOTEL_INFO.bookingUrl,
  },
  stay: {
    eyebrow: "your quiet sanctuary...",
    title: "Your Coastal Stay Awaits",
    deck: "Discover the Double Room and explore the details of your stay in Kumbalgama.",
    buttonText: "Explore the Room on Booking.com",
    href: HOTEL_INFO.bookingUrl,
  },
  experiences: {
    eyebrow: "begin your coastal journey...",
    title: "Anchor Your Days by the Ocean",
    deck: "Discover southern beaches, cultural landmarks and local experiences surrounding Kumbalgama.",
    buttonText: "Explore Noonna on Booking.com",
    href: HOTEL_INFO.bookingUrl,
  },
  gallery: {
    eyebrow: "experience stillness firsthand...",
    title: "Step Into the Living Atmosphere",
    deck: "Turn captured coastal moments into your reality. Reserve your intimate stay along Sri Lanka's golden shoreline.",
    buttonText: "Reserve Your Room on Booking.com",
    href: HOTEL_INFO.bookingUrl,
  },
  contact: {
    eyebrow: "we are here to welcome you...",
    title: "Let Us Prepare Your Stay",
    deck: "Have questions before booking? Speak with our host or explore availability for a peaceful arrival.",
    buttonText: "Book Your Stay on Booking.com",
    href: HOTEL_INFO.bookingUrl,
  },
  heritage: {
    eyebrow: "sacred chronicles & timeless heritage...",
    title: "Anchor Your Days in Southern Heritage",
    deck: "From ancient 8th-century granite sanctuaries to fortified colonial ramparts, return to unhurried coastal living on the sands of Thalpe.",
    buttonText: "Reserve Your Room on Booking.com",
    href: HOTEL_INFO.bookingUrl,
  },
  beaches: {
    eyebrow: "surf, coves & unhurried tides...",
    title: "Return to Stillness After the Swell",
    deck: "Spend unhurried mornings catching point breaks and reef coves, and your afternoons resting on private verandas immersed in ocean breeze.",
    buttonText: "Book Your Stay on Booking.com",
    href: HOTEL_INFO.bookingUrl,
  },
  swim: {
    eyebrow: "secret lagoons & golden horizons...",
    title: "Where Secluded Tides Meet Golden Sunsets",
    deck: "From protected coral tide pools to iconic palm-crested promontories, retreat to barefoot sanctuary comfort after your coastal wanderings.",
    buttonText: "Book Your Stay on Booking.com",
    href: HOTEL_INFO.bookingUrl,
  },
  wildlife: {
    eyebrow: "coastal wild & gentle waterways...",
    title: "Rest in Tranquility After Southern Expeditions",
    deck: "Gliding through mangrove estuaries and witnessing ocean giants at sunrise, then retreating to quiet luxury and soothing sea breezes.",
    buttonText: "Reserve Your Room on Booking.com",
    href: HOTEL_INFO.bookingUrl,
  },
  taste: {
    eyebrow: "artisanal flavors & clay pot feasts...",
    title: "A Peaceful Base for Coastal Gastronomy",
    deck: "Explore authentic wood-fired curries, ocean-caught catches, and artisan beach cafes, with Noonna Beach Hotel as your serene retreat.",
    buttonText: "Reserve Your Room on Booking.com",
    href: HOTEL_INFO.bookingUrl,
  },
  "southern-heritage": {
    eyebrow: "rest & unwind...",
    title: "Make Room for a Slower Stay",
    deck: "From ancient 300-year-old granite sanctuaries to fortified colonial ramparts, return to barefoot sanctuary comfort and quiet tides on the secluded shores of Kumbalgama.",
    buttonText: "Reserve Your Room on Booking.com",
    href: HOTEL_INFO.bookingUrl,
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#0F172A] font-normal tracking-tight mb-4 leading-tight">
          {content.title}
        </h2>

        {/* Descriptive Subtitle Deck */}
        <p className="text-[#475569] font-light text-base sm:text-lg max-w-2xl mx-auto mb-9 leading-relaxed font-sans">
          {content.deck}
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-7">
          <a
            href={content.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#397FA8] hover:bg-[#2e698d] text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-sm hover:shadow group gap-2 font-sans"
          >
            <span>{content.buttonText}</span>
            <ArrowUpRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Trust / Booking badge */}
        {context === "taste" ? (
          <div className="flex items-center justify-center gap-1.5 pt-0 text-xs text-[#64748B] font-sans">
            <svg className="w-4 h-4 text-[#397FA8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>Secured through Booking.com • Verified Private Coastal Listing</span>
          </div>
        ) : (
          <a
            href={content.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-500 font-light font-sans hover:text-[#397FA8] hover:border-[#397FA8]/30 transition-colors"
          >
            Listed on Booking.com
          </a>
        )}
      </div>
    </section>
  );
};
