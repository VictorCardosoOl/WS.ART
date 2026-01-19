import React from 'react';
import Reveal from '../ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-[#FDF7F8] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Layout Assimétrico para tensão visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative">
          
          {/* Typography Background - Depth Layer */}
          <div className="absolute top-0 left-0 w-full pointer-events-none select-none overflow-hidden -z-10 translate-y-[-20%]">
             <Reveal>
               <h2 className="text-[20vw] font-serif leading-none text-rose-300 opacity-[0.08] whitespace-nowrap ml-[-10vw]">
                 MANIFESTO
               </h2>
             </Reveal>
          </div>

          {/* Image Block - Movido para extrema esquerda com muito espaço negativo */}
          <div className="lg:col-span-5 relative z-10 mt-12 lg:mt-0">
             <Reveal>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl mr-8 lg:mr-0">
                    <img 
                      src="https://picsum.photos/600/800?grayscale&random=20" 
                      alt="Portrait" 
                      className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[1.5s] ease-out-expo"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
                </div>
                {/* Legenda técnica editorial */}
                <div className="flex justify-between mt-4 border-t border-stone-300 pt-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900">Siqueira, W.</span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">Desde 2018</span>
                </div>
             </Reveal>
          </div>

          {/* Spacer Column - O Luxo do Vazio */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Text Content - Alinhado e refinado */}
          <div className="lg:col-span-6 pt-8 lg:pt-0">
            <Reveal delay={200}>
                <h3 className="font-serif text-5xl md:text-6xl text-stone-900 mb-12 leading-[0.95] -ml-1 lg:-ml-2">
                  Não sigo regras.<br/>
                  Meu estilo é <span className="italic text-rose-600 font-light">liberdade</span>.
                </h3>
            </Reveal>
            
            <Reveal delay={300}>
                <div className="text-stone-600 font-light text-lg space-y-8 max-w-md leading-relaxed">
                  <p>
                    A arte sempre foi minha linguagem. Do design gráfico ao cinema de animação, explorei diversas formas de expressão visual até encontrar na tatuagem o meio definitivo.
                  </p>
                  <p>
                    O Neotradicional me permite mesclar a solidez do clássico com a vibração do contemporâneo. É vibrante, detalhado e, acima de tudo, conceitual.
                  </p>
                </div>
            </Reveal>
            
            <Reveal delay={400}>
                <div className="mt-16 pl-8 border-l border-rose-300">
                    <p className="text-stone-500 italic font-serif text-xl">
                    "Criar uma conexão intrínseca entre a obra e a pessoa que a carrega."
                    </p>
                </div>
            </Reveal>

            {/* Assinatura */}
            <Reveal delay={500}>
                <img 
                    src="https://signature.freefire-name.com/img.php?f=7&t=William" 
                    alt="Assinatura" 
                    className="h-20 mt-16 opacity-60 mix-blend-multiply ml-auto lg:ml-0" 
                />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;