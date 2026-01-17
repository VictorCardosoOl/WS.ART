import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import FlashDay from './components/FlashDay';
import Footer from './components/Footer';
import Lenis from '@studio-freight/lenis';

const App: React.FC = () => {
  useEffect(() => {
    let lenis: Lenis | null = null;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    } catch (e) {
      console.warn("Lenis init failed, falling back to native scroll", e);
    }

    return () => {
      lenis?.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-stone-800 selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <FlashDay />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;