import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Configuração de animação
      const revealEase = "power3.out";
      const revealDuration = 1.2;

      // 1. Text Reveal (Máscara deslizante)
      // Seleciona linhas de texto dentro de containers overflow-hidden
      const lines = gsap.utils.toArray('.about-reveal-line');
      gsap.fromTo(lines, 
        { y: "105%" },
        {
          y: "0%",
          duration: revealDuration,
          stagger: 0.1,
          ease: revealEase,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
          }
        }
      );

      // 2. Grid de Imagens (Entrada escalonada)
      const imgs = gsap.utils.toArray('.about-image-wrapper');
      gsap.fromTo(imgs,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 80%",
          }
        }
      );

      // 3. Micro-Parallax interno nas imagens
      gsap.utils.toArray('.about-inner-img').forEach((img: any) => {
        gsap.to(img, {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative py-32 md:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* ROW 1: Typography Block (Aligned Right structure, Left aligned text) */}
        <div ref={textRef} className="flex flex-col lg:flex-row justify-end mb-24 md:mb-32">
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            
            {/* Headline com hierarquia visual forte */}
            <h2 className="font-sans font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter text-stone-900 mb-8 uppercase">
              <div className="overflow-hidden"><span className="about-reveal-line block">Eu sou William</span></div>
              <div className="overflow-hidden"><span className="about-reveal-line block">Siqueira, e eu</span></div>
              <div className="overflow-hidden"><span className="about-reveal-line block text-stone-300">Materializo</span></div>
              <div className="overflow-hidden"><span className="about-reveal-line block">Histórias.</span></div>
            </h2>

            {/* Subtexto Descritivo */}
            <div className="overflow-hidden mt-2">
               <div className="about-reveal-line">
                  <p className="font-serif text-lg md:text-xl text-stone-500 max-w-sm leading-relaxed">
                    Especialista em Neotradicional. Transformo narrativas pessoais em anatomia e arte perene.
                  </p>
               </div>
            </div>

          </div>
        </div>

        {/* ROW 2: Image Grid (3 Columns) */}
        <div ref={imagesRef} className="relative">
           {/* Decorative Element (Dot) from reference */}
           <div className="hidden lg:block absolute -left-8 top-0 text-4xl leading-none text-stone-900">•</div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Image 1 */}
              <div className="about-image-wrapper relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img 
                  src="https://picsum.photos/800/1066?grayscale&random=201" 
                  alt="Studio Atmosphere" 
                  className="about-inner-img w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Image 2 */}
              <div className="about-image-wrapper relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img 
                  src="https://picsum.photos/800/1066?grayscale&random=202" 
                  alt="Urban Context" 
                  className="about-inner-img w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Image 3 */}
              <div className="about-image-wrapper relative aspect-[3/4] overflow-hidden bg-stone-100">
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
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-[30px] md:h-[40px] fill-pantone-skin">
             <path d="M0,0 L1200,0 L1200,40 L1180,35 L1160,38 L1140,32 L1120,36 L1100,30 L1080,35 L1060,31 L1040,36 L1020,32 L1000,38 L980,30 L960,35 L940,31 L920,36 L900,32 L880,38 L860,30 L840,35 L820,31 L800,36 L780,32 L760,38 L740,30 L720,35 L700,31 L680,36 L660,32 L640,38 L620,30 L600,35 L580,31 L560,36 L540,32 L520,38 L500,30 L480,35 L460,31 L440,36 L420,32 L400,38 L380,30 L360,35 L340,31 L320,36 L300,32 L280,38 L260,30 L240,35 L220,31 L200,36 L180,32 L160,38 L140,30 L120,35 L100,31 L80,36 L60,32 L40,38 L20,30 L0,40 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;