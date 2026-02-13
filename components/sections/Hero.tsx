import React, { useLayoutEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from '../ui/SplitText';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const doodleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. INTRO ANIMATION
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Configuração inicial
      gsap.set(".hero-char", { yPercent: 120, opacity: 0 }); 
      gsap.set(".hero-meta", { opacity: 0, y: -20 });
      gsap.set(".doodle-path", { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 });

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
      }, "-=1.2")
      // Animação do Graffiti (Vibe Os Gêmeos/Sketch)
      .to(".doodle-path", {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2,
        ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})"
      }, "-=1.0");

      // 2. SCROLL PARALLAX & SURREAL FLOAT
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

      // Elemento flutuante (Magritte/Dalí vibe)
      gsap.to(doodleRef.current, {
        y: -30,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-[#FAF7F7] z-10 flex flex-col justify-between">
      
      {/* ATMOSPHERE LAYER (Hokusai/Xilo Texture vibe) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-multiply"></div>
          {/* Mancha de tinta sutil (Portinari/Watercolor) */}
          <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#754548] opacity-[0.03] blur-[100px] rounded-full mix-blend-multiply"></div>
      </div>

      {/* --- SURREAL ELEMENT (Magritte Reference) --- */}
      <div ref={doodleRef} className="absolute top-1/4 left-10 md:left-1/4 z-10 hidden md:block mix-blend-multiply opacity-80 pointer-events-none">
          <div className="relative">
             <p className="font-serif italic text-sm text-[#754548] -rotate-6">"Ceci n'est pas un tatouage."</p>
             {/* Seta desenhada a mão */}
             <svg width="40" height="40" viewBox="0 0 100 100" className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                <path d="M50,0 Q60,50 50,90 M40,80 L50,90 L60,80" fill="none" stroke="#1c1917" strokeWidth="2" className="doodle-path" />
             </svg>
          </div>
      </div>

      {/* --- ANATOMY SKETCH (Medical/Da Vinci Reference) --- */}
      <div className="absolute top-1/3 right-10 md:right-32 z-0 opacity-10 pointer-events-none mix-blend-multiply scale-75 md:scale-100">
         <svg width="300" height="300" viewBox="0 0 200 200" className="rotate-12">
            {/* Esboço abstrato de anatomia/músculos */}
            <path d="M100,20 Q130,50 120,100 T100,180 T80,100 Q70,50 100,20" fill="none" stroke="#1c1917" strokeWidth="0.5" strokeDasharray="5,5" />
            <path d="M100,20 L100,180" fill="none" stroke="#1c1917" strokeWidth="0.2" />
            <path d="M80,100 L120,100" fill="none" stroke="#1c1917" strokeWidth="0.2" />
            <circle cx="100" cy="60" r="10" fill="none" stroke="#754548" strokeWidth="1" />
            <text x="120" y="60" fontSize="8" fontFamily="serif" fill="#1c1917" className="italic">Fig. 1</text>
         </svg>
      </div>

      {/* --- TOP META INFO --- */}
      <div className="relative z-20 w-full px-6 md:px-12 pt-8 flex justify-between items-start hero-meta mix-blend-darken">
          <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-[#1c1917]">Est. 2018</span>
              <span className="text-[9px] font-serif italic text-[#754548]">Private Studio</span>
          </div>
          
          <div className="flex items-center gap-2 text-[#1c1917]">
             <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-right hidden md:block">São Paulo<br/>Brasil</span>
             <MapPin size={14} className="text-[#754548]" />
          </div>
      </div>

      {/* --- BOTTOM ANCHORED TITLE --- */}
      <div className="relative z-10 w-full flex-grow flex items-end justify-center pb-0 md:pb-0 overflow-visible">
          <div ref={titleRef} className="w-full text-center leading-none relative">
              
              {/* GRAFFITI CROWN (Os Gêmeos/Basquiat Reference) */}
              <div className="absolute -top-[15%] left-[18%] md:left-[28%] w-[10vw] h-[10vw] z-20 pointer-events-none mix-blend-multiply">
                 <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-15deg]">
                    <path 
                        d="M10,70 L10,30 L30,50 L50,10 L70,50 L90,30 L90,70 Z" 
                        fill="none" 
                        stroke="#754548" 
                        strokeWidth="3" 
                        strokeLinejoin="round"
                        className="doodle-path"
                    />
                    <path 
                        d="M10,75 L90,75" 
                        fill="none" 
                        stroke="#754548" 
                        strokeWidth="3" 
                        className="doodle-path"
                    />
                 </svg>
              </div>

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