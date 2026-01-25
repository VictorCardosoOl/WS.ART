import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, width = 'fit-content', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!contentRef.current) return;

      gsap.fromTo(contentRef.current, 
        { 
          y: 40, 
          opacity: 0, 
          filter: "blur(10px)",
          scale: 0.98
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: delay / 1000,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%", // Inicia quando o topo do elemento atinge 90% da viewport
            toggleActions: "play none none reverse"
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} style={{ width, position: 'relative', overflow: 'visible' }}>
      <div ref={contentRef} className="will-change-transform opacity-0">
        {children}
      </div>
    </div>
  );
};

export default Reveal;