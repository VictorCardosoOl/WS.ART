import React, { useLayoutEffect, useRef } from 'react';
import { MoveRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from '../ui/SplitText';
import Magnetic from '../ui/Magnetic';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const titleTextRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. INTRO ANIMATION
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(".char-reveal", { yPercent: 120, opacity: 0 }); 
      gsap.set(".hero-fade", { y: 40, autoAlpha: 0 });
      
      // Animação do Título Gigante (Surgindo de baixo)
      tl.to(".title-char", {
          yPercent: 0,
          opacity: 1,
          duration: 1.8,
          stagger: 0.04,
          ease: "expo.out"
      })
      .to(".hero-fade", {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        stagger: 0.1
      }, "-=1.2");

      // 2. SCROLL VELOCITY SKEW EFFECT (Assinatura High-End)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
           const velocity = self.getVelocity();
           // Ajuste fino: divide a velocidade para obter um skew sutil
           const skew = velocity / 250; 
           
           if(titleTextRef.current) {
               gsap.to(titleTextRef.current, { 
                   skewX: -skew, 
                   overwrite: 'auto', 
                   duration: 0.1, // Resposta rápida
                   ease: "power1.out"
               });
           }
        }
      });

      // 3. PARALLAX DO TÍTULO (Fica fixo enquanto o conteúdo sobe, depois some)
      gsap.to(titleWrapperRef.current, {
        yPercent: 20, // Move-se levemente para baixo
        opacity: 0,   // Desaparece ao sair
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
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-[#FAF7F7] z-10 flex flex-col">
      
      {/* ATMOSPHERE / GRADIENT */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-rose-100/30 blur-[120px] rounded-full mix-blend-multiply"></div>
      </div>

      {/* CONTENT LAYER (Sobre o título) */}
      <div ref={contentRef} className="relative z-20 w-full h-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col justify-between py-12 md:py-24 pointer-events-none">
          
          {/* Top Bar */}
          <div className="flex justify-between items-start w-full hero-fade pointer-events-auto">
              <div className="flex flex-col gap-1">
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900">Est. 2018</span>
                 <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">São Paulo — SP</span>
              </div>
              
              <div className="hidden md:block">
                  <Magnetic strength={0.3}>
                    <a href="#booking" className="inline-block px-6 py-3 border border-stone-200 rounded-full hover:bg-stone-900 hover:text-white transition-all duration-300 text-[10px] uppercase font-bold tracking-widest">
                        Agendar Sessão
                    </a>
                  </Magnetic>
              </div>
          </div>

          {/* Middle/Bottom Information */}
          <div className="flex flex-col md:flex-row justify-between items-end w-full pb-12 md:pb-24 pointer-events-auto">
              
              {/* Left: Scroll Indicator */}
              <div className="hidden md:flex hero-fade flex-col gap-4 items-center">
                 <span className="text-[9px] uppercase tracking-widest text-stone-400 -rotate-90 origin-center translate-y-8">Scroll</span>
                 <div className="h-16 w-[1px] bg-stone-300 mt-12 overflow-hidden">
                    <div className="h-full w-full bg-stone-900 animate-[shimmer_2s_infinite]"></div>
                 </div>
              </div>

              {/* Right: Main Copy */}
              <div className="max-w-xl text-right flex flex-col items-end">
                  <h2 className="hero-fade font-serif text-3xl md:text-5xl lg:text-6xl text-[#1c1917] leading-[1.1] font-light mb-8">
                      <span className="block italic text-stone-400">Sinto a sua energia</span>
                      e a transfiro para a tela<br/> mais cara do mundo.
                  </h2>
                  
                  <div className="hero-fade w-24 h-[1px] bg-stone-900 mb-8 opacity-20"></div>

                  <p className="hero-fade font-sans text-xs md:text-sm text-stone-500 leading-relaxed max-w-xs uppercase tracking-wide font-medium">
                      Especialista em Neotradicional e Coberturas.<br/>
                      Arte perene para corpos efêmeros.
                  </p>
                  
                  <div className="hero-fade mt-10">
                      <Magnetic strength={0.2}>
                          <a href="#gallery" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#754548] hover:text-stone-900 transition-colors">
                            Explorar Portfólio
                            <MoveRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                          </a>
                      </Magnetic>
                  </div>
              </div>
          </div>
      </div>

      {/* MASSIVE TITLE LAYER (Background / Behind Content) */}
      <div 
        ref={titleWrapperRef}
        className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 mix-blend-darken pointer-events-none select-none flex justify-center items-center overflow-hidden"
      >
          <h1 ref={titleTextRef} className="font-serif font-medium text-[24vw] md:text-[22vw] text-[#000000] tracking-tighter text-center leading-none opacity-[0.9] whitespace-nowrap will-change-transform">
               <SplitText charClass="title-char opacity-0 translate-y-full inline-block" wordClass="inline-block">
                WILLIAM
               </SplitText>
          </h1>
      </div>

    </section>
  );
};

export default Hero;