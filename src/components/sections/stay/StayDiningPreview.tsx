import React from "react";
import Image from "next/image";
import { STAY_DATA } from "@/data/stayData";
import { ShoppingBag, Utensils, GlassWater, Lightbulb, Coffee } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

interface StayDiningPreviewProps {
  className?: string;
}

const DINING_ICONS: Record<string, React.ElementType> = {
  takeout_dining: ShoppingBag,
  restaurant: Utensils,
  local_bar: GlassWater,
};

export const StayDiningPreview: React.FC<StayDiningPreviewProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full border-b border-[#D9EAF3]/40 bg-white px-4 py-14 sm:px-6 sm:py-16 md:py-20 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="flex flex-col items-start text-left">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D9EAF3] bg-[#EBF4F9] px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2f6b8f]" />
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2f6b8f]">
                {STAY_DATA.diningBadge}
              </span>
            </div>

            <span className="mb-1.5 block font-script text-[26px] font-normal leading-none text-[#2f6b8f] sm:text-[28px]">
              {STAY_DATA.diningCursive}
            </span>

            <h2 className="mb-3 font-heading text-[30px] font-normal leading-tight tracking-tight text-[#173F56] sm:text-[32px] md:text-[36px]">
              {STAY_DATA.diningTitle}
            </h2>

            <p className="mb-5 max-w-xl font-body text-sm font-light leading-relaxed text-[#475569] sm:mb-6 md:text-[15px]">
              {STAY_DATA.diningDeck}
            </p>

            <Stagger className="mb-5 w-full space-y-3">
              {STAY_DATA.diningFeatures.map((feature, idx) => {
                const FeatureIcon = DINING_ICONS[feature.iconName] ?? ShoppingBag;
                return (
                  <StaggerItem
                    key={idx}
                    className="flex items-start gap-3.5 rounded-2xl border border-[#D9EAF3] bg-white p-3.5 shadow-sm"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EBF5FB] text-[#2f6b8f]">
                      <FeatureIcon className="h-[18px] w-[18px]" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-medium leading-snug text-[#173F56]">
                        {feature.title}
                      </h4>
                      <p className="mt-0.5 font-body text-[13px] font-light leading-relaxed text-[#475569]">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <div className="flex w-full items-start gap-2.5 rounded-2xl border border-[#D9EAF3] bg-[#EBF5FB]/60 p-3.5 text-[13px] font-light leading-relaxed text-[#173F56]">
              <Lightbulb className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#2f6b8f]" />
              <span>
                <strong className="font-medium">Host Note:</strong> {STAY_DATA.diningHostNote}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="w-full">
            <div className="group relative w-full overflow-hidden rounded-3xl border border-[#D9EAF3]/70 bg-white shadow-[0_16px_40px_-8px_rgba(23,63,86,0.08)]">
              <div className="relative aspect-[4/3] min-h-[260px] w-full sm:min-h-[320px] lg:aspect-[5/4] lg:min-h-[320px]">
                <Image
                  src="/images/hotel/property-grounds.jpg"
                  alt="Oceanfront Dining and Breakfast at Noonna Beach Hotel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001e2e]/45 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full border border-[#D9EAF3] bg-white/95 px-3.5 py-2 shadow-sm backdrop-blur-md sm:bottom-6 sm:left-6 sm:px-5 sm:py-2.5">
                  <Coffee className="h-[18px] w-[18px] shrink-0 text-[#2f6b8f]" />
                  <span className="font-body text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-[#173F56] sm:text-[11px]">
                    {STAY_DATA.diningImageBadge}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
