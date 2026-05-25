const fs = require('fs');

const width = 1920;
const height = 1080;
const numParticles = 4000;

const themes = [
  { name: 'solutions', color: '#3b82f6' }, // Blue
  { name: 'products', color: '#10b981' },  // Emerald
  { name: 'contact', color: '#ef4444' },   // Red
  { name: 'faq', color: '#a855f7' }        // Purple
];

themes.forEach(theme => {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="glow-${theme.name}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${theme.color}" stop-opacity="0.95"/>
        <stop offset="40%" stop-color="${theme.color}" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="${theme.color}" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="glow-dim-${theme.name}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${theme.color}" stop-opacity="0.7"/>
        <stop offset="100%" stop-color="${theme.color}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="#030303"/>
  `;

  for (let i = 0; i < numParticles; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = Math.random() * 3 + 1.0;
    const gradient = Math.random() > 0.3 ? `url(#glow-${theme.name})` : `url(#glow-dim-${theme.name})`;
    
    if (Math.random() > 0.98) {
       svg += `<circle cx="${x}" cy="${y}" r="${r * 2}" fill="url(#glow-${theme.name})" />\n`;
    } else {
       svg += `<circle cx="${x}" cy="${y}" r="${r}" fill="${gradient}" />\n`;
    }
  }

  // Subtler glows for the background using the theme color
  svg += `<circle cx="20%" cy="30%" r="300" fill="${theme.color}" opacity="0.03" filter="blur(40px)" />`;
  svg += `<circle cx="80%" cy="70%" r="400" fill="${theme.color}" opacity="0.02" filter="blur(50px)" />`;
  
  svg += `</svg>`;
  
  fs.writeFileSync(`backgrounds/sprinkle-${theme.name}.svg`, svg);
});

console.log('4 colored SVGs generated successfully.');
