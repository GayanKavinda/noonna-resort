import { test, expect } from "../fixtures/base";

test.describe("navigation", () => {
  test("desktop nav links and dropdown behavior", async ({ page, qa }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await qa.goto("/");
    const header = page.locator("header").first();
    await expect(header).toBeVisible();
    // primary links
    for (const name of ["Stay", "Experiences", "Gallery", "Contact"]) {
      const link = header.getByRole("link", { name: new RegExp(`^${name}$`, "i") }).first();
      if (await link.count()) await expect(link).toBeVisible();
    }
    // experiences dropdown/hover area if present
    const exp = header.getByRole("link", { name: /experiences/i }).first();
    if (await exp.count()) {
      await exp.hover();
      await page.waitForTimeout(300);
      await qa.screenshot("desktop-experiences-hover");
    }
    await qa.assertNoHorizontalOverflow();
  });

  test("mobile menu opens, closes, and navigates", async ({ page, qa }, testInfo) => {
    test.skip(!/mobile/i.test(testInfo.project.name), "Mobile-menu interaction runs on mobile viewport projects");
    await qa.goto("/");

    const openToggle = page.getByRole("button", { name: /open navigation menu/i }).first();
    const closeToggle = page.getByRole("button", { name: /close navigation menu/i }).first();
    const mobileNav = page.locator("#mobile-primary-navigation");
    const stay = mobileNav.getByRole("link", { name: /^the stay$/i }).first();

    await expect(openToggle).toBeVisible();
    await expect(openToggle).toHaveAttribute("aria-expanded", "false");
    await expect(mobileNav).toBeHidden();

    await openToggle.click();
    await expect(closeToggle).toBeVisible();
    await expect(closeToggle).toHaveAttribute("aria-expanded", "true");
    await expect(mobileNav).toBeVisible();
    await expect(stay).toBeVisible();
    await qa.screenshot("mobile-menu-open");

    await closeToggle.click();
    await expect(openToggle).toBeVisible();
    await expect(openToggle).toHaveAttribute("aria-expanded", "false");
    await expect(mobileNav).toBeHidden();

    await openToggle.click();
    await expect(closeToggle).toBeVisible();
    await expect(mobileNav).toBeVisible();
    await stay.click();
    await expect(page).toHaveURL(/\/stay/, { timeout: 15000 });
    await qa.settle();
    await qa.assertNoHorizontalOverflow();
    await expect(page.locator("#mobile-primary-navigation")).toBeHidden();
    await expect(page.getByRole("button", { name: /open navigation menu/i }).first()).toHaveAttribute("aria-expanded", "false");
    await qa.assertHealthyRuntime();
  });

  test("scroll-to-top appears and works", async ({ page, qa }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await qa.goto("/");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(800);
    const btn = page.locator('button[aria-label*="top" i], button:has-text("Top")').first();
    if (await btn.count()) {
      await expect(btn).toBeVisible();
      await btn.click();
      await expect.poll(async () => page.evaluate(() => window.scrollY), { timeout: 8000 }).toBeLessThan(250);
    } else {
      await qa.screenshot("scroll-bottom-no-top-button");
    }
  });

  test("internal links and external booking links have intended destinations", async ({ page, qa }) => {
    await qa.goto("/");
    const booking = page.locator('a[href*="booking.com"]').first();
    if (await booking.count()) {
      await expect(booking).toHaveAttribute("href", /booking\.com/);
      const target = await booking.getAttribute("target");
      expect(target === "_blank" || target === null).toBeTruthy();
    }
    const internal = page.locator('a[href^="/"]').first();
    await expect(internal).toBeVisible();
  });

  test("breadcrumbs navigate where present", async ({ page, qa }) => {
    await qa.goto("/experiences/dining");
    const candidates = page.locator('nav[aria-label*="breadcrumb" i], nav:has(a[href="/"])');
    let nav = candidates.first();
    let visibleBreadcrumb = false;
    for (let i = 0; i < await candidates.count(); i++) {
      const candidate = candidates.nth(i);
      const label = (await candidate.getAttribute("aria-label")) || "";
      if (/primary/i.test(label)) continue;
      if (await candidate.isVisible()) {
        nav = candidate;
        visibleBreadcrumb = true;
        break;
      }
    }
    if (visibleBreadcrumb) {
      await expect(nav).toBeVisible();
      const home = nav.getByRole("link", { name: /home/i }).first();
      if (await home.count()) {
        await home.click();
        await qa.settle();
        await expect(page).toHaveURL(/\/$/);
      }
    } else {
      await qa.screenshot("dining-no-breadcrumb");
    }
  });
});
