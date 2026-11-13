export type RouteDef = {
  path: string;
  name: string;
  expectedHeading: RegExp | string;
  group: "core" | "experiences" | "destination" | "legal";
};

export const ROUTES: RouteDef[] = [
  { path: "/", name: "home", expectedHeading: /noonna|beach|resort|kumbalgama/i, group: "core" },
  { path: "/stay", name: "stay", expectedHeading: /stay|accommodation|retreat|villa|resort/i, group: "core" },
  { path: "/experiences", name: "experiences", expectedHeading: /experience|discover|explore/i, group: "experiences" },
  { path: "/experiences/dining", name: "dining", expectedHeading: /dining|culinary|taste|restaurant/i, group: "experiences" },
  { path: "/experiences/southern-heritage-coastal-expeditions", name: "southern-heritage", expectedHeading: /heritage|expedition|sanctuar/i, group: "experiences" },
  { path: "/experiences/midigama-beach", name: "midigama-beach", expectedHeading: /midigama/i, group: "destination" },
  { path: "/experiences/abimanagama-beach", name: "abimanagama-beach", expectedHeading: /abimanagama/i, group: "destination" },
  { path: "/experiences/weligama-beach", name: "weligama-beach", expectedHeading: /weligama/i, group: "destination" },
  { path: "/experiences/ahangama-beach", name: "ahangama-beach", expectedHeading: /ahangama/i, group: "destination" },
  { path: "/experiences/lazy-left-surf-break", name: "lazy-left-surf-break", expectedHeading: /lazy left/i, group: "destination" },
  { path: "/experiences/rams-right-surf-break", name: "rams-right-surf-break", expectedHeading: /rams/i, group: "destination" },
  { path: "/experiences/awee-coco-secret-pool", name: "awee-coco-secret-pool", expectedHeading: /awee|coco|secret pool/i, group: "destination" },
  { path: "/experiences/secret-jungle-beach", name: "secret-jungle-beach", expectedHeading: /secret jungle|jungle beach/i, group: "destination" },
  { path: "/experiences/polhena-beach-coral-reef", name: "polhena-beach-coral-reef", expectedHeading: /polhena|coral/i, group: "destination" },
  { path: "/experiences/secret-beach-mirissa", name: "secret-beach-mirissa", expectedHeading: /secret beach|mirissa/i, group: "destination" },
  { path: "/experiences/coconut-tree-hill", name: "coconut-tree-hill", expectedHeading: /coconut/i, group: "destination" },
  { path: "/experiences/parrot-rock", name: "parrot-rock", expectedHeading: /parrot/i, group: "destination" },
  { path: "/experiences/mirissa-coastal-promontory", name: "mirissa-coastal-promontory", expectedHeading: /mirissa|promontory/i, group: "destination" },
  { path: "/gallery", name: "gallery", expectedHeading: /gallery|moments|photo/i, group: "core" },
  { path: "/contact", name: "contact", expectedHeading: /contact|get in touch|inquir/i, group: "core" },
  { path: "/privacy", name: "privacy", expectedHeading: /privacy/i, group: "legal" },
  { path: "/terms", name: "terms", expectedHeading: /terms/i, group: "legal" },
];

export const DESTINATION_ROUTES = ROUTES.filter((r) => r.group === "destination");
