import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationDetailPage } from "@/components/sections/experiences/destination/DestinationDetailPage";
import { getDestinationDetailBySlug } from "@/data/destinationDetailData";
import { absoluteUrl } from "@/lib/siteUrl";

export const instant = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "midigama-beach" },
    { slug: "abimanagama-beach" },
    { slug: "weligama-beach" },
    { slug: "ahangama-beach" },
    { slug: "lazy-left-surf-break" },
    { slug: "rams-right-surf-break" },
    { slug: "awee-coco-secret-pool" },
    { slug: "secret-jungle-beach" },
    { slug: "polhena-beach-coral-reef" },
    { slug: "secret-beach-mirissa" },
    { slug: "coconut-tree-hill" },
    { slug: "parrot-rock" },
    { slug: "mirissa-coastal-promontory" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationDetailBySlug(slug);
  if (!destination) return { title: "Destination | Noonna Beach Hotel" };

  const fullTitle = `${destination.name} | Noonna Beach Hotel Experiences`;
  const description = destination.hero.deck;
  const path = `/experiences/${destination.slug}`;
  const canonical = absoluteUrl(path);
  const heroImage = destination.hero.image;
  const imageUrl = heroImage ? absoluteUrl(heroImage) ?? heroImage : absoluteUrl("/images/hotel/hero-beach.jpg") ?? "/images/hotel/hero-beach.jpg";

  return {
    title: fullTitle,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: canonical ?? undefined,
      siteName: "Noonna Beach Hotel",
      locale: "en_LK",
      type: "website",
      images: imageUrl ? [{ url: imageUrl, alt: destination.hero.imageAlt || destination.name }] : undefined,
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: fullTitle,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}

export default async function ExperienceDestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestinationDetailBySlug(slug);
  if (!destination) notFound();
  return (
    <main className="w-full pt-20 bg-surface-container-lowest min-h-screen">
      <DestinationDetailPage destination={destination} />
    </main>
  );
}
