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
    title: "A Sessão",
    subtitle: "O Ritual",
    desc: "O momento da materialização. Em um ambiente privado, estéril e controlado, transformamos o conceito em realidade perene. Utilizamos pigmentos premium e técnicas de trauma reduzido para garantir longevidade e uma cicatrização superior."
  }
];

const Process: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#F5E6E8]/20 overflow-hidden" id="process">
      
      {/* Background Line Decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#754548]/10 hidden md:block"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <SectionTitle 
            number="03"
            subtitle="Metodologia"
            title="O Ritual"
            align="center"
        />

        <div className="space-y-24 md:space-y-0 mt-20">
            {pillars.map((pillar, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div key={pillar.id} className={`flex flex-col md:flex-row items-center justify-between md:gap-20 relative ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        
                        {/* Dot on Line */}
                        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#754548] rounded-full z-10 border-4 border-[#FAF7F7]"></div>

                        {/* Text Content */}
                        <div className={`w-full md:w-5/12 ${isEven ? 'text-left md:text-right' : 'text-left'}`}>
                            <Reveal width="100%" delay={index * 100}>
                                <div className={`flex flex-col gap-2 relative ${isEven ? 'items-end' : 'items-start'}`}>
                                    <span className={`text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548] mb-2 block`}>
                                        Etapa {pillar.id}
                                    </span>
                                    <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
                                        {pillar.title}
                                    </h3>
                                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">
                                        {pillar.subtitle}
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