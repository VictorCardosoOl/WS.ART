import React, { useLayoutEffect, useRef, createContext, useContext } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Contexto para expor a instância do Lenis para outros componentes (como a Navbar)
const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenisInstance, setLenisInstance] = React.useState<Lenis | null>(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing suave
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // Sincronização com ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Integração com GSAP Ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    // Desativa lagSmoothing para evitar "pulos" visuais em scroll-driven animations
    gsap.ticker.lagSmoothing(0);

    // Garante que o ScrollTrigger recalcule posições após o carregamento inicial
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
        <div id="smooth-wrapper" className="w-full min-h-screen">
            {children}
        </div>
    </LenisContext.Provider>
  );
};

export default SmoothScroll;