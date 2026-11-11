import type { DestinationGalleryData } from "@/data/destinationDetailData";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export function DestinationGallerySection({ gallery }: { gallery: DestinationGalleryData }) {
  return (
    <section className="w-full bg-surface-container-lowest py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#D9EAF3]/60">
          <div>
            <span className="font-script text-2xl lg:text-3xl text-[#397FA8] italic block leading-none mb-1">
              {gallery.sectionScript}
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-[#173F56] font-medium tracking-tight">
              {gallery.sectionTitle}
            </h2>
          </div>
          <Link
            className="text-xs font-semibold text-[#397FA8] hover:text-[#173F56] transition-colors flex items-center gap-1.5 mt-3 sm:mt-0 tracking-wide"
            href={gallery.allHref}
          >
            <span>All Coastal Outings</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {gallery.items.map((item) => {
            const isLarge = item.span === "lg:col-span-7" || item.span === "lg:col-span-5";
            return (
              <div
                key={item.title}
                className={`md:col-span-12 ${item.span} bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between hover:border-[#397FA8] relative ${
                  isLarge ? "min-h-[380px] lg:min-h-[420px]" : "min-h-[360px]"
                }`}
              >
                <div className="absolute inset-0 bg-[#173F56] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    crossOrigin="anonymous"
                    loading="eager"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173F56]/90 via-[#173F56]/35 to-transparent" />
                </div>
                <div className="relative p-6 flex items-start justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase border border-white/25 shadow-sm font-['Inter',sans-serif]">
                    {item.topBadge}
                  </span>
                  {item.topBadgeRight ? (
                    <span className="px-3 py-1 rounded-full bg-[#173F56]/80 backdrop-blur-md text-tertiary-fixed text-[11px] font-medium border border-white/15 font-['Inter',sans-serif] flex items-center gap-1">
                      {item.topBadgeRight.includes("km") ? <MapPin className="w-[14px] h-[14px]" aria-hidden="true" /> : null}
                      {item.topBadgeRight}
                    </span>
                  ) : null}
                </div>
                <div className={`relative ${isLarge ? "p-6 lg:p-8" : "p-6 lg:p-8"} z-10 text-white`}>
                  <span className="font-['Moon_Dance',cursive] text-tertiary-fixed text-2xl italic block mb-1">
                    {item.script}
                  </span>
                  <h3
                    className={`font-['Cormorant_Garamond',serif] ${
                      isLarge ? "text-2xl lg:text-3xl" : "text-2xl"
                    } text-white font-medium tracking-tight mb-2`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-[13px] text-white/90 font-['Inter',sans-serif] font-light leading-relaxed ${
                      item.span === "lg:col-span-7" ? "max-w-xl" : ""
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
