import React from 'react';
import Reveal from '../ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-[#FDFBF7] overflow-hidden">
      
      {/* Background Decorativo Sutil */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FAF7F7] -z-0 hidden lg:block"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* COLUNA ESQUERDA: IMAGEM STICKY (O Retrato acompanha a leitura) */}
          <div className="w-full lg:w-5/12 relative">
             <div className="lg:sticky lg:top-32">
                <Reveal width="100%">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-xl">
                        <img 
                          src="https://picsum.photos/800/1000?grayscale&random=50" 
                          alt="William Siqueira Portrait" 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] scale-105 hover:scale-100"
                        />
                        {/* Assinatura ou Selo sobre a imagem */}
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2">
                             <span className="font-serif italic text-stone-900 text-lg">William Siqueira</span>
                        </div>
                    </div>
                </Reveal>
                
                {/* Citação Destacada */}
                <Reveal delay={200}>
                    <div className="mt-8 border-l-2 border-[#754548] pl-6 py-2 hidden lg:block">
                        <p className="font-serif text-xl italic text-stone-500 leading-relaxed">
                            "A anatomia não é um limite, é o guia. A tatuagem deve parecer que nasceu com você."
                        </p>
                    </div>
                </Reveal>
             </div>
          </div>

          {/* COLUNA DIREITA: MANIFESTO (Texto Rolável) */}
          <div className="w-full lg:w-7/12 pt-8 lg:pt-0">
             <Reveal>
                <div className="flex items-center gap-4 mb-10">
                    <span className="h-[1px] w-12 bg-[#754548]"></span>
                    <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#754548]">
                        Manifesto
                    </h2>
                </div>
             </Reveal>

             <Reveal delay={150}>
                <h3 className="text-4xl md:text-6xl font-serif text-stone-900 leading-[1.1] mb-12 tracking-tight">
                    Não tatuamos apenas pele.<br/>
                    <span className="italic text-stone-400">Eternizamos memórias.</span>
                </h3>
             </Reveal>
             
             <div className="space-y-10 text-stone-600 font-light text-lg leading-loose md:pr-12">
                <Reveal delay={200}>
                    <p>
                        <span className="text-4xl float-left mr-3 mt-[-6px] font-serif text-[#754548]">A</span>
                        arte sempre foi minha linguagem primária. Do design gráfico clássico ao cinema de animação, explorei diversas formas de expressão visual até encontrar na tatuagem o meio definitivo de conexão humana.
                    </p>
                </Reveal>
                
                <Reveal delay={250}>
                    <p>
                        Acredito que uma tatuagem não é um adesivo colocado sobre o corpo, mas uma intervenção que deve respeitar a fluidez muscular e a curvatura natural da anatomia.
                    </p>
                </Reveal>

                <Reveal delay={300}>
                    <div className="bg-white p-8 border border-stone-100 shadow-sm rounded-sm my-8">
                        <h4 className="font-serif text-2xl text-stone-900 mb-4">O Estilo Neotradicional</h4>
                        <p className="text-base text-stone-500 mb-0">
                            Me permite mesclar a solidez do traço clássico com a vibração e a liberdade do contemporâneo. É vibrante, detalhado e, acima de tudo, conceitual. Cada peça é desenhada exclusivamente para o cliente, sem cópias, sem repetições.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={350}>
                    <p>
                        Meu estúdio privado foi concebido para ser um santuário de criatividade e conforto, longe do caos das lojas de rua tradicionais. Aqui, o foco é 100% na sua história e na nossa arte.
                    </p>
                </Reveal>
             </div>
             
             {/* Assinatura Visual */}
             <Reveal delay={400}>
                 <div className="mt-20 opacity-60 mix-blend-multiply">
                    <img 
                        src="https://signature.freefire-name.com/img.php?f=7&t=William%20Siqueira" 
                        alt="Signature" 
                        className="h-24 w-auto"
                    />
                 </div>
             </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;