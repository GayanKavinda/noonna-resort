import { absoluteUrl } from "./siteUrl";

export function stringifyJsonLd(data: Record<string, unknown>): string {
  // JSON.stringify produces valid JSON; keep UTF-8 as-is in source.
  return JSON.stringify(data);
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[]
): Record<string, unknown> | undefined {
  const elements = items.map((item, index) => {
    const id = absoluteUrl(item.path);
    if (!id) return null;
    return {
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: id,
    };
  });
  if (elements.some((e) => e === null)) return undefined;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: elements,
  };
}

export type JsonLd = Record<string, unknown>;
