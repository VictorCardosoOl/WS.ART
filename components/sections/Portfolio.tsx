import React, { useRef, useLayoutEffect } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Componente de Imagem com Parallax Físico (Inércia) ---
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // Parallax com Scrub numérico (1) cria o efeito de "peso" (a imagem demora a alcançar o scroll)
        gsap.fromTo(imgRef.current, 
            { yPercent: -12, scale: 1.15 },
            { 
                yPercent: 12,
                scale: 1.15,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom", 
                    end: "bottom top",   
                    scrub: 1 // Inércia física
                }
            }
        );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
        <img 
            ref={imgRef}
            src={src} 
            alt={alt} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[800ms] ease-out-expo will-change-transform"
        />
    </div>
  );
};

// --- Item Padrão do Grid ---
const PortfolioItem = ({ item }: { item: GridGalleryItem }) => {
  return (
    <div className={`group flex flex-col gap-6 ${item.offsetY}`}>
      {/* Container da Imagem */}
      <div 
        className={`relative w-full ${item.height} overflow-hidden bg-[#E5D0D4]/20 rounded-sm cursor-none`}
        data-cursor="Ver Projeto"
      >
        <ParallaxImage src={item.src} alt={item.altText} />
        {/* Noise Overlay Sutil */}
        <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none mix-blend-overlay"></div>
      </div>

      {/* Legenda Minimalista */}
      <div className="flex flex-col border-t border-stone-200 pt-4 group-hover:border-[#754548] transition-colors duration-700">
         <div className="flex justify-between items-baseline">
             <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-none tracking-tight group-hover:italic transition-all duration-500 ease-out-expo">
                 {item.title}
             </h3>
             <ArrowUpRight 
                size={24} 
                className="text-stone-300 group-hover:text-[#754548] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500 ease-out-expo" 
             />
         </div>
         <span className="text-[10px] font-sans font-bold text-stone-400 uppercase tracking-[0.2em] mt-2 group-hover:text-[#754548] transition-colors">
             {item.category}
         </span>
      </div>
    </div>
  );
};

// --- Featured Composition (Layout Triptych / Composite) ---
// Baseado na descrição técnica: Widescreen, Assimétrico (50/25/25), Foco em Anatomia
const FeaturedComposition = () => {
    return (
        <div className="w-full mb-32 lg:mb-48">
            <Reveal width="100%">
                {/* Header Técnico */}
                <div className="flex justify-end mb-4 border-b border-stone-200 pb-2">
                    <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-stone-400">
                        Portfolio Case Study — 001
                    </span>
                </div>

                {/* Grid Layout Composite */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[120vh] md:h-[90vh]">
                    
                    {/* Bloco Esquerdo (50%) - Plano Médio / Postura */}
                    <div className="h-full relative group overflow-hidden bg-stone-100" data-cursor="Anatomia">
                         <ParallaxImage 
                            src="https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=1400&auto=format&fit=crop" 
                            alt="Estudo de Anatomia e Fluxo - Vista Principal" 
                         />
                         {/* Metadados Técnicos Sobrepostos */}
                         <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col gap-1 mix-blend-difference">
                             <span className="text-[10px] text-white uppercase tracking-widest font-bold">Flow: Helicoidal</span>
                             <span className="text-[10px] text-white uppercase tracking-widest font-bold">Placement: Deltoide Posterior</span>
                         </div>
                    </div>

                    {/* Bloco Direito (50%) - Detalhes Empilhados */}
                    <div className="flex flex-col gap-4 h-full">
                        {/* Detalhe 1: Textura / Linha Fina */}
                        <div className="h-1/2 relative group overflow-hidden bg-stone-100" data-cursor="Detalhes">
                            <ParallaxImage 
                                src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop" 
                                alt="Detalhe de Fine Line e Textura" 
                            />
                             <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-difference">
                                <span className="text-[10px] text-white uppercase tracking-widest font-bold">Tech: Whip Shading</span>
                             </div>
                        </div>
                        
                        {/* Detalhe 2: Contraste / Pele Nua */}
                        <div className="h-1/2 relative group overflow-hidden bg-stone-100" data-cursor="Contraste">
                            <ParallaxImage 
                                src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=800&auto=format&fit=crop" 
                                alt="Espaço Negativo e Contraste" 
                            />
                            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-difference">
                                <span className="text-[10px] text-white uppercase tracking-widest font-bold">Needle: 3RL</span>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Legenda do Composite */}
                <div className="flex flex-col md:flex-row justify-between items-start mt-6">
                    <div>
                        <h3 className="font-serif text-4xl md:text-5xl text-stone-900 leading-none">Flora Etérea</h3>
                        <p className="text-[10px] font-sans font-bold text-[#754548] uppercase tracking-[0.2em] mt-2">
                            Composição Neotradicional
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0 max-w-xs text-right hidden md:block">
                        <p className="text-[10px] text-stone-500 uppercase tracking-wide leading-relaxed">
                            A ausência de preto sólido preserva a leveza visual, utilizando a pele nua como elemento de luz na composição.
                        </p>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

// --- Scroller Atmosférico (Bastidores) ---
const StudioScroller = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (sliderRef.current) {
                gsap.to(sliderRef.current, {
                    x: "-30%", // Movimento lateral
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5 // Inércia pesada
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
        <div ref={sectionRef} className="w-full overflow-hidden py-32 bg-[#FAF7F7] border-t border-stone-100">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 mb-12 flex justify-between items-end">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548]">Atmosfera</span>
                <span className="text-[9px] font-mono text-stone-400 hidden md:block">EST. 2018</span>
            </div>
            <div ref={sliderRef} className="flex gap-8 px-6 w-max will-change-transform">
                {studioImages.map((src, i) => (
                    <div key={i} className="w-[300px] md:w-[500px] aspect-[4/3] relative overflow-hidden bg-stone-200">
                        <img src={src} alt="Studio Atmosphere" loading="lazy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out-expo" />
                    </div>
                ))}
            </div>
        </div>
    )
}

const Portfolio: React.FC = () => {
  // Ignora os primeiros itens se quiser que o Featured seja único, ou use todos
  const gridItems = PORTFOLIO_ITEMS.slice(0); 

  return (
    <>
    <section id="gallery" className="relative pt-40 pb-24 bg-white overflow-hidden">
      
      {/* Background Gradient Sutil para transição */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FAF7F7] to-white pointer-events-none"></div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header - Renomeado para Portfólio */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-stone-100 pb-12">
          <Reveal>
             <h2 className="text-7xl md:text-[9vw] font-serif text-stone-900 leading-[0.8] tracking-tighter mix-blend-darken">
               Portfólio<span className="text-[#754548] text-4xl md:text-6xl align-top ml-2 italic">.</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
             <div className="mt-8 md:mt-0 text-right">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">
                    [ Curadoria 2024 ]
                </p>
                <a href="https://instagram.com" className="font-serif italic text-xl text-stone-900 hover:text-[#754548] transition-colors border-b border-stone-900 hover:border-[#754548] pb-1">
                    Ver arquivo completo
                </a>
             </div>
          </Reveal>
        </div>

        {/* 1. Composição em Destaque (Composite Layout) */}
        <FeaturedComposition />

        {/* 2. Grid Assimétrico Restante */}
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