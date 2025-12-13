#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, '../public/images');
const outputDir = join(__dirname, '../public/images');

async function optimizeImages() {
  try {
    const files = await readdir(imagesDir);
    const pngFiles = files.filter(file => extname(file).toLowerCase() === '.png');

    console.log(`Found ${pngFiles.length} PNG files to optimize...\n`);

    for (const file of pngFiles) {
      const inputPath = join(imagesDir, file);
      const baseName = basename(file, '.png');
      const outputPath = join(outputDir, `${baseName}.webp`);
      const blurDataPath = join(outputDir, `${baseName}-blur.txt`);

      console.log(`Converting: ${file}...`);

      // Convert to WebP with high quality
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      // Generate blur placeholder (base64)
      const blurBuffer = await sharp(inputPath)
        .resize(10, 10, { fit: 'inside' })
        .webp({ quality: 20 })
        .toBuffer();

      const blurDataURL = `data:image/webp;base64,${blurBuffer.toString('base64')}`;

      // Get file sizes
      const inputStats = await stat(inputPath);
      const outputStats = await stat(outputPath);

      console.log(`  ✓ ${file} -> ${baseName}.webp`);
      console.log(`  Size: ${(inputStats.size / 1024).toFixed(0)}KB -> ${(outputStats.size / 1024).toFixed(0)}KB`);
      console.log(`  Reduction: ${Math.round((1 - outputStats.size / inputStats.size) * 100)}%\n`);
    }

    console.log('✅ All images optimized!');
    console.log('\nNext steps:');
    console.log('1. Update image paths in your code from .png to .webp');
    console.log('2. Add blur placeholders to Next.js Image components');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

optimizeImages();
