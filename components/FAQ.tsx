import React from 'react';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';
import { FAQ_ITEMS } from '../data/faq';

const FAQ: React.FC = () => {
  return (
    // Slightly stronger pink background for harmony
    <section id="faq" className="py-16 md:py-24 bg-[#ffe4e9]/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle subtitle="Dúvidas" title="Perguntas Frequentes" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10">
            {FAQ_ITEMS.map((item, idx) => (
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