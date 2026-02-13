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
  duration = 0.8, // Reduzido de 1.4s para 0.8s
  yOffset = 30 // Reduzido de 50 para 30
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!elementRef.current) return;

      // Animação SUPER otimizada - apenas opacity e y (transform)
      gsap.fromTo(elementRef.current,
        {
          y: yOffset,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: duration,
          ease: "power2.out", // Ease mais leve
          delay: delay / 1000,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 90%",
            toggleActions: "play none none none", // Não reverter para economizar performance
            once: true // Anima apenas uma vez
          },
          onComplete: () => {
            // Remove will-change após animação completar
            if (elementRef.current) {
              elementRef.current.style.willChange = 'auto';
            }
          }
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [delay, duration, yOffset]);

  return (
    <div style={{ width, overflow: 'visible' }}>
      <div ref={elementRef} className="opacity-0" style={{ willChange: 'opacity, transform' }}>
        {children}
      </div>
    </div>
  );
};

export default Reveal;