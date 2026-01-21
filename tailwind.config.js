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
          skin: '#FAF7F7',    // Base clara (Papel)
          soft: '#F2E8E9',    // Rosa muito suave
          medium: '#E5D0D4',  // Rosa médio
          accent: '#754548',  // Vinho/Seco (Cor Primária de Destaque)
          dark: '#4A3B3B',    // Marrom Escuro (Substituto do Preto duro)
          ink: '#1c1917',     // Preto Tinta
        },
        rose: {
          50: '#FAF7F7',   
          100: '#F5E6E8',  
          200: '#EBCFD4',
          300: '#D9A9B0',  
          400: '#BC8F8F', 
          500: '#A05F65', 
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
        hand: ['"Caveat"', 'cursive'], // Added Handwritten font
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.25em',
        'ultra': '0.3em',
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.07\"/%3E%3C/svg%3E')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(to bottom, #FAF7F7, #F2E8E9)',
      },
      cursor: {
        none: 'none',
      }
    },
  },
  plugins: [],
}