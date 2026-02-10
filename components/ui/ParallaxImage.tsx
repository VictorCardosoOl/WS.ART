import React, { useLayoutEffect, useRef } from 'react';
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !imgRef.current) return;

      // 1. Animação de Parallax (A imagem move dentro do container)
      gsap.fromTo(imgRef.current, 
        { 
          yPercent: -15, // Começa deslocada para cima
          scale: 1.15    // Leve zoom para cobrir o movimento
        },
        {
          yPercent: 15,  // Termina deslocada para baixo
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom", // Quando o topo do container entra em baixo da tela
            end: "bottom top",   // Quando o fundo do container sai por cima
            scrub: true,         // Link direto com o scroll (sem delay artificial)
          }
        }
      );

      // 2. Animação de Recorte (Clip Path Reveal)
      // Simula o efeito que tinhamos antes com Framer Motion, mas usando GSAP
      gsap.fromTo(containerRef.current,
        {
          clipPath: "inset(12% 8% 12% 8% round 12px)" // Começa pequeno e arredondado
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)", // Abre para tela cheia
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%", // Começa a abrir assim que entra na tela
            end: "center center", // Termina de abrir no meio
            scrub: 1 // Leve suavidade na abertura
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-full overflow-hidden ${className}`}
      // Definimos um clip-path inicial via CSS para evitar FOUC (Flash of Unstyled Content)
      style={{ clipPath: "inset(12% 8% 12% 8% round 12px)" }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      
      {/* Camada de Overlay opcional para profundidade extra e atmosfera */}
      <div className="absolute inset-0 bg-[#1c1917]/5 mix-blend-multiply pointer-events-none"></div>
    </div>
  );
};

export default ParallaxImage;