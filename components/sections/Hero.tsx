import React, { useLayoutEffect, useRef } from 'react';
import { MoveRight, ArrowDown, MapPin } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from '../ui/SplitText';
import Magnetic from '../ui/Magnetic';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cornerRefs = useRef<HTMLDivElement[]>([]);

  const addToCorners = (el: HTMLDivElement | null) => {
    if (el && !cornerRefs.current.includes(el)) {
      cornerRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. INTRO ANIMATION
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Configuração inicial
      gsap.set(".hero-char", { yPercent: 120, opacity: 0 }); 
      gsap.set(".hero-meta", { opacity: 0, y: 20 });
      gsap.set(".hero-line", { scaleX: 0, transformOrigin: "left center" });

      // Animação de Entrada
      tl.to(".hero-char", {
        yPercent: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.05,
        ease: "power4.out"
      })
      .to(".hero-meta", {
        y: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.1
      }, "-=1.0")
      .to(".hero-line", { scaleX: 1, duration: 1.2, ease: "expo.out" }, "-=0.8");

      // 2. SCROLL PARALLAX
      // O nome "WILLIAM" se move levemente diferente do resto para dar profundidade
      gsap.to(titleRef.current, {
        yPercent: 15,
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
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-[#FAF7F7] z-10 flex items-center justify-center">
      
      {/* ATMOSPHERE LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay"></div>
          {/* Gradiente sutil para dar volume */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/0 via-[#FAF7F7]/0 to-[#d6d3d1]/20"></div>
      </div>

      {/* --- CENTRAL MASSIVE TITLE --- */}
      <div ref={titleRef} className="relative z-10 flex flex-col items-center justify-center w-full mix-blend-darken">
          
          <h1 className="font-display font-bold text-[23vw] text-[#1c1917] tracking-tighter leading-[0.75] select-none flex items-center justify-center w-full whitespace-nowrap overflow-visible">
               <SplitText charClass="hero-char inline-block will-change-transform" wordClass="overflow-hidden pb-[2vw] inline-block">
                WILLIAM
               </SplitText>
          </h1>
          
          <div className="flex items-center gap-6 mt-2 md:mt-[-1vw] hero-meta">
              <div className="h-[1px] w-12 md:w-24 bg-[#754548]"></div>
              <span className="font-serif italic text-2xl md:text-4xl text-[#754548]">Siqueira</span>
              <div className="h-[1px] w-12 md:w-24 bg-[#754548]"></div>
          </div>

      </div>

      {/* --- EDITORIAL CORNERS (Preenchendo o vazio) --- */}
      
      {/* Top Left: Localização */}
      <div ref={addToCorners} className="absolute top-32 left-6 md:left-12 flex flex-col items-start gap-2 hero-meta z-20">
          <div className="flex items-center gap-2 text-stone-900">
             <MapPin size={14} className="text-[#754548]" />
             <span className="text-[10px] font-bold font-sans uppercase tracking-widest">São Paulo, BR</span>
          </div>
          <span className="text-[10px] text-stone-400 font-sans uppercase tracking-widest pl-6">Av. Paulista, Private Studio</span>
      </div>

      {/* Top Right: Data / Status */}
      <div ref={addToCorners} className="absolute top-32 right-6 md:right-12 text-right hero-meta z-20">
          <span className="block text-[10px] font-bold font-sans uppercase tracking-widest text-stone-900">Est. 2018</span>
          <span className="block text-[10px] text-stone-400 font-sans uppercase tracking-widest mt-1">Agenda 2024: Aberta</span>
      </div>

      {/* Bottom Left: O TEXTO NARRATIVO (Restaurado) */}
      <div ref={addToCorners} className="absolute bottom-12 left-6 md:left-12 max-w-[280px] md:max-w-sm hero-meta z-20">
          <div className="w-12 h-[2px] bg-[#754548] mb-6 hero-line origin-left"></div>
          <p className="font-sans text-xs md:text-sm text-stone-600 leading-relaxed font-medium tracking-wide text-justify">
              CONECTAMOS NARRATIVA PESSOAL E ANATOMIA EM OBRAS NEOTRADICIONAIS. A PELE COMO SUPORTE DE ARTE PERENE.
          </p>
      </div>

      {/* Bottom Right: CTA */}
      <div ref={addToCorners} className="absolute bottom-12 right-6 md:right-12 hero-meta z-20 flex flex-col items-end gap-6">
          <div className="animate-bounce duration-[3000ms] text-[#754548]">
              <ArrowDown size={20} />
          </div>
          
          <Magnetic strength={0.3}>
            <a href="#gallery" className="group flex items-center gap-4 pl-8 py-4 bg-[#1c1917] text-white rounded-full hover:bg-[#754548] transition-all duration-300 cursor-pointer">
                <span className="text-[10px] font-bold font-sans uppercase tracking-widest">Explorar Portfólio</span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-1 group-hover:scale-90 transition-transform">
                    <MoveRight size={14} className="text-stone-900" />
                </div>
            </a>
          </Magnetic>
      </div>

    </section>
  );
};

export default Hero;