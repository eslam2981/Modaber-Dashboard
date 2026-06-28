const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../css/styles.css');
let content = fs.readFileSync(cssPath, 'utf8');

content = content.replace(/\/\* =+ \*\/\r?\n\/\* (.*?) \*\/\r?\n\/\* =+ \*\//g, (match, sectionName) => {
  const nameLen = sectionName.length;
  const equals = '='.repeat(nameLen);
  return `/* ${equals} */\n/* ${sectionName} */\n/* ${equals} */`;
});

fs.writeFileSync(cssPath, content, 'utf8');
console.log('Equals signs adjusted!');
