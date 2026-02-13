import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string; // ex: "aspect-[3/4]"
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  priority = false,
  aspectRatio = "aspect-[3/4]"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !imgRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", 
          end: "bottom top",   
          scrub: 0.5, // Reduzido scrub time para resposta mais rápida
        }
      });

      tl.fromTo(imgRef.current,
        { scale: 1.2 },
        { 
          scale: 1.0, 
          yPercent: 15, // Movimento vertical parallax
          ease: "none",
          force3D: true // Força uso da GPU
        }, 
        0
      );

      // Reveal Inicial Otimizado
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
             gsap.to(containerRef.current, {
                 clipPath: "inset(0% 0% 0% 0% round 0px)",
                 duration: 1.2,
                 ease: "expo.out"
             });
             gsap.to(imgRef.current, {
                 filter: "brightness(1) grayscale(0%)",
                 duration: 1.2,
                 ease: "power2.out"
             });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full overflow-hidden bg-stone-200 ${aspectRatio} ${className}`}
      style={{ clipPath: "inset(10% 10% 10% 10% round 4px)", transform: "translate3d(0,0,0)" }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        style={{ filter: "brightness(0.8) grayscale(100%)", transform: "scale(1.2)" }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
};

export default ParallaxImage;