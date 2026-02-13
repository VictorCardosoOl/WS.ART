import React, { useLayoutEffect, useRef } from 'react';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { PortfolioItem as PortfolioItemType } from '../../types';
import ParallaxImage from '../ui/ParallaxImage';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SketchArrow = () => (
    <svg width="40" height="20" viewBox="0 0 60 20" fill="none" className="stroke-stone-400 group-hover:stroke-[#754548] transition-colors duration-300">
        <path d="M0,10 Q30,0 55,10" strokeWidth="2" fill="none" style={{ filter: 'url(#pencil-stroke)' }} />
        <path d="M45,5 L55,10 L45,15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'url(#pencil-stroke)' }} />
    </svg>
);

interface PortfolioItemProps {
  item: PortfolioItemType;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const isEven = index % 2 === 0;
  
  const wrapperClass = isEven 
    ? "md:mr-auto md:ml-0 md:w-[85%]" 
    : "md:ml-auto md:mr-0 md:w-[85%]"; 

  const imageAspect = item.height || "aspect-[3/4]";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        if (infoRef.current) {
            gsap.fromTo(infoRef.current,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative mb-32 md:mb-48 w-full flex flex-col ${isEven ? 'items-start' : 'items-end'}`}>
        
        {/* Project Wrapper */}
        <div className={`relative group w-full ${wrapperClass}`}>
            
            {/* NUMBER SKETCH (Parece escrito a lápis no fundo) */}
            <div className={`absolute -top-12 z-0 font-hand text-[8rem] text-stone-900 opacity-[0.05] select-none pointer-events-none ${isEven ? '-left-8' : '-right-8'}`} style={{ filter: 'url(#pencil-stroke)' }}>
                {String(index + 1).padStart(2, '0')}
            </div>

            {/* Imagem com Borda de Lápis */}
            {/* O padding cria espaço para a borda SVG trêmula não cortar */}
            <div className="relative p-2">
                
                {/* A Borda Desenhada */}
                <div className="absolute inset-0 border-2 border-stone-800 opacity-80 z-10 pointer-events-none transition-all duration-500 group-hover:scale-[1.01] group-hover:border-[#754548]"
                     style={{ 
                         filter: 'url(#pencil-stroke)', 
                         borderRadius: '2px' 
                     }}>
                </div>

                {/* Linhas de Canto (Corner Marks) */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-stone-400 z-20"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-stone-400 z-20"></div>

                <div className="relative overflow-hidden cursor-none bg-stone-200">
                    <ParallaxImage 
                        src={item.src} 
                        alt={item.altText} 
                        aspectRatio={imageAspect}
                        className="transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05] grayscale contrast-[1.1] group-hover:grayscale-0"
                    />
                    
                    {/* Graphite Smudge Overlay */}
                    <div className="absolute inset-0 bg-noise opacity-[0.15] mix-blend-multiply pointer-events-none"></div>
                </div>
            </div>

            {/* Info Block */}
            <div ref={infoRef} className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-stone-300/50 pt-4 relative">
                
                {/* Linha Rabiscada */}
                <svg className="absolute top-0 left-0 w-full h-[3px] overflow-visible" preserveAspectRatio="none">
                    <path d="M0,1 L1000,1" stroke="#1c1917" strokeWidth="1" fill="none" strokeDasharray="4 2" style={{ filter: 'url(#pencil-stroke)' }} />
                </svg>

                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-[#754548] bg-[#754548]/10 px-2 py-1 rounded-sm">
                            {item.category}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-serif text-stone-900 leading-none italic group-hover:translate-x-2 transition-transform duration-300">
                        {item.title}
                    </h3>
                </div>

                <div className="mt-4 md:mt-0 flex items-center gap-6">
                     <span className="font-hand text-xl text-stone-500">
                        ( {item.year} )
                     </span>
                     <div className="group-hover:translate-x-2 transition-transform duration-300">
                        <SketchArrow />
                     </div>
                </div>

            </div>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative bg-[#FAF7F7] pt-24 pb-24 md:pt-40 md:pb-40 overflow-hidden">
      
      {/* Background Graphite Doodles */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] opacity-[0.05] pointer-events-none rotate-45 mix-blend-multiply">
          <svg viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" stroke="black" strokeWidth="1" fill="none" style={{ filter: 'url(#pencil-stroke)' }} />
              <line x1="20" y1="100" x2="180" y2="100" stroke="black" strokeWidth="0.5" />
              <line x1="100" y1="20" x2="100" y2="180" stroke="black" strokeWidth="0.5" />
          </svg>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* --- STICKY SIDEBAR --- */}
            <div className="w-full lg:w-[25%] relative z-10">
                <div className="lg:sticky lg:top-32 h-auto lg:h-[calc(100vh-16rem)] flex flex-col justify-between border-b lg:border-b-0 border-stone-200 pb-8 lg:pb-0">
                    
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-3 h-3 border border-[#754548] rounded-full flex items-center justify-center">
                                <div className="w-1 h-1 bg-[#754548] rounded-full"></div>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                                Acervo
                            </span>
                        </div>
                        <h2 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl text-stone-900 leading-[0.85] tracking-tighter uppercase mb-4 relative inline-block">
                            Obras<br/>
                            <span className="text-stone-300">Reais.</span>
                            
                            {/* Círculo de Lápis Vermelho (Correção/Destaque) */}
                            <svg className="absolute -bottom-4 -right-4 w-[120%] h-[60px] pointer-events-none" viewBox="0 0 200 60" preserveAspectRatio="none">
                                <path d="M10,30 Q100,60 190,30 Q100,0 10,30" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.4" style={{ filter: 'url(#pencil-stroke)' }} />
                            </svg>
                        </h2>
                    </div>

                    <div className="hidden lg:block">
                        <p className="font-hand text-2xl text-stone-600 leading-relaxed max-w-[200px] rotate-[-2deg]">
                            "Traços que sangram e contam histórias..."
                        </p>
                        <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-[#754548] to-transparent opacity-30"></div>
                    </div>

                </div>
            </div>

            {/* --- SCROLLABLE GALLERY --- */}
            <div className="w-full lg:w-[75%] relative">
                
                {/* Linha Guia Vertical */}
                <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[1px] bg-stone-300 opacity-30 -translate-x-1/2 hidden md:block border-l border-dashed"></div>

                <div className="flex flex-col pt-12 lg:pt-32">
                    {PORTFOLIO_ITEMS.map((item, index) => (
                        <PortfolioItem key={item.id} item={item} index={index} />
                    ))}
                </div>

                <div className="mt-24 text-center">
                     <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-block py-4 px-12 border-2 border-stone-800 text-sm font-bold uppercase tracking-widest hover:bg-[#1c1917] hover:text-white transition-all duration-300"
                        style={{ filter: 'url(#pencil-stroke)' }}>
                        Ver Arquivo Completo
                     </a>
                </div>

            </div>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;