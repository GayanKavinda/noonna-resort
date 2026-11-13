import type { Page, expect as Expect } from "@playwright/test";

export async function expectCommonPage(page: Page, expect: typeof Expect, opts: { heading?: RegExp | string }) {
  await expect(page.locator("body")).toBeVisible();
  const main = page.locator("main").first();
  if (await main.count()) await expect(main).toBeVisible();
  if (opts.heading) {
    const h = page.getByRole("heading").filter({ hasText: opts.heading }).first();
    const hAny = page.locator("h1,h2,h3").filter({ hasText: opts.heading }).first();
    const visible = (await h.count()) ? h : hAny;
    await expect(visible, `Expected heading matching ${opts.heading}`).toBeVisible({ timeout: 15_000 });
  }
}

export async function collectLocalImageStatuses(page: Page) {
  return page.evaluate(async () => {
    const imgs = Array.from(document.images).map((i) => i.currentSrc || i.src).filter(Boolean);
    const local = imgs.filter((s) => s.startsWith(location.origin));
    const results: { url: string; ok: boolean; status?: number }[] = [];
    for (const url of Array.from(new Set(local))) {
      try {
        const r = await fetch(url, { method: "GET" });
        results.push({ url, ok: r.ok, status: r.status });
      } catch {
        results.push({ url, ok: false });
      }
    }
    return results;
  });
}
