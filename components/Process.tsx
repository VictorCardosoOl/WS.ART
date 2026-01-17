import React, { useState } from 'react';
import Reveal from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Briefing & Conexão",
    desc: "Entendemos sua história e definimos o conceito central.",
    image: "https://picsum.photos/600/800?grayscale&random=30"
  },
  {
    id: "02",
    title: "Estudo Anatômico",
    desc: "Fotografamos o local para projetar o encaixe perfeito.",
    image: "https://picsum.photos/600/800?grayscale&random=31"
  },
  {
    id: "03",
    title: "Sketching",
    desc: "Criação do desenho exclusivo com feedback iterativo.",
    image: "https://picsum.photos/600/800?grayscale&random=32"
  },
  {
    id: "04",
    title: "A Sessão",
    desc: "Execução técnica em ambiente privado e seguro.",
    image: "https://picsum.photos/600/800?grayscale&random=33"
  }
];

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="relative py-32 md:py-48 bg-pantone-skin overflow-hidden" id="process">
      <div className="container mx-auto px-6 relative z-10 pb-24">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* List Content */}
          <div className="w-full lg:w-1/2">
             <Reveal>
               <span className="text-xs font-bold uppercase tracking-ultra text-pantone-accent mb-12 block">O Processo Criativo</span>
             </Reveal>

             <div className="flex flex-col">
               {steps.map((step, index) => (
                 <div 
                    key={index}
                    className="group border-b border-pantone-ink/10 py-12 md:py-16 cursor-pointer relative"
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                 >
                    <div className="flex items-baseline justify-between mb-4">
                        <h3 className="text-4xl md:text-6xl font-serif text-pantone-ink group-hover:text-pantone-accent transition-colors duration-500 tracking-tight">
                            {step.title}
                        </h3>
                        <span className="text-xs font-bold text-stone-400 group-hover:text-pantone-ink transition-colors">
                            {step.id}
                        </span>
                    </div>
                    <p className="text-stone-500 max-w-sm font-sans text-sm leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                        {step.desc}
                    </p>
                 </div>
               ))}
             </div>
          </div>

          {/* Floating Image Reveal (Desktop) */}
          <div className="hidden lg:block w-1/2 relative h-[80vh]">
            <div className="sticky top-32 w-full h-full flex items-center justify-center">
               <AnimatePresence mode='wait'>
                 {activeStep !== null && (
                   <motion.div 
                     key={activeStep}
                     initial={{ opacity: 0, scale: 0.95, y: 20 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 1.05 }}
                     transition={{ duration: 0.5, ease: "circOut" }}
                     className="relative w-[400px] h-[550px] overflow-hidden shadow-2xl rotate-2"
                   >
                     <img 
                       src={steps[activeStep].image} 
                       alt="Process Step"
                       className="w-full h-full object-cover grayscale"
                     />
                     <div className="absolute inset-0 bg-pantone-accent/10 mix-blend-multiply"></div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* SEPARATOR: REVERSE CURVE TO WHITE (FLASH DAY) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
         <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] fill-white">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
         </svg>
      </div>
    </section>
  );
};

export default Process;