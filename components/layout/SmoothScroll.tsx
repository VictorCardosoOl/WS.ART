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
    // Configuração de Física "Heavy/Luxurious"
    const lenis = new Lenis({
      duration: 1.5, // Aumentado para dar mais "peso" e inércia ao parar
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial suave
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9, // Reduzido levemente para exigir mais intenção no scroll
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Sincroniza Lenis com GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Integração no Ticker do GSAP para renderização de alta performance (60-120fps)
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    
    // Desativa lagSmoothing do GSAP para evitar saltos visuais durante cargas pesadas,
    // deixando o Lenis gerenciar a suavidade.
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