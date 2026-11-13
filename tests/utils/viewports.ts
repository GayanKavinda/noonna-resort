export type ViewportDef = { name: string; width: number; height: number; mobile: boolean };

export const VIEWPORTS: ViewportDef[] = [
  { name: "desktop-1440x900", width: 1440, height: 900, mobile: false },
  { name: "laptop-1280x800", width: 1280, height: 800, mobile: false },
  { name: "tablet-768x1024", width: 768, height: 1024, mobile: true },
  { name: "mobile-390x844", width: 390, height: 844, mobile: true },
  { name: "small-mobile-360x800", width: 360, height: 800, mobile: true },
];
