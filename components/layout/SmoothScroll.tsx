import React, { useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LenisContext = React.createContext<Lenis | null>(null);

export const useLenis = () => React.useContext(LenisContext);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const [lenisInstance, setLenisInstance] = React.useState<Lenis | null>(null);

  useLayoutEffect(() => {
    // Configuração ULTRA OTIMIZADA para performance máxima
    const lenis = new Lenis({
      duration: 0.8, // Reduzido para resposta mais rápida
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2, // Mais responsivo
      touchMultiplier: 2,
      infinite: false,
      autoResize: true, // Auto resize para evitar problemas
    });

    setLenisInstance(lenis);

    lenis.on('scroll', ScrollTrigger.update);

    // Integração com GSAP Ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Lag smoothing otimizado
    gsap.ticker.lagSmoothing(500, 16); // Suaviza lags até 500ms, 16ms por frame

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
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