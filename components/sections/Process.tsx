import React from 'react';
import Reveal from '../ui/Reveal';

const pillars = [
  {
    id: "01",
    title: "Sondagem",
    subtitle: "A Conexão Inicial",
    desc: "Antes de qualquer traço, existe a escuta. Dedicamos tempo para entender não apenas o que você quer tatuar, mas porquê. Investigamos referências, memórias e o simbolismo oculto para criar uma narrativa visual que seja verdadeiramente sua."
  },
  {
    id: "02",
    title: "Anatomia",
    subtitle: "O Corpo como Mapa",
    desc: "A pele não é um papel plano. Projetamos a arte digitalmente sobre fotos da sua musculatura, estudando curvas, torções e movimento. O desenho deve fluir organicamente com o corpo, não apenas residir sobre ele."
  },
  {
    id: "03",
    title: "A Sessão",
    subtitle: "O Ritual",
    desc: "O momento da materialização. Em um ambiente privado e acusticamente controlado, transformamos o projeto em realidade. Utilizamos equipamentos de ponta e técnicas de trauma reduzido para garantir que a experiência seja tão memorável quanto o resultado."
  }
];

const Process: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#F5E6E8]/30" id="process">
      <div className="container mx-auto px-6">
        
        {/* Header Style 'As regras' */}
        <div className="mb-20 md:mb-32">
            <Reveal>
                <h2 className="font-serif text-6xl md:text-8xl text-stone-900 leading-[0.9] tracking-tighter">
                    Nossos<br/>
                    <span className="italic font-light opacity-60 text-[#754548]">(pilares)</span>
                </h2>
            </Reveal>
        </div>

        {/* Grid de 3 Colunas Refinado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 border-t border-[#754548]/20 pt-16">
            {pillars.map((pillar, index) => (
                <div key={index} className="flex flex-col relative group">
                    <Reveal delay={index * 150}>
                        {/* Número */}
                        <div className="flex items-center gap-3 mb-6">
                             <span className="font-sans text-xs font-bold text-[#754548]">
                                {pillar.id}
                            </span>
                            <div className="h-[1px] w-8 bg-[#754548]/30"></div>
                        </div>

                        {/* Título */}
                        <h3 className="font-serif text-4xl text-stone-900 mb-2 group-hover:text-[#754548] transition-colors duration-500">
                            {pillar.title}
                        </h3>
                        
                        {/* Subtítulo */}
                        <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-6 block">
                            {pillar.subtitle}
                        </span>

                        {/* Descrição */}
                        <p className="font-sans text-stone-600 font-light leading-relaxed text-sm md:text-base pl-4 border-l border-stone-200 group-hover:border-[#754548]/40 transition-colors duration-500">
                            {pillar.desc}
                        </p>
                    </Reveal>
                </div>
            ))}
        </div>

    </div>
    </section>
  );
};

export default Process;