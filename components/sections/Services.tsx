import React, { useState } from 'react';
import Reveal from '../ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { SERVICES_ITEMS } from '../../data/services';

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const serviceImages = [
    "https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515965885000-142962f872f8?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    // Removido bg-stone-900, adicionado data-theme="dark"
    // O texto deve ser claro (text-stone-100), pois o fundo será escuro via ThemeController
    <section id="services" data-theme="dark" className="py-32 md:py-48 text-stone-100 overflow-hidden relative transition-colors duration-700">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 relative z-20">
        
        <Reveal>
            <div className="flex items-center gap-6 mb-24 md:mb-32">
                <div className="h-[1px] w-16 bg-rose-500 opacity-60"></div>
                <span className="uppercase tracking-ultra text-[10px] font-bold text-rose-500">Especialidades</span>
            </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 relative">
          
          <div className="w-full lg:w-2/3 z-20">
            {SERVICES_ITEMS.map((service, index) => (
              <Reveal key={index} delay={index * 100} width="100%">
                <div 
                  className="group relative py-12 md:py-16 cursor-pointer transition-all duration-700 -mx-6 px-6 rounded-sm hover:bg-white/[0.02]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6">
                    <div className="flex items-baseline gap-8">
                        <span className="font-sans text-[10px] text-stone-500 font-bold tracking-widest opacity-60 group-hover:text-rose-500 group-hover:opacity-100 transition-all duration-500">0{index + 1}</span>
                        <h3 className="font-serif text-4xl md:text-6xl text-stone-300 group-hover:text-rose-100 transition-colors duration-500 font-light">
                          {service.title}
                        </h3>
                    </div>
                    <p className="text-stone-500 text-[10px] uppercase tracking-widest group-hover:text-white transition-colors duration-500 mt-4 md:mt-0 opacity-70 group-hover:opacity-100">
                        {service.description}
                    </p>
                  </div>
                  
                  <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-8 transition-all duration-700 md:hidden">
                      <p className="text-stone-400 text-sm leading-luxury tracking-wide font-light">{service.details}</p>
                  </div>
                  
                  <ArrowRight 
                    size={20} 
                    strokeWidth={1}
                    className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-8 group-hover:translate-x-0 transition-all duration-700 text-rose-500 hidden md:block" 
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Floating Image Preview (Desktop Only) */}
          <div className="hidden lg:block w-1/3 relative">
            <div className="sticky top-40 w-full aspect-[3/4] overflow-hidden rounded-sm border border-white/5 bg-stone-800/20">
               {SERVICES_ITEMS.map((service, index) => (
                   <img 
                     key={index}
                     src={serviceImages[index] || service.image} 
                     alt={service.title}
                     className={`absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 ease-out transform ${
                        hoveredIndex === index 
                        ? 'opacity-100 scale-100 blur-0' 
                        : 'opacity-0 scale-110 blur-sm'
                     }`}
                   />
               ))}
               <div className={`absolute inset-0 flex items-center justify-center bg-stone-900/40 transition-opacity duration-700 ${hoveredIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
                  <p className="text-stone-600 font-serif italic text-2xl tracking-wide opacity-50">Seleção</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;