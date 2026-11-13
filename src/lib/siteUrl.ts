/**
 * Production site URL helper for SEO infrastructure (Phase 10.6.3).
 *
 * Configure via SITE_URL environment variable, e.g.:
 *   SITE_URL=https://www.example.lk
 *
 * Requirements:
 * - Must be a valid absolute http/https URL with a hostname.
 * - Localhost/loopback hosts are rejected for production SEO outputs.
 * - When absent or invalid, helpers return undefined so the app can build and
 *   avoid emitting incorrect canonicals, sitemap URLs, or metadataBase.
 * - Do not invent or fall back to an unconfirmed production hostname.
 */

const LOOPBACK_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1", "[::1]"]);

function isLoopbackHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  return LOOPBACK_HOSTS.has(h) || h.endsWith(".localhost");
}

export function getSiteUrl(): URL | undefined {
  const raw = process.env.SITE_URL?.trim();
  if (!raw) return undefined;
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;
    if (!url.hostname) return undefined;
    if (isLoopbackHost(url.hostname)) return undefined;
    // Normalize to origin (no path/query/hash)
    return new URL(url.origin);
  } catch {
    return undefined;
  }
}

export function getMetadataBase(): URL | undefined {
  return getSiteUrl();
}

export function absoluteUrl(path: string): string | undefined {
  const base = getSiteUrl();
  if (!base) return undefined;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, base).toString();
}
