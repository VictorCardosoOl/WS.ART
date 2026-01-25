import React, { useLayoutEffect, useRef } from 'react';
import { MoveRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from '../ui/SplitText';
import Magnetic from '../ui/Magnetic';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. INTRO ANIMATION (Load)
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Initial States
      gsap.set(".char-reveal", { yPercent: 120 }); // Letters start below baseline
      gsap.set(".hero-fade", { y: 20, autoAlpha: 0 });
      gsap.set(".hero-line", { scaleX: 0, transformOrigin: "left center" });

      // Sequence
      tl.to(".char-reveal", {
        yPercent: 0,
        duration: 1.8,
        stagger: 0.03, // Wave effect on letters
        ease: "power3.out"
      })
      .to(".hero-line", { scaleX: 1, duration: 1.5, ease: "expo.out" }, "-=1.2")
      .to(".hero-fade", {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        stagger: 0.1
      }, "-=1.0");

      // 2. SCROLL PARALLAX ANIMATION
      // Background moves slower than foreground
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Massive Text moves faster (Foreground Parallax)
      gsap.to(titleRef.current, {
        yPercent: -25, 
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-[#FAF7F7] z-10 flex flex-col justify-between">
      
      {/* --- ATMOSPHERE (Parallax Layer) --- */}
      <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none will-change-transform">
          <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay"></div>
          {/* Subtle Radial Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-rose-200/40 via-transparent to-transparent opacity-70"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col pt-32 md:pt-40 pointer-events-none flex-grow justify-between">
          
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start w-full">
              {/* Meta Data */}
              <div className="hidden md:flex flex-col gap-2 hero-fade pointer-events-auto">
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#754548] rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">São Paulo, BR</span>
                 </div>
                 <span className="text-[10px] font-medium uppercase tracking-widest text-stone-300 pl-4.5">Est. 2018</span>
              </div>

              {/* Editorial Statement */}
              <div className="flex flex-col items-end text-right pointer-events-auto ml-auto max-w-xl">
                  <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#1c1917] leading-tight-editorial font-light tracking-tight mix-blend-darken overflow-hidden">
                      <SplitText charClass="char-reveal" wordClass="overflow-hidden pb-2">
                        A pele como tela eterna.
                      </SplitText>
                  </h2>
                  
                  <div className="hero-line w-full md:w-32 h-[1px] bg-[#754548] my-8 opacity-60"></div>

                  <p className="hero-fade font-sans text-[10px] text-stone-500 leading-relaxed tracking-[0.3em] uppercase font-semibold text-right max-w-[280px]">
                      Conectamos narrativa pessoal e anatomia em obras neotradicionais.
                  </p>

                  <div className="hero-fade mt-10">
                      <Magnetic strength={0.5}>
                        <a href="#gallery" className="group inline-flex items-center justify-end gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548] hover:text-stone-900 transition-colors p-4 -mr-4">
                            Explorar Acervo
                            <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                              <MoveRight size={14} className="absolute transition-transform duration-500 group-hover:translate-x-full" />
                              <MoveRight size={14} className="absolute -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
                            </div>
                        </a>
                      </Magnetic>
                  </div>
              </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full relative pb-12 flex flex-col items-center">
             <div className="hero-fade animate-bounce duration-[3000ms] mb-8 opacity-50">
                <ArrowDown size={18} className="text-[#754548]" />
             </div>
          </div>
      </div>

      {/* --- THE ANCHOR (Massive Typography) --- */}
      <div 
        ref={titleRef}
        className="absolute bottom-0 left-0 w-full flex justify-center items-end leading-none z-10 mix-blend-darken pointer-events-none select-none pb-0 will-change-transform"
      >
          <h1 className="font-sans font-black text-[21vw] text-[#12100E] tracking-tighter text-center leading-[0.75] w-full opacity-90 overflow-hidden">
               <SplitText charClass="char-reveal" wordClass="overflow-hidden pb-[1vw]">
                WILLIAM
               </SplitText>
          </h1>
      </div>

      {/* SEPARATOR: Smooth Fade to White */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white z-20 pointer-events-none"></div>

    </section>
  );
};

export default Hero;