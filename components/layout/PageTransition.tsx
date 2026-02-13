import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Immediate set for no FOUC
      gsap.set(containerRef.current, { opacity: 0, y: 20 });

      gsap.to(containerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        clearProps: "all" // Cleanup inline styles after animation to avoid conflicts
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full will-change-transform"
      style={{ opacity: 0 }} // Initial state for JS-enabled structure
    >
      {children}
    </div>
  );
};

export default PageTransition;