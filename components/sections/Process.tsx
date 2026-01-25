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
               <span className="text-xs font-bold uppercase tracking-ultra text-pantone-accent mb-12 block font-sans">O Processo Criativo</span>
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
                        <h3 className={`text-3xl md:text-5xl font-serif transition-colors duration-500 tracking-tight uppercase ${activeStep === index ? 'text-pantone-accent' : 'text-pantone-ink'}`}>
                            {step.title}
                        </h3>
                        <span className={`text-xs font-bold transition-colors font-sans ${activeStep === index ? 'text-pantone-accent' : 'text-stone-400'}`}>
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
                     <h3 className="text-2xl font-serif text-pantone-ink mb-6 uppercase">
                        Detalhes da Etapa
                     </h3>
                     <p className="text-lg md:text-xl font-light text-stone-700 leading-relaxed font-sans">
                       {steps[activeStep].fullDesc}
                     </p>
                   </motion.div>
               </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* SEPARATOR: INK BLEED EDGE (Transition to White) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 text-white">
         <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[50px] md:h-[60px] fill-current">
            <path d="M0,60 L1200,60 L1200,10 C1150,30 1100,5 1050,20 C1000,50 950,10 900,30 C850,5 800,40 750,15 C700,50 650,20 600,40 C550,10 500,45 450,25 C400,50 350,10 300,35 C250,5 200,40 150,20 C100,50 50,10 0,60 Z"></path>
         </svg>
      </div>
    </section>
  );
};

export default Process;