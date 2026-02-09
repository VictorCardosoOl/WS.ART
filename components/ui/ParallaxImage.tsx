import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className = "", priority = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Rastreamento do Scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 2. Física de Mola (Spring Physics) para suavidade e "peso"
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15,    // Fricção (quanto maior, menos balança)
    stiffness: 80,  // Rigidez (velocidade de resposta)
    mass: 0.8       // Peso (inércia)
  });

  // 3. Parallax (Movimento Vertical Inverso)
  const y = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);

  // 4. Mask Reveal (Recorte que abre)
  // Inicia levemente recortado nas bordas e abre para o tamanho total
  // Usamos 'round' para manter o estilo arredondado do design system
  const clipPath = useTransform(
    smoothProgress,
    [0.05, 0.65], // Trigger points: começa a abrir logo que entra, termina em 65% da tela
    ["inset(12% 8% 12% 8% round 12px)", "inset(0% 0% 0% 0% round 16px)"]
  );

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      <motion.div 
        className="w-full h-full"
        style={{ clipPath }} // Aplica o recorte dinâmico
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover will-change-transform"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          style={{
            y: y, // Aplica o parallax
            scale: 1.25, // Zoom necessário para evitar bordas brancas durante o movimento
          }} 
        />
        
        {/* Camada de Overlay opcional para profundidade extra */}
        <div className="absolute inset-0 bg-[#1c1917]/5 mix-blend-multiply pointer-events-none"></div>
      </motion.div>
    </div>
  );
};

export default ParallaxImage;