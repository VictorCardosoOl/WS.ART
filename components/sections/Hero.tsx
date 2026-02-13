import React, { useLayoutEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from '../ui/SplitText';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Configuração Inicial
      gsap.set(".hero-char", { yPercent: 120, opacity: 0 }); 
      gsap.set(".construction-line", { scaleX: 0, opacity: 0 });
      gsap.set(".construction-circle", { scale: 0, opacity: 0, rotation: -90 });

      // 1. Linhas de Construção (Efeito Draft)
      tl.to(".construction-line", {
          scaleX: 1,
          opacity: 0.4,
          duration: 1.5,
          stagger: 0.1,
          ease: "expo.out"
      })
      .to(".construction-circle", {
          scale: 1,
          opacity: 0.4,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)"
      }, "-=1.0");

      // 2. Texto Principal
      tl.to(".hero-char", {
        yPercent: 0,
        opacity: 1,
        duration: 1.6,
        stagger: 0.05,
        ease: "power4.out"
      }, "-=0.8");

      // 3. Parallax
      gsap.to(titleRef.current, {
        yPercent: 20,
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
      
      {/* --- BACKGROUND SKETCH LINES (Concept Art Grid) --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
          {/* Linha do Horizonte (Azul Lápis) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue-300 opacity-20 construction-line origin-left" style={{ filter: 'url(#pencil-stroke)' }}></div>
          
          {/* Linha Vertical Central (Vermelho Lápis) */}
          <div className="absolute top-0 left-1/2 h-full w-[1px] bg-red-300 opacity-20 construction-line origin-top" style={{ filter: 'url(#pencil-stroke)' }}></div>
          
          {/* Círculo de Proporção Áurea */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] border border-stone-300 rounded-full opacity-10 construction-circle" style={{ filter: 'url(#pencil-stroke)' }}></div>
          
          {/* Notas de Medida */}
          <div className="absolute top-[52%] left-[52%] text-[9px] font-hand text-blue-400 opacity-50 rotate-[-15deg]">
              ( fig. 1.2 - axis alignment )
          </div>
      </div>

      {/* --- TOP META INFO --- */}
      <div className="relative z-20 w-full px-6 md:px-12 pt-8 flex justify-between items-start hero-meta">
          <div className="flex flex-col gap-1 relative">
              <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-[#1c1917]">Est. 2018</span>
              <span className="text-[9px] font-serif italic text-[#754548]">Private Studio</span>
              
              {/* Seta de anotação */}
              <svg className="absolute -right-12 top-2 w-8 h-8 text-stone-400 opacity-50 rotate-12" viewBox="0 0 50 50">
                  <path d="M0,25 Q25,0 50,25" fill="none" stroke="currentColor" strokeWidth="1" style={{ filter: 'url(#pencil-stroke)' }} />
                  <path d="M40,15 L50,25 L40,35" fill="none" stroke="currentColor" strokeWidth="1" style={{ filter: 'url(#pencil-stroke)' }} />
              </svg>
          </div>
          
          <div className="flex items-center gap-2 text-[#1c1917]">
             <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-right hidden md:block">São Paulo<br/>Brasil</span>
             <MapPin size={14} className="text-[#754548]" />
          </div>
      </div>

      {/* --- BOTTOM ANCHORED TITLE --- */}
      <div className="relative z-10 w-full flex-grow flex items-end justify-center pb-12 md:pb-8 overflow-visible">
          <div ref={titleRef} className="w-full text-center leading-none relative">
              
              {/* Construction Box around Title (The "Frame") */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-full border-x border-dashed border-stone-300 opacity-30 pointer-events-none"></div>

              <h1 className="font-display font-bold text-[24vw] text-[#1c1917] tracking-tighter leading-[0.75] select-none whitespace-nowrap overflow-visible translate-y-[2%] relative">
                   {/* Shadow Sketch Layer (Hachura) */}
                   <span className="absolute top-2 left-2 w-full h-full text-transparent bg-clip-text pointer-events-none z-[-1] opacity-20" 
                         style={{ backgroundImage: 'url(#hatch-pattern)', WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}>
                       WILLIAM
                   </span>

                   <SplitText charClass="hero-char inline-block will-change-transform" wordClass="overflow-visible inline-block">
                    WILLIAM
                   </SplitText>
              </h1>
              
              {/* Assinatura "Lápis" */}
              <div className="absolute bottom-1/3 right-[10%] md:right-[20%] rotate-[-10deg] mix-blend-multiply opacity-80 z-20">
                  <span className="font-hand text-3xl md:text-5xl text-[#754548]">Concept Art.</span>
                  <div className="w-full h-[2px] bg-[#754548] mt-[-5px]" style={{ filter: 'url(#pencil-stroke)' }}></div>
              </div>
          </div>
      </div>

    </section>
  );
};

export default Hero;