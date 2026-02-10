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
  // Estado para controlar a exibição do Preloader
  const [loading, setLoading] = useState(true);

  // Fallback de segurança caso a animação falhe (timeout de 5s)
  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* O Preloader deve estar fora do SmoothScroll para não ser afetado pelo transform */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <SmoothScroll>
        <ThemeController />
        <ScrollToTop />
        <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-accent selection:text-white w-full overflow-x-hidden relative transition-colors duration-700">
          
          {/* Global Noise Overlay (Static) */}
          <div className="fixed inset-0 z-50 pointer-events-none mix-blend-overlay opacity-[0.05] overflow-hidden transform-gpu translate-z-0">
             <div className="absolute inset-0 w-full h-full bg-noise bg-repeat"></div>
          </div>
          
          <CustomCursor />
          <Navbar />
          
          {/* Main Content com Rotas Animadas */}
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