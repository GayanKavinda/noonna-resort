import type { Metadata } from "next";
import { UtensilsCrossed } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PreFooterCta } from "@/components/shared/PreFooterCta";
import { DiningHero } from "@/components/sections/experiences/dining/DiningHero";
import { DiningDirectorySection } from "@/components/sections/experiences/dining/DiningDirectorySection";
import { absoluteUrl } from "@/lib/siteUrl";
import { buildBreadcrumbJsonLd, stringifyJsonLd } from "@/lib/structuredData";

const title = "A Taste of Sri Lanka — 10 Coastal Dining Destinations";
const fullTitle = "A Taste of Sri Lanka — 10 Coastal Dining Destinations | Noonna Beach Hotel";
const description =
  "Curated coastal clay-pot feasts, fresh beachside grills, and artisanal surf cafes along the southern shoreline near Noonna Beach Hotel.";
const canonical = absoluteUrl("/experiences/dining");
const image = "/images/hotel/hero-beach.jpg";
const imageUrl = absoluteUrl(image) ?? image;

export const metadata: Metadata = {
  title,
  description,
  alternates: canonical ? { canonical } : undefined,
  openGraph: {
    title: fullTitle,
    description:
      "Curated coastal clay-pot feasts, fresh beachside grills, and artisanal surf cafes along the southern shoreline.",
    url: canonical ?? undefined,
    siteName: "Noonna Beach Hotel",
    locale: "en_LK",
    type: "website",
    images: [{ url: imageUrl, alt: "Coastal dining near Noonna Beach Hotel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: [imageUrl],
  },
};

export default function DiningPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Experiences", path: "/experiences" },
    { name: "A Taste of Sri Lanka — 10 Coastal Dining Destinations", path: "/experiences/dining" },
  ]);

  return (
    <div className="w-full bg-white min-h-screen text-[#1a1c1c] pt-20">
      {breadcrumbJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd) }}
        />
      ) : null}
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
