import React from 'react';
import Reveal from '../ui/Reveal';

const pillars = [
  {
    id: "1",
    title: "Conexão",
    subtitle: "Antes da Agulha",
    desc: "Não tatuamos estranhos. Dedicamos tempo para entender sua história, suas motivações e o simbolismo por trás da ideia. Cada projeto começa com uma conversa, garantindo que a arte final seja uma extensão autêntica da sua personalidade."
  },
  {
    id: "2",
    title: "Anatomia",
    subtitle: "Fluxo & Movimento",
    desc: "O corpo não é uma tela plana. Nossos desenhos são projetados digitalmente sobre fotos da sua musculatura, respeitando curvas e movimentos naturais. A arte deve fluir com você, não contra você, criando uma harmonia visual perfeita."
  },
  {
    id: "3",
    title: "Verdade",
    subtitle: "Execução Técnica",
    desc: "Transparência total no processo. Utilizamos pigmentos de alta qualidade e equipamentos de ponta em um ambiente estéril e privado. Nosso compromisso é com a longevidade da obra: uma tatuagem que envelheça tão bem quanto a memória que ela carrega."
  }
];

const Process: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#F5F5F5]" id="process">
      <div className="container mx-auto px-6">
        
        {/* Header - Layout similar à referência 'As regras' */}
        <div className="mb-20 md:mb-32">
            <Reveal>
                <h2 className="font-serif text-6xl md:text-8xl text-stone-900 leading-[0.9] tracking-tighter">
                    Nossos<br/>
                    <span className="italic font-light opacity-60">(pilares)</span>
                </h2>
            </Reveal>
        </div>

        {/* Grid de 3 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 border-t border-stone-300 pt-16">
            {pillars.map((pillar, index) => (
                <div key={index} className="flex flex-col relative group">
                    <Reveal delay={index * 150}>
                        {/* Número */}
                        <span className="font-sans text-xs font-bold text-stone-400 mb-6 block">
                            {pillar.id}
                        </span>

                        {/* Título */}
                        <h3 className="font-serif text-4xl text-stone-900 mb-2 group-hover:text-[#754548] transition-colors duration-300">
                            {pillar.title}
                        </h3>
                        
                        {/* Subtítulo */}
                        <span className="font-sans text-[10px] uppercase tracking-widest text-[#754548] mb-6 block opacity-80">
                            {pillar.subtitle}
                        </span>

                        {/* Descrição */}
                        <p className="font-sans text-stone-600 font-light leading-relaxed text-sm md:text-base border-l border-stone-200 pl-4 group-hover:border-[#754548]/30 transition-colors duration-500">
                            {pillar.desc}
                        </p>
                    </Reveal>
                </div>
            ))}
        </div>

        {/* Footer Decorativo */}
        <Reveal delay={600}>
            <div className="flex justify-end mt-24">
                <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-stone-400 group cursor-pointer hover:border-[#754548] hover:text-[#754548] transition-all">
                    <span className="text-xl">↓</span>
                </div>
            </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Process;