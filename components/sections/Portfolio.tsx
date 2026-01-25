import React, { useRef, useLayoutEffect } from 'react';
import Reveal from '../ui/Reveal';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { GridGalleryItem } from '../../types';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Componente de Item Bento Grid com Parallax Interno ---
const BentoItem: React.FC<{ item: GridGalleryItem, index: number }> = ({ item, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // Parallax suave da imagem dentro do container
        if (imgRef.current && containerRef.current) {
            gsap.fromTo(imgRef.current, 
                { scale: 1.15, yPercent: -5 },
                { 
                    yPercent: 5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.2
                    }
                }
            );
        }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div 
        ref={containerRef}
        className={`relative overflow-hidden group w-full h-full ${item.colSpan} ${item.height}`}
    >
        {/* Imagem com Parallax e Hover Scale Cinema */}
        <div className="w-full h-full overflow-hidden">
            <img 
                ref={imgRef}
                src={item.src} 
                alt={item.altText} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-cinema group-hover:scale-105 will-change-transform"
                loading="lazy"
            />
        </div>

        {/* Overlay Minimalista (Aparece no Hover) */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
             <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-cinema">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-1 block">
                            {item.category}
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl text-white italic">
                            {item.title}
                        </h3>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        <ArrowUpRight size={18} strokeWidth={1} />
                    </div>
                </div>
             </div>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative w-full bg-white pt-16 pb-32 overflow-hidden">
       
       {/* HEADER ANCHOR - Top Right Minimalist */}
       <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 mb-12 flex justify-end">
          <Reveal>
            <span className="font-sans text-[10px] md:text-[12px] font-medium tracking-widest text-stone-900 uppercase">
                Portfólio
            </span>
          </Reveal>
       </div>

       <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          
          {/* BENTO GRID LAYOUT */}
          {/* Usamos grid-flow-dense para preenchimento inteligente se necessário, mas seguimos o layout definido no data */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(300px,auto)]">
              {PORTFOLIO_ITEMS.map((item, index) => (
                  <BentoItem key={item.id} item={item} index={index} />
              ))}
          </div>

          {/* Footer Link */}
          <div className="mt-20 w-full flex justify-center">
               <a href="https://instagram.com" className="group inline-flex flex-col items-center gap-2">
                   <span className="font-serif text-xl italic text-stone-500 group-hover:text-[#754548] transition-colors">
                       Ver arquivo completo
                   </span>
                   <span className="w-12 h-[1px] bg-stone-300 group-hover:w-24 group-hover:bg-[#754548] transition-all duration-500"></span>
               </a>
          </div>

       </div>
    </section>
  );
};

export default Portfolio;