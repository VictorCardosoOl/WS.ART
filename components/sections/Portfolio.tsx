import React, { useLayoutEffect, useRef } from 'react';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Bento Card com Parallax Interno
const BentoCard = ({ item }: { item: GridGalleryItem }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Internal Parallax for Image
      // Moves image within its overflow-hidden container
      gsap.fromTo(imgRef.current, 
        { scale: 1.2, yPercent: -10 },
        {
          yPercent: 10,
          scale: 1.2, // Maintain scale to prevent edges showing
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom", // When card top enters viewport bottom
            end: "bottom top",   // When card bottom leaves viewport top
            scrub: true,
          }
        }
      );

      // Magnetic Hover Effect (Simulated via Timeline on hover)
      // This part is handled by CSS group-hover largely, but we could enhance with GSAP
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
        ref={cardRef}
        className={`group relative w-full h-full overflow-hidden rounded-sm bg-stone-100 cursor-pointer`}
        data-cursor="VER PROJETO"
    >
        <div className="w-full h-full overflow-hidden relative">
            <img 
              ref={imgRef}
              src={item.src} 
              alt={item.altText} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
              loading="lazy"
            />
        </div>
        
        {/* Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-[800ms] z-10"></div>

        {/* Text Overlay */}
        <div ref={textContainerRef} className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
            
            {/* Top Line & Category */}
            <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span className="h-[1px] w-6 bg-rose-400"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-200">
                    {item.category}
                </span>
            </div>

            {/* Title & Icon Row */}
            <div className="flex justify-between items-end">
                <h3 className="font-serif text-3xl md:text-4xl text-white leading-[0.95] italic font-light tracking-tight group-hover:text-rose-50 transition-colors duration-500">
                    {item.title}
                </h3>
                
                <div className="overflow-hidden w-8 h-8 flex items-center justify-center">
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
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // Staggered Reveal of Grid Items
        // Select all direct children div of gridRef
        const items = gsap.utils.toArray('.portfolio-item');
        
        gsap.fromTo(items, 
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.1, // Rhythm law
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 85%", // Start when top of grid hits 85% of viewport
                }
            }
        );
        
        // Header Reveal
        gsap.fromTo(".portfolio-header", 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
        );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="gallery" className="relative pt-32 pb-40 bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="portfolio-header flex flex-col md:flex-row justify-between items-end mb-16 border-b border-stone-100 pb-6 opacity-0">
          <div>
             <h2 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.8] tracking-tighter">
               Acervo<span className="text-[#754548] text-4xl">.</span>
             </h2>
          </div>
          
          <div className="mt-8 md:mt-0 text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
              Obras selecionadas 2023 — 2024
            </p>
          </div>
        </div>

        {/* GRID */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[380px] gap-4 md:gap-6">
            {PORTFOLIO_ITEMS.map((item) => (
                <div 
                    key={item.id} 
                    className={`${item.colSpan} relative w-full h-full min-h-[300px] md:min-h-auto portfolio-item opacity-0`}
                >
                    <BentoCard item={item} />
                </div>
            ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-24 text-center portfolio-header" data-cursor="EXPLORAR">
             <a href="https://instagram.com" className="group inline-flex flex-col items-center gap-3">
               <span className="font-serif italic text-2xl text-stone-400 group-hover:text-stone-900 transition-colors duration-500">
                 Ver coleção completa
               </span>
               <div className="relative w-[1px] h-12 bg-stone-200 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#754548] -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
               </div>
             </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;