import type { Page, TestInfo } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

export function safeName(input: string) {
  return input.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

export async function captureScreenshot(page: Page, testInfo: TestInfo, label: string) {
  const dir = path.join("test-results", "screenshots", safeName(testInfo.project.name), safeName(testInfo.titlePath.join("--")));
  await fs.promises.mkdir(dir, { recursive: true });
  const file = path.join(dir, `${safeName(label)}.png`);
  await page.screenshot({ path: file, fullPage: true });
  await testInfo.attach(safeName(label), { path: file, contentType: "image/png" });
  return file;
}

export async function attachJson(testInfo: TestInfo, name: string, data: unknown) {
  await testInfo.attach(name, { body: JSON.stringify(data, null, 2), contentType: "application/json" });
}
