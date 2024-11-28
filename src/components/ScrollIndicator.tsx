import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  scrollOpacity: number;
  onClick?: () => void;
}

export function ScrollIndicator({
  scrollOpacity,
  onClick,
}: ScrollIndicatorProps) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer"
      style={{ opacity: scrollOpacity }}
      onClick={onClick}
    >
      <div className="text-sm text-white/40 animate-pulse">
        Scroll to Explore
      </div>
      <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2 relative overflow-hidden group hover:border-red-600/50 transition-colors duration-300">
        <div className="w-1 h-3 bg-red-600 rounded-full animate-bounce relative z-10 group-hover:bg-red-500" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/20 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </div>
    </div>
  );
}
