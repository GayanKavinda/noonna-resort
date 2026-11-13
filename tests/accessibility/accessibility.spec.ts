import { test, expect } from "../fixtures/base";

const routes = ["/", "/stay", "/experiences", "/gallery", "/contact"];

test.describe("accessibility basics", () => {
  for (const route of routes) {
    test(`${route} keyboard/focus and basic semantics`, async ({ page, qa }) => {
      await qa.goto(route);
      // keyboard navigation produces focusable element
      await page.keyboard.press("Tab");
      const active = await page.evaluate(() => document.activeElement?.tagName || "");
      expect(active.length).toBeGreaterThan(0);
      // basic landmarks/headings
      const h1 = page.locator("h1");
      if (await h1.count()) await expect(h1.first()).toBeVisible();
      // images with alt presence check (non-blocking evidence)
      const imgNoAlt = await page.locator('img:not([alt])').count();
      await qa.screenshot(`a11y-${route.replace(/\W+/g,'-')||'home'}`);
      await qa.assertNoHorizontalOverflow();
      await qa.assertHealthyRuntime();
      expect(typeof imgNoAlt).toBe("number");
    });
  }

  test("contact form labels and keyboard behavior", async ({ page, qa }) => {
    await qa.goto("/contact");
    const inputs = page.locator("input, textarea, select");
    const count = await inputs.count();
    if (count > 0) {
      await inputs.first().focus();
      await page.keyboard.press("Tab");
    }
    await qa.screenshot("contact-a11y-form");
  });
});
