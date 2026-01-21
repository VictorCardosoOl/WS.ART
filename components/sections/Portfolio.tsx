import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Componente de Imagem com Parallax Suave e Hover Cinematográfico
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Movimento de parallax: imagem se move levemente contra o scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.15]); 

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-full will-change-transform">
        <img 
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
        />
      </motion.div>
    </div>
  );
};

// Item do Card Bento
const BentoCard = ({ item }: { item: GridGalleryItem }) => {
  return (
    <div 
        className={`group relative w-full h-full overflow-hidden bg-stone-100 cursor-pointer shadow-md hover:shadow-xl transition-all duration-500`}
        data-cursor="VER OBRA"
    >
        {/* MASKING TAPE EFFECT (CSS GENERATED) */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#fdfbf7] opacity-60 z-30 transform -rotate-1 shadow-sm backdrop-blur-sm pointer-events-none mix-blend-lighten border-l border-r border-white/20"></div>

        <ParallaxImage src={item.src} alt={item.altText} />
        
        {/* Gradiente Overlay no Hover - Ink Bleed feel */}
        <div className="absolute inset-0 bg-[#754548] mix-blend-color opacity-0 group-hover:opacity-30 transition-opacity duration-[800ms] ease-out z-10"></div>
        
        {/* Texto/Info Overlay - Aparece no Hover */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
             <div className="flex justify-between items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white border border-white/30 px-2 py-1 rounded-full backdrop-blur-sm">
                    {item.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
                    <ArrowUpRight size={14} />
                </div>
             </div>
             <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <h3 className="font-serif text-3xl md:text-4xl text-white italic leading-none">
                    {item.title}
                </h3>
             </div>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative pt-32 pb-40 bg-[#FAF7F7]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Compacto & Elegante */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#754548]/10 pb-6 relative">
          
          {/* Handwritten Annotation */}
          <span className="absolute -top-8 left-10 font-hand text-2xl text-[#754548] rotate-[-5deg] opacity-60 hidden md:block">
              ( estudo de composição )
          </span>

          <Reveal>
             <div className="flex flex-col gap-2">
                 <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-stone-500 block opacity-60">
                    ( 01 )
                 </span>
                 <h2 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.8] tracking-tighter">
                   Acervo<span className="text-[#754548] text-4xl">.</span>
                 </h2>
             </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-8 md:mt-0 text-right">
              <p className="text-stone-400 font-serif text-lg italic">
                Seleção curada 2023 — 2024
              </p>
            </div>
          </Reveal>
        </div>

        {/* 
            BENTO GRID LAYOUT 
            Grid de 12 colunas para flexibilidade máxima.
            Usa classes md:col-span-X do Tailwind para assimetria.
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[400px] gap-6 md:gap-8 px-2 md:px-0">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`${item.colSpan} relative w-full h-full min-h-[300px] md:min-h-auto`}
                >
                    <Reveal delay={index * 100} width="100%">
                        <div className={`w-full h-full shadow-sm hover:shadow-2xl transition-shadow duration-700`}>
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
               <span className="font-serif italic text-2xl text-stone-400 group-hover:text-[#754548] transition-colors duration-500">
                 Explorar arquivo completo
               </span>
               <div className="relative w-[1px] h-12 bg-stone-300 overflow-hidden">
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