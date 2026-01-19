import React from 'react';
import Reveal from '../ui/Reveal';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#FAF7F7] p-4 md:p-6">
      
      {/* FRAME BORDER */}
      <div className="absolute inset-4 md:inset-6 border border-[#754548]/10 pointer-events-none z-0 rounded-3xl"></div>

      {/* LAYER 1: GRAIN OVERLAY */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none z-[1]"></div>

      {/* DEPTH OF FIELD LAYER (Blur Foreground) - Nova adição para profundidade */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#754548]/10 blur-[120px] rounded-full pointer-events-none z-[20]"></div>
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-rose-200/20 blur-[100px] rounded-full pointer-events-none z-[1]"></div>

      {/* TRANSITION GRADIENT BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#FAF7F7] z-[2] pointer-events-none"></div>

      {/* LAYER 2: CONTENT */}
      <div className="container mx-auto relative z-10 h-full flex flex-col pt-32 md:pt-40 pb-0 justify-between">
        
        {/* Intro Text Block - Editorial Layout */}
        <div className="flex flex-col md:flex-row justify-end items-start w-full px-6 relative z-30">
            <Reveal delay={200}>
              <div className="max-w-lg text-right md:text-right mt-8 md:mt-0 pointer-events-auto">
                <h2 className="font-serif text-4xl md:text-6xl text-[#754548] leading-[0.95] font-light tracking-tight">
                  A arte na pele como<br/> 
                  <span className="italic font-normal opacity-80">experiência imersiva.</span>
                </h2>
                
                <div className="flex justify-end mt-8 items-center gap-6">
                    <div className="h-[1px] w-12 bg-[#754548]/30"></div>
                    <p className="font-sans text-[10px] text-stone-500 leading-relaxed tracking-[0.2em] uppercase font-medium">
                      Anatomia & Narrativa Visual
                    </p>
                </div>
              </div>
            </Reveal>
        </div>

        {/* Centerpiece & Footer of Hero */}
        <div className="w-full flex flex-col items-center justify-end pb-0 relative">
            
            {/* Scroll Indicator - Sutil */}
            <div className="mb-12 md:mb-16 animate-pulse duration-[3000ms] relative z-30 flex flex-col items-center gap-2 opacity-60">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#754548]">Scroll</span>
                <ArrowDown size={14} className="text-[#754548]" />
            </div>

            {/* Info Data - Minimalista */}
            <div className="absolute bottom-[22vw] md:bottom-[15vw] left-6 md:left-12 z-30 hidden md:block mix-blend-multiply">
               <Reveal>
                  <div className="flex flex-col gap-2 border-l border-[#754548]/30 pl-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-900">Estúdio Privado</span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">Av. Paulista — SP</span>
                  </div>
               </Reveal>
            </div>

            {/* Massive Typography - Z-Index 10 */}
            <div className="w-full flex justify-center items-end leading-none z-10 mix-blend-darken pointer-events-none">
                <Reveal delay={300} width="100%">
                    {/* Aumentado para 20vw e leading ainda mais apertado para efeito bloco */}
                    <h1 className="font-sans font-black text-[21vw] text-black tracking-tighter text-center leading-[0.75] opacity-[0.95] select-none w-full transform translate-y-6 lg:translate-y-10">
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