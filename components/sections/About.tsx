import React from 'react';
import Reveal from '../ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-[#FDF7F8]">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
          
          {/* Typography Header - Extreme Kerning */}
          <div className="lg:col-span-12 mb-12 md:mb-24">
             <Reveal>
               <h2 className="text-[14vw] md:text-[11vw] font-serif leading-[0.75] tracking-tighter text-rose-300 opacity-25 select-none mix-blend-multiply">
                 ARTISTA
               </h2>
             </Reveal>
          </div>

          {/* Image Block */}
          <div className="lg:col-span-5 relative z-10">
             <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
                    <img 
                      src="https://picsum.photos/600/800?grayscale&random=20" 
                      alt="Portrait" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
                </div>
                <div className="flex gap-8 mt-8 pl-1">
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-stone-900 border-b border-stone-900 pb-1 cursor-default">Manifesto</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-stone-400 hover:text-stone-900 cursor-pointer transition-colors">Processo</span>
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
                <div className="prose prose-lg text-stone-600 font-light space-y-8 max-w-xl">
                  <p className="leading-relaxed">
                    A arte sempre foi minha linguagem. Do design gráfico ao cinema de animação, explorei diversas formas de expressão visual até encontrar na tatuagem o meio definitivo.
                  </p>
                  <p className="leading-relaxed">
                    O Neotradicional me permite mesclar a solidez do clássico com a vibração do contemporâneo. É vibrante, detalhado e, acima de tudo, conceitual. Busco sempre criar uma conexão intrínseca entre a obra e a pessoa que a carrega.
                  </p>
                  <div className="pl-8 border-l border-rose-300 italic text-stone-500 my-12 text-xl font-serif">
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