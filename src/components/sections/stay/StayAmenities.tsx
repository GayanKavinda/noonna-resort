import React from "react";
import { STAY_DATA } from "@/data/stayData";
import { Bed, ShowerHead, Coffee, Wifi, Check } from "lucide-react";

interface StayAmenitiesProps {
  className?: string;
}

const AMENITY_ICONS: Record<string, React.ElementType> = {
  bed: Bed,
  shower: ShowerHead,
  local_cafe: Coffee,
  wifi: Wifi,
};

export const StayAmenities: React.FC<StayAmenitiesProps> = ({
  className = "",
}) => {
  return (
    <section
      id="suite-details"
      className={`w-full bg-white py-20 px-8 border-b border-[#D9EAF3]/40 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span
            className="font-script text-3xl md:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block"
            style={{ fontSize: "1.75rem" }}
          >
            tailored comforts...
          </span>
          <h2 className="font-heading text-[40px] leading-tight text-[#173F56] font-normal">
            Thoughtful Essentials
          </h2>
          <p className="text-[15px] text-slate-600 mt-3 font-light">
            Everything you need for an effortless, barefoot coastal rhythm.
          </p>
        </div>

        {/* 4-Column Categorized Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAY_DATA.amenityCategories.map((category, index) => {
            const CatIcon = AMENITY_ICONS[category.iconName] ?? Bed;
            return (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white border border-[#D9EAF3] shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)] hover:border-[#397FA8]/50 transition-all flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FB] text-[#397FA8] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <CatIcon className="w-[22px] h-[22px]" />
                  </div>
                  <h3 className="font-heading text-xl text-[#173F56] font-normal leading-tight">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-center gap-2.5 text-xs text-slate-600 font-light"
                    >
                      <Check className="w-4 h-4 text-[#397FA8] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
