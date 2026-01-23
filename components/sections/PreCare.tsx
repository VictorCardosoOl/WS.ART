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
    <section className="py-20 md:py-28 bg-[#FDF7F8] text-stone-900 overflow-hidden relative" id="precare">
      
      {/* Background Texture/Grid (Darker for light bg) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Compacto */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 border-b border-[#754548]/10 pb-6">
            <Reveal>
                <div>
                    <span className="block font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#754548] mb-2">
                        Guia Essencial
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-stone-900 leading-none">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
           {careItems.map((item, index) => (
             <Reveal key={index} delay={index * 100} width="100%">
               <div className="
                 flex flex-col h-full relative group 
                 p-8 rounded-2xl overflow-hidden transition-all duration-700 ease-out
                 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white via-[#FAF7F7] to-[#F2E8E9]/50
                 border border-white hover:border-[#754548]/20 hover:shadow-2xl hover:-translate-y-2
               ">
                 
                 {/* Camada do Número Gigante (Background) */}
                 <span className="absolute -top-6 -right-4 text-[8rem] leading-none font-serif text-[#754548]/5 font-bold select-none z-0 transition-all duration-500 group-hover:text-[#754548]/10 group-hover:scale-110 pointer-events-none">
                    {item.id}
                 </span>
                 
                 {/* Conteúdo Foreground */}
                 <div className="relative z-10">
                    
                    {/* Título Proporcionalmente Maior e Bolder */}
                    <h3 className="font-serif text-4xl md:text-5xl lg:text-5xl text-stone-900 font-bold leading-[0.9] mb-3 group-hover:text-[#754548] transition-colors duration-300">
                        {item.title}
                    </h3>
                    
                    {/* Subtítulo com tracking sutil (wide) */}
                    <span className="block font-sans text-xs uppercase tracking-wide text-[#754548] font-bold mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                        {item.subtitle}
                    </span>

                    {/* Divisória Sutil */}
                    <div className="w-12 h-[1px] bg-[#754548]/20 mb-6 group-hover:w-full group-hover:bg-[#754548]/40 transition-all duration-700 ease-out-expo"></div>

                    {/* Texto */}
                    <p className="text-sm leading-relaxed text-stone-700 font-sans font-medium">
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