import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          {/* Using aspect-ratio to maintain shape across all devices */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none order-2 lg:order-1">
             <div className="absolute inset-0 bg-rose-200 transform translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 rounded-sm"></div>
             <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-xl">
                <img 
                  src="https://picsum.photos/600/800?grayscale" 
                  alt="William Siqueira trabalhando" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
             </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col items-start text-left order-1 lg:order-2">
            <SectionTitle subtitle="Sobre o Artista" title="William Siqueira" align="left" />
            
            <div className="prose prose-stone text-stone-600 space-y-4 md:space-y-6 font-light text-base md:text-lg leading-relaxed w-full">
              <p>
                A arte sempre foi minha linguagem. Do design gráfico ao cinema de animação, explorei diversas formas de expressão visual até encontrar na tatuagem o meio definitivo para minha criatividade.
              </p>
              <p>
                Não sigo regras rígidas. Meu estilo, o <strong className="font-medium text-stone-900">Neotradicional</strong>, é uma arte livre. É vibrante, detalhado e, acima de tudo, conceitual. Busco sempre criar uma conexão entre a obra e a pessoa que a carrega.
              </p>
              <p>
                Para mim, é extremamente gratificante saber que alguém escolheu carregar um pedaço da minha visão artística pelo resto da vida. Meu estúdio é um espaço privado, pensado para oferecer conforto e uma experiência artística imersiva.
              </p>
              
              <div className="mt-8">
                <img src="https://signature.freefire-name.com/img.php?f=7&t=William%20Siqueira" alt="Assinatura" className="h-12 opacity-60 mix-blend-multiply" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;