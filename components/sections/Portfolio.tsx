import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Componente de Imagem com Parallax Sutil e Efeitos de Hover Refinados
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax Vertical: Sutil (-5% a 5%) para profundidade elegante
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  
  // Scale Base: 1.1 para permitir o movimento parallax sem cortes
  const scaleBase = useTransform(scrollYProgress, [0, 1], [1.15, 1.15]); 

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ y, scale: scaleBase }} className="w-full h-full will-change-transform">
        <img 
          src={src} 
          alt={alt} 
          title={alt}
          className="
            w-full h-full object-cover 
            grayscale group-hover:grayscale-0 
            transition-all duration-[1000ms] 
            ease-[cubic-bezier(0.22,1,0.36,1)] 
            group-hover:scale-105
          "
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

// Item do Card Bento (Estilo Cinematográfico)
const BentoCard = ({ item }: { item: GridGalleryItem }) => {
  return (
    <div 
        className={`group relative w-full h-full overflow-hidden rounded-sm bg-stone-100 cursor-pointer`}
        data-cursor="VER PROJETO"
    >
        <ParallaxImage src={item.src} alt={item.altText} />
        
        {/* Gradiente Cinematográfico (Sempre visível no fundo, intensifica no hover) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-10"></div>

        {/* Overlay de Texto Elegante */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
            
            {/* Top Line & Category */}
            <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                <span className="h-[1px] w-6 bg-rose-400"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-rose-200">
                    {item.category}
                </span>
            </div>

            {/* Title & Icon Row */}
            <div className="flex justify-between items-end">
                <h3 className="font-serif text-3xl md:text-4xl text-white leading-[0.95] italic font-light tracking-tight group-hover:text-rose-50 transition-colors duration-700">
                    {item.title}
                </h3>
                
                {/* Arrow Icon Reveal */}
                <div className="overflow-hidden w-8 h-8 flex items-center justify-center">
                    <ArrowUpRight 
                        className="text-white transform translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]" 
                        size={24} 
                        strokeWidth={1.5}
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative pt-32 pb-40 bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Compacto & Elegante */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-stone-100 pb-6">
          <Reveal>
             <h2 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.8] tracking-tighter">
               Acervo<span className="text-[#754548] text-4xl">.</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-8 md:mt-0 text-right">
              <p className="text-stone-400 font-serif text-lg italic">
                Obras selecionadas 2023 — 2024
              </p>
            </div>
          </Reveal>
        </div>

        {/* 
            BENTO GRID CSS LAYOUT 
            - grid-cols-12 para flexibilidade máxima.
            - auto-rows define uma altura base para as linhas implícitas.
            - gap refinado para elegância.
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[350px] gap-4 md:gap-5">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`${item.colSpan} relative w-full h-full min-h-[300px] md:min-h-auto`}
                >
                    <Reveal delay={index * 50} width="100%">
                        {/* Wrapper height é controlado pelo grid parent e pela classe h-full do container */}
                        <div className={`w-full h-full`}>
                             <BentoCard item={item} />
                        </div>
                    </Reveal>
                </div>
            ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-24 text-center" data-cursor="EXPLORAR">
           <Reveal>
             <a href="https://instagram.com" className="group inline-flex flex-col items-center gap-3">
               <span className="font-serif italic text-2xl text-stone-400 group-hover:text-stone-900 transition-colors duration-500">
                 Ver coleção completa
               </span>
               <div className="relative w-[1px] h-12 bg-stone-200 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#754548] -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
               </div>
             </a>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;