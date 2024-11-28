import React from 'react';
import { Box } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2 group">
      <div className="relative">
        <Box className="w-8 h-8 text-red-600 relative z-10 animate-spin-slow group-hover:animate-bounce-subtle" />
        
        {/* Enhanced spinning border effect */}
        <div className="absolute inset-0 w-8 h-8 border border-red-600/40 rounded-sm animate-spin-slow transform-gpu"></div>
        <div className="absolute inset-0 w-8 h-8 border border-red-600/20 rounded-sm animate-rotate-reverse transform-gpu"></div>
        
        {/* Enhanced hover effects */}
        <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors duration-300 rounded-sm animate-pulse-glow"></div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-red-600/20 rounded-sm blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <span className="text-xl font-bold group-hover:text-red-600 transition-colors duration-300 group-hover:animate-glitch-text">
        Black Box Analytix
      </span>
    </div>
  );
}