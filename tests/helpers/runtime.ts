import type { Page, Request, ConsoleMessage } from "@playwright/test";

export type RuntimeCollector = {
  consoleErrors: string[];
  pageErrors: string[];
  failedRequests: { url: string; failure: string; method: string; resourceType: string }[];
  badResponses: { url: string; status: number; method: string; resourceType: string }[];
};

export function attachRuntimeCollectors(page: Page): RuntimeCollector {
  const data: RuntimeCollector = { consoleErrors: [], pageErrors: [], failedRequests: [], badResponses: [] };

  page.on("console", (msg: ConsoleMessage) => {
    if (msg.type() === "error") {
      const loc = msg.location();
      const where = loc?.url ? ` (${loc.url}:${loc.lineNumber}:${loc.columnNumber})` : "";
      data.consoleErrors.push(`${msg.type()}: ${msg.text()}${where}`);
    }
  });
  page.on("pageerror", (err) => data.pageErrors.push(String(err?.stack || err)));
  page.on("requestfailed", (req: Request) => {
    data.failedRequests.push({
      url: req.url(),
      failure: req.failure()?.errorText || "unknown",
      method: req.method(),
      resourceType: req.resourceType(),
    });
  });
  page.on("response", (res) => {
    const status = res.status();
    if (status >= 400) {
      const req = res.request();
      data.badResponses.push({ url: res.url(), status, method: req.method(), resourceType: req.resourceType() });
    }
  });
  return data;
}

const IGNORABLE_CONSOLE = [
  /favicon/i,
  /Download the React DevTools/i,
  /Fast Refresh/i,
  /HMR/i,
  /\[HMR\]/i,
];

const KNOWN_MISSING_LOCAL_ASSETS = [
  /\/videos\/home-hero\.mp4/i,
];

const THIRD_PARTY_OR_EMBED = /google|googleusercontent|gstatic|booking\.com|youtube|instagram|maps\.google|googletagmanager|doubleclick|facebook|hotjar|cloudinary/i;

function isKnownMissingLocal(text: string) {
  return KNOWN_MISSING_LOCAL_ASSETS.some((re) => re.test(text));
}

function isIgnorableConsole(text: string) {
  return IGNORABLE_CONSOLE.some((re) => re.test(text));
}

function isFailedResourceConsole(text: string) {
  return /Failed to load resource/i.test(text);
}

function isThirdPartyUrl(text: string) {
  return THIRD_PARTY_OR_EMBED.test(text);
}

export function filterUnexpectedConsole(errors: string[]) {
  return errors.filter((e) => {
    if (isIgnorableConsole(e) || isKnownMissingLocal(e)) return false;
    // Browser logs resource/network/embed failures for broken third-party assets (remote 4xx, CORS, decode, etc.).
    // Treat these as external environment/content issues, not app JS/runtime defects, while keeping app-origin issues visible.
    if (isThirdPartyUrl(e) && /(Failed to load resource|blocked by CORS policy|Access to image|net::ERR_|Cross-Origin)/i.test(e)) return false;
    if (isFailedResourceConsole(e) && isThirdPartyUrl(e)) return false;
    return true;
  });
}

export function filterUnexpectedFailedRequests(reqs: RuntimeCollector["failedRequests"]) {
  return reqs.filter(
    (r) => !THIRD_PARTY_OR_EMBED.test(r.url) && !KNOWN_MISSING_LOCAL_ASSETS.some((re) => re.test(r.url)),
  );
}

export function filterUnexpectedBadResponses(resps: RuntimeCollector["badResponses"]) {
  return resps.filter((r) => {
    if (KNOWN_MISSING_LOCAL_ASSETS.some((re) => re.test(r.url))) return false;
    if (r.status === 404 && /favicon|\.map(\?|$)/i.test(r.url)) return false;
    // external embeds/third-party can be flaky or contain broken remote assets; record but avoid hard-failing
    if (THIRD_PARTY_OR_EMBED.test(r.url)) return false;
    return true;
  });
}

export function classifiedRuntimeIssues(data: RuntimeCollector) {
  const externalResourceConsole = data.consoleErrors.filter(
    (e) => isFailedResourceConsole(e) && isThirdPartyUrl(e) && !isKnownMissingLocal(e),
  );
  return {
    knownMissingLocalAssets: [
      ...data.consoleErrors.filter((e) => isKnownMissingLocal(e)),
      ...data.failedRequests.filter((r) => isKnownMissingLocal(r.url)).map((r) => `requestfailed: ${r.url} (${r.failure})`),
      ...data.badResponses.filter((r) => isKnownMissingLocal(r.url)).map((r) => `response ${r.status}: ${r.url}`),
    ],
    externalResourceIssues: [
      ...externalResourceConsole,
      ...data.failedRequests.filter((r) => isThirdPartyUrl(r.url) && !isKnownMissingLocal(r.url)).map((r) => `requestfailed: ${r.url} (${r.failure})`),
      ...data.badResponses.filter((r) => isThirdPartyUrl(r.url) && !isKnownMissingLocal(r.url)).map((r) => `response ${r.status}: ${r.url}`),
    ],
  };
}
