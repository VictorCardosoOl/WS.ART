import React, { useRef, useLayoutEffect } from 'react';
import Reveal from '../ui/Reveal';
import ParallaxImage from '../ui/ParallaxImage';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imagesColRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Só ativa o PIN em telas grandes (Desktop)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: textColRef.current, // Fixa a coluna de texto
          scrub: true,
          // markers: true, // Debug
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative bg-white overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Coluna Esquerda: Texto (PINNED) */}
            {/* Altura h-screen para garantir que o pin funcione centralizado verticalmente se desejado, 
                ou ajustado ao conteúdo. No design neotrad, queremos centralizado. */}
            <div ref={textColRef} className="lg:w-1/2 flex flex-col justify-center py-24 lg:h-screen lg:sticky lg:top-0">
                <Reveal>
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-12 h-[1px] bg-stone-900"></div>
                       <span className="text-xs font-bold uppercase tracking-widest text-stone-900">O Artista</span>
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <h2 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-stone-900 uppercase tracking-tighter mb-8">
                        William<br />
                        Siqueira.
                    </h2>
                </Reveal>
                
                <Reveal delay={200}>
                    <div className="max-w-md space-y-6 text-lg font-serif text-stone-600 leading-relaxed">
                        <p>
                            Não desenho apenas na pele; construo extensões da sua identidade.
                        </p>
                        <p>
                            Com uma década de estudo em anatomia e história da arte, meu trabalho busca o equilíbrio perfeito entre o <span className="text-[#754548] italic">peso do traço</span> e a leveza da composição.
                        </p>
                        <p>
                            Cada projeto é uma colaboração íntima, onde suas memórias se tornam matéria visual perene.
                        </p>
                    </div>
                </Reveal>

                {/* Assinatura ou detalhe extra */}
                <Reveal delay={300}>
                   <div className="mt-12 opacity-80">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signature" className="h-12 w-auto opacity-50 grayscale invert-0" />
                   </div>
                </Reveal>
            </div>

            {/* Coluna Direita: Imagens (SCROLLABLE) */}
            {/* Precisa ser mais alta que a tela para gerar o tempo de scroll do PIN */}
            <div ref={imagesColRef} className="lg:w-1/2 py-24 flex flex-col gap-24 lg:gap-32">
                
                {/* Imagem 1 */}
                <div className="w-full aspect-[3/4] relative group">
                    <div className="absolute -left-12 top-12 font-serif text-9xl text-stone-100 font-bold -z-10 select-none">01</div>
                    <ParallaxImage 
                        src="https://images.unsplash.com/photo-1565620612-421422703816?q=80&w=800&auto=format&fit=crop" 
                        alt="Processo Industrial" 
                    />
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-stone-400">Ateliê — 2023</p>
                </div>
                
                {/* Imagem 2 (Deslocada) */}
                <div className="w-full aspect-[4/3] relative group lg:ml-12 lg:w-[90%]">
                     <div className="absolute -right-12 top-12 font-serif text-9xl text-stone-100 font-bold -z-10 select-none">02</div>
                     <ParallaxImage 
                        src="https://images.unsplash.com/photo-1549140698-b6481cb7076c?q=80&w=800&auto=format&fit=crop" 
                        alt="Fachada Estúdio" 
                    />
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-stone-400 text-right">O Espaço</p>
                </div>

                {/* Imagem 3 */}
                <div className="w-full aspect-[3/4] relative group lg:w-[80%]">
                     <div className="absolute -left-12 bottom-12 font-serif text-9xl text-stone-100 font-bold -z-10 select-none">03</div>
                     <ParallaxImage 
                        src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop" 
                        alt="Inspiração Natural" 
                    />
                     <p className="mt-4 text-xs font-bold uppercase tracking-widest text-stone-400">Natureza Morta</p>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default About;