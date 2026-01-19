import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform } from 'framer-motion';

// Componente para Imagem com Parallax Refinado
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax mais lento e pesado para sensação de elegância (Physics Pillar)
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.1]); // Manter escala sutil, foco no movimento vertical

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-full">
        <img 
          src={src} 
          alt={alt} 
          title={alt}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

const PortfolioItem = ({ item }: { item: GridGalleryItem }) => {
  return (
    <div className={`group relative w-full flex flex-col ${item.offsetY}`}>
      
      {/* Container da Imagem com Borda Arredondada */}
      <div className={`relative w-full ${item.height} overflow-hidden bg-stone-100 mb-8 rounded-sm shadow-sm`}>
        <ParallaxImage src={item.src} alt={item.altText} />
        
        {/* Overlay Hover */}
        <div className="absolute inset-0 bg-[#754548]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply pointer-events-none"></div>
      </div>

      {/* Meta Dados Minimalistas */}
      <div className="flex items-start justify-between border-b border-stone-100 pb-4 group-hover:border-[#754548] transition-colors duration-700">
         <div className="flex flex-col gap-1">
            <span className="font-serif text-3xl md:text-4xl text-stone-900 leading-none group-hover:italic transition-all duration-500">
              {item.title}
            </span>
         </div>
         <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 group-hover:text-[#754548] mt-1">
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

        {/* Grid Assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-32">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className={`${item.colSpan}`}
            >
              <Reveal delay={index % 2 * 150} width="100%">
                <PortfolioItem item={item} />
              </Reveal>
            </div>
          ))}
        </div>
        
        {/* Footer Link Minimalista */}
        <div className="mt-48 text-center">
           <Reveal>
             <a href="https://instagram.com" className="group inline-flex items-center gap-6">
               <span className="w-16 h-[1px] bg-stone-200 group-hover:w-32 group-hover:bg-[#754548] transition-all duration-700"></span>
               <span className="font-serif italic text-3xl text-stone-400 group-hover:text-stone-900 transition-colors">Explorar arquivo completo</span>
               <span className="w-16 h-[1px] bg-stone-200 group-hover:w-32 group-hover:bg-[#754548] transition-all duration-700"></span>
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