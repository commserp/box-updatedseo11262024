import React from 'react';

interface DataPointsProps {
  scrollOpacity: number;
}

export function DataPoints({ scrollOpacity }: DataPointsProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-red-600 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: scrollOpacity * 0.6,
            animationDuration: `${2 + Math.random() * 2}s`,
            animationDelay: `${i * 100}ms`
          }}
        >
          <div className="absolute w-2 h-2 bg-red-600/30 rounded-full -inset-0.5 animate-ping" />
        </div>
      ))}
    </div>
  );
}