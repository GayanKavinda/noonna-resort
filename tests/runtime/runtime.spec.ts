import { test, expect } from "../fixtures/base";
import { ROUTES } from "../utils/routes";

test.describe("runtime checks", () => {
  for (const route of ROUTES.slice(0, 8)) {
    test(`${route.path} runtime/network basics`, async ({ qa }) => {
      const res = await qa.goto(route.path);
      expect([200, 304]).toContain(res!.status());
      await qa.assertHealthyRuntime();
      await qa.screenshot(`runtime-${route.name}`);
    });
  }
});
