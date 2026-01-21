import React, { useState } from 'react';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Moon, Ban, Shirt } from 'lucide-react';

const careSteps = [
  {
    id: "01",
    title: "Hidratação Profunda",
    shortDesc: "Prepare a pele para receber a tinta.",
    fullDesc: "Comece a hidratar a região da tatuagem 7 dias antes. Uma pele hidratada é mais elástica, recebe melhor o pigmento, reduz o trauma da agulha e facilita drasticamente a cicatrização posterior.",
    icon: <Droplets size={64} strokeWidth={0.8} />
  },
  {
    id: "02",
    title: "Descanso Pleno",
    shortDesc: "Energia para suportar a sessão.",
    fullDesc: "Durma bem na noite anterior (mínimo 8h). O corpo precisa de energia para lidar com a dor e a inflamação controlada. Faça uma refeição reforçada antes de vir ao estúdio para evitar quedas de pressão.",
    icon: <Moon size={64} strokeWidth={0.8} />
  },
  {
    id: "03",
    title: "Zero Álcool",
    shortDesc: "Evite sangramento excessivo.",
    fullDesc: "Não consuma bebidas alcoólicas 24h antes do procedimento. O álcool afina o sangue, aumentando o sangramento durante a sessão, o que expulsa o pigmento e dificulta o trabalho do artista.",
    icon: <Ban size={64} strokeWidth={0.8} />
  },
  {
    id: "04",
    title: "Vestimenta",
    shortDesc: "Conforto e acessibilidade.",
    fullDesc: "Venha com roupas confortáveis, preferencialmente pretas ou escuras (tinta pode respingar). Garanta fácil acesso à área a ser tatuada sem comprimir o local, permitindo circulação sanguínea adequada.",
    icon: <Shirt size={64} strokeWidth={0.8} />
  }
];

const PreCare: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative py-32 md:py-48 bg-white overflow-hidden" id="precare">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Alignment matching Process Section Style */}
        <div className="mb-24">
             <SectionTitle 
                subtitle="Cuidados Pré-Sessão" 
                title="Preparação" 
                align="left" 
            />
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE LIST */}
          <div className="w-full lg:w-1/2">
             <Reveal>
               <span className="text-xs font-bold uppercase tracking-ultra text-stone-400 mb-12 block">
                 Guia do Cliente
               </span>
             </Reveal>

             <div className="flex flex-col">
               {careSteps.map((step, index) => (
                 <div 
                    key={index}
                    className={`group border-b border-stone-200 py-10 cursor-pointer relative transition-all duration-500 ${activeStep === index ? 'pl-8 border-[#754548]' : 'hover:pl-4'}`}
                    onMouseEnter={() => setActiveStep(index)}
                 >
                    {/* Active Indicator Line */}
                    {activeStep === index && (
                        <motion.div 
                            layoutId="activeIndicatorCare"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#754548] rounded-full"
                        />
                    )}

                    <div className="flex items-baseline justify-between mb-2">
                        <h3 className={`text-3xl md:text-4xl font-serif transition-colors duration-500 tracking-tight ${activeStep === index ? 'text-[#754548] italic' : 'text-stone-900'}`}>
                            {step.title}
                        </h3>
                        <span className={`text-xs font-bold transition-colors ${activeStep === index ? 'text-[#754548]' : 'text-stone-300'}`}>
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

          {/* RIGHT COLUMN: STICKY DETAILS REVEAL */}
          <div className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center">
            <div className="w-full lg:sticky lg:top-32 lg:pl-16 border-l border-[#754548]/10">
               <AnimatePresence mode='wait'>
                   <motion.div 
                     key={activeStep}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="relative"
                   >
                     {/* Icon Display */}
                     <div className="mb-8 text-[#754548] opacity-80">
                        {careSteps[activeStep].icon}
                     </div>

                     <h4 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
                        {careSteps[activeStep].title}
                     </h4>
                     
                     <p className="text-lg md:text-xl font-light text-stone-600 leading-relaxed font-serif">
                       {careSteps[activeStep].fullDesc}
                     </p>

                     {/* Decorative number in background */}
                     <span className="absolute -top-20 -right-10 text-[12rem] font-serif leading-none text-stone-100 -z-10 select-none pointer-events-none">
                        {careSteps[activeStep].id}
                     </span>
                   </motion.div>
               </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PreCare;