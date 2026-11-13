import type { DestinationDetail } from "@/data/destinationDetailData";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { MapPin } from "lucide-react";

export function DestinationMetaBar({ destination }: { destination: DestinationDetail }) {
  return (
    <section className="w-full bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4">
        <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Experiences", href: "/experiences" },
                { label: destination.breadcrumbCategory, href: "/experiences#nearby-beaches" },
                { label: destination.name },
              ]}
            />
          </div>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {destination.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 sm:px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container text-[11px] sm:text-xs font-medium leading-snug"
              >
                {tag}
              </span>
            ))}
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#173F56] text-white text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 border border-[#173F56] shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-tertiary-fixed shrink-0" aria-hidden="true" />
              <span className="leading-snug">{destination.distanceLabel}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
