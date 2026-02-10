import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from './SplitText';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    // Lock scroll immediately
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
            // Safety unlock is handled in cleanup, but we call onComplete here
            onComplete();
        }
      });

      // 1. Counter Animation
      const counterObj = { value: 0 };
      tl.to(counterObj, {
        value: 100,
        duration: 2.5,
        ease: "power2.out",
        onUpdate: () => {
          if (percentRef.current) {
            percentRef.current.textContent = Math.round(counterObj.value).toString();
          }
        }
      });

      // 2. Text Intro
      tl.to(".preloader-char", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out"
      }, "<"); 

      // 3. Exit Elements
      tl.to([".preloader-text", ".preloader-counter"], {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.in",
        delay: 0.2
      });

      // 4. Reveal App
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.5,
        ease: "power4.inOut", 
      }, "-=0.2"); 

      // 5. Hide completely
      tl.set(containerRef.current, { display: "none" });

    }, containerRef);

    // ROBUST CLEANUP: Ensure scroll is unlocked even if unmounted mid-animation
    return () => {
        document.body.style.overflow = '';
        ctx.revert();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#12100E] flex flex-col items-center justify-center text-[#F2E8E9] w-full h-full"
    >
      <div className="preloader-text overflow-hidden mb-4 relative z-10 px-6">
        <h1 className="font-serif text-3xl md:text-5xl italic font-light tracking-wide text-center leading-tight mix-blend-difference">
          <SplitText 
            charClass="preloader-char opacity-0 translate-y-full inline-block" 
            wordClass="overflow-hidden py-2 inline-block"
          >
            A pele como tela eterna.
          </SplitText>
        </h1>
      </div>

      <div className="preloader-counter absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-end gap-1 overflow-hidden">
          <span 
            ref={percentRef} 
            className="font-serif text-6xl md:text-8xl leading-none text-[#754548] opacity-80"
          >
            0
          </span>
          <span className="font-sans text-sm md:text-base font-bold tracking-widest mb-2 md:mb-3 text-stone-500">
            %
          </span>
      </div>

      <div className="preloader-counter absolute bottom-8 left-8 md:bottom-12 md:left-12 opacity-50">
          <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-stone-600">
              William Siqueira © 2024
          </span>
      </div>

      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-noise animate-grain mix-blend-overlay"></div>
    </div>
  );
};

export default Preloader;