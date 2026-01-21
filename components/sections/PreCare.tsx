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
    fullDesc: "A tinta não fixa em pele ressecada. Comece a hidratar a região da tatuagem intensamente 7 dias antes. Uma pele hidratada é mais elástica, reduz o trauma da agulha e facilita drasticamente a cicatrização posterior.",
    icon: <Droplets size={24} strokeWidth={1} />
  },
  {
    id: "02",
    title: "Descanso",
    shortDesc: "Energia vital para suportar a sessão.",
    fullDesc: "Tatuar exige muito do sistema imunológico. Durma bem na noite anterior (mínimo 8h). O corpo precisa de energia para lidar com a inflamação controlada. Faça uma refeição reforçada antes de vir.",
    icon: <Moon size={24} strokeWidth={1} />
  },
  {
    id: "03",
    title: "Zero Álcool",
    shortDesc: "Evite sangramento e expulsão de tinta.",
    fullDesc: "Não consuma bebidas alcoólicas 24h antes. O álcool afina o sangue, aumentando o sangramento durante o processo. Isso 'lava' o pigmento para fora da pele e dificulta o trabalho do artista.",
    icon: <Ban size={24} strokeWidth={1} />
  },
  {
    id: "04",
    title: "Vestimenta",
    shortDesc: "Conforto e acesso à área.",
    fullDesc: "Venha com roupas confortáveis e, preferencialmente, escuras (respingos de tinta podem ocorrer). Garanta que a roupa permita fácil acesso à área a ser tatuada sem comprimir o local.",
    icon: <Shirt size={24} strokeWidth={1} />
  }
];

const PreCare: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative py-32 md:py-48 bg-gradient-to-b from-[#FAF7F7] to-[#F5E6E8]/30 overflow-hidden" id="precare">
      
      {/* Background Decor - Very subtle */}
      <GraphiteScribble className="top-10 -right-20 w-[500px] h-[500px] text-stone-900 rotate-12 opacity-[0.02]" />

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
                        A qualidade da sua tatuagem depende 50% do artista e 50% da sua pele.
                    </p>
                </Reveal>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-stretch min-h-[500px]">
          
          {/* LEFT: LIST (Navigation) */}
          <div className="w-full lg:w-4/12 flex flex-col justify-center">
             <div className="flex flex-col">
               {careSteps.map((step, index) => (
                 <motion.div 
                    key={step.id}
                    className="group py-5 cursor-pointer relative border-b border-stone-200/60 hover:border-[#754548]/30 transition-colors duration-500"
                    onMouseEnter={() => setActiveStep(index)}
                 >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <span className={`text-[10px] font-bold transition-colors duration-300 ${activeStep === index ? 'text-[#754548]' : 'text-stone-300'}`}>
                                0{index + 1}
                            </span>
                            <h3 className={`text-xl md:text-2xl font-serif transition-all duration-300 ${activeStep === index ? 'text-stone-900 translate-x-2 italic' : 'text-stone-400'}`}>
                                {step.title}
                            </h3>
                        </div>
                    </div>
                 </motion.div>
               ))}
             </div>
          </div>

          {/* RIGHT: DETAILS (Clean, Sophisticated Design) */}
          <div className="w-full lg:w-8/12 relative">
               <AnimatePresence mode='wait'>
                   <motion.div 
                     key={activeStep}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -10 }}
                     transition={{ duration: 0.5, ease: "easeOut" }}
                     className="h-full flex flex-col justify-center"
                   >
                     {/* Sophisticated 'Card' - No Borders, Just Typography & Texture */}
                     <div className="relative p-8 md:p-12 bg-white/40 backdrop-blur-sm rounded-sm shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-white/50">
                        
                        {/* Huge Watermark Number */}
                        <span className="absolute -top-10 -right-4 text-[12rem] font-serif leading-none text-[#754548] opacity-[0.03] pointer-events-none select-none">
                            {careSteps[activeStep].id}
                        </span>

                        <div className="relative z-10">
                            {/* Icon & Label */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="text-[#754548] opacity-80">
                                    {careSteps[activeStep].icon}
                                </div>
                                <div className="h-[1px] w-12 bg-[#754548]/20"></div>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
                                    Essencial
                                </span>
                            </div>

                            {/* Headline */}
                            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-[1.1] mb-6">
                                {careSteps[activeStep].title}
                            </h2>

                            {/* Body Text */}
                            <p className="text-lg text-stone-600 font-light leading-relaxed max-w-xl font-serif">
                                {careSteps[activeStep].fullDesc}
                            </p>

                            {/* Insight Quote */}
                            <div className="mt-10 pt-8 border-t border-[#754548]/10 flex gap-4">
                                <span className="text-4xl text-[#754548] font-serif italic opacity-30 leading-none">"</span>
                                <p className="text-sm font-medium text-stone-500 italic mt-1">
                                    {careSteps[activeStep].shortDesc}
                                </p>
                            </div>
                        </div>
                     </div>

                   </motion.div>
               </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PreCare;