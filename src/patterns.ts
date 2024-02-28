interface Patterns {
  [key: string]: (color: string | undefined, opacity: number, size?: string | number) => string
}

export default {
  grid: (color, opacity, size = 32) => `<svg xmlns="http://www.w3.org/2000/svg" stroke="${color}" stroke-opacity="${opacity}" viewBox="0 0 32 32" width="${size}" height="${size}" fill="none"><path d="M0 .5H31.5V32"/></svg>`,
  dots: (color, opacity) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${color}" fill-opacity="${opacity}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
} as Patterns
