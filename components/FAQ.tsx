import React from 'react';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "Qual o valor mínimo?", a: "O valor mínimo de saída é R$ 100. O preço final depende da complexidade, tamanho e local do corpo." },
    { q: "Você faz Realismo ou Mandalas?", a: "Não. Meu foco é 100% no estilo Neotradicional e trabalhos autorais. Não realizo lettering ou realismo." },
    { q: "Como funciona o Sinal?", a: "Para garantir sua data na agenda, é necessário o pagamento antecipado de um valor (sinal). Esse valor é abatido do preço total da tatuagem." },
    { q: "Posso levar acompanhante?", a: "Prezo por um ambiente calmo e seguro. Consulte previamente sobre a possibilidade de acompanhantes." },
  ];

  return (
    // Slightly stronger pink background for harmony
    <section id="faq" className="py-16 md:py-24 bg-[#ffe4e9]/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle subtitle="Dúvidas" title="Perguntas Frequentes" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10">
            {faqs.map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white p-6 rounded-sm shadow-[0_2px_10px_rgba(251,113,154,0.05)] border border-rose-100 hover:border-rose-300 transition-colors">
                    <h4 className="font-serif text-lg md:text-xl text-stone-900 mb-2 md:mb-3">{item.q}</h4>
                    <p className="text-stone-600 text-sm md:text-base leading-relaxed">{item.a}</p>
                </div>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;