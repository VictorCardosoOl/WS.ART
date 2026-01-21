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

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-accent selection:text-white w-full overflow-x-hidden bg-white relative">
      <SmoothScroll>
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
      </SmoothScroll>
    </div>
  );
};

export default App;