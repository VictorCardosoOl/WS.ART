import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import SmoothScroll from './components/layout/SmoothScroll';
import ScrollToTop from './components/layout/ScrollToTop';
import Preloader from './components/ui/Preloader';
import AnimatedRoutes from './components/layout/AnimatedRoutes';

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
        <ScrollToTop />
        <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-accent selection:text-white w-full overflow-x-hidden bg-white relative">
          
          {/* Global Noise Overlay (Animated Texture) - OTIMIZADO */}
          {/* translate-z-0 e backface-invisible forçam a GPU a renderizar essa camada separadamente */}
          <div className="fixed inset-0 z-50 pointer-events-none mix-blend-overlay opacity-[0.07] overflow-hidden transform-gpu translate-z-0 backface-invisible">
             <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-noise animate-grain will-change-transform"></div>
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