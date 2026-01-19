import React from 'react';
import Reveal from '../ui/Reveal';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#FAF7F7] px-4 md:px-6">
      
      {/* FRAME BORDER - Elevated Z-Index to sit ON TOP of content */}
      <div className="absolute inset-4 md:inset-6 border border-[#754548]/30 pointer-events-none z-20 rounded-sm"></div>

      {/* DEPTH OF FIELD LAYER */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[40%] bg-[#754548]/5 blur-[100px] rounded-full pointer-events-none z-[2]"></div>
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[50%] bg-rose-200/20 blur-[120px] rounded-full pointer-events-none z-[1]"></div>

      {/* TRANSITION GRADIENT BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#FAF7F7] z-[2] pointer-events-none"></div>

      {/* ROTATING BADGE - "Authentic Ink" - Overlapping the border */}
      <div className="absolute top-28 right-2 md:right-4 z-30 hidden md:block mix-blend-multiply opacity-80">
         <Reveal delay={500}>
            <div className="relative w-24 h-24 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text className="text-[11px] font-bold uppercase tracking-[0.2em] fill-[#754548]">
                        <textPath href="#circlePath" startOffset="0%">
                            • William Siqueira • Fine Art Tattoo •
                        </textPath>
                    </text>
                </svg>
            </div>
         </Reveal>
      </div>

      {/* LAYER 2: CONTENT */}
      <div className="container mx-auto relative z-10 h-full flex flex-col pt-28 md:pt-40 pb-0 justify-between">
        
        {/* Intro Text Block - CONTRASTE EXTREMO (Micro Typography) */}
        <div className="flex flex-col md:flex-row justify-end items-start w-full px-4 md:px-6 relative z-30">
            <Reveal delay={200}>
              <div className="max-w-lg text-right md:text-right mt-8 md:mt-0 pointer-events-auto">
                <h2 className="font-serif text-4xl md:text-6xl text-[#754548] leading-[0.95] font-light tracking-tight mb-8">
                  A arte na pele como<br/> 
                  <span className="italic font-normal opacity-80">experiência imersiva.</span>
                </h2>
                
                {/* MICRO TYPOGRAPHY */}
                <div className="flex justify-end items-center gap-6">
                    <div className="h-[1px] w-8 bg-[#754548]/40"></div>
                    <p className="font-sans text-[10px] text-stone-500 leading-none tracking-[0.3em] uppercase font-bold">
                      Anatomia & Narrativa Visual
                    </p>
                </div>
              </div>
            </Reveal>
        </div>

        {/* Centerpiece & Footer of Hero */}
        <div className="w-full flex flex-col items-center justify-end pb-0 relative">
            
            {/* Scroll Indicator */}
            <div className="mb-8 md:mb-12 animate-pulse duration-[3000ms] relative z-30 flex flex-col items-center gap-2 opacity-60">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#754548]">Scroll</span>
                <ArrowDown size={14} className="text-[#754548]" />
            </div>

            {/* Info Data */}
            <div className="absolute bottom-[22vw] md:bottom-[15vw] left-4 md:left-0 z-30 hidden md:block mix-blend-multiply">
               <Reveal>
                  <div className="flex flex-col gap-3 border-l border-[#754548]/30 pl-4 md:pl-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900">Estúdio Privado</span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400">Av. Paulista — SP</span>
                  </div>
               </Reveal>
            </div>

            {/* Massive Typography - BEHIND BORDER (Z-10 < Border Z-20) */}
            <div className="w-full flex justify-center items-end leading-none z-10 mix-blend-darken pointer-events-none">
                <Reveal delay={300} width="100%">
                    <h1 className="font-sans font-black text-[19vw] md:text-[21vw] text-black tracking-tighter text-center leading-[0.75] opacity-[0.95] select-none w-full transform translate-y-4 md:translate-y-10">
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