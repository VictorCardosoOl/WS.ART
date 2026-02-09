import React from 'react';
import Process from '../components/sections/Process';
import PreCare from '../components/sections/PreCare';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import BookingForm from '../components/sections/BookingForm';
import Reveal from '../components/ui/Reveal';

const RitualHeader: React.FC = () => {
  return (
    <div className="relative pt-40 pb-20 bg-[#F2E8E9] px-6 md:px-12 lg:px-24">
       <div className="max-w-[1920px] mx-auto">
          <Reveal>
             <span className="block font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#754548] mb-4">
                Manual do Cliente
             </span>
             <h1 className="font-serif text-6xl md:text-8xl text-stone-900 leading-[0.9]">
                O Processo
             </h1>
          </Reveal>
          <Reveal delay={200}>
             <p className="mt-8 text-stone-600 font-serif text-xl md:text-2xl italic max-w-2xl leading-relaxed">
                "A tatuagem não começa na agulha, mas na intenção. Aqui detalhamos cada etapa da sua jornada, do preparo à cura."
             </p>
          </Reveal>
       </div>
    </div>
  );
};

const Ritual: React.FC = () => {
  return (
    <>
      <RitualHeader />
      <Process />
      <PreCare />
      <Testimonials />
      <FAQ />
      <BookingForm />
    </>
  );
};

export default Ritual;