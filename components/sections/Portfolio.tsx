import React, { useRef, useLayoutEffect } from 'react';
import Reveal from '../ui/Reveal';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax leve nas imagens ao scrolar para dar profundidade sutil
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const images = gsap.utils.toArray<HTMLElement>('.portfolio-img');
        images.forEach((img) => {
            gsap.fromTo(img, 
                { scale: 1.1 },
                { 
                    scale: 1.0, 
                    ease: "none", 
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                }
            );
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="gallery" className="relative w-full bg-white pt-12 pb-32 overflow-hidden">
       
       {/* HEADER ANCHOR - STRICTLY TOP RIGHT (Conforme Referência) */}
       <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 mb-6 flex justify-end">
          <span className="font-sans text-[10px] font-medium tracking-widest text-stone-900 uppercase">
             Portfolio
          </span>
       </div>

       <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          
          {/* THE COMPOSITE LAYOUT (TRIPTYCH) - 50% | 25% | 25% */}
          {/* gap-4 cria as "calhas" uniformes mencionadas */}
          <div className="flex flex-col lg:flex-row gap-4 w-full h-auto lg:h-[85vh] mb-20">
              
              {/* BLOCO ESQUERDO (50%) - PLANO MÉDIO / POSTURA */}
              <div className="w-full lg:w-1/2 h-[60vh] lg:h-full relative overflow-hidden bg-stone-100 cursor-none group">
                  <img 
                    src="https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=1600&auto=format&fit=crop"
                    alt="Plano Médio - Relação desenho e postura"
                    className="portfolio-img w-full h-full object-cover grayscale block"
                  />
                  {/* Hover Overlay Info */}
                  <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="bg-white/90 backdrop-blur px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-stone-900">
                          Figura 01: Postura
                      </span>
                  </div>
              </div>

              {/* BLOCOS DIREITA (50% DIVIDIDOS EM DUAS COLUNAS VERTICAIS) */}
              <div className="w-full lg:w-1/2 flex gap-4 h-[40vh] lg:h-full">
                  
                  {/* MEIO (25%) - DETALHE BRAÇO */}
                  <div className="w-1/2 h-full relative overflow-hidden bg-stone-100 cursor-none group">
                      <img 
                        src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=900&auto=format&fit=crop"
                        alt="Detalhamento Fine Line"
                        className="portfolio-img w-full h-full object-cover grayscale block"
                      />
                       <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="bg-white/90 backdrop-blur px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-stone-900">
                              Figura 02: Flow
                          </span>
                      </div>
                  </div>

                  {/* DIREITA (25%) - DETALHE OMBRO/MACRO */}
                  <div className="w-1/2 h-full relative overflow-hidden bg-stone-100 cursor-none group">
                      <img 
                        src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=900&auto=format&fit=crop"
                        alt="Textura e Contraste"
                        className="portfolio-img w-full h-full object-cover grayscale block"
                      />
                       <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="bg-white/90 backdrop-blur px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-stone-900">
                              Figura 03: Textura
                          </span>
                      </div>
                  </div>

              </div>
          </div>

          {/* ANÁLISE TÉCNICA (EDITORIAL SPEC SHEET) */}
          <div className="border-t border-stone-200 pt-10">
              <Reveal width="100%">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                    
                    {/* 01. Info Geral */}
                    <div className="lg:col-span-3">
                        <h3 className="font-serif text-3xl text-stone-900 italic mb-2">Flora Etérea</h3>
                        <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-4">
                            Case Study 001
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#754548] hover:text-stone-900 transition-colors">
                           Ver Projeto Completo <ArrowUpRight size={12} />
                        </a>
                    </div>

                    {/* 02. Composição */}
                    <div className="lg:col-span-3 lg:border-l border-stone-100 lg:pl-6">
                        <h4 className="font-sans text-[9px] font-bold uppercase tracking-widest text-stone-900 mb-3">
                            1. Composição
                        </h4>
                        <p className="font-serif text-sm text-stone-600 leading-relaxed text-justify">
                            Montagem digital disposta em proporção widescreen. Layout assimétrico dividido em três blocos, equilibrando o plano médio da postura (50%) com imagens de suporte para detalhamento.
                        </p>
                    </div>

                    {/* 03. Técnica */}
                    <div className="lg:col-span-3 lg:border-l border-stone-100 lg:pl-6">
                        <h4 className="font-sans text-[9px] font-bold uppercase tracking-widest text-stone-900 mb-3">
                            2. Técnica
                        </h4>
                        <ul className="space-y-2">
                            <li className="flex justify-between items-center text-sm border-b border-stone-50 pb-1">
                                <span className="text-stone-400 font-sans text-[9px] uppercase">Estilo</span>
                                <span className="font-serif text-stone-800">Fine Line & Whip Shading</span>
                            </li>
                             <li className="flex justify-between items-center text-sm border-b border-stone-50 pb-1">
                                <span className="text-stone-400 font-sans text-[9px] uppercase">Agulhas</span>
                                <span className="font-serif text-stone-800">1RL / 3RL Round Liner</span>
                            </li>
                             <li className="flex justify-between items-center text-sm border-b border-stone-50 pb-1">
                                <span className="text-stone-400 font-sans text-[9px] uppercase">Contraste</span>
                                <span className="font-serif text-stone-800">Pele Nua (Luz) vs Pigmento</span>
                            </li>
                        </ul>
                    </div>

                    {/* 04. Anatomia */}
                    <div className="lg:col-span-3 lg:border-l border-stone-100 lg:pl-6">
                        <h4 className="font-sans text-[9px] font-bold uppercase tracking-widest text-stone-900 mb-3">
                            3. Anatomia & Flow
                        </h4>
                        <p className="font-serif text-sm text-stone-600 leading-relaxed text-justify">
                            Projeto de meia-manga fluida. Origem no deltoide posterior, seguindo uma curva helicoidal descendente que respeita a musculatura do tríceps. Iluminação difusa (Softbox) destaca a tridimensionalidade.
                        </p>
                    </div>

                </div>
              </Reveal>
          </div>

       </div>
    </section>
  );
};

export default Portfolio;