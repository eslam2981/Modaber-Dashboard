const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../css/styles.css');
let content = fs.readFileSync(cssPath, 'utf8');

const sections = [
  'Navbar',
  'Header / Home',
  'Featured Properties',
  'Services',
  'Clients / Testimonials',
  'FAQ',
  'Contact',
  'Utilities / Typography'
];

let i = 0;
content = content.replace(/\/\* ======================================== \*\/\r?\n\r?\n\/\* ======================================== \*\//g, (match) => {
  if (i < sections.length) {
    const sectionName = sections[i];
    i++;
    return `/* ======================================== */\n/* ${sectionName} */\n/* ======================================== */`;
  }
  return match;
});

fs.writeFileSync(cssPath, content, 'utf8');
console.log('Sections restored!');
