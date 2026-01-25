import React from 'react';
import Reveal from '../ui/Reveal';

const careItems = [
  {
    id: "1",
    title: "Hidratação",
    subtitle: "Preparação da tela",
    content: "Comece a hidratar a região da tatuagem 7 dias antes. Uma pele hidratada recebe melhor a tinta, reduz o trauma da agulha e facilita drasticamente a cicatrização posterior."
  },
  {
    id: "2",
    title: "Descanso",
    subtitle: "Energia vital",
    content: "Durma bem na noite anterior (8h+). O corpo precisa de energia para lidar com a sessão. Faça uma refeição reforçada antes de vir ao estúdio para evitar quedas de pressão."
  },
  {
    id: "3",
    title: "Zero Álcool",
    subtitle: "Coagulação sanguínea",
    content: "Não consuma bebidas alcoólicas 24h antes. O álcool afina o sangue, aumentando o sangramento durante o processo, o que expulsa o pigmento e dificulta o trabalho."
  },
  {
    id: "4",
    title: "Vestimenta",
    subtitle: "Conforto e acesso",
    content: "Venha com roupas confortáveis, pretas ou escuras (tinta pode respingar). Garanta fácil acesso à área a ser tatuada sem comprimir o local e permitindo a circulação."
  }
];

const PreCare: React.FC = () => {
  return (
    <section className="py-32 md:py-40 bg-[#F5F5F5] text-stone-900 relative overflow-hidden" id="precare">
      
      {/* GRADIENTE RADIAL */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E5D0D4]/40 via-[#F5F5F5] to-[#F5F5F5] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Gigante Editorial */}
        <div className="mb-32 md:mb-48 mt-12">
            <Reveal>
                <h2 className="font-sans font-medium text-7xl md:text-9xl tracking-tighter text-stone-900 leading-[0.8]">
                    O Preparo
                    <span className="block font-serif text-2xl md:text-4xl italic font-normal text-stone-500 mt-2 tracking-normal">
                        (guia essencial)
                    </span>
                </h2>
            </Reveal>
        </div>

        {/* Grid de Colunas com Linhas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
           {careItems.map((item, index) => (
             <Reveal key={index} delay={index * 100} width="100%">
               <div className="flex flex-col h-full group">
                 
                 <span className="text-xs font-bold font-sans mb-4 block">{item.id}</span>

                 <h3 className="font-sans text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-1 leading-none">
                    {item.title}
                 </h3>
                 <span className="text-sm text-stone-500 font-light mb-6 block">
                    {item.subtitle}
                 </span>

                 <div className="w-full h-[1px] bg-stone-300 mb-6 group-hover:bg-[#754548] transition-colors duration-500"></div>

                 <p className="text-sm leading-relaxed text-stone-600 font-sans max-w-xs">
                    {item.content}
                 </p>

               </div>
             </Reveal>
           ))}
        </div>

      </div>

      {/* SEPARATOR: SOFT WASH TO TESTIMONIALS (Rose-50) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#FAF7F7] pointer-events-none z-10"></div>
    </section>
  );
};

export default PreCare;