import { test, expect } from "../fixtures/base";

test.describe("phase-10.5.10 manual keyboard/focus checks", () => {
  test("header desktop dropdown keyboard + escape + focus", async ({ page, qa }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await qa.goto("/");
    const expBtn = page.getByRole("button", { name: /^Experiences$/i }).first();
    await expBtn.focus();
    await expect(expBtn).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(expBtn).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator('[role="menu"]').first()).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(expBtn).toHaveAttribute("aria-expanded", "false");
    await qa.assertHealthyRuntime();
  });

  test("mobile menu keyboard escape and focus order basics", async ({ page, qa }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await qa.goto("/");
    const open = page.getByRole("button", { name: /open navigation menu/i }).first();
    await open.focus();
    await page.keyboard.press("Enter");
    const close = page.getByRole("button", { name: /close navigation menu/i }).first();
    await expect(close).toBeVisible();
    await expect(page.locator("#mobile-primary-navigation")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator("#mobile-primary-navigation")).toBeHidden();
    await qa.assertHealthyRuntime();
  });

  test("gallery lightbox keyboard open/escape/focus", async ({ page, qa }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await qa.goto("/gallery");
    const item = page.locator("#gallery-grid .gallery-item").first();
    await item.focus();
    await page.keyboard.press("Enter");
    const dialog = page.locator('#gallery-lightbox[role="dialog"]');
    await expect(dialog).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await qa.assertHealthyRuntime();
  });

  test("dining modal keyboard open/escape", async ({ page, qa }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await qa.goto("/experiences/dining");
    const card = page.locator(".dining-card").first();
    await card.scrollIntoViewIfNeeded();
    await card.click();
    const dialog = page.locator('[role="dialog"][aria-modal="true"]').first();
    await expect(dialog).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await qa.assertHealthyRuntime();
  });

  test("contact form labels, required, errors, status", async ({ page, qa }) => {
    await qa.goto("/contact");
    await page.getByRole("button", { name: /^Send Message$/i }).click();
    await expect(page.locator("#fullName")).toHaveAttribute("aria-invalid", "true");
    await expect(page.locator("#email")).toHaveAttribute("aria-invalid", "true");
    await expect(page.locator("#message")).toHaveAttribute("aria-invalid", "true");
    await expect(page.locator("#fullName")).toHaveAttribute("aria-describedby", "fullName-error");
    await page.fill("#fullName", "QA Tester");
    await page.fill("#email", "qa@example.test");
    await page.fill("#message", "Automated interaction QA message for validation behavior.");
    await page.getByRole("button", { name: /^Send Message$/i }).click();
    await expect(page.getByRole("status").filter({ hasText: /Online message delivery is not configured yet/i })).toBeVisible();
    await qa.assertHealthyRuntime();
  });

  test("scroll-to-top not focusable when hidden", async ({ page, qa }) => {
    await qa.goto("/");
    const btn = page.locator('button[aria-label="Scroll to top"]');
    await expect(btn).toHaveCount(1);
    // when hidden it should not be in tab order / exposed to AT
    const tabIndex = await btn.getAttribute("tabindex");
    const ariaHidden = await btn.getAttribute("aria-hidden");
    expect(tabIndex === "-1" || ariaHidden === "true").toBeTruthy();
    await qa.assertHealthyRuntime();
  });
});
