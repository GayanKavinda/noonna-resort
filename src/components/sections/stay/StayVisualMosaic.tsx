import React from "react";
import Image from "next/image";
import Link from "next/link";
import { STAY_DATA } from "@/data/stayData";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

interface StayVisualMosaicProps {
  className?: string;
}

export const StayVisualMosaic: React.FC<StayVisualMosaicProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full border-b border-[#D9EAF3]/60 bg-white py-14 sm:py-16 md:py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <Reveal className="mb-8 flex flex-col justify-between gap-6 sm:mb-10 md:mb-12 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block font-script text-3xl font-normal tracking-wide text-[#2f6b8f] md:text-4xl">
              inside the retreat...
            </span>
            <h2 className="font-heading text-[32px] font-normal leading-tight tracking-tight text-[#173F56] sm:text-4xl md:text-[44px]">
              A Glimpse into the Space
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2f6b8f] transition-colors hover:text-[#173F56] focus:outline-none focus:ring-1 focus:ring-[#2f6b8f]"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="h-[18px] w-[18px]" />
          </Link>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12">
          {STAY_DATA.mosaicImages.map((img, index) => (
            <StaggerItem
              key={index}
              className={`group relative overflow-hidden rounded-3xl border border-[#D9EAF3]/70 bg-slate-100 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] ${img.span} max-md:h-[260px] sm:max-md:h-[320px]`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001e2e]/50 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-full border border-[#D9EAF3] bg-white/95 px-3.5 py-2 shadow-xs backdrop-blur-md sm:bottom-5 sm:left-5 sm:px-4">
                <span className="text-xs font-medium text-[#173F56]">
                  {img.caption}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

