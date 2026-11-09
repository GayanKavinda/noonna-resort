import React from "react";
import Image from "next/image";
import Link from "next/link";
import { STAY_DATA } from "@/data/stayData";
import { ArrowRight } from "lucide-react";

interface StayVisualMosaicProps {
  className?: string;
}

export const StayVisualMosaic: React.FC<StayVisualMosaicProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full bg-white py-16 md:py-20 border-b border-[#D9EAF3]/60 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with View Gallery Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div>
            <span className="font-script text-3xl md:text-4xl text-[#397FA8] font-normal tracking-wide mb-2 block">
              inside the retreat...
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[44px] leading-tight text-[#173F56] font-normal tracking-tight">
              A Glimpse into the Space
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#397FA8] hover:text-[#173F56] transition-colors focus:outline-none focus:ring-1 focus:ring-[#397FA8]"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-[18px] h-[18px]" />
          </Link>
        </div>

        {/* 4-Item Asymmetric Visual Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {STAY_DATA.mosaicImages.map((img, index) => (
            <div
              key={index}
              className={`${img.span} rounded-3xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] border border-[#D9EAF3]/70 group relative bg-slate-100`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e]/50 via-transparent to-transparent pointer-events-none" />

              {/* Caption Tag */}
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#D9EAF3] shadow-xs">
                <span className="text-xs text-[#173F56] font-medium">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

