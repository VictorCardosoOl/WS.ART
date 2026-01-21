import React from 'react';

export const TornPaperTop = ({ className = "" }: { className?: string }) => (
  <div className={`absolute top-0 left-0 w-full overflow-hidden leading-none z-20 transform -translate-y-[99%] ${className}`}>
    <svg 
      viewBox="0 0 1200 50" 
      preserveAspectRatio="none" 
      className="w-full h-12 md:h-20 fill-[#1a1919]"
    >
      <path d="M0,50 L1200,50 L1200,0 C1150,15 1100,20 1050,10 C950,-10 900,25 800,10 C700,-5 600,20 500,5 C400,-10 350,25 250,10 C150,-5 50,20 0,0 Z" />
    </svg>
    {/* Shadow layer for depth */}
    <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-black/20 to-transparent"></div>
  </div>
);

export const TornPaperBottom = ({ className = "" }: { className?: string }) => (
  <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 transform translate-y-[99%] ${className}`}>
     <svg 
      viewBox="0 0 1200 50" 
      preserveAspectRatio="none" 
      className="w-full h-12 md:h-20 fill-[#1a1919]"
    >
      <path d="M0,0 L1200,0 L1200,50 C1150,35 1100,30 1050,40 C950,60 900,25 800,40 C700,55 600,30 500,45 C400,60 350,25 250,40 C150,55 50,30 0,50 Z" />
    </svg>
    <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-black/20 to-transparent"></div>
  </div>
);

export const BrushStrokeTransition = ({ className = "" }: { className?: string }) => (
  <div className={`absolute top-0 left-0 w-full overflow-hidden leading-none z-10 -translate-y-1/2 ${className}`}>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-32 md:h-64 opacity-20">
         <path fill="#754548" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
      </svg>
  </div>
);

export const GraphiteScribble = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 400 400" 
    className={`absolute pointer-events-none opacity-[0.03] mix-blend-multiply ${className}`}
    preserveAspectRatio="xMidYMid meet"
  >
     <path 
        d="M50,200 Q100,100 200,200 T350,200 T200,350 T50,200 M60,180 Q150,50 250,250 T380,180" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeDasharray="4 2"
     />
     <path 
        d="M100,300 C150,350 250,350 300,300 S 350,200 300,150 S 150,150 100,200" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
     />
  </svg>
);

export const InkSplatter = ({ className = "" }: { className?: string }) => (
    <svg 
        viewBox="0 0 200 200" 
        className={`absolute pointer-events-none mix-blend-multiply ${className}`}
    >
        <defs>
            <filter id="splatter">
                <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
            </filter>
        </defs>
        <circle cx="100" cy="100" r="40" fill="currentColor" filter="url(#splatter)" opacity="0.1" />
        <circle cx="140" cy="80" r="10" fill="currentColor" filter="url(#splatter)" opacity="0.08" />
        <circle cx="60" cy="120" r="15" fill="currentColor" filter="url(#splatter)" opacity="0.06" />
    </svg>
);
