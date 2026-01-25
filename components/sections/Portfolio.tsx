import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PortfolioItem = ({ item }: { item: GridGalleryItem }) => {
  const ref = useRef(null);
  
  // Parallax sutil interno
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <div className={`group flex flex-col gap-4 ${item.offsetY}`}>
      {/* Container da Imagem */}
      <div 
        ref={ref}
        className={`relative w-full ${item.height} overflow-hidden bg-stone-100`}
      >
        <motion.div style={{ scale }} className="w-full h-full">
            <img 
                src={item.src} 
                alt={item.altText} 
                className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                loading="lazy"
            />
        </motion.div>
        
        {/* Overlay Hover muito sutil (opcional, baseado na limpeza das refs talvez nem precise) */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500"></div>
      </div>

      {/* Legenda Estilo Editorial (Referência Imagem 3) */}
      <div className="flex flex-col border-t border-stone-200 pt-3 group-hover:border-stone-900 transition-colors duration-500">
         <div className="flex justify-between items-start">
             <h3 className="font-sans text-sm md:text-base text-stone-800 font-medium tracking-wide uppercase">
                 {item.title}
             </h3>
             <ArrowUpRight 
                size={18} 
                className="text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
             />
         </div>
         <span className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">
             {item.category}
         </span>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative pt-32 pb-48 bg-white overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Minimalista (Alinhado à direita como na ref 1 "PORTFÓLIO") */}
        <div className="flex justify-end mb-24">
          <Reveal>
             <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-900">
               Portfólio
             </h2>
          </Reveal>
        </div>

        {/* Grid Editorial */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 md:gap-y-0">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`${item.colSpan}`}
                >
                    <Reveal delay={index * 100} width="100%">
                         <PortfolioItem item={item} />
                    </Reveal>
                </div>
            ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-40 flex justify-center">
           <Reveal>
             <a href="https://instagram.com" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors">
               <span>Ver Arquivo Completo</span>
               <div className="h-[1px] w-8 bg-stone-300 group-hover:w-16 group-hover:bg-stone-900 transition-all duration-500"></div>
             </a>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;