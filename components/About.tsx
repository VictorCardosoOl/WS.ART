import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
             <div className="absolute inset-0 bg-rose-100 transform translate-x-4 translate-y-4 rounded-sm"></div>
             <img 
               src="https://picsum.photos/600/800?grayscale" 
               alt="William Siqueira trabalhando" 
               className="relative rounded-sm shadow-xl w-full object-cover h-[500px] md:h-[600px]"
             />
          </div>

          {/* Text Side */}
          <div>
            <SectionTitle subtitle="A Jornada" title="Do papel para a pele" align="left" />
            
            <div className="prose prose-stone text-stone-600 space-y-6 font-light text-lg">
              <p>
                A arte sempre foi minha linguagem. Do design gráfico ao cinema de animação, explorei diversas formas de expressão visual até encontrar na tatuagem o meio definitivo para minha criatividade.
              </p>
              <p>
                Não sigo regras rígidas. Meu estilo, o <strong>Neotradicional</strong>, é uma arte livre. É vibrante, detalhado e, acima de tudo, conceitual. 
              </p>
              <p>
                Para mim, é extremamente gratificante saber que alguém escolheu carregar um pedaço da minha visão artística pelo resto da vida. Minha arte cruza fronteiras e visita lugares que talvez eu nunca conheça.
              </p>
              
              <div className="pt-6 border-t border-rose-100 mt-8">
                <h3 className="font-serif text-2xl text-stone-800 mb-4">Além da Tattoo</h3>
                <ul className="grid grid-cols-2 gap-4 text-sm">
                  <li className="flex items-center text-stone-500">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span> Cobertura (Cover-up)
                  </li>
                  <li className="flex items-center text-stone-500">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span> Reforma de Antigas
                  </li>
                  <li className="flex items-center text-stone-500">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span> Prints & Quadros
                  </li>
                  <li className="flex items-center text-stone-500">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span> Projetos Autorais
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;