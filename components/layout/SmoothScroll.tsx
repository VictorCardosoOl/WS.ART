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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Sincroniza Lenis com ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Adiciona ao ticker do GSAP para garantir que rodem no mesmo frame
    // Isso evita o "jitter" (tremor) quando se usa parallax
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    // Desativa o lag smoothing do GSAP para evitar saltos durante carregamento pesado
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000)); // Limpeza correta
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