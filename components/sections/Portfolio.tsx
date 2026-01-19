import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform } from 'framer-motion';

// Componente para Imagem com Parallax + Respiração Orgânica
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax lento e pesado
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  
  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div 
        style={{ y }} 
        className="w-full h-full"
        // Efeito "Breathing" contínuo: Zoom in/out muito lento e sutil
        animate={{ scale: [1.05, 1.1, 1.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <img 
          src={src} 
          alt={alt} 
          title={alt}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-out"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

// Helper function to get organic border radius classes based on index
const getOrganicRadius = (index: number) => {
    const shapes = [
        "rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-sm rounded-bl-sm", // Shape 1
        "rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-sm rounded-br-sm", // Shape 2
        "rounded-t-[8rem] rounded-b-sm", // Shape 3
        "rounded-l-[4rem] rounded-r-sm", // Shape 4
    ];
    return shapes[index % shapes.length];
};

const PortfolioItem = ({ item, index }: { item: GridGalleryItem, index: number }) => {
  const organicRadius = getOrganicRadius(index);

  return (
    <div className={`group relative w-full flex flex-col ${item.offsetY} cursor-hover`}>
      
      {/* Container da Imagem com Bordas Orgânicas */}
      <div className={`relative w-full ${item.height} overflow-hidden bg-stone-100 mb-8 shadow-lg transition-all duration-700 ${organicRadius}`}>
        <ParallaxImage src={item.src} alt={item.altText} />
        
        {/* Overlay Hover Minimalista */}
        <div className="absolute inset-0 bg-[#754548]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-multiply pointer-events-none"></div>
      </div>

      {/* Meta Dados Minimalistas */}
      <div className="flex items-start justify-between border-b border-stone-100 pb-4 group-hover:border-[#754548] transition-colors duration-1000 pl-2">
         <div className="flex flex-col gap-1">
            <span className="font-serif text-3xl md:text-4xl text-stone-900 leading-none group-hover:italic transition-all duration-700">
              {item.title}
            </span>
         </div>
         <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 group-hover:text-[#754548] mt-1 transition-colors duration-700">
            {item.category}
         </span>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative pt-40 pb-64 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header com Design Editorial e Espaço Negativo */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 md:mb-48">
          <Reveal>
             <h2 className="text-7xl md:text-[9vw] font-serif text-stone-900 leading-[0.85] tracking-tighter">
               Acervo<br/>
               <span className="italic text-[#754548] opacity-80 ml-16 md:ml-32">Selecionado</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-16 md:mt-0 max-w-xs text-right">
              <p className="text-stone-400 text-[10px] leading-relaxed uppercase tracking-[0.2em] mb-4">
                [ Arquivo 2023 — 2024 ]
              </p>
              <p className="text-stone-500 font-serif text-xl italic font-light leading-snug">
                Uma curadoria de narrativas visuais eternizadas na pele.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Grid Assimétrico e Quebrado */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-32">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className={`${item.colSpan}`}
            >
              <Reveal delay={index % 2 * 150} width="100%">
                {/* Margin negativa artificial em itens pares para quebrar o alinhamento perfeito */}
                <div className={`${index % 2 !== 0 ? 'md:-mt-24' : ''}`}>
                   <PortfolioItem item={item} index={index} />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
        
        {/* Footer Link Minimalista */}
        <div className="mt-48 text-center cursor-hover">
           <Reveal>
             <a href="https://instagram.com" className="group inline-flex items-center gap-6">
               <span className="w-16 h-[1px] bg-stone-200 group-hover:w-32 group-hover:bg-[#754548] transition-all duration-1000"></span>
               <span className="font-serif italic text-3xl text-stone-400 group-hover:text-stone-900 transition-colors duration-700">Explorar arquivo completo</span>
               <span className="w-16 h-[1px] bg-stone-200 group-hover:w-32 group-hover:bg-[#754548] transition-all duration-1000"></span>
             </a>
           </Reveal>
        </div>

      </div>

      {/* SEPARATOR: Smooth Gradient to Pink (About Section) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#FDF7F8] pointer-events-none z-10"></div>
    </section>
  );
};

export default Portfolio;