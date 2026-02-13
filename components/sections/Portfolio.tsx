import React, { useLayoutEffect, useRef } from 'react';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { PortfolioItem as PortfolioItemType } from '../../types';
import ParallaxImage from '../ui/ParallaxImage';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Ícone de Seta "Hand Drawn" (Vibe Sketchbook/Tim Burton)
const SketchArrow = () => (
    <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
        <path d="M10,40 Q25,25 40,10" strokeWidth="3" strokeLinecap="round" />
        <path d="M25,10 L40,10 L40,25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
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
            
            {/* GRAFFITI NUMBER OVERLAY (Os Gêmeos/Urban) */}
            <div className={`absolute -top-10 z-20 text-[6rem] font-display font-bold text-[#754548] opacity-10 select-none mix-blend-multiply pointer-events-none transition-transform duration-500 group-hover:scale-110 ${isEven ? '-left-6 rotate-[-10deg]' : '-right-6 rotate-[10deg]'}`}>
                {String(index + 1).padStart(2, '0')}
            </div>

            {/* Imagem com Parallax Sutil e Borda "Torn" (Varejão) */}
            <div className="relative overflow-hidden cursor-none rounded-sm transition-all duration-500 hover:rounded-[2rem]">
                <ParallaxImage 
                    src={item.src} 
                    alt={item.altText} 
                    aspectRatio={imageAspect}
                    className="transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05]"
                />
                
                {/* Overlay Texture (Xilogravura/Grain) */}
                <div className="absolute inset-0 bg-noise opacity-[0.1] mix-blend-overlay pointer-events-none"></div>
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500 pointer-events-none"></div>
            </div>

            {/* Info Block */}
            <div ref={infoRef} className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-stone-200 pt-4 relative">
                
                {/* Scribble Line Decor (Animated on Hover) */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#754548] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-[#754548]">
                            {item.category}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-serif text-stone-900 leading-none italic group-hover:skew-x-[-10deg] transition-transform duration-300 origin-bottom-left">
                        {item.title}
                    </h3>
                </div>

                <div className="mt-4 md:mt-0 flex items-center gap-8">
                     <span className="text-[10px] font-sans font-medium text-stone-400 tracking-widest">
                        EST. {item.year}
                     </span>
                     {/* Botão com Vibe "Rubber Hose" (Elastic) */}
                     <button className="hidden md:flex w-12 h-12 rounded-full border border-stone-300 items-center justify-center text-stone-400 group-hover:bg-[#1c1917] group-hover:border-[#1c1917] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                        <div className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                            <SketchArrow />
                        </div>
                     </button>
                </div>

            </div>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative bg-[#FAF7F7] pt-24 pb-24 md:pt-40 md:pb-40 overflow-hidden">
      
      {/* Background Doodles (Tim Burton/Dreamworks Whimsy) - Faint */}
      <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] opacity-[0.03] pointer-events-none rotate-12">
          <svg viewBox="0 0 200 200">
              <path d="M10,100 Q50,10 90,100 T170,100" fill="none" stroke="black" strokeWidth="2" />
              <path d="M10,120 Q50,30 90,120 T170,120" fill="none" stroke="black" strokeWidth="2" />
          </svg>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* --- STICKY SIDEBAR --- */}
            <div className="w-full lg:w-[25%] relative z-10">
                <div className="lg:sticky lg:top-32 h-auto lg:h-[calc(100vh-16rem)] flex flex-col justify-between border-b lg:border-b-0 border-stone-200 pb-8 lg:pb-0">
                    
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            {/* Pontos de "Reticula" (Pop Art/HQs) */}
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 bg-[#754548] rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-[#754548] rounded-full opacity-60"></div>
                                <div className="w-1.5 h-1.5 bg-[#754548] rounded-full opacity-30"></div>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                                Acervo
                            </span>
                        </div>
                        <h2 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl text-stone-900 leading-[0.85] tracking-tighter uppercase mb-4">
                            Obras<br/>
                            <span className="text-stone-300 relative inline-block">
                                Reais.
                                {/* Sublinhado Riscado */}
                                <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#754548] opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0,5 Q50,15 100,5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h2>
                    </div>

                    <div className="hidden lg:block">
                        <p className="font-serif text-xl italic text-stone-600 leading-relaxed max-w-[200px]">
                            "A pele é o único suporte artístico que sangra, cicatriza e envelhece junto com a obra."
                        </p>
                        {/* Linha "Nervura" (Orgânica) */}
                        <div className="mt-12 w-[2px] h-32 bg-[#754548] opacity-20" style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)" }}></div>
                    </div>

                </div>
            </div>

            {/* --- SCROLLABLE GALLERY --- */}
            <div className="w-full lg:w-[75%] relative">
                
                <div className="flex flex-col pt-12 lg:pt-32">
                    {PORTFOLIO_ITEMS.map((item, index) => (
                        <PortfolioItem key={item.id} item={item} index={index} />
                    ))}
                </div>

                <div className="mt-24 text-center">
                     <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-block py-4 px-8 border border-stone-300 text-xs font-bold uppercase tracking-widest hover:bg-[#1c1917] hover:text-white hover:border-[#1c1917] transition-all duration-300 hover:rotate-2">
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