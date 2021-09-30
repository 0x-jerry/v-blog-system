import { BlogPlugin } from '../types'
import path from 'path'

/**
 * 修正图片链接
 */
export const changeImageSrcPlugin: BlogPlugin = {
  beforeWriteHtml($, { file, outFile }) {
    $.window.document.querySelectorAll('img').forEach(($img) => {
      const src = $img.src

      if (/^https?:\/\//.test(src)) return

      const abs = path.resolve(path.parse(file).dir, src)
      const outDir = path.parse(outFile).dir
      const relativeSrc = path.relative(outDir, abs)
      $img.src = relativeSrc
    })
  },
}
