import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className = "", priority = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !imgRef.current) return;

      // 1. Clip Path Reveal Animation (Abertura cinematográfica)
      // Começa com inset (bordas cortadas) e abre para full
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 95%", // Começa assim que entra na tela
        end: "center 60%", // Termina a abertura
        animation: gsap.fromTo(containerRef.current, 
          { clipPath: "inset(10% 5% 10% 5% round 10px)" },
          { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 1.5, ease: "power3.out" }
        ),
        toggleActions: "play none none reverse"
      });

      // 2. Parallax Effect (Movimento vertical da imagem dentro do container)
      gsap.fromTo(imgRef.current,
        { yPercent: -15, scale: 1.25 }, // Começa deslocado para cima e com zoom
        {
          yPercent: 15, // Termina deslocado para baixo
          scale: 1.25, // Mantém o zoom
          ease: "none", // Linear, pois é controlado pelo scrub
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom", // Quando o topo do container entra na base da tela
            end: "bottom top", // Quando o fundo do container sai do topo da tela
            scrub: 1.2 // Scrub suave com leve inércia
          }
        }
      );

      // 3. Overlay Fade (Profundidade)
      if (overlayRef.current) {
         gsap.fromTo(overlayRef.current,
            { opacity: 0.2 },
            { 
               opacity: 0, 
               scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top 80%",
                  end: "center center",
                  scrub: true
               }
            }
         );
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-full overflow-hidden will-change-transform ${className}`}
      // Clip path inicial para evitar flash of unstyled content
      style={{ clipPath: "inset(10% 5% 10% 5% round 10px)" }} 
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform block"
        loading={priority ? "eager" : "lazy"}
      />
      
      {/* Camada de Overlay para profundidade inicial */}
      <div ref={overlayRef} className="absolute inset-0 bg-[#1c1917] mix-blend-multiply pointer-events-none opacity-20"></div>
    </div>
  );
};

export default ParallaxImage;