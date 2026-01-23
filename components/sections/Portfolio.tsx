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
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Effect
      gsap.fromTo(imgRef.current, 
        { scale: 1.15, yPercent: -5 },
        { 
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // Entrance Animation
      gsap.fromTo(cardRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
          }
        }
      );
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div 
        ref={cardRef}
        className={`group relative w-full h-full overflow-hidden bg-stone-100 cursor-pointer block`}
        data-cursor="VER PROJETO"
    >
        {/* Image Container with Parallax */}
        <div className="w-full h-full overflow-hidden">
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-[800ms] z-10"></div>

        {/* Content */}
        <div ref={textRef} className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 flex flex-col justify-end">
            <div className="overflow-hidden mb-3">
                <div className="flex items-center gap-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out">
                    <span className="h-[1px] w-6 bg-rose-400"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-200">
                        {item.category}
                    </span>
                </div>
            </div>

            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-2 max-w-[85%]">
                    <h3 className="font-serif text-3xl md:text-5xl text-white leading-[0.9] tracking-tighter group-hover:text-rose-50 transition-colors duration-500">
                        {item.title}
                    </h3>
                    
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                        <p className="text-xs font-sans text-stone-300 font-light leading-relaxed tracking-wide pt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-150 border-l border-white/20 pl-3">
                            {item.description}
                        </p>
                    </div>
                </div>
                
                <div className="overflow-hidden w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight 
                        className="text-white transform translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]" 
                        size={28} 
                        strokeWidth={1}
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="gallery" className="relative pt-32 pb-40 bg-white overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E5D0D4]/30 via-white to-white pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-stone-100 pb-8">
          <div>
             <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#754548] mb-4 pl-1">
                Portfólio 2023—24
             </span>
             <h2 className="text-6xl md:text-[7vw] font-serif text-stone-900 leading-[0.85] tracking-tighter">
               Acervo<span className="italic font-light text-stone-400 ml-4">Selecionado</span>
             </h2>
          </div>
          
          <div className="mt-8 md:mt-0 text-right max-w-xs">
             <p className="font-serif text-xl italic text-stone-500 leading-snug">
                "Cada obra é um diálogo silencioso entre a anatomia e a memória."
             </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[350px] md:auto-rows-[450px] gap-4">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`${item.colSpan} relative w-full h-full min-h-[350px]`}
                >
                     <ProjectCard item={item} />
                </div>
            ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-32 text-center" data-cursor="EXPLORAR">
           <a href="https://instagram.com" className="group inline-flex flex-col items-center gap-4">
               <span className="font-serif italic text-3xl text-stone-300 group-hover:text-stone-900 transition-colors duration-500">
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