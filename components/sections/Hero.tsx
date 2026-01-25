import React, { useLayoutEffect, useRef } from 'react';
import { MoveRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from '../ui/SplitText';
import Magnetic from '../ui/Magnetic';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Init settings
      gsap.set(".char-reveal", { yPercent: 120 });
      gsap.set(".hero-fade", { y: 20, autoAlpha: 0 });
      gsap.set(".hero-line", { scaleX: 0, transformOrigin: "left center" });

      tl.to(".char-reveal", {
        yPercent: 0,
        duration: 1.8,
        stagger: 0.02,
        ease: "power3.out"
      })
      .to(".hero-line", { scaleX: 1, duration: 1.5, ease: "expo.out" }, "-=1.2")
      .to(".hero-fade", {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        stagger: 0.1
      }, "-=1.0");

      // Parallax
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
      
      gsap.to(titleRef.current, {
        yPercent: -15,
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
    <section ref={containerRef} className="relative min-h-[100dvh] w-full bg-[#FAF7F7] flex flex-col overflow-hidden">
      
      {/* Background Layers */}
      <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,_var(--tw-gradient-stops))] from-rose-100/30 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 pt-32 md:pt-40 flex-grow relative z-20 flex flex-col justify-between">
          
          {/* Top Row: Meta & Statement */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Meta Data (Left) */}
              <div className="md:col-span-4 hero-fade hidden md:flex flex-col gap-2">
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-pantone-accent rounded-full animate-pulse"></div>
                    <span className="font-sans text-meta uppercase font-bold text-stone-400">São Paulo, BR</span>
                 </div>
                 <span className="font-sans text-meta uppercase font-medium text-stone-300 pl-4.5">Est. 2018</span>
              </div>

              {/* Editorial Statement (Right) */}
              <div className="md:col-span-8 md:col-start-5 flex flex-col items-end text-right">
                  <h1 className="font-serif text-fluid-h2 text-pantone-ink leading-tight-editorial tracking-tighter mix-blend-darken">
                      <SplitText charClass="char-reveal" wordClass="overflow-hidden pb-1">
                        A pele como tela eterna.
                      </SplitText>
                  </h1>
                  
                  <div className="hero-line w-full md:w-32 h-[1px] bg-pantone-accent my-8 opacity-60"></div>

                  <p className="hero-fade font-sans text-meta text-stone-500 uppercase font-semibold text-right max-w-[280px] leading-relaxed">
                      Conectamos narrativa pessoal e anatomia em obras neotradicionais.
                  </p>

                  <div className="hero-fade mt-10 -mr-4">
                      <Magnetic strength={0.5}>
                        <a href="#gallery" className="group inline-flex items-center justify-end gap-4 font-sans text-meta font-bold uppercase text-pantone-accent hover:text-stone-900 transition-colors p-4">
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

          {/* Bottom Row: Anchor Text & Scroll */}
          <div className="relative w-full pb-8 mt-auto">
             <div className="hero-fade animate-bounce duration-[3000ms] absolute -top-20 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 opacity-50">
                <ArrowDown size={18} className="text-pantone-accent" />
             </div>
             
             {/* Massive Typography Anchor */}
             <div ref={titleRef} className="w-full text-center leading-[0.7] z-10 mix-blend-darken select-none">
                <span className="font-sans font-black text-[clamp(4rem,21vw,24rem)] text-[#12100E] tracking-tighter opacity-90 block">
                  <SplitText charClass="char-reveal" wordClass="overflow-hidden pb-[1vw]">
                    WILLIAM
                  </SplitText>
                </span>
             </div>
          </div>
      </div>

      {/* Gradient Fade Out */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white z-20 pointer-events-none"></div>

    </section>
  );
};

export default Hero;