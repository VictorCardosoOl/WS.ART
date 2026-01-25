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
    <section className="py-32 md:py-40 bg-[#F5F5F5] text-[#4A3B3B] relative overflow-hidden" id="precare">

      {/* SEPARATOR: TOP CURVE FROM WHITE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"></path>
        </svg>
      </div>

      {/* GRADIENTE RADIAL */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E5D0D4]/40 via-[#F5F5F5] to-[#F5F5F5] pointer-events-none z-0"></div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-10 2xl:px-20 relative z-10">

        {/* Header Gigante Editorial */}
        <div className="mb-32 md:mb-48 mt-12">
          <Reveal>
            <h2 className="font-sans font-medium text-7xl md:text-9xl tracking-tighter text-[#4A3B3B] leading-[0.8]">
              O Preparo
              <span className="block font-serif text-2xl md:text-4xl italic font-normal text-[#8F5E62] mt-2 tracking-normal">
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

                <h3 className="font-sans text-3xl md:text-4xl font-medium tracking-tight text-[#4A3B3B] mb-1 leading-none">
                  {item.title}
                </h3>
                <span className="text-sm text-[#8F5E62] font-light mb-6 block">
                  {item.subtitle}
                </span>

                <div className="w-full h-[1px] bg-[#D9A9B0] mb-6 group-hover:bg-[#8F5E62] transition-colors duration-500"></div>

                <p className="text-sm leading-relaxed text-[#2A2425] font-sans max-w-xs">
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