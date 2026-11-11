import type { Metadata } from "next";
import { UtensilsCrossed } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PreFooterCta } from "@/components/shared/PreFooterCta";
import { DiningHero } from "@/components/sections/experiences/dining/DiningHero";
import { DiningDirectorySection } from "@/components/sections/experiences/dining/DiningDirectorySection";

export const metadata: Metadata = {
  title: "A Taste of Sri Lanka — 10 Coastal Dining Destinations | Noonna Beach Hotel",
  description:
    "Curated coastal clay-pot feasts, fresh beachside grills, and artisanal surf cafes along the southern shoreline near Noonna Beach Hotel.",
  openGraph: {
    title: "A Taste of Sri Lanka — 10 Coastal Dining Destinations | Noonna Beach Hotel",
    description:
      "Curated coastal clay-pot feasts, fresh beachside grills, and artisanal surf cafes along the southern shoreline.",
    url: "/experiences/dining",
    siteName: "Noonna Beach Hotel",
    locale: "en_LK",
    type: "website",
  },
};

export default function DiningPage() {
  return (
    <div className="w-full bg-white min-h-screen text-[#1a1c1c] pt-20">
      <div className="flex flex-col w-full">
        {/* 1. BREADCRUMB & METADATA BAR */}
        <section className="w-full bg-white border-b border-[#D9EAF3]/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Experiences", href: "/experiences" },
                  { label: "A Taste of Sri Lanka — 10 Coastal Dining Destinations" },
                ]}
              />
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#e5f1f8] text-[#244b62] text-xs font-medium">Culinary Guide</span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium flex items-center gap-1">
                  <UtensilsCrossed className="w-[14px] h-[14px]" aria-hidden="true" />
                  10 Curated Spots
                </span>
              </div>
            </div>
          </div>
        </section>

        <DiningHero />
        <DiningDirectorySection />
        <PreFooterCta context="taste" />
      </div>
    </div>
  );
}

