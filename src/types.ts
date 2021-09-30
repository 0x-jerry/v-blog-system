import { JSDOM } from 'jsdom'

export interface BlogPlugin {
  beforeWriteHtml($: JSDOM, ctx: CurrentFileContext): void | Promise<void>
}

export interface CurrentFileContext {
  /**
   * 当前文件路径
   */
  file: string
  /**
   * 输出文件夹
   */
  outDir: string
}

export interface ViteBlogConfig {
  /**
   * @default `process.cwd()`
   */
  root: string
  /**
   * fast-glob
   */
  excludes: string[]
  /**
   *
   */
  outDir: string
  /**
   *
   */
  plugins: BlogPlugin[]
}
