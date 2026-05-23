import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        site: {
          bg:      '#faf7f3',
          surface: '#ffffff',
          beige:   '#e8d8cf',
          pink:    '#d8b8ad',
          blush:   '#f0e0d8',
          ink:     '#5f514b',
          muted:   '#8a7a72',
          faint:   '#b8a89e',
          rule:    '#eadfd8',
          accent:  '#caa093',
          pale:    '#f5ede8',
        },
      },
      fontFamily: {
        sans:   ['Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
        serif:  ['Shippori Mincho', 'Noto Serif JP', 'Georgia', 'serif'],
        script: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      maxWidth: {
        site: '1080px',
      },
    },
  },
  plugins: [],
}
export default config
