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
  duration = 1.6, // Duração ligeiramente maior para elegância
  yOffset = 40 // Movimento menor para ser mais sutil
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!elementRef.current) return;

      gsap.fromTo(elementRef.current,
        {
          y: yOffset,
          opacity: 0,
          scale: 0.98, // Scale sutil
          filter: "blur(4px)", // Blur reduzido para performance
          rotationX: 2, 
          transformOrigin: "center top"
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          rotationX: 0,
          duration: duration,
          ease: "power4.out", // Easing mais "Premium"
          delay: delay / 1000,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 90%", // Aciona mais cedo na viewport para evitar buracos brancos
            toggleActions: "play none none reverse"
          }
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [delay, duration, yOffset]);

  return (
    <div style={{ width, overflow: 'visible', perspective: '1000px' }}>
      <div ref={elementRef} className="will-change-transform opacity-0">
        {children}
      </div>
    </div>
  );
};

export default Reveal;