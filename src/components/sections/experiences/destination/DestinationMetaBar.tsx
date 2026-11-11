import type { DestinationDetail } from "@/data/destinationDetailData";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { MapPin } from "lucide-react";

export function DestinationMetaBar({ destination }: { destination: DestinationDetail }) {
  return (
    <section className="w-full bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Experiences", href: "/experiences" },
              { label: destination.breadcrumbCategory, href: "/experiences#nearby-beaches" },
              { label: destination.name },
            ]}
          />
          <div className="flex flex-wrap items-center gap-2">
            {destination.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container text-xs font-medium"
              >
                {tag}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full bg-[#173F56] text-white text-xs font-semibold flex items-center gap-1.5 border border-[#173F56] shadow-sm">
              <MapPin className="w-[14px] h-[14px] text-tertiary-fixed" aria-hidden="true" />
              {destination.distanceLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
