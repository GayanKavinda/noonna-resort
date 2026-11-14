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

// Reads SITE_URL or NEXT_PUBLIC_SITE_URL if provided, else falls back to your real production domain
const metadataBase =
  getMetadataBase() ??
  new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://noonnabeachhotel.com"
  );

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
        url: "/images/branding/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Noonna Beach Hotel - Official Hotel Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/branding/og-image.jpg"],
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
      <head>
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} ${moonDance.variable}`}
      >
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
