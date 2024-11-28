import React from 'react';

interface OrbitalRingsProps {
  mousePosition: { x: number; y: number };
  scrollOpacity: number;
}

export function OrbitalRings({ mousePosition, scrollOpacity }: OrbitalRingsProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {[800, 600, 400].map((size, index) => (
        <div
          key={size}
          className={`
            absolute rounded-full border border-red-600/${20 + (index * 10)}
            ${index % 2 === 0 ? 'animate-spin-slow' : 'animate-rotate-reverse'}
            transform-gpu transition-transform duration-300 ease-out
          `}
          style={{ 
            width: `${size}px`,
            height: `${size}px`,
            opacity: scrollOpacity,
            transform: `
              translate(${mousePosition.x * (0.1 + index * 0.1)}px, 
              ${mousePosition.y * (0.1 + index * 0.1)}px)
              rotate(${index % 2 === 0 ? '0deg' : '180deg'})
            `
          }}
        />
      ))}
    </div>
  );
}