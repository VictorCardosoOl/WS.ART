import React from 'react';
import Reveal from '../ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* PARTE 1: TEXTO EDITORIAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-24 md:mb-32">
            {/* Coluna Esquerda Vazia */}
            <div className="hidden lg:block"></div>

            {/* Coluna Direita: Conteúdo */}
            <div className="flex flex-col justify-center items-start lg:pl-12">
                <Reveal>
                    <h2 className="font-sans font-medium text-5xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-tighter text-stone-900 uppercase mb-8">
                        Eu sou William Siqueira, e eu <span className="text-stone-400">materializo</span> histórias.
                    </h2>
                </Reveal>

                <Reveal delay={200}>
                    <div className="flex flex-col md:flex-row items-end md:items-start justify-between w-full gap-8 mt-4">
                        <p className="font-serif text-xl md:text-2xl text-stone-600 leading-relaxed max-w-md">
                            Especialista em Neotradicional. Transformo narrativas pessoais em anatomia e arte perene.
                        </p>
                        {/* Botão removido conforme solicitado */}
                    </div>
                </Reveal>
            </div>
        </div>

        {/* PARTE 2: GRID DE 3 IMAGENS (Niveladas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
            
            {/* Imagem 01 */}
            <Reveal delay={100} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
                    <img 
                        src="https://picsum.photos/800/1066?grayscale&random=101" 
                        alt="Processo Criativo" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                </div>
            </Reveal>

            {/* Imagem 02 - Margem removida para alinhar */}
            <Reveal delay={200} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
                    <img 
                        src="https://picsum.photos/800/1066?grayscale&random=102" 
                        alt="Retrato William Siqueira" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                </div>
            </Reveal>

            {/* Imagem 03 - Margem removida para alinhar */}
            <Reveal delay={300} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
                    <img 
                        src="https://picsum.photos/800/1066?grayscale&random=103" 
                        alt="Detalhe Estúdio" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                </div>
            </Reveal>

        </div>

      </div>
    </section>
  );
};

export default About;