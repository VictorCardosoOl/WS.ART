import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  duration?: number;
  yOffset?: number;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = 'fit-content', 
  delay = 0,
  duration = 1.4,
  yOffset = 60
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!elementRef.current) return;

      gsap.fromTo(elementRef.current,
        {
          y: yOffset,
          opacity: 0,
          scale: 0.98,
          filter: "blur(8px)",
          rotationX: 5, // Leve rotação 3D para dar profundidade na entrada
          transformOrigin: "center top"
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          rotationX: 0,
          duration: duration,
          ease: "power3.out", // Easing fluido clássico
          delay: delay / 1000,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 95%", // Inicia um pouco antes
            toggleActions: "play none none reverse" // Permite reverter suavemente se o usuário subir rápido
          }
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [delay, duration, yOffset]);

  return (
    <div style={{ width, overflow: 'visible' }}>
      <div ref={elementRef} className="will-change-transform opacity-0">
        {children}
      </div>
    </div>
  );
};

export default Reveal;