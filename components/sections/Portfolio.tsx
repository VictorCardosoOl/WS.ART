import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Increased parallax speed for more depth
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15]);

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`} data-cursor="lens">
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
      {/* Container - No rounded corners for sharper, editorial look */}
      <div className={`relative w-full ${item.height} overflow-hidden bg-stone-200 mb-6`}>
        <ParallaxImage src={item.src} alt={item.altText} />
      </div>

      <div className="flex items-baseline gap-4">
         <span className="text-[10px] font-bold uppercase tracking-widest text-[#754548]">
            0{item.id}
         </span>
         <div className="flex flex-col">
            <span className="font-serif text-3xl md:text-4xl text-stone-900 leading-none group-hover:italic transition-all">
              {item.title}
            </span>
            <span className="text-xs text-stone-400 mt-1 uppercase tracking-wide">
                {item.category}
            </span>
         </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative pt-32 pb-48 bg-white overflow-hidden">
      
      {/* Huge Background Typography */}
      <div className="absolute top-[10%] -right-[10%] pointer-events-none select-none z-0">
          <h2 className="font-sans font-black text-[25vw] leading-none text-stone-100 mix-blend-multiply opacity-50">
              WORK
          </h2>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 md:mb-48">
          <Reveal>
             <h2 className="text-6xl md:text-[7vw] font-serif text-stone-900 leading-[0.8] tracking-tighter">
               Acervo<br/>
               <span className="italic text-[#754548] opacity-80 ml-12">Selecionado</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-12 md:mt-0 max-w-xs text-right">
               <p className="text-stone-500 text-sm leading-relaxed">
                  Cada imagem aqui representa horas de estudo anatômico e conexão.
               </p>
            </div>
          </Reveal>
        </div>

        {/* Extreme Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-32">
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
        
        <div className="mt-48 text-center">
           <Reveal>
             <a href="https://instagram.com" className="group inline-flex flex-col items-center gap-4 cursor-none" data-cursor-text="Ver Instagram">
               <span className="font-serif italic text-3xl text-stone-500 group-hover:text-[#754548] transition-colors">Ver arquivo completo</span>
               <div className="w-[1px] h-12 bg-stone-300 group-hover:h-24 group-hover:bg-[#754548] transition-all duration-500"></div>
             </a>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;