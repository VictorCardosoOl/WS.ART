import React, { useState } from 'react';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Moon, Ban, Shirt } from 'lucide-react';

const careSteps = [
  {
    id: "01",
    title: "Hidratação",
    shortDesc: "Pele preparada recebe melhor a tinta.",
    fullDesc: "Comece a hidratar a região da tatuagem 7 dias antes. Uma pele hidratada é mais elástica, reduz o trauma da agulha e facilita drasticamente a cicatrização posterior.",
    icon: <Droplets size={48} strokeWidth={0.8} />
  },
  {
    id: "02",
    title: "Descanso",
    shortDesc: "Energia vital para a sessão.",
    fullDesc: "Durma bem na noite anterior (mínimo 8h). O corpo precisa de energia para lidar com a dor e a inflamação controlada. Faça uma refeição reforçada antes de vir.",
    icon: <Moon size={48} strokeWidth={0.8} />
  },
  {
    id: "03",
    title: "Zero Álcool",
    shortDesc: "Evite sangramento excessivo.",
    fullDesc: "Não consuma bebidas alcoólicas 24h antes. O álcool afina o sangue, aumentando o sangramento, o que expulsa o pigmento e dificulta o trabalho do artista.",
    icon: <Ban size={48} strokeWidth={0.8} />
  },
  {
    id: "04",
    title: "Vestimenta",
    shortDesc: "Conforto e acessibilidade.",
    fullDesc: "Venha com roupas confortáveis e escuras. Garanta fácil acesso à área a ser tatuada sem comprimir o local, permitindo circulação adequada.",
    icon: <Shirt size={48} strokeWidth={0.8} />
  }
];

const PreCare: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    // Fundo branco limpo para contraste com as seções adjacentes rosa
    <section className="relative py-32 md:py-48 bg-white overflow-hidden" id="precare">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-24">
             <SectionTitle 
                subtitle="Cuidados Pré-Sessão" 
                title="Preparação" 
                align="left" 
            />
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* LEFT: LIST */}
          <div className="w-full lg:w-1/2">
             <div className="flex flex-col">
               {careSteps.map((step, index) => (
                 <div 
                    key={index}
                    className={`group border-b border-stone-100 py-8 cursor-pointer relative transition-all duration-500 ${activeStep === index ? 'pl-8 border-[#754548]' : 'hover:pl-4'}`}
                    onMouseEnter={() => setActiveStep(index)}
                 >
                    {activeStep === index && (
                        <motion.div 
                            layoutId="activeIndicatorCare"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-12 bg-[#754548]"
                        />
                    )}

                    <div className="flex items-baseline justify-between mb-2">
                        <h3 className={`text-2xl md:text-3xl font-serif transition-colors duration-500 tracking-tight ${activeStep === index ? 'text-[#754548] italic' : 'text-stone-900'}`}>
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

          {/* RIGHT: DETAILS */}
          <div className="w-full lg:w-1/2 relative lg:h-[400px] flex items-center justify-center bg-[#FAF7F7] rounded-sm p-12">
               <AnimatePresence mode='wait'>
                   <motion.div 
                     key={activeStep}
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 1.05 }}
                     transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                     className="relative text-center"
                   >
                     <div className="mb-6 text-[#754548] flex justify-center">
                        {careSteps[activeStep].icon}
                     </div>

                     <h4 className="font-serif text-3xl text-stone-900 mb-6 italic">
                        {careSteps[activeStep].title}
                     </h4>
                     
                     <p className="text-base font-light text-stone-600 leading-relaxed font-sans max-w-sm mx-auto">
                       {careSteps[activeStep].fullDesc}
                     </p>
                   </motion.div>
               </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PreCare;