import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out"
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full will-change-transform"
    >
      {children}
    </div>
  );
};

export default PageTransition;