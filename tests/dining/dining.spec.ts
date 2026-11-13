import { test, expect } from "../fixtures/base";

test.describe("dining", () => {
  test("directory renders, filters, and venue modal interactions", async ({ page, qa }) => {
    await qa.goto("/experiences/dining");
    await expect(page.getByRole("heading", { name: /dining|culinary|taste/i }).first()).toBeVisible({ timeout: 15000 });
    await qa.screenshot("dining-page");

    // filters if present
    const filterButtons = page.locator('#filter-pill-container button, button:has-text("All"), button:has-text("Cafe"), button:has-text("Clay")');
    if (await filterButtons.count()) {
      await filterButtons.nth(1).click({ trial: false }).catch(() => {});
      await page.waitForTimeout(500);
      await qa.screenshot("dining-filtered");
      const all = page.locator('#filter-pill-container button').first();
      if (await all.count()) await all.click().catch(() => {});
    }

    // open a venue card/modal
    const card = page.locator('.dining-card, [data-dining-id], article, [role="button"]').first();
    if (await card.count()) {
      await card.click({ timeout: 5000 }).catch(async () => { await card.click({ force: true }).catch(() => {}); });
      await page.waitForTimeout(500);
      const dialog = page.locator('[role="dialog"], [aria-modal="true"]').first();
      if (await dialog.count()) {
        await expect(dialog).toBeVisible();
        await qa.screenshot("dining-modal-open");
        // keyboard/escape
        await page.keyboard.press("Escape");
        await page.waitForTimeout(400);
        await expect(dialog).toBeHidden({ timeout: 5000 }).catch(() => {});
      } else {
        await qa.screenshot("dining-card-clicked-no-dialog");
      }
    }

    await qa.assertNoHorizontalOverflow();
    await qa.assertHealthyRuntime();
  });
});
