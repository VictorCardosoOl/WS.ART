import React, { useLayoutEffect, useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (imgRef.current && containerRef.current) {
        gsap.fromTo(imgRef.current, 
          { 
            yPercent: -15, 
            scale: 1.15 
          },
          {
            yPercent: 15,
            scale: 1.15, // Mantém escala para evitar bordas brancas durante o movimento
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true // Vincula o progresso da animação diretamente ao scroll
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden w-full h-full ${className}`}>
      <div className="w-full h-full overflow-hidden">
        <img 
          ref={imgRef}
          src={src} 
          alt={alt} 
          title={alt}
          className="
            w-full h-full object-cover 
            grayscale group-hover:grayscale-0 
            transition-all duration-[1200ms] 
            ease-[cubic-bezier(0.22,1,0.36,1)] 
            will-change-transform
          "
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

const BentoCard = ({ item }: { item: GridGalleryItem }) => {
  return (
    <div 
        className={`group relative w-full h-full overflow-hidden bg-stone-100 cursor-pointer flex flex-col`}
        data-cursor="VER PROJETO"
    >
        <ParallaxImage src={item.src} alt={item.altText} className="absolute inset-0" />
        
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-10"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 group-hover:opacity-100">
            <div className="flex items-center gap-3 mb-2">
                <span className="h-[1px] w-6 bg-rose-400"></span>
                <span className="font-sans text-[10px] uppercase tracking-widest font-bold text-rose-200">
                    {item.category}
                </span>
            </div>

            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-3 max-w-[85%]">
                    <h3 className="font-serif text-3xl md:text-4xl text-white leading-none tracking-tight">
                        {item.title}
                    </h3>
                    
                    {item.description && (
                        <p className="font-sans text-[10px] text-stone-300 leading-relaxed tracking-wide border-l border-white/20 pl-3 hidden md:block">
                            {item.description}
                        </p>
                    )}
                </div>
                
                <div className="overflow-hidden w-8 h-8 flex items-center justify-center flex-shrink-0 bg-white/10 backdrop-blur rounded-full">
                    <ArrowUpRight 
                        className="text-white" 
                        size={16} 
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative pt-32 pb-40 bg-white overflow-hidden">
      
      {/* Background Gradient Sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FAF7F7] via-white to-white pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-stone-100 pb-8">
          <Reveal>
             <h2 className="font-serif text-6xl md:text-8xl text-stone-900 leading-[0.85] tracking-tighter uppercase">
               Acervo<span className="text-[#754548] text-4xl align-top">.</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-8 md:mt-0 text-right">
              <p className="font-sans text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                Obras selecionadas 2023 — 2024
              </p>
            </div>
          </Reveal>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[400px] gap-6">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`${item.colSpan} relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-700`}
                >
                    <Reveal delay={index * 100} width="100%">
                        <div className="w-full h-full absolute inset-0">
                             <BentoCard item={item} />
                        </div>
                    </Reveal>
                </div>
            ))}
        </div>
        
        <div className="mt-32 text-center" data-cursor="EXPLORAR">
           <Reveal>
             <a href="https://instagram.com" className="group inline-flex flex-col items-center gap-4 p-4">
               <span className="font-serif text-2xl text-stone-400 group-hover:text-stone-900 transition-colors duration-500 uppercase tracking-tight italic">
                 Ver arquivo completo
               </span>
               <div className="relative w-[1px] h-16 bg-stone-200 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#754548] -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
               </div>
             </a>
           </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;