import { test, expect } from "../fixtures/base";
import type { Page } from "@playwright/test";
import { emulateNoPreferenceMotion, emulateReducedMotion } from "../helpers/motion";

async function waitForStableState(page: Page) {
  await page.waitForTimeout(300);
  await page.waitForLoadState("domcontentloaded");
}

async function assertMainContentVisible(page: Page) {
  await expect(page.locator("main h1, main h2, main [role='heading']").first()).toBeVisible();
  const stuck = await page.evaluate(() => {
    const inViewport = (el: Element) => {
      const r = el.getBoundingClientRect();
      return r.bottom > 0 && r.top < window.innerHeight && r.right > 0 && r.left < window.innerWidth;
    };
    const nodes = Array.from(document.querySelectorAll("main h1, main h2, main h3, main p, main a, main button, main li")) as HTMLElement[];
    let checked = 0;
    let transparent = 0;
    for (const el of nodes) {
      const text = (el.textContent || "").trim();
      if (!text) continue;
      if (!inViewport(el)) continue;
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden") continue;
      if (el.closest('[aria-hidden="true"]')) continue;
      checked++;
      if (Number(cs.opacity) === 0) transparent++;
      if (checked >= 80) break;
    }
    return { checked, transparent };
  });
  expect(stuck.checked, "expected in-viewport main content").toBeGreaterThan(0);
  expect(stuck.transparent, `found ${stuck.transparent}/${stuck.checked} transparent in-viewport elements`).toBe(0);
}

