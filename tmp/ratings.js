const fs=require('fs');
const html=fs.readFileSync('tmp/dining_page_ref.html','utf8');
const ids=['lucky-fort','shirani','kumbala','mettha','le-fish','sithum','after-surf','kerabujen','aloha','salty-swamis'];
for(const id of ids){
  const i=html.indexOf('data-dining-id="'+id+'"');
  const j=id==='salty-swamis'?html.indexOf('</section><div aria-modal',i):html.indexOf('data-dining-id="',i+20);
  const b=html.slice(i,j>0?j:i+15000);
  const rm=b.match(/bg-amber-50[^>]*>\s*★\s*([0-9.]+)/);
  console.log(id, rm?rm[1]:'none');
}
