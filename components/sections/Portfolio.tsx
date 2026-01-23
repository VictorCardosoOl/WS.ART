import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Componente de Imagem com Parallax Bidimensional (Vertical + Horizontal)
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax Vertical: Sutil (-5% a 5%)
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  
  // NOVO: Parallax Horizontal Sutil (Cria uma sensação de "pan" cinematográfico ao rolar)
  // Move a imagem levemente da esquerda para a direita (ou vice-versa) durante o scroll vertical
  const x = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);
  
  // Scale Base: 1.15 para garantir que não haja bordas brancas durante o movimento X/Y
  const scaleBase = useTransform(scrollYProgress, [0, 1], [1.15, 1.15]); 

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ y, x, scale: scaleBase }} className="w-full h-full">
        <img 
          src={src} 
          alt={alt} 
          title={alt}
          className="
            w-full h-full object-cover 
            grayscale group-hover:grayscale-0 
            transition-all duration-[800ms] 
            ease-[cubic-bezier(0.22,1,0.36,1)] 
            group-hover:scale-105
          "
          loading="lazy"
          decoding="async"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-[800ms] z-10"></div>

        {/* Overlay de Texto Elegante */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
            
            {/* Top Line & Category */}
            <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span className="h-[1px] w-6 bg-rose-400"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-200">
                    {item.category}
                </span>
            </div>

            {/* Title & Icon Row */}
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-3 max-w-[85%]">
                    <h3 className="font-serif text-3xl md:text-4xl text-white leading-[0.95] italic font-light tracking-tight group-hover:text-rose-50 transition-colors duration-500">
                        {item.title}
                    </h3>
                    
                    {/* NOVA DESCRIÇÃO EDITORIAL */}
                    {item.description && (
                        <p className="text-xs font-sans text-stone-300 font-light leading-relaxed tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-y-4 group-hover:translate-y-0 border-l border-white/20 pl-3">
                            {item.description}
                        </p>
                    )}
                </div>
                
                {/* Arrow Icon Reveal */}
                <div className="overflow-hidden w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight 
                        className="text-white transform translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]" 
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
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                Obras selecionadas 2023 — 2024
              </p>
            </div>
          </Reveal>
        </div>

        {/* 
            BENTO GRID CSS LAYOUT 
            Utiliza CSS Grid para criar o layout Bento.
            auto-rows define a altura base, e os colSpan/rowSpan nos dados definem a geometria.
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[380px] gap-4 md:gap-6">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`${item.colSpan} relative w-full h-full min-h-[300px] md:min-h-auto`}
                >
                    <Reveal delay={index * 50} width="100%">
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
                 Ver arquivo completo
               </span>
               <div className="relative w-[1px] h-12 md:h-16 bg-stone-200 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#754548] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-expo"></div>
               </div>
             </a>
           </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;