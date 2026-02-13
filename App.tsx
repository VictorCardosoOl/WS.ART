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
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <SmoothScroll>
        <ThemeController />
        <ScrollToTop />
        <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-accent selection:text-white w-full overflow-x-hidden relative transition-colors duration-700 bg-[#FAF7F7]">

          {/* 
             GLOBAL OPTIMIZED NOISE 
             Usa translate3d(0,0,0) para forçar aceleração de hardware.
             Reduz repaints em comparação a múltiplos overlays por seção.
          */}
          <div className="fixed inset-0 z-[9999] pointer-events-none mix-blend-overlay opacity-[0.06] overflow-hidden" style={{ transform: 'translate3d(0,0,0)' }}>
            <div className="absolute inset-0 w-full h-full bg-noise bg-repeat animate-grain will-change-transform"></div>
          </div>

          <CustomCursor />
          <Navbar />

          <main className="flex-grow relative z-10 w-full min-h-screen will-change-contents">
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
};

export default App;