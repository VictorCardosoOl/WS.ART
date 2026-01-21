import React, { useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    // 1. Initialize Lenis with "Luxury" settings
    const lenis = new Lenis({
      duration: 1.2, // Heavy feeling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // 2. Synchronize Lenis with GSAP ScrollTrigger
    // Tell ScrollTrigger to update every time Lenis scrolls
    lenis.on('scroll', ScrollTrigger.update);

    // Override GSAP's generic ticker to inject Lenis's RAF
    // This ensures animations and scroll are on the exact same frame clock
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's internal lag smoothing to prevent stutter on heavy load
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Cleanup
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <div id="smooth-wrapper">{children}</div>;
};

export default SmoothScroll;