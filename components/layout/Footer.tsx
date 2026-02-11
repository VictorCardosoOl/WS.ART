import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, MessageCircle, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-stone-950 text-stone-400 overflow-hidden font-sans border-t border-stone-900">
      
      {/* 1. TEXTURA DE RUÍDO ORGÂNICO (SVG Inline) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.6" 
              stitchTiles="stitch" 
              numOctaves="3"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 2. TIPOGRAFIA DE FUNDO (Massiva) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-0 pointer-events-none select-none flex justify-center items-end leading-none overflow-hidden">
        {/* COR AJUSTADA: de text-stone-900 opacity-30 para text-stone-800 opacity-50 (Mais claro) */}
        <span className="font-serif text-[18vw] text-stone-800 opacity-50 tracking-tight whitespace-nowrap mix-blend-overlay blur-[2px]">
          SIQUEIRA
        </span>
      </div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* 3. GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-r border-stone-800/50">
            
            {/* COLUNA 1: IDENTIDADE */}
            <div className="p-12 border-b lg:border-b-0 border-stone-800/50 flex flex-col justify-between h-full min-h-[300px]">
                <div>
                    <h2 className="font-serif text-4xl text-stone-100 leading-none mb-2">
                        William<br/>Siqueira
                    </h2>
                    <p className="font-serif italic text-stone-600 text-lg">
                        Tattoo Art Studio
                    </p>
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-widest text-stone-600 mb-4">
                        Conceito
                    </p>
                    <p className="text-xs leading-relaxed text-stone-500 max-w-[200px]">
                        Redefinindo a anatomia através de narrativas neotradicionais e arte perene.
                    </p>
                </div>
            </div>

            {/* COLUNA 2: LOCAL & CTA */}
            <div className="p-12 border-b lg:border-b-0 lg:border-l border-stone-800/50 flex flex-col justify-between h-full min-h-[300px]">
                <div>
                    <div className="flex items-start gap-3 mb-6">
                        <MapPin size={16} className="text-[#754548] mt-1 shrink-0" />
                        <div>
                            <p className="text-stone-300 font-serif text-lg">Estúdio Privado</p>
                            <p className="text-xs text-stone-500 mt-1 uppercase tracking-wide">Av. Paulista, São Paulo - SP</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Mail size={16} className="text-[#754548] mt-1 shrink-0" />
                        <div>
                             <a href="mailto:contato@williamsiqueira.art" className="text-stone-300 hover:text-white transition-colors text-sm">
                                hello@williamsiqueira.art
                             </a>
                        </div>
                    </div>
                </div>

                <a href="#booking" className="group inline-flex items-center justify-between w-full py-4 border-b border-stone-800 hover:border-stone-500 transition-colors">
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-300 group-hover:text-white">
                        Iniciar Projeto
                    </span>
                    <ArrowUpRight size={16} className="text-stone-500 group-hover:text-[#754548] transition-colors" />
                </a>
            </div>

            {/* COLUNA 3: SOCIAL */}
            <div className="p-12 border-b md:border-b-0 lg:border-l border-stone-800/50 flex flex-col h-full min-h-[300px]">
                <p className="text-[10px] uppercase tracking-widest text-stone-600 mb-8">
                    Conexão
                </p>
                <div className="flex flex-col gap-6">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-stone-400 hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-[#754548] transition-colors">
                            <Instagram size={14} />
                        </div>
                        <span className="text-sm font-medium">Instagram</span>
                    </a>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-stone-400 hover:text-white transition-colors group">
                         <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-[#754548] transition-colors">
                            <MessageCircle size={14} />
                        </div>
                        <span className="text-sm font-medium">WhatsApp</span>
                    </a>
                    <a href="#" className="flex items-center gap-4 text-stone-400 hover:text-white transition-colors group">
                         <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-[#754548] transition-colors">
                            <ExternalLink size={14} />
                        </div>
                        <span className="text-sm font-medium">Press Kit</span>
                    </a>
                </div>
            </div>

            {/* COLUNA 4: NAVEGAÇÃO & CRÉDITOS */}
            <div className="p-12 lg:border-l border-stone-800/50 flex flex-col justify-between h-full min-h-[300px]">
                <div>
                     <p className="text-[10px] uppercase tracking-widest text-stone-600 mb-8">
                        Menu
                    </p>
                    <nav className="flex flex-col gap-3">
                        {['Início', 'O Processo', 'Portfólio', 'Flash Day', 'FAQ'].map((item) => (
                            <Link 
                                key={item} 
                                to={item === 'Início' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                                className="text-sm text-stone-400 hover:text-white hover:translate-x-2 transition-all duration-300 w-fit"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="pt-8 mt-8 border-t border-stone-900">
                    <p className="text-[10px] text-stone-700 uppercase tracking-widest flex flex-col gap-1">
                        <span>© {currentYear} William Siqueira.</span>
                        <span className="opacity-50">All rights reserved.</span>
                    </p>
                </div>
            </div>

        </div>
        
        {/* BARRA INFERIOR DECORATIVA */}
        <div className="w-full h-2 bg-stone-900/50 mt-12 mb-12 flex items-center justify-center overflow-hidden">
             <div className="w-full h-[1px] bg-stone-800"></div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;