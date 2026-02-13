import React, { useLayoutEffect, useRef } from 'react';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { PortfolioItem as PortfolioItemType } from '../../types';
import ParallaxImage from '../ui/ParallaxImage';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioItemProps {
  item: PortfolioItemType;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  // Lógica de Layout Assimétrico Baseado no Índice
  // Par: Alinhado à esquerda | Ímpar: Alinhado à direita
  const isEven = index % 2 === 0;
  
  // Classes dinâmicas para posicionamento e tamanho
  const wrapperClass = isEven 
    ? "md:mr-auto md:ml-0 md:w-[85%]" // Esquerda
    : "md:ml-auto md:mr-0 md:w-[85%]"; // Direita

  const imageAspect = item.height || "aspect-[3/4]";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // Animação suave de entrada das informações
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
            
            {/* Imagem com Parallax Sutil */}
            <div className="relative overflow-hidden cursor-none">
                <ParallaxImage 
                    src={item.src} 
                    alt={item.altText} 
                    aspectRatio={imageAspect}
                    className="transition-transform duration-[1.5s] ease-out group-hover:scale-[1.02]"
                />
                
                {/* Overlay de Interação */}
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500 pointer-events-none"></div>
            </div>

            {/* Info Block - Minimalista & Editorial */}
            <div ref={infoRef} className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-stone-200 pt-4">
                
                {/* Lado Esquerdo: Título e Categoria */}
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-[#754548]">
                            {String(index + 1).padStart(2, '0')} — {item.category}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-serif text-stone-900 leading-none italic group-hover:translate-x-2 transition-transform duration-500">
                        {item.title}
                    </h3>
                </div>

                {/* Lado Direito: Ano e Botão Discreto */}
                <div className="mt-4 md:mt-0 flex items-center gap-8">
                     <span className="text-[10px] font-sans font-medium text-stone-400 tracking-widest">
                        EST. {item.year}
                     </span>
                     <button className="hidden md:flex w-10 h-10 rounded-full border border-stone-200 items-center justify-center text-stone-400 group-hover:bg-[#1c1917] group-hover:border-[#1c1917] group-hover:text-white transition-all duration-300">
                        <ArrowUpRight size={14} />
                     </button>
                </div>

            </div>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative bg-[#FAF7F7] pt-24 pb-24 md:pt-40 md:pb-40">
      
      {/* Container Principal */}
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* --- STICKY SIDEBAR (Título) --- */}
            <div className="w-full lg:w-[25%] relative z-10">
                <div className="lg:sticky lg:top-32 h-auto lg:h-[calc(100vh-16rem)] flex flex-col justify-between border-b lg:border-b-0 border-stone-200 pb-8 lg:pb-0">
                    
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-2 h-2 bg-[#754548] rounded-full"></div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                                Acervo Selecionado
                            </span>
                        </div>
                        <h2 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl text-stone-900 leading-[0.85] tracking-tighter uppercase mb-4">
                            Obras<br/>
                            <span className="text-stone-300">Reais.</span>
                        </h2>
                    </div>

                    <div className="hidden lg:block">
                        <p className="font-serif text-xl italic text-stone-600 leading-relaxed max-w-[200px]">
                            "A pele é o único suporte artístico que sangra, cicatriza e envelhece junto com a obra."
                        </p>
                        <div className="mt-12 w-[1px] h-32 bg-gradient-to-b from-[#754548] to-transparent"></div>
                    </div>

                </div>
            </div>

            {/* --- SCROLLABLE GALLERY --- */}
            <div className="w-full lg:w-[75%] relative">
                
                {/* Linha Decorativa de Conexão */}
                <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[1px] bg-stone-200 -translate-x-1/2 hidden md:block"></div>

                <div className="flex flex-col pt-12 lg:pt-32">
                    {PORTFOLIO_ITEMS.map((item, index) => (
                        <PortfolioItem key={item.id} item={item} index={index} />
                    ))}
                </div>

                {/* Footer da Galeria */}
                <div className="mt-24 text-center">
                     <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-block py-4 px-8 border border-stone-300 text-xs font-bold uppercase tracking-widest hover:bg-[#1c1917] hover:text-white hover:border-[#1c1917] transition-all duration-300">
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