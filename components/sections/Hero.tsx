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
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(".char-reveal", { yPercent: 120, opacity: 0 }); 
      gsap.set(".hero-fade", { y: 30, autoAlpha: 0 });

      tl.to(".char-reveal", {
        yPercent: 0,
        opacity: 1,
        duration: 1.6,
        stagger: { amount: 0.8, from: "center" },
        ease: "power4.out"
      })
      .to(".hero-fade", {
        y: 0,
        autoAlpha: 1,
        duration: 1.4,
        stagger: 0.15
      }, "-=1.4");

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-[#FAF7F7] z-10 flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 lg:px-24">
      
      {/* Background Ambience */}
      <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none opacity-40">
           <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-b from-[#E5D0D4] to-transparent blur-[120px]"></div>
      </div>

      {/* Top Meta */}
      <div className="flex justify-between items-start w-full relative z-10 mix-blend-difference text-white">
         <div className="hero-fade flex flex-col gap-1">
             <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">São Paulo, BR</span>
             <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Est. 2018</span>
         </div>
         <div className="hero-fade hidden md:block">
             <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">[ Scroll ]</span>
         </div>
      </div>

      {/* Main Content - Editorial Layout */}
      <div className="relative z-20 flex-grow flex flex-col justify-center items-start md:items-center">
          <h1 className="font-serif text-[16vw] md:text-[14vw] leading-[0.8] tracking-tighter text-[#1c1917] mix-blend-darken text-left md:text-center w-full">
            <SplitText charClass="char-reveal" wordClass="overflow-hidden pb-[1vw]">
               ART
            </SplitText>
            <br />
            <span className="ml-[15vw] md:ml-0 italic text-[#754548] font-light">
                <SplitText charClass="char-reveal" wordClass="overflow-hidden pb-[1vw]">
                   PERENE
                </SplitText>
            </span>
          </h1>
          
          <div className="hero-fade mt-12 md:mt-16 max-w-md text-left md:text-center">
              <p className="font-sans text-xs md:text-sm text-stone-500 leading-relaxed tracking-wide font-medium uppercase">
                  A pele como tela. <br/>
                  Uma experiência de ritual e anatomia.
              </p>
          </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-20 w-full flex justify-between items-end">
          <div className="hero-fade animate-bounce duration-[3000ms]">
                <ArrowDown size={18} className="text-[#1c1917]" />
          </div>

          <div className="hero-fade">
             <Magnetic strength={0.5}>
                <a href="#booking" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1c1917] hover:text-[#754548] transition-colors pb-1 border-b border-[#1c1917]">
                    Iniciar Aplicação
                    <MoveRight size={14} />
                </a>
             </Magnetic>
          </div>
      </div>

    </section>
  );
};

export default Hero;