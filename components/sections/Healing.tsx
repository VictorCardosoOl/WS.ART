import React, { useState } from 'react';
import Reveal from '../ui/Reveal';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const phases = [
  {
    id: 1,
    days: "Dias 1 — 3",
    title: "Inflamação & Proteção",
    description: "O corpo reage ao trauma. A área ficará sensível, avermelhada e pode expelir plasma/tinta.",
    guide: [
        "Mantenha o curativo (tropical) pelo tempo indicado (3-4 horas ou overnight).",
        "Lave apenas com sabonete neutro e água fria.",
        "Não use pomadas em excesso; deixe a pele respirar.",
        "Zero atrito com roupas apertadas."
    ]
  },
  {
    id: 2,
    days: "Dias 4 — 10",
    title: "Regeneração (Descamação)",
    description: "A camada superficial começa a secar e descamar. É a fase de renovação da epiderme.",
    guide: [
        "NUNCA arranque as cascas. Deixe-as cair naturalmente.",
        "Inicie a hidratação leve (fina camada) 2x ao dia.",
        "Alivie a coceira com leves tapinhas, nunca com as unhas.",
        "Evite banhos muito quentes e demorados."
    ]
  },
  {
    id: 3,
    days: "Dias 15+",
    title: "Maturação & Assentamento",
    description: "A pele parece curada, mas o pigmento ainda está se acomodando na derme. O brilho prateado ('onion skin') é normal.",
    guide: [
        "Use protetor solar (FPS 50+) sempre que exposto ao sol.",
        "Mantenha a hidratação diária para realçar as cores.",
        "Vida normal: academia e mar liberados (após avaliação).",
        "Retoque (se necessário) agendado após 45 dias."
    ]
  }
];

const Healing: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(1);

  // Safe access to current phase data
  const currentPhaseIndex = Math.max(0, Math.min(activePhase - 1, phases.length - 1));
  const currentPhase = phases[currentPhaseIndex];

  return (
    <section className="py-24 md:py-32 bg-[#FAF7F7] relative overflow-hidden" id="healing">
      
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header */}
        <div className="mb-20 md:mb-24 text-center max-w-3xl mx-auto">
            <Reveal>
                <h2 className="font-serif text-5xl md:text-7xl text-stone-900 leading-[0.9] mb-6">
                    Protocolo <br/>
                    <span className="italic text-[#754548]">Pós-Sessão.</span>
                </h2>
            </Reveal>
            <Reveal delay={200}>
                <p className="text-stone-500 text-sm leading-luxury md:text-base">
                    50% do resultado é a aplicação técnica. Os outros 50% são os cuidados nas semanas seguintes.
                    Siga estritamente as orientações.
                </p>
            </Reveal>
        </div>

        {/* Timeline Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
            
            {/* Left: Phase Selector (Sticky) */}
            <div className="lg:col-span-5 relative">
                <div className="sticky top-32 flex flex-col gap-4">
                    {phases.map((phase) => (
                        <button
                            key={phase.id}
                            onClick={() => setActivePhase(phase.id)}
                            className={`group relative text-left p-6 transition-all duration-500 border-l-2 ${
                                activePhase === phase.id 
                                ? 'border-[#754548] bg-white shadow-lg shadow-stone-200/50 pl-8' 
                                : 'border-stone-200 hover:border-stone-300 hover:bg-white/50 hover:pl-7'
                            }`}
                        >
                            <span className={`block text-[10px] font-bold uppercase tracking-widest mb-1 transition-colors ${
                                activePhase === phase.id ? 'text-[#754548]' : 'text-stone-400'
                            }`}>
                                Fase {String(phase.id).padStart(2, '0')}
                            </span>
                            <span className={`block font-serif text-2xl md:text-3xl transition-colors ${
                                activePhase === phase.id ? 'text-stone-900' : 'text-stone-400 group-hover:text-stone-600'
                            }`}>
                                {phase.days}
                            </span>
                            
                            {/* Active Indicator Icon */}
                            <div className={`absolute right-6 top-1/2 -translate-y-1/2 transition-all duration-500 ${
                                activePhase === phase.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                            }`}>
                                <Plus className="text-[#754548]" size={20} />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Right: Content Display (AnimatePresence) */}
            <div className="lg:col-span-7 bg-white rounded-sm p-8 md:p-12 border border-stone-100 min-h-[500px] flex flex-col justify-center relative shadow-xl shadow-stone-200/20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePhase}
                        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <div className="flex items-baseline gap-4 mb-8">
                             <span className="text-8xl font-serif text-stone-100 absolute -top-10 -left-6 select-none pointer-events-none z-[-1]">
                                {String(activePhase).padStart(2, '0')}
                             </span>
                             <h3 className="text-3xl md:text-5xl font-serif text-stone-900 leading-none">
                                {currentPhase.title}
                             </h3>
                        </div>

                        <p className="text-lg text-stone-600 leading-relaxed font-light mb-10 border-l border-[#754548] pl-6 py-1">
                            {currentPhase.description}
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#754548] mb-6">Diretrizes da Fase</h4>
                            <ul className="space-y-4">
                                {currentPhase.guide.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-stone-600 text-sm md:text-base font-light">
                                        <div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2 flex-shrink-0"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </AnimatePresence>
                
                {/* Decorative Abstract Blobs */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-30 transition-colors duration-1000 pointer-events-none
                    ${activePhase === 1 ? 'bg-rose-300' : activePhase === 2 ? 'bg-amber-100' : 'bg-blue-50'}
                `}></div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Healing;