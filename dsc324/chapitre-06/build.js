const pptxgen = require('pptxgenjs');
const fs = require('fs');
const notes = require('./notes.js');
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.333 x 7.5 in
pres.title = 'DSC 324 — Chapitre 6 — Synthèse et révision, mi-parcours';
const imgs = fs.readdirSync('jpg').filter(f => f.endsWith('.jpg')).sort();
if (imgs.length !== notes.length) throw new Error(`pages ${imgs.length} != notes ${notes.length}`);
imgs.forEach((f, i) => {
  const s = pres.addSlide();
  s.addImage({ path: 'jpg/' + f, x: 0, y: 0, w: 13.333, h: 7.5 });
  s.addNotes(notes[i]);
});
pres.writeFile({ fileName: 'DSC324-Chapitre-06-Colossyan.pptx' }).then(f => console.log('wrote', f));
