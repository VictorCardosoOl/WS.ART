import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import Reveal from '../ui/Reveal';

const BookingForm: React.FC = () => {
  return (
    <section id="booking" className="py-32 md:py-48 bg-[#FAF7F7] text-stone-900 scroll-mt-20 relative overflow-hidden">
      
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="mb-24">
             <Reveal>
                <span className="text-[#754548] text-xs font-bold uppercase tracking-[0.3em]">Contato</span>
             </Reveal>
             <Reveal delay={100}>
                <h2 className="font-serif text-6xl md:text-8xl mt-6 leading-none tracking-tight">
                    Inicie sua<br/> <span className="italic text-[#754548]">Aplicação</span>.
                </h2>
             </Reveal>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            
            <div>
                <Reveal>
                    <p className="font-serif text-2xl md:text-4xl text-stone-800 font-light leading-tight mb-12">
                        Estou aceitando novos projetos para o próximo trimestre.
                    </p>
                </Reveal>
                <Reveal delay={200}>
                    <p className="text-stone-600 text-lg leading-relaxed max-w-xl font-light">
                        Devido à natureza imersiva do meu trabalho, as vagas são limitadas.
                        Para iniciar o processo de curadoria do seu projeto, entre em contato diretamente via WhatsApp.
                        <br/><br/>
                        Discutiremos o conceito, a anatomia e o <strong className="font-medium text-stone-900">investimento</strong> necessário para sua obra.
                    </p>
                </Reveal>

                <div className="mt-16 flex flex-col gap-8">
                     <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#754548] mb-1">Localização</span>
                        <span className="font-serif text-xl">Estúdio Privado, Av. Paulista</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#754548] mb-1">Status da Agenda</span>
                        <span className="font-serif text-xl">Abertura para Março/2024</span>
                     </div>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                
                <Reveal delay={300} width="100%">
                    <a 
                        href="https://wa.me/5511999999999" 
                        target="_blank" 
                        rel="noreferrer"
                        className="group relative block w-full bg-[#1c1917] text-white p-12 rounded-sm overflow-hidden hover:scale-[1.01] transition-transform duration-500 shadow-2xl"
                    >
                        <div className="relative z-10 flex flex-col items-start h-full justify-between min-h-[200px]">
                            <div className="w-full flex justify-between items-start">
                                <MessageCircle size={40} strokeWidth={1} />
                                <ArrowUpRight size={24} />
                            </div>
                            
                            <div className="mt-12">
                                <h3 className="text-4xl font-serif italic mb-2">Aplicar para Sessão</h3>
                                <p className="text-stone-400 text-sm font-sans uppercase tracking-widest">Via WhatsApp</p>
                            </div>
                        </div>
                    </a>
                </Reveal>

            </div>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;