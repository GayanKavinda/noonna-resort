import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PreFooterCta } from "@/components/shared/PreFooterCta";
import { Reveal } from "@/components/motion/Reveal";
import { absoluteUrl } from "@/lib/siteUrl";
import { buildBreadcrumbJsonLd, stringifyJsonLd } from "@/lib/structuredData";

const title = "Terms & Conditions";
const fullTitle = "Terms & Conditions | Noonna Beach Hotel";
const description =
  "General website terms and confirmed stay policies for Noonna Beach Hotel, including check-in, children, pets, events, and booking conditions.";
const canonical = absoluteUrl("/terms");
const image = "/images/hotel/hero-beach.jpg";
const imageUrl = absoluteUrl(image) ?? image;

export const metadata: Metadata = {
  title,
  description,
  alternates: canonical ? { canonical } : undefined,
  openGraph: {
    title: fullTitle,
    description:
      "Website terms and confirmed stay policies for Noonna Beach Hotel in Kumbalgama, Sri Lanka.",
    url: canonical ?? undefined,
    siteName: "Noonna Beach Hotel",
    locale: "en_LK",
    type: "website",
    images: [{ url: imageUrl, alt: "Noonna Beach Hotel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description,
    images: [imageUrl],
  },
};

const sections = [
  {
    title: "Website Information",
    body: [
      "This website provides general information about Noonna Beach Hotel, its coastal setting, and available experiences. Content is intended for guidance and may be updated as details are confirmed or changed.",
      "While we aim to keep information accurate, descriptions, images, and availability shown on this website do not constitute a guaranteed offer. Reservation availability, rates, and final booking details should be confirmed through Booking.com or directly with the property where a direct arrangement has been agreed.",
    ],
  },
  {
    title: "Reservations and Booking Conditions",
    body: [
      "Reservations made through Booking.com are subject to the conditions displayed for the selected reservation on Booking.com. Cancellation and prepayment policies vary according to accommodation type. Please check the conditions for your selected option when making a reservation.",
      "Reservations made directly with the property, where agreed, are subject to the conditions specifically agreed with the property. Reservation-specific conditions provided on Booking.com or agreed directly with the property take precedence over general information on this website.",
    ],
  },
  {
    title: "Check-in and Check-out",
    body: [
      "Check-in is available 24 hours.",
      "Check-out is available from 12:00 to 14:00.",
      "Any arrival or departure arrangements beyond these stated times should be confirmed through the applicable booking channel or directly with the property if agreed.",
    ],
  },
  {
    title: "Children and Extra Beds",
    body: [
      "Children of any age are welcome.",
      "Children aged 18 years and above are charged as adults.",
      "Cots and extra beds are not available.",
    ],
  },
  {
    title: "Age Requirement, Pets, and Events",
    body: [
      "There is no age requirement for check-in.",
      "Pets are not allowed.",
      "Parties and events are not allowed.",
    ],
  },
  {
    title: "Guest Responsibilities",
    body: [
      "Guests are expected to follow the conditions applicable to their reservation and to respect the property, neighbours, and the peaceful coastal environment. Please review any house rules, arrival guidance, or reservation-specific instructions provided through Booking.com or agreed directly with the property.",
      "This website does not publish additional policies on refunds, deadlines, deposits, damage charges, smoking, noise limits, payment methods, guest capacity, or check-in procedures beyond the confirmed information stated on this page.",
    ],
  },
  {
    title: "External Services and Links",
    body: [
      "This website may link to Booking.com, Google Maps, social platforms, and other external websites for convenience. External services are operated by third parties and are subject to their own terms, policies, and availability.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "These Terms & Conditions may be updated to reflect confirmed policy changes, website updates, or booking arrangements. Please review this page periodically for the latest published version.",
    ],
  },
];

export default function TermsPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Terms & Conditions", path: "/terms" },
  ]);

  return (
    <div className="w-full bg-white min-h-screen text-slate-700 pt-20">
      {breadcrumbJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: stringifyJsonLd(breadcrumbJsonLd) }}
        />
      ) : null}
      <section className="w-full bg-white py-3 sm:py-4 border-b border-[#D9EAF3]/60">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
        </Container>
      </section>

      <section className="py-10 sm:py-12 lg:py-16">
        <Container>
          <Reveal>
          <SectionHeading
            eyebrow="stay with clarity..."
            title="Terms & Conditions"
            deck="These terms outline general website information and confirmed stay policies for Noonna Beach Hotel. Reservation-specific conditions provided on Booking.com or agreed directly with the property take precedence where applicable."
            alignment="left"
            isHero
            className="mb-8 sm:mb-10 max-w-none"
          />
          </Reveal>

          <Reveal delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-[#D9EAF3] bg-[#EBF5FB]/20 p-5 sm:p-6 md:p-8"
              >
                <h2 className="font-heading text-xl sm:text-2xl md:text-[28px] text-[#173F56] font-normal tracking-tight mb-3 sm:mb-4 leading-snug text-balance">
                  {section.title}
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="font-body text-sm sm:text-base font-light leading-relaxed text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          </Reveal>

          <Reveal delay={0.15}>
          <aside className="mt-5 sm:mt-6 lg:mt-8 rounded-xl border border-[#D9EAF3] bg-white p-4 sm:p-5 text-sm text-slate-600 font-light leading-relaxed">
            <p>
              <span className="font-medium text-[#173F56]">Important:</span> Cancellation and prepayment policies vary according to accommodation type. Please check the conditions for your selected option when making a reservation. For Booking.com reservations, confirm the exact conditions shown on Booking.com; for direct reservations, confirm the conditions specifically agreed with the property.
            </p>
          </aside>
          </Reveal>
        </Container>
      </section>

      <PreFooterCta context="contact" />
    </div>
  );
}
