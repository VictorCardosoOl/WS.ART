import React, { useLayoutEffect, useRef } from 'react';
import { ArrowDown, MoveRight } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // 1. Initial States
      gsap.set(textRef.current, { y: "100%", opacity: 0, filter: "blur(10px)" });
      gsap.set(".hero-line", { scaleX: 0, transformOrigin: "right center" }); // Origin right for right-aligned layout
      gsap.set(".hero-reveal", { y: 20, opacity: 0 });

      // 2. Entrance Sequence
      tl.to(textRef.current, { 
        y: "4%", 
        opacity: 1, 
        filter: "blur(0px)", 
        duration: 2.2, 
        ease: "power4.out" 
      })
      .to(".hero-line", { scaleX: 1, duration: 1.5 }, "-=1.5")
      .to(".hero-reveal", { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.15 // Slightly increased stagger for elegance
      }, "-=1.0");

      // 3. Breathing Animation (Text Only)
      gsap.to(textRef.current, {
        scale: 1.02,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 4. Scroll Interaction (Fade Out)
      if (introRef.current) {
        gsap.to(introRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "40% top",
            scrub: true,
          },
          opacity: 0,
          y: -50
        });
      }

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center top",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-[#FAF7F7] z-10">
      
      {/* Atmosphere Layers (Static/Subtle - GPU accelerated) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 will-change-transform">
          <div className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] bg-[#754548]/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-rose-300/10 blur-[150px] rounded-full"></div>
      </div>

      {/* Content Layer */}
      <div ref={introRef} className="container mx-auto px-6 h-full relative z-20 flex flex-col pt-32 md:pt-40 pointer-events-none">
          
          <div className="flex justify-between items-start w-full">
              {/* Left Column: Metadata */}
              <div className="hidden md:flex flex-col gap-2 hero-reveal pointer-events-auto">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#754548] rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">São Paulo, BR</span>
                 </div>
                 <span className="text-[10px] font-medium uppercase tracking-widest text-stone-300 pl-4">Est. 2018</span>
              </div>

              {/* Right Column: Editorial Content */}
              <div className="flex flex-col items-end text-right max-w-lg pointer-events-auto w-full md:w-auto ml-auto">
                  <h2 className="hero-reveal font-serif text-fluid-h2 text-[#1c1917] leading-tight-editorial font-light tracking-tight mix-blend-darken">
                      A pele como<br/>
                      <span className="italic font-normal text-[#754548]">tela eterna.</span>
                  </h2>
                  
                  <div className="hero-line w-24 h-[1px] bg-[#754548] my-6 opacity-60"></div>

                  <p className="hero-reveal font-sans text-[10px] text-stone-500 leading-relaxed tracking-[0.3em] uppercase font-semibold text-right max-w-xs">
                      Conectamos narrativa pessoal e anatomia em obras neotradicionais.
                  </p>

                  <div className="hero-reveal mt-8">
                      <a href="#gallery" className="group flex items-center justify-end gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548] hover:text-stone-900 transition-colors">
                          Explorar Acervo
                          <MoveRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                      </a>
                  </div>
              </div>
          </div>
      </div>

      {/* Footer Anchors */}
      <div className="absolute bottom-12 w-full flex justify-center z-20 pointer-events-none">
           <div className="flex flex-col items-center gap-2 opacity-40 mix-blend-multiply animate-bounce duration-[3000ms]">
               <span className="text-[9px] uppercase tracking-widest text-[#754548]">Scroll</span>
               <ArrowDown size={14} className="text-[#754548]" />
           </div>
      </div>

      {/* Fixed Massive Typography (22vw) */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center items-end leading-none z-0 mix-blend-darken pointer-events-none select-none h-[100dvh]">
          <h1 
            ref={textRef} 
            className="font-sans font-black text-[22vw] text-[#12100E] tracking-tighter text-center leading-[0.7] w-full pb-0 will-change-transform opacity-95 transform translate-y-[5%]"
          >
              WILLIAM
          </h1>
      </div>

    </section>
  );
};

export default Hero;