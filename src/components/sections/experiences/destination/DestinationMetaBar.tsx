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
              { label: destination.breadcrumbCategory },
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
            <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium flex items-center gap-1">
              <MapPin className="w-[14px] h-[14px]" aria-hidden="true" />
              {destination.distanceLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
