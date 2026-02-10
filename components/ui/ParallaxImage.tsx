import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string; // ex: "aspect-[3/4]"
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  priority = false,
  aspectRatio = "aspect-[3/4]"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !imgRef.current) return;

      // Configuração refinada para movimento ultra-suave
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Começa assim que o topo do container entra na tela (em baixo)
          end: "bottom top",   // Termina quando o fundo sai (em cima)
          scrub: 1.2,          // Inércia aumentada para sensação de "peso" e elegância
        }
      });

      // 1. ZOOM OUT (A imagem começa grande e se acomoda)
      // Escala de 1.25 para 1.05 (mantendo 1.05 para evitar bordas brancas no movimento Y)
      tl.fromTo(imgRef.current,
        { scale: 1.25 },
        { scale: 1.05, ease: "power1.inOut" }, 
        0
      );

      // 2. PARALLAX Y (Deslocamento vertical oposto ao scroll)
      tl.fromTo(imgRef.current,
        { yPercent: -12 },
        { yPercent: 12, ease: "none" },
        0
      );

      // 3. Reveal Inicial (Clip Path) - Apenas uma vez
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 85%",
        once: true, // Executa apenas uma vez para não ficar piscando
        onEnter: () => {
             gsap.to(containerRef.current, {
                 clipPath: "inset(0% 0% 0% 0% round 0px)",
                 duration: 1.4,
                 ease: "expo.out"
             });
             gsap.to(imgRef.current, {
                 filter: "brightness(1) grayscale(0%)", // Remove o filtro inicial
                 duration: 1.4,
                 ease: "power2.out"
             });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full overflow-hidden bg-stone-100 ${aspectRatio} ${className}`}
      // Estado inicial fechado e com filtro para o reveal
      style={{ clipPath: "inset(5% 5% 5% 5% round 4px)" }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        style={{ filter: "brightness(0.9) grayscale(20%)" }} // Estilo inicial
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      {/* Overlay de granulação sutil para textura */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
    </div>
  );
};

export default ParallaxImage;