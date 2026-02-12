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
  const numberRef = useRef<HTMLSpanElement>(null);

  // Layouts atualizados para serem menores e mais contidos
  const layoutClasses = {
      left: "mr-auto md:ml-24",
      right: "ml-auto md:mr-24",
      center: "mx-auto"
  };
  
  // Larguras reduzidas drasticamente (antes era w-[85%] ou w-[95%])
  const widthClasses = {
      left: "w-full md:w-[45%]",
      right: "w-full md:w-[45%]",
      center: "w-full md:w-[50%]"
  };

  const currentLayout = item.offsetY || 'center';

  useLayoutEffect(() => {
      const ctx = gsap.context(() => {
          if(!containerRef.current) return;

          // Parallax for Background Number
          if (numberRef.current) {
            gsap.to(numberRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
          }

          // Text Reveal Animation
          if (textRef.current) {
              gsap.fromTo(textRef.current,
                  { y: 30, opacity: 0 },
                  { 
                      y: 0, 
                      opacity: 1, 
                      duration: 0.8,
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
    <div ref={containerRef} className={`relative mb-40 md:mb-64 group ${widthClasses[currentLayout]} ${layoutClasses[currentLayout]}`}>
        
        {/* Decorative Number - Reduzido e posicionado mais discretamente */}
        <div className="absolute -top-8 md:-top-16 -left-4 md:-left-8 z-0 overflow-hidden mix-blend-multiply opacity-[0.04] pointer-events-none select-none">
            <span ref={numberRef} className="block text-[100px] md:text-[180px] font-display font-bold leading-none text-[#754548] tracking-tighter">
                {String(index + 1).padStart(2, '0')}
            </span>
        </div>

        {/* Image Block - Contido e Elegante */}
        <div className="relative z-10 shadow-xl shadow-stone-200/50">
            <ParallaxImage 
                src={item.src} 
                alt={item.altText} 
                aspectRatio={item.height}
            />
        </div>

        {/* Info Block - Refinado */}
        <div ref={textRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-8 pl-4 border-l border-[#754548]/20">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-[#754548]">
                        {item.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                    <span className="text-[10px] font-medium font-sans text-stone-400">
                        {item.year}
                    </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-medium text-stone-900 leading-none tracking-tight uppercase">
                    {item.title}
                </h3>
            </div>

            <div className="md:text-right">
                 <button className="group/btn flex items-center gap-3 text-[10px] font-bold font-sans uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">
                    Ver Detalhes
                    <div className="w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center group-hover/btn:border-[#754548] group-hover/btn:bg-[#754548] group-hover/btn:text-white transition-all">
                        <ArrowRight size={12} className="group-hover/btn:-rotate-45 transition-transform duration-300" />
                    </div>
                 </button>
            </div>
        </div>

    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative pt-32 pb-32 bg-[#FAF7F7] overflow-hidden">
      
      {/* Sticky Sidebar (Desktop Only) */}
      <div className="hidden xl:block fixed top-1/2 left-8 -translate-y-1/2 z-10 mix-blend-difference pointer-events-none">
         <div className="flex items-center gap-6 -rotate-90 origin-left">
             <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-stone-400 whitespace-nowrap">
                 Acervo Selecionado
             </span>
             <div className="w-16 h-[1px] bg-stone-400"></div>
         </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        
        {/* Header */}
        <div className="mb-32 md:mb-48 border-b border-[#754548]/10 pb-12 flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-2xl">
                 <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-stone-900 leading-[0.9] tracking-tighter uppercase">
                    Corpo &<br/>
                    <span className="text-[#754548] ml-12">Narrativa</span>
                 </h2>
            </div>
            <div className="mt-8 md:mt-0 text-right">
                <p className="text-stone-500 font-sans text-[10px] tracking-widest uppercase mb-2">
                    [ Galeria Principal ]
                </p>
                <p className="text-stone-900 font-sans font-light italic text-lg tracking-tight">
                    Obras Autorais
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
        <div className="mt-20 md:mt-32 text-center flex flex-col items-center">
             <div className="h-16 w-[1px] bg-stone-300 mb-6"></div>
             <a href="https://instagram.com" className="text-xl md:text-2xl font-display font-medium text-stone-400 hover:text-[#754548] transition-colors duration-500 tracking-tight uppercase border-b border-transparent hover:border-[#754548] pb-1">
                Arquivo Completo no Instagram
             </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;