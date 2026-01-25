import React, { useState, useRef } from 'react';
import Reveal from '../ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { SERVICES_ITEMS } from '../../data/services';
import gsap from 'gsap';

// Imagens de alta qualidade para o fundo
const bgImages = [
  "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1920&auto=format&fit=crop", // Projetos Autorais
  "https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=1920&auto=format&fit=crop", // Coberturas
  "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1920&auto=format&fit=crop", // Flash
  "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1920&auto=format&fit=crop"  // Consultoria
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section ref={containerRef} id="services" className="relative py-32 md:py-48 bg-stone-900 overflow-hidden min-h-screen flex items-center">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 w-full h-full bg-black">
         {/* Imagem Padrão (Sem Hover) */}
         <div 
            className={`absolute inset-0 bg-stone-900 transition-opacity duration-700 ${activeIndex === null ? 'opacity-100' : 'opacity-0'}`}
         ></div>

         {/* Imagens dos Serviços */}
         {SERVICES_ITEMS.map((service, index) => (
             <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-40' : 'opacity-0'}`}
             >
                 <img 
                    src={bgImages[index]} 
                    alt="" 
                    className="w-full h-full object-cover grayscale opacity-60"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
             </div>
         ))}
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <Reveal>
            <div className="mb-24">
                <span className="uppercase tracking-[0.3em] text-xs font-bold text-[#754548] mb-4 block">Especialidades</span>
                <h2 className="text-white font-serif text-5xl md:text-7xl">O que ofereço</h2>
            </div>
        </Reveal>

        <div className="flex flex-col w-full max-w-4xl">
            {SERVICES_ITEMS.map((service, index) => (
              <div 
                key={index}
                className="group relative border-t border-white/10 py-12 md:py-16 cursor-pointer transition-all duration-300"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 group-hover:pl-8 transition-all duration-500">
                    
                    <div className="flex flex-col">
                         <span className="text-[10px] font-bold uppercase tracking-widest text-[#754548] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            0{index + 1}
                         </span>
                         <h3 className="font-serif text-4xl md:text-6xl text-stone-400 group-hover:text-white transition-colors duration-300 leading-none group-hover:italic">
                          {service.title}
                        </h3>
                    </div>

                    <div className="max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">
                        <p className="text-stone-300 text-sm font-light leading-relaxed">
                            {service.details}
                        </p>
                    </div>

                    <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                  </div>
              </div>
            ))}
            <div className="border-t border-white/10"></div>
        </div>

      </div>
    </section>
  );
};

export default Services;