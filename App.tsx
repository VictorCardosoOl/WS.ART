import React, { useEffect } from 'react';
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
import Lenis from 'lenis';

const App: React.FC = () => {
  useEffect(() => {
    // Configuração Premium do Lenis para Smooth Scroll Cinematográfico
    const lenis = new Lenis({
      duration: 1.8, // Duração maior para sensação de "peso" e luxo
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial suave
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9, // Controle fino da velocidade
      touchMultiplier: 2, // Melhora a resposta no mobile
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-accent selection:text-white w-full overflow-x-hidden bg-white relative">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-noise"></div>
      
      <CustomCursor />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <Portfolio />
        <About />
        <Process />
        <FlashDay />
        <PreCare />
        <Testimonials />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;