import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from '../ui/SplitText';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title Animation (Line by line reveal)
      const chars = titleRef.current?.querySelectorAll('.about-char');
      if (chars) {
        gsap.fromTo(chars, 
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.02,
            ease: "power4.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
            }
          }
        );
      }

      // 2. Text Fade In
      gsap.from(".about-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 75%",
        }
      });

      // 3. Image Grid Parallax & Entrance
      const images = gsap.utils.toArray<HTMLElement>(".about-img-wrapper");
      
      // Entrance Stagger
      gsap.from(images, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top 85%",
        }
      });

      // Scroll Parallax (Middle image moves slower/faster)
      if (images.length === 3) {
        gsap.to(images[1], {
          yPercent: -15, // Moves up slightly faster than scroll
          ease: "none",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
        
        gsap.to([images[0], images[2]], {
          yPercent: 5, // Moves slightly slower
          ease: "none",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 md:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* PARTE 1: TEXTO EDITORIAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-24 md:mb-32">
            {/* Coluna Esquerda Vazia (Layout assimétrico) */}
            <div className="hidden lg:block"></div>

            {/* Coluna Direita: Conteúdo */}
            <div className="flex flex-col justify-center items-start lg:pl-12">
                <h2 ref={titleRef} className="font-sans font-medium text-5xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-tighter text-stone-900 uppercase mb-8 overflow-hidden">
                    <SplitText charClass="about-char" wordClass="overflow-hidden pb-2 inline-block">
                       Eu sou William Siqueira, e eu materializo histórias.
                    </SplitText>
                </h2>

                <div className="about-text flex flex-col md:flex-row items-end md:items-start justify-between w-full gap-8 mt-4">
                    <p className="font-serif text-xl md:text-2xl text-stone-600 leading-relaxed max-w-md">
                        Especialista em Neotradicional. Transformo narrativas pessoais em anatomia e arte perene.
                    </p>
                </div>
            </div>
        </div>

        {/* PARTE 2: GRID DE 3 IMAGENS (Niveladas) */}
        <div ref={imagesRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
            
            {/* Imagem 01 */}
            <div className="about-img-wrapper relative aspect-[3/4] w-full overflow-hidden bg-stone-100 will-change-transform">
                <img 
                    src="https://picsum.photos/800/1066?grayscale&random=101" 
                    alt="Processo Criativo" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    loading="lazy"
                />
            </div>

            {/* Imagem 02 - Central */}
            <div className="about-img-wrapper relative aspect-[3/4] w-full overflow-hidden bg-stone-100 will-change-transform md:mt-12">
                <img 
                    src="https://picsum.photos/800/1066?grayscale&random=102" 
                    alt="Retrato William Siqueira" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    loading="lazy"
                />
            </div>

            {/* Imagem 03 */}
            <div className="about-img-wrapper relative aspect-[3/4] w-full overflow-hidden bg-stone-100 will-change-transform">
                <img 
                    src="https://picsum.photos/800/1066?grayscale&random=103" 
                    alt="Detalhe Estúdio" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    loading="lazy"
                />
            </div>

        </div>

      </div>
    </section>
  );
};

export default About;