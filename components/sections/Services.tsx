import React, { useState, useRef, useEffect } from 'react';
import Reveal from '../ui/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_ITEMS } from '../../data/services';
import gsap from 'gsap';

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Imagens de alta qualidade em P&B para o estilo "Noir/Brutalist"
  const serviceImages = [
    "https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=1000&auto=format&fit=crop", // Projetos Autorais
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1000&auto=format&fit=crop", // Coberturas
    "https://images.unsplash.com/photo-1590246468728-d3c09f30b910?q=80&w=1000&auto=format&fit=crop", // Flash Days
    "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1000&auto=format&fit=crop"  // Consultoria
  ];

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  return (
    // Fundo escuro para contraste forte (Brutalist)
    <section id="services" data-theme="dark" className="py-32 md:py-48 bg-[#0c0a09] text-[#FAF7F7] overflow-hidden relative transition-colors duration-700">
      
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        
        {/* Header Minimalista */}
        <Reveal>
            <div className="flex items-end justify-between mb-24 md:mb-32 border-b border-white/10 pb-8">
                <h2 className="font-serif text-5xl md:text-8xl text-white leading-none tracking-tight">
                    Especialidades<span className="text-[#754548]">.</span>
                </h2>
                <div className="hidden md:block text-right">
                    <p className="text-[10px] uppercase tracking-widest text-stone-500">Service Menu</p>
                    <p className="text-[10px] uppercase tracking-widest text-stone-500">2024 Collection</p>
                </div>
            </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* LISTA DE SERVIÇOS (ESQUERDA) */}
          <div className="w-full lg:w-1/2 z-20 flex flex-col">
            {SERVICES_ITEMS.map((service, index) => (
              <div 
                key={index}
                className="group relative border-b border-white/10 last:border-b-0"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                 <div className="py-12 md:py-16 flex flex-col gap-6 cursor-pointer transition-all duration-500 hover:pl-8">
                    
                    {/* Linha Superior: ID + Título */}
                    <div className="flex items-baseline gap-6 md:gap-12">
                        <span className="text-xs font-bold text-stone-600 font-sans tracking-widest group-hover:text-[#754548] transition-colors">
                            0{index + 1}
                        </span>
                        <h3 className="text-3xl md:text-5xl font-serif text-stone-300 group-hover:text-white transition-colors duration-300">
                            {service.title}
                        </h3>
                    </div>

                    {/* Descrição (Reveal on Hover) */}
                    <div className="pl-[calc(1.5rem+24px)] md:pl-[calc(3rem+24px)] max-w-md overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-2">
                         <p className="text-stone-400 text-sm leading-relaxed font-light">
                             {service.details}
                         </p>
                         <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                             Detalhes <ArrowUpRight size={14} className="text-[#754548]" />
                         </div>
                    </div>

                 </div>
                 
                 {/* Indicador de Hover (Barra Lateral) */}
                 <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#754548] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
              </div>
            ))}
          </div>

          {/* IMAGEM FLUTUANTE (DIREITA - STICKY) */}
          <div className="hidden lg:block w-1/2 relative">
             <div className="sticky top-32 w-full aspect-[4/5] overflow-hidden rounded-sm bg-stone-900 shadow-2xl shadow-black/50">
                {serviceImages.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt="Service Preview"
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out will-change-transform ${
                            hoveredIndex === idx 
                            ? 'opacity-100 scale-100 grayscale-0' 
                            : 'opacity-0 scale-110 grayscale'
                        }`}
                    />
                ))}
                
                {/* Overlay Noise na Imagem */}
                <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay pointer-events-none"></div>
                
                {/* Legenda Flutuante sobre a imagem */}
                <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10">
                     <p className="text-white font-serif italic text-lg">
                        {SERVICES_ITEMS[hoveredIndex]?.description}
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