import React, { useState } from 'react';
import Reveal from '../ui/Reveal';
import { ArrowRight, Star, PenTool } from 'lucide-react';
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
    <section id="services" data-theme="dark" className="py-32 md:py-48 text-stone-100 overflow-hidden relative transition-colors duration-700 bg-[#1c1917]">
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10" 
           style={{ 
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Vignetts for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0c0a09_90%)] pointer-events-none"></div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 relative z-20">
        
        {/* Header Técnico */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-32">
            <Reveal>
                <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                        <PenTool size={16} className="text-white opacity-50" />
                        <span className="uppercase tracking-ultra text-[10px] font-bold text-white opacity-50">Draft v.2.0</span>
                    </div>
                    <h2 className="font-serif text-6xl md:text-8xl text-stone-100 leading-[0.9] relative inline-block">
                        Menu de<br/>
                        Intervenções
                        
                        {/* Underline Sketch */}
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 200 10" preserveAspectRatio="none">
                            <path d="M0,5 Q100,10 200,0" stroke="white" strokeWidth="2" fill="none" opacity="0.3" style={{ filter: 'url(#pencil-stroke)' }} />
                        </svg>
                    </h2>
                </div>
            </Reveal>

            <Reveal delay={200}>
                <div className="mt-8 md:mt-0 max-w-sm text-right">
                     <div className="inline-block border border-white/20 p-4 rotate-2 bg-[#1c1917]" style={{ filter: 'url(#pencil-stroke)' }}>
                         <p className="font-hand text-xl text-stone-300">
                            "Projetos desenvolvidos sob medida."
                         </p>
                     </div>
                </div>
            </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 relative">
          
          <div className="w-full lg:w-2/3 z-20">
            {SERVICES_ITEMS.map((service, index) => (
              <Reveal key={index} delay={index * 100} width="100%">
                <div 
                  className="group relative border-b border-dashed border-stone-700 py-12 md:py-16 cursor-pointer transition-all duration-500 hover:pl-8"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6">
                    <div className="flex items-baseline gap-8">
                        <span className="font-mono text-sm text-stone-500 group-hover:text-white transition-colors">
                            Nº 0{index + 1}
                        </span>
                        <h3 className="font-serif text-4xl md:text-6xl text-stone-300 group-hover:text-white transition-colors duration-300 font-light group-hover:italic">
                          {service.title}
                        </h3>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex items-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                        <p className="font-hand text-xl text-stone-400 rotate-[-2deg]">
                            ( {service.description} )
                        </p>
                    </div>
                  </div>
                  
                  {/* Detailed Description Reveal */}
                  <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-6 transition-all duration-500">
                      <p className="font-mono text-xs text-stone-400 leading-relaxed max-w-lg border-l border-white/20 pl-4 ml-12">
                          {service.details}
                      </p>
                  </div>
                  
                  <ArrowRight 
                    size={24} 
                    strokeWidth={1}
                    className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-8 group-hover:translate-x-0 transition-all duration-500 text-white hidden md:block" 
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sketch Preview Area */}
          <div className="hidden lg:block w-1/3 relative">
            <div className="sticky top-40 w-full aspect-[3/4] border-2 border-white/20 p-2 transition-transform duration-700 ease-out bg-[#2a2725]"
                 style={{ 
                     filter: 'url(#pencil-stroke)',
                     transform: hoveredIndex !== null ? `rotate(${hoveredIndex % 2 === 0 ? 1 : -1}deg)` : 'rotate(0deg)' 
                 }}>
               
               {/* Clips de Papel (Fake UI) */}
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-stone-500 bg-[#1c1917] z-20"></div>

               <div className="relative w-full h-full overflow-hidden bg-stone-800">
                    {SERVICES_ITEMS.map((service, index) => (
                        <img 
                            key={index}
                            src={serviceImages[index] || service.image} 
                            alt={service.title}
                            className={`absolute inset-0 w-full h-full object-cover grayscale contrast-150 transition-all duration-500 ${
                                hoveredIndex === index 
                                ? 'opacity-80 scale-100' 
                                : 'opacity-0 scale-110'
                            }`}
                            style={{ mixBlendMode: 'luminosity' }}
                        />
                    ))}
                    
                    {/* Sketch Lines Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-20"
                         style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}>
                    </div>
                    
                    <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${hoveredIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
                        <span className="font-hand text-3xl text-stone-500">Aguardando Seleção...</span>
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