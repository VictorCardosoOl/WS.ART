import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';

const FlashDay: React.FC = () => {
  return (
    <section id="flashday" className="py-24 md:py-32 bg-white border-b border-stone-100 relative overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-rose-200 pb-8">
            <Reveal>
                <div>
                    <span className="text-xs font-bold uppercase tracking-ultra text-rose-500 mb-2 block">Eventos Exclusivos</span>
                    <h2 className="font-serif text-5xl md:text-7xl text-stone-900 leading-none">Flash Days</h2>
                </div>
            </Reveal>
            <Reveal delay={200}>
                <div className="mt-8 md:mt-0">
                    <p className="text-stone-500 text-sm max-w-xs text-right leading-relaxed font-sans">
                        Sessões especiais com desenhos autorais prontos. Atendimento por ordem de chegada e valores únicos.
                    </p>
                </div>
            </Reveal>
        </div>

        {/* Main Content: Ticket/Event Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left: Typography Statement */}
            <div className="relative">
                <Reveal>
                    <div className="text-[10vw] md:text-[6vw] font-black font-sans leading-[0.85] text-stone-100 tracking-tighter select-none absolute -top-12 -left-8 -z-10">
                        LIMITED
                    </div>
                </Reveal>
                
                <Reveal delay={100}>
                    <div className="bg-[#FAF7F7] p-8 md:p-12 border border-stone-100 relative overflow-hidden group rounded-3xl">
                        {/* Decorative Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-rose-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out-expo"></div>
                        
                        <div className="flex justify-between items-start mb-12">
                             <div className="flex flex-col">
                                 <span className="font-serif italic text-2xl text-stone-400">Próxima Edição</span>
                                 <span className="text-4xl md:text-5xl font-bold text-stone-900 mt-2">MARÇO</span>
                                 <span className="text-lg font-medium text-rose-600">Dia 15, 2024</span>
                             </div>
                             <div className="w-16 h-16 border border-stone-200 rounded-full flex items-center justify-center animate-spin-slow">
                                <span className="text-[8px] uppercase tracking-widest text-stone-400">Soon</span>
                             </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                                <span className="text-xs uppercase tracking-widest text-stone-500">Horário</span>
                                <span className="text-sm font-bold text-stone-900">10:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                                <span className="text-xs uppercase tracking-widest text-stone-500">Local</span>
                                <span className="text-sm font-bold text-stone-900">Estúdio Privado, SP</span>
                            </div>
                             <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                                <span className="text-xs uppercase tracking-widest text-stone-500">Artes</span>
                                <span className="text-sm font-bold text-stone-900">15 Designs Exclusivos</span>
                            </div>
                        </div>

                        <div className="mt-10">
                            <button className="w-full py-4 bg-stone-900 text-white font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-rose-800 transition-colors flex justify-between items-center px-6 rounded-xl">
                                <span>Entrar na Lista VIP</span>
                                <ArrowUpRight size={16} />
                            </button>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Right: Info / Image */}
            <div className="relative h-full flex flex-col justify-center">
                <Reveal delay={300}>
                    <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 leading-tight">
                        Arte acessível,<br/> 
                        <span className="italic text-rose-500">qualidade inegociável.</span>
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-8 font-light">
                        Os Flash Days são a oportunidade perfeita para colecionar uma peça original. 
                        Diferente dos projetos sob medida, aqui você escolhe a arte pronta que mais ressoa com você no dia.
                        <br/><br/>
                        <strong className="text-stone-900">Como funciona:</strong> Chegue cedo. Escolha seu desenho no catálogo físico. Tatue no mesmo dia.
                    </p>
                    
                    <a href="https://instagram.com" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-600 hover:text-rose-800 transition-colors border-b border-rose-200 pb-1">
                        Ver prévias no Instagram
                    </a>
                </Reveal>
            </div>

        </div>
      </div>
    </section>
  );
};

export default FlashDay;