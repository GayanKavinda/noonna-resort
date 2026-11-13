import { test, expect } from "../fixtures/base";
import { emulateReducedMotion, emulateNoPreferenceMotion } from "../helpers/motion";

const targets = [
  { route: "/", name: "home" },
  { route: "/stay", name: "stay" },
  { route: "/contact", name: "contact" },
  { route: "/experiences/midigama-beach", name: "destination" },
];

test.describe("motion and reduced-motion", () => {
  for (const t of targets) {
    test(`${t.route} with no-preference`, async ({ page, qa }) => {
      await emulateNoPreferenceMotion(page);
      await qa.goto(t.route);
      await expect(page.locator("main, body").first()).toBeVisible();
      await qa.screenshot(`${t.name}-motion-default`);
      await qa.assertNoHorizontalOverflow();
      await qa.assertHealthyRuntime();
    });

    test(`${t.route} with prefers-reduced-motion: reduce`, async ({ page, qa }) => {
      await emulateReducedMotion(page);
      await qa.goto(t.route);
      await expect(page.locator("main, body").first()).toBeVisible();
      // main content remains visible and interactive basics hold
      await page.keyboard.press("Tab");
      await qa.screenshot(`${t.name}-motion-reduce`);
      await qa.assertNoHorizontalOverflow();
      await qa.assertHealthyRuntime();
    });
  }

  test("FAQ and interactions remain functional under reduced motion", async ({ page, qa }) => {
    await emulateReducedMotion(page);
    await qa.goto("/contact");
    const btn = page.getByRole("button").filter({ hasText: /check|policy|pet|cancel|child|age/i }).first();
    if (await btn.count()) {
      await btn.click();
      await page.waitForTimeout(300);
      await qa.screenshot("faq-reduced-motion");
    }
  });
});
