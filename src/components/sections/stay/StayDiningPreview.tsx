import React from "react";
import Image from "next/image";
import { STAY_DATA } from "@/data/stayData";

interface StayDiningPreviewProps {
  className?: string;
}

export const StayDiningPreview: React.FC<StayDiningPreviewProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full bg-white py-20 px-8 border-b border-[#D9EAF3]/40 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Dining Editorial Info */}
          <div className="lg:col-span-5 text-left flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-[#EBF5FB] border border-[#D9EAF3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#397FA8]" />
              <span className="text-[11px] uppercase tracking-widest text-[#173F56] font-semibold">
                {STAY_DATA.diningBadge}
              </span>
            </div>

            <span
              className="font-script text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block"
              style={{ fontSize: "1.75rem" }}
            >
              {STAY_DATA.diningCursive}
            </span>

            <h2 className="font-heading text-[42px] leading-tight text-[#173F56] font-normal mb-4">
              {STAY_DATA.diningTitle}
            </h2>

            <p className="text-[15px] text-slate-600 leading-relaxed mb-6 font-light">
              {STAY_DATA.diningDeck}
            </p>

            {/* 3 Dining Highlight Cards with Material Symbols */}
            <div className="space-y-3 w-full mb-6">
              {STAY_DATA.diningFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-[#D9EAF3] flex items-start gap-3.5 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EBF5FB] text-[#397FA8] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]">
                      {feature.iconName}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#173F56]">
                      {feature.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-light leading-relaxed mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Host Note Card */}
            <div className="p-3.5 rounded-2xl bg-[#EBF5FB]/60 border border-[#D9EAF3] text-xs text-[#173F56] font-light flex items-start gap-2.5 w-full">
              <span className="material-symbols-outlined text-[#397FA8] text-[18px] shrink-0 mt-0.5">
                tips_and_updates
              </span>
              <span>
                <strong>Host Note:</strong> {STAY_DATA.diningHostNote}
              </span>
            </div>
          </div>

          {/* Right Column: Imagery with Floating Pill Badge */}
          <div className="lg:col-span-7">
            <div className="w-full relative rounded-3xl overflow-hidden shadow-[0_16px_40px_-8px_rgba(23,63,86,0.08)] bg-white border border-[#D9EAF3]/70 group">
              <div className="relative w-full h-[460px]">
                <Image
                  src="/images/hotel/property-grounds.jpg"
                  alt="Oceanfront Dining and Breakfast at Noonna Beach Hotel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e]/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#D9EAF3] shadow-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#397FA8] text-[18px]">
                    local_cafe
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#173F56] font-medium">
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

