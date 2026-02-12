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
    // 1. Instanciação do Lenis otimizada
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    setLenisInstance(lenis);

    // 2. Sincronização Lenis <-> ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // 3. Loop de animação unificado
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // 4. Configurações de performance do GSAP
    gsap.ticker.lagSmoothing(0); // Evita pulos visuais em momentos de carga alta

    // 5. Força refresh após montar para recalcular posições
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      setLenisInstance(null);
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