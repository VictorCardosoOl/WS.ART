import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(".about-title-word", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 80%",
        }
      });

      // Text content animation
      gsap.from(".about-content", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 80%",
        }
      });

      // Images Stagger
      gsap.from(".about-image", {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-images",
          start: "top 70%",
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative py-32 md:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* PARTE 1: TEXTO EDITORIAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 mb-32 md:mb-40 about-header gap-12">
            
            <div className="lg:col-span-8">
                <h2 className="font-sans font-medium text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter text-stone-900 uppercase overflow-hidden">
                    <span className="block about-title-word">Eu sou William</span>
                    <span className="block about-title-word">Siqueira, e eu</span>
                    <span className="block about-title-word text-stone-300">materializo</span>
                    <span className="block about-title-word">histórias.</span>
                </h2>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end about-content">
                <p className="font-serif text-xl md:text-2xl text-stone-600 leading-relaxed">
                    Especialista em Neotradicional. Transformo narrativas pessoais em anatomia e arte perene, criando uma conexão visceral entre a obra e o corpo.
                </p>
                <div className="h-[1px] w-full bg-stone-200 mt-8"></div>
            </div>
        </div>

        {/* PARTE 2: GRID DE 3 IMAGENS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end about-images">
            
            {/* Imagem 01 */}
            <div className="about-image relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-stone-100 md:mb-12">
                <img 
                    src="https://picsum.photos/800/1066?grayscale&random=101" 
                    alt="Processo Criativo" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                />
            </div>

            {/* Imagem 02 */}
            <div className="about-image relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-stone-100">
                <img 
                    src="https://picsum.photos/800/1066?grayscale&random=102" 
                    alt="Retrato William Siqueira" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                />
            </div>

            {/* Imagem 03 */}
            <div className="about-image relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-stone-100 md:mb-24">
                <img 
                    src="https://picsum.photos/800/1066?grayscale&random=103" 
                    alt="Detalhe Estúdio" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                />
            </div>

        </div>

      </div>
    </section>
  );
};

export default About;