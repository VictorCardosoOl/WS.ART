import React from 'react';

interface SplitTextProps {
  children: string;
  className?: string;
  wordClass?: string;
  charClass?: string;
  style?: React.CSSProperties;
}

export const SplitText: React.FC<SplitTextProps> = ({ 
  children, 
  className = "", 
  wordClass = "", 
  charClass = "",
  style
}) => {
  if (!children) return null;

  const words = children.split(" ");

  return (
    <span className={`inline-block leading-tight ${className}`} style={style}>
      {words.map((word, i) => (
        <span key={i} className={`inline-block whitespace-nowrap ${wordClass}`}>
          {word.split("").map((char, j) => (
            <span 
              key={j} 
              className={`inline-block relative ${charClass}`}
            >
              {char}
            </span>
          ))}
          {/* Adiciona espaço após a palavra, exceto na última. 
              Usamos um span com largura para garantir o espaçamento correto em layouts justificados/flex */}
          {i < words.length - 1 && <span className="inline-block w-[0.25em]">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};

export default SplitText;