const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// MeadowsLeisureCentre
html = html.replace(
    /content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 0px;">Meadows<\/p><p style="font-size: 14px; font-weight: 500; margin-bottom: 8px; color: #475569;">Leisure Centre<\/p><p style="font-size: 20px; margin-bottom: 4px;">0151 288 6727<\/p>`/g,
    'content: `<p style="font-weight: 700; font-size: 24px; margin-bottom: 4px;">Meadows Leisure Centre</p><p style="font-size: 20px; margin-bottom: 4px;">0151 288 6727</p>`'
);

// ToiletLockBroken
html = html.replace(
    /font-family: 'Inter', sans-serif;/g,
    ''
);

// Remove colors
html = html.replace(/color: #[0-9a-fA-F]{3,6};?/g, '');
html = html.replace(/border([a-z-]*): (\dpx) (solid|dashed) #[0-9a-fA-F]{3,6};?/g, 'border$1: $2 $3 #000;');

fs.writeFileSync('index.html', html);
console.log("Replaced colors and fonts.");
