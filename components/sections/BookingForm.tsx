import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';
import { MessageCircle, Instagram, ArrowUpRight } from 'lucide-react';

const BookingForm: React.FC = () => {
  return (
    <section id="booking" className="py-32 md:py-48 bg-gradient-to-b from-[#FAF7F7] to-[#F2E8E9] relative overflow-hidden">
      
      {/* Texture Overlay Only Here */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <SectionTitle 
            number="05"
            subtitle="Contato"
            title="Sua Jornada"
            align="center"
        />

        <div className="max-w-3xl mx-auto text-center mt-[-60px] mb-20">
             <Reveal delay={200}>
                <p className="font-sans text-stone-500 font-light leading-relaxed text-sm md:text-base tracking-wide">
                    Para garantir a exclusividade de cada projeto, realizamos todo o processo de curadoria e agendamento através de nossos canais diretos.
                </p>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* WhatsApp Card - Artistic */}
            <Reveal delay={300} width="100%">
                <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group relative h-[300px] bg-white border border-stone-100 p-8 flex flex-col justify-between hover:border-[#754548]/30 transition-all duration-700 rounded-sm shadow-sm hover:shadow-2xl overflow-hidden"
                >
                    {/* Background Hover Effect */}
                    <div className="absolute inset-0 bg-[#754548]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out-expo"></div>
                    
                    <div className="relative z-10 flex justify-between items-start">
                        <MessageCircle size={32} strokeWidth={1} className="text-[#754548]" />
                        <ArrowUpRight size={24} className="text-stone-300 group-hover:text-[#754548] transition-colors" />
                    </div>

                    <div className="relative z-10">
                        <h3 className="font-serif text-4xl text-stone-900 mb-2 group-hover:italic transition-all">WhatsApp</h3>
                        <p className="text-stone-500 text-xs uppercase tracking-widest">Orçamentos & Agendamentos</p>
                    </div>
                </a>
            </Reveal>

            {/* Instagram Card - Artistic */}
            <Reveal delay={400} width="100%">
                <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group relative h-[300px] bg-white border border-stone-100 p-8 flex flex-col justify-between hover:border-[#754548]/30 transition-all duration-700 rounded-sm shadow-sm hover:shadow-2xl overflow-hidden"
                >
                     {/* Background Hover Effect */}
                     <div className="absolute inset-0 bg-[#754548]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out-expo"></div>

                    <div className="relative z-10 flex justify-between items-start">
                        <Instagram size={32} strokeWidth={1} className="text-[#754548]" />
                        <ArrowUpRight size={24} className="text-stone-300 group-hover:text-[#754548] transition-colors" />
                    </div>

                    <div className="relative z-10">
                        <h3 className="font-serif text-4xl text-stone-900 mb-2 group-hover:italic transition-all">Instagram</h3>
                        <p className="text-stone-500 text-xs uppercase tracking-widest">Portfólio & Lifestyle</p>
                    </div>
                </a>
            </Reveal>

        </div>

        <Reveal delay={500}>
            <div className="mt-24 flex flex-col items-center justify-center space-y-4">
                <div className="h-12 w-[1px] bg-[#754548]/30"></div>
                <div className="text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Estúdio Privado</p>
                    <p className="text-xs text-stone-500 font-serif italic mt-1">Av. Paulista, São Paulo - Brasil</p>
                </div>
            </div>
        </Reveal>

      </div>
    </section>
  );
};

export default BookingForm;