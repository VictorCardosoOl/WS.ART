import React, { useLayoutEffect, useRef } from 'react';
import { MoveRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from '../ui/SplitText';
import Magnetic from '../ui/Magnetic';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. INTRO ANIMATION
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(".char-reveal", { yPercent: 120, opacity: 0 }); 
      gsap.set(".hero-fade", { y: 20, autoAlpha: 0 });
      gsap.set(".hero-line", { scaleX: 0, transformOrigin: "left center" });

      tl.to(".char-reveal", {
        yPercent: 0,
        opacity: 1,
        duration: 1.4,
        stagger: { amount: 0.5, from: "center" },
        ease: "power4.out"
      })
      .to(".hero-line", { scaleX: 1, duration: 1.2, ease: "expo.out" }, "-=1.0")
      .to(".hero-fade", {
        y: 0,
        autoAlpha: 1,
        duration: 1.0,
        stagger: 0.1
      }, "-=0.8");

      // 2. SCROLL PARALLAX
      // Fundo
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Título WILLIAM (Fundo) - Move-se mais lentamente para criar profundidade
      gsap.to(titleRef.current, {
        yPercent: 10,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Conteúdo (Frente) - Move-se mais rápido (paralaxe negativo)
      gsap.to(contentRef.current, {
        yPercent: -30,
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
      
      {/* 0. Atmosphere Layer */}
      <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none will-change-transform">
          <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-rose-200/30 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* 1. TÍTULO GIGANTE DE FUNDO (Z-INDEX 0) */}
      <div 
        ref={titleRef}
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden"
      >
          <h1 className="font-display font-bold text-[18vw] text-[#12100E] tracking-tighter text-center leading-none w-full opacity-[0.08] whitespace-nowrap">
               WILLIAM
          </h1>
      </div>

      {/* 2. CONTEÚDO PRINCIPAL (Z-INDEX 20) */}
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-20 flex flex-col h-full pointer-events-none">
          
          {/* Top Bar */}
          <div className="pt-32 md:pt-40 flex justify-between items-start w-full">
              <div className="hidden md:flex flex-col gap-3 hero-fade pointer-events-auto">
                 <div className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#754548] rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-stone-400">São Paulo, BR</span>
                 </div>
                 <span className="text-[10px] font-medium font-sans uppercase tracking-widest text-stone-300 pl-4">Est. 2018</span>
              </div>
          </div>

          {/* Middle/Right Content - Posicionado mais alto para não conflitar */}
          <div ref={contentRef} className="flex-grow flex flex-col justify-center items-end text-right pointer-events-auto ml-auto max-w-2xl mt-[-10vh]">
                  
                  <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-[#1c1917] leading-[1.0] font-medium tracking-tighter mix-blend-darken overflow-hidden uppercase max-w-[100vw] break-words md:whitespace-nowrap">
                      <SplitText charClass="char-reveal" wordClass="overflow-hidden pb-2 inline-block">
                        A pele como
                      </SplitText>
                      <br className="md:hidden" />
                      <SplitText charClass="char-reveal" wordClass="overflow-hidden pb-2 inline-block">
                         tela eterna.
                      </SplitText>
                  </h2>
                  
                  <div className="hero-line w-full md:w-32 h-[1px] bg-[#754548] my-8 opacity-60 ml-auto"></div>

                  <p className="hero-fade font-sans text-xs md:text-sm text-stone-500 leading-relaxed tracking-wide font-light text-right max-w-[320px]">
                      Conectamos narrativa pessoal e anatomia em obras neotradicionais.
                  </p>

                  <div className="hero-fade mt-10">
                      <Magnetic strength={0.5}>
                        <a href="#gallery" className="group inline-flex items-center justify-end gap-4 text-[10px] font-bold font-sans uppercase tracking-widest text-[#754548] hover:text-stone-900 transition-colors p-4 -mr-4">
                            Explorar Portfólio
                            <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                              <MoveRight size={14} className="absolute transition-transform duration-500 group-hover:translate-x-full" />
                              <MoveRight size={14} className="absolute -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
                            </div>
                        </a>
                      </Magnetic>
                  </div>
          </div>

          {/* Bottom Indicator */}
          <div className="w-full relative pb-12 flex flex-col items-center justify-end">
             <div className="hero-fade animate-bounce duration-[3000ms] mb-8 opacity-50">
                <ArrowDown size={18} className="text-[#754548]" />
             </div>
          </div>
      </div>

    </section>
  );
};

export default Hero;