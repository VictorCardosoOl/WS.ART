import React from 'react';
import Reveal from './Reveal';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#FAF7F7] p-4 md:p-6">
      
      {/* FRAME BORDER - Inspiration: Leia Vallante/Occupied */}
      <div className="absolute inset-4 md:inset-6 border border-[#754548]/10 pointer-events-none z-20 rounded-sm"></div>

      {/* LAYER 1: GRAIN OVERLAY */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-[1]"></div>

      {/* TRANSITION GRADIENT BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-white z-[2] pointer-events-none"></div>

      {/* LAYER 2: CONTENT */}
      <div className="container mx-auto relative z-10 h-full flex flex-col pt-32 md:pt-40 pb-0 justify-between">
        
        {/* Intro Text Block */}
        <div className="flex flex-col md:flex-row justify-end items-start w-full px-6">
            <Reveal delay={200}>
              <div className="max-w-md text-right md:text-right mt-8 md:mt-0 pointer-events-auto">
                <h2 className="font-serif text-3xl md:text-5xl text-[#754548] leading-[1.05] font-light tracking-tight">
                  A arte na pele como<br/> 
                  <span className="italic font-normal opacity-70">experiência imersiva.</span>
                </h2>
                <div className="h-[1px] w-24 bg-[#754548]/30 ml-auto my-6"></div>
                <p className="font-sans text-[10px] md:text-xs text-stone-500 leading-relaxed tracking-widest uppercase font-semibold">
                  Conectamos história e anatomia<br/> em narrativas visuais perenes.
                </p>
              </div>
            </Reveal>
        </div>

        {/* Centerpiece & Footer of Hero */}
        <div className="w-full flex flex-col items-center justify-end pb-0 relative">
            
            {/* Scroll Indicator */}
            <div className="mb-8 md:mb-12 animate-bounce duration-[3000ms]">
                <ArrowDown size={16} className="text-[#754548] opacity-50" />
            </div>

            {/* Info Data */}
            <div className="absolute bottom-12 left-6 hidden md:block">
               <Reveal>
                  <div className="flex flex-col gap-1 border-l border-[#754548]/30 pl-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-900">Estúdio Privado</span>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-stone-400">São Paulo, BR</span>
                  </div>
               </Reveal>
            </div>

            {/* Massive Typography */}
            <div className="w-full flex justify-center items-end leading-none z-10 mix-blend-darken">
            <Reveal delay={300} width="100%">
                <h1 className="font-sans font-black text-[18vw] text-stone-900 tracking-tighter text-center leading-[0.8] opacity-[0.9] select-none w-full transform translate-y-4 lg:translate-y-6">
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