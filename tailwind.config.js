/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      colors: {
        pantone: {
          skin: '#F2E8E9', 
          ink: '#1c1917',  
          accent: '#754548', 
          deep: '#4A3B3B'  
        },
        rose: {
          50: '#FAF7F7',   
          100: '#F2E8E9',  
          200: '#E5D0D4',
          300: '#D9A9B0',  
          400: '#BC8F8F', 
          500: '#A05F65', 
          600: '#8B4513',
          800: '#754548',  
          900: '#4A3B3B',  
        },
        stone: {
          850: '#1c1917',
          900: '#12100E',
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
        tighter: '-0.04em', // Slightly tighter for headlines
        tight: '-0.02em',
        normal: '0em',
        wide: '0.03em',
        wider: '0.08em',
        widest: '0.2em', 
        ultra: '0.35em', // More spacing for labels
      },
      fontSize: {
        'editorial-sm': ['10px', { lineHeight: '1.6', letterSpacing: '0.3em' }],
        'fluid-h2': 'clamp(2.5rem, 5vw, 4.5rem)',
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