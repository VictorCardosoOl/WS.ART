import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-rose-50 bg-noise pt-24 pb-0 md:pt-32">
      
      {/* Decorative Gradient Blurs (Subtler now to match clean aesthetic of reference) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-pulse pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col">
        
        {/* Top Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Empty Left Space (or Logo area if we weren't using Navbar) */}
          <div className="hidden md:block md:col-span-6"></div>

          {/* Right Text Block */}
          <div className="md:col-span-6 flex flex-col items-end text-right md:text-right">
             <div className="max-w-xl">
               <p className="font-sans text-lg md:text-xl leading-relaxed text-stone-800 font-medium animate-slide-in-right">
                 A <span className="font-bold">WILLIAM SIQUEIRA</span> é um estúdio de arte na pele que elabora experiências únicas e perenes. 
                 Conectamos sua história à sua anatomia, transformando valores e memórias em narrativas visuais neotradicionais. 
                 Nossa missão é criar uma conexão emocional profunda através da tinta.
               </p>
             </div>
          </div>
        </div>

        {/* Middle Indicators Row */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 text-xs md:text-sm font-bold tracking-widest uppercase text-stone-900 mt-auto mb-4 md:mb-12 items-end">
          <div className="col-span-1 md:col-span-3 text-left animate-fade-in delay-300">
            Estúdio Privado<br/>São Paulo, Brasil
          </div>
          
          <div className="col-span-1 md:col-span-3 text-right md:text-center animate-fade-in delay-500">
            +10 Anos de<br/>Verdadeira Arte
          </div>
          
          {/* CTA Circle (simulating the 'Conectar' from reference) */}
          <div className="col-span-2 md:col-span-6 flex justify-center md:justify-end mt-6 md:mt-0 animate-fade-in delay-700">
            <a href="#booking" className="group relative inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-stone-800 hover:bg-stone-900 hover:text-white transition-all duration-300 cursor-pointer">
              <span className="font-serif text-xl italic relative z-10 group-hover:scale-110 transition-transform">Orçar<br/>Projeto</span>
              {/* Scribble effect could be an SVG here, simpler to just use border-radius for now or a custom SVG background */}
              <svg className="absolute w-full h-full text-stone-800 group-hover:text-white transition-colors opacity-0 group-hover:opacity-20" viewBox="0 0 100 100">
                 <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Massive Bottom Text */}
      <div className="relative w-full overflow-hidden leading-[0.75] select-none pointer-events-none">
        <h1 className="text-[22vw] font-black text-stone-900 text-center tracking-tighter transform translate-y-[10%] animate-slide-up whitespace-nowrap">
          SIQUEIRA
        </h1>
        
        {/* Overlay texture or distress effect on text if possible - using mix-blend to make it integrate */}
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-50"></div>
      </div>

    </section>
  );
};

export default Hero;