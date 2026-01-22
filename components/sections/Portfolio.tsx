import React, { useRef, useState, useEffect } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

// Componente de Imagem com Parallax Bidimensional (Vertical + Horizontal)
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);
  const scaleBase = useTransform(scrollYProgress, [0, 1], [1.15, 1.15]); 

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ y, x, scale: scaleBase }} className="w-full h-full">
        <img 
          src={src} 
          alt={alt} 
          title={alt}
          className="
            w-full h-full object-cover 
            grayscale group-hover:grayscale-0 
            transition-all duration-[800ms] 
            ease-[cubic-bezier(0.22,1,0.36,1)] 
            group-hover:scale-105
          "
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

// Item do Card Bento
const BentoCard = ({ item, onClick }: { item: GridGalleryItem, onClick: () => void }) => {
  return (
    <div 
        className={`group relative w-full h-full overflow-hidden rounded-sm bg-stone-100 cursor-pointer`}
        data-cursor="VER PROJETO"
        onClick={onClick}
    >
        <ParallaxImage src={item.src} alt={item.altText} />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-[800ms] z-10"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
            
            <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span className="h-[1px] w-6 bg-rose-400"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-200">
                    {item.category}
                </span>
            </div>

            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-3 max-w-[85%]">
                    <h3 className="font-serif text-3xl md:text-4xl text-white leading-[0.95] italic font-light tracking-tight group-hover:text-rose-50 transition-colors duration-500">
                        {item.title}
                    </h3>
                </div>
                
                <div className="overflow-hidden w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight 
                        className="text-white transform translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]" 
                        size={24} 
                        strokeWidth={1.5}
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GridGalleryItem | null>(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedItem]);

  return (
    <section id="gallery" className="relative pt-32 pb-40 bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-stone-100 pb-6">
          <Reveal>
             <h2 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.8] tracking-tighter">
               Acervo<span className="text-[#754548] text-4xl">.</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-8 md:mt-0 text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                Obras selecionadas 2023 — 2024
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[380px] gap-4 md:gap-6">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`${item.colSpan} relative w-full h-full min-h-[300px] md:min-h-auto`}
                >
                    <Reveal delay={index * 50} width="100%">
                        <div className={`w-full h-full`}>
                             <BentoCard item={item} onClick={() => setSelectedItem(item)} />
                        </div>
                    </Reveal>
                </div>
            ))}
        </div>
        
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-6xl bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={24} className="text-stone-900" />
              </button>

              <div className="w-full md:w-2/3 h-[40vh] md:h-auto bg-stone-100 overflow-hidden">
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.altText} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-6">
                    <span className="h-[1px] w-8 bg-[#754548]"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#754548]">
                        {selectedItem.category}
                    </span>
                </div>

                <h3 className="font-serif text-4xl md:text-5xl text-stone-900 leading-[0.95] italic font-light tracking-tight mb-8">
                    {selectedItem.title}
                </h3>

                <p className="font-sans text-sm md:text-base text-stone-500 leading-relaxed tracking-wide mb-10 border-l border-stone-100 pl-6">
                    {selectedItem.description}
                </p>

                <div className="mt-auto">
                    <a 
                      href="#booking" 
                      onClick={() => setSelectedItem(null)}
                      className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white bg-stone-900 px-8 py-4 rounded-sm hover:bg-[#754548] transition-all"
                    >
                        Solicitar Similar
                        <ArrowUpRight size={14} />
                    </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;