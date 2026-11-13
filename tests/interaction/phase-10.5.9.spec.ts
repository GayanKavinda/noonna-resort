import { test, expect } from "../fixtures/base";

test.describe("phase-10.5.9 focused interactions", () => {
  test("desktop header: experiences dropdown open/escape/click-outside, scroll state, booking CTA", async ({ page, qa }, testInfo) => {
    test.skip(/mobile/i.test(testInfo.project.name), "desktop project");
    await page.setViewportSize({ width: 1440, height: 900 });
    await qa.goto("/");
    const header = page.locator("header").first();
    const expBtn = header.getByRole("button", { name: /^Experiences$/i }).first();
    await expect(expBtn).toBeVisible();
    await expect(expBtn).toHaveAttribute("aria-expanded", "false");

    await expBtn.click();
    await expect(expBtn).toHaveAttribute("aria-expanded", "true");
    await expect(header.locator('[role="menu"]')).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(expBtn).toHaveAttribute("aria-expanded", "false");

    await expBtn.click();
    await expect(expBtn).toHaveAttribute("aria-expanded", "true");
    await page.mouse.click(720, 420);
    await expect(expBtn).toHaveAttribute("aria-expanded", "false");

    const before = await header.evaluate((el) => getComputedStyle(el).backgroundColor);
    await page.mouse.wheel(0, 900);
    await page.waitForTimeout(450);
    const after = await header.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(after).not.toBe(before);

    const booking = header.getByRole("link", { name: /Book Your Stay/i }).first();
    await expect(booking).toHaveAttribute("href", /booking\.com\/hotel\/lk\/noonna-beach\.html/i);
    await expect(booking).toHaveAttribute("target", "_blank");
    await expect(booking).toHaveAttribute("rel", /noopener/);
    await qa.assertNoHorizontalOverflow();
    await qa.assertHealthyRuntime();
  });

  test("mobile header: menu open/close/escape, submenu, scroll lock, navigate", async ({ page, qa }, testInfo) => {
    test.skip(!/mobile/i.test(testInfo.project.name), "mobile project");
    await qa.goto("/");
    const openToggle = page.getByRole("button", { name: /open navigation menu/i }).first();
    const mobileNav = page.locator("#mobile-primary-navigation");
    await openToggle.click();
    await expect(mobileNav).toBeVisible();
    await expect(page.getByRole("button", { name: /close navigation menu/i }).first()).toHaveAttribute("aria-expanded", "true");
    expect(await page.evaluate(() => document.body.style.overflow)).toBe("hidden");

    const expToggle = mobileNav.getByRole("button", { name: /^Experiences$/i }).first();
    await expToggle.click();
    await expect(expToggle).toHaveAttribute("aria-expanded", "true");
    await expect(mobileNav.getByRole("link", { name: /Coastal Dining/i })).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(mobileNav).toBeHidden();
    expect(await page.evaluate(() => document.body.style.overflow)).not.toBe("hidden");

    await openToggle.click();
    await expect(mobileNav).toBeVisible();
    await mobileNav.getByRole("link", { name: /^Contact$/i }).first().click();
    await expect(page).toHaveURL(/\/contact/);
    await qa.settle();
    await expect(page.locator("#mobile-primary-navigation")).toBeHidden();
    await qa.assertNoHorizontalOverflow();
    await qa.assertHealthyRuntime();
  });

  test("scroll-to-top button appears and returns to top", async ({ page, qa }) => {
    await qa.goto("/");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(900);
    const btn = page.getByRole("button", { name: /scroll to top/i }).first();
    await expect(btn).toBeVisible();
    await btn.click();
    await expect.poll(async () => page.evaluate(() => window.scrollY), { timeout: 8000 }).toBeLessThan(300);
    await qa.assertHealthyRuntime();
  });

  test("contact: valid submit shows non-delivery notice; booking/map links safe", async ({ page, qa }) => {
    await qa.goto("/contact");
    await page.fill("#fullName", "QA Tester");
    await page.fill("#email", "qa@example.test");
    await page.fill("#message", "Automated interaction QA message for validation behavior.");
    await page.getByRole("button", { name: /^Send Message$/i }).click();
    const notice = page.getByRole("status").filter({ hasText: /Online message delivery is not configured yet/i }).first();
    await expect(notice).toBeVisible();
    await expect(notice).toContainText(/Booking\.com/i);
    await qa.screenshot("contact-non-delivery-notice");

    const booking = page.locator('a[href*="booking.com"]').first();
    await expect(booking).toHaveAttribute("href", /booking\.com\/hotel\/lk\/noonna-beach\.html/i);
    const maps = page.locator('a[href*="maps"]').first();
    if (await maps.count()) {
      await expect(maps).toHaveAttribute("target", "_blank");
      await expect(maps).toHaveAttribute("rel", /noopener/);
    }
    await qa.assertNoHorizontalOverflow();
    await qa.assertHealthyRuntime();
  });

  test("dining modal external actions have safe attrs", async ({ page, qa }) => {
    await qa.goto("/experiences/dining");
    await page.locator(".dining-card").first().click();
    const dialog = page.locator('[role="dialog"][aria-modal="true"]').first();
    await expect(dialog).toBeVisible();
    const dir = dialog.getByRole("link", { name: /Get Directions/i }).first();
    await expect(dir).toHaveAttribute("href", /google\.com\/maps/);
    await expect(dir).toHaveAttribute("target", "_blank");
    await expect(dir).toHaveAttribute("rel", /noopener/);
    const wa = dialog.getByRole("link", { name: /WhatsApp/i }).first();
    if (await wa.count()) {
      await expect(wa).toHaveAttribute("href", /wa\.me/);
      await expect(wa).toHaveAttribute("target", "_blank");
      await expect(wa).toHaveAttribute("rel", /noopener/);
    }
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden({ timeout: 5000 });
    await qa.assertHealthyRuntime();
  });

  test("gallery lightbox locks body scroll and caption syncs", async ({ page, qa }) => {
    await qa.goto("/gallery");
    await page.locator("#gallery-grid .gallery-item").first().click();
    const lightbox = page.locator("#gallery-lightbox[role='dialog']");
    await expect(lightbox).toBeVisible();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe("hidden");
    const t1 = ((await page.locator("#lightbox-title").textContent()) || "").trim();
    const c1 = ((await page.locator("#lightbox-caption").textContent()) || "").trim();
    await page.getByRole("button", { name: /Next Photo/i }).click();
    await page.waitForTimeout(350);
    const t2 = ((await page.locator("#lightbox-title").textContent()) || "").trim();
    const c2 = ((await page.locator("#lightbox-caption").textContent()) || "").trim();
    expect(t2.length + c2.length).toBeGreaterThan(0);
    expect(`${t1}|${c1}`).not.toBe(`${t2}|${c2}`);
    await page.keyboard.press("Escape");
    await expect(lightbox).toBeHidden({ timeout: 5000 });
    expect(await page.evaluate(() => document.body.style.overflow)).not.toBe("hidden");
    await qa.assertHealthyRuntime();
  });

  test("southern heritage nearby beaches carousel scrolls", async ({ page, qa }) => {
    await qa.goto("/experiences/southern-heritage-coastal-expeditions");
    const next = page.getByRole("button", { name: /Next beaches/i }).first();
    await expect(next).toBeVisible();
    await next.scrollIntoViewIfNeeded();
    const track = page.locator("div.overflow-x-auto").filter({ has: page.locator('h3:has-text("Midigama")') }).first();
    const before = await track.evaluate((el) => el.scrollLeft);
    await next.click();
    await expect.poll(async () => track.evaluate((el) => el.scrollLeft), { timeout: 5000 }).toBeGreaterThan(before);
    await qa.screenshot("southern-heritage-carousel-next");
    await qa.assertNoHorizontalOverflow();
    await qa.assertHealthyRuntime();
  });

  test("destination discover carousel controls and filter", async ({ page, qa }) => {
    await qa.goto("/experiences/midigama-beach");
    const next = page.getByRole("button", { name: /Next destinations/i }).first();
    await expect(next).toBeVisible();
    await next.scrollIntoViewIfNeeded();
    await next.click();
    await page.waitForTimeout(450);
    await page.getByRole("button", { name: /Previous destinations/i }).first().click();
    await page.waitForTimeout(450);
    const filter = page.getByRole("button", { name: /The Beaches & Surf Breaks/i }).first();
    if (await filter.count()) {
      await filter.click();
      await page.waitForTimeout(350);
      await qa.screenshot("destination-discover-filter-beaches");
    }
    await qa.assertNoHorizontalOverflow();
    await qa.assertHealthyRuntime();
  });
});
