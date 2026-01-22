import React from 'react';
import Reveal from '../ui/Reveal';

const careItems = [
  {
    id: "01",
    title: "Hidratação",
    subtitle: "Preparação da tela",
    content: "Comece a hidratar a região da tatuagem 7 dias antes. Uma pele hidratada recebe melhor a tinta, reduz o trauma da agulha e facilita drasticamente a cicatrização posterior."
  },
  {
    id: "02",
    title: "Descanso",
    subtitle: "Energia vital",
    content: "Durma bem na noite anterior (8h+). O corpo precisa de energia para lidar com a sessão. Faça uma refeição reforçada antes de vir ao estúdio para evitar quedas de pressão."
  },
  {
    id: "03",
    title: "Zero Álcool",
    subtitle: "Coagulação sanguínea",
    content: "Não consuma bebidas alcoólicas 24h antes. O álcool afina o sangue, aumentando o sangramento durante o processo, o que expulsa o pigmento e dificulta o trabalho."
  },
  {
    id: "04",
    title: "Vestimenta",
    subtitle: "Conforto e acesso",
    content: "Venha com roupas confortáveis, pretas ou escuras (tinta pode respingar). Garanta fácil acesso à área a ser tatuada sem comprimir o local e permitindo a circulação."
  }
];

const PreCare: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#12100E] text-stone-200 overflow-hidden relative" id="precare">
      
      {/* Background Texture/Grid (Optional Subtle Detail) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Compacto para caber no Viewport */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 border-b border-white/10 pb-6">
            <Reveal>
                <div>
                    <span className="block font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#754548] mb-2">
                        Guia Essencial
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-white leading-none">
                        Pré-Sessão
                    </h2>
                </div>
            </Reveal>
            
            <Reveal delay={200}>
                <p className="text-stone-500 text-xs md:text-sm max-w-xs text-right leading-relaxed mt-4 md:mt-0">
                    O resultado final depende 50% da técnica do artista e 50% da condição da sua pele.
                </p>
            </Reveal>
        </div>

        {/* Grid Otimizado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
           {careItems.map((item, index) => (
             <Reveal key={index} delay={index * 100} width="100%">
               <div className="flex flex-col h-full relative group pt-4">
                 
                 {/* Camada do Número Gigante (Background) */}
                 <span className="absolute -top-6 -left-4 text-[9rem] leading-none font-serif text-white/5 font-bold select-none z-0 transition-colors duration-500 group-hover:text-white/10 pointer-events-none">
                    {item.id}
                 </span>
                 
                 {/* Conteúdo Foreground */}
                 <div className="relative z-10 pl-2">
                    
                    {/* Título Proporcionalmente Maior */}
                    <h3 className="font-serif text-4xl md:text-5xl text-stone-100 font-medium leading-[0.9] mb-3 group-hover:text-rose-400 transition-colors duration-300">
                        {item.title}
                    </h3>
                    
                    <span className="block font-sans text-[10px] uppercase tracking-[0.25em] text-[#754548] font-bold mb-6">
                        {item.subtitle}
                    </span>

                    {/* Divisória Sutil */}
                    <div className="w-8 h-[1px] bg-white/20 mb-5 group-hover:w-16 group-hover:bg-rose-500 transition-all duration-500"></div>

                    {/* Texto mais compacto e legível */}
                    <p className="text-sm leading-relaxed text-stone-400 font-sans font-normal border-l border-white/5 pl-4 group-hover:border-white/20 transition-colors">
                        {item.content}
                    </p>
                 </div>

               </div>
             </Reveal>
           ))}
        </div>

      </div>
    </section>
  );
};

export default PreCare;