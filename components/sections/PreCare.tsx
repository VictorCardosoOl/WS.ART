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
    <section className="py-32 md:py-40 bg-[#FAF7F7] text-stone-900 relative overflow-hidden" id="precare">
      
      {/* --- BACKGROUND ARTISTRY --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[radial-gradient(circle,_#ffffff_0%,_#FAF7F7_60%)] z-0 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_#754548_0%,_transparent_70%)] opacity-[0.03] blur-[80px] pointer-events-none z-0"></div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Gigante Editorial */}
        <div className="mb-32 md:mb-48 mt-12 relative">
            <Reveal>
                <h2 className="font-sans font-medium text-7xl md:text-9xl tracking-tighter text-stone-900 leading-[0.8]">
                    O Preparo
                    <span className="block font-serif text-2xl md:text-4xl italic font-normal text-[#754548] mt-2 tracking-normal opacity-80">
                        (guia essencial)
                    </span>
                </h2>
            </Reveal>
            
            {/* Linha decorativa desenhada à mão abaixo do título */}
            <div className="absolute -bottom-10 left-0 w-64 opacity-20">
                <svg viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10 Q 150 20 295 5" fill="none" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
        </div>

        {/* Grid de Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
           {careItems.map((item, index) => (
             <Reveal key={index} delay={index * 100} width="100%">
               <div className="flex flex-col h-full group relative p-4 hover:bg-white hover:shadow-sm hover:rounded-sm transition-all duration-500">
                 
                 <span className="text-xs font-bold font-sans mb-4 block text-[#754548]/60">{item.id}.</span>

                 <h3 className="font-sans text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-1 leading-none">
                    {item.title}
                 </h3>
                 <span className="text-sm text-stone-500 font-light mb-6 block">
                    {item.subtitle}
                 </span>

                 <div className="w-full h-2 mb-6 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                    <svg width="100%" height="100%" preserveAspectRatio="none">
                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="1, 4" className="text-[#754548]" />
                    </svg>
                 </div>

                 <p className="text-sm leading-relaxed text-stone-600 font-sans max-w-xs">
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