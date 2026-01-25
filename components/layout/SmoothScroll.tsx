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
    // Duration mais alta (1.5) cria a sensação de peso/inércia ao parar o scroll.
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing suave
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Multiplicador menor exige gestos mais intencionais
      touchMultiplier: 1.5, // Toque suave em mobile
    });

    lenisRef.current = lenis;

    // Sincroniza o ScrollTrigger do GSAP com o Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Integração no Ticker do GSAP (loop de renderização)
    // Isso garante que animações e scroll aconteçam no mesmo frame (60/120fps)
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    
    // Desativa lagSmoothing.
    // O lagSmoothing do GSAP tenta compensar quedas de frame pulando animações.
    // Em scroll suave, preferimos que tudo flua contínuo, mesmo sob carga.
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