import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PreFooterCta } from "@/components/shared/PreFooterCta";
import { GalleryPageContent } from "@/components/sections/gallery/GalleryPageContent";

export const metadata: Metadata = {
  title: "Gallery — Moments by the Sea | Noonna Beach Hotel",
  description:
    "Explore the spaces, scenery, and little details that make a stay at Noonna Beach Hotel special.",
  openGraph: {
    title: "Gallery — Moments by the Sea | Noonna Beach Hotel",
    description:
      "Explore the spaces, scenery, and little details that make a stay at Noonna Beach Hotel special.",
    url: "/gallery",
    siteName: "Noonna Beach Hotel",
    locale: "en_LK",
    type: "website",
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
