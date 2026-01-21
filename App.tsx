import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Process from './components/sections/Process';
import PreCare from './components/sections/PreCare';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import BookingForm from './components/sections/BookingForm';
import FlashDay from './components/sections/FlashDay';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';
import Lenis from 'lenis';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Configuração Otimizada: Menos "peso", mais fluidez
    const lenis = new Lenis({
      duration: 1.2, // Reduzido de 1.5 para sensação mais ágil
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0, // Aumentado para scroll mais natural (menos arrastado)
      touchMultiplier: 2,
      infinite: false,
    });

    if (loading) {
        lenis.stop();
        document.body.style.overflow = 'hidden';
    } else {
        lenis.start();
        document.body.style.overflow = 'auto';
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  const handlePreloaderComplete = () => {
      setLoading(false);
  };

  return (
    <div className="min-h-screen font-sans text-stone-900 selection:bg-[#754548] selection:text-white w-full overflow-x-hidden bg-[#FAF7F7] relative">
      <Preloader onComplete={handlePreloaderComplete} />
      
      {/* Global Noise Overlay - Textura de papel Fine Art */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.06] bg-noise mix-blend-multiply"></div>
      
      {/* Vignette Sutil para foco central */}
      <div className="fixed inset-0 z-[9998] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.03)_100%)]"></div>

      <CustomCursor />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <Portfolio />
        <About /> 
        <Process />
        <PreCare />
        <FlashDay />
        <Testimonials />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;