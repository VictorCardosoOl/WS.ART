import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Parallax Image
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1.1]);

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-full">
        <img 
          src={src} 
          alt={alt} 
          title={alt}
          className="w-full h-full object-cover transition-all duration-[1200ms] ease-out-expo group-hover:scale-105"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

const PortfolioItem = ({ item }: { item: GridGalleryItem }) => {
  return (
    <div 
        className={`group relative w-full h-full flex flex-col ${item.offsetY} overflow-hidden rounded-lg`}
        data-cursor="VER"
    >
      {/* Container da Imagem - Preenche altura se necessário */}
      <div className={`relative w-full ${item.height} overflow-hidden bg-stone-100`}>
        <ParallaxImage src={item.src} alt={item.altText} />
        
        {/* Overlay Escuro para Legibilidade se Tiver Texto */}
        {item.enableOverlay && (
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
        )}

        {/* Hover Overlay Padrão (Rose) */}
        {!item.enableOverlay && (
             <div className="absolute inset-0 bg-[#754548]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply pointer-events-none z-10"></div>
        )}

        {/* CONTENT OVERLAY (Estilo Revista/Card) */}
        {item.enableOverlay && (
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/80 mb-2">
                    {item.category}
                </span>
                <div className="flex justify-between items-end">
                    <h3 className="font-serif text-3xl md:text-4xl text-white leading-none">
                        {item.title}
                    </h3>
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <ArrowUpRight className="text-white" size={20} />
                    </div>
                </div>
            </div>
        )}
      </div>

      {/* CONTENT BELOW (Estilo Clássico) - Renderiza apenas se Overlay estiver DESLIGADO */}
      {!item.enableOverlay && (
        <div className="flex flex-col gap-1 pt-4 px-1">
            <div className="flex justify-between items-baseline border-b border-stone-200 pb-2 group-hover:border-[#754548] transition-colors duration-500">
                <h3 className="font-serif text-2xl text-stone-900 leading-none group-hover:italic transition-all duration-500">
                    {item.title}
                </h3>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400 group-hover:text-[#754548]">
                    {item.category}
                </span>
            </div>
        </div>
      )}
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative pt-32 pb-40 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Compacto */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-stone-100 pb-8">
          <Reveal>
             <h2 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.8] tracking-tighter">
               Acervo<span className="text-[#754548]">.</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-8 md:mt-0 text-right">
              <p className="text-stone-400 font-serif text-lg italic">
                Seleção de obras recentes.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Grid Bento Box - Compacto e Denso */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className={`${item.colSpan} relative`}
            >
              <Reveal delay={index * 100} width="100%">
                <PortfolioItem item={item} />
              </Reveal>
            </div>
          ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-32 text-center" data-cursor="EXPLORAR">
           <Reveal>
             <a href="https://instagram.com" className="group inline-flex flex-col items-center gap-4">
               <span className="font-serif italic text-2xl text-stone-400 group-hover:text-stone-900 transition-colors duration-500">
                 Ver acervo completo
               </span>
               <span className="w-px h-12 bg-stone-300 group-hover:h-20 group-hover:bg-[#754548] transition-all duration-700"></span>
             </a>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;