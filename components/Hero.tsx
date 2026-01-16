import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex flex-col justify-between overflow-hidden bg-rose-50 bg-noise pt-28 md:pt-40">
      
      {/* Decorative Gradient Blurs */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-rose-200/40 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[100px] opacity-50 animate-pulse pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-20 flex-grow flex flex-col">
        
        {/* Top Content Row - Description Text */}
        <div className="flex justify-end mb-8 md:mb-12">
          <div className="max-w-full md:max-w-xl text-right">
             <p className="font-sans text-base md:text-xl leading-relaxed text-stone-800 font-medium animate-slide-in-right">
               A <span className="font-bold">WILLIAM SIQUEIRA</span> é um estúdio de arte na pele que elabora experiências únicas e perenes. 
               <span className="hidden sm:inline"> Conectamos sua história à sua anatomia, transformando valores e memórias em narrativas visuais neotradicionais.</span>
             </p>
             {/* Mobile only simplified text extension if needed, or keep hidden/inline logic */}
             <p className="font-sans text-base leading-relaxed text-stone-800 font-medium sm:hidden mt-2">
               Conectamos sua história à sua anatomia em narrativas visuais.
             </p>
          </div>
        </div>

        {/* Location Text - Responsive Positioning */}
        {/* Adjusted bottom position to scale with viewport width so it stays above the big name */}
        <div className="absolute left-6 md:left-12 bottom-[20vw] md:bottom-[22vw] z-30">
          <div className="text-left animate-fade-in delay-300">
             <span className="block text-[10px] md:text-xs font-bold tracking-widest uppercase text-rose-600 mb-1 md:mb-2">Localização</span>
             <p className="font-sans font-bold text-stone-900 text-sm md:text-base leading-tight">
               Estúdio Privado<br/>
               São Paulo, Brasil
             </p>
          </div>
        </div>

      </div>

      {/* Massive Bottom Text - WILLIAM */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-end z-10 pointer-events-none select-none">
        {/* Reduced text size from 23vw to 18vw/15vw and removed translate-y to prevent clipping */}
        <h1 className="text-[15vw] md:text-[18vw] font-black text-stone-900 text-center tracking-tighter leading-[0.8] mix-blend-hard-light pb-2 md:pb-4">
          WILLIAM
        </h1>
      </div>

    </section>
  );
};

export default Hero;