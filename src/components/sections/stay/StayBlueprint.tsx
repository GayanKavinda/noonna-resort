import React from "react";
import { STAY_DATA } from "@/data/stayData";
import {
  Hotel,
  Users,
  Bed,
  Info,
  ShowerHead,
  Waves,
  Wind,
  Tv,
  Coffee,
  Shirt,
  Laptop,
} from "lucide-react";

interface StayBlueprintProps {
  className?: string;
}

const SPEC_ICONS: Record<string, React.ElementType> = {
  bed: Bed,
  shower: ShowerHead,
  waves: Waves,
  mode_fan: Wind,
  tv: Tv,
  coffee: Coffee,
  checkroom: Shirt,
  desk: Laptop,
};

export const StayBlueprint: React.FC<StayBlueprintProps> = ({
  className = "",
}) => {
  return (
    <section
      id="accommodation-blueprint"
      className={`w-full bg-white py-16 md:py-24 border-b border-[#D9EAF3]/60 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="font-script text-3xl md:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block">
            where thoughtful design meets calm...
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[44px] leading-tight text-[#173F56] font-normal mb-3 tracking-tight">
            Inside the Stay
          </h2>
          <p className="text-[15px] sm:text-base text-slate-600 font-light leading-relaxed">
            Thoughtfully appointed for a private resort stay, offering an unhurried coastal retreat along Sri Lanka&apos;s southern shore.
          </p>
        </div>

        {/* Room Overview Bar */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#D9EAF3]/80 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)]">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#D9EAF3] flex items-center justify-center text-[#397FA8] shadow-sm shrink-0">
              <Hotel className="w-[22px] h-[22px]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#397FA8] font-medium block mb-0.5">
                Entire Resort Rental
              </span>
              <h3 className="font-heading text-2xl text-[#173F56] font-medium tracking-tight">
                {STAY_DATA.roomName}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-[#173F56] text-xs font-normal border border-[#D9EAF3] shadow-sm flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#397FA8]" />{" "}
              Private Resort Stay
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white text-[#173F56] text-xs font-normal border border-[#D9EAF3] shadow-sm flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-[#397FA8]" />{" "}
              Group &amp; Family
            </span>
          </div>
        </div>

        {/* 8 Accommodation Detail Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {STAY_DATA.specifications.map((spec) => {
            const Icon = SPEC_ICONS[spec.iconName] ?? Hotel;
            return (
              <div
                key={spec.id}
                className="p-6 rounded-2xl bg-white border border-[#D9EAF3]/80 shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)] hover:border-[#397FA8]/50 transition-all duration-300 flex flex-col group hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#D9EAF3] text-[#397FA8] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 mb-4 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#397FA8] font-medium block mb-1">
                  {spec.category}
                </span>
                <h4 className="font-heading text-[19px] text-[#173F56] font-medium mb-2 leading-tight">
                  {spec.title}
                </h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {spec.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="p-4 rounded-xl bg-white border border-[#D9EAF3]/80 flex items-start sm:items-center justify-center gap-2.5 max-w-2xl mx-auto shadow-sm text-center">
          <Info className="w-[18px] h-[18px] text-[#397FA8] shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs text-slate-500 font-light">
            <strong className="font-medium text-[#173F56]">Note:</strong>{" "}
            Capacity and bed arrangements subject to seasonal confirmation. Please review details on Booking.com.
          </p>
        </div>
      </div>
    </section>
  );
};
