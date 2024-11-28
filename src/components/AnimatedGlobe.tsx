import React from 'react';
import { Globe2 } from 'lucide-react';

interface AnimatedGlobeProps {
  mousePosition: { x: number; y: number };
  scrollOpacity: number;
}

export function AnimatedGlobe({ mousePosition, scrollOpacity }: AnimatedGlobeProps) {
  return (
    <div 
      className="absolute opacity-20 transform-gpu transition-transform duration-200 ease-out"
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
      }}
    >
      <Globe2 
        size={600} 
        className="text-red-600 animate-spin-slow" 
        style={{ 
          filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.3))',
          opacity: scrollOpacity,
        }}
      />
    </div>
  );
}