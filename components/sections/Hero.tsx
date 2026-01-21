import React from 'react';
import Reveal from '../ui/Reveal';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#FAF7F7] p-4 md:p-6">
      
      {/* FRAME BORDER - Arredondada e Z-Index ajustado */}
      <div className="absolute inset-4 md:inset-6 border border-[#754548]/10 pointer-events-none z-0 rounded-3xl"></div>

      {/* LAYER 1: GRAIN OVERLAY */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-[1]"></div>

      {/* TRANSITION GRADIENT BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-white z-[2] pointer-events-none"></div>

      {/* LAYER 2: CONTENT */}
      <div className="container mx-auto relative z-10 h-full flex flex-col pt-32 md:pt-40 pb-0 justify-between">
        
        {/* Intro Text Block */}
        <div className="flex flex-col md:flex-row justify-end items-start w-full px-6 relative z-30">
            <div className="max-w-md text-right md:text-right mt-8 md:mt-0 pointer-events-auto flex flex-col items-end">
                <Reveal delay={200}>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#754548] leading-[1.05] font-light tracking-tight">
                      A arte na pele como<br/> 
                      <span className="italic font-normal opacity-70">experiência imersiva.</span>
                    </h2>
                </Reveal>
                
                <Reveal delay={400}>
                    <div className="h-[1px] w-12 bg-[#754548]/40 my-6"></div>
                </Reveal>
                
                <Reveal delay={600}>
                    <p className="font-sans text-[10px] text-stone-500 leading-loose tracking-[0.3em] uppercase font-bold text-right">
                      Conectamos história e anatomia<br/> em narrativas visuais perenes.
                    </p>
                </Reveal>
            </div>
        </div>

        {/* Centerpiece & Footer of Hero */}
        <div className="w-full flex flex-col items-center justify-end pb-0 relative">
            
            {/* Scroll Indicator */}
            <div className="mb-8 md:mb-12 animate-bounce duration-[3000ms] relative z-30">
                <ArrowDown size={16} className="text-[#754548] opacity-50" />
            </div>

            {/* Info Data - MOVIDO PARA CIMA DO NOME e com Z-Index Alto */}
            <div className="absolute bottom-[20vw] md:bottom-[14vw] left-6 md:left-12 z-30 hidden md:block">
               <Reveal>
                  <div className="flex flex-col gap-1 border-l border-[#754548]/30 pl-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-900">Estúdio Privado</span>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-stone-400">São Paulo, BR</span>
                  </div>
               </Reveal>
            </div>

            {/* Massive Typography - Z-Index 10 (Sobre a borda, sob o Info Data) */}
            <div className="w-full flex justify-center items-end leading-none z-10 mix-blend-darken pointer-events-none">
                <Reveal delay={300} width="100%">
                    <h1 className="font-sans font-black text-[18vw] text-black tracking-tighter text-center leading-[0.8] opacity-[1] select-none w-full transform translate-y-4 lg:translate-y-6">
                        WILLIAM
                    </h1>
                </Reveal>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;