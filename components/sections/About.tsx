import React from 'react';
import Reveal from '../ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-[#FDF7F8] overflow-hidden">
      
      {/* TEXTURAL TYPOGRAPHY BACKGROUND */}
      <div className="absolute top-20 right-[-5%] text-mega text-rose-200/20 font-serif italic pointer-events-none select-none z-0 whitespace-nowrap rotate-6 mix-blend-multiply">
        Soul & Ink
      </div>
      
      <div className="absolute bottom-40 left-[-10%] text-[20vw] font-black text-rose-100/30 pointer-events-none select-none z-0 leading-none mix-blend-multiply">
        VISION
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
          
          {/* Typography Header - Extreme Kerning */}
          <div className="lg:col-span-12 mb-12 md:mb-24 relative">
             <Reveal>
               <h2 className="text-[14vw] md:text-[11vw] font-serif leading-[0.75] tracking-tighter text-rose-300 opacity-25 select-none mix-blend-multiply">
                 ARTISTA
               </h2>
             </Reveal>
             
             {/* Vertical Text Indicator */}
             <div className="hidden lg:block absolute right-0 top-0 h-full">
                 <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-rose-400 [writing-mode:vertical-rl] rotate-180">
                    Manifesto Visual 2024
                 </span>
             </div>
          </div>

          {/* Image Block with Asymmetry */}
          <div className="lg:col-span-5 relative z-10 lg:translate-y-12">
             <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl cursor-hover group">
                    <img 
                      src="https://picsum.photos/600/800?grayscale&random=20" 
                      alt="Portrait" 
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
                </div>
                <div className="flex gap-8 mt-8 pl-1">
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-stone-900 border-b border-stone-900 pb-1 cursor-default">Manifesto</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-stone-400 hover:text-stone-900 cursor-pointer transition-colors cursor-hover">Processo</span>
                </div>
             </Reveal>
          </div>

          {/* Text Content - High Contrast Typography */}
          <div className="lg:col-span-7 lg:pl-20 pt-12 lg:pt-32">
            <Reveal delay={200}>
                <h3 className="font-serif text-5xl md:text-6xl font-medium text-stone-900 mb-10 leading-[0.95] tracking-tight">
                  Não sigo regras rígidas.<br/>
                  Meu estilo é <span className="italic text-rose-700 font-normal">liberdade</span>.
                </h3>
            </Reveal>
            
            <Reveal delay={300}>
                {/* IMPROVED CONTRAST: text-stone-700 instead of 600, leading-loose */}
                <div className="prose prose-lg text-stone-700 font-light space-y-8 max-w-xl">
                  <p className="leading-loose text-lg">
                    A arte sempre foi minha linguagem. Do design gráfico ao cinema de animação, explorei diversas formas de expressão visual até encontrar na tatuagem o meio definitivo.
                  </p>
                  <p className="leading-loose text-lg">
                    O Neotradicional me permite mesclar a solidez do clássico com a vibração do contemporâneo. É vibrante, detalhado e, acima de tudo, conceitual. Busco sempre criar uma conexão intrínseca entre a obra e a pessoa que a carrega.
                  </p>
                  <div className="pl-8 border-l border-rose-300 italic text-stone-500 my-12 text-xl font-serif leading-relaxed">
                    "Para mim, é extremamente gratificante saber que alguém escolheu carregar um pedaço da minha visão artística pelo resto da vida."
                  </div>
                </div>
            </Reveal>

            {/* Assinatura */}
            <Reveal delay={400}>
                <img 
                    src="https://signature.freefire-name.com/img.php?f=7&t=William" 
                    alt="Assinatura" 
                    className="h-20 mt-16 opacity-70 mix-blend-multiply" 
                />
            </Reveal>
          </div>

        </div>
      </div>

      {/* SEPARATOR: Gradient Fade to Next Section (Process - #F2E8E9) */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#F2E8E9] pointer-events-none z-10"></div>
    </section>
  );
};

export default About;