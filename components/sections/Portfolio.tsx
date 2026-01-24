import React, { useRef, useLayoutEffect } from 'react';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ item }: { item: GridGalleryItem }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Image Parallax (Internal movement)
      // The image moves slightly slower than the scroll, creating depth inside the card
      gsap.fromTo(imgRef.current, 
        { scale: 1.15, yPercent: -8 },
        { 
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // 2. Card Entrance (Weighty Fade Up)
      gsap.fromTo(cardRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 95%", // Starts when top of card hits 95% of viewport
            toggleActions: "play none none reverse"
          }
        }
      );
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div 
        ref={cardRef}
        className={`group relative w-full h-full overflow-hidden bg-stone-100 cursor-pointer block rounded-sm`}
        data-cursor="VER PROJETO"
    >
        {/* Image Container with Parallax */}
        <div className="w-full h-full overflow-hidden relative">
            <div className="absolute inset-0 bg-stone-900/10 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
            <img 
              ref={imgRef}
              src={item.src} 
              alt={item.altText} 
              className="
                w-full h-full object-cover 
                grayscale group-hover:grayscale-0 
                transition-all duration-[800ms] 
                ease-[cubic-bezier(0.22,1,0.36,1)] 
                group-hover:scale-105
                will-change-transform
              "
              loading="lazy"
            />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-[800ms] z-10 mix-blend-multiply"></div>

        {/* Content Layer */}
        <div ref={contentRef} className="absolute inset-0 p-6 md:p-8 z-20 flex flex-col justify-end">
            
            {/* Top Tag - Only visible on hover */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                     <span className="text-[9px] font-bold uppercase tracking-widest text-[#754548]">
                        Ver Detalhes
                     </span>
                </div>
            </div>

            {/* Main Info */}
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
                <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="h-[1px] w-4 bg-rose-400"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-200">
                        {item.category}
                    </span>
                </div>

                <div className="flex justify-between items-end">
                    <h3 className="font-serif text-3xl md:text-4xl text-white leading-[0.95] tracking-tight group-hover:text-rose-50 transition-colors duration-500 max-w-[80%]">
                        {item.title}
                    </h3>
                    
                    <div className="overflow-hidden w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <ArrowUpRight 
                            className="text-white transform translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]" 
                            size={24} 
                            strokeWidth={1.5}
                        />
                    </div>
                </div>

                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <p className="text-xs font-sans text-stone-300 font-light leading-relaxed tracking-wide pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 border-l border-white/20 pl-3 max-w-sm">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // Section Title Parallax
        gsap.to(titleRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="gallery" className="relative pt-32 pb-48 bg-white overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E5D0D4]/30 via-white to-white pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Editorial */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-stone-100 pb-8">
          <div ref={titleRef} className="will-change-transform">
             <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#754548] mb-4 pl-1">
                Portfólio 2023—24
             </span>
             <h2 className="text-6xl md:text-[6.5vw] font-serif text-stone-900 leading-[0.85] tracking-tighter">
               Acervo<span className="italic font-light text-stone-400 ml-4 font-serif">Selecionado</span>
             </h2>
          </div>
          
          <div className="mt-8 md:mt-0 text-right max-w-xs z-10">
             <p className="font-serif text-xl italic text-stone-500 leading-snug">
                "Onde a anatomia encontra a narrativa."
             </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`${item.colSpan} ${item.offsetY || ''} relative w-full h-full`}
                >
                     <ProjectCard item={item} />
                </div>
            ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-32 text-center" data-cursor="EXPLORAR">
           <a href="https://instagram.com" className="group inline-flex flex-col items-center gap-4 relative">
               <span className="font-serif italic text-3xl text-stone-400 group-hover:text-stone-900 transition-colors duration-500">
                 Ver arquivo completo
               </span>
               <div className="relative w-[1px] h-16 bg-stone-200 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#754548] -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
               </div>
           </a>
        </div>
      </div>

      {/* Organic Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 text-white">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[120px] fill-current">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Portfolio;