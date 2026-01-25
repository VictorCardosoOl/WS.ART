import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.1]); 

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-full">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[800ms] ease-out-expo"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </div>
  );
};

const BentoCard = ({ item }: { item: GridGalleryItem }) => {
  return (
    <article 
        className={`group relative w-full h-full overflow-hidden bg-stone-100 cursor-pointer`}
        data-cursor="VER PROJETO"
    >
        <ParallaxImage src={item.src} alt={item.altText} />
        
        {/* Overlay com Gradiente para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700 z-10"></div>

        {/* Conteúdo */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end">
            <div className="flex items-center gap-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                <span className="h-[1px] w-6 bg-rose-400"></span>
                <span className="font-sans text-meta font-bold text-rose-200">
                    {item.category}
                </span>
            </div>

            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-2 max-w-[85%]">
                    <h3 className="font-serif text-3xl md:text-4xl text-white leading-[0.9] tracking-tighter group-hover:text-rose-50 transition-colors duration-500 uppercase">
                        {item.title}
                    </h3>
                    
                    {item.description && (
                        <p className="font-sans text-[10px] text-stone-300 leading-relaxed tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150 transform translate-y-4 group-hover:translate-y-0 pl-3 border-l border-white/20 mt-2">
                            {item.description}
                        </p>
                    )}
                </div>
                
                <div className="w-8 h-8 flex items-center justify-center">
                    <ArrowUpRight 
                        className="text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out-expo" 
                        size={24} 
                        strokeWidth={1.5}
                    />
                </div>
            </div>
        </div>
    </article>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative pt-32 pb-32 bg-white overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100/30 via-white to-white pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <header className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-stone-100 pb-8">
          <Reveal>
             <h2 className="font-serif text-fluid-h1 text-stone-900 leading-[0.8] tracking-tighter uppercase">
               Acervo<span className="text-pantone-accent">.</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-8 md:mt-0 text-right">
              <p className="font-sans text-meta font-bold text-stone-400">
                Obras selecionadas 2023 — 2024
              </p>
            </div>
          </Reveal>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[420px] gap-4">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`${item.colSpan} relative w-full h-full`}
                >
                    <Reveal delay={index * 50} width="100%">
                        <div className={`w-full h-full min-h-[300px]`}>
                             <BentoCard item={item} />
                        </div>
                    </Reveal>
                </div>
            ))}
        </div>
        
        <div className="mt-24 text-center" data-cursor="EXPLORAR">
           <Reveal>
             <a href="https://instagram.com" className="group inline-flex flex-col items-center gap-3">
               <span className="font-serif text-2xl text-stone-400 group-hover:text-stone-900 transition-colors duration-500 uppercase tracking-tight">
                 Ver arquivo completo
               </span>
               <div className="relative w-[1px] h-16 bg-stone-200 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-pantone-accent -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-expo"></div>
               </div>
             </a>
           </Reveal>
        </div>
      </div>

      {/* Separator */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center overflow-hidden z-10 text-stone-200">
        <svg width="100%" height="40" viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-[40px] stroke-current fill-none opacity-60">
            <path d="M0,20 Q150,25 300,18 T600,22 T900,18 T1200,20" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <path d="M50,22 Q200,28 350,16 T650,24 T950,16 T1150,22" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeOpacity="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default Portfolio;