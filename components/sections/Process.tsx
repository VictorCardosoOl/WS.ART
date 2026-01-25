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
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-10 2xl:px-20 relative z-10 pb-24">

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">

          {/* List Content */}
          <div className="w-full lg:w-5/12">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-ultra text-pantone-accent mb-16 block">O Processo Criativo</span>
            </Reveal>

            <div className="flex flex-col border-t border-pantone-ink/10" role="tablist" aria-orientation="vertical">
              {steps.map((step, index) => (
                <div
                  key={index}
                  role="tab"
                  id={`process-tab-${index}`}
                  aria-selected={activeStep === index}
                  aria-controls="process-panel"
                  tabIndex={0}
                  className={`group border-b border-pantone-ink/10 py-8 cursor-pointer relative transition-all duration-500 focus-visible:outline-none flex flex-col gap-2`}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveStep(index);
                    }
                  }}
                >
                  {/* Visual Indicator (Barra lateral deslizante) */}
                  {activeStep === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-8 h-12 w-1 bg-pantone-accent"
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }} // Easing suave
                    />
                  )}

                  <div className={`flex items-baseline justify-between transition-all duration-500 ${activeStep === index ? 'pl-6' : 'pl-0 group-hover:pl-2'}`}>
                    <h3 className={`text-3xl md:text-5xl font-serif transition-colors duration-500 tracking-tight ${activeStep === index ? 'text-pantone-accent italic font-medium' : 'text-pantone-ink font-normal opacity-50 group-hover:opacity-80'}`}>
                      {step.title}
                    </h3>
                    <span className={`text-xs font-bold transition-colors ${activeStep === index ? 'text-pantone-accent' : 'text-stone-300'}`}>
                      {step.id}
                    </span>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: activeStep === index ? 'auto' : 0,
                      opacity: activeStep === index ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden bg-transparent"
                  >
                    <p className="text-stone-500 font-sans text-xs tracking-wide pl-6 pt-1 max-w-sm">
                      {step.shortDesc}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Description Panel (Right) */}
          <div className="hidden lg:block w-full lg:w-6/12 relative mt-20">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeStep}
                id="process-panel"
                role="tabpanel"
                aria-labelledby={`process-tab-${activeStep}`}
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative pl-12"
              >
                {/* Número Gigante de Fundo (Animado) */}
                <motion.div
                  className="absolute -top-16 left-0 text-[8rem] font-serif leading-none text-pantone-accent/10 select-none pointer-events-none"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  {steps[activeStep].id}
                </motion.div>

                <h4 className="font-serif text-2xl text-stone-900 mb-6 relative z-10" aria-hidden="true">
                  Detalhes da Etapa
                </h4>

                <p className="text-xl md:text-2xl font-light text-stone-600 leading-relaxed font-serif relative z-10 max-w-xl">
                  {steps[activeStep].fullDesc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Description Panel */}
          <div className="block lg:hidden w-full mt-8">
            <h4 className="font-serif text-xl text-pantone-accent mb-4 italic">{steps[activeStep].title}</h4>
            <p className="text-base text-stone-600 leading-relaxed">
              {steps[activeStep].fullDesc}
            </p>
          </div>

        </div>
      </div>

      {/* SEPARATOR */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] fill-white">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Process;