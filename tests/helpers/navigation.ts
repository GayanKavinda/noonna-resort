import type { Page } from "@playwright/test";

export async function waitForPageSettled(page: Page) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => {});
  await page.waitForTimeout(300);
}

export async function gotoRoute(page: Page, route: string) {
  const response = await page.goto(route, { waitUntil: "domcontentloaded" });
  await waitForPageSettled(page);
  return response;
}

export async function hasHorizontalOverflow(page: Page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const scrollW = Math.max(doc?.scrollWidth ?? 0, body?.scrollWidth ?? 0);
    const clientW = Math.max(doc?.clientWidth ?? 0, window.innerWidth ?? 0);
    return { overflow: scrollW > clientW + 1, scrollW, clientW };
  });
}
