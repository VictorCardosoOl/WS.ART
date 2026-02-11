import React, { useLayoutEffect, useRef } from 'react';
import Reveal from '../ui/Reveal';
import ParallaxImage from '../ui/ParallaxImage';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const imagesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Mask Reveal (Igual página O Processo)
      // Anima cada linha do título saindo de y:100% para y:0%
      if (titleLinesRef.current.length > 0) {
        gsap.fromTo(titleLinesRef.current,
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
            }
          }
        );
      }

      // 2. Triptych Parallax (Imagens se movem em velocidades diferentes)
      const images = imagesRef.current?.children;
      if (images && window.innerWidth > 768) {
        // Imagem do meio move mais devagar (profundidade)
        gsap.to(images[1], {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });

        // Imagens das pontas movem mais rápido (frente)
        gsap.to([images[0], images[2]], {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToLines = (el: HTMLSpanElement | null) => {
    if (el && !titleLinesRef.current.includes(el)) {
        titleLinesRef.current.push(el);
    }
  };

  return (
    <section ref={containerRef} id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 md:mb-24 items-end">
            <div className="hidden lg:block relative h-full">
               <div className="absolute bottom-4 left-0 w-2 h-2 bg-stone-900 rounded-full animate-pulse"></div>
               <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-stone-400">
                  Manifesto Artístico
               </div>
            </div>

            <div className="flex flex-col justify-end text-left">
                {/* Título com Mask Reveal Manual para controle total */}
                <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl leading-[0.9] text-stone-900 uppercase tracking-tighter mb-8">
                    <div className="overflow-hidden">
                        <span ref={addToLines} className="block will-change-transform">Eu sou William</span>
                    </div>
                    <div className="overflow-hidden">
                        <span ref={addToLines} className="block will-change-transform">Siqueira, e eu</span>
                    </div>
                    <div className="overflow-hidden">
                        <span ref={addToLines} className="block text-stone-400 will-change-transform">Materializo</span>
                    </div>
                    <div className="overflow-hidden">
                        <span ref={addToLines} className="block will-change-transform">Histórias.</span>
                    </div>
                </h2>
                
                <Reveal delay={200}>
                    <div className="max-w-md border-l border-[#754548] pl-6 ml-1">
                        <p className="font-serif text-lg text-stone-600 leading-relaxed">
                            Especialista em Neotradicional.<br />
                            Transformo narrativas pessoais em anatomia e arte perene.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={400}>
                    <div className="mt-10 pl-1">
                        <Link to="/processo" className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#754548] hover:text-stone-900 transition-colors">
                            <span>Entenda o Processo</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </div>

        {/* Grid de 3 Imagens - Estilo Tríptico */}
        <div ref={imagesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px] items-center">
            {/* Imagem 1 */}
            <div className="w-full aspect-[3/4] md:h-[90%] md:aspect-auto relative group overflow-hidden shadow-lg shadow-stone-200">
                <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                    <ParallaxImage 
                        src="https://images.unsplash.com/photo-1565620612-421422703816?q=80&w=800&auto=format&fit=crop" 
                        alt="Processo Industrial" 
                    />
                </div>
            </div>
            
            {/* Imagem 2 (Central - Fica maior ou deslocada) */}
            <div className="w-full aspect-[3/4] md:h-[110%] md:aspect-auto relative group overflow-hidden shadow-2xl shadow-stone-300 z-10">
                 <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                    <ParallaxImage 
                        src="https://images.unsplash.com/photo-1549140698-b6481cb7076c?q=80&w=800&auto=format&fit=crop" 
                        alt="Fachada Estúdio" 
                    />
                 </div>
            </div>

            {/* Imagem 3 */}
            <div className="w-full aspect-[3/4] md:h-[90%] md:aspect-auto relative group overflow-hidden shadow-lg shadow-stone-200">
                 <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                    <ParallaxImage 
                        src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop" 
                        alt="Inspiração Natural" 
                    />
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;