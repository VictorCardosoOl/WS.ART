import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from '../ui/SplitText';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animação de Entrada do Texto
      gsap.from(".about-text-reveal", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // --- FÍSICA DE PARALLAX SOBREPOSTO ---
      // Imagem 1 (Trás/Esquerda): Move-se lentamente (fundo)
      gsap.to(".about-img-1", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5 // Scrub alto cria a sensação de "peso/inércia"
        }
      });

      // Imagem 2 (Meio/Centro): Move-se em velocidade média
      gsap.to(".about-img-2", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Imagem 3 (Frente/Direita): Move-se mais rápido (primeiro plano)
      gsap.to(".about-img-3", {
        yPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2 // Muita inércia
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 md:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* LAYOUT GRID MISTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Coluna de Texto (Sticky vibe) */}
            <div className="lg:col-span-5 relative z-20">
                <div className="about-text-reveal">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#754548] mb-6 block">
                        O Artista
                    </span>
                    <h2 className="font-sans font-medium text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-tighter text-stone-900 uppercase mb-8">
                        William Siqueira.
                    </h2>
                </div>

                <div className="about-text-reveal space-y-6">
                    <p className="font-serif text-2xl text-stone-600 leading-relaxed">
                        Materializo histórias através da anatomia e do contraste.
                    </p>
                    <p className="font-sans font-light text-stone-500 text-sm md:text-base leading-loose max-w-md">
                        Minha abordagem neotradicional busca o equilíbrio entre o peso da linha clássica e a fluidez da forma contemporânea. Cada projeto é uma colaboração íntima para criar algo que não apenas adorna, mas pertence ao corpo.
                    </p>
                    <div className="pt-4">
                        <span className="inline-block border-b border-stone-300 pb-1 text-xs font-bold uppercase tracking-widest text-stone-900 cursor-pointer hover:border-[#754548] transition-colors">
                            Ler Manifesto
                        </span>
                    </div>
                </div>
            </div>

            {/* Coluna Visual: Composição Sobreposta (Overlapped) */}
            <div ref={imagesRef} className="lg:col-span-7 relative h-[600px] md:h-[800px] w-full flex items-center justify-center mt-12 lg:mt-0 perspective-1000">
                
                {/* Imagem 1: Fundo Esquerda */}
                <div className="about-img-1 absolute left-0 top-0 md:left-[5%] md:top-[10%] w-[45%] aspect-[3/4] z-10 shadow-lg grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                        src="https://picsum.photos/800/1066?grayscale&random=101" 
                        alt="Processo Criativo" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#754548]/10 mix-blend-multiply"></div>
                </div>

                {/* Imagem 2: Centro (Principal) */}
                <div className="about-img-2 absolute left-[25%] top-[15%] md:left-[30%] md:top-[20%] w-[50%] aspect-[3/4] z-20 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-[8px] border-white">
                    <img 
                        src="https://picsum.photos/800/1066?grayscale&random=102" 
                        alt="Retrato William" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Imagem 3: Frente Direita */}
                <div className="about-img-3 absolute right-0 bottom-0 md:right-[5%] md:bottom-[15%] w-[40%] aspect-[4/5] z-30 shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                        src="https://picsum.photos/800/1066?grayscale&random=103" 
                        alt="Detalhe Studio" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 max-w-[150px] hidden md:block border border-stone-100 shadow-sm">
                        <p className="font-serif text-sm italic text-stone-600 leading-tight">
                            "Arte perene."
                        </p>
                    </div>
                </div>

            </div>

        </div>
      </div>
    </section>
  );
};

export default About;