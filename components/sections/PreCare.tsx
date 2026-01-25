import React from 'react';
import Reveal from '../ui/Reveal';

const careItems = [
  {
    id: "01",
    title: "Hidratação",
    content: "Comece a hidratar a região da tatuagem 7 dias antes. Uma pele hidratada recebe melhor a tinta, reduz o trauma da agulha e facilita drasticamente a cicatrização posterior."
  },
  {
    id: "02",
    title: "Descanso",
    content: "Durma bem na noite anterior (8h+). O corpo precisa de energia para lidar com a sessão. Faça uma refeição reforçada antes de vir ao estúdio para evitar quedas de pressão."
  },
  {
    id: "03",
    title: "Zero Álcool",
    content: "Não consuma bebidas alcoólicas 24h antes. O álcool afina o sangue, aumentando o sangramento durante o processo, o que expulsa o pigmento e dificulta o trabalho."
  },
  {
    id: "04",
    title: "Vestimenta",
    content: "Venha com roupas confortáveis, pretas ou escuras (tinta pode respingar). Garanta fácil acesso à área a ser tatuada sem comprimir o local e permitindo a circulação."
  }
];

const PreCare: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-white text-stone-900 relative overflow-hidden" id="precare">
      
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header Gigante Editorial - Sem traço decorativo */}
        <div className="mb-32 md:mb-40 mt-12 relative">
            <Reveal>
                <h2 className="font-sans font-medium text-7xl md:text-9xl tracking-tighter text-stone-900 leading-[0.8]">
                    O Preparo
                    <span className="block font-serif text-3xl md:text-5xl italic font-normal text-[#754548] mt-4 tracking-normal opacity-80">
                        (guia essencial)
                    </span>
                </h2>
            </Reveal>
        </div>

        {/* Grid de Colunas com Números Grandes no Topo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
           {careItems.map((item, index) => (
             <Reveal key={index} delay={index * 100} width="100%">
               <div className="flex flex-col h-full group relative">
                 
                 {/* Número Grande no Topo */}
                 <span className="text-6xl md:text-8xl font-serif font-light text-[#E5D0D4] mb-6 block leading-none select-none group-hover:text-[#754548] transition-colors duration-500">
                    {item.id}
                 </span>

                 <h3 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-6 leading-none">
                    {item.title}
                 </h3>

                 <p className="text-lg md:text-xl leading-relaxed text-stone-600 font-light font-serif">
                    {item.content}
                 </p>

               </div>
             </Reveal>
           ))}
        </div>

      </div>
    </section>
  );
};

export default PreCare;