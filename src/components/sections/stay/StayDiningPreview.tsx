import React from "react";
import Image from "next/image";
import { STAY_DATA } from "@/data/stayData";
import { ShoppingBag, Utensils, GlassWater, Lightbulb, Coffee } from "lucide-react";

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
      className={`w-full bg-white py-16 md:py-20 px-6 sm:px-8 border-b border-[#D9EAF3]/40 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column: Dining Editorial Info */}
          <div className="text-left flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#EBF4F9] border border-[#D9EAF3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#397FA8]" />
              <span className="font-body text-[10px] uppercase tracking-[0.18em] text-[#397FA8] font-semibold">
                {STAY_DATA.diningBadge}
              </span>
            </div>

            <span
              className="block font-script text-[26px] sm:text-[28px] text-[#397FA8] font-normal leading-none mb-1.5"
            >
              {STAY_DATA.diningCursive}
            </span>

            <h2 className="font-heading text-[32px] sm:text-[36px] leading-tight text-[#173F56] font-normal tracking-tight mb-3">
              {STAY_DATA.diningTitle}
            </h2>

            <p className="font-body text-sm md:text-[15px] text-[#475569] leading-relaxed mb-6 font-light max-w-xl">
              {STAY_DATA.diningDeck}
            </p>

            {/* 3 Dining Highlight Cards */}
            <div className="space-y-3 w-full mb-5">
              {STAY_DATA.diningFeatures.map((feature, idx) => {
                const FeatureIcon = DINING_ICONS[feature.iconName] ?? ShoppingBag;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-[#D9EAF3] flex items-start gap-3.5 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#EBF5FB] text-[#397FA8] flex items-center justify-center shrink-0 mt-0.5">
                      <FeatureIcon className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-[#173F56] font-medium leading-snug">
                        {feature.title}
                      </h4>
                      <p className="font-body text-[13px] text-[#475569] font-light leading-relaxed mt-0.5">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Host Note Card */}
            <div className="p-3.5 rounded-2xl bg-[#EBF5FB]/60 border border-[#D9EAF3] text-[13px] text-[#173F56] font-light leading-relaxed flex items-start gap-2.5 w-full">
              <Lightbulb className="w-[18px] h-[18px] text-[#397FA8] shrink-0 mt-0.5" />
              <span>
                <strong className="font-medium">Host Note:</strong> {STAY_DATA.diningHostNote}
              </span>
            </div>
          </div>

          {/* Right Column: Imagery with Floating Pill Badge */}
          <div className="w-full">
            <div className="w-full relative rounded-3xl overflow-hidden shadow-[0_16px_40px_-8px_rgba(23,63,86,0.08)] bg-white border border-[#D9EAF3]/70 group">
              <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] min-h-[320px]">
                <Image
                  src="/images/hotel/property-grounds.jpg"
                  alt="Oceanfront Dining and Breakfast at Noonna Beach Hotel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e]/45 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-[#D9EAF3] shadow-sm flex items-center gap-2 max-w-[calc(100%-2.5rem)]">
                  <Coffee className="w-[18px] h-[18px] text-[#397FA8] shrink-0" />
                  <span className="font-body text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-[#173F56] font-semibold leading-snug">
                    {STAY_DATA.diningImageBadge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
