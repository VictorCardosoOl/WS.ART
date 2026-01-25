import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number; // Atraso em ms (agora convertido para segundos no GSAP)
  yOffset?: number; // Distância vertical do movimento
  duration?: number;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = 'fit-content', 
  delay = 0,
  yOffset = 40,
  duration = 1.2
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, 
        {
          y: yOffset,
          autoAlpha: 0,
          filter: 'blur(10px)',
          scale: 0.98
        },
        {
          y: 0,
          autoAlpha: 1,
          filter: 'blur(0px)',
          scale: 1,
          duration: duration,
          delay: delay / 1000, // Converte ms para segundos
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Inicia quando o topo do elemento atinge 85% da viewport
            toggleActions: "play none none reverse" // Toca na entrada, reverte na saída (opcional, para sentir vivo)
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, yOffset, duration]);

  return (
    <div ref={ref} style={{ width, position: 'relative', willChange: 'transform, opacity, filter' }} className="invisible">
      {children}
    </div>
  );
};

export default Reveal;