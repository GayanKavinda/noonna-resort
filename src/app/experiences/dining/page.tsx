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
        <section className="w-full border-b border-[#D9EAF3]/60 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-12">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="min-w-0">
                <Breadcrumb
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Experiences", href: "/experiences" },
                    { label: "A Taste of Sri Lanka — 10 Coastal Dining Destinations" },
                  ]}
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#e5f1f8] px-3 py-1 text-xs font-medium text-[#244b62]">Culinary Guide</span>
                <span className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  <UtensilsCrossed className="h-[14px] w-[14px]" aria-hidden="true" />
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

