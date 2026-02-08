import React from 'react';
import { ArrowRight, Calendar, Clock, Crown, Ticket, Zap, CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal';

const FlashDay: React.FC = () => {
  return (
    <section id="flashday" className="py-24 md:py-32 bg-stone-50 border-b border-stone-200 relative overflow-hidden">
      
      {/* Background Decorativo Global */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-100/40 via-transparent to-transparent"></div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
            <Reveal>
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[1px] w-8 bg-rose-400"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-rose-500">Agendamento & Eventos</span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-7xl text-stone-900 leading-[0.9] tracking-tight">
                        Escolha sua<br />
                        <span className="italic text-stone-400">Experiência.</span>
                    </h2>
                </div>
            </Reveal>
            <Reveal delay={200}>
                <div className="mt-8 md:mt-0 max-w-md text-right">
                    <p className="text-stone-500 text-sm leading-relaxed font-medium">
                        Da adrenalina dos eventos coletivos à quietude de uma sessão exclusiva.
                        Duas formas de integrar arte à sua pele.
                    </p>
                </div>
            </Reveal>
        </div>

        {/* Grid de Cards Contrastantes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            
            {/* --- CARD 1: FLASH DAY (Raw / Organic Style) --- */}
            <Reveal width="100%">
                <div className="relative group h-full min-h-[600px] bg-[#FAF9F6] rounded-sm overflow-hidden border border-stone-200 hover:border-stone-300 transition-colors duration-500 flex flex-col">
                    
                    {/* Background Texture: Sketches */}
                    <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none mix-blend-multiply">
                        <img 
                            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=1000&auto=format&fit=crop" 
                            alt="Sketches Background" 
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                    
                    {/* Top Tag */}
                    <div className="relative z-10 p-8 md:p-12 flex justify-between items-start">
                        <div className="bg-stone-900 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-2">
                            <Zap size={12} className="fill-white" />
                            Flash Day
                        </div>
                        <Ticket size={24} className="text-stone-300 group-hover:text-stone-900 transition-colors" strokeWidth={1} />
                    </div>

                    {/* Content Body */}
                    <div className="relative z-10 px-8 md:px-12 flex-grow flex flex-col justify-center">
                        <span className="text-[120px] leading-none font-serif text-stone-100 absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none mix-blend-multiply select-none group-hover:text-stone-200 transition-colors">01</span>
                        
                        <h3 className="font-serif text-4xl md:text-5xl text-stone-900 relative z-10 mb-4">
                            Sessões Rápidas <br/>
                            <span className="italic text-stone-400">& Catálogo Pronto</span>
                        </h3>
                        <p className="text-stone-600 text-sm leading-relaxed max-w-sm relative z-10 mb-8">
                            O estúdio abre as portas para o público. Desenhos autorais pré-definidos, valores especiais e atendimento por ordem de chegada. A oportunidade perfeita para colecionar peças menores.
                        </p>

                        <ul className="space-y-3 relative z-10 mb-8">
                            <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-stone-500">
                                <CheckCircle2 size={14} className="text-rose-500" /> Desenhos Exclusivos do Dia
                            </li>
                            <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-stone-500">
                                <CheckCircle2 size={14} className="text-rose-500" /> Valores Promocionais
                            </li>
                            <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-stone-500">
                                <CheckCircle2 size={14} className="text-rose-500" /> Ordem de Chegada
                            </li>
                        </ul>
                    </div>

                    {/* Footer / CTA */}
                    <div className="relative z-10 p-8 md:p-12 border-t border-stone-200 mt-auto bg-white/50 backdrop-blur-sm group-hover:bg-white transition-colors duration-500">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-stone-500">
                                <Calendar size={16} />
                                <span className="text-xs font-bold uppercase tracking-widest">Próxima Data:</span>
                            </div>
                            <span className="text-stone-900 font-serif font-bold text-lg">15 . OUT</span>
                        </div>
                        <button className="w-full py-4 bg-stone-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-rose-900 transition-colors flex items-center justify-center gap-3 group/btn">
                            Ver Designs Disponíveis
                            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </Reveal>

            {/* --- CARD 2: FULL DAY (Premium / Noir Style) --- */}
            <Reveal width="100%" delay={200}>
                <div className="relative group h-full min-h-[600px] bg-[#0c0a09] rounded-sm overflow-hidden text-white flex flex-col shadow-2xl shadow-stone-900/20">
                    
                    {/* Background Texture: Ink/Noise */}
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                        <img 
                            src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop" 
                            alt="Ink Texture" 
                            className="w-full h-full object-cover mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Top Tag */}
                    <div className="relative z-10 p-8 md:p-12 flex justify-between items-start">
                        <div className="bg-rose-900/80 text-rose-100 border border-rose-800/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-2">
                            <Crown size={12} />
                            Experiência VIP
                        </div>
                        <Clock size={24} className="text-stone-600 group-hover:text-rose-200 transition-colors" strokeWidth={1} />
                    </div>

                    {/* Content Body */}
                    <div className="relative z-10 px-8 md:px-12 flex-grow flex flex-col justify-center">
                        <span className="text-[120px] leading-none font-serif text-white absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none opacity-[0.03] select-none">02</span>

                        <h3 className="font-serif text-4xl md:text-5xl text-white relative z-10 mb-4">
                            Full Day <br/>
                            <span className="italic text-rose-200/60">& Imersão Total</span>
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed max-w-sm relative z-10 mb-8">
                            Você "aluga" o artista por um dia inteiro. Foco absoluto no seu projeto, sem pressa. Ideal para fechamentos de braço/costas ou múltiplos projetos menores em uma única sessão.
                        </p>

                        <ul className="space-y-3 relative z-10 mb-8">
                            <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-stone-400">
                                <CheckCircle2 size={14} className="text-rose-400" /> Diária Fechada (6h - 8h)
                            </li>
                            <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-stone-400">
                                <CheckCircle2 size={14} className="text-rose-400" /> Projetos Autorais Extensos
                            </li>
                            <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-stone-400">
                                <CheckCircle2 size={14} className="text-rose-400" /> Privacidade Total
                            </li>
                        </ul>
                    </div>

                    {/* Footer / CTA */}
                    <div className="relative z-10 p-8 md:p-12 border-t border-white/10 mt-auto bg-black/20 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-4">
                             <div className="flex items-center gap-2 text-stone-400">
                                <Calendar size={16} />
                                <span className="text-xs font-bold uppercase tracking-widest">Disponibilidade:</span>
                            </div>
                            <span className="text-white font-serif font-bold text-lg">Sob Consulta</span>
                        </div>
                        <button className="w-full py-4 bg-white text-stone-950 text-xs font-bold uppercase tracking-[0.2em] hover:bg-rose-200 transition-colors flex items-center justify-center gap-3 group/btn">
                            Solicitar Orçamento Full Day
                            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
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