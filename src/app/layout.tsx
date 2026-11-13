import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Moon_Dance } from "next/font/google";
import "./globals.css";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getMetadataBase } from "@/lib/siteUrl";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const moonDance = Moon_Dance({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-moon-dance",
});

const metadataBase = getMetadataBase();

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: {
    default: "Noonna Beach Hotel | Kumbalgama, Sri Lanka",
    template: "%s | Noonna Beach Hotel",
  },
  description:
    "Discover Noonna Beach Hotel, a private coastal sanctuary on Sri Lanka's southern shoreline.",
  openGraph: {
    siteName: "Noonna Beach Hotel",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: "/images/hotel/hero-beach.jpg",
        alt: "Noonna Beach Hotel on Sri Lanka's southern shoreline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} ${moonDance.variable}`}
      >
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
