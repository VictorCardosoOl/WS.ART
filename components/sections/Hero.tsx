import React from 'react';
import Reveal from '../ui/Reveal';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#FAF7F7] p-4 md:p-6">
      
      {/* FRAME BORDER - Lighter, thinner */}
      <div className="absolute inset-4 md:inset-6 border border-[#754548]/5 pointer-events-none z-0 rounded-[2rem]"></div>

      {/* DEPTH ELEMENT: Blurry Foreground Blob */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-rose-200/20 rounded-full blur-[100px] pointer-events-none z-[5]"></div>

      {/* LAYER 1: CONTENT */}
      <div className="container mx-auto relative z-10 h-full flex flex-col pt-32 md:pt-40 pb-0 justify-between">
        
        {/* Intro Text Block */}
        <div className="flex flex-col md:flex-row justify-end items-start w-full px-6 relative z-30">
            <Reveal delay={200}>
              <div className="max-w-md text-right md:text-right mt-12 md:mt-0 pointer-events-auto">
                <h2 className="font-serif text-4xl md:text-6xl text-[#754548] leading-[0.95] font-light tracking-tight mix-blend-multiply">
                  A arte na pele como<br/> 
                  <span className="italic font-normal opacity-80">experiência imersiva.</span>
                </h2>
                <div className="h-[1px] w-16 bg-[#754548]/30 ml-auto my-8"></div>
                <p className="font-sans text-[9px] md:text-[10px] text-stone-500 leading-relaxed tracking-[0.25em] uppercase font-bold">
                  Conectamos história e anatomia<br/> em narrativas visuais perenes.
                </p>
              </div>
            </Reveal>
        </div>

        {/* Centerpiece & Footer of Hero */}
        <div className="w-full flex flex-col items-center justify-end pb-0 relative">
            
            {/* Scroll Indicator */}
            <div className="mb-12 md:mb-16 animate-bounce duration-[3000ms] relative z-30">
                <ArrowDown size={14} className="text-[#754548] opacity-40" />
            </div>

            {/* Info Data - Micro Typography */}
            <div className="absolute bottom-[20vw] md:bottom-[14vw] left-6 md:left-12 z-30 hidden md:block">
               <Reveal>
                  <div className="flex flex-col gap-2 border-l border-[#754548]/20 pl-6">
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-stone-900">Estúdio Privado</span>
                    <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-stone-400">São Paulo, BR</span>
                  </div>
               </Reveal>
            </div>

            {/* Massive Typography */}
            <div className="w-full flex justify-center items-end leading-none z-10 mix-blend-darken pointer-events-none">
                <Reveal delay={300} width="100%">
                    <h1 className="font-sans font-black text-[19vw] text-stone-900 tracking-[-0.06em] text-center leading-[0.75] opacity-[0.95] select-none w-full transform translate-y-4 lg:translate-y-8">
                        WILLIAM
                    </h1>
                </Reveal>
            </div>
        </div>
      </div>

      {/* TRANSITION GRADIENT BOTTOM - Smoother flow to next section */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-[#FAF7F7]/60 to-white z-[20] pointer-events-none"></div>
    </section>
  );
};

export default Hero;