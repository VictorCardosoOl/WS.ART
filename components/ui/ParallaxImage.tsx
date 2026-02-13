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
    // Safety check: ensure both refs exist before animating
    if (!containerRef.current || !imgRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Parallax Effect
      // Using 'yPercent' for performant GPU-accelerated translation
      gsap.to(imgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Start when container enters viewport
          end: "bottom top",   // End when container leaves
          scrub: 0,            // Immediate sync with scroll
          invalidateOnRefresh: true
        }
      });

      // 2. Initial Fade-In Reveal
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%", // Trigger slightly before enters fully
            once: true        // Play only once
          }
        }
      );
    }, containerRef); // Scope to this component instance

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-stone-200 ${aspectRatio} ${className}`}
      // Initial style to prevent FOUC (Flash of Unstyled Content), handle by GSAP
      style={{ opacity: 0 }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        // Force hardware acceleration for smoother parallax
        style={{ transform: 'translate3d(0,0,0)' }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
};

export default React.memo(ParallaxImage);