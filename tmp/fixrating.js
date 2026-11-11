const fs=require('fs');
const s=fs.readFileSync('src/data/diningData.ts','utf8');
const i=s.indexOf('export const DINING_VENUES');
const j=s.indexOf(' = ', i) + 3;
const arrStr = s.slice(j).replace(/;\s*$/,'');
const v=JSON.parse(arrStr);
const map={
  'lucky-fort':{rating:'4.5',rev:'(1,950 TripAdvisor Reviews)'},
  'shirani':{rating:'4.8',rev:'(288 Google • 4.7★ 172 TripAdvisor)'},
  'kumbala':{rating:'4.7',rev:'(47 Google Reviews • #47 in Weligama)'},
  'mettha':{rating:'4.8',rev:'(210 Reviews • Traditional Sri Lankan)'},
  'le-fish':{rating:'4.7',rev:'(1,453 Reviews • #5 in Weligama)'},
  'sithum':{rating:'4.9',rev:'(268 Reviews • 270 Online Ratings)'},
  'after-surf':{rating:'4.8',rev:'(95 Reviews • 5.0 TripAdvisor)'},
  'kerabujen':{rating:'4.5',rev:'(110 Reviews • 5.0 TripAdvisor)'},
  'aloha':{rating:'4.8',rev:'(310 Reviews • 4.6 TripAdvisor)'},
  'salty-swamis':{rating:'4.9',rev:'(520 Reviews • 4.8 TripAdvisor 670 reviews)'},
};
for(const x of v){
  const m=map[x.id]; if(!m) continue;
  x.rating=m.rating; x.reviews=m.rev;
  if(x.modal){ x.modal.rating=m.rating; x.modal.reviews=m.rev; }
}
const out=s.slice(0,j)+JSON.stringify(v,null,2)+';\n';
fs.writeFileSync('src/data/diningData.ts', out, 'utf8');
console.log('ok');
