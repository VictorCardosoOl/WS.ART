import React from 'react';
import { Calendar, Zap } from 'lucide-react';

const FlashDay: React.FC = () => {
  return (
    <section id="flashday" className="py-16 md:py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block p-3 md:p-4 rounded-full bg-rose-600/20 mb-6">
            <Zap className="text-rose-500 w-6 h-6 md:w-8 md:h-8" />
        </div>
        
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6">Flash Day Events</h2>
        <p className="text-stone-300 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
          Eventos especiais com desenhos exclusivos prontos para tatuar. 
          Valores promocionais e atendimento por ordem de chegada.
        </p>
        
        <div className="bg-stone-800/50 p-6 md:p-8 rounded-lg max-w-3xl mx-auto border border-stone-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-left">
                    <Calendar className="text-rose-500 w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
                    <div>
                        <h3 className="text-lg md:text-xl font-medium">Próxima Edição</h3>
                        <p className="text-stone-400 text-sm md:text-base">Fique atento às redes sociais para novas datas</p>
                    </div>
                </div>
                <button className="w-full md:w-auto px-6 py-3 bg-rose-600 hover:bg-rose-700 transition-colors rounded text-sm uppercase tracking-wider font-medium">
                    Avise-me
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FlashDay;