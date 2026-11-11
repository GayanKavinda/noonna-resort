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
    eyebrow: "artisanal flavours & local traditions...",
    title: "A Taste of the Southern Coast",
    deck: "Discover local dining spots and regional flavours to explore during your stay in southern Sri Lanka.",
    buttonText: "Explore Noonna on Booking.com",
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
        <a
          href={content.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-600 font-normal bg-slate-50 border border-slate-200/80 px-3 py-1 rounded-full hover:bg-slate-100 transition-colors duration-150 font-sans"
        >
          <ArrowUpRight className="hidden" aria-hidden="true" />
          <svg className="w-[15px] h-[15px] text-[#397FA8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10h18"/><path d="M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"/></svg>
          <span>Listed on Booking.com</span>
        </a>
      </div>
    </section>
  );
};
