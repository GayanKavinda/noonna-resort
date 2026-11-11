import React from "react";
import Image from "next/image";
import { STAY_DATA } from "@/data/stayData";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Bed, Users, ShowerHead, Waves, ArrowUpRight, ArrowDown, BadgeCheck } from "lucide-react";

interface StayHeroProps {
  className?: string;
}

const HERO_BADGE_ICONS: Record<string, React.ElementType> = {
  bed: Bed,
  group: Users,
  shower: ShowerHead,
  waves: Waves,
};

export const StayHero: React.FC<StayHeroProps> = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-white pt-24 pb-16 md:pt-28 md:pb-20 border-b border-[#D9EAF3]/60 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          className="mb-8"
          items={[
            { label: "Home", href: "/" },
            { label: "The Stay" },
          ]}
        />

        {/* Split Suite Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Room Overview & Key Specs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="font-script text-3xl sm:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block">
              where the ocean sets the rhythm...
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] text-[#173F56] font-normal tracking-tight mb-4">
              Double Room <br />
              <span className="italic font-normal">with Private Bathroom</span>
            </h1>

            <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-8 font-light max-w-xl">
              {STAY_DATA.shortDescription}
            </p>

            {/* Core Specifications 4-Chip Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              {STAY_DATA.heroBadges.map((badge, index) => {
                const BadgeIcon = HERO_BADGE_ICONS[badge.icon] ?? Bed;
                return (
                  <div
                    key={index}
                    className="p-3.5 rounded-2xl bg-white border border-[#D9EAF3] shadow-sm flex items-start gap-3 hover:border-[#397FA8]/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#EBF5FB] flex items-center justify-center text-[#397FA8] shrink-0 mt-0.5">
                      <BadgeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#173F56]">
                        {badge.label}
                      </p>
                      <p className="text-[11px] text-slate-500 font-light">
                        {badge.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs & Official Booking Link */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <a
                href={STAY_DATA.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-7 rounded-xl bg-[#397FA8] hover:bg-[#2e698c] text-white text-[14px] font-medium transition-all duration-300 inline-flex items-center gap-2 shadow-[0_8px_24px_-4px_rgba(23,63,86,0.2)] hover:-translate-y-0.5"
              >
                <span>Check Availability on Booking.com</span>
                <ArrowUpRight className="w-[18px] h-[18px]" />
              </a>

              <a
                href="#accommodation-blueprint"
                className="h-12 px-5 rounded-xl bg-white hover:bg-[#EBF5FB]/60 text-[#173F56] text-[14px] font-medium border border-[#D9EAF3] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Explore Room Details</span>
                <ArrowDown className="w-[18px] h-[18px] text-[#397FA8]" />
              </a>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-light">
              <BadgeCheck className="w-4 h-4 text-[#397FA8]" />
              <span>Official Booking.com Listing · Verified Accommodation</span>
            </div>
          </div>

          {/* Right Column: Prominent Interior Photo */}
          <div className="lg:col-span-6">
            <div className="w-full relative rounded-3xl overflow-hidden shadow-[0_16px_40px_-8px_rgba(23,63,86,0.08)] bg-white border border-[#D9EAF3]/70 group">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px]">
                <Image
                  src="/images/rooms/deluxe-ocean-suite.jpg"
                  alt="Interior of Double Room with Private Bathroom at Noonna Beach Hotel"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e]/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Info Pill matching Stitch reference */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between border border-[#D9EAF3] shadow-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#397FA8] font-semibold">
                      Double Room
                    </p>
                    <p className="font-heading text-base sm:text-lg text-[#173F56] font-normal">
                      Double Room with Private Bathroom
                    </p>
                  </div>
                  <span className="px-3 py-1.5 rounded-full bg-[#EBF5FB] text-[#397FA8] text-xs font-semibold border border-[#D9EAF3] flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5" />{" "}
                    Verified Unit
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
