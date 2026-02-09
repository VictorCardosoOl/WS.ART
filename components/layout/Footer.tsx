import React from 'react';
import { Instagram, ArrowUpRight, MessageCircle, Twitter, Facebook } from 'lucide-react';
import Magnetic from '../ui/Magnetic';
import Marquee from '../ui/Marquee';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white pt-24 md:pt-32 pb-0 font-sans overflow-hidden">
      
      {/* SEPARATOR: INVERTED CURVE FROM LIGHT (BOOKING SECTION) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
         <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] fill-[#FAF7F7]">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="opacity-100"></path>
         </svg>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 md:gap-y-16 border-b border-stone-800 pb-12 md:pb-16">
          
          {/* Column 1: Brand & Info */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-black text-xl flex-shrink-0">
                  W
                </div>
                <h3 className="text-xs font-bold tracking-widest uppercase leading-tight text-stone-300">
                  INTERVENÇÕES ARTÍSTICAS ÚNICAS //<br/>
                  EXPERIÊNCIAS IMERSIVAS
                </h3>
              </div>
              
              <p className="text-stone-500 text-sm leading-relaxed max-w-sm mb-8 md:mb-12 font-light">
                Fundada por William Siqueira, unimos décadas de prática artística e visão neotradicional, redefinindo as possibilidades da arte na pele e no ambiente construído.
              </p>
            </div>
            
            <div className="space-y-4 text-sm text-stone-400">
              <p className="font-serif italic text-lg text-white">Estúdio Privado, São Paulo - SP</p>
              <a href="mailto:contato@wsart.com" className="block text-white hover:text-stone-300 transition-colors tracking-wide">hello@williamsiqueira.art</a>
              
              <div className="flex gap-4 mt-6 pt-6 border-t border-stone-800 w-fit">
                <Magnetic>
                    <a href="#" className="hover:text-white transition-colors p-2 -ml-2"><Instagram size={20} /></a>
                </Magnetic>
                <Magnetic>
                    <a href="#" className="hover:text-white transition-colors p-2"><Twitter size={20} /></a>
                </Magnetic>
                <Magnetic>
                    <a href="#" className="hover:text-white transition-colors p-2"><Facebook size={20} /></a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-4 flex flex-col">
            {[
              { name: 'INÍCIO', link: '/' },
              { name: 'O RITUAL', link: '/ritual' },
              { name: 'GALERIA', link: '/' }, // Aponta para Home pois a galeria está lá
              { name: 'FLASH DAY', link: '/' }, // Aponta para Home
            ].map((item, i) => (
              <Link 
                key={i} 
                to={item.link}
                className="group flex justify-between items-center py-5 md:py-6 border-b border-stone-800 first:border-t hover:pl-4 transition-all duration-300 cursor-pointer"
              >
                <span className="tracking-[0.2em] uppercase text-xs font-bold text-stone-400 group-hover:text-white transition-colors">{item.name}</span>
                <ArrowUpRight size={16} className="text-stone-600 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </Link>
            ))}
             <a 
                href="#booking"
                className="group flex justify-between items-center py-5 md:py-6 border-b border-stone-800 hover:pl-4 transition-all duration-300 cursor-pointer"
              >
                <span className="tracking-[0.2em] uppercase text-xs font-bold text-white">ENTRE EM CONTATO</span>
                <ArrowUpRight size={16} className="text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
          </div>

          {/* Column 3: CTA */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-[1.1] mb-4 md:mb-6">
              Pronto para dar início a uma <span className="italic text-stone-500">sessão de descoberta?</span>
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-8">
              Compartilhe suas ideias conosco e começaremos a transformar sua visão em realidade hoje mesmo.
            </p>
            
            <div className="mt-auto flex justify-start md:justify-end">
               <Magnetic strength={0.5}>
                   <a 
                     href="https://wa.me/5511999999999" 
                     target="_blank" 
                     rel="noreferrer"
                     className="flex items-center gap-3 text-white border border-stone-800 px-6 py-4 rounded-full hover:bg-white hover:text-black transition-all group"
                   >
                     <span className="uppercase tracking-widest text-xs font-bold">Iniciar conversa</span>
                     <MessageCircle size={20} className="group-hover:scale-110 transition-transform"/>
                   </a>
               </Magnetic>
            </div>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="py-12 border-b border-stone-800 overflow-hidden opacity-30">
             <Marquee baseVelocity={2}>
                <span className="text-6xl md:text-8xl font-serif italic text-stone-700 px-8">Neotraditional</span>
                <span className="text-6xl md:text-8xl font-sans font-bold text-stone-800 px-8 stroke-text">·</span>
                <span className="text-6xl md:text-8xl font-serif italic text-stone-700 px-8">Fine Art</span>
                <span className="text-6xl md:text-8xl font-sans font-bold text-stone-800 px-8 stroke-text">·</span>
                <span className="text-6xl md:text-8xl font-serif italic text-stone-700 px-8">São Paulo</span>
                <span className="text-6xl md:text-8xl font-sans font-bold text-stone-800 px-8 stroke-text">·</span>
                <span className="text-6xl md:text-8xl font-serif italic text-stone-700 px-8">Exclusividade</span>
                <span className="text-6xl md:text-8xl font-sans font-bold text-stone-800 px-8 stroke-text">·</span>
             </Marquee>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 md:pt-12 flex flex-col md:flex-row items-end justify-between relative">
          
          {/* Small Links Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-[10px] uppercase tracking-wider text-stone-600 mb-12 md:mb-16 w-full md:w-auto relative z-10">
             <Link to="/ritual" className="hover:text-white transition-colors">Guia de cuidados</Link>
             <Link to="/" className="hover:text-white transition-colors">Showroom</Link>
             <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
             <a href="#" className="hover:text-white transition-colors">Termos e Condições</a>
          </div>
          
          {/* Massive Brand Name */}
          <div className="w-full text-right relative h-auto overflow-visible pb-2 md:pb-4">
             <h1 className="text-[17vw] leading-[0.75] font-black text-[#1a1a1a] tracking-tighter select-none pointer-events-none translate-y-[5%]">
               SIQUEIRA
             </h1>
             <div className="absolute bottom-6 md:bottom-12 left-0 md:left-auto md:right-0 w-full md:w-auto text-center md:text-right z-20">
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone-600">© 2024 William Siqueira Art Ltd.</p>
             </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;