import React from 'react';
import Reveal from './Reveal';
import FluidBackground from './FluidBackground';

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 text-white overflow-hidden">
      
      {/* O Fundo Evangelion entra aqui */}
      <div className="absolute inset-0 z-0">
        <FluidBackground />
      </div>

      {/* Camada escura suave para garantir que o texto branco seja legível sobre o colorido */}
      <div className="absolute inset-0 bg-stone-900/40 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <Reveal>
            {/* Mudei a cor do título para branco/mistura para destacar no fundo colorido */}
            <h2 className="text-[12vw] font-serif leading-none text-white opacity-30 text-center select-none mb-12 mix-blend-overlay">
                EMOTION
            </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <Reveal delay={200}>
                <div className="relative">
                    <img 
                        src="https://picsum.photos/800/1000?grayscale&random=99" 
                        alt="Client Emotion" 
                        // Adicionei shadow para destacar a imagem do fundo vibrante
                        className="w-full h-auto grayscale contrast-125 brightness-90 shadow-2xl"
                    />
                    <div className="absolute -bottom-8 -right-8 bg-white text-stone-900 p-6 w-48 hidden md:block shadow-lg">
                        <span className="font-serif text-3xl italic">"Eterno."</span>
                    </div>
                </div>
            </Reveal>

            <Reveal delay={400}>
                {/* Adicionei um backdrop-blur leve nos textos para leitura perfeita */}
                <div className="space-y-12 md:bg-stone-900/20 md:backdrop-blur-sm md:p-8 rounded-lg">
                    <div className="border-l border-white/30 pl-8">
                        <p className="font-serif text-3xl md:text-4xl leading-tight mb-6 drop-shadow-md">
                            "Mais que tinta, William traduziu um momento de luto em beleza pura. O processo foi uma terapia."
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-xs uppercase tracking-widest text-stone-300">Ana Clara, Arquiteta</span>
                        </div>
                    </div>

                    <div className="border-l border-white/30 pl-8 opacity-80 hover:opacity-100 transition-opacity">
                        <p className="font-serif text-2xl md:text-3xl leading-tight mb-6 drop-shadow-md">
                            "A precisão do traço é surreal, mas a sensibilidade no briefing foi o que me ganhou."
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-xs uppercase tracking-widest text-stone-300">Roberto M., Musico</span>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;