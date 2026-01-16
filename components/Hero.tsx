import React from 'react';
import Reveal from './Reveal';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-white">
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-multiply"></div>

      {/* Content Container - Pushes text to bottom */}
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col pt-32 md:pt-40">
        
        {/* Top Section: Intro Text (Right Aligned) */}
        <div className="flex flex-col md:flex-row justify-end items-start w-full flex-grow">
            <Reveal delay={200}>
              <div className="max-w-md text-right md:text-right mt-8 md:mt-0">
                <p className="font-serif text-xl md:text-2xl text-stone-800 leading-relaxed">
                  A <span className="font-bold text-rose-500">WILLIAM SIQUEIRA</span> é um estúdio de arte na pele que elabora experiências únicas e perenes.
                </p>
                <p className="font-sans text-xs md:text-sm text-stone-500 mt-4 leading-relaxed tracking-wide uppercase">
                  Conectamos sua história à sua anatomia, transformando valores e memórias em narrativas visuais neotradicionais.
                </p>
              </div>
            </Reveal>
        </div>

        {/* Middle: CTA & Location */}
        <div className="relative w-full flex justify-between items-end pb-4 md:pb-8 z-20">
            
            {/* Left info */}
            <div className="hidden md:block mb-4">
               <Reveal>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900 mb-2">Estúdio Privado</span>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-rose-500">São Paulo, Brasil</span>
               </Reveal>
            </div>

            {/* Circular CTA Button (Floating above text) */}
            <div className="absolute right-0 bottom-[15vh] md:bottom-[20vh] z-30">
              <Reveal delay={400}>
                <a href="#booking" className="group relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-stone-800 bg-white/50 backdrop-blur-sm hover:bg-stone-900 transition-all duration-500 cursor-pointer">
                   <div className="text-center transition-colors duration-300">
                      <span className="block font-serif italic text-lg md:text-xl text-stone-900 group-hover:text-white">Orçar</span>
                      <span className="block font-sans text-[10px] uppercase tracking-widest text-stone-600 group-hover:text-rose-200">Projeto</span>
                   </div>
                   <ArrowUpRight className="absolute top-2 right-4 w-4 h-4 text-stone-900 group-hover:text-white transition-colors" />
                </a>
              </Reveal>
            </div>
        </div>

        {/* Massive Typography - Anchored firmly to bottom */}
        <div className="w-full flex justify-center items-end leading-none z-10 pb-0 md:pb-0">
           <Reveal delay={300} width="100%">
              <h1 className="font-black text-[22vw] md:text-[23vw] text-rose-400 tracking-tighter text-center leading-[0.75] mix-blend-multiply opacity-100 select-none">
                WILLIAM
              </h1>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Hero;