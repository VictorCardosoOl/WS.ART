import React, { useLayoutEffect, useRef } from 'react';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { PortfolioItem as PortfolioItemType } from '../../types';
import ParallaxImage from '../ui/ParallaxImage';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioItemProps {
  item: PortfolioItemType;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Layouts
  const layoutClasses = {
      left: "mr-auto md:ml-24",
      right: "ml-auto md:mr-24",
      center: "mx-auto"
  };
  
  // Larguras
  const widthClasses = {
      left: "w-full md:w-[45%]",
      right: "w-full md:w-[45%]",
      center: "w-full md:w-[50%]"
  };

  const currentLayout = item.offsetY || 'center';

  useLayoutEffect(() => {
      const ctx = gsap.context(() => {
          if(!containerRef.current) return;

          // Text Reveal Animation Simples
          if (textRef.current) {
              gsap.fromTo(textRef.current,
                  { y: 20, opacity: 0 },
                  { 
                      y: 0, 
                      opacity: 1, 
                      duration: 0.6,
                      ease: "power2.out",
                      scrollTrigger: {
                          trigger: textRef.current,
                          start: "top 95%",
                          toggleActions: "play none none reverse"
                      }
                  }
              );
          }
      }, containerRef);
      return () => ctx.revert();
  }, []);

  return (
    // Margem reduzida de mb-64 para mb-16/24
    <div ref={containerRef} className={`relative mb-16 md:mb-24 group ${widthClasses[currentLayout]} ${layoutClasses[currentLayout]}`}>
        
        {/* Decorative Number (Menor e mais discreto) */}
        <div className="absolute -top-6 -left-4 z-0 pointer-events-none select-none">
            <span className="text-4xl font-display font-bold text-[#754548]/10">
                {String(index + 1).padStart(2, '0')}
            </span>
        </div>

        {/* Image Block */}
        <div className="relative z-10 shadow-lg shadow-stone-200/50">
            <ParallaxImage 
                src={item.src} 
                alt={item.altText} 
                aspectRatio={item.height}
            />
        </div>

        {/* Info Block */}
        <div ref={textRef} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-4 pl-0 md:pl-4">
            <div>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-stone-900 leading-none tracking-tight uppercase">
                    {item.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] font-bold font-sans uppercase tracking-widest text-[#754548]">
                        {item.category}
                    </span>
                </div>
            </div>

            <div className="md:text-right">
                 <button className="group/btn flex items-center gap-2 text-[9px] font-bold font-sans uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">
                    Ver Obra
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                 </button>
            </div>
        </div>

    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    // Padding da seção reduzido
    <section id="gallery" className="relative pt-24 pb-24 bg-[#FAF7F7] overflow-hidden">
      
      {/* Sticky Sidebar (Desktop Only) - Mantido para identidade */}
      <div className="hidden xl:block fixed top-1/2 left-8 -translate-y-1/2 z-10 mix-blend-difference pointer-events-none">
         <div className="flex items-center gap-6 -rotate-90 origin-left">
             <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-stone-400 whitespace-nowrap">
                 Galeria Selecionada
             </span>
             <div className="w-16 h-[1px] bg-stone-400"></div>
         </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        
        {/* Header Compacto */}
        <div className="mb-20 md:mb-24 border-b border-[#754548]/10 pb-8 flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-2xl">
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-stone-900 leading-[0.9] tracking-tighter uppercase">
                    Corpo &<br/>
                    <span className="text-[#754548] ml-8">Narrativa</span>
                 </h2>
            </div>
            <div className="mt-6 md:mt-0 text-right">
                <p className="text-stone-900 font-sans font-light italic text-sm tracking-tight">
                    Obras Autorais Recentes
                </p>
            </div>
        </div>

        {/* Portfolio List */}
        <div className="flex flex-col w-full">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <PortfolioItem key={item.id} item={item} index={index} />
            ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 md:mt-24 text-center flex flex-col items-center">
             <div className="h-12 w-[1px] bg-stone-300 mb-6"></div>
             <a href="https://instagram.com" className="text-lg md:text-xl font-display font-medium text-stone-400 hover:text-[#754548] transition-colors duration-500 tracking-tight uppercase border-b border-transparent hover:border-[#754548] pb-1">
                Arquivo Completo no Instagram
             </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;