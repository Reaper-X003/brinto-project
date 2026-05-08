const fs = require('fs');
const path = require('path');
const pFiles = fs.readdirSync('src/assets/portfolio').filter(f => !f.startsWith('.'));
const tFiles = fs.readdirSync('src/assets/testimonials').filter(f => !f.startsWith('.'));

let code = `import logoImg from '../assets/logo/logo.png';
import heroImg from '../assets/hero.png';
import aboutImg from '../assets/about/photographer.jpg';

`;

pFiles.forEach((f, i) => {
  code += `import p${i} from '../assets/portfolio/${f}';\n`;
});
tFiles.forEach((f, i) => {
  code += `import t${i} from '../assets/testimonials/${f}';\n`;
});

code += `\nexport const images = {
  logo: logoImg,
  hero: heroImg,
  about: aboutImg,
  portfolio: {\n`;

const cats = ['wedding', 'events', 'cultural', 'portrait', 'commercial'];
const chunk = Math.ceil(pFiles.length / 5);
cats.forEach((cat, idx) => {
  const slice = pFiles.slice(idx * chunk, (idx + 1) * chunk).map((_, i) => `p${idx * chunk + i}`);
  code += `    ${cat}: [${slice.join(', ')}],\n`;
});

code += `  },
  featured: [p0, p1, p2],\n`;

code += `  certificates: [${tFiles.map((_, i) => `t${i}`).slice(0, 3).join(', ')}],\n`;
code += `  clients: [${tFiles.map((_, i) => `t${i}`).join(', ')}]\n};\n`;

fs.writeFileSync('src/data/images.ts', code);
console.log("Written images.ts!");
