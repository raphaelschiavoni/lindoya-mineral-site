const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IN = path.join(__dirname, "..", "public/images/logo-lindoya-mineral-completo.png");
const TMP = path.join(__dirname, "..", "public/images/.logo-tmp.png");

sharp(IN)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    const { width, height, channels } = info;
    let cleared = 0;
    for (let i = 0; i < data.length; i += channels) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      const avg = (r + g + b) / 3;
      const spread = Math.max(r, g, b) - Math.min(r, g, b);
      if (spread < 16) {
        if (avg > 244) {
          data[i + 3] = 0;
          cleared++;
        } else if (avg > 224) {
          data[i + 3] = Math.round(((244 - avg) / 20) * 255);
        }
      }
    }
    return sharp(data, { raw: { width, height, channels } })
      .png()
      .toFile(TMP)
      .then(() => ({ width, height, cleared }));
  })
  .then(({ width, height, cleared }) => {
    fs.renameSync(TMP, IN);
    console.log(`OK ${width}x${height}, pixels transparentes: ${cleared}`);
  })
  .catch((e) => {
    console.error("ERRO", e);
    process.exit(1);
  });
