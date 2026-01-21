import React from 'react';
import Reveal from '../ui/Reveal';

const steps = [
  {
    id: "01",
    title: "VOCÊ ESTENDE A MÃO",
    desc: "Envie uma mensagem manifestando seu interesse. Eu respondo pessoalmente (geralmente no mesmo dia) com os horários disponíveis para consulta e uma breve análise da sua ideia inicial."
  },
  {
    id: "02",
    title: "PREPARAÇÃO PRÉ-CONSULTA",
    desc: "Após o agendamento, enviarei algumas perguntas breves para reflexão — nada administrativo, mas questões importantes para esclarecer o que é mais relevante para nós. Suas ideias nos ajudarão a aproveitar ao máximo nosso tempo juntos."
  },
  {
    id: "03",
    title: "A CONSULTA",
    desc: "Conversa estratégica de duas horas no estúdio ou via Zoom. Sem pressão de vendas. Visão real. Avaliação honesta da adequação ao perfil desejado e estudo anatômico digital preliminar."
  },
  {
    id: "04",
    title: "VOCÊ DECIDE",
    desc: "Se estivermos alinhados, enviarei uma proposta personalizada em até 24 horas. Você terá tempo para analisar o orçamento e o conceito antes de oficializarmos a reserva da sessão."
  }
];

const Process: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#F5F5F5]" id="process">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* COLUNA ESQUERDA: Label Fixo (Estilo do print '• O Processo') */}
            <div className="lg:col-span-3 relative">
                <div className="lg:sticky lg:top-32">
                    <Reveal>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-black"></div>
                            <span className="font-sans text-sm font-medium uppercase tracking-widest text-stone-900">
                                O Processo
                            </span>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* COLUNA DIREITA: Lista Editorial */}
            <div className="lg:col-span-9">
                <div className="flex flex-col">
                    {/* Linha inicial superior */}
                    <div className="w-full h-[1px] bg-stone-300 mb-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="group relative border-b border-stone-300 py-16 md:py-24 overflow-hidden">
                            <Reveal width="100%">
                                <div className="flex flex-col md:flex-row md:items-start justify-between relative z-10">
                                    
                                    {/* Número Gigante (Watermark Style) */}
                                    <div className="absolute -top-6 -left-4 md:-left-8 z-0 pointer-events-none select-none mix-blend-multiply opacity-30">
                                        <span className="font-serif text-[8rem] md:text-[10rem] leading-none text-[#CFCFCF]">
                                            {step.id}
                                        </span>
                                    </div>

                                    {/* Espaçamento para o conteúdo não sobrepor totalmente o número */}
                                    <div className="md:ml-32 lg:ml-40 relative z-10 w-full">
                                        <h3 className="font-sans font-bold text-3xl md:text-4xl text-black uppercase mb-6 tracking-tight group-hover:text-[#754548] transition-colors duration-500">
                                            {step.title}
                                        </h3>
                                        <p className="font-sans text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default Process;