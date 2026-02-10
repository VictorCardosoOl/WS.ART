import React, { useLayoutEffect, useRef } from 'react';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import ParallaxImage from '../ui/ParallaxImage';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioItemProps {
  item: any;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  // Define layout classes based on item configuration
  const layoutClasses = {
      left: "mr-auto md:ml-12 lg:ml-24",
      right: "ml-auto md:mr-12 lg:mr-24",
      center: "mx-auto"
  };
  
  const widthClasses = {
      left: "w-full md:w-[85%] lg:w-[70%]", // Mais estreito
      right: "w-full md:w-[85%] lg:w-[70%]",
      center: "w-full md:w-[95%] lg:w-[90%]" // Cinematic Wide
  };

  const currentLayout = (item.offsetY || 'center') as keyof typeof layoutClasses;

  useLayoutEffect(() => {
      const ctx = gsap.context(() => {
          if(!containerRef.current) return;

          // Parallax sutil no Número (01, 02...)
          gsap.to(numberRef.current, {
              yPercent: 40,
              ease: "none",
              scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1
              }
          });

          // Texto deslizando suavemente
          if (textRef.current) {
              gsap.fromTo(textRef.current,
                  { y: 50, opacity: 0 },
                  { 
                      y: 0, 
                      opacity: 1, 
                      duration: 1,
                      ease: "power3.out",
                      scrollTrigger: {
                          trigger: textRef.current,
                          start: "top 90%",
                          toggleActions: "play none none reverse"
                      }
                  }
              );
          }

      }, containerRef);
      return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative mb-32 md:mb-56 group ${widthClasses[currentLayout]} ${layoutClasses[currentLayout]}`}>
        
        {/* Número Decorativo Gigante (Parallax Background) */}
        <div className="absolute -top-12 md:-top-24 -left-4 md:-left-12 z-0 overflow-hidden mix-blend-multiply opacity-[0.06] pointer-events-none select-none">
            <span ref={numberRef} className="block text-[150px] md:text-[250px] font-serif leading-none text-[#754548]">
                0{index + 1}
            </span>
        </div>

        {/* Bloco de Imagem */}
        <div className="relative z-10">
            <ParallaxImage 
                src={item.src} 
                alt={item.altText} 
                aspectRatio={item.height}
            />
        </div>

        {/* Bloco de Informação (Sobreposto ou Lateral dependendo do layout) */}
        <div ref={textRef} className={`
            flex flex-col md:flex-row md:items-end justify-between gap-6 mt-8 md:mt-12
            ${currentLayout === 'center' ? 'md:px-12' : ''}
        `}>
            {/* Título e Categoria */}
            <div>
                <div className="flex items-center gap-4 mb-3">
                    <span className="h-[1px] w-8 bg-[#754548]"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#754548]">
                        {item.category} — {item.year}
                    </span>
                </div>
                <h3 className="text-4xl md:text-6xl font-serif text-stone-900 leading-none">
                    {item.title}
                </h3>
            </div>

            {/* Botão / Link */}
            <div className="md:text-right">
                 <button className="group/btn flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">
                    Ver Projeto
                    <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover/btn:border-[#754548] group-hover/btn:bg-[#754548] group-hover/btn:text-white transition-all">
                        <ArrowRight size={14} className="group-hover/btn:-rotate-45 transition-transform duration-300" />
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
      
      {/* Elemento Sticky Lateral (Apenas Desktop) */}
      <div className="hidden xl:block fixed top-1/2 left-8 -translate-y-1/2 z-10 mix-blend-difference pointer-events-none">
         <div className="flex items-center gap-6 -rotate-90 origin-left">
             <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 whitespace-nowrap">
                 Acervo Selecionado
             </span>
             <div className="w-16 h-[1px] bg-stone-400"></div>
         </div>
      </div>

      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        
        {/* Header Minimalista */}
        <div className="mb-32 md:mb-48 border-b border-[#754548]/20 pb-12 flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-2xl">
                 <h2 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[0.85] tracking-tight">
                    Corpo &<br/>
                    <span className="italic text-[#754548] ml-12">Narrativa</span>
                 </h2>
            </div>
            <div className="mt-8 md:mt-0 text-right">
                <p className="text-stone-500 font-sans text-xs tracking-widest uppercase mb-2">
                    [ Atualização: Out 2024 ]
                </p>
                <p className="text-stone-900 font-serif italic text-xl">
                    Obras Autorais
                </p>
            </div>
        </div>

        {/* Lista de Projetos */}
        <div className="flex flex-col w-full">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <PortfolioItem key={item.id} item={item} index={index} />
            ))}
        </div>

        {/* Footer Link */}
        <div className="mt-20 md:mt-40 text-center flex flex-col items-center">
             <div className="h-24 w-[1px] bg-stone-300 mb-8"></div>
             <a href="https://instagram.com" className="text-2xl md:text-4xl font-serif italic text-stone-400 hover:text-[#754548] transition-colors duration-500">
                Ver arquivo completo no Instagram
             </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;