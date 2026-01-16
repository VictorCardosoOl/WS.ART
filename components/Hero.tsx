import React from 'react';
import Reveal from './Reveal';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-end overflow-hidden bg-[#fff0f3]">
      
      {/* Texture Overlay for Pantone Feel */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-multiply"></div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-between pt-32 md:pt-40 pb-0">
        
        {/* Top Section: Intro Text (Right Aligned) */}
        <div className="flex flex-col md:flex-row justify-end items-start w-full">
            <Reveal delay={200}>
              <div className="max-w-md text-right md:text-right">
                <p className="font-serif text-xl md:text-2xl text-stone-800 leading-relaxed">
                  A <span className="font-bold text-rose-500">WILLIAM SIQUEIRA</span> é um estúdio de arte na pele que elabora experiências únicas e perenes.
                </p>
                <p className="font-sans text-xs md:text-sm text-stone-500 mt-4 leading-relaxed tracking-wide uppercase">
                  Conectamos sua história à sua anatomia, transformando valores e memórias em narrativas visuais neotradicionais.
                </p>
              </div>
            </Reveal>
        </div>

        {/* Middle/Bottom: Circular CTA & Location */}
        <div className="flex justify-between items-end mb-4 md:mb-12 relative">
            
            {/* Left info */}
            <div className="hidden md:block mb-8">
               <Reveal>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900 mb-2">Estúdio Privado</span>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-rose-500">São Paulo, Brasil</span>
               </Reveal>
            </div>

            {/* Circular CTA Button (Floating) */}
            <div className="absolute right-0 bottom-24 md:bottom-32 z-20">
              <Reveal delay={400}>
                <a href="#booking" className="group relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-stone-800 hover:bg-stone-900 transition-all duration-500 cursor-pointer">
                   <div className="text-center transition-colors duration-300">
                      <span className="block font-serif italic text-lg md:text-xl text-stone-900 group-hover:text-white">Orçar</span>
                      <span className="block font-sans text-[10px] uppercase tracking-widest text-stone-600 group-hover:text-rose-200">Projeto</span>
                   </div>
                   <ArrowUpRight className="absolute top-2 right-4 w-4 h-4 text-stone-900 group-hover:text-white transition-colors" />
                </a>
              </Reveal>
            </div>
        </div>
      </div>

      {/* Massive Typography - Anchored to bottom, cropped */}
      <div className="relative w-full overflow-hidden leading-none flex justify-center z-10">
         <Reveal delay={300} width="100%">
            <h1 className="font-black text-[27vw] text-stone-900 tracking-tighter text-center leading-[0.75] transform translate-y-[5%] mix-blend-multiply opacity-95">
              WILLIAM
            </h1>
         </Reveal>
      </div>

    </section>
  );
};

export default Hero;