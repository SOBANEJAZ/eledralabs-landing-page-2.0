const fs = require('fs');
const path = require('path');

const width = 1792;
const height = 480;
const outputPath = path.join(__dirname, 'public', 'backgrounds', 'products-hero-sprinkles.svg');

function mulberry32(seed) {
  return function () {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(0xE1ED42);
const random = (min, max) => min + rand() * (max - min);

function weightedY() {
  const t = rand();
  return height * Math.pow(t, 1.55);
}

function particleColor() {
  const roll = rand();
  if (roll > 0.992) return '#ff3b2f';
  if (roll > 0.84) return '#21cdb0';
  return '#0ea68f';
}

let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
  <defs>
    <radialGradient id="bg-left" cx="0%" cy="62%" r="26%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bg-right" cx="100%" cy="82%" r="22%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bg-blue" cx="90%" cy="28%" r="16%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft-blur" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="2.8"/>
    </filter>
    <filter id="big-blur" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="9"/>
    </filter>
    <linearGradient id="vignette" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.42"/>
      <stop offset="30%" stop-color="#000000" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#050505"/>
  <rect width="100%" height="100%" fill="url(#bg-left)"/>
  <rect width="100%" height="100%" fill="url(#bg-right)"/>
  <rect width="100%" height="100%" fill="url(#bg-blue)"/>
`;

const particleCount = 1150;

for (let i = 0; i < particleCount; i++) {
  const x = random(0, width);
  const y = weightedY();
  const large = rand() > 0.9;
  const radius = large ? random(1.8, 3.6) : random(0.35, 1.45);
  const opacity = large ? random(0.42, 0.82) : random(0.34, 0.74);
  const color = particleColor();
  const glowRadius = radius * (large ? random(3.6, 5.4) : random(1.7, 2.6));
  const glowOpacity = opacity * (large ? 0.22 : 0.1);

  svg += `  <circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${glowRadius.toFixed(2)}" fill="${color}" opacity="${glowOpacity.toFixed(3)}" filter="url(#soft-blur)"/>\n`;
  svg += `  <circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${radius.toFixed(2)}" fill="${color}" opacity="${opacity.toFixed(3)}"/>\n`;
}

svg += `  <circle cx="126" cy="286" r="114" fill="#f59e0b" opacity="0.06" filter="url(#big-blur)"/>
  <circle cx="1602" cy="404" r="122" fill="#f97316" opacity="0.06" filter="url(#big-blur)"/>
  <circle cx="1568" cy="176" r="92" fill="#2563eb" opacity="0.045" filter="url(#big-blur)"/>
  <rect width="100%" height="100%" fill="url(#vignette)"/>
</svg>
`;

fs.writeFileSync(outputPath, svg);
console.log(`Generated ${outputPath}`);
