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

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Restaura o comportamento padrão de rolagem manual ao atualizar
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {/* GLOBAL NOISE OVERLAY - TEXTURE PILLAR */}
      <div className="fixed inset-0 w-full h-full bg-noise opacity-[0.04] z-[90] pointer-events-none mix-blend-overlay"></div>

      <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-sophisticated selection:text-white w-full overflow-x-hidden bg-black">
        <CustomCursor />
        <Navbar />
        
        {/* MAIN CONTENT WRAPPER - NEEDS BACKGROUND AND Z-INDEX > FOOTER */}
        <main className="relative z-10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-[800px] md:mb-[600px] rounded-b-[40px] overflow-hidden">
          <Hero />
          
          <Portfolio />
          {/* Transition: White to Pink Light */}
          <div className="w-full h-32 bg-gradient-to-b from-white to-[#FDF7F8]" />
          
          <About />
          {/* Transition: Pink Light to Pink Medium */}
          <div className="w-full h-32 bg-gradient-to-b from-[#FDF7F8] to-pantone-skin" />
          
          <Process />
          
          <FlashDay />
          
          <PreCare />
          
          <Testimonials />
          
          <FAQ />
          
          <BookingForm />
          
          {/* Spacer for bottom curve before footer */}
          <div className="h-24 bg-white"></div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default App;