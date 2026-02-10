import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { ArrowUpRight, MessageCircle, Instagram } from 'lucide-react';
import Reveal from '../ui/Reveal';
import BookingModal from '../ui/BookingModal';

const BookingForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="booking" className="py-32 md:py-48 bg-[#FAF7F7] text-stone-900 scroll-mt-20 relative overflow-hidden">
      
      {/* Modal Component */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Background Noise Texture (Subtil no claro) */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <SectionTitle subtitle="Contato" title="Inicie sua Jornada" align='left' />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 mt-20 items-center">
            
            {/* Coluna Esquerda: Texto de Apoio */}
            <div>
                <Reveal>
                    <p className="font-serif text-3xl md:text-5xl text-stone-800 font-light leading-tight mb-12">
                        Pronto para transformar sua ideia em arte perene?
                    </p>
                </Reveal>
                <Reveal delay={200}>
                    <p className="text-stone-600 text-lg md:text-xl leading-relaxed max-w-xl font-light">
                        Atualmente, para garantir um atendimento mais próximo e dinâmico, utilizamos nosso Concierge Digital para pré-avaliar seu projeto antes do contato direto.
                        <br/><br/>
                        Isso nos permite trocar referências visuais com agilidade e alinhar expectativas para o seu projeto exclusivo.
                    </p>
                </Reveal>

                <div className="mt-16 border-l border-[#754548] pl-8 py-2">
                    <p className="text-[#754548] text-sm uppercase tracking-widest mb-2 font-bold">Estúdio Privado</p>
                    <p className="text-stone-900 text-lg font-serif">Av. Paulista, São Paulo - SP</p>
                    <p className="text-stone-500 text-xs mt-2">*Endereço completo enviado após confirmação.</p>
                </div>
            </div>

            {/* Coluna Direita: Cards de Ação */}
            <div className="flex flex-col gap-6">
                
                {/* Concierge Card (Modal Trigger) */}
                <Reveal delay={300} width="100%">
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="group relative block w-full bg-[#1c1917] text-white p-8 md:p-10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-stone-200 text-left cursor-pointer"
                    >
                        {/* Ícone de fundo sutil */}
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                             <MessageCircle size={120} strokeWidth={1} />
                        </div>
                        
                        <div className="relative z-10 flex flex-col items-start h-full justify-between min-h-[160px]">
                            <div className="bg-[#754548] text-white p-3 rounded-full mb-4">
                                <MessageCircle size={32} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold font-sans tracking-tight mb-2">Concierge Digital</h3>
                                <p className="text-stone-400 text-sm md:text-base font-medium">Orçamentos e Agendamento</p>
                            </div>
                            <div className="absolute bottom-8 right-8 bg-white text-stone-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:pr-6 transition-all">
                                Iniciar Aplicação <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </button>
                </Reveal>

                {/* Instagram Card (Secondary) */}
                <Reveal delay={400} width="100%">
                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noreferrer"
                        className="group relative block w-full bg-white text-stone-900 p-8 md:p-10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 border border-stone-200 hover:border-[#754548] shadow-sm"
                    >
                         <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity text-stone-900">
                             <Instagram size={120} strokeWidth={1} />
                        </div>

                        <div className="relative z-10 flex flex-col items-start h-full justify-between min-h-[140px]">
                            <div className="bg-stone-100 p-3 rounded-full mb-4 group-hover:bg-[#754548] group-hover:text-white transition-colors">
                                <Instagram size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-sans tracking-tight mb-1">Instagram</h3>
                                <p className="text-stone-500 text-sm">Portfólio atualizado diariamente</p>
                            </div>
                            <div className="absolute bottom-8 right-8 text-stone-400 flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-[#754548] transition-colors">
                                Seguir <ArrowUpRight size={14} />
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