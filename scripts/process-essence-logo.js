// Hello World
const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, '../public/essence-royalle.png');
const b64 = fs.readFileSync(imgPath).toString('base64');

const html = `<!DOCTYPE html>
<html>
<head><title>Process Logo</title></head>
<body>
<canvas id="c"></canvas>
<script>
window.processImage = async () => {
  const img = new Image();
  img.src = 'data:image/png;base64,${b64}';
  await img.decode();
  const c = document.getElementById('c');
  c.width = img.width;
  c.height = img.height;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  const cx = img.width / 2;
  const cy = img.height / 2;
  const imgData = ctx.getImageData(0, 0, img.width, img.height);
  const data = imgData.data;
  
  let maxR = 0;
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      const idx = (y * img.width + x) * 4;
      const r = data[idx];
      const g = data[idx+1];
      const b = data[idx+2];
      const dist = Math.hypot(x - cx, y - cy);
      if (dist > maxR && (r < 235 || g < 235 || b < 235)) {
        maxR = dist;
      }
    }
  }

  const cleanCanvas = document.createElement('canvas');
  cleanCanvas.width = img.width;
  cleanCanvas.height = img.height;
  const cctx = cleanCanvas.getContext('2d');
  cctx.imageSmoothingEnabled = true;
  cctx.imageSmoothingQuality = 'high';
  
  cctx.beginPath();
  cctx.arc(cx, cy, maxR + 0.5, 0, Math.PI * 2);
  cctx.closePath();
  cctx.clip();
  cctx.drawImage(img, 0, 0);
  
  return {
    width: img.width,
    height: img.height,
    cx,
    cy,
    maxR,
    dataUrl: cleanCanvas.toDataURL('image/png')
  };
};
</script>
</body>
</html>`;

const outDir = path.join(__dirname, '../scratch');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'process.html'), html);
console.log('Generated scratch/process.html successfully');
