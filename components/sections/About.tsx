import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Configuração de Easing
      const elegantEase = "power3.out";

      // 1. Text Reveal (Editorial Masking)
      const lines = gsap.utils.toArray('.about-reveal-line');
      gsap.fromTo(lines, 
        { y: "105%" },
        {
          y: "0%",
          duration: 1.5,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          }
        }
      );

      // 2. Parágrafo Fade In
      gsap.fromTo(".about-text-fade",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: elegantEase,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 70%",
          }
        }
      );

      // 3. Grid de Imagens (Stagger + Parallax)
      const wrappers = gsap.utils.toArray('.about-image-wrapper');
      
      gsap.fromTo(wrappers,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: elegantEase,
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 80%",
          }
        }
      );

      // Micro-Parallax interno nas imagens
      gsap.utils.toArray('.about-inner-img').forEach((img: any) => {
        gsap.fromTo(img, 
          { scale: 1.2, y: "-10%" },
          {
            scale: 1.2,
            y: "10%",
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative py-32 md:py-48 overflow-hidden">
      
      {/* --- ARTISTIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Base */}
          <div className="absolute inset-0 bg-[#FAF7F7]"></div>
          {/* Subtle Pink/Stone Mesh Gradient */}
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-200/30 via-transparent to-transparent opacity-60 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E5D0D4]/20 via-transparent to-transparent opacity-50 blur-3xl"></div>
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* ROW 1: Typography Block */}
        <div ref={textRef} className="flex flex-col lg:flex-row justify-end mb-24 md:mb-32">
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            
            {/* Headline com hierarquia visual forte */}
            <h2 className="font-serif font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter text-stone-900 mb-8 uppercase">
              <div className="overflow-hidden"><span className="about-reveal-line block will-change-transform">Eu sou William</span></div>
              <div className="overflow-hidden"><span className="about-reveal-line block will-change-transform">Siqueira, e eu</span></div>
              <div className="overflow-hidden"><span className="about-reveal-line block text-stone-300 will-change-transform">Materializo</span></div>
              <div className="overflow-hidden"><span className="about-reveal-line block will-change-transform">Histórias.</span></div>
            </h2>

            {/* Subtexto Descritivo */}
            <div className="overflow-hidden mt-4 pl-4 border-l-2 border-pantone-accent/30">
                <p className="about-text-fade font-sans text-lg md:text-xl text-stone-600 max-w-sm leading-relaxed font-light tracking-wide">
                  Especialista em Neotradicional. Transformo narrativas pessoais em anatomia e arte perene.
                </p>
            </div>

          </div>
        </div>

        {/* ROW 2: Image Grid (3 Columns) */}
        <div ref={imagesRef} className="relative">
           {/* Decorative Element */}
           <div className="hidden lg:block absolute -left-12 top-0 font-serif text-6xl leading-none text-pantone-accent/20 about-text-fade">*</div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Image 1 */}
              <div className="about-image-wrapper relative aspect-[3/4] overflow-hidden bg-stone-200 will-change-transform">
                <img 
                  src="https://picsum.photos/800/1066?grayscale&random=201" 
                  alt="Studio Atmosphere" 
                  className="about-inner-img w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Image 2 */}
              <div className="about-image-wrapper relative aspect-[3/4] overflow-hidden bg-stone-200 will-change-transform md:mt-16">
                <img 
                  src="https://picsum.photos/800/1066?grayscale&random=202" 
                  alt="Urban Context" 
                  className="about-inner-img w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Image 3 */}
              <div className="about-image-wrapper relative aspect-[3/4] overflow-hidden bg-stone-200 will-change-transform">
                <img 
                  src="https://picsum.photos/800/1066?grayscale&random=203" 
                  alt="Nature Reference" 
                  className="about-inner-img w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
           </div>
        </div>

      </div>

      {/* SEPARATOR: TORN PAPER EDGE (Transition to Pantone Skin) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180 pointer-events-none">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-[30px] md:h-[40px] fill-pantone-skin">
             <path d="M0,0 L1200,0 L1200,40 L1180,35 L1160,38 L1140,32 L1120,36 L1100,30 L1080,35 L1060,31 L1040,36 L1020,32 L1000,38 L980,30 L960,35 L940,31 L920,36 L900,32 L880,38 L860,30 L840,35 L820,31 L800,36 L780,32 L760,38 L740,30 L720,35 L700,31 L680,36 L660,32 L640,38 L620,30 L600,35 L580,31 L560,36 L540,32 L520,38 L500,30 L480,35 L460,31 L440,36 L420,32 L400,38 L380,30 L360,35 L340,31 L320,36 L300,32 L280,38 L260,30 L240,35 L220,31 L200,36 L180,32 L160,38 L140,30 L120,35 L100,31 L80,36 L60,32 L40,38 L20,30 L0,40 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;