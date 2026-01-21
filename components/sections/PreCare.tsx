import React, { useState } from 'react';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Moon, Ban, Shirt, ArrowRight } from 'lucide-react';
import { GraphiteScribble } from '../ui/ArtisticDecorations';

const careSteps = [
  {
    id: "01",
    title: "Hidratação",
    shortDesc: "Pele preparada recebe melhor a tinta.",
    fullDesc: "A tinta não fixa em pele ressecada. Comece a hidratar a região da tatuagem intensamente 7 dias antes. Uma pele hidratada é mais elástica, reduz o trauma da agulha e facilita drasticamente a cicatrização posterior, garantindo cores mais vivas.",
    icon: <Droplets size={28} strokeWidth={1} />
  },
  {
    id: "02",
    title: "Descanso",
    shortDesc: "Energia vital para suportar a sessão.",
    fullDesc: "Tatuar exige muito do sistema imunológico. Durma bem na noite anterior (mínimo 8h). O corpo precisa de energia para lidar com a inflamação controlada. Faça uma refeição reforçada antes de vir para evitar quedas de pressão.",
    icon: <Moon size={28} strokeWidth={1} />
  },
  {
    id: "03",
    title: "Zero Álcool",
    shortDesc: "Evite sangramento e expulsão de tinta.",
    fullDesc: "Não consuma bebidas alcoólicas 24h antes. O álcool afina o sangue, aumentando o sangramento durante o processo. Isso 'lava' o pigmento para fora da pele, dificulta o trabalho do artista e prejudica o resultado final da cicatrização.",
    icon: <Ban size={28} strokeWidth={1} />
  },
  {
    id: "04",
    title: "Vestimenta",
    shortDesc: "Conforto e acesso à área.",
    fullDesc: "Venha com roupas confortáveis e, preferencialmente, escuras (respingos de tinta podem ocorrer). Garanta que a roupa permita fácil acesso à área a ser tatuada sem comprimir o local, permitindo a circulação adequada durante horas.",
    icon: <Shirt size={28} strokeWidth={1} />
  }
];

const PreCare: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    // Continued flow from Process (White/Light Gradient)
    <section className="relative py-32 md:py-48 bg-white overflow-hidden" id="precare">
      
      {/* Background Decor */}
      <GraphiteScribble className="top-10 left-[-50px] w-[400px] h-[400px] text-stone-900 rotate-90 opacity-[0.03]" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-24">
             <SectionTitle 
                number="04"
                subtitle="Cuidados Pré-Sessão" 
                title="Preparação" 
                align="left" 
            />
            <div className="md:pl-[5%] mt-[-40px]">
                <Reveal delay={200}>
                    <p className="text-stone-500 font-light text-sm md:text-base max-w-lg leading-relaxed border-l border-[#754548]/20 pl-6">
                        A qualidade da sua tatuagem depende 50% do artista e 50% da sua pele. Este guia garante a tela perfeita.
                    </p>
                </Reveal>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start h-auto lg:h-[600px]">
          
          {/* LEFT: INTERACTIVE LIST */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between h-full">
             <div className="flex flex-col gap-2">
               {careSteps.map((step, index) => (
                 <motion.div 
                    key={step.id}
                    className={`group py-6 cursor-pointer relative transition-all duration-500 border-b border-stone-100 hover:border-stone-200`}
                    onMouseEnter={() => setActiveStep(index)}
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                 >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <span className={`text-xs font-bold transition-colors duration-300 ${activeStep === index ? 'text-[#754548]' : 'text-stone-300'}`}>
                                {step.id}
                            </span>
                            <h3 className={`text-2xl md:text-3xl font-serif transition-all duration-500 tracking-tight ${activeStep === index ? 'text-stone-900 translate-x-2' : 'text-stone-400'}`}>
                                {step.title}
                            </h3>
                        </div>
                        <div className={`transition-all duration-500 ${activeStep === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                            <ArrowRight size={18} className="text-[#754548]" />
                        </div>
                    </div>
                 </motion.div>
               ))}
             </div>
             
             <div className="mt-8 lg:mt-0 hidden lg:block">
                 <p className="text-[10px] uppercase tracking-widest text-stone-400">
                     * Seguir estas etapas é obrigatório para a garantia do retoque.
                 </p>
             </div>
          </div>

          {/* RIGHT: DETAILS DISPLAY */}
          <div className="w-full lg:w-7/12 h-full min-h-[500px] relative perspective-1000">
               <AnimatePresence mode='wait'>
                   <motion.div 
                     key={activeStep}
                     initial={{ opacity: 0, x: 50, rotateY: 5 }}
                     animate={{ opacity: 1, x: 0, rotateY: 0 }}
                     exit={{ opacity: 0, x: -50, rotateY: -5 }}
                     transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                     className="relative w-full h-full bg-[#FAF7F7] border border-[#754548]/10 rounded-sm p-8 md:p-16 flex flex-col justify-between overflow-hidden shadow-sm origin-left"
                   >
                     {/* Background Giant Number */}
                     <div className="absolute -bottom-16 -right-10 text-[18rem] leading-none font-serif text-white mix-blend-multiply opacity-80 select-none pointer-events-none z-0">
                         {careSteps[activeStep].id}
                     </div>
                     
                     <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-10">
                            <motion.div 
                                key={`icon-${activeStep}`}
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: 'spring', delay: 0.2 }}
                                className="w-12 h-12 rounded-full bg-white border border-[#754548]/20 flex items-center justify-center text-[#754548] shadow-sm"
                            >
                                {careSteps[activeStep].icon}
                            </motion.div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#754548]">
                                Etapa Obrigatória
                            </span>
                        </div>

                        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-[1.1]">
                            {careSteps[activeStep].title}
                        </h2>
                        
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: 64 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="h-[1px] bg-stone-300 mb-8"
                        />

                        <p className="text-lg font-light text-stone-600 leading-relaxed font-serif max-w-md">
                           {careSteps[activeStep].fullDesc}
                        </p>
                     </div>

                     <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="relative z-10 mt-12 bg-white/60 backdrop-blur-sm border-l-2 border-[#754548] p-4 max-w-sm shadow-sm"
                     >
                         <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400 block mb-1">
                             Insight do Artista
                         </span>
                         <p className="text-stone-800 font-medium italic text-sm">
                             "{careSteps[activeStep].shortDesc}"
                         </p>
                     </motion.div>

                   </motion.div>
               </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PreCare;