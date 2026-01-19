import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform } from 'framer-motion';

// Parallax Image - Movimento mais lento e "pesado"
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Menor amplitude de movimento para sensação de peso (inertia)
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-full">
        <img 
          src={src} 
          alt={alt} 
          title={alt}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1200ms] ease-out group-hover:scale-105"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

const PortfolioItem = ({ item }: { item: GridGalleryItem }) => {
  return (
    <div className={`group relative w-full flex flex-col ${item.offsetY}`}>
      
      {/* Imagem */}
      <div className={`relative w-full ${item.height} overflow-hidden bg-stone-100 mb-8 rounded-sm shadow-sm`}>
        <ParallaxImage src={item.src} alt={item.altText} />
        
        {/* Overlay Hover - Sutil */}
        <div className="absolute inset-0 bg-[#754548]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply pointer-events-none"></div>

        {/* Action - Minimalista no centro */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
             <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#754548]">Ver Projeto</span>
             </div>
        </div>
      </div>

      {/* Meta Dados - Editorial (Contraste alto) */}
      <div className="flex flex-col gap-2 border-t border-stone-200 pt-4 group-hover:border-[#754548] transition-colors duration-700">
         <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-400 group-hover:text-[#754548]">
            {item.category}
         </span>
         <h3 className="font-serif text-3xl text-stone-900 leading-none group-hover:italic transition-all duration-500">
            {item.title}
         </h3>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative pt-40 pb-64 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header com Design Editorial */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 md:mb-48 border-b border-stone-100 pb-12">
          <Reveal>
             <h2 className="text-6xl md:text-9xl font-serif text-stone-900 leading-[0.8] tracking-tighter">
               Acervo<span className="text-[#754548]">.</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-12 md:mt-0 max-w-xs text-right">
              <p className="text-[#754548] text-[10px] leading-relaxed uppercase tracking-[0.25em] font-bold mb-4">
                Coleção 2023 — 2024
              </p>
              <p className="text-stone-400 font-serif text-xl italic">
                Narrativas visuais eternizadas na pele.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Grid Assimétrico com espaçamento maior */}
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
             <a href="https://instagram.com" className="group inline-flex flex-col items-center gap-4">
               <span className="font-serif italic text-3xl text-stone-400 group-hover:text-stone-900 transition-colors duration-500">
                 Explorar arquivo completo
               </span>
               <span className="w-px h-16 bg-stone-300 group-hover:h-24 group-hover:bg-[#754548] transition-all duration-700"></span>
             </a>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;