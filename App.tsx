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
    // Configuração Premium do Lenis para sensação "Studio Freight"
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Scroll um pouco mais pesado/controlado
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Desativa scroll durante carregamento
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
    <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-accent selection:text-white w-full overflow-x-hidden bg-[#FAF7F7] relative">
      <Preloader onComplete={handlePreloaderComplete} />
      
      {/* Global Noise Overlay - Textura de papel/filme em todo o site */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.04] bg-noise mix-blend-overlay"></div>
      
      {/* Global Gradient Overlay sutil para atmosfera rosa */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#FAF7F7] via-transparent to-[#F2E8E9] opacity-60"></div>

      <CustomCursor />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <Portfolio />
        <About />
        {/* Nova Ordem Solicitada */}
        <Process />    {/* Pilares / Processo de Tatuagem */}
        <PreCare />    {/* Preparação (Invertido com FlashDay) */}
        <FlashDay />   {/* FlashDay */}
        <Testimonials />
        <BookingForm /> {/* Refatorado: "Inicie sua Jornada" */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;