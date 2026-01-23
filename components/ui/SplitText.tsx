import React from 'react';

interface SplitTextProps {
  children: string;
  className?: string;
  wordClass?: string;
  charClass?: string;
}

export const SplitText: React.FC<SplitTextProps> = ({ 
  children, 
  className = "", 
  wordClass = "", 
  charClass = "" 
}) => {
  if (!children) return null;

  const words = children.split(" ");

  return (
    <span className={`inline-block leading-tight ${className}`}>
      {words.map((word, i) => (
        <span key={i} className={`inline-block overflow-hidden align-top ${wordClass}`}>
          <span className="inline-block relative">
            {word.split("").map((char, j) => (
              <span 
                key={j} 
                className={`inline-block relative transform will-change-transform ${charClass}`}
                style={{ display: 'inline-block' }}
              >
                {char}
              </span>
            ))}
          </span>
          {/* Add space after word unless it's the last one */}
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};

export default SplitText;