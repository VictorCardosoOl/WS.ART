import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number; // Delay em ms (convertido para segundos no GSAP)
  threshold?: number; // Ponto de disparo (0.1 a 1.0)
  duration?: number;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = 'fit-content', 
  delay = 0,
  duration = 1.4 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Cria um contexto GSAP para limpeza fácil
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          y: 60, // Distância vertical maior para sensação de "subida"
          autoAlpha: 0, // Performance optimization para opacity: 0
          filter: 'blur(10px)', // Efeito de foco ao entrar
          scale: 0.98,
        },
        {
          y: 0,
          autoAlpha: 1,
          filter: 'blur(0px)',
          scale: 1,
          duration: duration,
          delay: delay / 1000, // Converte ms para segundos
          ease: "power3.out", // Easing "pesado" no final
          scrollTrigger: {
            trigger: element,
            start: "top 90%", // Dispara quando o elemento entra 10% na viewport
            toggleActions: "play none none reverse", // Reverte ao subir (opcional, dá vida ao site)
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, duration]);

  return (
    <div ref={ref} style={{ width, position: 'relative', willChange: 'transform, opacity, filter' }}>
      {children}
    </div>
  );
};

export default Reveal;