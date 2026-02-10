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
      duration: 1.5, // Reduzido de 2.2 para 1.5 (Equilíbrio entre peso luxuoso e performance)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1, // Normalizado para 1 para evitar aceleração excessiva que causa pulos
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sincronização crítica entre Lenis e ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Integração com o Ticker do GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    // REMOVIDO: gsap.ticker.lagSmoothing(0)
    // Permitir o lagSmoothing padrão (500, 33) ajuda o GSAP a lidar com soluços de frame
    // sem tentar "pular" para a posição final instantaneamente.

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
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