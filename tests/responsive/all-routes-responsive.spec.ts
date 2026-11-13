import { test, expect } from "../fixtures/base";
import { ROUTES } from "../utils/routes";
import { VIEWPORTS } from "../utils/viewports";
import { expectCommonPage } from "../helpers/assertions";

const PROJECT_TO_VIEWPORT: Record<string, string> = {
  "desktop-chrome": "desktop-1440x900",
  "laptop-chrome": "laptop-1280x800",
  "tablet-chrome": "tablet-768x1024",
  "mobile-chrome": "mobile-390x844",
  "small-mobile-chrome": "small-mobile-360x800",
};

test.describe("responsive screenshots", () => {
  for (const vp of VIEWPORTS) {
    test.describe(vp.name, () => {
      test.beforeEach(({}, testInfo) => {
        const expected = PROJECT_TO_VIEWPORT[testInfo.project.name];
        test.skip(expected !== vp.name, `Runs only in matching viewport project (${expected})`);
      });
      test.use({ viewport: { width: vp.width, height: vp.height } });
      for (const route of ROUTES) {
        test(`${route.path} @ ${vp.name}`, async ({ page, qa }) => {
          const response = await qa.goto(route.path);
          expect(response).toBeTruthy();
          expect([200, 304]).toContain(response!.status());
          await expectCommonPage(page, expect, { heading: route.expectedHeading });
          await qa.assertNoHorizontalOverflow();
          await qa.screenshot(`route-${route.name}-${vp.name}`);
          await qa.assertHealthyRuntime();
        });
      }
    });
  }
});
