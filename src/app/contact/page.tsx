import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactInquiry } from "@/components/sections/contact/ContactInquiry";
import { ContactArrival } from "@/components/sections/contact/ContactArrival";
import { ContactLocation } from "@/components/sections/contact/ContactLocation";
import { ContactFaq } from "@/components/sections/contact/ContactFaq";
import { PreFooterCta } from "@/components/shared/PreFooterCta";
import { absoluteUrl } from "@/lib/siteUrl";

const title = "Contact & Booking";
const fullTitle = "Contact & Booking | Noonna Beach Hotel";
const description =
  "Contact Noonna Beach Hotel in Kumbalgama, Sri Lanka for reservations, inquiries, and travel assistance along the southern coast.";
const canonical = absoluteUrl("/contact");
const image = "/images/hotel/property-exterior.jpg";
const imageUrl = absoluteUrl(image) ?? image;

export const metadata: Metadata = {
  title,
  description,
  alternates: canonical ? { canonical } : undefined,
  openGraph: {
    title: fullTitle,
    description:
      "Reach our seaside sanctuary for reservations, private inquiries, and coastal travel assistance in Kumbalgama, Sri Lanka.",
    url: canonical ?? undefined,
    siteName: "Noonna Beach Hotel",
    locale: "en_LK",
    type: "website",
    images: [{ url: imageUrl, alt: "Noonna Beach Hotel property exterior" }],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: [imageUrl],
  },
};

export default function ContactPage() {
  return (
    <div className="w-full bg-surface-container-lowest min-h-screen text-on-surface pt-20">
      <section className="w-full bg-surface-container-lowest py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Contact & Booking" },
            ]}
          />
        </div>
      </section>

      <ContactHero />
      <ContactInquiry />
      <ContactArrival />
      <ContactLocation />
      <ContactFaq />
      <PreFooterCta context="contact" />
    </div>
  );
}
