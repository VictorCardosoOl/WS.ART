import React from 'react';
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
import SmoothScroll from './components/layout/SmoothScroll';
import FluidGlass from './components/ui/FluidGlass';
import SectionTitle from './components/ui/SectionTitle';

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-accent selection:text-white w-full overflow-x-hidden bg-white relative">
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.04] bg-noise mix-blend-overlay"></div>
        
        <CustomCursor />
        <Navbar />
        
        <main className="flex-grow relative z-10">
          <Hero />
          
          <div className="relative z-20 bg-white shadow-[0_-50px_100px_rgba(255,255,255,1)]">
            <Portfolio />
            <About />
            <Process />
          </div>
          
          {/* Seção Interativa 3D - Imersão */}
          <section className="py-32 bg-[#FAF7F7] relative border-y border-stone-100/50 overflow-hidden">
            <div className="container mx-auto px-6 mb-20 relative z-10">
               <SectionTitle subtitle="Experiência" title="Imersão Visual" />
            </div>
            {/* Container 3D Isolado */}
            <div className="w-full h-[600px] md:h-[700px] relative rounded-3xl overflow-hidden mx-auto max-w-[95%] shadow-[inset_0_0_60px_rgba(117,69,72,0.05)] bg-[#E5D0D4]/10">
               <FluidGlass 
                  mode="lens" 
                  lensProps={{
                    scale: 1,
                    ior: 1.2,
                    thickness: 2,
                    chromaticAberration: 0.08,
                    anisotropy: 0.2
                  }}
               />
            </div>
          </section>

          <div className="relative z-20 bg-white">
            <FlashDay />
            <PreCare />
            <Testimonials />
            <FAQ />
            <BookingForm />
          </div>
        </main>
        
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;