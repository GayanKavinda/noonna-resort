const fs = require('fs');
const html = fs.readFileSync('tmp/dining_page_ref.html', 'utf8');
function between(start, end) {
  const i = html.indexOf(start);
  if (i < 0) return '';
  const j = end ? html.indexOf(end, i + start.length) : html.length;
  return j < 0 ? html.slice(i) : html.slice(i, j);
}
fs.writeFileSync('tmp/hero_ref.html', between('<!-- 3. HERO', '<!-- 2. QUICK VITALS BENTO BAR'));
fs.writeFileSync('tmp/vitals_ref.html', between('<!-- 2. QUICK VITALS BENTO BAR', '<section class="w-full bg-white border-t border-slate-100 pt-12 pb-4 pb-12" id="dining-directory">'));
fs.writeFileSync('tmp/dir_head_ref.html', between('<section class="w-full bg-white border-t border-slate-100 pt-12 pb-4 pb-12" id="dining-directory">', '<!-- Card 1: Lucky Fort -->'));
fs.writeFileSync('tmp/cards_grid_ref.html', between('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" id="dining-cards-grid">', '<!-- Card 10: Salty Swamis -->'));
fs.writeFileSync('tmp/card10_ref.html', between('<!-- Card 10: Salty Swamis -->', '</section><div aria-modal="true"'));
fs.writeFileSync('tmp/modal_ref.html', between('<div aria-modal="true"', '<script>/* Dining detail modal interactions */'));
fs.writeFileSync('tmp/modal_script_ref.js', between('<script>/* Dining detail modal interactions */', '</script><section class="w-full bg-white border-t border-slate-200/80 py-16">') + '</script>');
fs.writeFileSync('tmp/prefooter_ref.html', between('<section class="w-full bg-white border-t border-slate-200/80 py-16">', '</section></div></main>') + '</section>');
console.log('done');
