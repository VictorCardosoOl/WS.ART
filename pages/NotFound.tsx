import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0c0a09] text-white flex flex-col items-center justify-center relative overflow-hidden px-6">
        
        {/* Ink Blob Background (CSS/SVG) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
             <div className="w-[800px] h-[800px] bg-stone-800 rounded-full blur-[100px] mix-blend-screen animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center">
            <h1 className="text-[12rem] md:text-[20rem] font-serif leading-none text-[#1c1917] select-none text-shadow-glow">
                404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <p className="font-serif text-3xl md:text-5xl italic text-stone-200 mb-6">
                    "Algumas histórias não devem ser encontradas."
                </p>
                <p className="font-sans text-xs uppercase tracking-widest text-[#754548] mb-12">
                    Você se perdeu na tinta.
                </p>
                
                <Link 
                    to="/" 
                    className="inline-block px-8 py-4 border border-stone-700 hover:border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold"
                >
                    Voltar à Superfície
                </Link>
            </div>
        </div>

        {/* Noise Texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.1] pointer-events-none"></div>
      </div>
    </PageTransition>
  );
};

export default NotFound;