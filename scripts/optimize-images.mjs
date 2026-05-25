import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("..", import.meta.url);
const sourceDir = new URL("../src/assets/source/", import.meta.url);
const assetsDir = new URL("../public/assets/", import.meta.url);

const heroSource = new URL("homecare-dental.png", sourceDir);
const logoSource = new URL("logo-icon.png", sourceDir);
const aboutLogoSource = new URL("logo-icon3.png", sourceDir);
const publicLogoOutput = new URL("../public/logo.png", import.meta.url);
const heroSourcePath = filePath(heroSource);
const logoSourcePath = filePath(logoSource);
const aboutLogoSourcePath = filePath(aboutLogoSource);

const heroWidths = [480, 768, 1024, 1280, 1600];
const logoWidths = [52, 104, 180];
const aboutLogoWidths = [360, 720];
const maxHeroBytes = 280 * 1024;
const maxLogoBytes = 20 * 1024;
const maxAboutLogoBytes = 80 * 1024;

function filePath(fileUrl) {
  return fileURLToPath(fileUrl);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KiB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MiB`;
}

async function sizeOf(fileUrl) {
  return (await stat(fileUrl)).size;
}

async function writeHeroDerivative(width, format) {
  const ext = format === "avif" ? "avif" : "webp";
  const output = new URL(`homecare-dental-${width}.${ext}`, assetsDir);
  const pipeline = sharp(heroSourcePath)
    .rotate()
    .resize({ width, withoutEnlargement: true });

  if (format === "avif") {
    pipeline.avif({ quality: 42, effort: 6 });
  } else {
    pipeline.webp({ quality: 72, effort: 6 });
  }

  await pipeline.toFile(filePath(output));
  return output;
}

async function writeLogoDerivative(width) {
  const output = new URL(`logo-icon-${width}.webp`, assetsDir);

  await sharp(logoSourcePath)
    .rotate()
    .resize({ width, height: width, fit: "contain", withoutEnlargement: true })
    .webp({ quality: 86, effort: 6 })
    .toFile(filePath(output));

  return output;
}

async function writeAboutLogoDerivative(width) {
  const output = new URL(`logo-icon3-${width}.webp`, assetsDir);

  await sharp(aboutLogoSourcePath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 84, effort: 6 })
    .toFile(filePath(output));

  return output;
}

async function writePublicLogo() {
  await sharp(logoSourcePath)
    .rotate()
    .resize({ width: 512, height: 512, fit: "contain", withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true })
    .toFile(filePath(publicLogoOutput));

  return publicLogoOutput;
}

async function main() {
  await mkdir(assetsDir, { recursive: true });

  const heroOriginalSize = await sizeOf(heroSource);
  const logoOriginalSize = await sizeOf(logoSource);
  const heroMetadata = await sharp(heroSourcePath).metadata();
  const logoMetadata = await sharp(logoSourcePath).metadata();

  console.log(
    `Hero source: ${path.relative(filePath(root), filePath(heroSource))} ` +
      `${heroMetadata.width}x${heroMetadata.height}, ${formatBytes(heroOriginalSize)}`,
  );
  console.log(
    `Logo source: ${path.relative(filePath(root), filePath(logoSource))} ` +
      `${logoMetadata.width}x${logoMetadata.height}, ${formatBytes(logoOriginalSize)}`,
  );

  const generated = [];

  for (const width of heroWidths) {
    generated.push(await writeHeroDerivative(width, "avif"));
    generated.push(await writeHeroDerivative(width, "webp"));
  }

  for (const width of logoWidths) {
    generated.push(await writeLogoDerivative(width));
  }

  for (const width of aboutLogoWidths) {
    generated.push(await writeAboutLogoDerivative(width));
  }

  generated.push(await writePublicLogo());

  console.log("\nGenerated image assets:");

  for (const file of generated) {
    const bytes = await sizeOf(file);
    const name = path.relative(filePath(root), filePath(file));
    console.log(`- ${name}: ${formatBytes(bytes)}`);

    if (name.includes("homecare-dental") && bytes > maxHeroBytes) {
      throw new Error(`${name} is too large: ${formatBytes(bytes)}`);
    }

    if (name.includes("logo-icon-") && bytes > maxLogoBytes) {
      throw new Error(`${name} is too large: ${formatBytes(bytes)}`);
    }

    if (name.includes("logo-icon3") && bytes > maxAboutLogoBytes) {
      throw new Error(`${name} is too large: ${formatBytes(bytes)}`);
    }
  }
}

await main();
