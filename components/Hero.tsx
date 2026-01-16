import React from 'react';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  return (
    // Changed bg-white to bg-rose-50 (Pink Hero)
    <section className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-rose-50">
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none mix-blend-multiply"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col pt-32 md:pt-40 pb-0">
        
        {/* Top Section: Intro Text (Right Aligned) */}
        <div className="flex flex-col md:flex-row justify-end items-start w-full flex-grow">
            <Reveal delay={200}>
              <div className="max-w-md text-right md:text-right mt-8 md:mt-0">
                <p className="font-serif text-2xl md:text-3xl text-stone-900 leading-snug font-light">
                  A <span className="font-bold text-rose-500">WILLIAM SIQUEIRA</span> é um estúdio de arte na pele que elabora experiências únicas.
                </p>
                <p className="font-sans text-[11px] md:text-xs text-stone-600 mt-6 leading-relaxed tracking-[0.15em] uppercase font-bold">
                  Conectamos sua história à sua anatomia,<br/> transformando valores em narrativas visuais.
                </p>
              </div>
            </Reveal>
        </div>

        {/* Middle/Bottom Information (Left Aligned) */}
        <div className="relative w-full flex justify-between items-end pb-8 md:pb-12 z-20">
            <div className="block">
               <Reveal>
                  <div className="flex flex-col gap-1">
                    <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-stone-900">Estúdio Privado</span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rose-600">São Paulo, Brasil</span>
                  </div>
               </Reveal>
            </div>
        </div>

        {/* Massive Typography - BLACK & THICK */}
        <div className="w-full flex justify-center items-end leading-none z-10 pb-0 md:pb-0 px-2 md:px-0">
           <Reveal delay={300} width="100%">
              {/* Changed text-rose-400 to text-stone-950 (Black) and ensured font-black (weight 900) */}
              <h1 className="font-sans font-black text-[19.5vw] text-stone-950 tracking-tighter text-center leading-[0.75] mix-blend-multiply opacity-90 select-none w-full transform translate-y-2">
                WILLIAM
              </h1>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Hero;