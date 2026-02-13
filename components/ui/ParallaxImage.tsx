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
  scaleFrom?: number;
  scaleTo?: number;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  priority = false,
  aspectRatio = "aspect-[3/4]",
  scaleFrom = 1.15,
  scaleTo = 1.0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !imgRef.current) return;

      // Otimização de Parallax
      gsap.fromTo(imgRef.current,
        { scale: scaleFrom, yPercent: -5 },
        { 
          scale: scaleTo, 
          yPercent: 5, 
          ease: "none",
          force3D: true, // Força GPU
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom", 
            end: "bottom top",   
            scrub: 0.25, // Scrub mais rápido para sensação "snappy"
          }
        }
      );

      // Reveal Inicial (Fade In + Scale Out)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 90%",
        once: true,
        onEnter: () => {
             gsap.to(containerRef.current, {
                 clipPath: "inset(0% 0% 0% 0% round 0px)",
                 duration: 1.4,
                 ease: "expo.out"
             });
             gsap.to(imgRef.current, {
                 filter: "brightness(1) grayscale(0%)",
                 duration: 1.4,
                 ease: "power2.out"
             });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [scaleFrom, scaleTo]);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full overflow-hidden bg-stone-200 ${aspectRatio} ${className}`}
      // Clip-path inicial para animação de reveal
      style={{ clipPath: "inset(5% 5% 5% 5% round 2px)", transform: "translate3d(0,0,0)" }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        style={{ filter: "brightness(0.9) grayscale(100%)", transform: "scale(1.15)" }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
};

export default ParallaxImage;