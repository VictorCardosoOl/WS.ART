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
      duration: 1.8, // Aumentado para dar sensação de peso/luxo
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial suave
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9, // Reduzido ligeiramente para controle preciso
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sincroniza o Lenis com o ScrollTrigger do GSAP
    lenis.on('scroll', ScrollTrigger.update);

    // Injeta o Lenis no loop de renderização (Ticker) do GSAP
    // Isso garante que o scroll e as animações sejam calculados no mesmo frame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Desativa o lag smoothing do GSAP para evitar "pulos" visuais
    // quando o thread principal está ocupado, preferindo uma leve desaceleração
    // à descontinuidade visual.
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="w-full min-h-screen will-change-transform">
      {children}
    </div>
  );
};

export default SmoothScroll;