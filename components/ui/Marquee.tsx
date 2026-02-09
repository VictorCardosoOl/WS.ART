import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MarqueeProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
  repeat?: number; // Quantas vezes repetir o texto para preencher a tela
}

const Marquee: React.FC<MarqueeProps> = ({ 
  children, 
  baseVelocity = 5, 
  className = "",
  repeat = 4 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Cria o loop infinito movendo o xPercent
      const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete: () => { tl.totalTime(tl.rawTime() + tl.duration() * 10); } // Seamless loop trick
      });

      tl.to(textRef.current, {
        xPercent: -50, // Move metade do caminho (pois duplicamos o conteúdo visualmente ou usamos repeat no render)
        duration: 20 / Math.abs(baseVelocity),
        ease: "none",
      });

      // Acelera com o Scroll (Physics effect)
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const scrollVel = self.getVelocity();
          // Ajusta a escala de tempo baseada na velocidade do scroll
          // Se o usuário scrollar rápido, o marquee acelera
          const timeScale = 1 + (Math.abs(scrollVel) / 500); 
          
          gsap.to(tl, { 
            timeScale: baseVelocity > 0 ? timeScale : -timeScale, 
            duration: 0.5, 
            overwrite: true 
          });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [baseVelocity]);

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap flex flex-nowrap ${className}`}>
      <div ref={textRef} className="flex flex-nowrap w-fit will-change-transform">
        {/* Renderiza múltiplas vezes para garantir o loop sem buracos */}
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex-shrink-0 flex items-center">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;