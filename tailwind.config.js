/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./data/**/*.{js,ts,tsx}" // Garante que o Tailwind leia a pasta data
  ],
  // Safelist força o Tailwind a gerar essas classes mesmo que ele não as detecte explicitamente
  safelist: [
    {
      pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['md', 'lg'],
    },
    {
      pattern: /row-span-(1|2|3|4|5|6)/,
      variants: ['md', 'lg'],
    },
    'h-full',
    'w-full'
  ],
  theme: {
    extend: {
      colors: {
        pantone: {
          skin: '#F2E8E9',
          ink: '#2A2425',   // Soft Black / Deep Brownish Charcoal
          accent: '#8F5E62', // Lighter Dark Rose
          deep: '#4A3B3B'   // Deep Rose/Brown
        },
        rose: {
          50: '#FAF7F7',
          100: '#F2E8E9',
          200: '#E5D0D4',
          300: '#D9A9B0',
          400: '#BC8F8F',
          500: '#A05F65',
          600: '#8F5E62', // Matching accent
          800: '#754548',
          900: '#4A3B3B',
        },
        stone: {
          50: '#FAF7F7',  // Rose 50
          100: '#F5F5F5',
          200: '#E5D0D4', // Rose 200
          300: '#D9A9B0', // Rose 300
          400: '#BC8F8F', // Rose 400
          500: '#8F5E62', // Accent
          600: '#8F5E62', // Accent
          700: '#5c5253',
          800: '#2A2425', // Ink
          900: '#4A3B3B', // Deep Rose (Replaces Black)
          950: '#2A2425', // Ink
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.25em',
        ultra: '0.3em',
      },
      fontSize: {
        'editorial-sm': ['10px', { lineHeight: '1.6', letterSpacing: '0.3em' }],
        'fluid-h1': 'clamp(3rem, 8vw, 6rem)',
        'fluid-h2': 'clamp(2.5rem, 5vw, 4.5rem)',
        'fluid-h3': 'clamp(1.5rem, 3vw, 3rem)',
        'meta': ['10px', { lineHeight: '1.5', letterSpacing: '0.2em', fontWeight: '700' }],
      },
      lineHeight: {
        'tight-editorial': '0.9',
        'snug-editorial': '1.05',
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.05\"/%3E%3C/svg%3E')",
      },
      cursor: {
        none: 'none',
      }
    },
  },
  plugins: [],
}