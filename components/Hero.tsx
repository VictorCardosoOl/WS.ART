import React from 'react';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#FAF7F7]">
      
      {/* LAYER 1: GRAIN OVERLAY */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none z-[1]"></div>

      {/* TRANSITION GRADIENT BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-white z-[2] pointer-events-none"></div>

      {/* LAYER 2: CONTENT */}
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col pt-32 md:pt-40 pb-0">
        
        {/* Intro Text Block */}
        <div className="flex flex-col md:flex-row justify-end items-start w-full flex-grow pointer-events-none">
            <Reveal delay={200}>
              <div className="max-w-md text-right md:text-right mt-8 md:mt-0 pointer-events-auto">
                <h2 className="font-serif text-3xl md:text-4xl text-rose-900 leading-[1.1] font-light tracking-tight">
                  A <span className="font-semibold text-rose-800">WILLIAM SIQUEIRA</span> é um estúdio de arte na pele que elabora experiências únicas.
                </h2>
                <p className="font-sans text-[11px] md:text-xs text-stone-600 mt-6 leading-relaxed tracking-widest uppercase font-bold">
                  Conectamos sua história à sua anatomia,<br/> transformando valores em narrativas visuais.
                </p>
              </div>
            </Reveal>
        </div>

        {/* Info Line */}
        <div className="relative w-full flex justify-between items-end pb-8 md:pb-12 z-20 pointer-events-none">
            <div className="block pointer-events-auto">
               <Reveal>
                  <div className="flex flex-col gap-2">
                    <span className="block text-[10px] font-black uppercase tracking-ultra text-stone-900 border-l-2 border-stone-900 pl-3">Estúdio Privado</span>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-rose-800 pl-3">São Paulo, Brasil</span>
                  </div>
               </Reveal>
            </div>
        </div>

        {/* Massive Typography */}
        <div className="w-full flex justify-center items-end leading-none z-10 pb-0 md:pb-0 px-2 md:px-0">
           <Reveal delay={300} width="100%">
              <h1 className="font-sans font-black text-[19.5vw] text-stone-900 tracking-negative-lg text-center leading-[0.75] opacity-[0.95] select-none w-full transform translate-y-2 lg:translate-y-4">
                WILLIAM
              </h1>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Hero;