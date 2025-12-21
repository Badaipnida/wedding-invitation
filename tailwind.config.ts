import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        traditional: {
          beige: '#F5F1E8',
          cream: '#FAF8F3',
          gold: '#D4AF37',
          brown: '#8B6F47',
          darkBrown: '#5C4A37',
          paper: '#F9F6F0',
        },
      },
      fontFamily: {
        serif: ['GounBatang', 'serif'],
        sans: ['GounBatang', 'serif'],
        korean: ['GounBatang', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config

