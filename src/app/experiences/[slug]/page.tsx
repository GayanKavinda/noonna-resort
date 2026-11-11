import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationDetailPage } from "@/components/sections/experiences/destination/DestinationDetailPage";
import { getDestinationDetailBySlug } from "@/data/destinationDetailData";

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
  return {
    title: `${destination.name} | Noonna Beach Hotel Experiences`,
    description: destination.hero.deck,
    openGraph: {
      title: `${destination.name} | Noonna Beach Hotel Experiences`,
      description: destination.hero.deck,
      url: `/experiences/${destination.slug}`,
      siteName: "Noonna Beach Hotel",
      locale: "en_LK",
      type: "website",
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