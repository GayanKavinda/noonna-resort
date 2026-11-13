import { test, expect } from "../fixtures/base";

test.describe("smoke", () => {
  test("home loads, chrome launches, screenshot and runtime capture work", async ({ page, qa }) => {
    const response = await qa.goto("/");
    expect(response?.ok() || response?.status() === 304 || response?.status() === 200).toBeTruthy();
    await expect(page.locator("main, body").first()).toBeVisible();
    await qa.assertNoHorizontalOverflow();
    await qa.screenshot("home-smoke");
    await qa.assertHealthyRuntime();
  });
});
