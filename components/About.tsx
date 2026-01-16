import React from 'react';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FDF7F8]">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Typography Header - Spans full width visually */}
          <div className="lg:col-span-12 mb-8 md:mb-16">
             <Reveal>
               <h2 className="text-[12vw] md:text-[8vw] font-serif leading-[0.8] text-rose-300 opacity-30 select-none">
                 ARTISTA
               </h2>
             </Reveal>
          </div>

          {/* Image Block */}
          <div className="lg:col-span-5 relative z-10">
             <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src="https://picsum.photos/600/800?grayscale&random=20" 
                      alt="Portrait" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
                </div>
                <div className="flex gap-4 mt-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1">Manifesto</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 cursor-pointer transition-colors">Processo</span>
                </div>
             </Reveal>
          </div>

          {/* Text Content - Overlapping feeling */}
          <div className="lg:col-span-7 lg:pl-12 pt-8 lg:pt-20">
            <Reveal delay={200}>
                <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
                  Não sigo regras rígidas.<br/>
                  Meu estilo é <span className="italic text-rose-600">liberdade</span>.
                </h3>
            </Reveal>
            
            <Reveal delay={300}>
                <div className="prose prose-lg text-stone-600 font-light space-y-6 max-w-xl">
                  <p>
                    A arte sempre foi minha linguagem. Do design gráfico ao cinema de animação, explorei diversas formas de expressão visual até encontrar na tatuagem o meio definitivo.
                  </p>
                  <p>
                    O Neotradicional me permite mesclar a solidez do clássico com a vibração do contemporâneo. É vibrante, detalhado e, acima de tudo, conceitual. Busco sempre criar uma conexão intrínseca entre a obra e a pessoa que a carrega.
                  </p>
                  <div className="pl-6 border-l-2 border-rose-200 italic text-stone-500 my-8">
                    "Para mim, é extremamente gratificante saber que alguém escolheu carregar um pedaço da minha visão artística pelo resto da vida."
                  </div>
                </div>
            </Reveal>

            <Reveal delay={400}>
                <img src="https://signature.freefire-name.com/img.php?f=7&t=William" alt="Assinatura" className="h-16 mt-12 opacity-80" />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;