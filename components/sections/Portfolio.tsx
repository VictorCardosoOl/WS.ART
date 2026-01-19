import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform } from 'framer-motion';

// Componente para Imagem com Parallax
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // A imagem move um pouco mais devagar que o scroll, criando profundidade
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  // Scale sutil de parallax base
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-full">
        <img 
          src={src} 
          alt={alt} 
          title={alt}
          // Atualizado: ease-out-expo e group-hover:scale-105
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1200ms] ease-out-expo transform group-hover:scale-105 will-change-transform"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

const PortfolioItem = ({ item }: { item: GridGalleryItem }) => {
  return (
    <div 
        className={`group relative w-full flex flex-col ${item.offsetY}`}
        data-cursor="VER" // Aciona o cursor magnético
    >
      
      {/* Container da Imagem com Borda Arredondada */}
      <div className={`relative w-full ${item.height} overflow-hidden bg-stone-200 mb-6 rounded-2xl shadow-sm`}>
        <ParallaxImage src={item.src} alt={item.altText} />
        
        {/* Overlay Hover Minimalista */}
        <div className="absolute inset-0 bg-[#754548]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] ease-out-expo mix-blend-multiply pointer-events-none"></div>

        {/* Floating Tag */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-out-expo transform translate-y-2 group-hover:translate-y-0 rounded-full">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#754548]">Ver Projeto</span>
        </div>
      </div>

      {/* Meta Dados Minimalistas */}
      <div className="flex items-baseline justify-between border-b border-stone-200 pb-2 group-hover:border-[#754548] transition-colors duration-[800ms] ease-out-expo">
         <div className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl text-stone-900 leading-none group-hover:italic transition-all duration-500">
              {item.title}
            </span>
         </div>
         <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:text-[#754548] transition-colors duration-500">
            {item.category}
         </span>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative pt-32 pb-48 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header com Design Editorial */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-40">
          <Reveal>
             <h2 className="text-6xl md:text-[8vw] font-serif text-stone-900 leading-[0.8] tracking-tighter">
               Acervo<br/>
               <span className="italic text-[#754548] opacity-80 ml-12">Selecionado</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-12 md:mt-0 max-w-xs text-right">
              <p className="text-stone-500 text-xs leading-relaxed uppercase tracking-wide mb-4">
                [ Arquivo 2023 — 2024 ]
              </p>
              <p className="text-stone-400 font-serif text-lg italic">
                Uma curadoria de narrativas visuais<br/> eternizadas na pele.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Grid Assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-24">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className={`${item.colSpan}`}
            >
              <Reveal delay={index % 2 * 100} width="100%">
                <PortfolioItem item={item} />
              </Reveal>
            </div>
          ))}
        </div>
        
        {/* Footer Link Minimalista */}
        <div className="mt-40 text-center" data-cursor="EXPLORAR">
           <Reveal>
             <a href="https://instagram.com" className="group inline-flex items-center gap-4">
               <span className="w-12 h-[1px] bg-stone-300 group-hover:w-24 group-hover:bg-[#754548] transition-all duration-500"></span>
               <span className="font-serif italic text-2xl text-stone-500 group-hover:text-stone-900 transition-colors">Explorar arquivo completo</span>
               <span className="w-12 h-[1px] bg-stone-300 group-hover:w-24 group-hover:bg-[#754548] transition-all duration-500"></span>
             </a>
           </Reveal>
        </div>

      </div>
      
      {/* Removido SVG Wave para manter o final "Clean/Editorial" */}
    </section>
  );
};

export default Portfolio;