import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
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

      // Parallax SUPER simplificado - apenas yPercent
      gsap.to(imgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0, // Sem delay para resposta imediata
          invalidateOnRefresh: true
        }
      });

      // Reveal inicial SIMPLIFICADO - apenas fade
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-stone-200 ${aspectRatio} ${className}`}
      style={{ opacity: 0 }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ transform: 'translate3d(0,0,0)' }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
};

export default ParallaxImage;