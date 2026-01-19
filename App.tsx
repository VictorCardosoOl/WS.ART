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
import { ReactLenis } from '@studio-freight/react-lenis';

const App: React.FC = () => {
  const lenisOptions = {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial suave
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-accent selection:text-white w-full overflow-x-hidden bg-white">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">
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
    </ReactLenis>
  );
};

export default App;