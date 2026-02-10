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
    <span 
      className={`inline-block leading-tight ${className}`} 
      style={style}
      aria-label={children} // Provide full text for screen readers
    >
      {words.map((word, i) => (
        <span 
          key={`word-${i}-${word}`} 
          className={`inline-block whitespace-nowrap ${wordClass}`}
          aria-hidden="true" // Hide fragments from screen readers
        >
          {word.split("").map((char, j) => (
            <span 
              key={`char-${i}-${j}-${char}`} 
              className={`inline-block relative ${charClass}`}
            >
              {char}
            </span>
          ))}
          {/* Add spacing except for the last word */}
          {i < words.length - 1 && <span className="inline-block w-[0.25em]">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};

export default SplitText;