import React from 'react';
import Process from '../components/sections/Process';
import Arsenal from '../components/sections/Arsenal'; // New
import PreCare from '../components/sections/PreCare';
import Healing from '../components/sections/Healing'; // New
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import BookingForm from '../components/sections/BookingForm';
import Reveal from '../components/ui/Reveal';
import PageTransition from '../components/layout/PageTransition';

const RitualHeader: React.FC = () => {
  return (
    <div className="relative pt-40 pb-24 bg-[#F2E8E9] px-6 md:px-12 lg:px-24 overflow-hidden">
       {/* Minimalist Background Line */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-[#754548]/20"></div>

       <div className="max-w-[1920px] mx-auto text-center md:text-left">
          <Reveal>
             <span className="block font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#754548] mb-6">
                Manual do Cliente
             </span>
             <h1 className="font-serif text-6xl md:text-[8rem] text-stone-900 leading-[0.85] tracking-tight mb-8">
                O Processo
             </h1>
          </Reveal>
          <Reveal delay={200}>
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-[#754548]/20 pt-12">
                 <p className="text-stone-600 font-serif text-xl md:text-3xl italic max-w-2xl leading-relaxed">
                    "A tatuagem não começa na agulha, mas na intenção. Detalhamos aqui cada etapa da sua jornada, da biossegurança à cura."
                 </p>
                 
                 <div className="flex flex-col gap-2 text-right">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400">Tempo de Leitura</span>
                    <span className="text-stone-900 font-bold text-sm">04 Minutos</span>
                 </div>
             </div>
          </Reveal>
       </div>
    </div>
  );
};

const Ritual: React.FC = () => {
  return (
    <PageTransition>
      <RitualHeader />
      {/* 1. Arsenal: Establish Authority & Safety first */}
      <Arsenal />
      {/* 2. Process: The "How-To" */}
      <Process />
      {/* 3. PreCare: Preparation */}
      <PreCare />
      {/* 4. Healing: Aftercare (Logical sequence after PreCare/Process) */}
      <Healing />
      <Testimonials />
      <FAQ />
      <BookingForm />
    </PageTransition>
  );
};

export default Ritual;