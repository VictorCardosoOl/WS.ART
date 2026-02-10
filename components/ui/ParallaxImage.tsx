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
  const overlayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !imgRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Começa quando o topo do container entra na tela
          end: "bottom top",   // Termina quando sai
          scrub: true,         // Movimento atrelado ao scroll
        }
      });

      // 1. ANIMAÇÃO DE PARALLAX (VERTICAL)
      // A imagem se move no eixo Y para criar profundidade
      tl.fromTo(imgRef.current, 
        { yPercent: -15 }, 
        { yPercent: 15, ease: "none" },
        0
      );

      // 2. ANIMAÇÃO DE SCALE (ZOOM OUT)
      // A imagem começa com Zoom (1.4) e diminui para (1.1)
      // Mantemos 1.1 para evitar bordas brancas durante o parallax
      tl.fromTo(imgRef.current,
        { scale: 1.4 },
        { scale: 1.1, ease: "none" },
        0
      );

      // 3. REVEAL (CLIP PATH) - Separado do ScrollTrigger principal para ter controle de Trigger diferente
      // Queremos que a imagem "abra" assim que entrar na tela, não durante todo o scroll
      gsap.fromTo(containerRef.current,
        { 
          clipPath: "inset(15% 10% 15% 10% round 2px)", // Começa fechada
          filter: "brightness(0.8)" // Levemente escura
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)", // Abre totalmente
          filter: "brightness(1)",
          duration: 1.5,
          ease: "power3.out", // Curva elegante
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%", // Aciona quando o topo está a 85% da tela
            toggleActions: "play none none reverse"
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-full overflow-hidden will-change-transform ${className}`}
      // Clip-path inicial inline para evitar flash
      style={{ clipPath: "inset(15% 10% 15% 10% round 2px)" }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      
      {/* Camada de Overlay para atmosfera cinematográfica */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-[#1c1917]/10 mix-blend-multiply pointer-events-none" 
      />
    </div>
  );
};

export default ParallaxImage;