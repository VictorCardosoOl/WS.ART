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
  const containerRef = useRef<HTMLDivElement>(null);
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
    <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden" id="process">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-pantone-skin z-0">
          <div className="absolute inset-0 bg-noise opacity-[0.05]"></div>
          <div className="absolute -top-[20%] right-0 w-[600px] h-[600px] bg-rose-200/40 blur-[80px] rounded-full mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pb-24">
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* List Content */}
          <div className="w-full lg:w-1/2" ref={listRef}>
             <div className="process-title">
               <span className="font-sans text-meta font-bold text-pantone-accent mb-12 block">O Processo Criativo</span>
             </div>

             <div className="flex flex-col" role="tablist" aria-orientation="vertical">
               {steps.map((step, index) => (
                 <div 
                    key={index}
                    role="tab"
                    id={`process-tab-${index}`}
                    aria-selected={activeStep === index}
                    aria-controls="process-panel"
                    tabIndex={0}
                    className={`process-item group border-b border-pantone-ink/10 py-10 cursor-pointer relative transition-all duration-500 focus-visible:outline-none focus-visible:bg-white/50 rounded-sm ${activeStep === index ? 'pl-8 border-pantone-accent' : 'hover:pl-4 opacity-50 hover:opacity-100'}`}
                    onMouseEnter={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveStep(index);
                      }
                    }}
                 >
                    {activeStep === index && (
                        <motion.div 
                            layoutId="activeIndicator"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-pantone-accent rounded-full"
                        />
                    )}

                    <div className="flex items-baseline justify-between mb-2">
                        <h3 className={`font-serif text-3xl md:text-5xl transition-colors duration-500 tracking-tighter uppercase font-semibold ${activeStep === index ? 'text-pantone-ink' : 'text-stone-500'}`}>
                            {step.title}
                        </h3>
                        <span className="font-sans text-meta font-bold text-stone-400">
                            {step.id}
                        </span>
                    </div>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-stone-500">
                        {step.shortDesc}
                    </p>
                 </div>
               ))}
             </div>
          </div>

          {/* Description Panel */}
          <div className="process-panel-container w-full lg:w-1/2 relative lg:h-[600px] flex items-center">
            <div className="w-full lg:sticky lg:top-32 lg:pl-12 border-l border-pantone-accent/20 pl-8">
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
                     className="relative"
                   >
                     <h4 className="font-serif text-6xl md:text-8xl text-stone-200 leading-none absolute -top-16 -left-8 -z-10 select-none opacity-50">
                        {steps[activeStep].id}
                     </h4>
                     <h3 className="font-serif text-2xl text-pantone-ink mb-6 uppercase tracking-tight">
                        Detalhes da Etapa
                     </h3>
                     <p className="font-sans text-lg md:text-xl font-light text-stone-700 leading-relaxed tracking-wide">
                       {steps[activeStep].fullDesc}
                     </p>
                   </motion.article>
               </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* SEPARATOR */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 text-[#F5F5F5] pointer-events-none">
         <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-[50px] md:h-[60px] fill-current">
            <path d="M0,60 L1200,60 L1200,10 C1150,30 1100,5 1050,20 C1000,50 950,10 900,30 C850,5 800,40 750,15 C700,50 650,20 600,40 C550,10 500,45 450,25 C400,50 350,10 300,35 C250,5 200,40 150,20 C100,50 50,10 0,60 Z"></path>
         </svg>
      </div>
    </section>
  );
};

export default Process;