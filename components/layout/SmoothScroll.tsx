import React, { useLayoutEffect, useRef, createContext, useContext } from 'react';
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
    // Instanciação do Lenis com configurações otimizadas para performance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing clássico suave
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1, 
      touchMultiplier: 1.5, // Reduzido para evitar sensibilidade excessiva em trackpads
      infinite: false,
    });

    setLenisInstance(lenis);

    // Conecta o Lenis ao ScrollTrigger do GSAP
    // Isso garante que os cálculos de 'pin' e 'start/end' sejam exatos
    lenis.on('scroll', ScrollTrigger.update);

    // Integração profunda com o Ticker do GSAP
    // Isso faz com que o Scroll e as Animações rodem no mesmo frame (evita jitter)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Desativa a suavização de lag do GSAP para priorizar a resposta imediata do scroll
    gsap.ticker.lagSmoothing(0);

    // Força um recálculo inicial
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
        {/* O wrapper não precisa de ID específico para o Lenis funcionar, mas ajuda na estrutura */}
        <div className="w-full min-h-screen">
            {children}
        </div>
    </LenisContext.Provider>
  );
};

export default SmoothScroll;