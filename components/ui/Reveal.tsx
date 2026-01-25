import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string; // Adicionado para permitir controle de altura/estilo externo
}

const Reveal: React.FC<RevealProps> = ({ children, width = 'fit-content', delay = 0, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width }} className={`relative overflow-visible ${className}`}>
      <div
        className={`transform transition-all duration-[1200ms] ease-out-expo h-full ${
          isVisible 
            ? 'opacity-100 translate-y-0 blur-0 scale-100' 
            : 'opacity-0 translate-y-12 blur-[10px] scale-[0.98]'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;