import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const steps = [
  {
    id: "01",
    title: "Briefing",
    shortDesc: "Conexão e história",
    fullDesc: "A sondagem da tatuagem. Nesta etapa inicial, realizamos uma conversa profunda para entender as motivações, símbolos e memórias que devem compor a obra. Não é apenas sobre o desenho, é sobre o significado.",
  },
  {
    id: "02",
    title: "Anatomia",
    shortDesc: "Estudo e projeção",
    fullDesc: "Utilizamos fotografia e edição digital (Photoshop) para projetar o desenho diretamente sobre a foto do seu corpo. Isso garante que a arte respeite sua musculatura, curvaturas e fluxo natural, criando uma peça orgânica e fluida.",
  },
  {
    id: "03",
    title: "Sketching",
    shortDesc: "Criação da arte",
    fullDesc: "Desenvolvimento dos rascunhos e arte final antes da tatuagem acontecer. Aqui definimos contraste, pesos de linha e paleta de cores. O desenho é refinado até atingir a excelência estética e técnica necessária.",
  },
  {
    id: "04",
    title: "Sessão",
    shortDesc: "Execução técnica",
    fullDesc: "O momento da materialização. Em um ambiente privado e estéril, a arte é transferida para a pele. Utilizamos técnicas modernas para garantir a durabilidade do pigmento e o conforto durante o procedimento.",
  }
];

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".process-title", 
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
        }
      );

      gsap.fromTo(gsap.utils.toArray('.process-item'),
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: listRef.current, start: "top 80%" }
        }
      );

      gsap.fromTo(".process-panel-container",
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.2,
          scrollTrigger: { trigger: listRef.current, start: "top 80%" }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 bg-pantone-skin overflow-hidden" id="process">
      <div className="container mx-auto px-6 relative z-10 pb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* List Content */}
          <div ref={listRef}>
             <div className="process-title mb-12">
               <span className="font-sans text-meta font-bold text-pantone-accent">O PROCESSO CRIATIVO</span>
             </div>

             <div role="tablist" aria-orientation="vertical">
               {steps.map((step, index) => (
                 <div 
                    key={index}
                    role="tab"
                    id={`process-tab-${index}`}
                    aria-selected={activeStep === index}
                    aria-controls="process-panel"
                    tabIndex={0}
                    className={`process-item group border-b border-pantone-ink/10 py-8 cursor-pointer relative transition-all duration-500 rounded-sm outline-none focus-visible:bg-white/50
                        ${activeStep === index ? 'pl-8' : 'hover:pl-4 opacity-50 hover:opacity-100'}
                    `}
                    onMouseEnter={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveStep(index)}
                 >
                    {activeStep === index && (
                        <motion.div 
                            layoutId="activeIndicator"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full bg-pantone-accent opacity-50"
                        />
                    )}

                    <div className="flex items-baseline justify-between mb-1">
                        <h3 className={`font-serif text-3xl md:text-5xl tracking-tighter uppercase transition-colors duration-300 ${activeStep === index ? 'text-pantone-ink' : 'text-stone-500'}`}>
                            {step.title}
                        </h3>
                        <span className="font-sans text-meta font-bold text-stone-400">
                            {step.id}
                        </span>
                    </div>
                    <p className="font-sans text-xs uppercase tracking-widest text-stone-500">
                        {step.shortDesc}
                    </p>
                 </div>
               ))}
             </div>
          </div>

          {/* Description Panel */}
          <div className="process-panel-container relative lg:h-[600px] flex items-center">
            <div className="w-full lg:sticky lg:top-32 lg:pl-12 border-l border-pantone-accent/20 pl-6 py-6">
               <AnimatePresence mode='wait'>
                   <motion.article 
                     key={activeStep}
                     id="process-panel"
                     role="tabpanel"
                     aria-labelledby={`process-tab-${activeStep}`}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                   >
                     <span className="font-serif text-6xl md:text-8xl text-stone-200 leading-none absolute -top-10 -left-6 -z-10 select-none">
                        {steps[activeStep].id}
                     </span>
                     <h3 className="font-serif text-2xl text-pantone-ink mb-6 uppercase tracking-tight">
                        Detalhes da Etapa
                     </h3>
                     <p className="font-sans text-lg md:text-xl font-light text-stone-600 leading-relaxed tracking-wide">
                       {steps[activeStep].fullDesc}
                     </p>
                   </motion.article>
               </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 text-white pointer-events-none">
         <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[50px] md:h-[60px] fill-current">
            <path d="M0,60 L1200,60 L1200,10 C1150,30 1100,5 1050,20 C1000,50 950,10 900,30 C850,5 800,40 750,15 C700,50 650,20 600,40 C550,10 500,45 450,25 C400,50 350,10 300,35 C250,5 200,40 150,20 C100,50 50,10 0,60 Z"></path>
         </svg>
      </div>
    </section>
  );
};

export default Process;