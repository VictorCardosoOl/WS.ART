import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from './SplitText';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        }
      });

      // Bloqueia o scroll durante o preloader
      document.body.style.overflow = 'hidden';

      // 1. Entrada do Texto
      tl.to(".preloader-char", {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
      });

      // 2. Contador fictício ou barra de carregamento sutil
      tl.to(percentRef.current, {
        opacity: 1,
        duration: 0.5
      }, "-=0.5");

      // 3. Saída do Texto (Fade Out + Blur)
      tl.to([textContainerRef.current, percentRef.current], {
        opacity: 0,
        filter: "blur(10px)",
        y: -30,
        duration: 0.8,
        ease: "power2.in",
        delay: 0.8 // Tempo de leitura
      });

      // 4. A Cortina Sobe (Reveal do Site)
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.5,
        ease: "power4.inOut",
        onStart: () => {
            // Libera o scroll um pouco antes de terminar a animação para fluidez
            setTimeout(() => {
                document.body.style.overflow = '';
            }, 500);
        }
      });

      // 5. Cleanup visual (opcional, remove do DOM logicamente via display none se não desmontar)
      tl.set(containerRef.current, { display: "none" });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#12100E] flex flex-col items-center justify-center text-[#F2E8E9] w-full h-full"
    >
      <div ref={textContainerRef} className="overflow-hidden mb-4 relative z-10">
        <h1 className="font-serif text-3xl md:text-5xl italic font-light tracking-wide text-center leading-tight">
          <SplitText 
            charClass="preloader-char opacity-0 translate-y-full" 
            wordClass="overflow-hidden py-2"
          >
            A pele como tela eterna.
          </SplitText>
        </h1>
      </div>

      <div ref={percentRef} className="absolute bottom-12 right-12 opacity-0">
          <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-stone-500">
              William Siqueira Art © 2024
          </span>
      </div>

      {/* Grain Overlay Específico do Preloader */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-noise animate-grain mix-blend-overlay"></div>
    </div>
  );
};

export default Preloader;