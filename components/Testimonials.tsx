import React from 'react';
import Reveal from './Reveal';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-stone-900 text-stone-200 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <Reveal>
            <h2 className="text-[12vw] font-serif leading-none text-pantone-accent opacity-20 text-center select-none mb-12">
                EMOTION
            </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <Reveal delay={200}>
                <div className="relative">
                    <img 
                        src="https://picsum.photos/800/1000?grayscale&random=99" 
                        alt="Client Emotion" 
                        className="w-full h-auto grayscale contrast-125 brightness-90"
                    />
                    <div className="absolute -bottom-8 -right-8 bg-pantone-accent text-white p-6 w-48 hidden md:block">
                        <span className="font-serif text-3xl italic">"Eterno."</span>
                    </div>
                </div>
            </Reveal>

            <Reveal delay={400}>
                <div className="space-y-12">
                    <div className="border-l border-stone-700 pl-8">
                        <p className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                            "Mais que tinta, William traduziu um momento de luto em beleza pura. O processo foi uma terapia."
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-xs uppercase tracking-widest text-stone-500">Ana Clara, Arquiteta</span>
                        </div>
                    </div>

                    <div className="border-l border-stone-700 pl-8 opacity-60 hover:opacity-100 transition-opacity">
                        <p className="font-serif text-2xl md:text-3xl leading-tight mb-6">
                            "A precisão do traço é surreal, mas a sensibilidade no briefing foi o que me ganhou."
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-xs uppercase tracking-widest text-stone-500">Roberto M., Musico</span>
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