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
          ink: '#1c1917',  // Warm Black
          accent: '#754548', // Vinho Sophisticated (Substituindo o rosa chiclete)
          deep: '#4A3B3B'  // Dark Brown/Rose
        },
        rose: {
          50: '#FAF7F7',   // Background Base
          100: '#F2E8E9',  // Light Ring
          200: '#E5D0D4',
          300: '#D9A9B0',  // Dark Ring
          400: '#BC8F8F', 
          500: '#A05F65', 
          600: '#8B4513',
          800: '#754548',  // Center Dark / Accent Principal
          900: '#4A3B3B',  // Textos Escuros
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
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.25em',
        'ultra': '0.35em',
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