import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  delay?: number;
  className?: string;
  color?: string;
  initialDelay?: number;
  glitchInterval?: number;
  glitchDuration?: number;
}

export function GlitchText({ 
  text, 
  delay = 0, 
  className = '',
  color = 'white',
  initialDelay = 0,
  glitchInterval = 3000,
  glitchDuration = 150
}: GlitchTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [currentText, setCurrentText] = useState('');
  
  useEffect(() => {
    // Initial appearance delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      
      // Enhanced typewriter effect with variable speed
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index <= text.length) {
          setCurrentText(text.slice(0, index));
          index++;
          // Random typing speed variation
          if (Math.random() > 0.7) {
            setTimeout(() => {
              setIsGlitching(true);
              setTimeout(() => setIsGlitching(false), 50);
            }, 20);
          }
        } else {
          clearInterval(typeTimer);
        }
      }, 50);

      return () => clearInterval(typeTimer);
    }, initialDelay);
    
    return () => clearTimeout(showTimer);
  }, [text, initialDelay]);

  useEffect(() => {
    if (!isVisible) return;

    // Enhanced random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true);
        // Multiple micro-glitches
        const microGlitches = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < microGlitches; i++) {
          setTimeout(() => {
            setIsGlitching(false);
            setTimeout(() => setIsGlitching(true), 50);
          }, i * 100);
        }
        setTimeout(() => setIsGlitching(false), microGlitches * 100 + 50);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [isVisible]);

  return (
    <div 
      className={`
        relative
        transition-opacity duration-700
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
    >
      <h1 className={`text-4xl md:text-6xl font-bold relative inline-block text-${color}`}>
        {/* Main text */}
        <span className={`
          relative inline-block
          ${isGlitching ? 'animate-glitch' : ''}
        `}>
          {currentText}
          {/* Enhanced cursor effect */}
          {currentText.length < text.length && (
            <span className="animate-pulse ml-1 opacity-75">|</span>
          )}
        </span>
        
        {/* Enhanced glitch layers */}
        {isGlitching && (
          <>
            <span 
              className="absolute top-0 left-0 w-full text-red-600 animate-glitch-1 mix-blend-screen"
              aria-hidden="true"
            >
              {currentText}
            </span>
            <span 
              className="absolute -top-[1px] -left-[1px] w-full text-white animate-glitch-2 mix-blend-multiply"
              aria-hidden="true"
            >
              {currentText}
            </span>
          </>
        )}

        {/* Enhanced highlight effect */}
        <span 
          className={`
            absolute inset-0
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            animate-pulse-slow
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          `}
        />
      </h1>
    </div>
  );
}