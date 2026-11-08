import React from "react";
import { HOTEL_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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
  { eyebrow: string; title: string; deck: string; buttonText: string; href?: string }
> = {
  home: {
    eyebrow: "rest & unwind...",
    title: "A Little Closer to the Ocean",
    deck: "Experience barefoot simplicity and genuine southern Sri Lankan coastal tranquility. Your quiet room by the sea is ready.",
    buttonText: "Book Your Stay",
    href: HOTEL_INFO.bookingUrl,
  },
  stay: {
    eyebrow: "pure oceanfront calm...",
    title: "Reserve Your Sanctuary by the Sea",
    deck: "Direct ocean views, private balcony breeze, and the rhythmic sound of Indian Ocean tides. Simple, peaceful, unforgettable.",
    buttonText: "Check Availability on Booking.com",
    href: HOTEL_INFO.bookingUrl,
  },
  experiences: {
    eyebrow: "unfold the southern shores...",
    title: "Begin Your Coastal Expedition",
    deck: "From legendary surf breaks to ancient coastal temples and fresh spice markets. Let Noonna be your serene harbor.",
    buttonText: "Plan Your Visit",
    href: "/contact",
  },
  gallery: {
    eyebrow: "from memory to presence...",
    title: "Step Inside the Frames",
    deck: "Pictures capture the light, but only arrival brings the breeze. Experience Noonna Beach Hotel in person.",
    buttonText: "Reserve Your Stay",
    href: HOTEL_INFO.bookingUrl,
  },
  contact: {
    eyebrow: "we are here to welcome you...",
    title: "Have Questions Before Your Journey?",
    deck: "Speak directly with our concierge for arrival guidance, surf conditions, or bespoke trip planning.",
    buttonText: "Inquire via WhatsApp",
    href: HOTEL_INFO.socials.whatsapp,
  },
  heritage: {
    eyebrow: "centuries of southern stories...",
    title: "Walk Through Living History",
    deck: "Ancient monolithic stone carvings, colonial ramparts, and sacred inland temples await your discovery.",
    buttonText: "Explore Heritage Journeys",
    href: "/experiences",
  },
  beaches: {
    eyebrow: "ride the legendary swells...",
    title: "Your Surf Break is Waiting",
    deck: "Wake to pristine tide reports, grab your board, and paddle out into the warmest waters of the Indian Ocean.",
    buttonText: "View Surf Expeditions",
    href: "/experiences",
  },
  swim: {
    eyebrow: "crystal tidepools & coral reefs...",
    title: "Immerse in Natural Waters",
    deck: "Gentle natural lagoon pools, volcanic reef formations, and sheltered bays ideal for afternoon dips.",
    buttonText: "Discover Secret Coves",
    href: "/experiences",
  },
  wildlife: {
    eyebrow: "in harmony with nature...",
    title: "Witness Untamed Beauty",
    deck: "Blue whales breaching the open horizon, gentle river lagoons, and vibrant coastal biodiversity.",
    buttonText: "Discover Wildlife Tours",
    href: "/experiences",
  },
  taste: {
    eyebrow: "authentic southern flavors...",
    title: "Savor the True Ceylon Harvest",
    deck: "Wood-fired clay pot curries, fresh cinnamon-scented teas, and line-caught seafood grilled by the shore.",
    buttonText: "Taste Ceylon Flavors",
    href: "/experiences",
  },
};

export const PreFooterCta: React.FC<PreFooterCtaProps> = ({
  context = "home",
  className = "",
}) => {
  const content = CTA_CONTENT[context] || CTA_CONTENT.home;

  return (
    <section className={`w-full bg-[#F1F9FD] border-t border-[#D9EAF3] py-16 md:py-20 ${className}`}>
      <Container size="narrow">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow Script */}
          <span className="font-script text-3xl sm:text-4xl text-[#397FA8] mb-2 select-none">
            {content.eyebrow}
          </span>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#173F56] tracking-tight mb-4">
            {content.title}
          </h2>

          {/* Subtitle Deck */}
          <p className="font-body text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-xl mb-8">
            {content.deck}
          </p>

          {/* Primary Action Button */}
          <Button
            href={content.href || HOTEL_INFO.bookingUrl}
            isExternal={content.href?.startsWith("http")}
            variant="primary"
            size="lg"
            icon={
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            }
          >
            {content.buttonText}
          </Button>

          {/* Trust Marker */}
          <div className="flex items-center gap-2 mt-6 text-xs text-slate-500 font-light">
            <svg
              className="w-4 h-4 text-[#397FA8]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>Verified Booking Channel · Best Rate Guarantee</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

