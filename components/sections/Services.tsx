import React, { useRef, useState, useLayoutEffect } from 'react';
import Reveal from '../ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { SERVICES_ITEMS } from '../../data/services';
import gsap from 'gsap';

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Sobrescrevendo imagens com URLs de alta qualidade
  const serviceImages = [
    "https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515965885000-142962f872f8?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop"
  ];

  // Animação de Foco (Dimming effect on siblings)
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    if (listRef.current) {
        const items = Array.from(listRef.current.children);
        
        items.forEach((item, i) => {
            if (i === index) {
                // Item Ativo: Escala leve e move para a direita
                gsap.to(item, { opacity: 1, x: 10, scale: 1.02, duration: 0.4, ease: "power2.out" });
            } else {
                // Siblings: Diminui opacidade e blur leve
                gsap.to(item, { opacity: 0.3, x: 0, scale: 1, filter: "blur(2px)", duration: 0.4, ease: "power2.out" });
            }
        });
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (listRef.current) {
        const items = Array.from(listRef.current.children);
        // Reset
        gsap.to(items, { opacity: 1, x: 0, scale: 1, filter: "blur(0px)", duration: 0.4, ease: "power2.out" });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-stone-900 text-stone-100 overflow-hidden relative">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20">
        
        <Reveal>
            <div className="flex items-center gap-4 mb-16 md:mb-24">
                <div className="h-[1px] w-12 bg-rose-500"></div>
                <span className="uppercase tracking-[0.2em] text-sm font-medium text-rose-500">Especialidades</span>
            </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* List Section */}
          <div className="w-full lg:w-2/3 z-20" ref={listRef}>
            {SERVICES_ITEMS.map((service, index) => (
              <div key={index} className="will-change-transform"> {/* Wrapper para o Reveal não quebrar o flex/grid se houvesse */}
                <Reveal delay={index * 50} width="100%">
                    <div 
                    className="group relative border-t border-stone-800 py-10 md:py-16 cursor-pointer transition-colors px-4 -mx-4 rounded-xl"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    >
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pointer-events-none">
                            <div className="flex items-baseline gap-6">
                                <span className="font-sans text-xs text-stone-600 font-bold">({service.id})</span>
                                <h3 className="font-serif text-3xl md:text-5xl group-hover:text-rose-500 transition-colors duration-300">
                                {service.title}
                                </h3>
                            </div>
                            <p className="text-stone-500 text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                                {service.description}
                            </p>
                        </div>
                    
                        <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-500 md:hidden pointer-events-none">
                            <p className="text-stone-400 text-sm leading-relaxed">{service.details}</p>
                        </div>
                        
                        <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-rose-500 hidden md:block" />
                    </div>
                </Reveal>
              </div>
            ))}
            <div className="border-t border-stone-800 w-full opacity-30"></div>
          </div>

          {/* Floating Image Preview (Desktop Only) */}
          {/* GSAP Flip logic could be here, but distinct opacity fade is safer for React render cycles */}
          <div className="hidden lg:block w-1/3 relative pointer-events-none">
            <div className="sticky top-32 w-full aspect-[3/4] rounded-2xl border border-white/5 bg-stone-800/50">
               {/* Container Mask */}
               <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    {SERVICES_ITEMS.map((service, index) => (
                        <div 
                            key={index}
                            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out transform ${
                                hoveredIndex === index 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-0 scale-110'
                            }`}
                        >
                            <img 
                                src={serviceImages[index] || service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover grayscale"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
                            
                            {/* Floating Text inside Image */}
                            <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <p className="text-white text-sm font-light leading-relaxed font-serif italic border-l-2 border-rose-500 pl-4">
                                    "{service.details}"
                                </p>
                            </div>
                        </div>
                    ))}
                    
                    {/* Default State */}
                    <div className={`absolute inset-0 flex items-center justify-center bg-stone-800 transition-opacity duration-500 ${hoveredIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="text-center opacity-30">
                            <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-serif italic">Ws</span>
                            </div>
                            <p className="text-stone-500 font-sans text-xs tracking-widest uppercase">Selecione para detalhar</p>
                        </div>
                    </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;