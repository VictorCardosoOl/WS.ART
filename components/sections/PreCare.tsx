import React, { useState } from 'react';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';
import { ArrowRight } from 'lucide-react';

const careItems = [
  {
    id: "01",
    title: "Hidratação",
    subtitle: "Preparação da Pele",
    content: "Comece a hidratar a região 7 dias antes. Uma pele hidratada recebe a tinta com suavidade, reduzindo o trauma e garantindo uma cicatrização impecável."
  },
  {
    id: "02",
    title: "Descanso",
    subtitle: "Estado Mental & Físico",
    content: "Durma pelo menos 8h na noite anterior. O corpo precisa de reservas de energia para lidar com a sessão. Uma refeição reforçada antes de vir é obrigatória."
  },
  {
    id: "03",
    title: "Zero Álcool",
    subtitle: "Circulação Sanguínea",
    content: "Abstinência de álcool 24h antes. O álcool dilui o sangue, aumentando o sangramento e expulsando o pigmento durante a aplicação."
  },
  {
    id: "04",
    title: "Vestimenta",
    subtitle: "Conforto & Acesso",
    content: "Opte por roupas pretas e largas. O conforto é essencial para sessões longas e o tecido solto evita compressão na área recém-tatuada."
  }
];

const PreCare: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-40 md:py-64 bg-white relative overflow-hidden">
      
      {/* Top Gradient Transition */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#FAF7F7] to-white pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header - Alinhado à Direita para contraste com a lista */}
        <div className="flex justify-end mb-32 md:mb-48">
            <div className="max-w-xl text-right">
                <SectionTitle 
                    subtitle="Guia Pré-Sessão" 
                    title="Preparação" 
                    align="right"
                />
                <Reveal delay={200}>
                    <p className="text-stone-500 font-light text-xl leading-relaxed mt-[-40px] font-serif italic">
                        O resultado final é 50% técnica e 50% a tela (sua pele).<br/>
                        Siga o ritual para garantir a excelência.
                    </p>
                </Reveal>
            </div>
        </div>

        {/* Giant Steps Layout - More Spacing */}
        <div className="flex flex-col space-y-0">
           {careItems.map((item, index) => (
             <Reveal key={index} delay={index * 100} width="100%">
               <div 
                 className="group relative flex flex-col md:flex-row items-end justify-between border-b border-stone-100 py-16 md:py-20 hover:border-pantone-accent transition-colors duration-1000 cursor-default"
                 onMouseEnter={() => setHoveredStep(index)}
                 onMouseLeave={() => setHoveredStep(null)}
               >
                 
                 {/* Giant Number - Left Side */}
                 <div className="relative w-full md:w-1/3 overflow-hidden">
                    <span className="font-serif text-[120px] md:text-[200px] leading-[0.7] text-stone-50 group-hover:text-pantone-accent/5 transition-colors duration-700 select-none block -ml-2 md:-ml-4">
                        {item.id}
                    </span>
                    <div className="absolute top-1/2 left-4 md:left-8 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -translate-x-8 group-hover:translate-x-0 hidden md:block">
                        <ArrowRight className="text-pantone-accent w-10 h-10" strokeWidth={1} />
                    </div>
                 </div>

                 {/* Content - Right Side Aligned */}
                 <div className="w-full md:w-1/2 text-right mt-8 md:mt-0 relative">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-pantone-accent mb-4 block opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                        {item.subtitle}
                    </span>
                    
                    <h3 className="font-serif text-5xl md:text-7xl text-stone-900 mb-6 md:mb-8 group-hover:italic transition-all duration-700 tracking-tight">
                        {item.title}
                    </h3>
                    
                    <div className={`overflow-hidden transition-all duration-1000 ease-out-expo ${hoveredStep === index ? 'max-h-48 opacity-100' : 'max-h-0 md:max-h-0 opacity-0'} md:group-hover:max-h-48`}>
                        <p className="text-stone-500 font-sans font-light text-base md:text-lg leading-loose pl-0 md:pl-32">
                            {item.content}
                        </p>
                    </div>

                    {/* Mobile always visible snippet */}
                    <div className="block md:hidden mt-4">
                        <p className="text-stone-500 font-light text-sm leading-relaxed">
                            {item.content}
                        </p>
                    </div>
                 </div>

               </div>
             </Reveal>
           ))}
        </div>
      </div>
      
      {/* Bottom Gradient for flow */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#FAF7F7] to-transparent pointer-events-none" />
    </section>
  );
};

export default PreCare;