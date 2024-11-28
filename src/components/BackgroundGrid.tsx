import React from 'react';

interface BackgroundGridProps {
  mousePosition: { x: number; y: number };
  scrollOpacity: number;
}

export function BackgroundGrid({ mousePosition, scrollOpacity }: BackgroundGridProps) {
  return (
    <div 
      className="absolute inset-0 transition-transform duration-400 ease-out"
      style={{ 
        backgroundImage: `
          linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: scrollOpacity * 0.3,
        transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
      }}
    />
  );
}