// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetBGPatterns } from '../src'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({ autoInstall: true }),
    presetAttributify(),
    presetBGPatterns(),
  ],

  transformers: [
    transformerVariantGroup(),
    transformerAttributifyJsx(),
    transformerDirectives(),
  ],
})
