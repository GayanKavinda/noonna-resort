import type { MetadataRoute } from "next";
import { absoluteUrl, getSiteUrl } from "@/lib/siteUrl";

/**
 * Verified public routes (22) per Phase 10.6.1/10.6.3 inventory.
 * All routes confirmed present in src/app as of 2026-11-13.
 * lastModified omitted (no verifiable meaningful per-route dates configured).
 * priority/changeFrequency omitted (avoid artificial values).
 */
export const PUBLIC_ROUTES: string[] = [
  "/",
  "/stay",
  "/experiences",
  "/experiences/dining",
  "/experiences/southern-heritage-coastal-expeditions",
  "/experiences/midigama-beach",
  "/experiences/abimanagama-beach",
  "/experiences/weligama-beach",
  "/experiences/ahangama-beach",
  "/experiences/lazy-left-surf-break",
  "/experiences/rams-right-surf-break",
  "/experiences/awee-coco-secret-pool",
  "/experiences/secret-jungle-beach",
  "/experiences/polhena-beach-coral-reef",
  "/experiences/secret-beach-mirissa",
  "/experiences/coconut-tree-hill",
  "/experiences/parrot-rock",
  "/experiences/mirissa-coastal-promontory",
  "/gallery",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base) {
    // SITE_URL not configured or invalid: do not emit invalid/localhost/placeholder URLs.
    // Hostname-dependent; sitemap URLs will be generated once SITE_URL is confirmed.
    return [];
  }

  return PUBLIC_ROUTES.flatMap((route) => {
    const url = absoluteUrl(route);
    if (!url) return [];
    return [{ url }];
  });
}
