import React from 'react';
import Reveal from '../ui/Reveal';

const careItems = [
  {
    id: "01",
    title: "Hidratação",
    content: "Comece a hidratar a região 7 dias antes. Uma pele hidratada recebe melhor a tinta e facilita a cicatrização."
  },
  {
    id: "02",
    title: "Descanso",
    content: "Durma bem (8h+). O corpo precisa de energia. Faça uma refeição reforçada antes de vir."
  },
  {
    id: "03",
    title: "Zero Álcool",
    content: "Não consuma álcool 24h antes. Ele afina o sangue, aumentando o sangramento e expulsando o pigmento."
  },
  {
    id: "04",
    title: "Vestimenta",
    content: "Use roupas confortáveis e escuras. Garanta fácil acesso à área sem comprimir o local."
  }
];

const PreCare: React.FC = () => {
  return (
    // Fundo com Gradiente Radial Suave: Rosa Escuro no Centro -> Rosa Claro/Branco nas bordas
    <section className="py-32 md:py-48 relative overflow-hidden" id="precare">
      
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E5D0D4] via-[#F2E8E9] to-[#FAF7F7] opacity-80 z-0"></div>
      
      {/* Noise Texture para textura de pele/papel */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] z-0 pointer-events-none"></div>

      {/* Decorative Organic Line at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 opacity-20">
         <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-[30px] fill-none stroke-[#754548] stroke-1">
             <path d="M0,20 Q300,35 600,20 T1200,20" vectorEffect="non-scaling-stroke" style={{ filter: 'url(#pencil-care)' }} />
         </svg>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header Gigante Editorial */}
        <div className="mb-32 md:mb-40 relative text-center md:text-left">
            <Reveal>
                <div className="inline-block relative">
                    <h2 className="font-sans font-medium text-7xl md:text-9xl tracking-tighter text-[#4A3B3B] leading-[0.8] mix-blend-darken">
                        O Preparo
                    </h2>
                    <span className="block font-serif text-3xl md:text-5xl italic font-normal text-[#754548] mt-2 tracking-normal opacity-90 md:absolute md:top-2 md:-right-32 rotate-[-5deg]">
                        (guia essencial)
                    </span>
                </div>
            </Reveal>
        </div>

        {/* Grid Clean - Sem cards brancos pesados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
           {careItems.map((item, index) => (
             <Reveal key={index} delay={index * 100} width="100%">
               <div className="flex flex-col h-full group relative">
                 
                 {/* Divisória Superior */}
                 <div className="w-12 h-[2px] bg-[#754548] mb-6 opacity-30 group-hover:w-full transition-all duration-700 ease-cinema"></div>

                 {/* Número */}
                 <span className="text-sm font-bold font-sans tracking-widest text-[#754548] mb-4 block">
                    {item.id}
                 </span>

                 <h3 className="font-serif text-3xl md:text-4xl text-[#1c1917] mb-4 italic group-hover:text-[#754548] transition-colors duration-300">
                    {item.title}
                 </h3>

                 <p className="text-lg leading-relaxed text-stone-600 font-light font-sans group-hover:text-stone-900 transition-colors duration-300">
                    {item.content}
                 </p>

               </div>
             </Reveal>
           ))}
        </div>

      </div>

      <svg className="absolute w-0 h-0">
        <defs>
            <filter id="pencil-care">
                <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
            </filter>
        </defs>
      </svg>
    </section>
  );
};

export default PreCare;