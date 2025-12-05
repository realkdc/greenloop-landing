const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/og-image.svg');
const pngPath = path.join(__dirname, '../public/og-image.png');

// Read the SVG file
const svgBuffer = fs.readFileSync(svgPath);

// Convert SVG to PNG with exact dimensions
sharp(svgBuffer)
  .resize(1200, 630, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  })
  .png()
  .toFile(pngPath)
  .then(() => {
    console.log('✅ Successfully converted og-image.svg to og-image.png');
    console.log(`📁 Output: ${pngPath}`);
  })
  .catch((err) => {
    console.error('❌ Error converting image:', err);
    process.exit(1);
  });
