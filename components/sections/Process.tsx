import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".process-item", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 bg-[#F2E8E9] overflow-hidden" id="process">
      <div className="container mx-auto px-6 relative z-10 pb-24">
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* List Content */}
          <div className="w-full lg:w-1/2">
             <div className="mb-16">
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#754548] mb-2 block">O Método</span>
               <h2 className="font-serif text-5xl md:text-6xl text-stone-900 leading-none tracking-tighter">Processo Criativo<span className="text-[#754548]">.</span></h2>
             </div>

             <div className="flex flex-col">
               {steps.map((step, index) => (
                 <div 
                    key={index}
                    className={`process-item group border-b border-[#754548]/10 py-10 cursor-pointer relative transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeStep === index ? 'pl-8 border-[#754548] opacity-100' : 'hover:pl-4 opacity-60 hover:opacity-100'}`}
                    onMouseEnter={() => setActiveStep(index)}
                 >
                    {/* Active Indicator Line */}
                    {activeStep === index && (
                        <motion.div 
                            layoutId="activeIndicator"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-16 bg-[#754548]"
                        />
                    )}

                    <div className="flex items-baseline justify-between mb-2">
                        <h3 className={`text-3xl md:text-5xl font-serif transition-colors duration-500 tracking-tight ${activeStep === index ? 'text-[#754548] italic' : 'text-stone-900'}`}>
                            {step.title}
                        </h3>
                        <span className={`text-[10px] font-bold tracking-widest transition-colors ${activeStep === index ? 'text-[#754548]' : 'text-stone-400'}`}>
                            {step.id}
                        </span>
                    </div>
                    <p className={`text-stone-500 font-sans text-xs tracking-[0.05em] uppercase transition-opacity duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-0'}`}>
                        {step.shortDesc}
                    </p>
                 </div>
               ))}
             </div>
          </div>

          {/* Text Description Reveal (Desktop & Mobile) */}
          <div className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center">
            <div className="w-full lg:sticky lg:top-32 lg:pl-12 border-l border-[#754548]/10">
               <AnimatePresence mode='wait'>
                   <motion.div 
                     key={activeStep}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                     className="relative"
                   >
                     <h4 className="font-serif text-[8rem] md:text-[10rem] text-[#754548] leading-none opacity-5 absolute -top-20 -left-10 select-none">
                        {steps[activeStep].id}
                     </h4>
                     <h3 className="text-3xl font-serif text-stone-900 mb-6 relative z-10">
                        Detalhes da Etapa
                     </h3>
                     <p className="text-lg md:text-xl font-light text-stone-700 leading-relaxed font-sans relative z-10 max-w-md">
                       {steps[activeStep].fullDesc}
                     </p>
                   </motion.div>
               </AnimatePresence>
            </div>
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