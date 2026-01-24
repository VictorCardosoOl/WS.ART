import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from '../ui/SplitText';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageMaskRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Image Unveil Animation (Masking)
      gsap.fromTo(imageMaskRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.8,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );

      // 2. Image Parallax
      gsap.fromTo(imageRef.current,
        { scale: 1.25, yPercent: -10 },
        {
          scale: 1,
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // 3. Text Stagger Animation
      // Note: We target specific classes for a cleaner stagger
      const textElements = gsap.utils.toArray('.about-reveal');
      gsap.fromTo(textElements, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: "top 75%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 md:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
                <div ref={imageMaskRef} className="relative aspect-[4/5] overflow-hidden rounded-sm">
                    <img 
                        ref={imageRef}
                        src="https://picsum.photos/800/1066?grayscale&random=101" 
                        alt="William Siqueira" 
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-[#754548]/10 mix-blend-multiply"></div>
                </div>
                
                {/* Floating Caption - Parallaxed slightly differently */}
                <div className="absolute -bottom-6 -right-6 bg-[#FAF7F7] p-8 max-w-[240px] hidden md:block border border-stone-100 shadow-sm z-20">
                    <p className="font-serif text-xl italic text-stone-600 leading-tight">
                        "A técnica serve apenas para libertar a visão."
                    </p>
                </div>
            </div>

            {/* Content Column */}
            <div ref={textContainerRef} className="lg:col-span-7 lg:pl-16 about-text-container">
                <div className="about-reveal">
                    <h2 className="font-sans font-medium text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter text-stone-900 uppercase mb-10">
                        Eu materializo histórias.
                    </h2>
                </div>

                <div className="space-y-10">
                    <p className="about-reveal font-serif text-2xl md:text-4xl text-stone-600 leading-[1.1] tracking-tight">
                        Especialista em <span className="italic text-[#754548]">Neotradicional</span>. Transformo narrativas pessoais em anatomia e arte perene.
                    </p>
                    
                    <div className="about-reveal h-[1px] w-24 bg-stone-200 my-8"></div>

                    <p className="about-reveal font-sans font-light text-stone-500 text-base md:text-lg leading-relaxed max-w-xl">
                        A arte sempre foi minha linguagem. Do design gráfico ao cinema de animação, explorei diversas formas de expressão visual até encontrar na tatuagem o meio definitivo. Busco criar uma conexão intrínseca entre a obra e a pessoa que a carrega.
                    </p>

                    <div className="about-reveal pt-6">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#754548] border-b border-[#754548] pb-1 cursor-pointer hover:opacity-70 transition-opacity">
                            Conheça o Manifesto
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;