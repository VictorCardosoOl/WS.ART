import React, { useState } from 'react';
import Reveal from '../ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { SERVICES_ITEMS } from '../../data/services';

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Sobrescrevendo imagens com URLs de alta qualidade para este componente
  const serviceImages = [
    "https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515965885000-142962f872f8?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-stone-900 text-stone-100 overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20">
        
        <Reveal>
            <div className="flex items-center gap-4 mb-16 md:mb-24">
                <div className="h-[1px] w-12 bg-rose-500"></div>
                <span className="uppercase tracking-[0.2em] text-sm font-medium text-rose-500">Especialidades</span>
            </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* List Section */}
          <div className="w-full lg:w-2/3 z-20">
            {SERVICES_ITEMS.map((service, index) => (
              <Reveal key={index} delay={index * 100} width="100%">
                <div 
                  className="group relative border-t border-stone-800 py-10 md:py-16 cursor-pointer transition-colors hover:bg-white/5 px-4 -mx-4 rounded-xl"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
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
                  
                  <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-500 md:hidden">
                      <p className="text-stone-400 text-sm leading-relaxed">{service.details}</p>
                  </div>
                  
                  <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-rose-500 hidden md:block" />
                </div>
              </Reveal>
            ))}
            <div className="border-t border-stone-800 w-full"></div>
          </div>

          {/* Floating Image Preview (Desktop Only) */}
          <div className="hidden lg:block w-1/3 relative">
            <div className="sticky top-32 w-full aspect-[3/4] overflow-hidden rounded-2xl border border-white/5 bg-stone-800/50">
               {SERVICES_ITEMS.map((service, index) => (
                   <img 
                     key={index}
                     src={serviceImages[index] || service.image} 
                     alt={service.title}
                     className={`absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-out transform rounded-2xl ${
                        hoveredIndex === index 
                        ? 'opacity-100 scale-100 rotate-0' 
                        : 'opacity-0 scale-110 rotate-2'
                     }`}
                   />
               ))}
               <div className={`absolute inset-0 flex items-center justify-center bg-stone-800 transition-opacity duration-500 rounded-2xl ${hoveredIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
                  <p className="text-stone-600 font-serif italic text-xl">Selecione uma especialidade</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;