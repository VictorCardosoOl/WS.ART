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
      
      {/* --- BACKGROUND ARTISTRY (Clean with graphite smudges) --- */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(28,25,23,0.05)_0%,_transparent_70%)] blur-[50px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(117,69,72,0.04)_0%,_transparent_70%)] blur-[60px] pointer-events-none z-0"></div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header Gigante Editorial */}
        <div className="mb-32 md:mb-40 mt-12 relative">
            <Reveal>
                <h2 className="font-sans font-medium text-7xl md:text-9xl tracking-tighter text-stone-900 leading-[0.8]">
                    O Preparo
                    <span className="block font-serif text-3xl md:text-5xl italic font-normal text-[#754548] mt-4 tracking-normal opacity-80">
                        (guia essencial)
                    </span>
                </h2>
            </Reveal>
            
            {/* Sketch Underline */}
            <div className="absolute bottom-[-20px] left-0 w-32 h-[2px] bg-stone-300 opacity-50 overflow-visible">
                <svg width="100%" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,0" stroke="#754548" strokeWidth="1" fill="none" />
                </svg>
            </div>
        </div>

        {/* Grid de Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
           {careItems.map((item, index) => (
             <Reveal key={index} delay={index * 100} width="100%">
               <div className="flex flex-col h-full group relative p-6 -ml-6 rounded-lg hover:bg-[#FAF7F7] transition-colors duration-500">
                 
                 {/* Número Grande no Topo com sombra de texto */}
                 <span className="text-6xl md:text-8xl font-serif font-light text-[#E5D0D4] mb-6 block leading-none select-none group-hover:text-[#754548] transition-colors duration-500 relative">
                    {item.id}
                    <span className="absolute top-[2px] left-[2px] text-[#FAF7F7] mix-blend-overlay opacity-50 z-[-1] blur-[1px]">{item.id}</span>
                 </span>

                 <h3 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-6 leading-none group-hover:translate-x-1 transition-transform duration-300">
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