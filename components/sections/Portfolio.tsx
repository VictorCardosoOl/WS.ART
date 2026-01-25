import React, { useRef, useLayoutEffect } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Componente de Imagem com Parallax 15% e Hover Cinematográfico ---
const ParallaxImage = ({ src, alt }: { src: string, alt: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // Parallax suave: A imagem se move 15% em oposição ao scroll container
        // yPercent varia de -15 a 15 durante o scroll
        gsap.fromTo(imgRef.current, 
            { yPercent: -15, scale: 1.1 }, // Scale base leve para cobrir o movimento
            { 
                yPercent: 15,
                scale: 1.1, // Mantém escala
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom", // Quando o topo do container entra em baixo
                    end: "bottom top",   // Quando o fundo do container sai por cima
                    scrub: true
                }
            }
        );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
        <img 
            ref={imgRef}
            src={src} 
            alt={alt} 
            loading="lazy"
            decoding="async"
            // Hover: Scale 1.05 com ease-cinema (definido no tailwind config)
            className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-[800ms] ease-cinema will-change-transform"
        />
    </div>
  );
};

// --- Item Padrão do Grid ---
const PortfolioItem = ({ item }: { item: GridGalleryItem }) => {
  return (
    <div className={`group flex flex-col gap-6 ${item.offsetY}`}>
      {/* Container da Imagem com Data Cursor */}
      <div 
        className={`relative w-full ${item.height} overflow-hidden bg-[#E5D0D4]/20 rounded-sm cursor-none`}
        data-cursor="Ver Projeto"
      >
        <ParallaxImage src={item.src} alt={item.altText} />
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
      </div>

      {/* Legenda */}
      <div className="flex flex-col border-t border-stone-200 pt-4 group-hover:border-[#754548] transition-colors duration-700">
         <div className="flex justify-between items-baseline">
             <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-none tracking-tight group-hover:italic transition-all duration-500">
                 {item.title}
             </h3>
             <div className="overflow-hidden relative w-6 h-6">
                <ArrowUpRight 
                    size={24} 
                    className="text-[#754548] absolute top-0 left-0 transform translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" 
                />
                <ArrowUpRight 
                    size={24} 
                    className="text-stone-300 absolute top-0 left-0 transform group-hover:-translate-y-full group-hover:translate-x-full transition-all duration-500" 
                />
             </div>
         </div>
         <span className="text-[10px] font-sans font-bold text-stone-400 uppercase tracking-[0.2em] mt-2">
             {item.category} — 2024
         </span>
      </div>
    </div>
  );
};

// --- Destaque Inicial (Layout Print) ---
const FeaturedComposition = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mb-32 lg:mb-40">
            {/* Coluna Esquerda: Imagem Principal (Retrato Grande) */}
            <div className="lg:col-span-8 h-[80vh] md:h-[110vh] relative group overflow-hidden bg-[#E5D0D4]/20 rounded-sm cursor-none" data-cursor="Ver Projeto">
                 <ParallaxImage 
                    src="https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=1400&auto=format&fit=crop" 
                    alt="Composição Floral Neotradicional - Visão Completa" 
                 />
                 <div className="absolute bottom-8 left-8 z-20 mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white font-serif italic text-3xl">Anatomia & Fluxo</span>
                 </div>
            </div>

            {/* Coluna Direita: Detalhes Empilhados */}
            <div className="lg:col-span-4 flex flex-col gap-6 h-[80vh] md:h-[110vh]">
                {/* Detalhe Superior */}
                <div className="h-1/2 relative group overflow-hidden bg-[#E5D0D4]/20 rounded-sm cursor-none" data-cursor="Detalhes">
                    <ParallaxImage 
                        src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop" 
                        alt="Detalhe de ombro" 
                    />
                </div>
                {/* Detalhe Inferior */}
                <div className="h-1/2 relative group overflow-hidden bg-[#E5D0D4]/20 rounded-sm cursor-none" data-cursor="Textura">
                    <ParallaxImage 
                        src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=800&auto=format&fit=crop" 
                        alt="Detalhe de traço" 
                    />
                </div>
            </div>
            
            {/* Legenda do Conjunto */}
            <div className="lg:col-span-12 flex justify-between items-end border-b border-stone-200 pb-4 mt-4">
                <div>
                    <h3 className="font-serif text-4xl md:text-5xl text-stone-900 leading-none">Flora Etérea</h3>
                    <p className="text-[10px] font-sans font-bold text-[#754548] uppercase tracking-[0.2em] mt-2">Fechamento de Braço Completo</p>
                </div>
                <div className="hidden md:block text-right">
                    <p className="font-serif italic text-stone-500">Composição em três atos.</p>
                </div>
            </div>
        </div>
    );
}

// --- Scroller de Bastidores ---
const StudioScroller = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (sliderRef.current) {
                gsap.to(sliderRef.current, {
                    x: "-25%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.5 
                    }
                });
            }
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const studioImages = [
        "https://images.unsplash.com/photo-1590246814883-057f66d4040a?q=80&w=600&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=600&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=600&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1550537687-c91357788f04?q=80&w=600&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1621112904891-5af4d4771383?q=80&w=600&auto=format&fit=crop",
    ];

    return (
        <div ref={sectionRef} className="w-full overflow-hidden py-32 bg-[#FAF7F7]">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548]">Bastidores & Atmosfera</span>
            </div>
            <div ref={sliderRef} className="flex gap-8 px-6 w-max will-change-transform">
                {studioImages.map((src, i) => (
                    <div key={i} className="w-[300px] md:w-[500px] aspect-[4/3] relative overflow-hidden bg-stone-200">
                        <img src={src} alt="Studio Atmosphere" loading="lazy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-cinema" />
                    </div>
                ))}
            </div>
        </div>
    )
}

const Portfolio: React.FC = () => {
  // Filtramos os 3 primeiros itens pois eles agora são representados visualmente pelo FeaturedComposition
  // ou poderíamos apenas renderizar a partir do index 3.
  const gridItems = PORTFOLIO_ITEMS.slice(3); 

  return (
    <>
    <section id="gallery" className="relative pt-40 pb-24 bg-white overflow-hidden">
      
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header - Alinhamento Editorial */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-stone-100 pb-12">
          <Reveal>
             <h2 className="text-7xl md:text-[9vw] font-serif text-stone-900 leading-[0.8] tracking-tighter mix-blend-darken">
               Acervo<span className="text-[#754548] text-4xl md:text-6xl align-top ml-2 italic">.</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
             <div className="mt-8 md:mt-0 text-right">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">
                    [ Seleção Recente ]
                </p>
                <a href="https://instagram.com" className="font-serif italic text-xl text-stone-900 hover:text-[#754548] transition-colors border-b border-stone-900 hover:border-[#754548] pb-1">
                    Ver arquivo completo
                </a>
             </div>
          </Reveal>
        </div>
        
        {/* 1. Composição em Destaque (Layout Print) */}
        <Reveal width="100%">
            <FeaturedComposition />
        </Reveal>

        {/* 2. Grid Assimétrico Restante */}
        {/* Aumentado gap-y para 40 (10rem) para visual mais espaçado */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:gap-x-12 gap-y-40">
            {gridItems.map((item, index) => (
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

      </div>
    </section>
    
    <StudioScroller />
    </>
  );
};

export default Portfolio;