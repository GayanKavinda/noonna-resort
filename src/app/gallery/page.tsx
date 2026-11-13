import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PreFooterCta } from "@/components/shared/PreFooterCta";
import { GalleryPageContent } from "@/components/sections/gallery/GalleryPageContent";
import { absoluteUrl } from "@/lib/siteUrl";

const title = "Gallery — Moments by the Sea";
const fullTitle = "Gallery — Moments by the Sea | Noonna Beach Hotel";
const description =
  "Explore the spaces, scenery, and little details that make a stay at Noonna Beach Hotel special.";
const canonical = absoluteUrl("/gallery");
const image = "/images/hotel/hero-beach.jpg";
const imageUrl = absoluteUrl(image) ?? image;

export const metadata: Metadata = {
  title,
  description,
  alternates: canonical ? { canonical } : undefined,
  openGraph: {
    title: fullTitle,
    description,
    url: canonical ?? undefined,
    siteName: "Noonna Beach Hotel",
    locale: "en_LK",
    type: "website",
    images: [{ url: imageUrl, alt: "Noonna Beach Hotel coastal gallery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: [imageUrl],
  },
};

export default function GalleryPage() {
  return (
    <div className="w-full bg-surface-container-lowest min-h-screen text-on-surface pt-24">
      <div className="flex flex-col w-full bg-surface-container-lowest">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Gallery" },
            ]}
          />
        </div>
        <GalleryPageContent />
        <PreFooterCta context="gallery" />
      </div>
    </div>
  );
}
