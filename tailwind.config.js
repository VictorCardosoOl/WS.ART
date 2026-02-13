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
          950: '#0c0a09', // Adicionado para o Footer Premium
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
        hand: ['"Reenie Beanie"', 'cursive'], // Fonte Handwritten adicionada
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)', 
        'cinema': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.03em',
        wider: '0.08em',
        widest: '0.25em', 
        ultra: '0.35em', 
      },
      fontSize: {
        'editorial-sm': ['10px', { lineHeight: '1.6', letterSpacing: '0.3em' }],
        'fluid-h2': 'clamp(2.5rem, 5vw, 4.5rem)',
      },
      lineHeight: {
        'tight-editorial': '0.9',
        'snug-editorial': '1.05',
        'luxury': '2.0', 
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.1\"/%3E%3C/svg%3E')",
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        }
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
      },
      cursor: {
        none: 'none',
      }
    },
  },
  plugins: [],
}