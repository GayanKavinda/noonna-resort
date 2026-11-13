import { test, expect } from "../fixtures/base";
import axe from "axe-core";
import type { AxeResults } from "axe-core";
import * as fs from "fs";
import * as path from "path";

const ROUTES = ["/", "/stay", "/experiences", "/experiences/dining", "/experiences/southern-heritage-coastal-expeditions", "/experiences/midigama-beach", "/gallery", "/contact", "/privacy", "/terms"];

async function runAxe(page: import("@playwright/test").Page): Promise<AxeResults> {
  await page.addScriptTag({ content: axe.source });
  return page.evaluate(async () => {
    // @ts-expect-error injected by axe.source
    return await window.axe.run(document, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] },
      resultTypes: ["violations", "incomplete"],
    }) as AxeResults;
  });
}

test.describe("phase-10.5.10 automated accessibility (axe-core 4.14.0)", () => {
  for (const route of ROUTES) {
    test(`axe ${route} @desktop`, async ({ page, qa }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await qa.goto(route);
      const results = await runAxe(page);
      const outDir = "test-results/phase-10.5.10/evidence";
      fs.mkdirSync(outDir, { recursive: true });
      const file = path.join(outDir, `axe${route.replace(/\//g, "_") || "_home"}-desktop.json`);
      fs.writeFileSync(file, JSON.stringify(results, null, 2));
      await qa.screenshot(`axe-${route.replace(/\W+/g,'-')||'home'}-desktop`);
      expect(results.violations, JSON.stringify(results.violations.map((v)=>({id:v.id,impact:v.impact,nodes:v.nodes.length,help:v.help})), null, 2)).toEqual([]);
    });

    test(`axe ${route} @mobile`, async ({ page, qa }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await qa.goto(route);
      const results = await runAxe(page);
      const outDir = "test-results/phase-10.5.10/evidence";
      fs.mkdirSync(outDir, { recursive: true });
      const file = path.join(outDir, `axe${route.replace(/\//g, "_") || "_home"}-mobile.json`);
      fs.writeFileSync(file, JSON.stringify(results, null, 2));
      await qa.screenshot(`axe-${route.replace(/\W+/g,'-')||'home'}-mobile`);
      expect(results.violations, JSON.stringify(results.violations.map((v)=>({id:v.id,impact:v.impact,nodes:v.nodes.length,help:v.help})), null, 2)).toEqual([]);
    });
  }
});
