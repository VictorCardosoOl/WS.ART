import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';
import { FAQ_ITEMS } from '../../data/faq';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 md:py-32 bg-white relative z-10">
            <div className="w-full max-w-[1920px] mx-auto px-5 md:px-10 2xl:px-20">
                <SectionTitle subtitle="Dúvidas" title="Perguntas Frequentes" />

                <div className="mt-16 flex flex-col border-t border-stone-200">
                    {FAQ_ITEMS.map((item, idx) => {
                        const isOpen = activeIndex === idx;

                        return (
                            <div key={idx} className="border-b border-stone-200">
                                <Reveal delay={idx * 50} width="100%">
                                    <button
                                        onClick={() => toggleAccordion(idx)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${idx}`}
                                        id={`faq-question-${idx}`}
                                        className="w-full py-5 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left group outline-none focus-visible:bg-stone-50 rounded-sm transition-colors"
                                    >
                                        {/* Coluna Esquerda: Número e Linha */}
                                        <div className="flex items-center gap-6 md:w-1/4">
                                            <span className={`text-xs font-bold font-sans tracking-widest transition-colors duration-300 ${isOpen ? 'text-[#754548]' : 'text-stone-300'}`}>
                                                0{idx + 1}
                                            </span>
                                            <div className={`h-[1px] transition-all duration-500 ease-out ${isOpen ? 'w-12 bg-[#754548]' : 'w-6 bg-stone-200 group-hover:w-10 group-hover:bg-[#754548]/50'}`}></div>
                                        </div>

                                        {/* Coluna Central: Pergunta */}
                                        <div className="md:w-2/3 pr-4">
                                            <h3 className={`text-lg md:text-2xl font-serif transition-colors duration-300 leading-tight ${isOpen ? 'text-stone-900 italic' : 'text-stone-600 group-hover:text-stone-900'}`}>
                                                {item.q}
                                            </h3>
                                        </div>

                                        {/* Coluna Direita: Ícone */}
                                        <div className="md:w-[10%] flex justify-end">
                                            <div className={`
                                    w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500
                                    ${isOpen
                                                    ? 'border-[#754548] bg-[#754548] text-white rotate-180'
                                                    : 'border-stone-200 text-stone-300 group-hover:border-[#754548] group-hover:text-[#754548]'
                                                }
                                `}>
                                                <ArrowDown size={16} strokeWidth={1} />
                                            </div>
                                        </div>
                                    </button>

                                    {/* Conteúdo Expansível */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                id={`faq-answer-${idx}`}
                                                role="region"
                                                aria-labelledby={`faq-question-${idx}`}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-6 pl-0 md:pl-[25%] pr-4 md:pr-24">
                                                    <p className="text-stone-500 text-sm md:text-base font-light leading-relaxed font-sans max-w-2xl">
                                                        {item.a}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Reveal>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;