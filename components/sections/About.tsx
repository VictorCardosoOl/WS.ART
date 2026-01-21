import React from 'react';
import Reveal from '../ui/Reveal';
import { ArrowDown } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-[#FAF7F7] overflow-hidden">
      
      {/* BACKGROUND TYPOGRAPHY DECORATION */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none select-none z-0 mix-blend-multiply opacity-[0.03]">
         <span className="text-[30vw] font-serif leading-none text-stone-900 whitespace-nowrap ml-[-5vw]">
           ARTIST
         </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* COMPOSITION WRAPPER */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start relative">
          
          {/* LEFT COLUMN: TEXT BLOCK (Pushed down) */}
          <div className="w-full lg:w-5/12 pt-0 lg:pt-32 relative z-20 order-2 lg:order-1">
             <Reveal>
                <div className="bg-white p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.03)] max-w-md ml-auto lg:mr-[-4rem]">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#754548] mb-6 block">
                        Manifesto
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight mb-8">
                        Não tatuamos apenas pele.<br/>
                        <span className="italic text-stone-400">Eternizamos memórias.</span>
                    </h3>
                    <div className="text-stone-600 font-light text-sm md:text-base space-y-6 leading-relaxed">
                        <p>
                            A arte sempre foi minha linguagem. Do design gráfico ao cinema de animação, explorei diversas formas de expressão visual até encontrar na tatuagem o meio definitivo.
                        </p>
                        <p>
                            O Neotradicional me permite mesclar a solidez do clássico com a vibração do contemporâneo. É vibrante, detalhado e, acima de tudo, conceitual.
                        </p>
                    </div>
                    
                    <div className="mt-10 flex items-center gap-4">
                        <div className="h-[1px] w-12 bg-stone-200"></div>
                        <span className="font-serif italic text-lg text-stone-400">William Siqueira</span>
                    </div>
                </div>
             </Reveal>
          </div>

          {/* RIGHT COLUMN: VISUAL HERO (Pushed up & Left negative margin) */}
          <div className="w-full lg:w-7/12 relative z-10 order-1 lg:order-2 mb-12 lg:mb-0">
             <Reveal delay={200}>
                <div className="relative pl-0 lg:pl-12">
                    {/* Main Image */}
                    <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm w-full lg:w-[90%] ml-auto">
                        <img 
                          src="https://picsum.photos/800/1000?grayscale&random=50" 
                          alt="Artist Portrait" 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-out-expo"
                        />
                        {/* Grain/Texture Overlay */}
                        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
                    </div>

                    {/* Floating Decorative Elements (Kasia Siwosz Style) */}
                    <div className="absolute -bottom-6 -left-4 lg:bottom-12 lg:-left-8 bg-[#754548] text-white p-6 md:p-8 max-w-[200px] z-30 hidden md:block">
                        <p className="font-serif italic text-xl leading-tight">
                            "A anatomia dita o fluxo da arte."
                        </p>
                    </div>

                    {/* Big Number */}
                    <div className="absolute -top-12 right-0 lg:-right-12 text-[120px] font-serif text-stone-100 mix-blend-darken -z-10 leading-none select-none">
                        '18
                    </div>
                </div>
             </Reveal>
          </div>

        </div>
        
        {/* SCROLL INDICATOR (Subtle) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-24 hidden lg:flex flex-col items-center gap-2 opacity-50">
            <span className="text-[9px] uppercase tracking-widest text-stone-400">Processo</span>
            <div className="h-12 w-[1px] bg-stone-300"></div>
        </div>

      </div>
    </section>
  );
};

export default About;