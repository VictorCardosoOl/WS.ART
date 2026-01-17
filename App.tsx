import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import PreCare from './components/PreCare';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import FlashDay from './components/FlashDay';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  useEffect(() => {
    // Scroll to top on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    let lenis: Lenis | null = null;
    let reqId: number;

    try {
      lenis = new Lenis({
        duration: 1.5, // Slower, more elegant
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease out
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        touchMultiplier: 2,
        wheelMultiplier: 1,
      });

      function raf(time: number) {
        lenis?.raf(time);
        reqId = requestAnimationFrame(raf);
      }

      reqId = requestAnimationFrame(raf);
    } catch (e) {
      console.warn("Lenis failed to initialize. Native scroll will be used.", e);
    }

    return () => {
      lenis?.destroy();
      if (reqId) cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-accent selection:text-white w-full overflow-x-hidden bg-white cursor-none">
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
  );
};

export default App;