import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-rose-50 bg-noise pt-32 md:pt-44 pb-0">
      
      {/* Decorative Gradient Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-pulse pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col">
        
        {/* Top Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 md:mb-12">
          {/* Empty Left Space */}
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
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 text-xs md:text-sm font-bold tracking-widest uppercase text-stone-900 mt-auto mb-20 md:mb-32 items-end relative z-20">
          
          {/* Studio Location - Lifted up */}
          <div className="col-span-1 md:col-span-4 text-left animate-fade-in delay-300 pb-8 md:pb-16">
            Estúdio Privado<br/>São Paulo, Brasil
          </div>
          
          {/* Middle Spacer (Old text removed) */}
          <div className="hidden md:block md:col-span-4"></div>
          
          {/* CTA Circle */}
          <div className="col-span-2 md:col-span-4 flex justify-center md:justify-end mt-6 md:mt-0 animate-fade-in delay-700">
            <a href="#booking" className="group relative inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-stone-800 hover:bg-stone-900 hover:text-white transition-all duration-300 cursor-pointer bg-rose-50/50 backdrop-blur-sm">
              <span className="font-serif text-xl italic relative z-10 group-hover:scale-110 transition-transform">Orçar<br/>Projeto</span>
              <svg className="absolute w-full h-full text-stone-800 group-hover:text-white transition-colors opacity-0 group-hover:opacity-20" viewBox="0 0 100 100">
                 <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Massive Bottom Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden select-none pointer-events-none flex justify-center items-end leading-none z-0">
        <h1 className="text-[17vw] md:text-[19vw] font-black text-stone-900 text-center tracking-tighter animate-slide-up whitespace-nowrap leading-[0.8] transform -translate-y-6 md:-translate-y-10">
          SIQUEIRA
        </h1>
        
        {/* Overlay texture */}
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-50"></div>
      </div>

    </section>
  );
};

export default Hero;