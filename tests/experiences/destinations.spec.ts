import { test, expect } from "../fixtures/base";
import { DESTINATION_ROUTES } from "../utils/routes";

test.describe("experiences and destinations", () => {
  test("experiences landing has destination/section links", async ({ page, qa }) => {
    await qa.goto("/experiences");
    await expect(page.locator("main, body").first()).toBeVisible();
    await qa.screenshot("experiences-landing");
    const links = page.locator('a[href^="/experiences/"]');
    expect(await links.count()).toBeGreaterThan(0);
  });

  for (const route of DESTINATION_ROUTES) {
    test(`destination ${route.path} renders key content`, async ({ page, qa }) => {
      const res = await qa.goto(route.path);
      expect([200, 304]).toContain(res!.status());
      await expect(page.locator("h1, h2").filter({ hasText: route.expectedHeading }).first()).toBeVisible({ timeout: 15000 });
      await qa.assertNoHorizontalOverflow();
      await qa.screenshot(`destination-${route.name}`);
      await qa.assertHealthyRuntime();
    });
  }

  test("destination discover carousel controls/filters if present", async ({ page, qa }) => {
    await qa.goto(DESTINATION_ROUTES[0].path);
    const region = page.locator("#regional-discoveries, #coastal-carousel-track").first();
    if (await region.count()) {
      await region.scrollIntoViewIfNeeded();
      await qa.screenshot("destination-carousel");
      const next = page.getByRole("button", { name: /next/i }).first();
      const prev = page.getByRole("button", { name: /previous|prev/i }).first();
      if (await next.count()) { await next.click(); await page.waitForTimeout(400); }
      if (await prev.count()) { await prev.click(); await page.waitForTimeout(400); }
      const filter = page.getByRole("button", { name: /beach|all|heritage|dining|taste/i }).first();
      if (await filter.count()) { await filter.click(); await page.waitForTimeout(400); await qa.screenshot("destination-carousel-filter"); }
      // keyboard interaction
      await page.keyboard.press("Tab");
    } else {
      test.skip(true, "Carousel region not found on destination page");
    }
  });
});
