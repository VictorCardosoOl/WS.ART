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
              <Reveal key={index} delay={index * 50} width="100%">
                <div 
                  className="group relative py-12 md:py-16 cursor-pointer border-t border-white/5 hover:border-white/20 transition-colors duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 pointer-events-none">
                    <div className="flex items-baseline gap-8">
                        <span className="font-sans text-[10px] text-stone-600 font-bold tracking-widest group-hover:text-rose-500 transition-colors duration-300">0{index + 1}</span>
                        <h3 className="font-serif text-4xl md:text-6xl text-stone-300 group-hover:text-rose-100 transition-colors duration-300 font-light group-hover:translate-x-4 transform duration-500 ease-out">
                          {service.title}
                        </h3>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end mt-4 md:mt-0">
                      <p className="text-stone-500 text-[10px] uppercase tracking-widest group-hover:text-white transition-colors duration-300 max-w-xs opacity-60 group-hover:opacity-100 md:ml-16">
                          {service.description}
                      </p>
                      
                      <ArrowRight 
                        size={24} 
                        strokeWidth={1}
                        className="text-rose-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 hidden md:block" 
                      />
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="w-full h-[1px] bg-white/5"></div>
          </div>

          {/* Floating Image Preview (Desktop Only) - Optimized */}
          <div className="hidden lg:block w-1/3 relative pointer-events-none">
            <div className="sticky top-40 w-full aspect-[3/4] overflow-hidden rounded-sm bg-stone-900">
               {SERVICES_ITEMS.map((service, index) => (
                   <img 
                     key={index}
                     src={serviceImages[index] || service.image} 
                     alt={service.title}
                     className={`absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-500 ease-in-out will-change-opacity ${
                        hoveredIndex === index 
                        ? 'opacity-80' 
                        : 'opacity-0'
                     }`}
                     style={{ transform: 'translate3d(0,0,0)' }} // Force GPU
                   />
               ))}
               
               {/* Default State */}
               <div className={`absolute inset-0 flex items-center justify-center bg-stone-800 transition-opacity duration-500 ${hoveredIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="text-center">
                    <p className="text-stone-600 font-serif italic text-2xl tracking-wide opacity-50 mb-2">William Siqueira</p>
                    <p className="text-[9px] uppercase tracking-widest text-stone-700">Selecione um serviço</p>
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