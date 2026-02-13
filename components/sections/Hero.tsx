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
      // 1. INTRO ANIMATION
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Configuração inicial
      gsap.set(".hero-char", { yPercent: 120, opacity: 0 }); 
      gsap.set(".hero-meta", { opacity: 0, y: -20 });

      // Animação de Entrada
      tl.to(".hero-char", {
        yPercent: 0,
        opacity: 1,
        duration: 1.6,
        stagger: 0.05,
        ease: "power4.out"
      })
      .to(".hero-meta", {
        y: 0,
        opacity: 1,
        duration: 1.0,
      }, "-=1.2");

      // 2. SCROLL PARALLAX (Sutil)
      gsap.to(titleRef.current, {
        yPercent: 10, // Move-se levemente para baixo ao rolar
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
      
      {/* ATMOSPHERE LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay"></div>
          {/* Gradiente sutil apenas no topo */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-60"></div>
      </div>

      {/* --- TOP META INFO (Minimalista) --- */}
      <div className="relative z-20 w-full px-6 md:px-12 pt-8 flex justify-between items-start hero-meta mix-blend-darken">
          <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-[#1c1917]">Est. 2018</span>
          </div>
          
          <div className="flex items-center gap-2 text-[#1c1917]">
             <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-right hidden md:block">São Paulo<br/>Brasil</span>
             <MapPin size={14} className="text-[#754548]" />
          </div>
      </div>

      {/* --- BOTTOM ANCHORED TITLE --- */}
      <div className="relative z-10 w-full flex-grow flex items-end justify-center pb-0 md:pb-0 overflow-hidden">
          <div ref={titleRef} className="w-full text-center leading-none">
              <h1 className="font-display font-bold text-[24vw] text-[#1c1917] tracking-tighter leading-[0.75] select-none whitespace-nowrap overflow-visible translate-y-[2%]">
                   <SplitText charClass="hero-char inline-block will-change-transform" wordClass="overflow-visible inline-block">
                    WILLIAM
                   </SplitText>
              </h1>
          </div>
      </div>

    </section>
  );
};

export default Hero;