import React from 'react';
import { ArrowRight, Calendar, Clock, Crown, Ticket, Zap, CheckCircle2 } from 'lucide-react';
import Reveal from '../ui/Reveal';

const FlashDay: React.FC = () => {
  return (
    <section id="flashday" className="py-24 md:py-32 bg-[#EBE8E8] relative overflow-hidden">
      
      {/* Background Texture: Wall/Concrete vibe */}
      <div className="absolute inset-0 opacity-[0.6] pointer-events-none mix-blend-multiply filter contrast-125 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
            <Reveal>
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        {/* Fita adesiva decorativa */}
                        <div className="w-12 h-4 bg-[#D48C95]/40 rotate-[-5deg] backdrop-blur-sm"></div>
                        <span className="text-xs font-bold font-sans uppercase tracking-widest text-stone-500">Eventos & Agenda</span>
                    </div>
                    <h2 className="font-display font-bold text-6xl md:text-8xl text-stone-900 leading-[0.85] tracking-tighter uppercase transform -rotate-1">
                        O Muro<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#754548] to-stone-800">de Ofertas.</span>
                    </h2>
                </div>
            </Reveal>
            <Reveal delay={200}>
                <div className="mt-8 md:mt-0 max-w-md text-right relative">
                    <p className="font-hand text-2xl text-stone-600 rotate-2">
                        "Da correria do Flash à imersão do Full Day..."
                    </p>
                </div>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            
            {/* POSTER 1: FLASH DAY (Visual Wheatpaste / Papel Colado) */}
            <Reveal width="100%">
                <div className="relative group min-h-[600px] bg-[#F5F5F0] shadow-2xl transition-transform duration-500 hover:rotate-1 hover:scale-[1.01] flex flex-col"
                     style={{ clipPath: "polygon(2% 0, 100% 1%, 99% 98%, 0% 100%)" }}>
                    
                    {/* Tape Effect */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/60 rotate-2 z-20 backdrop-blur-sm shadow-sm"></div>

                    {/* Image Layer with Halftone/Grain */}
                    <div className="absolute inset-0 z-0">
                         <img 
                            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop" 
                            alt="Background" 
                            className="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F0] via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="relative z-10 p-8 md:p-12 flex justify-between items-start">
                        <div className="bg-[#1c1917] text-white px-4 py-2 text-xl font-hand rotate-[-3deg] shadow-lg">
                            Flash Day !!
                        </div>
                        <Ticket size={32} className="text-[#1c1917] rotate-12" strokeWidth={1.5} />
                    </div>

                    <div className="relative z-10 px-8 md:px-12 flex-grow flex flex-col justify-center">
                        <h3 className="font-display font-black text-5xl md:text-7xl text-stone-900 mb-2 uppercase tracking-tight leading-[0.9] mix-blend-darken">
                            Sessões<br/>Rápidas
                        </h3>
                        <p className="font-hand text-2xl text-[#754548] mb-8 rotate-[-1deg]">
                            ( Ordem de chegada. Sem frescura. )
                        </p>

                        <ul className="space-y-4 relative z-10 mb-8 bg-white/60 p-6 backdrop-blur-sm transform rotate-1 border border-stone-200">
                            <li className="flex items-center gap-3 text-sm font-bold font-sans uppercase tracking-widest text-stone-900">
                                <CheckCircle2 size={16} className="text-[#754548]" /> Designs Exclusivos
                            </li>
                            <li className="flex items-center gap-3 text-sm font-bold font-sans uppercase tracking-widest text-stone-900">
                                <CheckCircle2 size={16} className="text-[#754548]" /> Valores Promocionais
                            </li>
                        </ul>
                    </div>

                    <div className="relative z-10 p-8 md:p-12 border-t-2 border-dashed border-stone-300 mt-auto bg-[#F5F5F0]">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold font-sans uppercase tracking-widest bg-stone-200 px-2 py-1">Próxima Data</span>
                            </div>
                            <span className="text-[#754548] font-hand text-3xl font-bold rotate-[-2deg]">15 . OUT</span>
                        </div>
                        <button className="w-full py-4 bg-[#1c1917] text-white text-sm font-bold font-sans uppercase tracking-widest hover:bg-[#754548] transition-colors flex items-center justify-center gap-3 group/btn shadow-xl transform group-hover:translate-y-[-2px]">
                            Ver Catálogo
                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </Reveal>

            {/* POSTER 2: FULL DAY (Visual Black Poster / Underground) */}
            <Reveal width="100%" delay={200}>
                <div className="relative group min-h-[600px] bg-[#1c1917] shadow-2xl transition-transform duration-500 hover:rotate-[-1deg] hover:scale-[1.01] flex flex-col text-white"
                     style={{ clipPath: "polygon(0% 2%, 98% 0%, 100% 100%, 2% 99%)" }}>
                    
                    {/* Tape Effect */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/20 rotate-[-2deg] z-20 backdrop-blur-sm"></div>
                    
                    {/* Background Noise */}
                    <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>

                    <div className="relative z-10 p-8 md:p-12 flex justify-between items-start">
                        <div className="bg-white text-black px-4 py-2 text-xl font-hand rotate-[2deg] shadow-lg border border-black">
                            VIP . Premium
                        </div>
                        <Crown size={32} className="text-white opacity-80" strokeWidth={1} />
                    </div>

                    <div className="relative z-10 px-8 md:px-12 flex-grow flex flex-col justify-center">
                        <h3 className="font-display font-black text-5xl md:text-7xl text-white mb-2 uppercase tracking-tight leading-[0.9]">
                            Full Day<br/>Imersão
                        </h3>
                        <p className="font-hand text-2xl text-stone-400 mb-8 rotate-[1deg]">
                            ( Você é o único cliente do dia. )
                        </p>

                        <div className="bg-stone-800/50 p-6 backdrop-blur-sm transform rotate-[-1deg] border border-stone-700">
                             <p className="text-stone-300 text-sm leading-relaxed font-sans font-light">
                                Foco absoluto. Sem interrupções. Ideal para fechamentos grandes (Sleeves/Costas) e projetos complexos que exigem tempo.
                             </p>
                        </div>
                    </div>

                    <div className="relative z-10 p-8 md:p-12 border-t-2 border-dashed border-stone-800 mt-auto bg-[#1c1917]">
                        <div className="flex items-center justify-between mb-4">
                             <span className="text-xs font-bold font-sans uppercase tracking-widest bg-stone-800 px-2 py-1 text-stone-400">Disponibilidade</span>
                            <span className="text-white font-hand text-2xl">Sob Consulta</span>
                        </div>
                        <button className="w-full py-4 bg-white text-black text-sm font-bold font-sans uppercase tracking-widest hover:bg-stone-300 transition-colors flex items-center justify-center gap-3 group/btn shadow-xl transform group-hover:translate-y-[-2px]">
                            Solicitar Orçamento
                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
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