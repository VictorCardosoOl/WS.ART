import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';
import { MessageCircle, Instagram, ArrowUpRight } from 'lucide-react';

const BookingForm: React.FC = () => {
  return (
    <section id="booking" className="py-32 md:py-48 bg-[#FAF7F7]">
      <div className="container mx-auto px-6">
        
        <div className="max-w-5xl mx-auto text-center md:text-left">
            <SectionTitle subtitle="Contato" title="Inicie sua Jornada" align="left" />
            
            <Reveal delay={200}>
                <p className="font-serif text-2xl md:text-3xl text-stone-600 font-light leading-relaxed max-w-3xl mt-[-40px] mb-20">
                    Para garantir um atendimento exclusivo e personalizado, realizamos todo o processo de orçamento e agendamento diretamente através de nossos canais oficiais.
                </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                
                {/* Card WhatsApp */}
                <Reveal delay={300} width="100%">
                    <a 
                        href="https://wa.me/5511999999999" 
                        target="_blank" 
                        rel="noreferrer"
                        className="group relative block bg-white p-10 md:p-14 border border-stone-100 hover:border-[#754548]/30 transition-all duration-500 rounded-sm shadow-sm hover:shadow-xl"
                    >
                        <div className="flex justify-between items-start mb-12">
                            <div className="p-4 bg-[#25D366]/10 text-[#25D366] rounded-full group-hover:scale-110 transition-transform duration-500">
                                <MessageCircle size={32} strokeWidth={1.5} />
                            </div>
                            <ArrowUpRight className="text-stone-300 group-hover:text-[#754548] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" size={24} />
                        </div>
                        
                        <h3 className="font-serif text-3xl text-stone-900 mb-4 group-hover:text-[#754548] transition-colors">WhatsApp</h3>
                        <p className="text-stone-500 font-sans text-sm leading-relaxed mb-8">
                            Canal preferencial para orçamentos rápidos, envio de referências e agendamento de sessões.
                        </p>
                        
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900 border-b border-stone-200 pb-1 group-hover:border-[#754548] transition-colors">
                            Iniciar Conversa
                        </span>
                    </a>
                </Reveal>

                {/* Card Instagram */}
                <Reveal delay={400} width="100%">
                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noreferrer"
                        className="group relative block bg-white p-10 md:p-14 border border-stone-100 hover:border-[#754548]/30 transition-all duration-500 rounded-sm shadow-sm hover:shadow-xl"
                    >
                        <div className="flex justify-between items-start mb-12">
                            <div className="p-4 bg-[#E1306C]/10 text-[#E1306C] rounded-full group-hover:scale-110 transition-transform duration-500">
                                <Instagram size={32} strokeWidth={1.5} />
                            </div>
                            <ArrowUpRight className="text-stone-300 group-hover:text-[#754548] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" size={24} />
                        </div>
                        
                        <h3 className="font-serif text-3xl text-stone-900 mb-4 group-hover:text-[#754548] transition-colors">Instagram</h3>
                        <p className="text-stone-500 font-sans text-sm leading-relaxed mb-8">
                            Acompanhe o portfólio atualizado diariamente, stories do estúdio e avisos de Flash Days.
                        </p>
                        
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900 border-b border-stone-200 pb-1 group-hover:border-[#754548] transition-colors">
                            Seguir Perfil
                        </span>
                    </a>
                </Reveal>

            </div>

            <Reveal delay={500}>
                <div className="mt-16 pt-12 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6 text-stone-400 text-xs uppercase tracking-widest font-medium">
                    <span>São Paulo, SP — Brasil</span>
                    <span>Seg - Sab: 10:00 - 19:00</span>
                    <a href="mailto:contato@williamsiqueira.art" className="hover:text-[#754548] transition-colors">contato@williamsiqueira.art</a>
                </div>
            </Reveal>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;