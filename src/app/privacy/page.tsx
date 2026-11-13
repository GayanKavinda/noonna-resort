import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PreFooterCta } from "@/components/shared/PreFooterCta";
import { Reveal } from "@/components/motion/Reveal";
import { absoluteUrl } from "@/lib/siteUrl";

const title = "Privacy Policy";
const fullTitle = "Privacy Policy | Noonna Beach Hotel";
const description =
  "How Noonna Beach Hotel handles information on this website, including contact inquiries, third-party services, and privacy requests.";
const canonical = absoluteUrl("/privacy");
const image = "/images/hotel/hero-beach.jpg";
const imageUrl = absoluteUrl(image) ?? image;

export const metadata: Metadata = {
  title,
  description,
  alternates: canonical ? { canonical } : undefined,
  openGraph: {
    title: fullTitle,
    description:
      "Website privacy information for Noonna Beach Hotel, including contact form limitations and third-party services used on this site.",
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
    title: "Information You Choose to Provide",
    body: [
      "If you contact Noonna Beach Hotel through this website, you may choose to provide information such as your name, email address, travel dates, and message details. Please share only the information needed for your inquiry.",
      "At present, the website contact form performs client-side validation and displays a notice, but it does not transmit your submission to a hotel server, email service, or booking system. Information you enter may be handled temporarily within your browser while you complete the form; however, based on the current implementation, the website does not transmit or store that submission on behalf of the property.",
    ],
  },
  {
    title: "How Website Information Is Used",
    body: [
      "Because contact-form submissions are not currently transmitted or stored by this website, the property does not receive or process them through the website. This page describes the website as currently implemented and does not limit any responsibilities the property may have for information it receives through direct communication, reservations, or other channels outside this website form.",
      "If you contact the property through Booking.com or another verified channel made available by the owner, your information will be handled by that service or channel according to its own practices and any information you provide directly to the property.",
    ],
  },
  {
    title: "Third-Party Services and External Links",
    body: [
      "This website links to third-party services and may display third-party content. These include Booking.com for availability and reservations, Google Maps for location viewing, and external social platforms such as Instagram and YouTube where linked from the site.",
      "When you follow an external link or interact with embedded third-party content, information may be handled independently by that third party under its own privacy and cookie policies. Noonna Beach Hotel does not control those third-party services or their data handling.",
    ],
  },
  {
    title: "Cookies, Analytics, and Similar Technologies",
    body: [
      "Based on the current website implementation reviewed for this policy, this website does not include its own custom analytics scripts, advertising trackers, or local browser storage for visitor profiling.",
      "This statement applies to the website's own implementation only. Third-party services you choose to open or view, including embedded content such as Google Maps or external platforms, may use cookies or similar technologies under their own policies and outside the control of this website.",
    ],
  },
  {
    title: "Security and Retention",
    body: [
      "We aim to keep website content accurate and to limit unnecessary collection of personal information through this website. Because contact-form submissions are not currently transmitted or stored by the website, this site does not maintain a website inquiry database for those messages.",
      "No method of transmission or electronic storage can be guaranteed to be completely secure. This policy does not describe security certifications or specific retention periods. If future contact, booking, analytics, or communication features are added, this policy should be updated to reflect how information is collected, used, retained, and protected.",
    ],
  },
  {
    title: "Privacy Questions and Requests",
    body: [
      "If you have a privacy-related question about this website, please use a verified contact channel provided by the owner when available. Official privacy contact details are pending confirmation and are not published here to avoid providing incorrect information.",
      "Requests relating to bookings or communications made through Booking.com or other third-party services should be directed to the relevant service. For information provided directly to the property through confirmed channels outside this website form, requests should be directed to the property through a verified channel when available.",
      "Sri Lankan data protection law includes the Personal Data Protection Act, No. 9 of 2022. As of November 2026, commencement and implementation may affect which provisions are in force; this page does not claim full compliance with that law or describe provisions not yet in force as currently enforceable rights. It is provided for general website information only and is not legal advice.",
    ],
  },
  {
    title: "Updates to This Policy",
    body: [
      "This Privacy Policy may be updated when website features, third-party services, or contact arrangements change. The version published on this page reflects the website as currently implemented.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="w-full bg-white min-h-screen text-slate-700 pt-20">
      <section className="w-full bg-white py-3 sm:py-4 border-b border-[#D9EAF3]/60">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        </Container>
      </section>

      <section className="py-10 sm:py-12 lg:py-16">
        <Container>
          <Reveal>
          <SectionHeading
            eyebrow="privacy & care..."
            title="Privacy Policy"
            deck="This page explains what information may be involved when you use the Noonna Beach Hotel website, the current limitations of the contact form, and the third-party services linked from this site."
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
              <span className="font-medium text-[#173F56]">Note:</span> Official phone, WhatsApp, email, and a dedicated privacy contact address are pending owner confirmation. This policy does not invent those details.
            </p>
          </aside>
          </Reveal>
        </Container>
      </section>

      <PreFooterCta context="contact" />
    </div>
  );
}
