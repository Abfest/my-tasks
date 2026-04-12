const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const filePath = path.join(process.cwd(), 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = html.replace('FIREBASE_API_KEY_PLACEHOLDER', process.env.FIREBASE_API_KEY || '');
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
};
