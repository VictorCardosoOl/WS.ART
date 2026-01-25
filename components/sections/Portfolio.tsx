import React, { useRef, useLayoutEffect } from 'react';
import Reveal from '../ui/Reveal';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowDownLeft, Scan, Layers, Maximize } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Componente de Imagem com Parallax Físico (Inércia) ---
const ParallaxImage = ({ src, alt, className, speed = 1 }: { src: string, alt: string, className?: string, speed?: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // Parallax suave com 'lag' físico para sensação de peso
        gsap.fromTo(imgRef.current, 
            { yPercent: -10 * speed, scale: 1.1 },
            { 
                yPercent: 10 * speed,
                scale: 1.1,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom", 
                    end: "bottom top",   
                    scrub: 1 // Inércia
                }
            }
        );
    }, containerRef);
    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
        <img 
            ref={imgRef}
            src={src} 
            alt={alt} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale block will-change-transform"
        />
        {/* Camada de Granulação Sutil */}
        <div className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none mix-blend-overlay"></div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} id="gallery" className="relative bg-white w-full pt-12 pb-32 overflow-hidden">
      
      {/* 1. Header Minimalista Ancorado (Top Right) */}
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 mb-8 flex justify-end items-center border-b border-stone-100 pb-4">
          <Reveal delay={100}>
            <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-stone-900 uppercase">
                Portfólio
            </span>
          </Reveal>
      </div>

      {/* 2. COMPOSITE LAYOUT (50% | 25% | 25%) */}
      {/* Altura fixa em desktop para criar o efeito widescreen panorâmico */}
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
          
          <div className="flex flex-col lg:flex-row w-full lg:h-[85vh] gap-4">
              
              {/* BLOCO ESQUERDO (Principal - 50%) */}
              <div className="w-full lg:w-1/2 h-[60vh] lg:h-full relative overflow-hidden group">
                  <ParallaxImage 
                      src="https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=1600&auto=format&fit=crop" 
                      alt="Plano Médio - Anatomia e Postura"
                      speed={1.2}
                  />
                  {/* Overlay Informativo ao Hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                      <div className="text-white mix-blend-difference">
                          <p className="font-sans text-[10px] uppercase tracking-widest mb-1">Figura 01</p>
                          <p className="font-serif text-2xl italic">Plano Médio / Postura</p>
                      </div>
                  </div>
              </div>

              {/* BLOCOS DIREITOS (Central e Direito - 50% divididos) */}
              <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4 h-[60vh] lg:h-full">
                  
                  {/* Bloco Central (25%) */}
                  <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
                      <ParallaxImage 
                          src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=900&auto=format&fit=crop" 
                          alt="Detalhamento Fine Line"
                          speed={1.0}
                      />
                       <div className="absolute top-4 left-4">
                           <Scan size={20} className="text-stone-900/50 mix-blend-difference" strokeWidth={1} />
                       </div>
                  </div>

                  {/* Bloco Direito (25%) */}
                  <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
                      <ParallaxImage 
                          src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=900&auto=format&fit=crop" 
                          alt="Textura e Contraste na Pele"
                          speed={1.1} 
                      />
                      <div className="absolute bottom-4 right-4 rotate-180">
                           <ArrowDownLeft size={20} className="text-stone-900/50 mix-blend-difference" strokeWidth={1} />
                       </div>
                  </div>

              </div>
          </div>

          {/* 3. ANÁLISE TÉCNICA EDITORIAL */}
          <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 border-t border-stone-200 pt-12">
              
              {/* Título do Estudo */}
              <div className="lg:col-span-3">
                  <Reveal>
                      <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-[0.9] mb-4">
                          Flora<br/><span className="italic text-[#754548]">Helicoidal.</span>
                      </h2>
                      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mt-2">
                          Estudo de Caso 001
                      </p>
                  </Reveal>
              </div>

              {/* Coluna 1: Composição */}
              <div className="lg:col-span-3 border-l border-stone-200 pl-6">
                  <Reveal delay={100}>
                      <div className="flex items-center gap-2 mb-4 text-[#754548]">
                          <Maximize size={14} />
                          <h3 className="font-sans text-[10px] font-bold uppercase tracking-widest">Composição & Grid</h3>
                      </div>
                      <p className="font-serif text-lg text-stone-600 leading-relaxed">
                          Layout assimétrico em proporção widescreen. O plano médio foca na postura (50%), enquanto os blocos de suporte detalham a textura. 
                          <br/><br/>
                          <span className="font-sans text-xs text-stone-400 uppercase tracking-wide font-bold">Nota:</span> Equilíbrio minimalista com espaço negativo.
                      </p>
                  </Reveal>
              </div>

              {/* Coluna 2: Técnica */}
              <div className="lg:col-span-3 border-l border-stone-200 pl-6">
                   <Reveal delay={200}>
                      <div className="flex items-center gap-2 mb-4 text-[#754548]">
                          <Layers size={14} />
                          <h3 className="font-sans text-[10px] font-bold uppercase tracking-widest">Técnica & Agulha</h3>
                      </div>
                      <ul className="space-y-4">
                          <li className="font-serif text-lg text-stone-600 leading-tight">
                              <strong className="block font-sans text-xs font-bold text-stone-900 uppercase tracking-wider mb-1">Estilo</strong>
                              Fine Line contemporâneo com Whip Shading (pontilhismo suave).
                          </li>
                          <li className="font-serif text-lg text-stone-600 leading-tight">
                              <strong className="block font-sans text-xs font-bold text-stone-900 uppercase tracking-wider mb-1">Execução</strong>
                              Agulhas 3RL para contornos. Variação de peso de linha para criar profundidade visual nas nervuras.
                          </li>
                      </ul>
                  </Reveal>
              </div>

              {/* Coluna 3: Anatomia */}
              <div className="lg:col-span-3 border-l border-stone-200 pl-6">
                  <Reveal delay={300}>
                      <div className="flex items-center gap-2 mb-4 text-[#754548]">
                          <Scan size={14} />
                          <h3 className="font-sans text-[10px] font-bold uppercase tracking-widest">Mapeamento & Flow</h3>
                      </div>
                      <p className="font-serif text-lg text-stone-600 leading-relaxed mb-6">
                          Projeto "meia-manga" fluida. Origem no deltoide posterior, seguindo uma <span className="italic text-stone-900">curva helicoidal</span> descendente que respeita o tríceps.
                      </p>
                      <div className="bg-stone-100 p-4 rounded-sm">
                          <p className="font-sans text-[10px] uppercase tracking-wider text-stone-500 font-bold mb-1">Iluminação</p>
                          <p className="font-serif text-sm text-stone-800">Luz difusa (Softbox) para destacar a tridimensionalidade do ombro sem reflexos especulares.</p>
                      </div>
                  </Reveal>
              </div>

          </div>

      </div>
    </section>
  );
};

export default Portfolio;