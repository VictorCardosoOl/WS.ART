import React, { useLayoutEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. INTRO TIMELINE (Sequence)
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial state set via CSS or GSAP set
      tl.fromTo(textRef.current, 
        { y: "100%", opacity: 0 },
        { y: "10%", opacity: 1, duration: 1.5, delay: 0.2 }
      )
      .fromTo(".hero-line", 
        { width: 0 },
        { width: 48, duration: 1 }, // 48px = w-12
        "-=1"
      )
      .fromTo(introTextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(badgeRef.current,
        { scale: 0, rotation: -90, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: "back.out(1.7)" },
        "-=1"
      );

      // 2. PARALLAX EFFECTS (ScrollTrigger)
      // Big Name Parallax (Moves slightly slower than scroll)
      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5, // Smooth scrubbing
        },
        y: "40%", // Pushes text down as we scroll down
        ease: "none"
      });

      // Rotating Badge Scroll Interaction
      gsap.to(badgeRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        rotation: 360,
        y: 100, // Move badge down slightly
        ease: "none"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#FAF7F7] px-4 md:px-6">
      
      {/* --- LAYER 3: INTERACTIVE CONTENT (Topmost) --- */}
      
      {/* ROTATING BADGE */}
      <div ref={badgeRef} className="absolute top-24 right-4 md:top-28 md:right-8 z-30 hidden md:block mix-blend-multiply opacity-90 pointer-events-auto will-change-transform">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text className="text-[10px] font-bold uppercase tracking-[0.25em] fill-[#754548]">
                        <textPath href="#circlePath" startOffset="0%">
                            • William Siqueira • Authentic Ink •
                        </textPath>
                    </text>
                </svg>
                {/* Center Icon/Dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#754548] rounded-full"></div>
                </div>
            </div>
      </div>

      {/* Intro Text Block */}
      <div className="container mx-auto relative z-30 pt-28 md:pt-40 pointer-events-none">
        <div className="flex flex-col md:flex-row justify-end items-start w-full pointer-events-auto">
            <div className="max-w-lg text-right md:text-right mt-8 md:mt-0 flex flex-col items-end">
                <div className="overflow-hidden">
                    <h2 ref={introTextRef} className="font-serif text-4xl md:text-6xl text-[#754548] leading-[0.95] font-light tracking-tight mb-6 md:mb-8">
                      A arte na pele como<br/> 
                      <span className="italic font-normal opacity-80">experiência imersiva.</span>
                    </h2>
                </div>
                
                {/* MICRO TYPOGRAPHY EDITORIAL */}
                <div className="flex flex-col items-end gap-3">
                    <div className="hero-line h-[1px] w-0 bg-[#754548]/40"></div>
                    
                    <div className="overflow-hidden">
                        <p className="font-sans text-[10px] text-stone-500 leading-loose tracking-[0.3em] uppercase font-bold text-right max-w-[260px]">
                          Conectamos história e anatomia em narrativas visuais perenes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Scroll Indicator & Info */}
      <div className="container mx-auto relative z-30 pb-8 md:pb-12 flex flex-col items-center justify-end h-full pointer-events-none">
          <div className="animate-pulse duration-[3000ms] flex flex-col items-center gap-2 opacity-60 mb-4 pointer-events-auto">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#754548]">Scroll</span>
              <ArrowDown size={14} className="text-[#754548]" />
          </div>

           <div className="absolute bottom-[10vw] md:bottom-[4rem] left-0 hidden md:block mix-blend-multiply pointer-events-auto">
              <div className="flex flex-col gap-3 border-l border-[#754548]/30 pl-4 md:pl-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900">Estúdio Privado</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400">Av. Paulista — SP</span>
              </div>
            </div>
      </div>


      {/* --- LAYER 2: BORDER FRAME --- */}
      <div className="absolute inset-4 md:inset-6 border border-[#754548]/30 pointer-events-none z-20 rounded-sm"></div>


      {/* --- LAYER 1: MASSIVE TYPOGRAPHY (Parallax Target) --- */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-end leading-none z-10 mix-blend-darken pointer-events-none overflow-hidden h-full">
          <h1 ref={textRef} className="font-sans font-black text-[19vw] md:text-[21vw] text-black tracking-tighter text-center leading-[0.75] opacity-[0.95] select-none w-full will-change-transform">
              WILLIAM
          </h1>
      </div>


      {/* --- LAYER 0: ATMOSPHERE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[40%] bg-[#754548]/5 blur-[100px] rounded-full"></div>
          <div className="absolute top-[10%] right-[-10%] w-[40%] h-[50%] bg-rose-200/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#FAF7F7]"></div>
      </div>

    </section>
  );
};

export default Hero;