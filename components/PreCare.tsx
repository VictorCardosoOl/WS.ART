import React, { useState } from 'react';
import Reveal from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const careItems = [
  {
    title: "Hidratação da Pele",
    content: "Comece a hidratar a região da tatuagem 7 dias antes. Uma pele hidratada recebe melhor a tinta e facilita a cicatrização."
  },
  {
    title: "Descanso & Alimentação",
    content: "Durma bem na noite anterior (8h+) e faça uma refeição reforçada antes de vir. O corpo precisa de energia para lidar com a sessão."
  },
  {
    title: "Evite Álcool",
    content: "Não consuma bebidas alcoólicas 24h antes da sessão. O álcool afina o sangue, o que pode aumentar o sangramento e prejudicar a pigmentação."
  },
  {
    title: "Vestimenta",
    content: "Venha com roupas confortáveis e, de preferência, escuras. Tinta pode respingar. Garanta fácil acesso à área a ser tatuada."
  }
];

const PreCare: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal>
          <div className="mb-16 text-center">
             <h2 className="text-4xl md:text-5xl font-serif text-pantone-ink mb-4">Preparação</h2>
             <p className="text-stone-500 uppercase tracking-widest text-xs">Cuidados Pré-Sessão</p>
          </div>
        </Reveal>

        <div className="space-y-4">
           {careItems.map((item, index) => (
             <Reveal key={index} delay={index * 100} width="100%">
               <div 
                 className="border border-stone-200 p-6 md:p-8 cursor-pointer hover:border-pantone-accent transition-colors duration-500 bg-stone-50/50"
                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
               >
                 <div className="flex justify-between items-center">
                    <h3 className={`font-serif text-xl md:text-2xl transition-colors ${openIndex === index ? 'text-pantone-accent' : 'text-pantone-ink'}`}>
                        {item.title}
                    </h3>
                    {openIndex === index ? <Minus className="text-pantone-accent font-light" /> : <Plus className="text-stone-400 font-light" />}
                 </div>
                 
                 <AnimatePresence>
                   {openIndex === index && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                       className="overflow-hidden"
                     >
                       <p className="pt-6 text-stone-600 font-sans leading-relaxed text-sm md:text-base max-w-2xl">
                         {item.content}
                       </p>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             </Reveal>
           ))}
        </div>
      </div>
    </section>
  );
};

export default PreCare;