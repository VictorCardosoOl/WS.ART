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
    <section className="py-32 md:py-40 bg-[#F5F5F5] text-[#1a1a1a]" id="precare">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header no estilo "As regras (nós tocamos)" */}
        <div className="mb-24 md:mb-32 relative">
            <Reveal>
                <h2 className="text-7xl md:text-9xl font-serif font-medium tracking-tighter text-[#1a1a1a] leading-none">
                    Os Cuidados
                </h2>
                <span className="block md:absolute md:top-[80%] md:left-[35rem] font-serif italic text-3xl md:text-4xl text-[#1a1a1a] mt-2 md:mt-0 opacity-80">
                    (pré-sessão)
                </span>
            </Reveal>
        </div>

        {/* Grid inspirado na referência: Número -> Título -> Subtítulo -> Linha -> Texto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
           {careItems.map((item, index) => (
             <Reveal key={index} delay={index * 100} width="100%">
               <div className="flex flex-col h-full">
                 
                 {/* Top Block */}
                 <div className="mb-6">
                     <span className="block text-sm font-bold font-sans mb-1 text-[#1a1a1a]">
                        {item.id}
                     </span>
                     <h3 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] font-medium leading-tight mb-1">
                        {item.title}
                     </h3>
                     <span className="block font-sans text-xs uppercase tracking-wide text-stone-500">
                        {item.subtitle}
                     </span>
                 </div>

                 {/* Divider Line exata da referência */}
                 <div className="w-full h-[1px] bg-[#1a1a1a]/20 mb-6"></div>

                 {/* Body Text */}
                 <p className="text-sm md:text-base leading-relaxed text-[#1a1a1a] font-light max-w-xs">
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