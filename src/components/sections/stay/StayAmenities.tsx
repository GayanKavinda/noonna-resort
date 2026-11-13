import React from "react";
import { STAY_DATA } from "@/data/stayData";
import { Bed, ShowerHead, Coffee, Wifi, Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

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
      className={`w-full border-b border-[#D9EAF3]/40 bg-white px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-10 max-w-xl text-center sm:mb-12 md:mb-16">
          <span
            className="mb-2 block font-script text-3xl font-normal tracking-wide text-[#2f6b8f] md:text-4xl"
            style={{ fontSize: "1.75rem" }}
          >
            tailored comforts...
          </span>
          <h2 className="font-heading text-[32px] font-normal leading-tight text-[#173F56] sm:text-[36px] md:text-[40px]">
            Thoughtful Essentials
          </h2>
          <p className="mt-3 text-[15px] font-light text-slate-600">
            Everything you need for an effortless, barefoot coastal rhythm.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {STAY_DATA.amenityCategories.map((category, index) => {
            const CatIcon = AMENITY_ICONS[category.iconName] ?? Bed;
            return (
              <StaggerItem
                key={index}
                className="group flex flex-col rounded-3xl border border-[#D9EAF3] bg-white p-5 shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)] transition-all hover:border-[#2f6b8f]/50 sm:p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EBF5FB] text-[#2f6b8f] transition-transform group-hover:scale-105">
                    <CatIcon className="h-[22px] w-[22px]" />
                  </div>
                  <h3 className="font-heading text-xl font-normal leading-tight text-[#173F56]">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2.5 text-xs font-light text-slate-600"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6b8f]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};
