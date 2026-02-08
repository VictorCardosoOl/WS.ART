import React from 'react';
import { ArrowUpRight, Calendar, Clock, Infinity, Zap } from 'lucide-react';
import Reveal from '../ui/Reveal';

const FlashDay: React.FC = () => {
  return (
    <section id="flashday" className="py-24 md:py-32 bg-white border-b border-stone-100 relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale"
            alt=""
          />
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-rose-200 pb-8">
            <Reveal>
                <div>
                    <span className="text-xs font-bold uppercase tracking-ultra text-rose-500 mb-2 block">Experiências & Eventos</span>
                    <h2 className="font-serif text-5xl md:text-7xl text-stone-900 leading-none">Modalidades</h2>
                </div>
            </Reveal>
            <Reveal delay={200}>
                <div className="mt-8 md:mt-0">
                    <p className="text-stone-500 text-sm max-w-sm text-right leading-relaxed font-sans">
                        Duas formas distintas de materializar sua história.<br/>
                        Escolha entre a energia do coletivo ou a imersão exclusiva.
                    </p>
                </div>
            </Reveal>
        </div>

        {/* Grid de Cards: Evento (Ticket Claro) vs Full Day (VIP Escuro) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* --- CARD 1: FLASH DAY (O Evento) --- */}
            <Reveal width="100%">
                <div className="h-full bg-[#FAF7F7] border border-stone-200 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-rose-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out-expo"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-8 right-8">
                        <div className="bg-white border border-stone-200 px-3 py-1 rounded-full flex items-center gap-2">
                             <Zap size={12} className="text-rose-500 fill-rose-500" />
                             <span className="text-[10px] uppercase font-bold tracking-widest text-stone-600">Evento Coletivo</span>
                        </div>
                    </div>

                    <div className="mt-8 mb-12">
                         <span className="font-serif italic text-2xl text-stone-400">Modelo Clássico</span>
                         <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mt-2 leading-none">Flash Day</h3>
                         <p className="mt-4 text-stone-600 leading-relaxed text-sm max-w-sm">
                            Eventos sazonais onde o estúdio abre as portas para sessões rápidas. Desenhos autorais prontos, valores promocionais e atendimento por ordem de chegada.
                         </p>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-12 border-t border-stone-200 pt-8">
                        <div>
                             <div className="flex items-center gap-2 text-rose-500 mb-2">
                                <Calendar size={18} />
                                <span className="text-xs font-bold uppercase tracking-widest">Data</span>
                             </div>
                             <span className="block font-serif text-xl text-stone-900">15 de Março</span>
                        </div>
                        <div>
                             <div className="flex items-center gap-2 text-rose-500 mb-2">
                                <Clock size={18} />
                                <span className="text-xs font-bold uppercase tracking-widest">Formato</span>
                             </div>
                             <span className="block font-serif text-xl text-stone-900">Walk-in (Chegou, fez)</span>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <button className="w-full py-4 bg-white border border-stone-200 text-stone-900 font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-900 hover:text-white transition-colors flex justify-between items-center px-6 rounded-xl group/btn">
                            <span>Ver Próxima Data</span>
                            <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </Reveal>

            {/* --- CARD 2: FULL DAY (A Experiência) --- */}
            <Reveal width="100%" delay={200}>
                <div className="h-full bg-[#1c1917] text-white p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:shadow-2xl hover:shadow-stone-900/30 transition-all duration-500 flex flex-col justify-between">
                    
                    {/* Background Noise/Texture for Premium Feel */}
                    <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 text-[15rem] text-white opacity-[0.02] font-serif italic font-black select-none pointer-events-none">
                        VIP
                    </div>

                    {/* Badge */}
                    <div className="absolute top-8 right-8 z-20">
                         <div className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
                             <Infinity size={12} className="text-rose-300" />
                             <span className="text-[10px] uppercase font-bold tracking-widest text-stone-300">Exclusivo</span>
                        </div>
                    </div>

                    <div className="mt-8 mb-12 relative z-10">
                         <span className="font-serif italic text-2xl text-stone-500">Imersão Total</span>
                         <h3 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-none">Full Day</h3>
                         <p className="mt-4 text-stone-400 leading-relaxed text-sm max-w-sm">
                            Você "aluga" o artista por um dia inteiro. Ideal para fechamentos, múltiplos projetos pequenos ou para quem viaja de longe. Foco absoluto em você.
                         </p>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-12 border-t border-white/10 pt-8 relative z-10">
                        <div>
                             <div className="flex items-center gap-2 text-rose-300 mb-2">
                                <Clock size={18} />
                                <span className="text-xs font-bold uppercase tracking-widest">Duração</span>
                             </div>
                             <span className="block font-serif text-xl text-stone-200">Diária (6h - 8h)</span>
                        </div>
                        <div>
                             <div className="flex items-center gap-2 text-rose-300 mb-2">
                                <Infinity size={18} />
                                <span className="text-xs font-bold uppercase tracking-widest">Quantidade</span>
                             </div>
                             <span className="block font-serif text-xl text-stone-200">Sem limite de peças</span>
                        </div>
                    </div>

                    <div className="mt-auto relative z-10">
                        <button className="w-full py-4 bg-[#754548] text-white font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-stone-900 transition-colors flex justify-between items-center px-6 rounded-xl group/btn border border-transparent">
                            <span>Consultar Agenda</span>
                            <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </Reveal>

        </div>
      </div>
    </section>
  );
};

export default FlashDay;