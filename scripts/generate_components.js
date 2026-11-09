const fs = require("fs");
const { convertHtmlToJsx } = require("./convert_util");

function buildComponent(name, htmlFile, imports, extraProps = "") {
  let rawHtml = fs.readFileSync(`src/data/${htmlFile}`, "utf8");
  let jsxBody = convertHtmlToJsx(rawHtml);
  return `import React from "react";
import Link from "next/link";
${imports}

export default function ${name}(${extraProps}) {
  return (
    <>
      ${jsxBody}
    </>
  );
}

export { ${name} };
`;
}

// 1. ExperiencesHero.tsx
const heroImports = `import { Waves, Umbrella, Landmark, Utensils, Compass, ArrowRight, Info, ExternalLink } from "lucide-react";`;
fs.writeFileSync("src/components/sections/experiences/ExperiencesHero.tsx", buildComponent("ExperiencesHero", "ref_hero.html", heroImports));

// 2. NearbyBeachesSection.tsx
const beachesImports = `import { Waves, Umbrella, ArrowRight, ArrowUpRight, Info, ExternalLink } from "lucide-react";`;
fs.writeFileSync("src/components/sections/experiences/NearbyBeachesSection.tsx", buildComponent("NearbyBeachesSection", "ref_s1.html", beachesImports));

// 3. HeritageSection.tsx
const heritageImports = `import { Landmark, Compass, ArrowRight, ArrowUpRight, Info, ExternalLink } from "lucide-react";`;
fs.writeFileSync("src/components/sections/experiences/HeritageSection.tsx", buildComponent("HeritageSection", "ref_s2.html", heritageImports));

// 4. CulinarySpotlights.tsx
const diningImports = `import { Utensils, Star, ArrowRight, ArrowUpRight, Info, ExternalLink } from "lucide-react";`;
fs.writeFileSync("src/components/sections/experiences/CulinarySpotlights.tsx", buildComponent("CulinarySpotlights", "ref_s3.html", diningImports));

// 5. HotelSurroundings.tsx
const surroundingsImports = `import { Waves, Umbrella, Landmark, Utensils, Compass, Sparkles, Star, Info, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";`;
fs.writeFileSync("src/components/sections/experiences/HotelSurroundings.tsx", buildComponent("HotelSurroundings", "ref_surroundings.html", surroundingsImports));

// 6. CoastalMotion.tsx
const motionImports = `import { Play, ArrowRight, ArrowUpRight, Compass, Waves, Info, ExternalLink } from "lucide-react";`;
fs.writeFileSync("src/components/sections/experiences/CoastalMotion.tsx", buildComponent("CoastalMotion", "ref_motion.html", motionImports));

console.log("All 6 section components rebuilt with named + default exports and full icons!");
