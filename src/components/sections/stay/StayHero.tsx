import React from "react";
import Image from "next/image";
import { STAY_DATA } from "@/data/stayData";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Bed, Users, ShowerHead, Waves, ArrowUpRight, ArrowDown, BadgeCheck } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

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
      className={`w-full border-b border-[#D9EAF3]/60 bg-white pb-14 pt-24 sm:pb-16 md:pb-20 md:pt-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <Reveal>
          <Breadcrumb
            className="mb-6 sm:mb-8"
            items={[
              { label: "Home", href: "/" },
              { label: "The Stay" },
            ]}
          />
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col items-start text-left lg:col-span-6">
            <Reveal>
              <span className="mb-2 block font-script text-3xl font-normal tracking-wide text-[#2f6b8f] sm:text-4xl">
                where the ocean sets the rhythm...
              </span>

              <h1 className="mb-4 font-heading text-[34px] font-normal leading-[1.12] tracking-tight text-[#173F56] sm:text-4xl md:text-5xl lg:text-[52px]">
                Entire Resort <br />
                <span className="font-normal italic">Rental for a Private Stay</span>
              </h1>

              <p className="mb-6 max-w-xl text-[15px] font-light leading-relaxed text-slate-600 sm:mb-8 sm:text-base">
                {STAY_DATA.shortDescription}
              </p>
            </Reveal>

            <Stagger className="mb-6 grid w-full grid-cols-1 gap-3 sm:mb-8 sm:grid-cols-2 sm:gap-3.5">
              {STAY_DATA.heroBadges.map((badge, index) => {
                const BadgeIcon = HERO_BADGE_ICONS[badge.icon] ?? Bed;
                return (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-3 rounded-2xl border border-[#D9EAF3] bg-white p-3.5 shadow-sm transition-colors hover:border-[#2f6b8f]/40">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EBF5FB] text-[#2f6b8f]">
                        <BadgeIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#173F56]">
                          {badge.label}
                        </p>
                        <p className="text-[11px] font-light text-slate-500">
                          {badge.detail}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <Reveal delay={0.05} className="mb-4 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href={STAY_DATA.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2f6b8f] px-6 text-[14px] font-medium text-white shadow-[0_8px_24px_-4px_rgba(23,63,86,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2e698c] sm:w-auto sm:px-7"
              >
                <span>Check Availability on Booking.com</span>
                <ArrowUpRight className="h-[18px] w-[18px]" />
              </a>

              <a
                href="#accommodation-blueprint"
                className="inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-xl border border-[#D9EAF3] bg-white px-5 text-[14px] font-medium text-[#173F56] transition-colors hover:bg-[#EBF5FB]/60 sm:w-auto"
              >
                <span>Explore Room Details</span>
                <ArrowDown className="h-[18px] w-[18px] text-[#2f6b8f]" />
              </a>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex items-start gap-2 text-xs font-light text-slate-500 sm:items-center">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6b8f] sm:mt-0" />
                <span>Official Booking.com Listing Â· Verified Accommodation</span>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6">
            <div className="group relative w-full overflow-hidden rounded-3xl border border-[#D9EAF3]/70 bg-white shadow-[0_16px_40px_-8px_rgba(23,63,86,0.08)]">
              <div className="relative h-[300px] w-full sm:h-[400px] md:h-[460px] lg:h-[520px]">
                <Image
                  src="/images/rooms/deluxe-ocean-suite.jpg"
                  alt="Interior space at Noonna Beach Hotel in Kumbalgama"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001e2e]/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start justify-between gap-3 rounded-2xl border border-[#D9EAF3] bg-white/95 p-3.5 shadow-sm backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:flex-row sm:items-center sm:p-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#2f6b8f]">
                      Entire Resort Rental
                    </p>
                    <p className="font-heading text-base font-normal text-[#173F56] sm:text-lg">
                      Private Resort Stay in Kumbalgama
                    </p>
                  </div>
                  <span className="flex items-center gap-1 rounded-full border border-[#D9EAF3] bg-[#EBF5FB] px-3 py-1.5 text-xs font-semibold text-[#2f6b8f]">
                    <BadgeCheck className="h-3.5 w-3.5" />{" "}
                    Private Stay
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
