import React, { useState } from 'react';
import Reveal from '../ui/Reveal';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Briefing & Conexão",
    shortDesc: "Entendemos sua história.",
    fullDesc: "A sondagem da tatuagem. Nesta etapa inicial, realizamos uma conversa profunda para entender as motivações, símbolos e memórias que devem compor a obra. Não é apenas sobre o desenho, é sobre o significado.",
  },
  {
    id: "02",
    title: "Estudo Anatômico",
    shortDesc: "Projeção digital no corpo.",
    fullDesc: "Utilizamos fotografia e edição digital (Photoshop) para projetar o desenho diretamente sobre a foto do seu corpo. Isso garante que a arte respeite sua musculatura, curvaturas e fluxo natural, criando uma peça orgânica e fluida.",
  },
  {
    id: "03",
    title: "Sketching",
    shortDesc: "O desenho ganha vida.",
    fullDesc: "Desenvolvimento dos rascunhos e arte final antes da tatuagem acontecer. Aqui definimos contraste, pesos de linha e paleta de cores. O desenho é refinado até atingir a excelência estética e técnica necessária.",
  },
  {
    id: "04",
    title: "A Sessão",
    shortDesc: "Execução técnica.",
    fullDesc: "O momento da materialização. Em um ambiente privado e estéril, a arte é transferida para a pele. Utilizamos técnicas modernas para garantir a durabilidade do pigmento e o conforto durante o procedimento.",
  }
];

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative py-32 md:py-48 bg-pantone-skin overflow-hidden" id="process">
      <div className="container mx-auto px-6 relative z-10 pb-24">
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* List Content */}
          <div className="w-full lg:w-1/2">
             <Reveal>
               <span className="text-xs font-bold uppercase tracking-ultra text-pantone-accent mb-12 block">O Processo Criativo</span>
             </Reveal>

             <div className="flex flex-col" role="tablist" aria-orientation="vertical">
               {steps.map((step, index) => (
                 <div 
                    key={index}
                    role="tab"
                    id={`process-tab-${index}`}
                    aria-selected={activeStep === index}
                    aria-controls="process-panel"
                    tabIndex={0}
                    className={`group border-b border-pantone-ink/10 py-10 cursor-pointer relative transition-all duration-500 focus-visible:outline-none focus-visible:bg-white/50 rounded-sm ${activeStep === index ? 'pl-8 border-pantone-accent' : 'hover:pl-4'}`}
                    onMouseEnter={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveStep(index);
                      }
                    }}
                 >
                    {/* Active Indicator Line */}
                    {activeStep === index && (
                        <motion.div 
                            layoutId="activeIndicator"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-pantone-accent rounded-full"
                        />
                    )}

                    <div className="flex items-baseline justify-between mb-2">
                        <h3 className={`text-3xl md:text-5xl font-serif transition-colors duration-500 tracking-tight ${activeStep === index ? 'text-pantone-accent italic' : 'text-pantone-ink'}`}>
                            {step.title}
                        </h3>
                        <span className={`text-xs font-bold transition-colors ${activeStep === index ? 'text-pantone-accent' : 'text-stone-400'}`}>
                            {step.id}
                        </span>
                    </div>
                    <p className={`text-stone-500 font-sans text-sm tracking-wide transition-opacity duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-60'}`}>
                        {step.shortDesc}
                    </p>
                 </div>
               ))}
             </div>
          </div>

          {/* Text Description Reveal (Desktop & Mobile) */}
          <div className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center">
            <div className="w-full lg:sticky lg:top-32 lg:pl-12 border-l border-pantone-accent/20">
               <AnimatePresence mode='wait'>
                   <motion.div 
                     key={activeStep}
                     id="process-panel"
                     role="tabpanel"
                     aria-labelledby={`process-tab-${activeStep}`}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="relative"
                   >
                     <h4 className="font-serif text-4xl md:text-6xl text-pantone-ink mb-6 leading-none opacity-10" aria-hidden="true">
                        {steps[activeStep].id}
                     </h4>
                     <h3 className="text-2xl font-serif text-pantone-ink mb-6">
                        Detalhes da Etapa
                     </h3>
                     <p className="text-lg md:text-xl font-light text-stone-700 leading-relaxed font-serif">
                       {steps[activeStep].fullDesc}
                     </p>
                   </motion.div>
               </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* SEPARATOR: JAGGED EDGE TO WHITE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
         <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-[30px] md:h-[40px] fill-white">
            <path d="M0,40 L0,0 L20,8 L40,0 L60,6 L80,0 L100,5 L120,0 L140,8 L160,0 L180,6 L200,0 L220,5 L240,0 L260,8 L280,0 L300,6 L320,0 L340,5 L360,0 L380,8 L400,0 L420,6 L440,0 L460,5 L480,0 L500,8 L520,0 L540,6 L560,0 L580,5 L600,0 L620,8 L640,0 L660,6 L680,0 L700,5 L720,0 L740,8 L760,0 L780,6 L800,0 L820,5 L840,0 L860,8 L880,0 L900,6 L920,0 L940,5 L960,0 L980,8 L1000,0 L1020,6 L1040,0 L1060,5 L1080,0 L1100,8 L1120,0 L1140,6 L1160,0 L1180,5 L1200,0 L1200,40 Z"></path>
         </svg>
      </div>
    </section>
  );
};

export default Process;