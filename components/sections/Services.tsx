import React, { useState } from 'react';
import Reveal from '../ui/Reveal';
import { ArrowRight, Star } from 'lucide-react';
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
    <section id="services" data-theme="dark" className="py-32 md:py-48 text-stone-100 overflow-hidden relative transition-colors duration-700 bg-[#0c0a09]">
      
      {/* Background Texture - Old Paper vibe dark mode */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 relative z-20">
        
        {/* Header com anotação manuscrita */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-32">
            <Reveal>
                <div className="relative">
                    <div className="flex items-center gap-6 mb-4">
                        <div className="h-[1px] w-16 bg-rose-500 opacity-60"></div>
                        <span className="uppercase tracking-ultra text-[10px] font-bold text-rose-500">Manifesto Técnico</span>
                    </div>
                    <h2 className="font-serif text-6xl md:text-8xl text-stone-100 leading-[0.9]">
                        Menu de<br/>
                        Intervenções
                    </h2>
                    
                    {/* Anotação Manuscrita (Scribble) */}
                    <div className="absolute -top-8 -right-12 md:-right-24 rotate-12 transform">
                        <p className="font-hand text-3xl text-rose-400 opacity-90">
                            ( Somente autoral! )
                        </p>
                        <svg className="w-24 h-8 text-rose-400" viewBox="0 0 100 20">
                            <path d="M0,10 Q50,20 100,0" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </Reveal>

            <Reveal delay={200}>
                <div className="mt-8 md:mt-0 max-w-sm text-right opacity-60">
                     <p className="font-mono text-xs uppercase tracking-widest border-l border-rose-500 pl-4">
                        Ref. Doc: #WS-2024-SP<br/>
                        Status: Disponível
                     </p>
                </div>
            </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 relative">
          
          <div className="w-full lg:w-2/3 z-20">
            {SERVICES_ITEMS.map((service, index) => (
              <Reveal key={index} delay={index * 100} width="100%">
                <div 
                  className="group relative border-b border-stone-800 py-12 md:py-16 cursor-pointer transition-all duration-500 hover:pl-8"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Highlight no Hover (Efeito Marca-texto escuro) */}
                  <div className="absolute inset-0 bg-stone-800/0 group-hover:bg-stone-800/30 transition-colors duration-500 -z-10 w-[120%] -left-10 transform -skew-x-12"></div>

                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6">
                    <div className="flex items-baseline gap-8">
                        <span className="font-mono text-sm text-stone-600 group-hover:text-rose-500 transition-colors">
                            Nº 0{index + 1}
                        </span>
                        <h3 className="font-serif text-4xl md:text-6xl text-stone-300 group-hover:text-white transition-colors duration-300 font-light group-hover:italic">
                          {service.title}
                        </h3>
                    </div>
                    
                    {/* Descrição que aparece como "Carimbo" ou anotação */}
                    <div className="mt-4 md:mt-0 flex items-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                        <p className="text-[10px] uppercase tracking-widest text-stone-400">
                            {service.description}
                        </p>
                        <Star size={10} className="text-rose-500 animate-spin-slow" />
                    </div>
                  </div>
                  
                  <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-6 transition-all duration-500">
                      <p className="font-hand text-2xl text-rose-200/80 leading-relaxed max-w-lg transform -rotate-1 origin-left">
                          "{service.details}"
                      </p>
                  </div>
                  
                  <ArrowRight 
                    size={24} 
                    strokeWidth={1}
                    className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-8 group-hover:translate-x-0 transition-all duration-500 text-rose-500 hidden md:block" 
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Floating Image Preview (Style: Polaroide Queimada) */}
          <div className="hidden lg:block w-1/3 relative">
            <div className="sticky top-40 w-full aspect-[3/4] p-4 bg-white/5 backdrop-blur-sm border border-white/10 rotate-3 transition-transform duration-700 ease-out"
                 style={{ transform: hoveredIndex !== null ? `rotate(${hoveredIndex % 2 === 0 ? 2 : -2}deg) scale(1.05)` : 'rotate(3deg)' }}>
               
               {/* "Fita Adesiva" no topo */}
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-rose-500/20 backdrop-blur-md rotate-[-2deg]"></div>

               <div className="relative w-full h-full overflow-hidden bg-stone-900">
                    {SERVICES_ITEMS.map((service, index) => (
                        <img 
                            key={index}
                            src={serviceImages[index] || service.image} 
                            alt={service.title}
                            className={`absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-all duration-700 ease-out ${
                                hoveredIndex === index 
                                ? 'opacity-100 scale-100 blur-0' 
                                : 'opacity-0 scale-110 blur-md'
                            }`}
                        />
                    ))}
                    
                    {/* Noise Overlay na foto */}
                    <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
                    
                    <div className={`absolute inset-0 flex flex-col items-center justify-center bg-stone-900 transition-opacity duration-700 ${hoveredIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
                        <span className="font-hand text-4xl text-stone-600 rotate-[-10deg]">Selecione...</span>
                    </div>
               </div>

               {/* Legenda Polaroide */}
               <div className="pt-4 text-center">
                    <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">
                        Fig. {hoveredIndex !== null ? hoveredIndex + 1 : '?'} — Arquivo
                    </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;