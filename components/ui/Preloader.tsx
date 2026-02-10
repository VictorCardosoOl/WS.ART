import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import SplitText from './SplitText';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  
  // Estado local apenas para garantir renderização, o valor é controlado via DOM/GSAP
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Bloqueia o scroll durante a entrada
      document.body.style.overflow = 'hidden';
      
      const tl = gsap.timeline({
        onComplete: () => {
          // Desbloqueia scroll e desmonta
          document.body.style.overflow = '';
          onComplete();
        }
      });

      // 1. Animação do Contador (0 a 100)
      const counterObj = { value: 0 };
      tl.to(counterObj, {
        value: 100,
        duration: 2.5, // Tempo de "carregamento" simulado
        ease: "power2.out",
        onUpdate: () => {
          if (percentRef.current) {
            percentRef.current.textContent = Math.round(counterObj.value).toString();
          }
        }
      });

      // 2. Animação do Texto de Intro (Entrada)
      tl.to(".preloader-char", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out"
      }, "<"); // Começa junto com o contador

      // 3. Saída dos Elementos Internos (Fade Out e Slide Up leve)
      tl.to([".preloader-text", ".preloader-counter"], {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.in",
        delay: 0.2
      });

      // 4. THE GRAND ENTRANCE (A Cortina Sobe)
      tl.to(containerRef.current, {
        yPercent: -100, // Desliza todo o container para cima
        duration: 1.5,
        ease: "power4.inOut", // Curva "pesada" e elegante
      }, "-=0.2"); // Começa um pouco antes do fade out terminar

      // 5. Cleanup (Display none para garantir que não bloqueie clicks se algo falhar)
      tl.set(containerRef.current, { display: "none" });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#12100E] flex flex-col items-center justify-center text-[#F2E8E9] w-full h-full"
    >
      {/* Container Central do Texto */}
      <div className="preloader-text overflow-hidden mb-4 relative z-10 px-6">
        <h1 className="font-serif text-3xl md:text-5xl italic font-light tracking-wide text-center leading-tight mix-blend-difference">
          <SplitText 
            charClass="preloader-char opacity-0 translate-y-full inline-block" 
            wordClass="overflow-hidden py-2 inline-block"
          >
            A pele como tela eterna.
          </SplitText>
        </h1>
      </div>

      {/* Contador no Canto Inferior Direito */}
      <div className="preloader-counter absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-end gap-1 overflow-hidden">
          <span 
            ref={percentRef} 
            className="font-serif text-6xl md:text-8xl leading-none text-[#754548] opacity-80"
          >
            0
          </span>
          <span className="font-sans text-sm md:text-base font-bold tracking-widest mb-2 md:mb-3 text-stone-500">
            %
          </span>
      </div>

      {/* Assinatura no Canto Inferior Esquerdo */}
      <div className="preloader-counter absolute bottom-8 left-8 md:bottom-12 md:left-12 opacity-50">
          <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-stone-600">
              William Siqueira © 2024
          </span>
      </div>

      {/* Grain Overlay para Textura */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-noise animate-grain mix-blend-overlay"></div>
    </div>
  );
};

export default Preloader;