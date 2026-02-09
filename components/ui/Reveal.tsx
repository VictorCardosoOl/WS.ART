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
  yOffset = 50
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!elementRef.current) return;

      gsap.fromTo(elementRef.current,
        {
          y: yOffset,
          opacity: 0,
          scale: 0.96,
          filter: "blur(6px)",
          rotationX: 3, // Leve inclinação 3D
          transformOrigin: "center top"
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          rotationX: 0,
          duration: duration,
          ease: "power3.out",
          delay: delay / 1000,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 92%", // Aciona um pouco antes de entrar totalmente
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