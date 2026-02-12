import React from 'react';
import { ArrowRight, Calendar, Clock, Crown, Ticket, Zap, CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal';

const FlashDay: React.FC = () => {
  return (
    <section id="flashday" className="py-24 md:py-32 bg-stone-50 border-b border-stone-100 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-100/40 via-transparent to-transparent"></div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
            <Reveal>
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[1px] w-8 bg-rose-400"></div>
                        <span className="text-xs font-bold font-sans uppercase tracking-widest text-rose-500">Agendamento & Eventos</span>
                    </div>
                    <h2 className="font-display font-medium text-fluid-h2 text-stone-900 leading-[1.0] tracking-tighter uppercase">
                        Escolha sua<br />
                        <span className="text-stone-400">Experiência.</span>
                    </h2>
                </div>
            </Reveal>
            <Reveal delay={200}>
                <div className="mt-8 md:mt-0 max-w-md text-right">
                    <p className="text-stone-500 text-sm leading-luxury font-medium font-sans">
                        Da adrenalina dos eventos coletivos à quietude de uma sessão exclusiva.
                        Duas formas de integrar arte à sua pele.
                    </p>
                </div>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            
            <Reveal width="100%">
                <div className="relative group h-full min-h-[600px] bg-[#FAF9F6] rounded-sm overflow-hidden border border-stone-100 hover:border-rose-200 transition-colors duration-500 flex flex-col">
                    
                    {/* Background com tons suaves (Candy Color) e Imagem */}
                    <div className="absolute inset-0">
                         {/* Imagem de Fundo Suave */}
                         <img 
                            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop" 
                            alt="Artistic Pastel Background" 
                            className="w-full h-full object-cover opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                        />
                         {/* Overlay Candy Color */}
                         <div className="absolute inset-0 bg-gradient-to-br from-rose-100/90 via-pink-50/80 to-white/60 mix-blend-overlay"></div>
                    </div>
                    
                    <div className="relative z-10 p-8 md:p-12 flex justify-between items-start">
                        <div className="bg-white/80 backdrop-blur-sm text-[#754548] px-3 py-1 text-[10px] font-bold font-sans uppercase tracking-widest inline-flex items-center gap-2 rounded-full border border-rose-100">
                            <Zap size={12} className="fill-[#754548]" />
                            Flash Day
                        </div>
                        <Ticket size={24} className="text-stone-400 group-hover:text-[#754548] transition-colors" strokeWidth={1} />
                    </div>

                    <div className="relative z-10 px-8 md:px-12 flex-grow flex flex-col justify-center">
                        <span className="text-[120px] leading-none font-display font-bold text-[#754548] absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none opacity-[0.05] select-none group-hover:opacity-[0.1] transition-opacity">01</span>
                        
                        <h3 className="font-display font-medium text-4xl md:text-5xl text-stone-900 relative z-10 mb-4 uppercase tracking-tight leading-[0.95]">
                            Sessões Rápidas <br/>
                            <span className="text-stone-500">& Catálogo Pronto</span>
                        </h3>
                        <p className="text-stone-600 text-sm leading-luxury font-sans max-w-sm relative z-10 mb-8">
                            O estúdio abre as portas para o público. Desenhos autorais pré-definidos, valores especiais e atendimento por ordem de chegada.
                        </p>

                        <ul className="space-y-3 relative z-10 mb-8">
                            <li className="flex items-center gap-3 text-xs font-bold font-sans uppercase tracking-widest text-stone-600">
                                <CheckCircle2 size={14} className="text-rose-400" /> Desenhos Exclusivos do Dia
                            </li>
                            <li className="flex items-center gap-3 text-xs font-bold font-sans uppercase tracking-widest text-stone-600">
                                <CheckCircle2 size={14} className="text-rose-400" /> Valores Promocionais
                            </li>
                            <li className="flex items-center gap-3 text-xs font-bold font-sans uppercase tracking-widest text-stone-600">
                                <CheckCircle2 size={14} className="text-rose-400" /> Ordem de Chegada
                            </li>
                        </ul>
                    </div>

                    <div className="relative z-10 p-8 md:p-12 border-t border-rose-100/50 mt-auto bg-white/60 backdrop-blur-sm group-hover:bg-white/80 transition-colors duration-500">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-stone-500">
                                <Calendar size={16} />
                                <span className="text-xs font-bold font-sans uppercase tracking-widest">Próxima Data:</span>
                            </div>
                            <span className="text-stone-900 font-display font-bold text-lg">15 . OUT</span>
                        </div>
                        <button className="w-full py-4 bg-[#754548] text-white text-xs font-bold font-sans uppercase tracking-widest hover:bg-stone-900 transition-colors flex items-center justify-center gap-3 group/btn shadow-lg shadow-rose-200/50 hover:shadow-none">
                            Ver Designs Disponíveis
                            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </Reveal>

            <Reveal width="100%" delay={200}>
                <div className="relative group h-full min-h-[600px] bg-[#0c0a09] rounded-sm overflow-hidden text-white flex flex-col shadow-2xl shadow-stone-900/20 border border-transparent">
                    
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                        <img 
                            src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1000&auto=format&fit=crop" 
                            alt="Ink Texture" 
                            className="w-full h-full object-cover mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="relative z-10 p-8 md:p-12 flex justify-between items-start">
                        <div className="bg-rose-900/80 text-rose-100 border border-rose-800/30 px-3 py-1 text-[10px] font-bold font-sans uppercase tracking-widest inline-flex items-center gap-2">
                            <Crown size={12} />
                            Experiência VIP
                        </div>
                        <Clock size={24} className="text-stone-600 group-hover:text-rose-200 transition-colors" strokeWidth={1} />
                    </div>

                    <div className="relative z-10 px-8 md:px-12 flex-grow flex flex-col justify-center">
                        <span className="text-[120px] leading-none font-display font-bold text-white absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none opacity-[0.03] select-none">02</span>

                        <h3 className="font-display font-medium text-4xl md:text-5xl text-white relative z-10 mb-4 uppercase tracking-tight leading-[0.95]">
                            Full Day <br/>
                            <span className="text-rose-200/60">& Imersão Total</span>
                        </h3>
                        <p className="text-stone-400 text-sm leading-luxury font-sans max-w-sm relative z-10 mb-8">
                            Você "aluga" o artista por um dia inteiro. Foco absoluto no seu projeto, sem pressa. Ideal para fechamentos de braço/costas.
                        </p>

                        <ul className="space-y-3 relative z-10 mb-8">
                            <li className="flex items-center gap-3 text-xs font-bold font-sans uppercase tracking-widest text-stone-400">
                                <CheckCircle2 size={14} className="text-rose-400" /> Diária Fechada (6h - 8h)
                            </li>
                            <li className="flex items-center gap-3 text-xs font-bold font-sans uppercase tracking-widest text-stone-400">
                                <CheckCircle2 size={14} className="text-rose-400" /> Projetos Autorais Extensos
                            </li>
                            <li className="flex items-center gap-3 text-xs font-bold font-sans uppercase tracking-widest text-stone-400">
                                <CheckCircle2 size={14} className="text-rose-400" /> Privacidade Total
                            </li>
                        </ul>
                    </div>

                    <div className="relative z-10 p-8 md:p-12 border-t border-white/10 mt-auto bg-black/20 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-4">
                             <div className="flex items-center gap-2 text-stone-400">
                                <Calendar size={16} />
                                <span className="text-xs font-bold font-sans uppercase tracking-widest">Disponibilidade:</span>
                            </div>
                            <span className="text-white font-display font-bold text-lg">Sob Consulta</span>
                        </div>
                        <button className="w-full py-4 bg-white text-stone-950 text-xs font-bold font-sans uppercase tracking-widest hover:bg-rose-200 transition-colors flex items-center justify-center gap-3 group/btn">
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