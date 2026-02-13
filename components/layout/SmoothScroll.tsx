import React, { useLayoutEffect, useState, useContext, createContext } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useLayoutEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    });

    setLenisInstance(lenis);

    // 2. Sync with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Sync with GSAP Ticker (Optimized: External function reference for cleanup)
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // 4. Lag Smoothing
    gsap.ticker.lagSmoothing(500, 16);

    // 5. Cleanup
    return () => {
      gsap.ticker.remove(update); // Correct removal using function reference
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      <div className="w-full min-h-screen">
        {children}
      </div>
    </LenisContext.Provider>
  );
};

export default SmoothScroll;