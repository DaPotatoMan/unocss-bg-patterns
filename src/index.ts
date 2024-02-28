import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'
import { parseColor } from 'unocss/preset-mini'
import type { Preset } from 'unocss'
import svgToBas64 from 'mini-svg-data-uri'
import patterns from './patterns'

export function presetBGPatterns(): Preset {
  return {
    name: 'unocss-bg-patterns',
    rules: [
      [
        /^bg-(.+)$/,
        ([, rule], { theme }) => {
          const [name, color, size] = rule.split('-')
          const pattern = patterns[name]
          const parsed = parseColor(color || '', theme)

          if (pattern && parsed) {
            const opacity = +(parsed.opacity || 100) / 100
            const svg = pattern(parsed.color, opacity, size)
            const base64 = `url("${svgToBas64(svg)}"); /** ${svg} */`

            return {
              'background-image': base64,
            }
          }
        },
      ],
    ],

    presets: [
      presetHeroPatterns(),
    ],
  }
}
