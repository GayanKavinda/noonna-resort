import type { Page } from "@playwright/test";

export async function emulateReducedMotion(page: Page) {
  await page.emulateMedia({ reducedMotion: "reduce" });
}
export async function emulateNoPreferenceMotion(page: Page) {
  await page.emulateMedia({ reducedMotion: "no-preference" });
}
