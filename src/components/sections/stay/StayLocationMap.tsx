import React from "react";
import Image from "next/image";
import Link from "next/link";
import { STAY_DATA } from "@/data/stayData";
import { MapPin, Train, Waves, Umbrella, Compass, ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

interface StayLocationMapProps {
  className?: string;
}

const LOCATION_ICONS: Record<string, React.ElementType> = {
  train: Train,
  surfing: Waves,
  beach_access: Umbrella,
  waves: Waves,
  explore: Compass,
};

export const StayLocationMap: React.FC<StayLocationMapProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full border-b border-[#D9EAF3]/40 bg-white px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="text-left lg:col-span-5">
            <div className="mb-6">
              <span
                className="mb-2 block font-script text-3xl font-normal tracking-wide text-[#2f6b8f] md:text-4xl"
                style={{ fontSize: "1.75rem" }}
              >
                southern horizons...
              </span>
              <h2 className="mb-3 font-heading text-[32px] font-normal leading-tight tracking-tight text-[#173F56] sm:text-[36px] md:text-[44px]">
                Find Us on the Southern Coast
              </h2>
              <p className="mb-4 text-[15px] font-light leading-relaxed text-slate-600">
                Set quietly between Kumbalgama railway station and the world-renowned southern surf beaches.
              </p>

              <div className="flex items-start gap-3 rounded-2xl border border-[#D9EAF3] bg-[#EBF5FB]/60 p-3.5 sm:items-center">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#2f6b8f] sm:mt-0" />
                <p className="text-xs font-medium text-[#173F56]">
                  <strong>Location:</strong> Noonna Beach Hotel, Kumbalgama, Southern Province, Sri Lanka
                </p>
              </div>
            </div>

            <Stagger className="mb-8 space-y-2.5">
              {STAY_DATA.location.distances.map((item, idx) => {
                const LocIcon = LOCATION_ICONS[item.iconName] ?? MapPin;
                return (
                  <StaggerItem
                    key={idx}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-[#D9EAF3] bg-white p-3 shadow-sm"
                  >
                    <span className="flex items-center gap-2 text-xs font-medium text-[#173F56]">
                      <LocIcon className="h-[18px] w-[18px] shrink-0 text-[#2f6b8f]" />
                      <span>{item.place}</span>
                    </span>
                    <span className="shrink-0 text-xs font-semibold text-[#2f6b8f]">
                      {item.distance}
                    </span>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <div className="flex items-center gap-4">
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#2f6b8f] transition-colors hover:text-[#173F56] focus:outline-none focus:ring-1 focus:ring-[#2f6b8f]"
              >
                <span>Explore Coastal Experiences</span>
                <ArrowRight className="h-[18px] w-[18px]" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-7">
            <div className="rounded-3xl border border-[#D9EAF3] bg-white p-2.5 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.05)] sm:p-3">
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-white sm:h-[340px] md:h-[380px] lg:h-[400px]">
                <Image
                  src="/images/hotel/hero-beach.jpg"
                  alt="Southern Coast Sri Lanka Map View"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#001e2e]/20" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute h-12 w-12 animate-ping rounded-full bg-[#2f6b8f]/20" />
                    <div className="relative z-10 flex items-center gap-2 rounded-full border border-[#D9EAF3] bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md">
                      <MapPin className="h-5 w-5 text-[#2f6b8f]" />
                      <span className="text-xs font-semibold tracking-wide text-[#173F56]">
                        Noonna Beach Hotel
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-xl border border-[#D9EAF3] bg-white/90 px-3 py-2 text-xs font-medium text-slate-600 backdrop-blur-sm sm:bottom-4 sm:left-4 sm:px-4">
                  Noonna Beach Hotel, Kumbalgama, Southern Province, Sri Lanka
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