async function exercisePageBasics(page: Page, qa: { assertNoHorizontalOverflow: () => Promise<void>; assertHealthyRuntime: (opts?: { allowHydrationWarnings?: boolean }) => Promise<void>; screenshot: (name: string) => Promise<unknown> }, label: string) {
  await expect(page.locator("main").first()).toBeVisible();
  // trigger scroll-based reveals progressively
  await page.evaluate(async () => {
    const step = Math.max(300, Math.floor(window.innerHeight * 0.8));
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await waitForStableState(page);
  await page.waitForTimeout(450);
  await assertMainContentVisible(page);
  await qa.assertNoHorizontalOverflow();
  await qa.assertHealthyRuntime();
  await qa.screenshot(label);
}

const representative = [
  "/",
  "/stay",
  "/experiences",
  "/experiences/dining",
  "/experiences/southern-heritage-coastal-expeditions",
  "/experiences/midigama-beach",
  "/gallery",
  "/contact",
  "/privacy",
  "/terms",
];

test.describe("phase-10.5.11 motion and reduced-motion", () => {
  for (const mode of ["no-preference", "reduce"] as const) {
    test.describe(mode, () => {
      for (const route of representative) {
        test(`${route} reveals/content visible and stable`, async ({ page, qa }, testInfo) => {
          if (mode === "reduce") await emulateReducedMotion(page); else await emulateNoPreferenceMotion(page);
          await qa.goto(route);
          await waitForStableState(page);
          await exercisePageBasics(page, qa, `${testInfo.project.name}-${route.replace(/\W+/g, "-") || "home"}-${mode}`);

          if (mode === "reduce" && route === "/") {
            const videoState = await page.evaluate(() => {
              const v = document.querySelector("video") as HTMLVideoElement | null;
              if (!v) return { present: false };
              return { present: true, paused: v.paused, loop: v.loop, autoplay: v.autoplay };
            });
            if (videoState.present) {
              expect(videoState.paused, "hero video should be paused under reduced motion").toBeTruthy();
            }
          }
        });
      }
    });
  }

  test("home hero + stagger content visible (no-preference)", async ({ page, qa }) => {
    await emulateNoPreferenceMotion(page);
    await qa.goto("/");
    await expect(page.getByRole("heading", { name: /Your Quiet Escape/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Book Your Stay/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Explore the Stay/i }).first()).toBeVisible();
    await qa.assertHealthyRuntime();
  });

  test("home hero + stagger content visible (reduced)", async ({ page, qa }) => {
    await emulateReducedMotion(page);
    await qa.goto("/");
    await expect(page.getByRole("heading", { name: /Your Quiet Escape/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Book Your Stay/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Explore the Stay/i }).first()).toBeVisible();
    await qa.assertHealthyRuntime();
  });

  test("header dropdown + mobile menu interactions (no-preference)", async ({ page, qa }, testInfo) => {
    await emulateNoPreferenceMotion(page);
    await qa.goto("/");
    if (/mobile/i.test(testInfo.project.name)) {
      const open = page.getByRole("button", { name: /open navigation menu/i }).first();
      await open.click();
      await expect(page.locator("#mobile-primary-navigation")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.locator("#mobile-primary-navigation")).toBeHidden();
    } else {
      await page.setViewportSize({ width: 1440, height: 900 });
      await qa.goto("/");
      const btn = page.getByRole("button", { name: /^Experiences$/i }).first();
      await btn.click();
      await expect(btn).toHaveAttribute("aria-expanded", "true");
      await page.keyboard.press("Escape");
      await expect(btn).toHaveAttribute("aria-expanded", "false");
    }
    await qa.assertHealthyRuntime();
  });

  test("header dropdown + mobile menu interactions (reduced)", async ({ page, qa }, testInfo) => {
    await emulateReducedMotion(page);
    await qa.goto("/");
    if (/mobile/i.test(testInfo.project.name)) {
      const open = page.getByRole("button", { name: /open navigation menu/i }).first();
      await open.click();
      await expect(page.locator("#mobile-primary-navigation")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.locator("#mobile-primary-navigation")).toBeHidden();
    } else {
      await page.setViewportSize({ width: 1440, height: 900 });
      await qa.goto("/");
      const btn = page.getByRole("button", { name: /^Experiences$/i }).first();
      await btn.click();
      await expect(btn).toHaveAttribute("aria-expanded", "true");
      await page.keyboard.press("Escape");
      await expect(btn).toHaveAttribute("aria-expanded", "false");
    }
    await qa.assertHealthyRuntime();
  });

  test("scroll-to-top works (no-preference)", async ({ page, qa }) => {
    await emulateNoPreferenceMotion(page);
    await qa.goto("/");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(900);
    const btn = page.locator('button[aria-label="Scroll to top"]');
    await expect(btn).toBeVisible();
    await btn.click();
    await expect.poll(async () => page.evaluate(() => window.scrollY), { timeout: 8000 }).toBeLessThan(300);
    await qa.assertHealthyRuntime();
  });

  test("scroll-to-top works (reduced)", async ({ page, qa }) => {
    await emulateReducedMotion(page);
    await qa.goto("/");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(400);
    const btn = page.locator('button[aria-label="Scroll to top"]');
    await expect(btn).toBeVisible();
    await btn.click();
    await expect.poll(async () => page.evaluate(() => window.scrollY), { timeout: 8000 }).toBeLessThan(300);
    await qa.assertHealthyRuntime();
  });

  for (const mode of ["no-preference", "reduce"] as const) {
    test(`FAQ accordion functional (${mode})`, async ({ page, qa }) => {
      if (mode === "reduce") await emulateReducedMotion(page); else await emulateNoPreferenceMotion(page);
      await qa.goto("/contact");
      const accordionButtons = page.locator('section button[aria-expanded]');
      const btn = accordionButtons.filter({ hasText: /check|policy|pet|cancel|child|age|booking/i }).first();
      await expect(btn).toBeVisible();
      const expandedBefore = await btn.getAttribute("aria-expanded");
      await btn.click();
      await page.waitForTimeout(mode === "reduce" ? 100 : 350);
      await expect.poll(async () => btn.getAttribute("aria-expanded")).not.toBe(expandedBefore);
      await qa.assertHealthyRuntime();
    });

    test(`gallery lightbox functional (${mode})`, async ({ page, qa }) => {
      if (mode === "reduce") await emulateReducedMotion(page); else await emulateNoPreferenceMotion(page);
      await qa.goto("/gallery");
      const item = page.locator("#gallery-grid .gallery-item").first();
      await expect(item).toBeVisible();
      await item.click();
      const dialog = page.locator("#gallery-lightbox[role='dialog']");
      await expect(dialog).toBeVisible();
      expect(await page.evaluate(() => document.body.style.overflow)).toBe("hidden");
      await page.keyboard.press("Escape");
      await expect(dialog).toBeHidden({ timeout: 5000 });
      await qa.assertHealthyRuntime();
    });

    test(`dining modal functional (${mode})`, async ({ page, qa }) => {
      if (mode === "reduce") await emulateReducedMotion(page); else await emulateNoPreferenceMotion(page);
      await qa.goto("/experiences/dining");
      await page.locator(".dining-card").first().click();
      const dialog = page.locator('[role="dialog"][aria-modal="true"]').first();
      await expect(dialog).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(dialog).toBeHidden({ timeout: 5000 });
      await qa.assertHealthyRuntime();
    });

    test(`destination discover carousel functional (${mode})`, async ({ page, qa }) => {
      if (mode === "reduce") await emulateReducedMotion(page); else await emulateNoPreferenceMotion(page);
      await qa.goto("/experiences/midigama-beach");
      const next = page.getByRole("button", { name: /Next destinations/i }).first();
      await expect(next).toBeVisible();
      await next.click();
      await page.waitForTimeout(400);
      await page.getByRole("button", { name: /Previous destinations/i }).first().click();
      await qa.assertHealthyRuntime();
    });

    test(`southern heritage nearby beaches carousel functional (${mode})`, async ({ page, qa }) => {
      if (mode === "reduce") await emulateReducedMotion(page); else await emulateNoPreferenceMotion(page);
      await qa.goto("/experiences/southern-heritage-coastal-expeditions");
      const next = page.getByRole("button", { name: /Next beaches/i }).first();
      await expect(next).toBeVisible();
      await next.click();
      await page.waitForTimeout(400);
      await qa.assertHealthyRuntime();
    });
  }
});
