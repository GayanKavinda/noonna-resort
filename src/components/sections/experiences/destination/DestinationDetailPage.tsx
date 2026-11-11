import type { DestinationDetail } from "@/data/destinationDetailData";
import { PreFooterCta } from "@/components/shared/PreFooterCta";
import { DestinationMetaBar } from "./DestinationMetaBar";
import { DestinationHero } from "./DestinationHero";
import { DestinationVitalsSection } from "./DestinationVitalsSection";
import { DestinationTransitSection } from "./DestinationTransitSection";
import { DestinationGallerySection } from "./DestinationGallerySection";
import { DestinationDiscoverCarousel } from "./DestinationDiscoverCarousel";
import { DestinationConciergeBanner } from "./DestinationConciergeBanner";

export function DestinationDetailPage({ destination }: { destination: DestinationDetail }) {
  return (
    <div className="flex flex-col w-full">
      <DestinationMetaBar destination={destination} />
      <DestinationHero hero={destination.hero} />
      <DestinationVitalsSection vitals={destination.vitals} />
      <DestinationTransitSection transit={destination.transit} />
      <DestinationGallerySection gallery={destination.gallery} />
      <DestinationDiscoverCarousel discover={destination.discover} />
      <DestinationConciergeBanner concierge={destination.concierge} />
      <PreFooterCta context="beaches" />
    </div>
  );
}
