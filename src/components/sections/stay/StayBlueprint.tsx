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
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

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
      className={`w-full border-b border-[#D9EAF3]/60 bg-white py-14 sm:py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-16">
          <span className="mb-2 block font-script text-3xl font-normal tracking-wide text-[#2f6b8f] md:text-4xl">
            where thoughtful design meets calm...
          </span>
          <h2 className="mb-3 font-heading text-[32px] font-normal leading-tight tracking-tight text-[#173F56] sm:text-4xl md:text-[44px]">
            Inside the Stay
          </h2>
          <p className="text-[15px] font-light leading-relaxed text-slate-600 sm:text-base">
            Thoughtfully appointed for a private resort stay, offering an unhurried coastal retreat along Sri Lanka&apos;s southern shore.
          </p>
        </Reveal>

        <Reveal className="mb-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#D9EAF3]/80 bg-white p-5 shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)] sm:mb-10 sm:flex-row sm:items-center sm:p-7">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D9EAF3] bg-white text-[#2f6b8f] shadow-sm">
              <Hotel className="h-[22px] w-[22px]" />
            </div>
            <div>
              <span className="mb-0.5 block text-[10px] font-medium uppercase tracking-widest text-[#2f6b8f]">
                Entire Resort Rental
              </span>
              <h3 className="font-heading text-xl font-medium tracking-tight text-[#173F56] sm:text-2xl">
                {STAY_DATA.roomName}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="flex items-center gap-1.5 rounded-full border border-[#D9EAF3] bg-white px-3.5 py-1.5 text-xs font-normal text-[#173F56] shadow-sm">
              <Users className="h-4 w-4 text-[#2f6b8f]" />{" "}
              Private Resort Stay
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-[#D9EAF3] bg-white px-3.5 py-1.5 text-xs font-normal text-[#173F56] shadow-sm">
              <Bed className="h-4 w-4 text-[#2f6b8f]" />{" "}
              Group &amp; Family
            </span>
          </div>
        </Reveal>

        <Stagger className="mb-8 grid grid-cols-1 gap-4 sm:mb-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {STAY_DATA.specifications.map((spec) => {
            const Icon = SPEC_ICONS[spec.iconName] ?? Hotel;
            return (
              <StaggerItem
                key={spec.id}
                className="group flex flex-col rounded-2xl border border-[#D9EAF3]/80 bg-white p-5 shadow-[0_2px_12px_-4px_rgba(23,63,86,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2f6b8f]/50 sm:p-6"
              >
                <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D9EAF3] bg-white text-[#2f6b8f] shadow-sm transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="mb-1 block text-[10px] font-medium uppercase tracking-widest text-[#2f6b8f]">
                  {spec.category}
                </span>
                <h4 className="mb-2 font-heading text-[19px] font-medium leading-tight text-[#173F56]">
                  {spec.title}
                </h4>
                <p className="text-xs font-light leading-relaxed text-slate-500">
                  {spec.description}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal>
          <div className="mx-auto flex max-w-2xl items-start justify-center gap-2.5 rounded-xl border border-[#D9EAF3]/80 bg-white p-4 text-center shadow-sm sm:items-center">
            <Info className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#2f6b8f] sm:mt-0" />
            <p className="text-left text-xs font-light text-slate-500 sm:text-center">
              <strong className="font-medium text-[#173F56]">Note:</strong>{" "}
              Capacity and bed arrangements subject to seasonal confirmation. Please review details on Booking.com.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
