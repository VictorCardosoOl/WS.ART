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
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-noise"></div>
        
        <CustomCursor />
        <Navbar />
        <main className="flex-grow relative z-10">
          <Hero />
          <Portfolio />
          <About />
          <Process />
          
          {/* Nova Seção de Imersão 3D */}
          <section className="py-24 bg-[#E5D0D4]/30 overflow-hidden relative border-y border-white">
            <div className="container mx-auto px-6 mb-12">
               <SectionTitle subtitle="Experiência" title="Imersão Visual" />
            </div>
            <div className="w-full h-[600px] md:h-[800px] relative rounded-3xl overflow-hidden mx-auto max-w-[95%] shadow-inner">
               <FluidGlass 
                  mode="lens" 
                  lensProps={{
                    scale: 0.15,
                    ior: 1.15,
                    thickness: 2,
                    chromaticAberration: 0.05,
                    anisotropy: 0.1
                  }}
               />
            </div>
          </section>

          <FlashDay />
          <PreCare />
          <Testimonials />
          <FAQ />
          <BookingForm />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;