import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import SmoothScroll from './components/layout/SmoothScroll';
import ScrollToTop from './components/layout/ScrollToTop';
import Preloader from './components/ui/Preloader';
import AnimatedRoutes from './components/layout/AnimatedRoutes';
import ThemeController from './components/layout/ThemeController';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* --- GLOBAL ARTISTIC FILTERS --- */}
      {/* Estes filtros SVG são referenciados via CSS (filter: url(#pencil)) para criar bordas trêmulas */}
      <svg className="fixed pointer-events-none opacity-0 w-0 h-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Filtro de Lápis (Rough Edge) */}
          <filter id="pencil-stroke">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>

          {/* Filtro de Papel (Texture) */}
          <filter id="paper-grain">
             <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise"/>
             <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="2">
                <feDistantLight azimuth="45" elevation="60" />
             </feDiffuseLighting>
          </filter>

          {/* Padrão de Hachura (Cross-hatching) para sombras de esboço */}
          <pattern id="hatch-pattern" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="4" height="8" transform="translate(0,0)" fill="#000000" opacity="0.1" />
          </pattern>
        </defs>
      </svg>

      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <SmoothScroll>
        <ThemeController />
        <ScrollToTop />
        <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-accent selection:text-white w-full overflow-x-hidden relative transition-colors duration-700">
          
          {/* Global Texture Paper Overlay */}
          <div className="fixed inset-0 z-50 pointer-events-none mix-blend-multiply opacity-[0.08] overflow-hidden transform-gpu translate-z-0"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")` }}>
          </div>
          
          <CustomCursor />
          <Navbar />
          
          <main className="flex-grow relative z-10 w-full min-h-screen">
             <AnimatedRoutes />
          </main>
          
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
};

export default App;