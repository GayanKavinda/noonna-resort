/* eslint-disable react-hooks/rules-of-hooks */
import { test as base, expect } from "@playwright/test";
import { attachRuntimeCollectors, type RuntimeCollector, filterUnexpectedConsole, filterUnexpectedFailedRequests, filterUnexpectedBadResponses, classifiedRuntimeIssues } from "../helpers/runtime";
import { captureScreenshot, attachJson } from "../helpers/evidence";
import { gotoRoute, hasHorizontalOverflow, waitForPageSettled } from "../helpers/navigation";

type Fixtures = {
  runtime: RuntimeCollector;
  qa: {
    goto: (route: string) => ReturnType<typeof gotoRoute>;
    settle: () => Promise<void>;
    screenshot: (label: string) => Promise<string>;
    assertNoHorizontalOverflow: () => Promise<void>;
    assertHealthyRuntime: (opts?: { allowHydrationWarnings?: boolean }) => Promise<void>;
    attachRuntime: () => Promise<void>;
  };
};

export const test = base.extend<Fixtures>({
  runtime: async ({ page }, use) => {
    const runtime = attachRuntimeCollectors(page);
    await use(runtime);
  },
  qa: async ({ page, runtime }, use, testInfo) => {
    const qa = {
      goto: (route: string) => gotoRoute(page, route),
      settle: () => waitForPageSettled(page),
      screenshot: (label: string) => captureScreenshot(page, testInfo, label),
      assertNoHorizontalOverflow: async () => {
        const r = await hasHorizontalOverflow(page);
        expect(r.overflow, `Horizontal overflow scrollW=${r.scrollW} clientW=${r.clientW}`).toBeFalsy();
      },
      assertHealthyRuntime: async (opts?: { allowHydrationWarnings?: boolean }) => {
        const consoleErrors = filterUnexpectedConsole(runtime.consoleErrors);
        const hydrationish = consoleErrors.filter((e) => /hydrat/i.test(e));
        const otherConsole = consoleErrors.filter((e) => !/hydrat/i.test(e));
        if (!opts?.allowHydrationWarnings) {
          expect(hydrationish, `Hydration-related console errors: ${JSON.stringify(hydrationish)}`).toEqual([]);
        }
        expect(otherConsole, `Console errors: ${JSON.stringify(otherConsole)}`).toEqual([]);
        expect(runtime.pageErrors, `Page errors: ${JSON.stringify(runtime.pageErrors)}`).toEqual([]);
        const failed = filterUnexpectedFailedRequests(runtime.failedRequests);
        expect(failed, `Unexpected failed requests: ${JSON.stringify(failed)}`).toEqual([]);
        const bad = filterUnexpectedBadResponses(runtime.badResponses);
        expect(bad, `Unexpected bad responses: ${JSON.stringify(bad)}`).toEqual([]);
      },
      attachRuntime: async () => {
        await attachJson(testInfo, "runtime", { ...runtime, classified: classifiedRuntimeIssues(runtime) });
      },
    };
    await use(qa);
    await qa.attachRuntime();
  },
});

export { expect };
