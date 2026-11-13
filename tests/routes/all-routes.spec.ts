import { test, expect } from "../fixtures/base";
import { ROUTES } from "../utils/routes";
import { expectCommonPage } from "../helpers/assertions";

test.describe("route coverage", () => {
  for (const route of ROUTES) {
    test(`${route.path} renders core content`, async ({ page, qa }) => {
      const response = await qa.goto(route.path);
      expect(response, `No response for ${route.path}`).toBeTruthy();
      const status = response!.status();
      expect([200, 304]).toContain(status);
      await expectCommonPage(page, expect, { heading: route.expectedHeading });
      await qa.assertNoHorizontalOverflow();
      await qa.assertHealthyRuntime();
    });
  }
});
