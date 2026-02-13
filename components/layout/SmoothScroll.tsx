import React, { useLayoutEffect, createContext, useContext } from 'react';
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
  const [lenisInstance, setLenisInstance] = React.useState<Lenis | null>(null);

  useLayoutEffect(() => {
    // Configuração OTIMIZADA para sensação "Luxury/Heavy" (Lass Tattoo vibe)
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Scroll um pouco mais "pesado" para dar tempo de ler
      touchMultiplier: 2, 
      infinite: false,
    });

    setLenisInstance(lenis);

    lenis.on('scroll', ScrollTrigger.update);

    // Integração crucial com GSAP Ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Desativa lag smoothing para evitar saltos visuais em carregamentos pesados
    gsap.ticker.lagSmoothing(0);

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