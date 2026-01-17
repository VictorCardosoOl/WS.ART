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
    // Scroll to top on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    let lenis: Lenis | null = null;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
      console.warn("Lenis failed to initialize. Native scroll will be used.", e);
    }

    return () => {
      lenis?.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-stone-800 selection:bg-rose-200 selection:text-rose-900 w-full overflow-hidden">
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