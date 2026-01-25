import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';

const FlashDay: React.FC = () => {
  return (
    <section id="flashday" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-stone-100 pb-8">
            <SectionTitle 
                subtitle="Eventos" 
                title="Flash Days" 
                align="left" 
            />
            <Reveal delay={200}>
                <p className="font-sans text-xs text-stone-500 max-w-xs text-right leading-relaxed tracking-wide md:mb-8 mt-4 md:mt-0">
                    Sessões especiais com desenhos autorais prontos. Atendimento por ordem de chegada.
                </p>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Ticket Card */}
            <div className="relative">
                <Reveal>
                    <div className="font-sans font-black text-[15vw] lg:text-[10vw] leading-[0.8] text-stone-100 tracking-tighter select-none absolute -top-10 -left-10 -z-10">
                        LIMITED
                    </div>
                </Reveal>
                
                <Reveal delay={100}>
                    <div className="bg-[#FAF7F7] p-8 md:p-12 border border-stone-100 relative overflow-hidden group rounded-sm shadow-sm hover:shadow-md transition-shadow">
                        <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
                        
                        <div className="flex justify-between items-start mb-12">
                             <div className="flex flex-col">
                                 <span className="font-serif text-2xl text-stone-400 tracking-tight">Próxima Edição</span>
                                 <span className="font-serif text-5xl font-bold text-stone-900 mt-2 tracking-tighter">MARÇO</span>
                                 <span className="font-sans text-meta font-bold text-rose-600 mt-1">DIA 15, 2024</span>
                             </div>
                             <div className="w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center animate-spin-slow">
                                <span className="font-sans text-[8px] font-bold uppercase tracking-widest text-stone-400">Soon</span>
                             </div>
                        </div>

                        <div className="flex flex-col gap-4 font-sans text-sm">
                            {[
                                { l: "Horário", v: "10:00 - 19:00" },
                                { l: "Local", v: "Estúdio Privado, SP" },
                                { l: "Artes", v: "15 Designs Exclusivos" }
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-stone-200 pb-2">
                                    <span className="text-xs uppercase tracking-widest text-stone-500">{row.l}</span>
                                    <span className="font-bold text-stone-900">{row.v}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <button className="w-full py-4 bg-stone-900 text-white font-sans text-meta font-bold uppercase hover:bg-rose-800 transition-colors flex justify-between items-center px-6 rounded-sm group-hover:pl-8">
                                <span>Entrar na Lista VIP</span>
                                <ArrowUpRight size={16} />
                            </button>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Info */}
            <div className="relative h-full flex flex-col justify-center">
                <Reveal delay={300}>
                    <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 leading-tight tracking-tight uppercase font-semibold">
                        Arte acessível,<br/> 
                        <span className="text-rose-500">qualidade inegociável.</span>
                    </h3>
                    <p className="font-sans text-stone-600 leading-relaxed mb-8 font-light tracking-wide">
                        Os Flash Days são a oportunidade perfeita para colecionar uma peça original. 
                        Diferente dos projetos sob medida, aqui você escolhe a arte pronta que mais ressoa com você no dia.
                    </p>
                    
                    <a href="https://instagram.com" className="inline-flex items-center gap-2 font-sans text-meta font-bold text-rose-600 hover:text-stone-900 transition-colors border-b border-rose-200 pb-1">
                        Ver prévias no Instagram
                    </a>
                </Reveal>
            </div>

        </div>
      </div>
      
      {/* Separator Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#F5F5F5] opacity-50 z-10 pointer-events-none"></div>
    </section>
  );
};

export default FlashDay;