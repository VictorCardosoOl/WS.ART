import React from 'react';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';

const pillars = [
  {
    id: "01",
    title: "Sondagem",
    subtitle: "A Escuta Ativa",
    desc: "Tudo começa muito antes da agulha. Realizamos uma imersão na sua ideia, investigando referências, memórias e o simbolismo oculto. Não queremos apenas saber 'o que' você quer tatuar, mas 'por que'. Esta etapa define a alma do projeto."
  },
  {
    id: "02",
    title: "Estudo Anatômico",
    subtitle: "Engenharia Visual",
    desc: "Seu corpo não é uma tela plana. Projetamos a arte digitalmente sobre fotos da sua musculatura, respeitando curvas, dobras e movimentos naturais. O desenho é esculpido para fluir organicamente com você, criando harmonia visual."
  },
  {
    id: "03",
    title: "A Execução",
    subtitle: "O Ritual",
    desc: "O momento da materialização. Em um ambiente privado, estéril e controlado, transformamos o conceito em realidade perene. Utilizamos pigmentos premium e técnicas de trauma reduzido para garantir longevidade e uma cicatrização superior."
  }
];

const Process: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#F5E6E8]/20 overflow-hidden" id="process">
      
      {/* Hand Drawn Organic Line Decoration (Desktop) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-24 -translate-x-1/2 hidden md:block opacity-20 pointer-events-none h-full">
         <svg height="100%" width="100%" preserveAspectRatio="none">
             <path d="M50,0 Q60,200 40,400 T50,800 T60,1200" fill="none" stroke="#754548" strokeWidth="2" vectorEffect="non-scaling-stroke" />
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <SectionTitle 
            number="03"
            subtitle="Metodologia"
            title="O Processo"
            align="center"
        />

        <div className="space-y-24 md:space-y-0 mt-20">
            {pillars.map((pillar, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div key={pillar.id} className={`flex flex-col md:flex-row items-center justify-between md:gap-20 relative ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        
                        {/* Ink Blot / Organic Dot on Line */}
                        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                             <div className="w-4 h-4 bg-[#754548] rounded-full border-4 border-[#FAF7F7] shadow-sm transform scale-110"></div>
                        </div>

                        {/* Text Content */}
                        <div className={`w-full md:w-5/12 ${isEven ? 'text-left md:text-right' : 'text-left'}`}>
                            <Reveal width="100%" delay={index * 100}>
                                <div className={`flex flex-col gap-2 relative ${isEven ? 'items-end' : 'items-start'}`}>
                                    <span className={`text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548] mb-2 block font-hand text-xl transform -rotate-2 opacity-80`}>
                                        Etapa {pillar.id}
                                    </span>
                                    <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
                                        {pillar.title}
                                    </h3>
                                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 relative">
                                        {pillar.subtitle}
                                        {/* Underline Scribble */}
                                        <svg className="absolute top-full left-0 w-full h-2 text-[#754548]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </h4>
                                    <p className={`font-sans text-stone-600 font-light leading-relaxed text-sm md:text-base max-w-md ${isEven ? 'text-right' : 'text-left'}`}>
                                        {pillar.desc}
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Spacer for the other side (Desktop only) */}
                        <div className="w-full md:w-5/12 hidden md:block"></div>
                        
                    </div>
                );
            })}
        </div>

    </div>
    </section>
  );
};

export default Process;