// Hello World
const http = require('http');
const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, '../public/essence-royalle.png');
const b64 = fs.readFileSync(imgPath).toString('base64');

const html = `<!DOCTYPE html>
<html>
<head><title>Process Essence Royalle Logo</title></head>
<body>
<canvas id="c"></canvas>
<script>
window.addEventListener('load', async () => {
  const img = new Image();
  img.src = 'data:image/png;base64,${b64}';
  await img.decode();
  
  const w = img.width;
  const h = img.height;
  const cx = w / 2;
  const cy = h / 2;
  
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;
  
  // Find outer gold ring radius
  // Scan diagonally and cardinally
  let maxR = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const dist = Math.hypot(x - cx, y - cy);
      // Gold border pixel or dark content
      if (dist > maxR && (r < 238 || g < 238 || b < 238)) {
        maxR = dist;
      }
    }
  }

  // Create clean transparent circular clipped logo (nominal 150x150, upscaled to 600x600 for razor sharpness)
  const scale = 4;
  const outCanvas = document.createElement('canvas');
  outCanvas.width = w * scale;
  outCanvas.height = h * scale;
  const octx = outCanvas.getContext('2d');
  octx.imageSmoothingEnabled = true;
  octx.imageSmoothingQuality = 'high';
  
  octx.save();
  octx.beginPath();
  octx.arc(cx * scale, cy * scale, (maxR + 0.5) * scale, 0, Math.PI * 2);
  octx.closePath();
  octx.clip();
  octx.drawImage(img, 0, 0, w * scale, h * scale);
  octx.restore();
  
  const cleanDataUrl = outCanvas.toDataURL('image/png');
  
  // Also slice parts:
  // 1. Seal (upper circle with leaves): y from 0 to ~90
  const sealCanvas = document.createElement('canvas');
  sealCanvas.width = 120 * scale;
  sealCanvas.height = 85 * scale;
  const sctx = sealCanvas.getContext('2d');
  sctx.drawImage(outCanvas, (cx - 60) * scale, 10 * scale, 120 * scale, 85 * scale, 0, 0, 120 * scale, 85 * scale);
  const sealDataUrl = sealCanvas.toDataURL('image/png');
  
  // 2. Typography: "ESSENCE ROYALLE" y from ~85 to ~135
  const textCanvas = document.createElement('canvas');
  textCanvas.width = 130 * scale;
  textCanvas.height = 45 * scale;
  const tctx = textCanvas.getContext('2d');
  tctx.drawImage(outCanvas, (cx - 65) * scale, 82 * scale, 130 * scale, 45 * scale, 0, 0, 130 * scale, 45 * scale);
  const textDataUrl = textCanvas.toDataURL('image/png');

  // Send to server
  await fetch('/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      width: w,
      height: h,
      maxR,
      cleanDataUrl,
      sealDataUrl,
      textDataUrl
    })
  });
  
  document.body.innerHTML = '<h1>PROCESSED SUCCESSFULLY</h1>';
});
</script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const data = JSON.parse(body);
      const b64Clean = data.cleanDataUrl.split(',')[1];
      fs.writeFileSync(path.join(__dirname, '../public/essence-royalle-clean.png'), Buffer.from(b64Clean, 'base64'));
      
      const tsContent = `// Hello World
export interface EssenceLogoPart {
  id: string;
  name: string;
  x: number;
  y: number;
  w: number;
  h: number;
  dataUrl: string;
}

export const ESSENCE_ROYALLE_DATA = {
  viewBox: "0 0 150 150",
  width: 150,
  height: 150,
  fullDataUrl: "${data.cleanDataUrl}",
  sealDataUrl: "${data.sealDataUrl}",
  textDataUrl: "${data.textDataUrl}",
  goldColor: "#C59B27",
  emeraldColor: "#15803D",
};
`;
      const outDir = path.join(__dirname, '../app/data');
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'essenceLogoData.ts'), tsContent);
      console.log('ESSENCE_LOGO_SAVED_SUCCESSFULLY');
      
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
      setTimeout(() => process.exit(0), 1000);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3344, () => {
  console.log('Processor server listening on http://localhost:3344');
});
