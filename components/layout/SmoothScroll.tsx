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
    // Awwwards-tier configurations
    const lenis = new Lenis({
      lerp: 0.07, // The "weight" - lower is heavier/luxurious. 0.05-0.1 range.
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9, // Slightly de-tuned for control
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Integate into GSAP's Ticker for high-performance rendering (60-120fps)
    // We use the exact time provided by GSAP to ensure perfect sync
    const update = (time: number, deltaTime: number, frame: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Crucial: Disconnect lag smoothing to prevent GSAP from "jumping" during heavy load
    // This maintains the physics flow even if the main thread hits a snag
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="w-full min-h-screen">
      {children}
    </div>
  );
};

export default SmoothScroll;