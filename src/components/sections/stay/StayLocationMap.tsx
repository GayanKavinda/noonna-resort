import React from "react";
import Image from "next/image";
import Link from "next/link";
import { STAY_DATA } from "@/data/stayData";
import { MapPin, Train, Waves, Umbrella, Compass, ArrowRight } from "lucide-react";

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
      className={`w-full bg-white py-20 px-8 border-b border-[#D9EAF3]/40 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Regional Transit & Location Context */}
          <div className="lg:col-span-5 text-left">
            <div className="mb-6">
              <span
                className="font-script text-3xl md:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block"
                style={{ fontSize: "1.75rem" }}
              >
                southern horizons...
              </span>
              <h2 className="font-heading text-[40px] md:text-[44px] leading-tight text-[#173F56] font-normal mb-3 tracking-tight">
                Find Us on the Southern Coast
              </h2>
              <p className="text-[15px] text-slate-600 leading-relaxed font-light mb-4">
                Set quietly between Kumbalgama railway station and the world-renowned southern surf beaches.
              </p>

              {/* Official Address Card */}
              <div className="p-3.5 rounded-2xl bg-[#EBF5FB]/60 border border-[#D9EAF3] flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#397FA8] shrink-0" />
                <p className="text-xs text-[#173F56] font-medium">
                  <strong>Official Address:</strong> Noonna Beach Hotel, 81170 Kumbalgama, Sri Lanka
                </p>
              </div>
            </div>

            {/* Regional Points Highlight List */}
            <div className="space-y-2.5 mb-8">
              {STAY_DATA.location.distances.map((item, idx) => {
                const LocIcon = LOCATION_ICONS[item.iconName] ?? MapPin;
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-white border border-[#D9EAF3] flex items-center justify-between shadow-sm"
                  >
                    <span className="text-xs font-medium text-[#173F56] flex items-center gap-2">
                      <LocIcon className="w-[18px] h-[18px] text-[#397FA8]" />
                      <span>{item.place}</span>
                    </span>
                    <span className="text-xs font-semibold text-[#397FA8]">
                      {item.distance}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#397FA8] hover:text-[#173F56] transition-colors focus:outline-none focus:ring-1 focus:ring-[#397FA8]"
              >
                <span>Explore Coastal Experiences</span>
                <ArrowRight className="w-[18px] h-[18px]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Coastal Shoreline Photo & Pin Overlay */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-3 bg-white border border-[#D9EAF3] shadow-[0_4px_24px_-4px_rgba(23,63,86,0.05)]">
              <div className="w-full h-[400px] rounded-2xl relative overflow-hidden bg-white">
                <Image
                  src="/images/hotel/hero-beach.jpg"
                  alt="Southern Coast Sri Lanka Map View"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#001e2e]/20" />

                {/* Central Geographic Location Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#397FA8]/20 animate-ping absolute" />
                    <div className="px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg flex items-center gap-2 border border-[#D9EAF3]">
                      <MapPin className="w-5 h-5 text-[#397FA8]" />
                      <span className="text-xs text-[#173F56] font-semibold tracking-wide">
                        Noonna Beach Hotel
                      </span>
                    </div>
                  </div>
                </div>

                {/* Verified Pin Tag */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs text-slate-600 font-medium border border-[#D9EAF3]">
                  Noonna Beach Hotel, 81170 Kumbalgama, Sri Lanka
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
