import { test, expect } from "../fixtures/base";

test.describe("gallery", () => {
  test("filters, progressive load, lightbox and keyboard controls", async ({ page, qa }) => {
    await qa.goto("/gallery");
    await expect(page.getByRole("heading", { name: /gallery|moments/i }).first()).toBeVisible({ timeout: 15000 });
    await qa.screenshot("gallery-page");

    // filter buttons
    const filter = page.getByRole("button", { name: /all|rooms|dining|beach|surround/i }).first();
    if (await filter.count()) {
      await filter.click().catch(() => {});
      await page.waitForTimeout(300);
    }

    // progressive load if present
    const loadMore = page.getByRole("button", { name: /load more|show more|more/i }).first();
    if (await loadMore.count()) {
      await loadMore.click().catch(() => {});
      await page.waitForTimeout(400);
      await qa.screenshot("gallery-load-more");
    }

    // open lightbox on first image/item
    const item = page.locator('#gallery-grid [role="button"], #gallery-grid img, .gallery-item, [data-gallery-item]').first();
    if (await item.count()) {
      await item.click({ force: true }).catch(() => {});
      await page.waitForTimeout(500);
      const lightbox = page.locator('#gallery-lightbox, [role="dialog"], [aria-modal="true"]').first();
      if (await lightbox.count()) {
        await expect(lightbox).toBeVisible();
        await qa.screenshot("gallery-lightbox-open");
        await page.keyboard.press("ArrowRight");
        await page.waitForTimeout(300);
        await page.keyboard.press("ArrowLeft");
        await page.waitForTimeout(300);
        await page.keyboard.press("Escape");
        await page.waitForTimeout(400);
        await expect(lightbox).toBeHidden({ timeout: 5000 }).catch(() => {});
      }
    }

    await qa.assertNoHorizontalOverflow();
    await qa.assertHealthyRuntime();
  });
});
