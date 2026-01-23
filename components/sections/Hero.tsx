import React, { useLayoutEffect, useRef } from 'react';
import { MoveRight } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Otimização: set initial state com autoAlpha para evitar FOUC
      gsap.set(".hero-reveal", { y: 20, autoAlpha: 0 });
      gsap.set(textRef.current, { y: "15%", autoAlpha: 0 });
      gsap.set(".hero-line", { scaleX: 0, transformOrigin: "right center" });

      // Sequência mais rápida e fluida
      tl.to(textRef.current, { 
        y: "0%", 
        autoAlpha: 1, 
        duration: 1.8, 
        ease: "power4.out" 
      })
      .to(".hero-line", { scaleX: 1, duration: 1.2 }, "-=1.4")
      .to(".hero-reveal", { 
        y: 0, 
        autoAlpha: 1, 
        duration: 1, 
        stagger: 0.05
      }, "-=1.0");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-[#FAF7F7] z-10 flex flex-col justify-between">
      
      {/* --- ATMOSPHERE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>
          {/* Gradiente Radial Rosa no Centro (Solicitado) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-200/40 via-[#FAF7F7]/50 to-[#FAF7F7] opacity-60"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col pt-32 md:pt-40 pointer-events-none flex-grow">
          
          <div className="flex flex-col md:flex-row justify-between items-start w-full">
              {/* Left: Minimal Meta Data */}
              <div className="hidden md:flex flex-col gap-2 hero-reveal pointer-events-auto mt-2">
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#754548] rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">São Paulo, BR</span>
                 </div>
                 <span className="text-[10px] font-medium uppercase tracking-widest text-stone-300 pl-4.5">Est. 2018</span>
              </div>

              {/* Right: Editorial Statement */}
              <div className="flex flex-col items-end text-right pointer-events-auto ml-auto">
                  <h2 className="hero-reveal font-serif text-4xl md:text-6xl lg:text-7xl text-[#1c1917] leading-tight-editorial font-light tracking-tight mix-blend-darken">
                      A pele como<br/>
                      <span className="italic font-normal text-[#754548]">tela eterna.</span>
                  </h2>
                  
                  <div className="hero-line w-32 h-[1px] bg-[#754548] my-8 opacity-60"></div>

                  <p className="hero-reveal font-sans text-[10px] text-stone-500 leading-relaxed tracking-[0.3em] uppercase font-semibold text-right max-w-[280px]">
                      Conectamos narrativa pessoal e anatomia em obras neotradicionais.
                  </p>

                  <div className="hero-reveal mt-10">
                      <a href="#gallery" className="group flex items-center justify-end gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548] hover:text-stone-900 transition-colors">
                          Explorar Acervo
                          <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                            <MoveRight size={14} className="absolute transition-transform duration-500 group-hover:translate-x-full" />
                            <MoveRight size={14} className="absolute -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </div>

      {/* --- THE ANCHOR (Massive Typography) --- */}
      <div className="relative w-full flex justify-center items-end leading-none z-0 mix-blend-darken pointer-events-none select-none pb-0">
          <h1 
            ref={textRef} 
            className="font-sans font-black text-[22vw] text-[#12100E] tracking-tighter text-center leading-[0.75] w-full opacity-90 will-change-transform translate-y-[20%]"
          >
              WILLIAM
          </h1>
      </div>

    </section>
  );
};

export default Hero;