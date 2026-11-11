const fs=require('fs');
const s=fs.readFileSync('src/data/diningData.ts','utf8');
const i=s.indexOf('export const DINING_VENUES');
if(i<0) process.exit(1);
// replace variant for directions actions: "label": "Directions", ... "variant": "primary" -> "secondary"
// be careful only for directions
let out = s.replace(/("label":\s*"Directions",\s*"href":\s*"[^"]+",\s*"icon":\s*"directions",\s*)"variant":\s*"primary"/g, '$1"variant": "secondary"');
fs.writeFileSync('src/data/diningData.ts', out, 'utf8');
console.log('changed', out!==s);
