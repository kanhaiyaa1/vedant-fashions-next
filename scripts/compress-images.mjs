import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join } from 'path'

const IMAGES_DIR = './public/images'
const MAX_WIDTH = 1200
const QUALITY = 80

async function compressDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      await compressDir(fullPath)
      continue
    }
    const ext = entry.name.split('.').pop()?.toLowerCase()
    if (!['jpg','jpeg','png'].includes(ext ?? '')) continue
    const before = (await stat(fullPath)).size
    await sharp(fullPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(fullPath + '.tmp')
    const { rename } = await import('fs/promises')
    await rename(fullPath + '.tmp', fullPath)
    const after = (await stat(fullPath)).size
    console.log(`${entry.name}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB`)
  }
}

await compressDir(IMAGES_DIR)
console.log('Done.')
