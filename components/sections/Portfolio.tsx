import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Componente de Imagem com Parallax Suave
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Movimento sutil para sensação de profundidade premium
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.1]); // Mantém escala constante base para evitar cortes

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-full">
        <img 
          src={src} 
          alt={alt} 
          title={alt}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out-expo group-hover:scale-110"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

// Item do Card
const BentoCard = ({ item, heightClass = "h-full" }: { item: GridGalleryItem, heightClass?: string }) => {
  return (
    <div 
        className={`group relative w-full ${heightClass} overflow-hidden rounded-sm`}
        data-cursor="VER"
    >
        <ParallaxImage src={item.src} alt={item.altText} />
        
        {/* Gradiente Cinematográfico (Bottom Only) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700 z-10"></div>

        {/* Overlay de Texto Elegante */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-out-expo">
            
            {/* Top Line & Category */}
            <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                <span className="h-[1px] w-6 bg-rose-400"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-rose-200">
                    {item.category}
                </span>
            </div>

            {/* Title & Icon Row */}
            <div className="flex justify-between items-end">
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[0.9] italic font-light tracking-tight group-hover:text-rose-50 transition-colors duration-500">
                    {item.title}
                </h3>
                
                {/* Arrow Icon Reveal */}
                <div className="overflow-hidden w-8 h-8 flex items-center justify-center">
                    <ArrowUpRight 
                        className="text-white transform translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500 ease-out-expo" 
                        size={28} 
                        strokeWidth={1}
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  // Separar itens para controle manual do Bento Grid
  const [mainFeature, square1, square2, wideFeature, ...rest] = PORTFOLIO_ITEMS;

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

        {/* BENTO GRID LAYOUT MANUAL 
            Estrutura: 2 Colunas Grandes.
            Esq: 1 Item Alto.
            Dir: Grid aninhado (2 quadrados cima + 1 retangulo baixo).
        */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[800px]">
            
            {/* Coluna Esquerda (Principal Vertical) */}
            <div className="w-full lg:w-1/2 h-[500px] lg:h-full">
                <Reveal width="100%" delay={0}>
                    <BentoCard item={mainFeature} heightClass="h-full" />
                </Reveal>
            </div>

            {/* Coluna Direita (Mosaico) */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 h-full">
                
                {/* Linha Superior (2 Quadrados) */}
                <div className="flex flex-row gap-4 h-1/2">
                    <div className="w-1/2 h-full">
                        <Reveal width="100%" delay={100}>
                            <BentoCard item={square1} heightClass="h-full" />
                        </Reveal>
                    </div>
                    <div className="w-1/2 h-full">
                        <Reveal width="100%" delay={200}>
                            <BentoCard item={square2} heightClass="h-full" />
                        </Reveal>
                    </div>
                </div>

                {/* Linha Inferior (Wide) */}
                <div className="w-full h-1/2">
                    <Reveal width="100%" delay={300}>
                        <BentoCard item={wideFeature} heightClass="h-full" />
                    </Reveal>
                </div>
            </div>
        </div>

        {/* Extra Feature (Full Width) - Separado para manter o Bento puro */}
        {rest.length > 0 && (
            <div className="mt-4 w-full aspect-[21/9] lg:aspect-[3/1] hidden md:block">
                 <Reveal width="100%" delay={400}>
                    <BentoCard item={rest[0]} heightClass="h-full" />
                </Reveal>
            </div>
        )}
        
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