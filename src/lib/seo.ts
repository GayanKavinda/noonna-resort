import type { Metadata } from "next";
import { absoluteUrl, getMetadataBase } from "./siteUrl";

type PageSeoInput = {
  path: string;
  title: string;
  description: string;
  /** Path like /images/...; used for OG/Twitter when provided */
  image?: string;
  imageAlt?: string;
  /** Full title for OG/Twitter when different from `title` (which may be a short page title used with template) */
  socialTitle?: string;
  type?: "website" | "article";
};

export function buildPageMetadata(input: PageSeoInput): Metadata {
  const canonical = absoluteUrl(input.path);
  const image = input.image;
  const imageUrl = image ? absoluteUrl(image) ?? image : undefined;
  const socialTitle = input.socialTitle ?? input.title;

  const openGraph: NonNullable<Metadata["openGraph"]> = {
    title: socialTitle,
    description: input.description,
    url: canonical ?? undefined,
    siteName: "Noonna Beach Hotel",
    locale: "en_LK",
    type: input.type ?? "website",
    ...(imageUrl
      ? { images: [{ url: imageUrl, alt: input.imageAlt ?? socialTitle }] }
      : {}),
  };

  const twitter: NonNullable<Metadata["twitter"]> = {
    card: imageUrl ? "summary_large_image" : "summary",
    title: socialTitle,
    description: input.description,
    ...(imageUrl ? { images: [imageUrl] } : {}),
  };

  return {
    title: input.title,
    description: input.description,
    alternates: canonical ? { canonical } : undefined,
    openGraph,
    twitter,
  };
}

export { getMetadataBase, absoluteUrl };
