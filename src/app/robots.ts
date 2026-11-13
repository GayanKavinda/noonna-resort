import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/siteUrl";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();

  const rules: MetadataRoute.Robots["rules"] = [
    {
      userAgent: "*",
      allow: "/",
    },
  ];

  if (base) {
    return {
      rules,
      sitemap: new URL("/sitemap.xml", base).toString(),
    };
  }

  // No valid SITE_URL configured: omit sitemap directive to avoid localhost/placeholder.
  return {
    rules,
  };
}
